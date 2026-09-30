import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  initialTopic?: string;
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ initialTopic = '', onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: initialTopic || 'Invite Me to Conduct a Workshop',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [whatsappOpened, setWhatsappOpened] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({ ...prev, topic: initialTopic }));
    }
  }, [initialTopic]);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const topic = formData.topic.trim();
    const message = formData.message.trim();

    if (!name) {
      onShowToast('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      onShowToast('Please enter a valid email address.');
      return;
    }

    if (!topic) {
      onShowToast('Please select a topic / reason for connecting.');
      return;
    }

    if (!message) {
      onShowToast('Please enter your message.');
      return;
    }

    // Exact required WhatsApp format
    const whatsappMessage = `Hello Akshay! 👋
I found your portfolio and would like to connect with you.

👤 Name:
${name}

📧 Email:
${email}

📌 Reason for Contact:
${topic}

💬 Message:
${message}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/917032825979?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp reliably on both desktop and mobile
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setWhatsappOpened(true);
    onShowToast('WhatsApp opened — just press Send to complete your message.');
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50/70 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Let's build something useful.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg mt-2">
            Whether you want to collaborate, invite me for a workshop, discuss a project, or simply connect — I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs space-y-4">
              <h3 className="font-bold text-zinc-950 text-base mb-1">Direct Channels</h3>
              
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-zinc-500 font-medium">Email Address</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-indigo-600 truncate block"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 font-medium">WhatsApp / Call</div>
                    <a
                      href={`https://wa.me/${portfolioData.personal.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-emerald-600 block"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition-colors shrink-0"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500 font-medium">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs space-y-3">
              <h3 className="font-bold text-zinc-950 text-base mb-2">Connect Online</h3>
              
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={portfolioData.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-pink-300 hover:bg-pink-50/30 transition-all text-center group"
                >
                  <InstagramIcon className="w-5 h-5 text-zinc-700 group-hover:text-pink-600 transition-colors mb-1" />
                  <span className="text-[11px] font-semibold text-zinc-800">Instagram</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Creator</span>
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-blue-300 hover:bg-blue-50/30 transition-all text-center group"
                >
                  <LinkedinIcon className="w-5 h-5 text-zinc-700 group-hover:text-blue-600 transition-colors mb-1" />
                  <span className="text-[11px] font-semibold text-zinc-800">LinkedIn</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Connect</span>
                </a>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-zinc-400 hover:bg-zinc-100 transition-all text-center group"
                >
                  <GithubIcon className="w-5 h-5 text-zinc-700 group-hover:text-zinc-950 transition-colors mb-1" />
                  <span className="text-[11px] font-semibold text-zinc-800">GitHub</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Repos</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-zinc-200/90 shadow-premium">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Rahul"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Topic / Reason for Connecting
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm text-zinc-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value="Invite Me to Conduct a Workshop">Invite Me to Conduct a Workshop</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Backend Architecture & Consulting">Backend Architecture & Consulting</option>
                    <option value="Content & Creator Collaboration">Content & Creator Collaboration</option>
                    <option value="Zinq Skills Partnership">Partner with Zinq Skills</option>
                    <option value="General Connect & Mentorship">General Connect & Mentorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We would like to invite you to conduct a Java workshop for our students."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                {whatsappOpened && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2.5 animate-in fade-in duration-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                    <span>WhatsApp opened — just press Send to complete your message.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-zinc-500 text-center font-mono pt-1">
                  Connects directly via WhatsApp (+91 70328 25979) • Instant response
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
