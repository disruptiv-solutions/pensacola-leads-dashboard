"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  Shield, 
  Droplets, 
  ChevronRight, 
  ChevronLeft,
  Activity, 
  Camera, 
  Check,
  Navigation,
  Truck,
  Zap,
  Star
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const ELECTRIC_CYAN = "#00D9FF";
const GOLD = "#FFD700";

const SERVICE_PACKAGES = [
  { id: "basic", name: "Essential Refresh", price: 150, services: ["Exterior Wash", "Interior Vacuum", "Window Clean"], time: "2 hours" },
  { id: "premium", name: "Complete Detail", price: 350, services: ["Full Exterior Detail", "Deep Interior Clean", "Wet Sanding", "Polishing", "Headlight Restoration"], time: "4 hours" },
  { id: "ceramic", name: "Ceramic Protection", price: 850, services: ["Complete Detail", "Ceramic Coating Application", "Paint Correction", "5-Year Protection Warranty"], time: "8 hours", featured: true },
];

const COVERAGE_ZONES = [
  { zip: "32583", city: "East Milton", eta: "15 min" },
  { zip: "32570", city: "Pensacola", eta: "25 min" },
  { zip: "32561", city: "Gulf Breeze", eta: "35 min" },
  { zip: "32578", city: "Navarre", eta: "45 min" },
];

// --- Components ---

const FleetTrackerHUD = () => {
  const [status, setStatus] = useState({ location: "Milton", nextSlot: "2:30 PM" });

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-none">
      <div className="bg-black/90 backdrop-blur-md border-2 border-cyan-500/30 p-4 rounded-2xl shadow-[0_0_30px_rgba(0,217,255,0.3)] space-y-3 min-w-[240px]">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Fleet Tracker</span>
          <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-bold text-white">
            <Truck className="w-3 h-3 text-cyan-400" />
            <span>Mobile Unit Alpha</span>
          </div>
          <div className="text-[9px] text-slate-400 uppercase tracking-wide">
            Currently in: <span className="text-cyan-400">{status.location}</span>
          </div>
          <div className="text-[9px] text-slate-400 uppercase tracking-wide">
            Next Available: <span className="text-gold">{status.nextSlot} Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-black shadow-[0_0_40px_rgba(0,217,255,0.2)] group cursor-ew-resize">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200" 
          alt="After" 
          className="w-full h-full object-cover"
        />
      </div>
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200" 
          alt="Before" 
          className="w-full h-full object-cover grayscale brightness-75"
        />
      </div>
      <div 
        className="absolute inset-y-0 w-1 bg-cyan-400 shadow-[0_0_20px_#00D9FF] flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-10 h-10 bg-black border-2 border-cyan-400 rounded-full shadow-2xl flex items-center justify-center -translate-x-1/2">
          <ChevronLeft className="w-4 h-4 text-cyan-400" />
          <ChevronRight className="w-4 h-4 text-cyan-400" />
        </div>
      </div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPos} 
        onChange={(e) => setSliderPos(parseInt(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-ew-resize"
      />
      <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-cyan-400/30 text-white text-[10px] font-black tracking-widest uppercase">
        Slide to reveal transformation
      </div>
    </div>
  );
};

const ProtectionCalculator = () => {
  const [years, setYears] = useState(5);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-black border-4 border-cyan-500 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,217,255,0.3)] space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
          <Shield className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Protection Calculator</h3>
          <p className="text-xs font-bold text-cyan-400 uppercase">Ceramic Coating Longevity</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Coverage Duration</span>
            <span className="text-3xl font-black text-cyan-400">{years} <span className="text-sm text-slate-500">YEARS</span></span>
          </div>
          <input 
            type="range" 
            min="3" 
            max="10" 
            step="1"
            value={years}
            onChange={e => setYears(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-black/50 border border-cyan-500/30 rounded-xl">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Est. Value</div>
            <div className="text-2xl font-black text-white">${years * 170}</div>
          </div>
          <div className="p-4 bg-black/50 border border-cyan-500/30 rounded-xl">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Washes Saved</div>
            <div className="text-2xl font-black text-white">{years * 52}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailersEyeAI = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<string[] | null>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults(["Swirl Marks Detected", "Minor Oxidation", "Headlight Cloudiness"]);
    }, 3000);
  };

  return (
    <div className="bg-white border-4 border-black p-8 rounded-none shadow-[12px_12px_0px_#00D9FF] space-y-6">
      <div className="flex items-center gap-4">
        <Camera className="w-8 h-8 text-black" />
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tighter">Detailer's Eye AI</h3>
          <p className="text-xs font-bold text-slate-500 uppercase">Visual Damage Assessment</p>
        </div>
      </div>

      <div 
        onClick={handleAnalyze}
        className="relative aspect-video bg-slate-100 border-4 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-cyan-500 transition-colors overflow-hidden group"
      >
        <AnimatePresence>
          {isAnalyzing ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-6 z-20"
            >
              <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <div className="text-cyan-400 font-black text-xs tracking-widest animate-pulse">ANALYZING SURFACE CONDITIONS</div>
            </motion.div>
          ) : results ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 flex flex-col items-center justify-center gap-4 p-8 z-20"
            >
              <Sparkles className="w-12 h-12 text-white" />
              <div className="text-white font-black text-xl uppercase">Assessment Complete</div>
              <div className="space-y-2 w-full max-w-xs">
                {results.map(issue => (
                  <div key={issue} className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold">
                    <Check className="w-4 h-4" />
                    {issue}
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <>
              <Camera className="w-12 h-12 text-slate-300 group-hover:text-cyan-500 transition-colors" />
              <div className="text-center">
                <div className="text-sm font-black text-slate-900">UPLOAD VEHICLE PHOTOS</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">AI Analysis in 3 Seconds</div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function AAMobileDetailingLanding() {
  const [selectedPackage, setSelectedPackage] = useState(SERVICE_PACKAGES[1]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      <FleetTrackerHUD />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-cyan-500/30 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div className="text-xl font-black tracking-tighter uppercase">
              AA <span className="text-cyan-400">Mobile</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black tracking-widest text-slate-400">
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">SERVICES</span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">COVERAGE</span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">BOOKING</span>
            <button className="px-8 py-3 bg-cyan-500 text-black rounded-full hover:bg-white transition-colors">
              SCHEDULE NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full backdrop-blur-sm">
                <Navigation className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Mobile Unit Status: En Route</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                Revive <br />
                Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ride.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-md font-bold leading-relaxed">
                Premium mobile detailing from Escambia to Okaloosa County. 
                Ceramic coating. Paint correction. We come to you.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-black text-sm rounded-full hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all flex items-center gap-3">
                BUILD YOUR PACKAGE <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="flex text-gold">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase">738 Followers</span>
              </div>
            </div>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* Service Package Builder */}
      <section className="py-24 px-8 bg-gradient-to-b from-slate-900 to-black border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-[10px] font-black text-cyan-400 tracking-[0.3em] uppercase">Service Matrix</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Build Your Package.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICE_PACKAGES.map(pkg => (
              <div 
                key={pkg.id}
                className={cn(
                  "relative p-8 rounded-3xl border-4 transition-all duration-500 flex flex-col justify-between min-h-[450px]",
                  pkg.featured 
                    ? "border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-[0_0_50px_rgba(0,217,255,0.3)] scale-105" 
                    : "border-slate-800 bg-slate-900/50 hover:border-cyan-500/50"
                )}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-[10px] font-black rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-cyan-400">${pkg.price}</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">{pkg.time}</div>
                  </div>
                  <ul className="space-y-3">
                    {pkg.services.map(service => (
                      <li key={service} className="flex items-center gap-3 text-sm text-slate-300 font-bold">
                        <Check className="w-4 h-4 text-cyan-400" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={cn(
                  "w-full py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all",
                  pkg.featured ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-black" : "bg-slate-800 text-white hover:bg-cyan-500/20"
                )}>
                  SELECT PACKAGE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Zone & Tools */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-[10px] font-black text-cyan-400 tracking-[0.3em] uppercase">Service Area</div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                Coverage <br />
                Zone Map.
              </h2>
              <p className="text-lg text-slate-400 font-bold leading-relaxed max-w-md">
                Serving Escambia to Okaloosa County. Real-time ETA calculation based on your location.
              </p>
            </div>

            <div className="space-y-4">
              {COVERAGE_ZONES.map(zone => (
                <div key={zone.zip} className="flex items-center justify-between p-6 bg-slate-900 border-2 border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm font-black uppercase">{zone.city}</div>
                      <div className="text-[10px] text-slate-500 font-bold">{zone.zip}</div>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-black text-sm">{zone.eta}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <ProtectionCalculator />
            <DetailersEyeAI />
          </div>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <button className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-black text-sm rounded-2xl shadow-[0_0_30px_rgba(0,217,255,0.5)] flex items-center justify-center gap-3">
          <Calendar className="w-4 h-4" />
          BOOK MOBILE DETAIL
        </button>
      </div>

      <footer className="bg-slate-950 border-t border-cyan-500/20 py-24 px-8 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <div className="text-3xl font-black tracking-tighter uppercase">
                AA <span className="text-cyan-400">Mobile</span>
              </div>
            </div>
            <p className="text-slate-500 font-bold text-sm max-w-xs leading-relaxed">
              Premium mobile auto detailing. Ceramic coating specialists. 
              Serving Escambia to Okaloosa County.
            </p>
          </div>
          <div className="text-right space-y-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Contact Command</div>
            <div className="text-sm font-bold text-slate-600 uppercase">
              © 2026 AA_MOBILE_DETAILING_LLC<br />
              PREMIUM_AUTOMOTIVE_CARE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
