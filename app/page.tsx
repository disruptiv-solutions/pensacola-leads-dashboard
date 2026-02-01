"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Zap, 
  Rocket, 
  Bot, 
  TrendingUp,
  ChevronDown,
  ArrowRight,
  MapPin,
  Users,
  Megaphone,
  Timer,
  DollarSign,
  Activity,
  Network,
  Menu,
  X,
  Building2,
  Mail,
  Phone as PhoneIcon,
  MapPinned,
  Briefcase
} from "lucide-react";

const PLAYS = [
  {
    id: "launch",
    icon: Rocket,
    title: "LAUNCH",
    subtitle: "High-converting websites",
    description: "Forget 3-month timelines. We build high-performance, mobile-first websites in under a week. Designed for conversion, not just aesthetics.",
    features: [
      "5-Day Turnaround",
      "SEO Foundation Built-in",
      "Mobile Optimized"
    ],
    defaultOpen: true
  },
  {
    id: "automate",
    icon: Bot,
    title: "AUTOMATE",
    subtitle: "Miss Zero Leads",
    description: "Your business sleeps, your sales system shouldn't. We install SMS & Email bots that instantly follow up with leads and book appointments automatically.",
    features: [],
    defaultOpen: false
  },
  {
    id: "boost",
    icon: TrendingUp,
    title: "BOOST",
    subtitle: "Pensacola Directory",
    description: "Plug directly into our exclusive Pensacola Business Directory. Get instant visibility from local customers looking specifically for your services.",
    features: [],
    defaultOpen: false
  }
];

const BENEFITS = [
  {
    icon: Timer,
    title: "Done in a Week",
    description: "Speed is money. We launch your site and automations while others are still sending proposals."
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    description: "No hourly billing surprises. Clear, upfront packages designed for small business budgets."
  },
  {
    icon: Activity,
    title: "Recurring Results",
    description: "We don't just launch and leave. Our automations work 24/7 to turn traffic into paying customers."
  },
  {
    icon: Network,
    title: "Local Network",
    description: "Join a community of Pensacola's top businesses. Cross-promote and grow together."
  }
];

export default function Home() {
  const [openPlay, setOpenPlay] = useState("launch");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDirectoryForm, setShowDirectoryForm] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    category: "",
    description: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Directory submission:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setShowDirectoryForm(false);
      setFormSubmitted(false);
      setFormData({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        address: "",
        category: "",
        description: ""
      });
    }, 2000);
  };

  return (
    <div className="bg-[#0f1115] text-white font-['Space_Grotesk',sans-serif] antialiased selection:bg-blue-500 selection:text-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&display=swap');
        
        .neon-text-glow {
          text-shadow: 0 0 20px rgba(13, 127, 242, 0.5);
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        
        .pulse-dot::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #0d7ff2;
          border-radius: 50%;
          z-index: -1;
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
      `}</style>

      {/* Top Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-[#283039] bg-[#0f1115]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-white">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Digital Duo Studio</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#playbook">The Playbook</a>
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#advantage">Local Advantage</a>
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#benefits">Why Us</a>
          </nav>
          
          <button className="hidden md:flex h-9 items-center justify-center rounded-lg bg-white px-4 text-sm font-bold text-[#0f1115] hover:bg-slate-200 transition-colors">
            Get Started
          </button>
          
          <button className="md:hidden p-2 text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="flex flex-col w-full pt-16">
        {/* Hero Section */}
        <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0f1115] py-20 px-4">
          {/* Background Grid & Glow */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: 'linear-gradient(to right, #242832 1px, transparent 1px), linear-gradient(to bottom, #242832 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          <div className="absolute -top-[20%] right-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#ccff00]/5 blur-[100px]"></div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Accepting New Clients
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl md:text-8xl neon-text-glow">
              SCALE YOUR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">LOCAL BUSINESS</span><br/>
              <span className="text-blue-500">ON AUTOPILOT</span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl md:text-2xl font-light">
              Web Design + Automations + The Pensacola Directory Advantage. <br className="hidden sm:block"/>
              Stop chasing leads. Let them come to you.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex h-14 min-w-[200px] items-center justify-center rounded-lg bg-blue-500 px-8 text-base font-bold shadow-[0_0_20px_rgba(13,127,242,0.4)] transition-all hover:bg-blue-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(13,127,242,0.6)]">
                Start Growing Now
              </button>
              <Link href="/demo-pages" className="flex h-14 min-w-[200px] items-center justify-center rounded-lg border border-slate-700 bg-transparent px-8 text-base font-bold transition-all hover:border-slate-500 hover:bg-[#1a1d24]">
                See Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Choose Your Play (Accordion) */}
        <section className="relative w-full bg-[#0f1115] py-24 px-4 border-t border-[#283039]" id="playbook">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Sticky Content */}
              <div className="flex flex-col justify-center lg:sticky lg:top-32 lg:h-fit">
                <h2 className="mb-6 text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl">
                  Choose <br/>
                  <span className="text-slate-600">Your Play</span>
                </h2>
                <p className="mb-8 text-lg text-slate-400 max-w-md">
                  We don't do generic marketing. We run specific plays designed to get local businesses more customers, faster. Pick your starting point.
                </p>
                <div className="hidden lg:block">
                  <a className="group inline-flex items-center gap-2 text-blue-500 font-bold hover:text-white transition-colors" href="#">
                    View full pricing details 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Accordion List */}
              <div className="flex flex-col gap-4">
                {PLAYS.map((play) => {
                  const IconComponent = play.icon;
                  const isOpen = openPlay === play.id;
                  
                  return (
                    <div
                      key={play.id}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen 
                          ? 'bg-[#1a1d24] border-blue-500/50' 
                          : 'bg-[#0f1115] border-slate-800'
                      }`}
                    >
                      <button
                        onClick={() => setOpenPlay(isOpen ? "" : play.id)}
                        className="flex w-full cursor-pointer items-center justify-between p-6 md:p-8 text-left"
                      >
                        <div className="flex items-center gap-6">
                          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isOpen ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                          }`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold md:text-2xl">{play.title}</h3>
                            <p className={`text-sm font-medium uppercase tracking-wider ${
                              isOpen ? 'text-blue-400' : 'text-slate-500'
                            }`}>
                              {play.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className={`transition-all duration-300 ${
                          isOpen ? 'rotate-180 text-blue-500' : 'text-slate-500'
                        }`}>
                          <ChevronDown className="w-8 h-8" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0 pl-[calc(3rem+1.5rem)] md:pl-[calc(4rem+2rem)]">
                          <p className="mb-6 text-slate-400 leading-relaxed">
                            {play.description}
                          </p>
                          {play.features.length > 0 && (
                            <ul className="mb-6 space-y-3">
                              {play.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                  </div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                          <button className="text-sm font-bold bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors">
                            Select {play.title}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* The Local Advantage Section */}
        <section className="relative overflow-hidden bg-[#0f1115] py-24 px-4" id="advantage">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#1a1d24]/50 to-[#0f1115] pointer-events-none"></div>
          
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
                The Local <span className="text-blue-500">Advantage</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-lg">
                Don't just be online. Be local. Our exclusive directory funnels high-intent customers straight to you.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Map Visualization */}
              <div className="relative rounded-2xl border border-slate-800 bg-[#161a21] p-2 shadow-2xl overflow-hidden group">
                <div className="relative h-[400px] w-full rounded-xl bg-slate-800 overflow-hidden">
                  <img 
                    alt="Pensacola Map" 
                    className="h-full w-full object-cover opacity-30 grayscale mix-blend-luminosity"
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                  />
                  
                  {/* Glowing Nodes */}
                  <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_15px_#0d7ff2] pulse-dot"></div>
                  <div className="absolute top-1/2 left-1/2 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_20px_#0d7ff2] pulse-dot" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/3 right-1/4 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_15px_#0d7ff2] pulse-dot" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/3 right-1/3 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#0d7ff2] pulse-dot" style={{animationDelay: '1.2s'}}></div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 h-full w-full pointer-events-none">
                    <line stroke="#0d7ff2" strokeOpacity="0.4" strokeWidth="1" x1="25%" y1="25%" x2="50%" y2="50%" />
                    <line stroke="#0d7ff2" strokeOpacity="0.4" strokeWidth="1" x1="50%" y1="50%" x2="75%" y2="66%" />
                    <line stroke="#0d7ff2" strokeOpacity="0.4" strokeWidth="1" x1="50%" y1="50%" x2="66%" y2="33%" />
                  </svg>
                </div>

                {/* Floating Data Card */}
                <div className="absolute bottom-6 right-6 rounded-lg border border-slate-700 bg-[#0f1115]/90 p-4 backdrop-blur-md shadow-lg w-48">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-bold text-slate-300 uppercase">Traffic Surge</span>
                  </div>
                  <div className="text-2xl font-bold">+240%</div>
                  <div className="text-xs text-slate-500">Local Impressions</div>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dominant Local Presence</h3>
                    <p className="mt-2 text-slate-400">
                      We position your brand exactly where Pensacola locals are looking. Skip the global competition and own your backyard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Community Trust</h3>
                    <p className="mt-2 text-slate-400">
                      Being part of the Digital Duo network signals reliability. Customers trust local directories over random Google searches.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Amplified Reach</h3>
                    <p className="mt-2 text-slate-400">
                      Your business gets featured in our monthly "Best of Pensacola" blasts, putting your offer in front of thousands of active subscribers.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setShowDirectoryForm(true)}
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-[#0f1115] transition-transform hover:scale-105"
                  >
                    Join the Directory
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid (Bento Box Style) */}
        <section className="relative w-full bg-[#0b0c0f] py-24 px-4" id="benefits">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Digital Duo?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BENEFITS.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={idx} className="group relative overflow-hidden rounded-2xl bg-[#1a1d24] p-8 transition-all hover:bg-[#20242c]">
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-500/5 blur-2xl transition-all group-hover:bg-blue-500/10"></div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                    <p className="text-slate-400">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#283039] bg-[#0f1115] py-12 px-4 text-center md:text-left">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">Digital Duo Studio</span>
              </div>
              
              <div className="flex gap-8 text-sm font-medium text-slate-400">
                <a className="hover:text-white transition-colors" href="#">Terms</a>
                <a className="hover:text-white transition-colors" href="#">Privacy</a>
                <Link className="hover:text-white transition-colors" href="/demo-pages">Directory</Link>
                <a className="hover:text-white transition-colors" href="#">Contact</a>
              </div>
              
              <p className="text-xs text-slate-500">
                © 2026 Digital Duo Studio. Built for Pensacola.
              </p>
            </div>
          </div>
        </footer>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 z-40 w-full border-t border-slate-800 bg-[#0f1115]/90 p-4 backdrop-blur md:hidden">
          <button className="w-full rounded-lg bg-blue-500 py-3 text-sm font-bold shadow-lg">
            Start Growing Now
          </button>
        </div>
      </main>

      {/* Directory Form Modal */}
      {showDirectoryForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1a1d24] rounded-2xl border border-slate-700 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowDirectoryForm(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              {!formSubmitted ? (
                <>
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">Join the Directory</h2>
                        <p className="text-slate-400 text-sm">Get listed in Pensacola's premier business directory</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Business Name */}
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">
                        Business Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleFormChange}
                          required
                          className="w-full bg-[#0f1115] border border-slate-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                          placeholder="Your Business Name"
                        />
                      </div>
                    </div>

                    {/* Owner Name */}
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">
                        Owner / Contact Name *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleFormChange}
                          required
                          className="w-full bg-[#0f1115] border border-slate-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#0f1115] border border-slate-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                            placeholder="you@business.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">
                          Phone *
                        </label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-[#0f1115] border border-slate-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                            placeholder="(850) 555-0123"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">
                        Business Address *
                      </label>
                      <div className="relative">
                        <MapPinned className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleFormChange}
                          required
                          className="w-full bg-[#0f1115] border border-slate-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                          placeholder="123 Main St, Pensacola, FL 32501"
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">
                        Business Category *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleFormChange}
                          required
                          className="w-full bg-[#0f1115] border border-slate-700 rounded-lg pl-11 pr-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select a category</option>
                          <option value="automotive">Automotive</option>
                          <option value="construction">Construction</option>
                          <option value="food-beverage">Food & Beverage</option>
                          <option value="health-wellness">Health & Wellness</option>
                          <option value="home-services">Home Services</option>
                          <option value="professional-services">Professional Services</option>
                          <option value="retail">Retail</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">
                        Business Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        required
                        rows={4}
                        className="w-full bg-[#0f1115] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
                        placeholder="Tell us about your business, services, and what makes you unique..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 h-12 rounded-lg bg-blue-500 text-white font-bold shadow-[0_0_20px_rgba(13,127,242,0.4)] transition-all hover:bg-blue-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(13,127,242,0.6)]"
                      >
                        Submit Application
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowDirectoryForm(false)}
                        className="px-6 h-12 rounded-lg border border-slate-700 text-slate-300 font-bold hover:bg-slate-800 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                  <p className="text-slate-400">
                    Thank you for your interest. We'll review your application and get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
