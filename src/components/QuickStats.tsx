import React from 'react';
import { Users, Eye, GraduationCap, Code2, Award, Video, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const QuickStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-5 h-5 text-purple-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-amber-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-sky-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-purple-600" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="stats" className="py-12 border-y border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {portfolioData.stats.map((stat) => {
            const isTextLabel = stat.value.length > 5;
            return (
              <div
                key={stat.id}
                className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-zinc-200/60 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200 group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                    {getIcon(stat.icon)}
                  </div>
                  <div className={
                    isTextLabel
                      ? "text-base sm:text-lg font-bold text-zinc-950 tracking-tight leading-snug"
                      : "text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-mono"
                  }>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-800 mt-1">
                    {stat.label}
                  </div>
                </div>

                <div className="text-[11px] text-zinc-500 mt-2 leading-snug pt-2 border-t border-zinc-200/50">
                  {stat.helper}
                </div>
              </div>
            );
          })}
        </div>

        {/* Small transparent note */}
        <div className="mt-4 text-center">
          <span className="text-[11px] text-zinc-400 font-mono">
            * Student-focused practical learning & production backend engineering
          </span>
        </div>
      </div>
    </section>
  );
};
