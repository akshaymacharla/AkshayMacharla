import React from 'react';
import { Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold border border-zinc-200 mb-3">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Open Source & Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              What I'm building.
            </h2>
            <p className="text-zinc-600 text-base mt-2 max-w-2xl">
              Public repositories, enterprise backend architectures, and developer experiments published on GitHub.
            </p>
          </div>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-sm self-start md:self-auto"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Follow on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.githubRepos.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-2xl bg-zinc-50/60 border border-zinc-200/90 shadow-2xs hover:shadow-premium hover:bg-white hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 transition-colors" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-zinc-950 hover:text-indigo-600 transition-colors text-base font-mono"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {repo.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white border border-zinc-200/80 text-[11px] font-mono text-zinc-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Stats Bar */}
              <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="font-medium text-zinc-700">{repo.language}</span>
                  </span>

                  <span className="flex items-center gap-1 hover:text-zinc-900 transition-colors font-mono">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stars}</span>
                  </span>

                  <span className="flex items-center gap-1 hover:text-zinc-900 transition-colors font-mono">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks}</span>
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group-hover:underline"
                >
                  <span>Explore</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
