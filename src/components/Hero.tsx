import React, { useState } from 'react';
import { ArrowRight, Terminal, Cpu, Database, Server, ChevronDown, Radio, Copy, Check, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import akshayPhoto from '../assets/akshay-macharla.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'code' | 'architecture' | 'telemetry'>('profile');
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleJavaCode = `@RestController
@RequestMapping("/api/v1/food-listings")
public class FoodListingController {

    private final FoodBridgeService foodService;
    private final KafkaTemplate<String, Object> kafkaTemplate;

    @PostMapping("/{id}/claim")
    @Transactional
    public ResponseEntity<ClaimResponse> claimSurplus(
            @PathVariable Long id, 
            @AuthenticationPrincipal User ngoUser) {
        
        // Optimistic locking via @Version prevents race conditions
        ClaimResult result = foodService.processClaim(id, ngoUser);
        
        // Asynchronous Kafka event notification
        kafkaTemplate.send("food-listings-topic", 
            new FoodListingClaimedEvent(id, ngoUser.getId()));
            
        return ResponseEntity.ok(new ClaimResponse("Claimed", HttpStatus.OK));
    }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleJavaCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-subtle-grid">
      {/* Ambient background glows - subtle & refined */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-emerald-500/5 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Profile Avatar + Small Badge */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src={akshayPhoto}
                alt="Akshay Macharla"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-white shadow-sm ring-1 ring-zinc-200"
              />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm text-xs font-medium text-zinc-800 hover:border-zinc-300 transition-colors">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-tight text-zinc-700 font-semibold">{portfolioData.personal.roleBadge}</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] mb-6">
              I build. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                I teach.
              </span>{' '}
              I create.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mb-8">
              {portfolioData.personal.heroStatement}
            </p>

            <div className="p-3.5 rounded-xl bg-zinc-100/80 border border-zinc-200/80 text-xs sm:text-sm text-zinc-700 mb-8 max-w-xl flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-200 text-zinc-800 shrink-0">
                Core Focus
              </span>
              <span>Building backend systems, teaching practical technology, and creating content that helps students grow.</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm hover:shadow transition-all duration-200 active:scale-95 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-zinc-800 hover:bg-zinc-50 border border-zinc-200/90 shadow-sm hover:border-zinc-300 transition-all duration-200 active:scale-95"
              >
                <span>Let's Connect</span>
              </a>

              <a
                href="#content"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <span>Explore My Content</span>
                <span className="text-xs font-mono text-zinc-400">→</span>
              </a>
            </div>

            {/* Floating Quick Chips */}
            <div className="mt-10 pt-6 border-t border-zinc-200/80 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-500 font-medium">
              <span className="text-zinc-400">Tech Pillars:</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Java & Spring Boot
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> PostGIS & SQL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Kafka & Redis
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Voice AI & Biometrics
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Photo & Backend Architecture Window */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="rounded-2xl border border-zinc-200/90 bg-white/90 backdrop-blur-xl shadow-premium overflow-hidden transition-all duration-300 hover:shadow-elevated">
                
                {/* Window Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-50/80 border-b border-zinc-200/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <span className="ml-2 text-xs font-mono font-medium text-zinc-500 truncate max-w-[140px] sm:max-w-none">
                      akshay-macharla / profile
                    </span>
                  </div>

                  {/* Window Tabs */}
                  <div className="flex items-center gap-1 bg-zinc-200/60 p-0.5 rounded-lg text-[11px] font-medium">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'profile' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      Photo
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'code' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      Spring API
                    </button>
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'architecture' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      Topology
                    </button>
                    <button
                      onClick={() => setActiveTab('telemetry')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'telemetry' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      Telemetry
                    </button>
                  </div>
                </div>

                {/* Tab 1: Prominent Personal Photo */}
                {activeTab === 'profile' && (
                  <div className="relative p-3.5 bg-zinc-950 flex flex-col justify-between overflow-hidden group">
                    <div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                      <img
                        src={akshayPhoto}
                        alt="Akshay Macharla - Java Backend Developer & Educator"
                        className="w-full h-[380px] sm:h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="eager"
                      />

                      {/* Subtle bottom gradient for text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

                      {/* Floating badge top-left */}
                      <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>Java 17 • Spring Boot 3</span>
                      </div>

                      {/* Floating badge top-right */}
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>Educator & Creator</span>
                      </div>

                      {/* Bottom overlay card with verified identity */}
                      <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/10 text-white shadow-xl">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                            <span>Akshay Macharla</span>
                            <span className="text-zinc-400 text-xs font-normal">(@macharla_akshay)</span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Available</span>
                          </span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-snug">
                          Java Backend Developer • Tech Trainer • B.S. CS (9.0+ CGPA)
                        </p>
                      </div>
                    </div>

                    <div className="pt-2.5 px-1 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                      <span>Hyderabad, India</span>
                      <button
                        onClick={() => setActiveTab('code')}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 font-sans font-medium"
                      >
                        <span>View Spring API Code</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 2: Spring Boot Code */}
                {activeTab === 'code' && (
                  <div className="relative p-4 sm:p-5 bg-zinc-950 text-zinc-100 font-mono text-[11.5px] leading-relaxed overflow-x-auto min-h-[420px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-zinc-400 text-xs">
                        <span className="flex items-center gap-1.5 text-zinc-300">
                          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                          <span>FoodListingController.java</span>
                        </span>
                        <button
                          onClick={copyCode}
                          className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-800"
                        >
                          {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <pre className="text-zinc-300">
                        <code>
                          <span className="text-purple-400">@RestController</span>{'\n'}
                          <span className="text-purple-400">@RequestMapping</span>(<span className="text-emerald-300">"/api/v1/food-listings"</span>){'\n'}
                          <span className="text-blue-400">public class</span> <span className="text-yellow-300">FoodListingController</span> {'{'}{'\n\n'}
                          {'    '}<span className="text-blue-400">private final</span> FoodBridgeService <span className="text-zinc-200">foodService</span>;{'\n'}
                          {'    '}<span className="text-blue-400">private final</span> KafkaTemplate&lt;String, Object&gt; <span className="text-zinc-200">kafkaTemplate</span>;{'\n\n'}
                          {'    '}<span className="text-purple-400">@PostMapping</span>(<span className="text-emerald-300">"/&#123;id&#125;/claim"</span>){'\n'}
                          {'    '}<span className="text-purple-400">@Transactional</span>{'\n'}
                          {'    '}<span className="text-blue-400">public</span> ResponseEntity&lt;ClaimResult&gt; <span className="text-indigo-300">claimSurplus</span>({'\n'}
                          {'            '}<span className="text-purple-400">@PathVariable</span> Long id, {'\n'}
                          {'            '}<span className="text-purple-400">@AuthenticationPrincipal</span> User ngoUser) {'{'}{'\n'}
                          {'        '}<span className="text-zinc-500">// Optimistic locking via @Version</span>{'\n'}
                          {'        '}ClaimResult result = foodService.<span className="text-indigo-300">processClaim</span>(id, ngoUser);{'\n'}
                          {'        '}kafkaTemplate.<span className="text-indigo-300">send</span>(<span className="text-emerald-300">"food-listings-topic"</span>, result);{'\n'}
                          {'        '}<span className="text-blue-400">return</span> ResponseEntity.<span className="text-indigo-300">ok</span>(result);{'\n'}
                          {'    '}{'}'}{'\n'}
                          {'}'}
                        </code>
                      </pre>
                    </div>

                    <div className="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Spring Boot 3.2.3 • Java 17 LTS
                      </span>
                      <span className="font-mono text-zinc-500">BUILD SUCCESS</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Visual Topology */}
                {activeTab === 'architecture' && (
                  <div className="p-5 bg-zinc-950 text-white min-h-[420px] flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-zinc-400 mb-4 font-mono flex items-center justify-between">
                        <span>DISTRIBUTED ARCHITECTURE PIPELINE</span>
                        <span className="text-emerald-400">LIVE MAPPING</span>
                      </div>

                      <div className="space-y-3">
                        {/* Layer 1: Client & Ingress */}
                        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Cpu className="w-4 h-4 text-sky-400" />
                            <div>
                              <div className="text-xs font-semibold">Client Apps & Leaflet Map</div>
                              <div className="text-[10px] text-zinc-400">React + Vite, JWT Bearer Handshake</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-sky-300">HTTPS/TLS</span>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center -my-1 text-zinc-600 font-mono text-xs">↓ REST API (JSON)</div>

                        {/* Layer 2: Core Spring Boot Application */}
                        <div className="p-3 rounded-lg bg-indigo-950/60 border border-indigo-700/50 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Server className="w-4 h-4 text-indigo-400" />
                            <div>
                              <div className="text-xs font-semibold text-indigo-100">Spring Boot 3 Services</div>
                              <div className="text-[10px] text-indigo-300">Security RBAC • JPA @Version • Cron @Scheduled</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-900 text-indigo-200">Layered MVC</span>
                        </div>

                        {/* Layer 3: Persistence & Async Buses */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                              <Database className="w-3.5 h-3.5" /> PostGIS + Redis
                            </div>
                            <div className="text-[10px] text-zinc-400 mt-1">Spatial distance &lt;30ms, 5m TTL evictions</div>
                          </div>

                          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
                              <Radio className="w-3.5 h-3.5" /> Apache Kafka
                            </div>
                            <div className="text-[10px] text-zinc-400 mt-1">Async NGO alerts & listing stream topic</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-400 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                      <span>Zero Over-Claim Guarantee</span>
                      <span className="font-mono text-indigo-400">HTTP 409 on conflict</span>
                    </div>
                  </div>
                )}

                {/* Tab 4: Telemetry */}
                {activeTab === 'telemetry' && (
                  <div className="p-5 bg-zinc-950 text-white min-h-[420px] flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-zinc-400 mb-4 font-mono flex items-center justify-between">
                        <span>BACKEND SYSTEM METRICS</span>
                        <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> ALL SYSTEMS HEALTHY
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 uppercase font-mono">Spatial Query Latency</span>
                          <div className="text-lg font-bold text-white font-mono mt-0.5">24.2 ms</div>
                          <span className="text-[10px] text-emerald-400 font-mono">ST_DWithin (PostGIS)</span>
                        </div>
                        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 uppercase font-mono">Race Condition Defense</span>
                          <div className="text-lg font-bold text-indigo-400 font-mono mt-0.5">100%</div>
                          <span className="text-[10px] text-zinc-400 font-mono">JPA @Version Locking</span>
                        </div>
                        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 uppercase font-mono">Kafka Throughput</span>
                          <div className="text-lg font-bold text-white font-mono mt-0.5">0.4 ms</div>
                          <span className="text-[10px] text-zinc-400 font-mono">Event Dispatch Ack</span>
                        </div>
                        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 uppercase font-mono">Academic Honor GPA</span>
                          <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">9.0+</div>
                          <span className="text-[10px] text-zinc-400 font-mono">Chaitanya University</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800 font-mono text-[11px] text-zinc-300 space-y-1">
                        <div className="flex items-center justify-between text-zinc-400">
                          <span>[POST] /api/v1/food-listings/claim</span>
                          <span className="text-emerald-400">200 OK</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-400">
                          <span>[EVENT] FoodListingClaimedEvent</span>
                          <span className="text-indigo-400">DISPATCHED</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-400 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                      <span>Server Uptime: 99.98%</span>
                      <span className="font-mono text-emerald-400">Zero Critical Failures</span>
                    </div>
                  </div>
                )}

                {/* Card Footer Bar */}
                <div className="px-4 py-2.5 bg-zinc-50 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-900">Akshay Macharla</span>
                    <span className="text-zinc-300">•</span>
                    <span>Java Backend & Educator</span>
                  </div>
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium hover:underline text-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>

              {/* Decorative accent element under the window */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-zinc-200/60 transform rotate-1 hidden sm:block"></div>
            </div>
          </div>

        </div>

        {/* Subtle scroll indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-zinc-400 hover:text-zinc-600 transition-colors">
          <a href="#stats" className="flex flex-col items-center gap-1.5 text-xs font-medium focus:outline-none">
            <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
