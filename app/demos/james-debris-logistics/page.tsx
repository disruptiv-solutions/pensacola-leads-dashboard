"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, 
  Trash2, 
  MapPin, 
  Clock, 
  Navigation, 
  Activity, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Calendar,
  Search,
  Box,
  ArrowRight
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const CONCRETE_GRAY = "#F1F5F9";
const ELECTRIC_BLUE = "#3B82F6";

const PILE_SIZES = [
  { id: "small", label: "Pickup Load", volume: "2-3 Cubic Yards", price: "75-125", time: "20 min" },
  { id: "medium", label: "Half Truck", volume: "6-8 Cubic Yards", price: "175-250", time: "45 min" },
  { id: "large", label: "Full Truck", volume: "12-14 Cubic Yards", price: "350-450", time: "90 min" },
  { id: "xl", label: "Multi-Load", volume: "20+ Cubic Yards", price: "600+", time: "3+ hours" },
];

// --- Components ---

const LoadOMeter = () => {
  const [capacity, setCapacity] = useState(82);

  return (
    <div className="bg-slate-900 text-white p-6 border-l-4 border-blue-500 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Fleet Capacity Status</span>
        <Activity className="w-4 h-4 text-blue-400" />
      </div>
      <div className="space-y-4">
        <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${capacity}%` }}
            className="h-full bg-blue-500"
          />
        </div>
        <div className="flex justify-between items-end">
          <div className="text-3xl font-black">{capacity}% <span className="text-xs text-slate-500 uppercase">Utilized</span></div>
          <div className="text-[10px] font-bold text-blue-400 animate-pulse">2 SLOTS REMAINING FOR TUESDAY</div>
        </div>
      </div>
    </div>
  );
};

const YardScanner = () => {
  const [address, setAddress] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3500);
  };

  return (
    <div className="bg-white border-4 border-slate-900 p-8 rounded-none shadow-[12px_12px_0px_#3B82F6] space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600" />
          <h3 className="text-2xl font-black uppercase tracking-tighter">Satellite Yard Analysis</h3>
        </div>
        <p className="text-xs font-bold text-slate-500 uppercase">Volumetric Debris Calculation API</p>
      </div>

      <form onSubmit={handleScan} className="flex gap-2">
        <input 
          required
          type="text" 
          placeholder="ENTER SERVICE ADDRESS"
          className="flex-1 bg-slate-100 border-2 border-slate-200 p-4 font-black text-sm outline-none focus:border-blue-500 transition-colors"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <button className="bg-slate-900 text-white px-8 font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors">
          SCAN
        </button>
      </form>

      <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden border-2 border-slate-800">
        <AnimatePresence>
          {isScanning ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20" />
              <motion.div 
                animate={{ y: [-100, 100] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-1 bg-blue-500 shadow-[0_0_20px_#3B82F6] z-30"
              />
              <div className="text-blue-500 font-black text-[10px] tracking-[0.4em] animate-pulse">UPLINK_ESTABLISHED // SCANNING_PROPERTY</div>
            </motion.div>
          ) : scanComplete ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center gap-4 bg-blue-600"
            >
              <ShieldCheck className="w-12 h-12 text-white" />
              <div>
                <div className="text-white font-black text-2xl tracking-tighter uppercase">Volumetric Match</div>
                <div className="text-blue-100 text-[10px] font-bold uppercase">Estimated Load: 6.4 Cubic Yards</div>
              </div>
              <button 
                onClick={() => setScanComplete(false)}
                className="px-6 py-2 bg-white text-blue-600 font-black text-[10px] uppercase"
              >
                RE-SCAN
              </button>
            </motion.div>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 gap-4">
              <Navigation className="w-12 h-12 opacity-20" />
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 text-center px-12">
                Enter address above to initialize satellite volumetric analysis
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function JamesLogisticsLanding() {
  const [selectedSize, setSelectedSize] = useState(1);
  const currentSize = PILE_SIZES[selectedSize];

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* Header */}
      <header className="bg-white border-b-4 border-slate-900 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
              <Truck className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-2xl font-black tracking-tighter uppercase leading-none">
              JAMES <br />
              <span className="text-blue-600">LOGISTICS</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black tracking-widest text-slate-400">
            <span>MUNICIPAL_UTILITY_CODE: 850-JUNK</span>
            <div className="w-px h-8 bg-slate-200" />
            <button className="bg-slate-900 text-white px-8 py-3 hover:bg-blue-600 transition-colors">
              BOOK_REMOVAL
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-100 border-2 border-blue-200">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Automated Debris Logistics</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase text-slate-900">
                Self-Price. <br />
                Self-Book. <br />
                <span className="text-blue-600">Self-Clear.</span>
              </h1>
              <p className="text-lg font-bold text-slate-500 max-w-md uppercase tracking-tight">
                No phone calls. No back-and-forth. Professional junk removal and lawn service for the digital age.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <LoadOMeter />
              <div className="bg-white p-6 border-l-4 border-slate-900 shadow-xl flex flex-col justify-center gap-2">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg Response Time</div>
                <div className="text-3xl font-black text-slate-900">45 <span className="text-xs text-slate-500 uppercase">Minutes</span></div>
              </div>
            </div>
          </div>

          <YardScanner />
        </div>
      </section>

      {/* Quote Matrix */}
      <section className="bg-slate-900 py-24 px-8 border-y-[12px] border-blue-600">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase">Quote Matrix 2.0</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">Instant Pricing</h2>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Adjust Pile Size</span>
                <span className="text-2xl font-black text-blue-400 uppercase">{currentSize.label}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="1"
                value={selectedSize}
                onChange={e => setSelectedSize(parseInt(e.target.value))}
                className="w-full h-4 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] font-black text-slate-600 uppercase">
                <span>Small</span>
                <span>Medium</span>
                <span>Large</span>
                <span>XL</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-8 border-b-4 border-blue-500">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Est. Volume</div>
                <div className="text-2xl font-black text-white">{currentSize.volume}</div>
              </div>
              <div className="bg-slate-800 p-8 border-b-4 border-blue-500">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Price Range</div>
                <div className="text-2xl font-black text-white">${currentSize.price}</div>
              </div>
              <div className="bg-slate-800 p-8 border-b-4 border-blue-500">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Load Time</div>
                <div className="text-2xl font-black text-white">{currentSize.time}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Direct-to-Dash Uplink</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-none uppercase">
              Secure Your <br />
              Removal Slot.
            </h2>
            <p className="text-slate-500 font-bold text-lg leading-relaxed max-w-md uppercase tracking-tight">
              Your booking is transmitted directly to our truck's onboard navigation for zero-latency response.
            </p>
            <div className="space-y-4">
              {["Same-Day Service Available", "Transparent Pricing", "Municipal Grade Equipment", "Eco-Friendly Disposal"].map(item => (
                <div key={item} className="flex items-center gap-4 p-4 bg-white border-2 border-slate-100 font-black text-xs uppercase tracking-widest">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-4 border-slate-900 p-8 sm:p-12 shadow-[12px_12px_0px_#000] space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Booking Portal</h3>
              <p className="text-blue-600 font-bold text-sm uppercase">Secure your slot in 60 seconds</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400">Service Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" className="py-4 bg-slate-900 text-white font-black text-[10px] uppercase border-2 border-slate-900">Junk Removal</button>
                  <button type="button" className="py-4 bg-white text-slate-900 font-black text-[10px] uppercase border-2 border-slate-200">Lawn Service</button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="date" className="w-full bg-slate-50 border-2 border-slate-200 p-4 pl-12 font-black text-sm outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <button className="w-full py-6 bg-blue-600 text-white text-xl font-black uppercase tracking-widest hover:bg-slate-900 transition-colors flex items-center justify-center gap-4">
                CONFIRM UPLINK <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-4 border-slate-900 p-4 flex gap-4">
        <button className="flex-1 bg-blue-600 text-white py-4 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3">
          <Zap className="w-5 h-5 fill-current" />
          Instant Quote
        </button>
      </div>

      <footer className="bg-slate-900 text-white py-24 px-8 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl font-black tracking-tighter uppercase">
                JAMES <span className="text-blue-500">LOGISTICS</span>
              </div>
            </div>
            <p className="text-slate-500 font-bold text-sm max-w-xs leading-relaxed uppercase">
              Automated debris removal and lawn maintenance infrastructure. 
              High-velocity residential clearing.
            </p>
          </div>
          <div className="text-right space-y-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-blue-500">Municipal Utility Grade</div>
            <div className="text-sm font-bold text-slate-700 uppercase">
              © 2026 JAMES_LOGISTICS_HUB<br />
              AUTHORIZED_DEBRIS_REMOVAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
