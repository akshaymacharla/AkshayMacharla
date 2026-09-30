import React, { useState } from 'react';
import { Video, Eye, Heart, ArrowUpRight, Play } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const ContentCreator: React.FC = () => {
  const [filterTopic, setFilterTopic] = useState<string>('all');

  const topics = [
    { id: 'all', label: 'All Content' },
    { id: 'Java & Backend', label: 'Java & Backend' },
    { id: 'Architecture', label: 'System Design' },
    { id: 'Career & Internships', label: 'Career & Internships' },
    { id: 'AI Tools', label: 'AI Tools' },
  ];

  const filteredPosts = filterTopic === 'all'
    ? portfolioData.creatorPosts
    : portfolioData.creatorPosts.filter(p => p.category === filterTopic);

  return (
    <section id="content" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Instagram Highlight */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-100 mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Educational Content Creation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Technology, explained simply.
            </h2>
            <p className="text-zinc-600 text-base mt-2">
              Creating educational content around Java, AI, careers, internships, and software development — explaining complex engineering concepts simply.
            </p>
          </div>

          {/* Prominent Instagram Creator Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 text-white shadow-premium flex items-center justify-between gap-6 shrink-0 border border-zinc-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-zinc-900 rounded-[14px] flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{portfolioData.personal.instagramHandle}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-300">Content Creator</span>
                </div>
                <div className="text-xs text-zinc-300 mt-0.5">
                  Student-Focused Tech Content • Practical Learning
                </div>
              </div>
            </div>

            <a
              href={portfolioData.personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-100 transition-colors shadow-sm shrink-0"
            >
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Content Topics Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilterTopic(t.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                filterTopic === t.id
                  ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                  : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Creator Content Cards Grid (Apple / Minimal Feed Vibe) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-2xs hover:shadow-premium hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail Area with Clean Gradient Aesthetic */}
                <div className={`h-40 bg-gradient-to-br ${post.thumbnailGradient} p-5 flex flex-col justify-between relative overflow-hidden text-white`}>
                  
                  {/* Subtle decorative grid inside thumbnail */}
                  <div className="absolute inset-0 bg-black/15 bg-subtle-grid-dense pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 backdrop-blur-md text-white font-medium">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 backdrop-blur-md text-white font-medium flex items-center gap-1">
                      <Play className="w-2.5 h-2.5 fill-white" />
                      {post.duration}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-white/80" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-white/80" />
                        {post.likes}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <h3 className="font-bold text-zinc-950 text-base group-hover:text-indigo-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  @macharla_akshay
                </span>
                <a
                  href={portfolioData.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  <span>Watch Reel</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Content Topics Pill Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-zinc-900">What I Cover Across Platforms:</h4>
            <p className="text-xs text-zinc-500">Zero-fluff technical deep dives created specifically for college engineers and aspiring backend developers.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['Java 17/21', 'Spring Boot 3', 'REST APIs', 'PostGIS & SQL', 'Kafka Streams', 'AI Tools', 'Internship Strategies', 'System Architecture'].map((topic) => (
              <span key={topic} className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-2xs">
                {topic}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
