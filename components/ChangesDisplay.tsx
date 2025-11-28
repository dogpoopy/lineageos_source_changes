'use client';

import { useState, useMemo } from 'react';
import { Search, GitCommit, Calendar, User, ExternalLink, ChevronDown, ChevronUp, TrendingUp, Clock, Filter, Copy, CheckCircle, BarChart3 } from 'lucide-react';

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
  // Find first available data
  const firstAvailableKey = Object.keys(allData).find(key => allData[key] !== null);
  
  const [selectedKey, setSelectedKey] = useState(firstAvailableKey || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'commits' | 'name' | 'recent'>('commits');
  const [copiedSha, setCopiedSha] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const data = allData[selectedKey];

  // Get current ROM and branch from selectedKey
  const [selectedRomId, selectedBranchId] = selectedKey.split('/');
  const selectedRom = config.roms.find(rom => rom.id === selectedRomId);

  const filteredAndSortedProjects = useMemo(() => {
    if (!data || !data.projects) return [];
    
    let projects = [...data.projects];
    
    // Filter
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
    
    // Sort
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

  const expandAll = () => {
    setExpandedProjects(new Set(filteredAndSortedProjects.map(p => p.path)));
  };

  const collapseAll = () => {
    setExpandedProjects(new Set());
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSha(text);
      setTimeout(() => setCopiedSha(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
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
    return `${days}d ago`;
  };

  const getActivityLevel = (count: number) => {
    if (count >= 100) return { color: 'bg-green-500', label: 'Very Active' };
    if (count >= 50) return { color: 'bg-blue-500', label: 'Active' };
    if (count >= 20) return { color: 'bg-yellow-500', label: 'Moderate' };
    return { color: 'bg-slate-500', label: 'Low' };
  };

  const handleRomChange = (romId: string) => {
    const rom = config.roms.find(r => r.id === romId);
    if (rom && rom.branches.length > 0) {
      // Find first available branch for this ROM
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

  // Calculate stats
  const recentCommitsCount = data?.projects.reduce((acc, proj) => {
    const recentCommits = proj.commits.filter(c => {
      const daysSince = (Date.now() / 1000 - c.timestamp) / 86400;
      return daysSince <= 1;
    });
    return acc + recentCommits.length;
  }, 0) || 0;

  const lastUpdateTime = data?.generated_at ? new Date(data.generated_at) : null;
  const hoursAgo = lastUpdateTime ? Math.floor((Date.now() - lastUpdateTime.getTime()) / 3600000) : 0;
  const lastUpdateText = hoursAgo < 1 ? 'just now' : hoursAgo < 24 ? `${hoursAgo}h ago` : `${Math.floor(hoursAgo / 24)}d ago`;

  if (!data) {
    return (
      <div className="text-center text-slate-400 py-20">
        <p className="text-xl">No data available for selected ROM/branch.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ROM & Branch Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ROM Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Select ROM
          </label>
          <select
            value={selectedRomId}
            onChange={(e) => handleRomChange(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition-all"
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

        {/* Branch Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Select Branch
          </label>
          <select
            value={selectedBranchId}
            onChange={(e) => handleBranchChange(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition-all"
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

      {/* Enhanced Stats Cards with Icons */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
          <div className="flex items-center justify-between mb-2">
            <div className="text-blue-400 text-sm font-medium">Total Projects</div>
            <BarChart3 className="text-blue-400" size={20} />
          </div>
          <div className="text-3xl font-bold text-white">{data.total_projects}</div>
          <div className="text-xs text-blue-300 mt-1">Tracked repositories</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
          <div className="flex items-center justify-between mb-2">
            <div className="text-purple-400 text-sm font-medium">Total Commits</div>
            <GitCommit className="text-purple-400" size={20} />
          </div>
          <div className="text-3xl font-bold text-white">{data.total_commits}</div>
          <div className="text-xs text-purple-300 mt-1">Last 90 days</div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
          <div className="flex items-center justify-between mb-2">
            <div className="text-green-400 text-sm font-medium">Active Today</div>
            <TrendingUp className="text-green-400" size={20} />
          </div>
          <div className="text-3xl font-bold text-white">{recentCommitsCount}</div>
          <div className="text-xs text-green-300 mt-1">Commits in 24h</div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30">
          <div className="flex items-center justify-between mb-2">
            <div className="text-orange-400 text-sm font-medium">Last Updated</div>
            <Clock className="text-orange-400" size={20} />
          </div>
          <div className="text-lg font-semibold text-white">{lastUpdateText}</div>
          <div className="text-xs text-orange-300 mt-1">{formatDate(data.generated_at)}</div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search projects, commits, or authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="commits">Most Commits</option>
            <option value="recent">Recently Updated</option>
            <option value="name">Alphabetical</option>
          </select>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white hover:bg-slate-700/50 transition-colors flex items-center gap-2"
          >
            <Filter size={18} />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center justify-between">
        <div className="text-slate-400 text-sm">
          Showing <span className="text-white font-semibold">{filteredAndSortedProjects.length}</span> of {data.total_projects} projects
        </div>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 text-xs bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded text-slate-300 transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 text-xs bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded text-slate-300 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredAndSortedProjects.length === 0 ? (
          <div className="text-center text-slate-400 py-12">
            <Search size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-xl">No projects found matching your search.</p>
          </div>
        ) : (
          filteredAndSortedProjects.map((project) => {
            const isExpanded = expandedProjects.has(project.path);
            const activity = getActivityLevel(project.commit_count);
            const mostRecentCommit = project.commits[0];
            
            return (
              <div
                key={project.path}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-all"
              >
                {/* Project Header */}
                <button
                  onClick={() => toggleProject(project.path)}
                  className="w-full px-4 sm:px-6 py-4 hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {isExpanded ? (
                        <ChevronUp className="text-slate-400" size={20} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={20} />
                      )}
                    </div>
                    
                    <div className="text-left flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-base sm:text-lg font-semibold text-white break-words">
                          {project.path}
                        </h3>
                        <span className={`px-2 py-0.5 ${activity.color} bg-opacity-20 text-xs rounded-full flex-shrink-0`}>
                          <span className={`${activity.color.replace('bg-', 'text-')}`}>{activity.label}</span>
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mb-2">{project.name}</p>
                      {mostRecentCommit && (
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock size={12} />
                          <span>Last commit {getTimeAgo(mostRecentCommit.timestamp)} by {mostRecentCommit.author}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4 flex-shrink-0">
                      <div className="flex flex-col items-end">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                          {project.commit_count}
                        </span>
                        <span className="text-xs text-slate-500 mt-1">commits</span>
                      </div>
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </button>

                {/* Commits List */}
                {isExpanded && (
                  <div className="border-t border-slate-700 px-4 sm:px-6 py-4 space-y-3 bg-slate-900/30">
                    {project.commits.map((commit) => (
                      <div
                        key={commit.sha}
                        className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <a
                            href={commit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-white hover:text-blue-400 transition-colors min-w-0"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <GitCommit size={16} className="text-slate-400 flex-shrink-0" />
                              <code className="text-sm font-mono text-blue-400">{commit.sha}</code>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  copyToClipboard(commit.sha);
                                }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Copy SHA"
                              >
                                {copiedSha === commit.sha ? (
                                  <CheckCircle size={14} className="text-green-400" />
                                ) : (
                                  <Copy size={14} className="text-slate-400 hover:text-white" />
                                )}
                              </button>
                            </div>
                            <p className="text-sm leading-relaxed break-words">{commit.message}</p>
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <User size={14} className="flex-shrink-0" />
                            <span className="truncate font-medium">{commit.author}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="flex-shrink-0" />
                            <span className="whitespace-nowrap">{formatDate(commit.date)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="flex-shrink-0" />
                            <span className="text-slate-500">{getTimeAgo(commit.timestamp)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
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
