import React from 'react';
import { BookOpen, Code, Sparkles, ArrowRight, Target } from 'lucide-react';

interface EducatorProps {
  onSelectWorkshopContact: () => void;
}

export const Educator: React.FC<EducatorProps> = ({ onSelectWorkshopContact }) => {
  const sessionTypes = [
    {
      title: "Hands-on Tech Workshops",
      desc: "Live interactive coding bootcamps on Java, Spring Boot 3, REST APIs, and database architecture.",
      icon: Code,
    },
    {
      title: "Backend Development Sessions",
      desc: "Deep-dives into Spring MVC, JPA Optimistic Locking, Kafka event streams, and microservice topology.",
      icon: BookOpen,
    },
    {
      title: "Applied AI Tools Workshops",
      desc: "Teaching students to leverage AI tools, voice biometrics, and RAG pipelines for real-world development.",
      icon: Sparkles,
    },
    {
      title: "Career & Tech Interview Guidance",
      desc: "Deconstructing resumes, structuring GitHub proof-of-work, and acing junior backend developer interviews.",
      icon: Target,
    },
  ];

  return (
    <section id="teaching" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Educator Showcase Box */}
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50/80 via-white to-white p-8 sm:p-12 shadow-premium relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Educator & Technical Trainer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                I don't just learn technology. <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  I teach it.
                </span>
              </h2>

              <blockquote className="border-l-2 border-emerald-500 pl-4 py-1 text-base sm:text-lg font-medium text-zinc-800 italic">
                "I believe students learn technology best when they build something with it."
              </blockquote>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Most students get stuck in theoretical tutorials and syntax flashcards. My approach flips the classroom: we start with a real problem statement, model the database, write clean Java/Spring Boot code, and deploy. When students build working systems with their own hands, their confidence transforms.
              </p>

              {/* Stats row inside Educator */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                  <div className="text-xl font-bold font-mono text-zinc-950">1,000s+</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Students Trained</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                  <div className="text-xl font-bold font-mono text-emerald-600">100%</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Project-Based</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                  <div className="text-base sm:text-lg font-bold text-indigo-600">Tech Creator</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Student-Focused</div>
                </div>
              </div>

              {/* CTA button */}
              <div className="pt-2">
                <button
                  onClick={onSelectWorkshopContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 shadow-sm hover:shadow transition-all duration-200 active:scale-95 group"
                >
                  <span>Invite Me to Conduct a Workshop</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Session Tracks Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
              {sessionTypes.map((session, index) => {
                const IconComponent = session.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white border border-zinc-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-subtle transition-all duration-200 flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-900">{session.title}</div>
                      <div className="text-[11px] sm:text-xs text-zinc-500 mt-1 leading-relaxed">{session.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
