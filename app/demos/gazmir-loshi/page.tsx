"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Phone, 
  Activity, 
  ChevronRight, 
  Star, 
  Wrench, 
  Hammer, 
  Lightbulb, 
  Droplets,
  Send
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const PRIMARY_ORANGE = "#FF5A36";
const CITIES = [
  { 
    id: "pensacola", 
    name: "Pensacola", 
    techs: 4, 
    lat: "30.4213° N", 
    long: "87.2169° W",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" 
  },
  { 
    id: "jax", 
    name: "Jacksonville", 
    techs: 7, 
    lat: "30.3322° N", 
    long: "81.6557° W",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "tallahassee", 
    name: "Tallahassee", 
    techs: 3, 
    lat: "30.4383° N", 
    long: "84.2807° W",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "lakeland", 
    name: "Lakeland", 
    techs: 5, 
    lat: "28.0395° N", 
    long: "81.9498° W",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80&w=1000"
  },
];

const SERVICES = [
  { id: "repair", title: "Emergency Repair", icon: Wrench, desc: "Immediate structural & mechanical intervention." },
  { id: "install", title: "System Install", icon: Hammer, desc: "Precision deployment of hardware & infrastructure." },
  { id: "electric", title: "Power Grid", icon: Lightbulb, desc: "High-voltage electrical maintenance & routing." },
  { id: "plumbing", title: "Fluid Systems", icon: Droplets, desc: "Advanced hydraulic & plumbing solutions." },
];

const RECENT_LISTINGS = [
  "Roof Leak Patch - Pensacola",
  "Panel Upgrade - Jacksonville",
  "HVAC Diagnostic - Tallahassee",
  "Deck Reconstruction - Lakeland",
  "Gutter System - Pensacola",
  "Drywall Finish - Jacksonville",
  "Smart Home Setup - Tallahassee",
  "Fence Installation - Lakeland",
  "Kitchen Remodel - Pensacola",
  "Bathroom Tile - Jacksonville",
  "Water Heater Swap - Tallahassee",
  "Window Sealing - Lakeland",
  "Door Frame Repair - Pensacola",
  "Lighting Retrofit - Jacksonville",
  "Siding Repair - Tallahassee",
  "Deck Staining - Lakeland",
  "Floor Leveling - Pensacola",
  "Cabinet Refacing - Jacksonville",
  "Attic Insulation - Tallahassee",
  "Pressure Washing - Lakeland",
];

// --- Components ---

const StatusBadge = () => (
  <div className="flex items-center gap-2 px-3 py-1 bg-black/40 border border-[#FF5A36]/30 rounded-full backdrop-blur-sm w-fit">
    <motion.div 
      animate={{ opacity: [1, 0.4, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-2 h-2 rounded-full bg-[#FF5A36] shadow-[0_0_8px_#FF5A36]"
    />
    <span className="text-[10px] font-medium tracking-wider text-[#FF5A36] whitespace-nowrap">Network Active Florida</span>
  </div>
);

const RadarSweep = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
      >
        <motion.div 
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 4 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[100px] border-[#FF5A36]/10 rounded-full"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-[#FF5A36]/5"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

const DispatchHUD = () => (
  <div className="fixed bottom-6 right-6 z-40">
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-black/80 border border-slate-700 p-4 backdrop-blur-md rounded-lg shadow-2xl flex flex-col gap-2 min-w-[240px]"
    >
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <span className="text-[10px] font-semibold text-slate-400">Active Dispatch</span>
        <Activity className="w-3 h-3 text-[#FF5A36]" />
      </div>
      <div className="space-y-1">
        {CITIES.map(city => (
          <div key={city.id} className="flex justify-between items-center text-[11px] font-medium">
            <span className="text-slate-300">{city.name}</span>
            <span className="text-[#FF5A36]">{city.techs} Techs</span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default function GazmirLandingPage() {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "connecting" | "sent">("idle");

  const handleCityChange = (city: typeof CITIES[0]) => {
    if (city.id === selectedCity.id) return;
    setIsScanning(true);
    setTimeout(() => {
      setSelectedCity(city);
      setIsScanning(false);
    }, 800);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("connecting");
    setTimeout(() => {
      setFormStatus("sent");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-200 font-sans selection:bg-[#FF5A36]/30 overflow-x-hidden">
      <RadarSweep active={isScanning} />
      <DispatchHUD />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row border-b border-slate-800">
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center gap-8 relative z-10">
          <StatusBadge />
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-white">
              GAZMIR <br />
              <span className="text-[#FF5A36]">LOSHI V</span>
            </h1>
            <p className="max-w-md text-slate-400 text-lg font-medium tracking-tight">
              Regional infrastructure for the Florida Panhandle. 
              High-velocity maintenance. Zero latency dispatch.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('intake')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#FF5A36] text-black font-bold tracking-wide text-sm hover:bg-white transition-colors flex items-center gap-2 group"
            >
              Execute Task <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-4 px-6 border border-slate-800 bg-white/5 backdrop-blur-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-[10px]">
                <div className="text-white font-bold">4.7 Star Proof</div>
                <div className="text-slate-500">2,400+ Operations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative bg-slate-900 overflow-hidden min-h-[600px] lg:min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A36]/20 to-transparent z-10" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          {/* Interactive Map Mockup */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 lg:p-12">
            <div className="relative w-full max-w-2xl border border-slate-700/50 rounded-2xl bg-black/40 backdrop-blur-xl p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 overflow-hidden">
              <div className="flex justify-between items-start shrink-0">
                <div className="space-y-1">
                  <div className="text-[10px] font-semibold text-[#FF5A36]">System Locator</div>
                  <div className="text-xl sm:text-2xl font-black tracking-tight text-white">{selectedCity.name}</div>
                </div>
                <div className="text-right text-[9px] sm:text-[10px] text-slate-500 font-mono">
                  <div>{selectedCity.lat}</div>
                  <div>{selectedCity.long}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {CITIES.map(city => (
                  <button
                    key={city.id}
                    onClick={() => handleCityChange(city)}
                    className={cn(
                      "relative p-3 sm:p-4 border transition-all duration-500 text-left group overflow-hidden min-h-[80px] sm:min-h-[100px]",
                      selectedCity.id === city.id 
                        ? "border-[#FF5A36] bg-[#FF5A36]/5" 
                        : "border-slate-800 bg-white/5 hover:border-slate-600"
                    )}
                  >
                    {/* Satellite Background */}
                    <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <img 
                        src={city.image} 
                        alt="" 
                        className="w-full h-full object-cover grayscale brightness-50"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="relative z-10">
                      <div className="text-[9px] sm:text-[10px] font-medium text-slate-400 group-hover:text-[#FF5A36] transition-colors">Region {city.name}</div>
                      <div className="text-base sm:text-lg font-bold text-white">{city.name}</div>
                    </div>

                    {selectedCity.id === city.id && (
                      <motion.div 
                        layoutId="active-city"
                        className="absolute bottom-0 left-0 h-1 bg-[#FF5A36] w-full z-20"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-3 sm:p-4 bg-white/5 border border-slate-800 rounded flex flex-col xs:flex-row items-start xs:items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#FF5A36]/20 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5A36]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] font-medium text-slate-500">Est. Response</div>
                    <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Under 45 Mins</div>
                  </div>
                </div>
                <div className="hidden xs:block h-8 w-px bg-slate-800 shrink-0" />
                <div className="xs:text-right">
                  <div className="text-[9px] sm:text-[10px] font-medium text-slate-500">Availability</div>
                  <div className="text-xs sm:text-sm font-bold text-green-500 whitespace-nowrap">High Priority</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Ticker */}
      <div className="bg-black border-y border-slate-800 py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...RECENT_LISTINGS, ...RECENT_LISTINGS].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[11px] font-medium text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
              <span className="text-slate-300">{item}</span>
              <span className="text-slate-700">// Completed</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Service Grid */}
      <section className="p-8 lg:p-24 max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="text-[10px] font-semibold text-[#FF5A36] tracking-[0.2em]">Capabilities Manifest</div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-white">Bento Service Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <div 
              key={service.id}
              className={cn(
                "group p-8 border border-slate-800 bg-white/5 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between min-h-[320px]",
                i === 0 && "lg:col-span-2 bg-gradient-to-br from-[#FF5A36]/10 to-transparent"
              )}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 border border-[#FF5A36]/30 flex items-center justify-center group-hover:bg-[#FF5A36] group-hover:text-black transition-all duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight text-white">{service.title}</h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{service.desc}</p>
                </div>
              </div>
              <button className="mt-8 text-[10px] font-bold tracking-wider text-[#FF5A36] flex items-center gap-2 group/btn">
                Initialize Request <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
          
          <div className="md:col-span-2 lg:col-span-2 p-8 border border-slate-800 bg-black flex flex-col justify-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck className="w-32 h-32 text-[#FF5A36]" />
            </div>
            <div className="relative z-10 space-y-2">
              <div className="text-4xl font-black text-white">4.7/5.0</div>
              <div className="flex text-[#FF5A36]">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs font-medium text-slate-500 max-w-xs">
                Verified performance metrics across all regional sectors. 
                Gazmir Loshi V maintains a 98% success rate on initial dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section id="intake" className="p-8 lg:p-24 bg-white/5 border-t border-slate-800">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-[10px] font-semibold text-[#FF5A36] tracking-[0.2em]">Direct Link Established</div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white">Satellite Uplink</h2>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Your request is routed directly to the regional manager's satellite terminal. 
                Expect immediate synchronization.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-slate-800 bg-black">
                <Phone className="w-5 h-5 text-[#FF5A36]" />
                <div>
                  <div className="text-[10px] font-semibold text-slate-500">Emergency Hotline</div>
                  <div className="text-sm font-bold text-white">+1 (850) GAZMIR-V</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-slate-800 bg-black">
                <MapPin className="w-5 h-5 text-[#FF5A36]" />
                <div>
                  <div className="text-[10px] font-semibold text-slate-500">HQ Coordinates</div>
                  <div className="text-sm font-bold text-white">Pensacola Sector 7</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-500">Identifier</label>
                <input 
                  required
                  type="text" 
                  placeholder="Name"
                  className="w-full bg-black border border-slate-800 p-4 text-sm font-medium focus:border-[#FF5A36] outline-none transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-500">Contact Method</label>
                <input 
                  required
                  type="email" 
                  placeholder="Email or Phone"
                  className="w-full bg-black border border-slate-800 p-4 text-sm font-medium focus:border-[#FF5A36] outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-slate-500">Mission Parameters</label>
              <textarea 
                required
                rows={4}
                placeholder="Describe the task..."
                className="w-full bg-black border border-slate-800 p-4 text-sm font-medium focus:border-[#FF5A36] outline-none transition-colors resize-none"
              />
            </div>
            
            <button 
              disabled={formStatus !== "idle"}
              className={cn(
                "w-full py-6 font-black tracking-[0.2em] text-sm transition-all duration-500 flex items-center justify-center gap-3",
                formStatus === "idle" && "bg-[#FF5A36] text-black hover:bg-white",
                formStatus === "connecting" && "bg-slate-800 text-slate-400 cursor-wait",
                formStatus === "sent" && "bg-green-600 text-white"
              )}
            >
              {formStatus === "idle" && (
                <>Initiate Uplink <Send className="w-4 h-4" /></>
              )}
              {formStatus === "connecting" && (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Activity className="w-4 h-4" />
                  </motion.div>
                  Connecting to Operator...
                </>
              )}
              {formStatus === "sent" && (
                <>Uplink Successful <ShieldCheck className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>
      </section>

      <footer className="p-8 border-t border-slate-800 bg-black text-center">
        <div className="text-[10px] font-medium text-slate-600 tracking-widest">
          © 2026 Gazmir Loshi V // Regional Maintenance Infrastructure // All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
