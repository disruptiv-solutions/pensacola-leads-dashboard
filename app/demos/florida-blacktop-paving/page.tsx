"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, 
  ShieldCheck, 
  Calculator, 
  Cloud, 
  Activity, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Thermometer,
  CloudRain,
  Sun,
  AlertTriangle,
  Box,
  MapPin
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const SAFETY_ORANGE = "#FF6B00";
const ROAD_YELLOW = "#FFD700";

const PROJECT_TYPES = [
  { id: "driveway", name: "Residential Driveway", basePrice: 8, icon: "🏠" },
  { id: "parking", name: "Parking Lot", basePrice: 6, icon: "🅿️" },
  { id: "commercial", name: "Commercial Property", basePrice: 7, icon: "🏢" },
];

const WEATHER_FORECAST = [
  { day: "Today", temp: 72, condition: "Clear", optimal: true },
  { day: "Tomorrow", temp: 68, condition: "Partly Cloudy", optimal: true },
  { day: "Wed", temp: 65, condition: "Rain", optimal: false },
  { day: "Thu", temp: 70, condition: "Clear", optimal: true },
  { day: "Fri", temp: 74, condition: "Clear", optimal: true },
];

const PORTFOLIO_PROJECTS = [
  { type: "Church", location: "First Baptist - Pensacola", sqft: "12,000 sq ft" },
  { type: "School", location: "Milton High School", sqft: "45,000 sq ft" },
  { type: "Bank", location: "Regions Bank - Pace", sqft: "8,500 sq ft" },
  { type: "Shopping Center", location: "Gulf Breeze Plaza", sqft: "32,000 sq ft" },
];

// --- Components ---

const AsphaltFreshnessTimer = () => {
  const [hoursAgo, setHoursAgo] = useState(4);
  const remaining = 6 - hoursAgo;

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-none">
      <div className="bg-slate-900/90 backdrop-blur-md border-4 border-[#FF6B00] p-4 rounded-none shadow-[8px_8px_0px_rgba(255,107,0,0.3)] space-y-3 min-w-[280px]">
        <div className="flex justify-between items-center border-b-2 border-[#FF6B00]/30 pb-2">
          <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest">Asphalt Freshness</span>
          <Activity className="w-3 h-3 text-[#FF6B00] animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="text-[9px] text-slate-400 uppercase tracking-wide">
            Today's Hot-Mix Batch
          </div>
          <div className="text-xl font-black text-white">
            Mixed {hoursAgo} <span className="text-xs text-slate-500">Hours Ago</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#FF6B00]"
              style={{ width: `${(remaining / 6) * 100}%` }}
            />
          </div>
          <div className="text-[9px] text-[#FFD700] uppercase tracking-wide font-black">
            Optimal Window: {remaining} Hours Remaining
          </div>
        </div>
      </div>
    </div>
  );
};

const FleetStatusBoard = () => (
  <div className="bg-black border-4 border-[#FF6B00] p-8 rounded-none shadow-[12px_12px_0px_#FFD700]">
    <div className="flex items-center gap-4 mb-6 border-b-2 border-[#FF6B00]/30 pb-4">
      <Truck className="w-8 h-8 text-[#FF6B00]" />
      <div>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Fleet Status Board</h3>
        <p className="text-xs font-bold text-[#FFD700] uppercase">Live Equipment Availability</p>
      </div>
    </div>
    <div className="space-y-4">
      {[
        { unit: "Paver Unit 1", status: "Available Today", color: "#10B981" },
        { unit: "Roller Unit 2", status: "Scheduled Tomorrow", color: "#FFD700" },
        { unit: "Milling Machine", status: "Available Today", color: "#10B981" },
        { unit: "Striping Truck", status: "Available Today", color: "#10B981" },
      ].map(equipment => (
        <div key={equipment.unit} className="flex items-center justify-between p-4 bg-slate-900 border-l-4" style={{ borderColor: equipment.color }}>
          <div className="font-black text-white text-sm uppercase tracking-tight">{equipment.unit}</div>
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: equipment.color }}>{equipment.status}</div>
        </div>
      ))}
    </div>
  </div>
);

const ProjectCalculator = () => {
  const [sqft, setSqft] = useState(1000);
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const estimate = sqft * projectType.basePrice;

  return (
    <div className="bg-slate-900 border-4 border-slate-800 p-8 rounded-none space-y-8">
      <div className="space-y-2">
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Project Calculator</h3>
        <p className="text-[#FF6B00] font-bold text-sm uppercase">Real-Time Material Cost Breakdown</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Project Type</label>
          <div className="grid grid-cols-3 gap-2">
            {PROJECT_TYPES.map(type => (
              <button
                key={type.id}
                onClick={() => setProjectType(type)}
                className={cn(
                  "p-4 border-2 font-black text-xs uppercase transition-all",
                  projectType.id === type.id ? "border-[#FF6B00] bg-[#FF6B00]/10 text-[#FF6B00]" : "border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600"
                )}
              >
                <div className="text-2xl mb-2">{type.icon}</div>
                {type.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Square Footage</label>
            <span className="text-2xl font-black text-white">{sqft.toLocaleString()} <span className="text-xs text-slate-500">SQ FT</span></span>
          </div>
          <input 
            type="range" 
            min="500" 
            max="50000" 
            step="500"
            value={sqft}
            onChange={e => setSqft(parseInt(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-[#FF6B00]"
          />
        </div>

        <div className="pt-6 border-t-2 border-slate-800">
          <div className="flex justify-between items-center">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Cost</div>
            <div className="text-4xl font-black text-[#FF6B00]">${estimate.toLocaleString()}</div>
          </div>
          <div className="mt-2 text-[9px] text-slate-500 uppercase tracking-wide">
            ${projectType.basePrice}/sq ft • Fresh Hot-Mix Daily
          </div>
        </div>
      </div>
    </div>
  );
};

const PavingWeatherWindow = () => (
  <div className="bg-white border-4 border-black p-8 rounded-none shadow-[12px_12px_0px_#FF6B00]">
    <div className="space-y-2 mb-6">
      <h3 className="text-2xl font-black uppercase tracking-tighter">Paving Weather Window</h3>
      <p className="text-xs font-bold text-slate-500 uppercase">7-Day Optimal Conditions Forecast</p>
    </div>

    <div className="grid grid-cols-5 gap-2">
      {WEATHER_FORECAST.map(day => (
        <div 
          key={day.day}
          className={cn(
            "p-4 border-2 text-center space-y-2",
            day.optimal ? "border-green-500 bg-green-50" : "border-slate-300 bg-slate-50"
          )}
        >
          <div className="text-[10px] font-black uppercase">{day.day}</div>
          <div className="text-2xl">
            {day.condition === "Clear" ? "☀️" : day.condition === "Partly Cloudy" ? "⛅" : "🌧️"}
          </div>
          <div className="text-sm font-bold">{day.temp}°F</div>
          {day.optimal && (
            <div className="text-[8px] font-black text-green-600 uppercase">Optimal</div>
          )}
        </div>
      ))}
    </div>

    <div className="mt-6 p-4 bg-[#FF6B00]/10 border-2 border-[#FF6B00] text-center">
      <div className="text-xs font-black uppercase text-[#FF6B00]">
        Book Now for Optimal Paving Conditions
      </div>
    </div>
  </div>
);

export default function FloridaBlacktopPaving() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans selection:bg-[#FF6B00] selection:text-black overflow-x-hidden">
      <AsphaltFreshnessTimer />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-8 border-[#FF6B00]">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=2000" 
            alt="Heavy Machinery" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-[#FF6B00] text-black font-black text-sm uppercase tracking-tighter border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="w-6 h-6" />
              NO LEFTOVER ASPHALT GUARANTEE
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase">
              FLORIDA <br />
              <span className="text-[#FF6B00]">BLACKTOP</span>
            </h1>
            <p className="max-w-3xl mx-auto text-slate-300 text-xl md:text-2xl font-bold uppercase tracking-tight">
              Fresh Hot-Mix Asphalt Daily. <br />
              Professional Commercial Paving for Banks, Schools, Churches & HOAs.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-[#FF6B00] text-black px-12 py-6 text-2xl font-black uppercase tracking-widest hover:bg-[#FFD700] transition-colors flex items-center gap-4 group border-4 border-black">
              REQUEST COMMERCIAL BID <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <span>Family Owned</span>
              <span>•</span>
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Statewide Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator & Fleet Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest">Instant Estimation</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Project <br /> Calculator
              </h2>
              <p className="text-slate-400 font-bold text-lg leading-relaxed max-w-md">
                Get real-time material cost breakdowns for your commercial property. 
                No leftover asphalt. Fresh hot-mix daily.
              </p>
            </div>
            <ProjectCalculator />
          </div>

          <div className="space-y-8">
            <FleetStatusBoard />
            <PavingWeatherWindow />
          </div>
        </div>
      </section>

      {/* Commercial Portfolio */}
      <section className="bg-slate-900 py-24 px-8 border-y-8 border-[#FF6B00]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest">Proven Track Record</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Commercial Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_PROJECTS.map((project, i) => (
              <div key={i} className="bg-black border-4 border-slate-800 p-6 hover:border-[#FF6B00] transition-all group">
                <div className="aspect-video bg-slate-800 mb-4 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {project.type === "Church" ? "⛪" : project.type === "School" ? "🏫" : project.type === "Bank" ? "🏦" : "🏬"}
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest">{project.type}</div>
                  <div className="text-lg font-black uppercase tracking-tight">{project.location}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">{project.sqft}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bid Request Portal */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="bg-white text-black border-8 border-[#FF6B00] p-12 rounded-none shadow-[16px_16px_0px_#FFD700] space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Commercial Bid Request</h2>
            <p className="text-[#FF6B00] font-bold text-sm uppercase">48-Hour Quote Turnaround</p>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-600">Company Name</label>
                <input type="text" className="w-full bg-slate-100 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6B00] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-600">Contact Phone</label>
                <input type="tel" className="w-full bg-slate-100 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6B00] transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-600">Property Type</label>
              <select className="w-full bg-slate-100 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6B00] transition-colors appearance-none">
                <option>Bank</option>
                <option>Church</option>
                <option>School</option>
                <option>Shopping Center</option>
                <option>HOA</option>
                <option>Gas Station</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-600">Project Details</label>
              <textarea rows={4} className="w-full bg-slate-100 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6B00] transition-colors resize-none" placeholder="Describe your paving needs..." />
            </div>

            <button className="w-full py-6 bg-[#FF6B00] text-white text-xl font-black uppercase tracking-widest hover:bg-black transition-colors border-4 border-black">
              SUBMIT BID REQUEST
            </button>
          </form>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FF6B00] border-t-4 border-black p-4">
        <button className="w-full py-4 bg-black text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3">
          <Calculator className="w-5 h-5" />
          GET INSTANT ESTIMATE
        </button>
      </div>

      <footer className="bg-black border-t-8 border-[#FF6B00] py-24 px-8 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-4xl font-black tracking-tighter uppercase">
              FLORIDA <span className="text-[#FF6B00]">BLACKTOP</span>
            </div>
            <p className="text-slate-500 font-bold text-sm max-w-xs leading-relaxed uppercase">
              Professional asphalt paving services. Fresh hot-mix daily. 
              No leftover asphalt. Licensed & insured.
            </p>
          </div>
          <div className="text-right space-y-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00]">Commercial Grade</div>
            <div className="text-sm font-bold text-slate-700 uppercase">
              © 2026 FLORIDA_BLACKTOP_PAVING_LLC<br />
              STATEWIDE_ASPHALT_SERVICES
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
