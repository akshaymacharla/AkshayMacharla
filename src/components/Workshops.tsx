import React from 'react';
import { Server, Layers, Sparkles, Briefcase, CheckCircle2, Clock, Users, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface WorkshopsProps {
  onSelectWorkshop: (title: string) => void;
}

export const Workshops: React.FC<WorkshopsProps> = ({ onSelectWorkshop }) => {

  const getWorkshopIcon = (icon: string) => {
    switch (icon) {
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-amber-600" />;
      default:
        return <Server className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="workshops" className="py-20 bg-zinc-50/50 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Structured Training Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Learn. Build. Grow.
            </h2>
            <p className="text-zinc-600 text-base mt-2 max-w-2xl">
              Engineered for universities, student chapters, technical clubs, and aspiring developers wanting practical mastery.
            </p>
          </div>

          <div className="text-xs text-zinc-500 font-mono">
            Customizable for colleges & technical hackathons
          </div>
        </div>

        {/* 4 Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {portfolioData.workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:shadow-premium hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center shrink-0">
                    {getWorkshopIcon(workshop.icon)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {workshop.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 mb-1">
                  {workshop.title}
                </h3>
                <div className="text-xs font-semibold text-indigo-600 mb-3">
                  {workshop.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 mb-5 leading-relaxed">
                  {workshop.description}
                </p>

                {/* Metadata tags */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 mb-5 pb-5 border-b border-zinc-100">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{workshop.duration}</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{workshop.audience}</span>
                  </span>
                </div>

                {/* Curriculum Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider">
                    Core Curriculum:
                  </div>
                  {workshop.curriculum.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {workshop.curriculum.length > 4 && (
                    <div className="text-[11px] text-zinc-500 pl-5">
                      +{workshop.curriculum.length - 4} more intensive modules
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectWorkshop(workshop.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-indigo-600 transition-colors"
                >
                  <span>Request This Workshop</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono text-zinc-400">Custom Syllabi Available</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
