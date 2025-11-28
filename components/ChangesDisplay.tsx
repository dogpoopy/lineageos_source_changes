'use client';

import { useState, useMemo } from 'react';
import { Search, GitCommit, Calendar, User, ExternalLink, ChevronDown, ChevronUp, TrendingUp, Clock, Filter, Copy, CheckCircle, BarChart3, X, Menu, RefreshCw } from 'lucide-react';

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    if (count >= 100) return { color: 'bg-emerald-500', label: 'Very Active', ring: 'ring-emerald-500/30' };
    if (count >= 50) return { color: 'bg-blue-500', label: 'Active', ring: 'ring-blue-500/30' };
    if (count >= 20) return { color: 'bg-amber-500', label: 'Moderate', ring: 'ring-amber-500/30' };
    return { color: 'bg-slate-500', label: 'Low', ring: 'ring-slate-500/30' };
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
    setShowMobileMenu(false);
  };

  const handleBranchChange = (branchId: string) => {
    if (selectedRomId) {
      setSelectedKey(`${selectedRomId}/${branchId}`);
    }
    setShowMobileMenu(false);
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
      {/* Sticky Header - Mobile Optimized */}
      <div className="sticky top-0 z-40 -mx-4 px-4 py-4 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800/50 lg:relative lg:mx-0 lg:px-0 lg:py-0 lg:backdrop-blur-none lg:bg-transparent lg:border-0">
        <div className="flex items-center justify-between lg:hidden">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <GitCommit className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">{data.romDisplayName}</h2>
              <p className="text-xs text-slate-400">{data.branchDisplayName}</p>
            </div>
          </div>
          
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-colors"
          >
            {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Select ROM
              </label>
              <select
                value={selectedRomId}
                onChange={(e) => handleRomChange(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Select Branch
              </label>
              <select
                value={selectedBranchId}
                onChange={(e) => handleBranchChange(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        )}
      </div>

      {/* Desktop ROM & Branch Dropdowns */}
      <div className="hidden lg:grid grid-cols-2 gap-4">
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

      {/* Enhanced Stats Cards - Mobile Optimized */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="text-blue-400" size={18} />
            <span className="text-xs text-blue-300/70">repos</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white">{data.total_projects}</div>
          <div className="text-xs text-blue-300/50 mt-1">Projects</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-500/20">
          <div className="flex items-center justify-between mb-2">
            <GitCommit className="text-purple-400" size={18} />
            <span className="text-xs text-purple-300/70">90d</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white">{data.total_commits}</div>
          <div className="text-xs text-purple-300/50 mt-1">Commits</div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-500/20">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="text-emerald-400" size={18} />
            <span className="text-xs text-emerald-300/70">24h</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white">{recentCommitsCount}</div>
          <div className="text-xs text-emerald-300/50 mt-1">Today</div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-500/20">
          <div className="flex items-center justify-between mb-2">
            <RefreshCw className="text-orange-400" size={18} />
          </div>
          <div className="text-lg sm:text-xl font-semibold text-white">{lastUpdateText}</div>
          <div className="text-xs text-orange-300/50 mt-1 truncate">{formatDate(data.generated_at)}</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="text"
          placeholder="Search projects, commits, or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Quick Actions - Mobile Optimized */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="text-slate-400 text-sm">
          Showing <span className="text-white font-semibold">{filteredAndSortedProjects.length}</span> of {data.total_projects} projects
        </div>
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="commits">Most Active</option>
            <option value="recent">Recently Updated</option>
            <option value="name">Alphabetical</option>
          </select>
          
          <button
            onClick={expandAll}
            className="flex-1 sm:flex-none px-3 py-2 text-xs sm:text-sm bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-slate-300 transition-colors"
          >
            Expand
          </button>
          <button
            onClick={collapseAll}
            className="flex-1 sm:flex-none px-3 py-2 text-xs sm:text-sm bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-slate-300 transition-colors"
          >
            Collapse
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-3 sm:space-y-4">
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
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/50 transition-all"
              >
                {/* Project Header */}
                <button
                  onClick={() => toggleProject(project.path)}
                  className="w-full px-4 sm:px-6 py-4 hover:bg-slate-700/20 transition-colors"
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
                        <h3 className="text-sm sm:text-base font-semibold text-white break-all">
                          {project.path}
                        </h3>
                        <span className={`px-2 py-0.5 ${activity.color} rounded-full text-xs font-medium whitespace-nowrap`}>
                          {project.commit_count}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mb-2 truncate">{project.name}</p>
                      {mostRecentCommit && (
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock size={12} />
                          <span className="truncate">Last commit {getTimeAgo(mostRecentCommit.timestamp)} by {mostRecentCommit.author}</span>
                        </div>
                      )}
                    </div>
                    
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-blue-400 transition-colors flex-shrink-0"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </button>

                {/* Commits List */}
                {isExpanded && (
                  <div className="border-t border-slate-700/50 px-4 sm:px-6 py-4 space-y-2 sm:space-y-3 bg-slate-900/30">
                    {project.commits.map((commit) => (
                      <div
                        key={commit.sha}
                        className="bg-slate-800/40 rounded-lg p-3 sm:p-4 hover:bg-slate-800/60 transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <a
                            href={commit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-white hover:text-blue-400 transition-colors min-w-0"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <GitCommit size={14} className="text-slate-400 flex-shrink-0" />
                              <code className="text-xs sm:text-sm font-mono text-blue-400">{commit.sha}</code>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  copyToClipboard(commit.sha);
                                }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Copy SHA"
                              >
                                {copiedSha === commit.sha ? (
                                  <CheckCircle size={14} className="text-emerald-400" />
                                ) : (
                                  <Copy size={14} className="text-slate-400 hover:text-white" />
                                )}
                              </button>
                            </div>
                            <p className="text-sm leading-relaxed break-words">{commit.message}</p>
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400">
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
