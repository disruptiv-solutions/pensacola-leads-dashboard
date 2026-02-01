"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CloudLightning, 
  Wind, 
  Navigation, 
  ShieldAlert, 
  Camera, 
  Clock, 
  Phone, 
  ChevronRight, 
  Activity, 
  MapPin, 
  CheckCircle2,
  AlertCircle,
  Thermometer,
  CloudRain
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const NAVY_BLUE = "#0F172A";
const SAFETY_YELLOW = "#FACC15";

const DISPATCH_UNITS = [
  { id: 1, x: 30, y: 40, status: "EN_ROUTE" },
  { id: 2, x: 60, y: 20, status: "ON_SITE" },
  { id: 3, x: 45, y: 70, status: "EN_ROUTE" },
  { id: 4, x: 80, y: 50, status: "ON_SITE" },
];

// --- Components ---

const StormTrackerHUD = () => {
  const [stats, setStats] = useState({ wind: 14, pressure: 1012 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        wind: 12 + Math.floor(Math.random() * 8),
        pressure: 1008 + Math.floor(Math.random() * 10)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 left-6 z-50 pointer-events-none">
      <div className="bg-slate-900/90 backdrop-blur-md border border-yellow-500/30 p-4 rounded-xl shadow-2xl space-y-3 min-w-[200px]">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Storm Tracker HUD</span>
          <Activity className="w-3 h-3 text-yellow-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <Wind className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase">Wind Speed</span>
            </div>
            <div className="text-xl font-black text-white">{stats.wind} <span className="text-[10px] text-slate-500">MPH</span></div>
          </div>
          <div className="space-y-1 text-right">
            <div className="flex items-center justify-end gap-2 text-slate-400">
              <Thermometer className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase">Barometric</span>
            </div>
            <div className="text-xl font-black text-white">{stats.pressure} <span className="text-[10px] text-slate-500">MB</span></div>
          </div>
        </div>
        <div className="pt-2">
          <div className="flex justify-between items-center text-[8px] font-black text-yellow-500/50">
            <span>SECTOR: PENSACOLA</span>
            <span className="animate-pulse">● LIVE_FEED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DamageAssessmentAI = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [priorityCode, setPriorityCode] = useState<string | null>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setPriorityCode("ALPHA-7-STORM");
    }, 2500);
  };

  return (
    <div className="bg-white border-4 border-slate-900 p-8 rounded-3xl shadow-[12px_12px_0px_#FACC15] space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center border-2 border-slate-900">
          <Camera className="w-6 h-6 text-slate-900" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Rapid Damage AI</h3>
          <p className="text-xs font-bold text-slate-500 uppercase">Instant Priority Coding</p>
        </div>
      </div>

      <div 
        onClick={handleAnalyze}
        className="relative aspect-video bg-slate-100 border-4 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-yellow-400 transition-colors overflow-hidden group"
      >
        <AnimatePresence>
          {isAnalyzing ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-20"
            >
              <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
              <div className="text-yellow-400 font-black text-xs tracking-widest animate-pulse">ANALYZING_STRUCTURAL_INTEGRITY</div>
            </motion.div>
          ) : priorityCode ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 bg-yellow-400 flex flex-col items-center justify-center gap-2 z-20"
            >
              <ShieldAlert className="w-12 h-12 text-slate-900" />
              <div className="text-slate-900 font-black text-3xl tracking-tighter">{priorityCode}</div>
              <div className="text-slate-900 font-bold text-[10px] uppercase">Priority Dispatch Queue Active</div>
            </motion.div>
          ) : (
            <>
              <CloudLightning className="w-12 h-12 text-slate-300 group-hover:text-yellow-400 transition-colors" />
              <div className="text-center">
                <div className="text-sm font-black text-slate-900">TAP TO UPLOAD DAMAGE PHOTO</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">AI Assessment in 2.5s</div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const LiveDispatchMap = () => (
  <div className="relative aspect-square sm:aspect-video bg-slate-900 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl">
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    
    {/* Simplified Vector Map */}
    <svg className="absolute inset-0 w-full h-full p-12" viewBox="0 0 100 100">
      <path d="M10,20 L40,20 L45,30 L60,30 L65,45 L80,45 L85,70 L70,85 L50,80 L40,65 L30,60 L20,40 Z" fill="none" stroke="#334155" strokeWidth="1" />
      
      {DISPATCH_UNITS.map(unit => (
        <motion.g 
          key={unit.id}
          initial={{ x: unit.x, y: unit.y }}
          animate={{ 
            x: unit.x + (Math.random() * 10 - 5), 
            y: unit.y + (Math.random() * 10 - 5) 
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <circle r="2" fill={unit.status === "ON_SITE" ? "#FACC15" : "#38BDF8"} className="animate-pulse" />
          <text x="4" y="2" className="text-[4px] font-black fill-white/40 uppercase">UNIT_{unit.id}</text>
        </motion.g>
      ))}
    </svg>

    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="text-[10px] font-black text-white/60 uppercase">On Site</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sky-400" />
          <span className="text-[10px] font-black text-white/60 uppercase">En Route</span>
        </div>
      </div>
      <div className="text-[10px] font-black text-yellow-500 uppercase tracking-widest animate-pulse">
        Active Field Operations: 14
      </div>
    </div>
  </div>
);

export default function GuyBrothersRoofing() {
  const [inspectionsLeft, setInspectionsLeft] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setInspectionsLeft(prev => (prev > 1 ? prev - 1 : 12));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-yellow-400 selection:text-slate-950 overflow-x-hidden">
      <StormTrackerHUD />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Radar Overlay Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950 z-10" />
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(250,204,21,0.1)_180deg,transparent_360deg)]"
          />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-yellow-400 text-slate-950 font-black text-sm uppercase tracking-tighter border-4 border-slate-950 shadow-[8px_8px_0px_rgba(250,204,21,0.2)]">
              <ShieldAlert className="w-5 h-5" />
              Sector: Pensacola Status Active
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase">
              GUY <br />
              <span className="text-yellow-400">BROTHERS</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-bold uppercase tracking-tight">
              Regional Storm Response Center. <br />
              Professional Dispatch. Real-Time Availability.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-yellow-400 text-slate-950 px-12 py-6 text-2xl font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-4 group">
              Initiate Response <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl">
              <div className="text-right">
                <div className="text-[10px] font-black text-slate-500 uppercase">Available Inspections</div>
                <div className="text-2xl font-black text-yellow-400">{inspectionsLeft} <span className="text-xs text-slate-500 uppercase">Remaining</span></div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intake & AI Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Rapid Intake Portal</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Urgent Repair <br /> Request
              </h2>
              <p className="text-slate-400 font-bold text-lg leading-relaxed max-w-md">
                Direct routing to the regional response team. Your request is prioritized by our AI damage assessment protocol.
              </p>
            </div>

            <DamageAssessmentAI />
          </div>

          <div className="bg-slate-900 border-4 border-slate-800 p-8 sm:p-12 rounded-[3rem] space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Dispatch Form</h3>
              <p className="text-yellow-500 font-bold text-sm uppercase">Immediate field unit synchronization</p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500">Property Owner</label>
                  <input type="text" className="w-full bg-slate-950 border-2 border-slate-800 p-4 font-bold outline-none focus:border-yellow-400 transition-colors" placeholder="NAME" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500">Contact Number</label>
                  <input type="tel" className="w-full bg-slate-950 border-2 border-slate-800 p-4 font-bold outline-none focus:border-yellow-400 transition-colors" placeholder="PHONE" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-500">Service Address</label>
                <input type="text" className="w-full bg-slate-950 border-2 border-slate-800 p-4 font-bold outline-none focus:border-yellow-400 transition-colors" placeholder="FULL ADDRESS" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-500">Damage Description</label>
                <textarea rows={4} className="w-full bg-slate-950 border-2 border-slate-800 p-4 font-bold outline-none focus:border-yellow-400 transition-colors resize-none" placeholder="DESCRIBE THE ISSUE..." />
              </div>
              
              <button className="w-full py-6 bg-yellow-400 text-slate-950 text-xl font-black uppercase tracking-widest hover:bg-white transition-colors">
                Initialize Dispatch
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Dispatch Map Section */}
      <section className="bg-slate-900 py-24 px-6 border-y-4 border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Live Operations</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Field Unit <br /> Deployment
            </h2>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-black text-white">14</div>
                <div className="text-[10px] font-black text-slate-500 uppercase">Active Units</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-white">42m</div>
                <div className="text-[10px] font-black text-slate-500 uppercase">Avg Response</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              {["Emergency Tarping", "Structural Reinforcement", "Leak Detection", "Full Replacement"].map(service => (
                <div key={service} className="flex items-center gap-4 p-4 bg-slate-950 border-2 border-slate-800 font-black text-xs uppercase tracking-widest">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  {service}
                </div>
              ))}
            </div>
          </div>

          <LiveDispatchMap />
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-yellow-400 border-t-4 border-slate-950 p-4 flex gap-4">
        <button className="flex-1 bg-slate-950 text-white py-4 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3">
          <Phone className="w-5 h-5 fill-current" />
          Emergency Hotline
        </button>
      </div>

      <footer className="py-24 px-6 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-4xl font-black tracking-tighter uppercase">
              GUY <span className="text-yellow-400">BROTHERS</span>
            </div>
            <p className="text-slate-500 font-bold text-sm max-w-xs leading-relaxed uppercase">
              Authorized Regional Storm Response Center. Serving Pensacola and the surrounding sectors since 1970.
            </p>
          </div>
          <div className="text-right space-y-4">
            <div className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Official Infrastructure</div>
            <div className="text-sm font-bold text-slate-700 uppercase">
              © 2026 GUY_BROTHERS_ROOFING<br />
              PENSACOLA_SECTOR_7_RESPONSE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
