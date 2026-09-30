import React from 'react';
import { Calendar, Award, GraduationCap, Code2, Video, BookOpen, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-sky-600" />;
      case 'technical':
        return <Code2 className="w-4 h-4 text-indigo-600" />;
      case 'leadership':
        return <Award className="w-4 h-4 text-amber-600" />;
      case 'educator':
        return <BookOpen className="w-4 h-4 text-emerald-600" />;
      case 'creator':
        return <Video className="w-4 h-4 text-purple-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-zinc-600" />;
    }
  };

  return (
    <section id="journey" className="py-20 bg-zinc-50/70 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-200/80 text-xs font-semibold text-zinc-800 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Growth & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            My Journey.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg mt-2">
            From foundational computer science to enterprise backend systems, hackathon leadership, tech workshops, and student-focused content creation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-200 ml-4 md:ml-6 space-y-10 pl-6 md:pl-10">
          {portfolioData.journey.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-zinc-300 group-hover:border-indigo-600 group-hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-xs">
                {getIcon(item.type)}
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:shadow-premium hover:border-zinc-300 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {item.highlightBadge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-950">
                  {item.title}
                </h3>
                
                <div className="text-xs font-semibold text-indigo-600 mb-2">
                  {item.organization} • {item.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
