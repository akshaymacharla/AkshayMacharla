import React from 'react';
import { Code, BookOpen, Video, Award, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import akshayPhoto from '../assets/akshay-macharla.jpg';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Akshay</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            More than just a developer.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg mt-3 leading-relaxed">
            Bridging the gap between university coursework and the high-standards of modern software engineering.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Credibility Card */}
          <div className="lg:col-span-7 space-y-6 text-zinc-700 text-base leading-relaxed">
            <p className="text-lg text-zinc-800 font-medium leading-relaxed">
              I am a Computer Science student at <strong className="text-zinc-950 font-semibold">{portfolioData.personal.university}</strong> specializing in Java backend development, distributed architecture, and modern software engineering.
            </p>

            <p>
              Alongside backend systems, I actively work as an <strong>educator and tech trainer</strong>. I believe students learn technology best when they get their hands dirty building real projects rather than memorizing syntax for exams. Through workshops, intensive bootcamps, and live coding sessions, I help students understand how enterprise systems actually run in production.
            </p>

            <p>
              As a <strong>technology content creator</strong> (<a href={portfolioData.personal.instagram} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">{portfolioData.personal.instagramHandle}</a>), I create educational content around Java, AI, careers, internships, and software development, breaking down complex concepts into actionable, digestible visual guides.
            </p>

            {/* University & Academic Credibility Box with Photo */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-2xs space-y-4 mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <img
                  src={akshayPhoto}
                  alt="Akshay Macharla"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-white shadow-sm ring-1 ring-zinc-200/80 shrink-0"
                />
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <div className="text-sm sm:text-base font-bold text-zinc-950">Akshay Macharla</div>
                      <div className="text-xs text-zinc-600 font-medium">B.S. Computer Science • {portfolioData.personal.university}</div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>9.0+ CGPA Honors</span>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">
                    2023 - Present • Hyderabad, India
                  </div>
                </div>
              </div>

              <div className="text-xs text-zinc-600 pt-3 border-t border-zinc-200/70 flex flex-wrap items-center justify-between gap-2 font-mono">
                <span>Organizer: CODE COGNITION 2K24 Hackathon (IBM Backed)</span>
                <span className="text-indigo-600 font-medium">Core Java & Backend Systems</span>
              </div>
            </div>

            {/* Call to action within About */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
              >
                <span>Read Full Verified Resume</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Developer */}
            <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:shadow-premium hover:border-indigo-200 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Code className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-zinc-950">Developer</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold">BUILD</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Building resilient backend systems, RESTful microservices, and full-stack applications with Java 17, Spring Boot 3, PostGIS spatial queries, and Apache Kafka.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Educator */}
            <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:shadow-premium hover:border-emerald-200 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-zinc-950">Educator</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">TEACH</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Teaching programming, enterprise backend development, Git, and hands-on architecture skills through interactive, zero-fluff workshops and college bootcamps.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Creator */}
            <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:shadow-premium hover:border-purple-200 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Video className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-zinc-950">Content Creator</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold">CREATE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Creating educational content around Java, AI, careers, internships, and software development.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
