'use client';

import { useState, useMemo } from 'react';
import { Search, GitCommit, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface Commit {
  sha: string;
  message: string;
  author: string;
  date: string;
  timestamp: number;
  url: string;
}

interface Project {
  name: string;
  path: string;
  repo_url: string;
  commit_count: number;
  commits: Commit[];
}

interface BranchData {
  rom_id: string;
  branch: string;
  generated_at: string;
  since_date: string;
  total_projects: number;
  total_commits: number;
  projects: Project[];
  romDisplayName: string;
  branchDisplayName: string;
}

interface RomConfig {
  roms: Array<{
    id: string;
    displayName: string;
    branches: Array<{
      id: string;
      displayName: string;
      dataPath: string;
    }>;
  }>;
}

export default function ChangesDisplay({ 
  config, 
  allData 
}: { 
  config: RomConfig;
  allData: Record<string, BranchData | null>;
}) {
  const firstAvailableKey = Object.keys(allData).find(key => allData[key] !== null);
  
  const [selectedKey, setSelectedKey] = useState(firstAvailableKey || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'commits' | 'name' | 'recent'>('commits');

  const data = allData[selectedKey];
  const [selectedRomId, selectedBranchId] = selectedKey.split('/');
  const selectedRom = config.roms.find(rom => rom.id === selectedRomId);

  const filteredAndSortedProjects = useMemo(() => {
    if (!data || !data.projects) return [];
    
    let projects = [...data.projects];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      projects = projects.filter(project => 
        project.path.toLowerCase().includes(term) ||
        project.name.toLowerCase().includes(term) ||
        project.commits.some(commit => 
          commit.message.toLowerCase().includes(term) ||
          commit.author.toLowerCase().includes(term)
        )
      );
    }
    
    projects.sort((a, b) => {
      if (sortBy === 'commits') return b.commit_count - a.commit_count;
      if (sortBy === 'name') return a.path.localeCompare(b.path);
      if (sortBy === 'recent') {
        const aRecent = Math.max(...a.commits.map(c => c.timestamp));
        const bRecent = Math.max(...b.commits.map(c => c.timestamp));
        return bRecent - aRecent;
      }
      return 0;
    });
    
    return projects;
  }, [data, searchTerm, sortBy]);

  const toggleProject = (projectPath: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectPath)) {
      newExpanded.delete(projectPath);
    } else {
      newExpanded.add(projectPath);
    }
    setExpandedProjects(newExpanded);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() / 1000) - timestamp);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    return `${months}mo ago`;
  };

  const handleRomChange = (romId: string) => {
    const rom = config.roms.find(r => r.id === romId);
    if (rom && rom.branches.length > 0) {
      const firstAvailableBranch = rom.branches.find(branch => {
        const key = `${romId}/${branch.id}`;
        return allData[key] !== null;
      });
      
      if (firstAvailableBranch) {
        setSelectedKey(`${romId}/${firstAvailableBranch.id}`);
      }
    }
  };

  const handleBranchChange = (branchId: string) => {
    if (selectedRomId) {
      setSelectedKey(`${selectedRomId}/${branchId}`);
    }
  };

  if (!data) {
    return (
      <div className="text-center text-slate-400 py-20">
        <p className="text-lg">No data available for selected ROM/branch.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* ROM & Branch Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            ROM
          </label>
          <select
            value={selectedRomId}
            onChange={(e) => handleRomChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-slate-500"
          >
            {config.roms.map((rom) => {
              const hasAnyData = rom.branches.some(branch => {
                const key = `${rom.id}/${branch.id}`;
                return allData[key] !== null;
              });
              
              return (
                <option 
                  key={rom.id} 
                  value={rom.id}
                  disabled={!hasAnyData}
                >
                  {rom.displayName}
                  {!hasAnyData && ' (No data)'}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Branch
          </label>
          <select
            value={selectedBranchId}
            onChange={(e) => handleBranchChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-slate-500"
            disabled={!selectedRom}
          >
            {selectedRom?.branches.map((branch) => {
              const key = `${selectedRomId}/${branch.id}`;
              const branchData = allData[key];
              const hasData = branchData !== null;
              
              return (
                <option 
                  key={branch.id} 
                  value={branch.id}
                  disabled={!hasData}
                >
                  {branch.displayName}
                  {hasData && branchData ? ` (${branchData.total_commits} commits)` : ' (No data)'}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">{data.total_projects}</div>
          <div className="text-sm text-slate-400 mt-1">Projects</div>
        </div>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">{data.total_commits}</div>
          <div className="text-sm text-slate-400 mt-1">Commits (90d)</div>
        </div>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">
            {data.projects.reduce((acc, proj) => {
              const recent = proj.commits.filter(c => {
                const daysSince = (Date.now() / 1000 - c.timestamp) / 86400;
                return daysSince <= 1;
              });
              return acc + recent.length;
            }, 0)}
          </div>
          <div className="text-sm text-slate-400 mt-1">Last 24 Hours</div>
        </div>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">{getTimeAgo(Math.floor(new Date(data.generated_at).getTime() / 1000))}</div>
          <div className="text-sm text-slate-400 mt-1">Last Updated</div>
        </div>
      </div>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"
          />
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-slate-500"
        >
          <option value="commits">Most Commits</option>
          <option value="recent">Recently Updated</option>
          <option value="name">Alphabetical</option>
        </select>
      </div>

      {/* Results Count */}
      <div className="text-sm text-slate-400">
        {filteredAndSortedProjects.length} {filteredAndSortedProjects.length === 1 ? 'project' : 'projects'}
      </div>

      {/* Projects List */}
      <div className="space-y-3">
        {filteredAndSortedProjects.length === 0 ? (
          <div className="text-center text-slate-400 py-12 bg-slate-800 border border-slate-700 rounded-lg">
            <p>No projects found.</p>
          </div>
        ) : (
          filteredAndSortedProjects.map((project) => {
            const isExpanded = expandedProjects.has(project.path);
            const mostRecentCommit = project.commits[0];
            
            return (
              <div
                key={project.path}
                className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleProject(project.path)}
                  className="w-full px-4 py-3 hover:bg-slate-750 transition-colors text-left"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {isExpanded ? (
                        <ChevronUp className="text-slate-400" size={18} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={18} />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="font-medium text-white break-all">{project.path}</h3>
                        <span className="text-sm text-slate-400">({project.commit_count})</span>
                      </div>
                      {mostRecentCommit && (
                        <div className="text-sm text-slate-400 mt-1">
                          {getTimeAgo(mostRecentCommit.timestamp)} · {mostRecentCommit.author}
                        </div>
                      )}
                    </div>
                    
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-white transition-colors mt-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-slate-700 bg-slate-850">
                    <div className="px-4 py-3 space-y-2">
                      {project.commits.map((commit) => (
                        <a
                          key={commit.sha}
                          href={commit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-slate-800 rounded hover:bg-slate-750 transition-colors group"
                        >
                          <div className="flex items-start gap-2 mb-1">
                            <GitCommit size={14} className="text-slate-500 mt-0.5 flex-shrink-0" />
                            <code className="text-xs text-slate-400 font-mono">{commit.sha}</code>
                            <ExternalLink size={12} className="text-slate-500 mt-0.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm text-white mb-2">{commit.message}</p>
                          <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span>{commit.author}</span>
                            <span>·</span>
                            <span>{getTimeAgo(commit.timestamp)}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
