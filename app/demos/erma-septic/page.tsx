"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  Droplets, 
  Wrench, 
  Truck, 
  ChevronRight,
  MessageSquare,
  Send,
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const ALABAMA_CITIES = [
  "Mobile", "Montgomery", "Birmingham", "Huntsville", "Tuscaloosa", 
  "Auburn", "Decatur", "Dothan", "Hoover", "Madison", 
  "Florence", "Gadsden", "Prattville", "Phenix City"
];

const SERVICE_CHECKLIST = [
  "Full Septic Tank Pumping",
  "Main Line Snake & Clear",
  "Effluent Filter Cleaning",
  "Drain Field Inspection",
  "Baffle Wall Repair",
  "Grease Trap Maintenance",
  "Lift Station Repair",
  "Camera Pipe Inspection",
  "Sewer Line Replacement",
  "Emergency Backup Response",
  "Odor Source Detection",
  "System Stress Testing"
];

// --- Components ---

const HazardBorder = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] border-[12px] border-transparent">
    <div className="absolute top-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_20px,#000_20px,#000_40px)]" />
    <div className="absolute bottom-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_20px,#000_20px,#000_40px)]" />
    <div className="absolute left-0 top-0 bottom-0 w-3 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_20px,#000_20px,#000_40px)]" />
    <div className="absolute right-0 top-0 bottom-0 w-3 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_20px,#000_20px,#000_40px)]" />
  </div>
);

const RedAlertCounter = () => {
  const [minutes, setMinutes] = useState(42);

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutes(prev => (prev > 5 ? prev - 1 : 45));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white px-4 py-2 flex items-center gap-3 font-bold text-sm animate-pulse">
      <div className="w-2 h-2 rounded-full bg-white animate-ping" />
      RED ALERT: NEXT AVAILABLE PUMP TRUCK IN MOBILE: {minutes} MINUTES
    </div>
  );
};

const ProblemQuiz = () => {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const questions = [
    { q: "What is the primary issue?", options: ["Backup in house", "Slow drains", "Surface water in yard", "Routine pumping"] },
    { q: "Is there a noticeable odor?", options: ["Strong sewage smell", "Mild odor", "No odor"] },
    { q: "When was the last service?", options: ["1-2 years ago", "3-5 years ago", "5+ years ago", "Never/Unknown"] }
  ];

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_#000] w-[320px] mb-4"
          >
            <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
              <span className="font-black text-xs uppercase">Diagnostic Flow</span>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4" /></button>
            </div>
            
            {step < questions.length ? (
              <div className="space-y-4">
                <p className="font-bold text-sm">{questions[step].q}</p>
                <div className="space-y-2">
                  {questions[step].options.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => setStep(step + 1)}
                      className="w-full text-left p-2 border-2 border-black hover:bg-yellow-400 font-bold text-xs transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-center">
                <div className="p-3 bg-yellow-400 border-2 border-black font-black text-sm">
                  ESTIMATED RANGE: $250 - $450
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Subject to site inspection</p>
                <button 
                  onClick={() => setStep(0)}
                  className="w-full py-2 bg-black text-white font-black text-xs"
                >
                  RESTART
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-400 border-4 border-black p-4 shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
      >
        <MessageSquare className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};

export default function ErmaSepticLanding() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("success"), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-yellow-200 overflow-x-hidden pt-3">
      <HazardBorder />
      <RedAlertCounter />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b-[12px] border-black">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional Fleet" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_#000]">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-black text-sm uppercase tracking-tighter">Emergency Response Active</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white uppercase">
              SEWER <br />
              <span className="text-yellow-400">SEPTIC</span> <br />
              24/7
            </h1>
          </motion.div>

          <div className="flex justify-center pt-8">
            <motion.button 
              animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px #ef4444", "0 0 40px #ef4444", "0 0 0px #ef4444"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-red-600 text-white px-12 py-6 text-2xl font-black uppercase tracking-widest border-4 border-black flex items-center gap-4"
            >
              <Phone className="w-8 h-8 fill-current" />
              Emergency Call
            </motion.button>
          </div>
        </div>
      </section>

      {/* Service Protocol */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-black tracking-tighter uppercase border-l-[12px] border-yellow-400 pl-6">
                Service Protocol
              </h2>
              <p className="text-xl font-bold text-slate-600">
                Official municipal-grade procedures for Alabama residential and commercial systems.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICE_CHECKLIST.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border-2 border-slate-100 bg-slate-50 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-8 border-[12px] border-yellow-400 space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Dispatch Intake</h3>
              <p className="text-yellow-400 font-bold text-sm uppercase">Direct routing to field technicians</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400">Location Address</label>
                <input required type="text" className="w-full bg-white text-black p-4 font-bold outline-none border-4 border-transparent focus:border-yellow-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400">Contact Phone</label>
                  <input required type="tel" className="w-full bg-white text-black p-4 font-bold outline-none border-4 border-transparent focus:border-yellow-400" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400">System Type</label>
                  <select className="w-full bg-white text-black p-4 font-bold outline-none border-4 border-transparent focus:border-yellow-400 appearance-none">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400">Urgency Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Low", "Medium", "CRITICAL"].map(level => (
                    <button key={level} type="button" className={cn("py-2 font-black text-[10px] uppercase border-2", level === "CRITICAL" ? "bg-red-600 border-red-600" : "bg-slate-800 border-slate-700")}>
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                disabled={formStatus !== "idle"}
                className={cn(
                  "w-full py-6 text-xl font-black uppercase tracking-widest transition-all",
                  formStatus === "idle" ? "bg-yellow-400 text-black hover:bg-white" : "bg-slate-800 text-slate-500"
                )}
              >
                {formStatus === "idle" ? "Initiate Dispatch" : "Routing to Team..."}
              </button>
              
              {formStatus === "success" && (
                <div className="p-4 bg-green-600 text-white font-black text-center uppercase text-sm animate-bounce">
                  Dispatch Confirmed - Tech Alerted
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Regional Verification */}
      <section className="bg-slate-50 border-y-4 border-black py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <div className="text-[10px] font-black text-yellow-600 uppercase tracking-widest">Alabama Coverage Matrix</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                14+ Active <br /> Service Cities
              </h2>
            </div>
            <div className="flex gap-4">
              <div className="bg-black text-white p-6 border-b-8 border-yellow-400">
                <div className="text-4xl font-black">24/7</div>
                <div className="text-[10px] font-bold uppercase opacity-50">Availability</div>
              </div>
              <div className="bg-black text-white p-6 border-b-8 border-yellow-400">
                <div className="text-4xl font-black">60m</div>
                <div className="text-[10px] font-bold uppercase opacity-50">Avg Response</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {ALABAMA_CITIES.map(city => (
              <div key={city} className="p-4 bg-white border-2 border-black font-black text-[10px] uppercase flex items-center gap-2 hover:bg-yellow-400 transition-colors cursor-default">
                <MapPin className="w-3 h-3" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[110] md:hidden bg-red-600 border-t-4 border-black p-4 flex gap-4">
        <button className="flex-1 bg-white text-black py-4 font-black uppercase tracking-widest text-sm border-4 border-black flex items-center justify-center gap-2">
          <Phone className="w-5 h-5 fill-current" />
          Click to Dial
        </button>
      </div>

      <footer className="bg-black text-white py-24 px-6 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <div className="text-4xl font-black tracking-tighter uppercase">
              Erma <span className="text-yellow-400">Septic</span>
            </div>
            <p className="text-slate-500 font-bold leading-relaxed max-w-sm">
              Alabama's premier emergency sewer and septic infrastructure maintenance network. 
              Authorized 24/7 response.
            </p>
          </div>
          <div className="space-y-8 md:text-right">
            <div className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Official Infrastructure</div>
            <div className="text-sm font-bold text-slate-400">
              © 2026 ERMA_SEPTIC_ALABAMA<br />
              LICENSED & INSURED SEWER SPECIALISTS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
