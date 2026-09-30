import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ZinqSkillsProps {
  onContactZinq: () => void;
}

export const ZinqSkills: React.FC<ZinqSkillsProps> = ({ onContactZinq }) => {
  const { zinqSkills } = portfolioData;

  return (
    <section id="zinq" className="py-20 bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle grid pattern for technical feel */}
      <div className="absolute inset-0 bg-subtle-grid-dense opacity-10 pointer-events-none" />

      {/* Subtle glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Brand & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-semibold border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Education Initiative</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                {zinqSkills.brandName}
              </h2>
              <p className="text-xl sm:text-2xl text-indigo-300 font-medium">
                {zinqSkills.tagline}
              </p>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {zinqSkills.statement}
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed border-l-2 border-indigo-500 pl-4 py-1 italic">
              "{zinqSkills.mission}"
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {zinqSkills.highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-xl font-bold font-mono text-white">{h.number}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">{h.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onContactZinq}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-100 shadow-sm transition-all active:scale-95 group"
              >
                <span>Partner with Zinq Skills</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={portfolioData.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>Follow Community Updates</span>
                <span className="font-mono text-indigo-400">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Pillars & Tracks */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl backdrop-blur-xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Core Zinq Skills Tracks</span>
              </h3>

              <div className="space-y-3">
                {zinqSkills.tracks.map((track, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/50 hover:bg-white/10 transition-colors flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {track}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>College Workshops & Cohorts</span>
                <span className="text-indigo-400">Project-First Curriculum</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
