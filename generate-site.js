#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const { DOMParser } = require('@xmldom/xmldom');

// Configuration for ROM projects
const ROM_PROJECTS = [
  {
    name: 'LineageOS',
    manifestUrl: 'https://raw.githubusercontent.com/LineageOS/android/lineage-22.2/default.xml',
    branch: 'lineage-22.2',
    id: 'lineageos',
    branches: ['lineage-23.0', 'lineage-22.2', 'lineage-19.1']
  },
  {
    name: 'Evolution X',
    manifestUrl: 'https://raw.githubusercontent.com/Evolution-X/manifest/bka/default.xml',
    branch: 'bka',
    id: 'evolutionx',
    branches: ['udc', 'vic']
  }
];

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OUTPUT_DIR = './dist';
const DAYS_BACK = 30;

class ROMMonitor {
  constructor() {
    this.allData = [];
  }

  async fetchUrl(url, headers = {}) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: {
          'User-Agent': 'ROM-Monitor/1.0',
          ...headers
        }
      };

      https.get(url, options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(data);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        });
      }).on('error', reject);
    });
  }

  async fetchGitHubAPI(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const headers = GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : {};
    
    try {
      const response = await this.fetchUrl(url, headers);
      return JSON.parse(response);
    } catch (error) {
      console.error(`GitHub API error for ${endpoint}:`, error.message);
      return null;
    }
  }

  parseManifest(xmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlContent, 'text/xml');
    
    const projects = [];
    const projectElements = doc.getElementsByTagName('project');
    
    for (let i = 0; i < projectElements.length; i++) {
      const project = projectElements[i];
      const name = project.getAttribute('name');
      const path = project.getAttribute('path') || name;
      const revision = project.getAttribute('revision');
      
      if (name && name.includes('/')) {
        projects.push({
          name,
          path,
          revision,
          fullName: name
        });
      }
    }
    
    return projects;
  }

  async getRecentCommits(repoFullName, branch = 'main') {
    const since = new Date();
    since.setDate(since.getDate() - DAYS_BACK);
    
    const endpoint = `/repos/${repoFullName}/commits?since=${since.toISOString()}&sha=${branch}&per_page=20`;
    const commits = await this.fetchGitHubAPI(endpoint);
    
    if (!commits) return [];
    
    return commits.map(commit => ({
      sha: commit.sha.substring(0, 7),
      fullSha: commit.sha,
      message: commit.commit.message.split('\n')[0],
      author: commit.commit.author.name,
      date: new Date(commit.commit.author.date),
      url: commit.html_url,
      rawDate: commit.commit.author.date
    }));
  }

  async processROMProject(project) {
    console.log(`Processing ${project.name}...`);
    
    try {
      // Fetch manifest
      const manifestContent = await this.fetchUrl(project.manifestUrl);
      const repositories = this.parseManifest(manifestContent);
      
      console.log(`Found ${repositories.length} repositories in ${project.name}`);
      
      const repoData = [];
      let processed = 0;
      
      // Process repositories in batches to avoid rate limiting
      for (const repo of repositories.slice(0, 30)) { // Limit for demo
        try {
          const commits = await this.getRecentCommits(repo.fullName, repo.revision || project.branch);
          
          if (commits.length > 0) {
            repoData.push({
              name: repo.name,
              path: repo.path,
              fullName: repo.fullName,
              commits,
              lastCommit: commits[0],
              totalCommits: commits.length
            });
          }
          
          processed++;
          if (processed % 5 === 0) {
            console.log(`  Processed ${processed}/${Math.min(30, repositories.length)} repositories...`);
          }
          
          // Rate limiting: wait 150ms between requests
          await new Promise(resolve => setTimeout(resolve, 150));
          
        } catch (error) {
          console.warn(`  Failed to process ${repo.fullName}:`, error.message);
        }
      }
      
      // Sort by most recent activity
      repoData.sort((a, b) => new Date(b.lastCommit.date) - new Date(a.lastCommit.date));
      
      return {
        ...project,
        repositories: repoData,
        totalRepos: repositories.length,
        processedRepos: repoData.length,
        lastUpdate: new Date().toISOString()
      };
      
    } catch (error) {
      console.error(`Failed to process ${project.name}:`, error);
      return null;
    }
  }

  formatCommitDate(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    return date.toLocaleDateString('en-US', options);
  }

  generateHTML(data) {
    const validProjects = data.filter(project => project !== null);
    
    const romOptions = ROM_PROJECTS.map(rom => 
      `<option value="${rom.id}">${rom.name}</option>`
    ).join('');

    const branchOptions = ROM_PROJECTS.map(rom => 
      rom.branches.map(branch => 
        `<option value="${rom.id}-${branch}" data-rom="${rom.id}">${rom.name} - ${branch}</option>`
      ).join('')
    ).join('');

    const projectSections = validProjects.map(project => {
      if (!project) return '';
      
      const repositories = project.repositories || [];
      
      const repoItems = repositories.map((repo, index) => `
        <div class="repo-section">
          <div class="repo-header" onclick="toggleRepo('${project.id}-repo-${index}')">
            <div class="repo-title">
              <span class="repo-name">${repo.name}</span>
              <span class="commit-count">${repo.totalCommits} commits</span>
            </div>
            <div class="repo-meta">
              <span class="last-commit-time">${this.timeAgo(repo.lastCommit.date)}</span>
              <span class="toggle-icon">▼</span>
            </div>
          </div>
          
          <div class="repo-commits" id="${project.id}-repo-${index}" style="display: none;">
            ${repo.commits.map(commit => `
              <div class="commit-item">
                <div class="commit-header">
                  <a href="${commit.url}" target="_blank" class="commit-hash">${commit.sha}</a>
                  <span class="commit-message">${commit.message}</span>
                </div>
                <div class="commit-meta">
                  <span class="commit-author">Author: ${commit.author}</span>
                  <span class="commit-date">Date: ${this.formatCommitDate(commit.rawDate)}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');

      return `
        <div class="project-card" data-project="${project.id}">
          <div class="project-header">
            <h2>${project.name}</h2>
            <div class="project-stats">
              <span class="stat">📦 ${project.processedRepos}/${project.totalRepos} repos</span>
              <span class="stat">🔄 ${new Date(project.lastUpdate).toLocaleString()}</span>
            </div>
          </div>
          
          <div class="project-content">
            <div class="activity-summary">
              <h3>Repository Activity (Last ${DAYS_BACK} days)</h3>
              <p class="summary-text">
                Showing ${repositories.length} repositories with recent commits. 
                Click on any repository to view detailed commit history.
              </p>
            </div>
            
            <div class="repositories">
              ${repositories.length === 0 ? '<p class="no-activity">No recent activity found</p>' : repoItems}
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AOSP ROM Monitor</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }
        
        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 2rem 0;
            text-align: center;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .header p {
            color: #666;
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }
        
        .controls {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .control-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
        
        .control-group label {
            font-weight: 600;
            color: #555;
            font-size: 0.9rem;
        }
        
        select, button {
            padding: 0.75rem 1rem;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            background: white;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        select:hover, select:focus,
        button:hover, button:focus {
            border-color: #667eea;
            outline: none;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        button {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            font-weight: 600;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .project-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .project-card.hidden {
            display: none;
        }
        
        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            gap: 1rem;
        }
        
        .project-header h2 {
            font-size: 2rem;
            color: #333;
        }
        
        .project-stats {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .stat {
            background: #f8f9fa;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            color: #666;
        }
        
        .activity-summary {
            margin-bottom: 2rem;
        }
        
        .activity-summary h3 {
            color: #555;
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }
        
        .summary-text {
            color: #777;
            line-height: 1.5;
        }
        
        .repo-section {
            border: 1px solid #e9ecef;
            border-radius: 8px;
            margin-bottom: 1rem;
            overflow: hidden;
        }
        
        .repo-header {
            background: #f8f9fa;
            padding: 1rem 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.3s ease;
        }
        
        .repo-header:hover {
            background: #e9ecef;
        }
        
        .repo-title {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .repo-name {
            font-weight: 600;
            color: #333;
            font-size: 1.1rem;
        }
        
        .commit-count {
            background: #667eea;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .repo-meta {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #666;
        }
        
        .last-commit-time {
            font-size: 0.9rem;
        }
        
        .toggle-icon {
            transition: transform 0.3s ease;
            font-size: 0.8rem;
        }
        
        .repo-section.expanded .toggle-icon {
            transform: rotate(180deg);
        }
        
        .repo-commits {
            background: white;
            max-height: 500px;
            overflow-y: auto;
        }
        
        .commit-item {
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #f1f3f4;
        }
        
        .commit-item:last-child {
            border-bottom: none;
        }
        
        .commit-header {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            margin-bottom: 0.5rem;
        }
        
        .commit-hash {
            background: #667eea;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            text-decoration: none;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.85rem;
            font-weight: 600;
            flex-shrink: 0;
            transition: background-color 0.3s ease;
        }
        
        .commit-hash:hover {
            background: #5a6fd8;
        }
        
        .commit-message {
            flex: 1;
            color: #333;
            font-weight: 500;
            line-height: 1.4;
        }
        
        .commit-meta {
            display: flex;
            gap: 2rem;
            font-size: 0.9rem;
            color: #666;
            margin-left: calc(4rem + 1rem); /* Align with commit message */
        }
        
        .commit-author,
        .commit-date {
            font-family: 'Monaco', 'Menlo', monospace;
        }
        
        .no-activity {
            text-align: center;
            color: #888;
            padding: 3rem;
            font-style: italic;
            background: #f8f9fa;
            border-radius: 8px;
        }
        
        .footer {
            text-align: center;
            padding: 2rem;
            color: rgba(255, 255, 255, 0.8);
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            .header {
                padding: 1rem 0;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .controls {
                flex-direction: column;
                align-items: center;
            }
            
            .project-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .repo-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }
            
            .repo-meta {
                align-self: flex-end;
            }
            
            .commit-header {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .commit-meta {
                margin-left: 0;
                flex-direction: column;
                gap: 0.25rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🤖 AOSP ROM Monitor</h1>
        <p>Tracking recent commits across custom ROM projects</p>
        
        <div class="controls">
            <div class="control-group">
                <label for="romSelect">Select ROM:</label>
                <select id="romSelect" onchange="filterProjects()">
                    <option value="all">All ROMs</option>
                    ${romOptions}
                </select>
            </div>
            
            <div class="control-group">
                <label for="branchSelect">Select Branch:</label>
                <select id="branchSelect" onchange="filterProjects()">
                    <option value="all">All Branches</option>
                    ${branchOptions}
                </select>
            </div>
            
            <div class="control-group">
                <label>&nbsp;</label>
                <button onclick="expandAll()">Expand All</button>
            </div>
            
            <div class="control-group">
                <label>&nbsp;</label>
                <button onclick="collapseAll()">Collapse All</button>
            </div>
        </div>
    </div>
    
    <div class="container">
        ${projectSections}
    </div>
    
    <div class="footer">
        <p>Last updated: ${new Date().toLocaleString()} | Monitoring ${validProjects.reduce((sum, p) => sum + p.processedRepos, 0)} repositories</p>
    </div>
</body>
</html>
`;
    <script>
        function toggleRepo(repoId) {
            const element = document.getElementById(repoId);
            const section = element.closest('.repo-section');
            
            if (element.style.display === 'none' || !element.style.display) {
                element.style.display = 'block';
                section.classList.add('expanded');
            } else {
                element.style.display = 'none';
                section.classList.remove('expanded');
            }
        }
        
        function expandAll() {
            document.querySelectorAll('.repo-commits').forEach(element => {
                element.style.display = 'block';
                element.closest('.repo-section').classList.add('expanded');
            });
        }
        
        function collapseAll() {
            document.querySelectorAll('.repo-commits').forEach(element => {
                element.style.display = 'none';
                element.closest('.repo-section').classList.remove('expanded');
            });
        }
        
        function filterProjects() {
            const romSelect = document.getElementById('romSelect').value;
            const branchSelect = document.ge
