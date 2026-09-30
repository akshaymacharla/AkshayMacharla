import React from 'react';
import { X, ExternalLink, CheckCircle2, Zap, Terminal, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-zinc-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            {project.badge && (
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200">
                {project.badge}
              </span>
            )}
            <h3 className="text-lg font-bold text-zinc-950">{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Subtitle & Tagline */}
          <div>
            <div className="text-sm font-semibold text-indigo-600 mb-1">{project.tagline}</div>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Metrics / Endpoint Banner */}
          {project.metricsOrEndpoints && (
            <div className="p-3.5 rounded-xl bg-zinc-900 text-white flex items-center gap-3 text-xs font-mono">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-zinc-200">{project.metricsOrEndpoints}</span>
            </div>
          )}

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Core Architecture & Engineering Highlights</span>
            </h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/70 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Key Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-zinc-100/70 text-xs font-medium text-zinc-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2.5">
              Verified Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs font-mono font-medium text-zinc-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links & CTA Bar */}
          <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source on GitHub</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-semibold hover:bg-indigo-100 border border-indigo-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
