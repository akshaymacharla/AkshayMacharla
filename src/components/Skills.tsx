import React, { useState } from 'react';
import { 
  Server, Database, Wrench, Layout, Bot, CheckSquare, 
  Cpu, Radio, Box, GitBranch, Zap, ShieldCheck, Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'Backend Engineering', label: 'Backend' },
    { id: 'Databases & Geospatial', label: 'Databases & Spatial' },
    { id: 'Messaging, Tools & DevOps', label: 'DevOps & Tools' },
    { id: 'Frontend Development', label: 'Frontend' },
    { id: 'AI, Biometrics & Innovation', label: 'AI & Biometrics' },
    { id: 'Core Engineering Principles', label: 'Architecture & OOP' },
  ];

  const filteredCategories = activeCategory === 'all'
    ? portfolioData.skillsByCategory
    : portfolioData.skillsByCategory.filter(c => c.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
      case 'Layers':
      case 'Send':
        return <Server className="w-4 h-4 text-indigo-600" />;
      case 'ShieldCheck':
      case 'Lock':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'Database':
      case 'Globe':
      case 'Table':
      case 'HardDrive':
        return <Database className="w-4 h-4 text-sky-600" />;
      case 'Radio':
        return <Radio className="w-4 h-4 text-red-600" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-amber-600" />;
      case 'Box':
        return <Box className="w-4 h-4 text-blue-600" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-orange-600" />;
      case 'Wrench':
      case 'Code':
        return <Wrench className="w-4 h-4 text-zinc-600" />;
      case 'Layout':
      case 'Palette':
      case 'Sparkles':
        return <Layout className="w-4 h-4 text-indigo-600" />;
      case 'Mic':
      case 'Activity':
      case 'Volume2':
      case 'Bot':
      case 'Workflow':
        return <Bot className="w-4 h-4 text-purple-600" />;
      case 'CheckSquare':
      case 'Repeat':
        return <CheckSquare className="w-4 h-4 text-teal-600" />;
      default:
        return <Zap className="w-4 h-4 text-indigo-600" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200/60';
      case 'Proficient':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/60';
      case 'Working Knowledge':
        return 'bg-purple-50 text-purple-700 border-purple-200/60';
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-zinc-50/60 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-200/70 text-xs font-semibold text-zinc-800 mb-3">
              <Server className="w-3.5 h-3.5" />
              <span>Technical Skills & Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Enterprise Tech Stack.
            </h2>
            <p className="text-zinc-600 text-base mt-2 max-w-2xl">
              Technologies and systems verified through academic rigor, open-source builds, and high-performance applications.
            </p>
          </div>

          <div className="text-xs text-zinc-500 font-mono bg-white px-3 py-2 rounded-xl border border-zinc-200 shadow-2xs self-start md:self-auto">
            Strictly backed by verified projects & resume
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 hover:border-zinc-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                  <h3 className="font-bold text-zinc-950 text-base">{group.category}</h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-600">
                    {group.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-4">{group.description}</p>

                <div className="grid grid-cols-1 gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded-xl bg-zinc-50/70 border border-zinc-200/50 hover:bg-zinc-100/70 hover:border-zinc-300 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-white border border-zinc-200/70 shadow-2xs flex items-center justify-center shrink-0">
                          {getSkillIcon(skill.icon)}
                        </div>
                        <span className="text-xs font-semibold text-zinc-800 group-hover:text-zinc-950">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-[10px] font-medium font-mono px-2 py-0.5 rounded-full border ${getLevelBadgeClass(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Architecture Highlight Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-indigo-400 flex items-center justify-center shrink-0 border border-white/10">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Distributed Concurrency & Zero-Loss Caching</div>
              <div className="text-xs text-zinc-400">Practicing production-grade optimistic locking, sub-30ms spatial indexing & asynchronous microservices.</div>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-semibold transition-all shrink-0 shadow-sm"
          >
            <span>See Them in Action</span>
          </a>
        </div>

      </div>
    </section>
  );
};
