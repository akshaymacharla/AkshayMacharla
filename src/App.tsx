import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Educator } from './components/Educator';
import { Workshops } from './components/Workshops';
import { ContentCreator } from './components/ContentCreator';
import { ZinqSkills } from './components/ZinqSkills';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [contactTopic, setContactTopic] = useState<string>('Workshop / Tech Training');

  const handleSelectWorkshop = (workshopTitle: string) => {
    setContactTopic(`Workshop: ${workshopTitle}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    setToastMessage(`Pre-selected "${workshopTitle}" in contact form.`);
  };

  const handleEducatorContact = () => {
    setContactTopic('Workshop / Tech Training');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleZinqContact = () => {
    setContactTopic('Zinq Skills Partnership');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-indigo-500 selection:text-white relative">
      {/* Sticky Translucent Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Quick Statistics Bar */}
        <QuickStats />

        {/* 3. About Me Section */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 4. Skills & Architecture Category Grid */}
        <Skills />

        {/* 5. Featured Projects & Architecture Modal */}
        <Projects />

        {/* 6. Milestone Journey Timeline */}
        <Journey />

        {/* 7. Educator Profile & Philosophy */}
        <Educator onSelectWorkshopContact={handleEducatorContact} />

        {/* 8. Workshops & Training Modules */}
        <Workshops onSelectWorkshop={handleSelectWorkshop} />

        {/* 9. Educational Content Creator Grid */}
        <ContentCreator />

        {/* 10. Zinq Skills Initiative */}
        <ZinqSkills onContactZinq={handleZinqContact} />

        {/* 11. GitHub & Open Source Showcase */}
        <GithubSection />

        {/* 12. Contact & Collaboration Section */}
        <Contact 
          initialTopic={contactTopic} 
          onShowToast={(msg) => setToastMessage(msg)} 
        />
      </main>

      {/* 13. Minimalist Footer */}
      <Footer />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Toast Notifications */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
