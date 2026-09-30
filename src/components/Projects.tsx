import React, { useState } from 'react';
import { ExternalLink, Layers, ChevronRight, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'ai' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700 mb-3 border border-indigo-100">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Systems & Builds</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Featured Projects.
            </h2>
            <p className="text-zinc-600 text-base mt-2 max-w-2xl">
              Architected for resilience, high concurrency, and real-world utility. Backed by Java Spring Boot, PostGIS, Kafka, and AI biometrics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-zinc-100/90 p-1 rounded-full border border-zinc-200/80 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              All Builds
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                filter === 'backend'
                  ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Java & Spring Boot
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                filter === 'ai'
                  ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              AI & Biometrics
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                filter === 'fullstack'
                  ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-200/90 bg-white shadow-2xs hover:shadow-premium hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top / Visual Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-semibold border border-zinc-200">
                    {project.badge || 'Featured Project'}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 capitalize">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-indigo-600 mt-1 line-clamp-1">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Snippet Box */}
                <div className="mt-4 p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 text-xs text-zinc-700 space-y-1.5 font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-900 font-semibold text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Architecture Core:</span>
                  </div>
                  <div className="text-[11px] text-zinc-600 line-clamp-2">
                    {project.architectureHighlights[0]}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-500 text-[11px] font-mono">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-zinc-50/70 border-t border-zinc-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <span>Architecture Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 transition-colors"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-500 hover:text-indigo-600 hover:bg-zinc-200/60 transition-colors"
                      title="Open Live Application"
                      aria-label="Open Live Application"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 font-mono">
            Want to review all source code repositories and commit logs?
          </p>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-indigo-600 mt-1 hover:underline"
          >
            <span>Visit GitHub (@akshaymacharla)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
