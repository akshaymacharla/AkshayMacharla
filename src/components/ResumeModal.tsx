import React from 'react';
import { X, Printer, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-3.5 border-b border-zinc-200 flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-semibold text-zinc-700">Verified Technical Resume • Akshay Macharla</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-6 sm:p-10 font-sans text-zinc-900 space-y-6 max-w-3xl mx-auto w-full">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-zinc-200">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-zinc-950">
              AKSHAY MACHARLA
            </h1>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-600 uppercase mt-1">
              BACKEND DEVELOPER | JAVA | SPRING BOOT | REST APIS
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-600 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Hyderabad, India
              </span>
              <span>•</span>
              <a href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`} className="hover:text-indigo-600">{portfolioData.personal.phone}</a>
              <span>•</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-indigo-600">{portfolioData.personal.email}</a>
              <span>•</span>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 underline">linkedin.com/in/akshaymacharia</a>
              <span>•</span>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 underline">github.com/akshaymacharla</a>
            </div>
          </div>

          {/* About Me */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              ABOUT ME
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              Backend Developer skilled in Java, Spring Boot, REST APIs, Hibernate, MySQL, and Microservices Architecture. Experienced in building scalable backend applications using layered architecture and Spring ecosystem technologies.
            </p>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                EDUCATION
              </h2>
              <div className="text-xs sm:text-sm">
                <div className="font-bold text-zinc-900">B.S. Computer Science</div>
                <div className="text-zinc-600">Chaitanya Deemed To Be University</div>
                <div className="text-zinc-500 font-mono text-[11px] mt-0.5">2023 - Present • <strong className="text-emerald-700 font-semibold">CGPA: 9.0</strong></div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                ACHIEVEMENTS
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700">
                • Secured <strong>Academic Excellence honors</strong> by consistently maintaining a <strong>9.0+ GPA</strong> throughout all completed semesters of B.S(CS).
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <div>
                <strong className="text-zinc-900">Languages:</strong> Java, SQL, C
              </div>
              <div>
                <strong className="text-zinc-900">Frameworks:</strong> Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, RESTful Services
              </div>
              <div>
                <strong className="text-zinc-900">Authentication:</strong> JWT Auth, Authorization, RBAC
              </div>
              <div>
                <strong className="text-zinc-900">Databases & Spatial:</strong> MySQL, PostGIS, PostgreSQL, Redis, H2 DB, SQL Optimization
              </div>
              <div>
                <strong className="text-zinc-900">Build & DevOps:</strong> Maven, Git, GitHub, Docker
              </div>
              <div>
                <strong className="text-zinc-900">Tools:</strong> Postman, IntelliJ, VS Code, Apache Kafka
              </div>
              <div className="sm:col-span-2">
                <strong className="text-zinc-900">Concepts:</strong> OOP, Dependency Injection (IoC), CRUD, Layered Architecture, RESTful API Design, Exception Handling, Microservices Architecture, Backend Development
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
              PROJECTS
            </h2>

            {/* Project 1 */}
            <div className="mb-4">
              <div className="flex flex-wrap items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  FoodBridge - Real-Time Surplus Food Redistribution Platform
                </h3>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mb-1">
                Java, Spring Boot 3.2.3, PostgreSQL, PostGIS, Spring Data JPA, Hibernate, Maven, Redis, Apache Kafka, Spring Security, JWT
              </div>
              <ul className="list-disc pl-4 text-xs text-zinc-700 space-y-1">
                <li>Architected and built a backend-driven real-time food surplus redistribution platform using Spring Boot 3.2.3, Spring Data JPA, Hibernate, Maven, and PostgreSQL with PostGIS spatial extensions.</li>
                <li>Configured spatial database entities mapped with Hibernate spatial extensions and PostGIS native functions (ST_DWithin, ST_DistanceSphere) for sub-30ms radius distance queries.</li>
                <li>Implemented JPA Optimistic Locking (@Version) to prevent double-claiming race conditions across concurrent claims, returning HTTP 409 Conflict via custom ClaimConflictException.</li>
                <li>Integrated Apache Kafka (FoodListingCreatedEvent to food-listings-topic) and KafkaNotificationListener for asynchronous NGO notifications.</li>
                <li>Configured automated stale listing evictions using Redis TTL caching alongside a background ExpirationSchedulerService running a 5-minute cron job (@Scheduled).</li>
                <li>Exposed 15+ secure RESTful endpoints for listing management, verification workflows, and valuation/CO2 offset telemetry metrics.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex flex-wrap items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  E-Commerce Backend Application
                </h3>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mb-1">
                Java, Spring Boot, Spring Security, JWT, Spring Data JPA, Hibernate, MySQL, H2, Maven
              </div>
              <ul className="list-disc pl-4 text-xs text-zinc-700 space-y-1">
                <li>Developed a high-performance RESTful backend using a rigid layered architectural framework, exposing 15+ REST endpoints with proper HTTP method semantics (GET, POST, PUT, DELETE).</li>
                <li>Implemented role-based authentication using Spring Security and JWT.</li>
                <li>Implemented secure, robust CRUD processes for catalog and product management models utilizing Spring Data JPA.</li>
                <li>Integrated MySQL database for persistent product and user management; used H2 in-memory DB for testing, cutting integration test setup time by ~40%.</li>
                <li>Implemented global exception handling with custom error responses, improving API reliability.</li>
                <li>Leveraged IoC containers and auto-configurations to heavily cut boilerplate logic, utilizing Maven for build automation and applying Lombok to reduce boilerplate by ~30%.</li>
              </ul>
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              POSITIONS OF RESPONSIBILITY
            </h2>
            <div className="space-y-2 text-xs text-zinc-700">
              <div>
                <div className="flex justify-between font-bold text-zinc-900">
                  <span>Organizer - CODE COGNITION 2K24 Hackathon (University Event supported by IBM)</span>
                  <span className="font-mono text-zinc-500">2024</span>
                </div>
                <p>Co-organized a university-wide hackathon with corporate backing from IBM, managing 100+ registrations and executing core schedules across multiple technical tracks.</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-zinc-900">
                  <span>Event Coordinator - Gully Cricket Tournament (University Sports Festival)</span>
                  <span className="font-mono text-zinc-500">2024</span>
                </div>
                <p>Managed student registration systems and orchestrated multi-bracket match configurations during annual athletic iterations.</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-1">
              LANGUAGES
            </h2>
            <div className="text-xs text-zinc-700">
              Telugu (Native) • English (Professional) • Hindi (Conversational)
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
