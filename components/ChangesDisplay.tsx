'use client';

import { useState, useMemo } from 'react';
import { Search, GitCommit, Calendar, User, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

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

interface ChangesData {
  branch: string;
  generated_at: string;
  since_date: string;
  total_projects: number;
  total_commits: number;
  projects: Project[];
}

interface BranchesData {
  [key: string]: ChangesData | null;
}

export default function ChangesDisplay({ branchesData }: { branchesData: BranchesData }) {
  const branches = Object.keys(branchesData);
  const [selectedBranch, setSelectedBranch] = useState(branches[0] || 'lineage-22.2');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const data = branchesData[selectedBranch];

  const filteredProjects = useMemo(() => {
    if (!data || !data.projects) return [];
    if (!searchTerm) return data.projects;
    
    const term = searchTerm.toLowerCase();
    return data.projects.filter(project => 
      project.path.toLowerCase().includes(term) ||
      project.name.toLowerCase().includes(term) ||
      project.commits.some(commit => 
        commit.message.toLowerCase().includes(term) ||
        commit.author.toLowerCase().includes(term)
      )
    );
  }, [data, searchTerm]);

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

  const getBranchDisplayName = (branch: string) => {
    return branch.replace('lineage-', 'LineageOS ');
  };

  if (!data) {
    return (
      <div className="text-center text-slate-400 py-20">
        <p className="text-xl">No data available for {selectedBranch}. Please run the sync script first.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Branch Selector */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {branches.map((branch) => {
          const branchData = branchesData[branch];
          const isActive = branch === selectedBranch;
          const hasData = branchData !== null;
          
          return (
            <button
              key={branch}
              onClick={() => setSelectedBranch(branch)}
              disabled={!hasData}
              className={`
                px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base
                ${isActive 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50' 
                  : hasData
                    ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                    : 'bg-slate-800/30 text-slate-600 cursor-not-allowed border border-slate-800'
                }
              `}
            >
              {getBranchDisplayName(branch)}
              {hasData && branchData && (
                <span className={`ml-2 text-xs ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                  ({branchData.total_commits})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <div className="text-slate-400 text-sm mb-1">Total Projects</div>
          <div className="text-3xl font-bold text-white">{data.total_projects}</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <div className="text-slate-400 text-sm mb-1">Total Commits</div>
          <div className="text-3xl font-bold text-blue-400">{data.total_commits}</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <div className="text-slate-400 text-sm mb-1">Last Updated</div>
          <div className="text-lg font-semibold text-white">
            {formatDate(data.generated_at)}
          </div>
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
          className="w-full pl-12 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-slate-400 py-12">
            No projects found matching your search.
          </div>
        ) : (
          filteredProjects.map((project) => {
            const isExpanded = expandedProjects.has(project.path);
            
            return (
              <div
                key={project.path}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-colors"
              >
                {/* Project Header */}
                <button
                  onClick={() => toggleProject(project.path)}
                  className="w-full px-4 sm:px-6 py-4 hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Chevron Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {isExpanded ? (
                        <ChevronUp className="text-slate-400" size={20} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={20} />
                      )}
                    </div>
                    
                    {/* Project Info */}
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-white break-words pr-2">
                        {project.path}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 truncate">
                        {project.name}
                      </p>
                    </div>
                    
                    {/* Commit Count & Link */}
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4 flex-shrink-0">
                      <span className="bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                        {project.commit_count}
                      </span>
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
                  <div className="border-t border-slate-700 px-4 sm:px-6 py-4 space-y-3">
                    {project.commits.map((commit) => (
                      <div
                        key={commit.sha}
                        className="bg-slate-900/50 rounded-lg p-3 sm:p-4 hover:bg-slate-900/70 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <a
                            href={commit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-white hover:text-blue-400 transition-colors min-w-0"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <GitCommit size={16} className="text-slate-400 flex-shrink-0" />
                              <code className="text-sm font-mono text-blue-400">{commit.sha}</code>
                            </div>
                            <p className="text-sm leading-relaxed break-words">{commit.message}</p>
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400">
                          <div className="flex items-center gap-1">
                            <User size={14} className="flex-shrink-0" />
                            <span className="truncate">{commit.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="flex-shrink-0" />
                            <span className="whitespace-nowrap">{formatDate(commit.date)}</span>
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
