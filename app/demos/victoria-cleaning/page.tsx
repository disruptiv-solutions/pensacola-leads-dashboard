"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Check, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CreditCard, 
  User, 
  ChevronRight,
  ChevronLeft,
  Layout,
  Settings,
  Bell,
  ArrowRight,
  Home,
  Coffee,
  Wind
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const PRIMARY_SAGE = "#8BA88E";
const SOFT_CREAM = "#FDFBF7";

const MEMBERSHIP_PLANS = [
  {
    id: "one-off",
    name: "One-Time Refresh",
    price: "180",
    period: "per clean",
    features: ["Deep Surface Clean", "Kitchen & Bath Focus", "Standard Dusting", "Vacuum & Mop"],
    highlight: false
  },
  {
    id: "bi-weekly",
    name: "The Essential Hub",
    price: "280",
    period: "per month",
    features: ["Bi-Weekly Visits", "Priority Scheduling", "50-Point Protocol", "Linen Service", "Member Portal Access"],
    highlight: true,
    tag: "MOST POPULAR"
  },
  {
    id: "weekly",
    name: "The Pristine Club",
    price: "520",
    period: "per month",
    features: ["Weekly Visits", "Dedicated Slot", "Full Detail Protocol", "Window Care", "Concierge Support"],
    highlight: false
  }
];

const CLEANING_PROTOCOL = [
  { room: "Kitchen", tasks: ["Sanitize Counters", "Appliance Polish", "Sink Scrub", "Floor Detail"] },
  { room: "Living Area", tasks: ["High Dusting", "Furniture Polish", "Upholstery Refresh", "Baseboards"] },
  { room: "Bathrooms", tasks: ["Tile Grout Care", "Mirror Clarity", "Fixture Shine", "Sanitization"] },
  { room: "Bedrooms", tasks: ["Linen Change", "Dust Surfaces", "Under-Bed Clear", "Air Refresh"] }
];

// --- Components ---

const ExclusivityMeter = () => (
  <div className="bg-white/80 backdrop-blur-md border border-sage-100 p-4 rounded-2xl shadow-sm max-w-[300px]">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Crestview Availability</span>
      <span className="text-[10px] font-bold text-emerald-600">3 SLOTS LEFT</span>
    </div>
    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "85%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-emerald-500"
      />
    </div>
    <p className="mt-2 text-[9px] text-slate-400 italic">Joining 24 other recurring members this month.</p>
  </div>
);

const ComparisonSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200 group cursor-ew-resize">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
          alt="After" 
          className="w-full h-full object-cover"
        />
      </div>
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200" 
          alt="Before" 
          className="w-full h-full object-cover grayscale brightness-75"
        />
      </div>
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-xl flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-2xl flex items-center justify-center -translate-x-1/2">
          <ChevronLeft className="w-3 h-3 text-slate-400" />
          <ChevronRight className="w-3 h-3 text-slate-400" />
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
      <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-widest uppercase">
        Slide to reveal results
      </div>
    </div>
  );
};

const PortalSneakPeek = () => (
  <div className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-video">
    <div className="absolute inset-0 blur-sm scale-110 opacity-40">
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-center">
          <div className="w-32 h-8 bg-slate-200 rounded-lg" />
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="h-32 bg-slate-100 rounded-2xl" />
          <div className="h-32 bg-slate-100 rounded-2xl" />
          <div className="h-32 bg-slate-100 rounded-2xl" />
        </div>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
      <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 text-center space-y-4 max-w-sm">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto">
          <Layout className="w-8 h-8 text-emerald-600" />
        </div>
        <h4 className="text-xl font-bold text-slate-900">Member Dashboard</h4>
        <p className="text-sm text-slate-500">Manage your recurring slots, toggle dates, and view your 50-point report after every clean.</p>
        <div className="pt-4">
          <span className="px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-full">INCLUDED WITH MEMBERSHIP</span>
        </div>
      </div>
    </div>
  </div>
);

export default function VictoriaCleaningLanding() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-serif selection:bg-emerald-50 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <div className="text-2xl font-light tracking-tighter text-slate-900">
          VICTORIA <span className="font-bold">P. KELLY</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] text-slate-400">
          <a href="#membership" className="hover:text-emerald-700 transition-colors">MEMBERSHIP</a>
          <a href="#protocol" className="hover:text-emerald-700 transition-colors">PROTOCOL</a>
          <a href="#results" className="hover:text-emerald-700 transition-colors">RESULTS</a>
          <button className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-emerald-700 transition-all">
            BOOK_NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex text-amber-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">4.7 Stars • 16 Reviews</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] text-slate-900">
                Elevated <br />
                <span className="italic font-serif">Living Space.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-md font-sans leading-relaxed">
                Professional cleaning memberships designed for the modern Crestview home. 
                Predictable, pristine, and perfectly managed.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="px-10 py-5 bg-emerald-700 text-white font-bold text-sm rounded-full hover:bg-slate-900 transition-all flex items-center gap-3">
                BUILD YOUR MEMBERSHIP <ArrowRight className="w-4 h-4" />
              </button>
              <ExclusivityMeter />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-[16px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1000" 
                alt="Victoria P. Kelly" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 space-y-4 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">EST. 2018</div>
                  <div className="text-[10px] text-slate-400 font-sans">Crestview Local Reputation</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                "Victoria has transformed our weekly routine. The membership model is a game changer for busy families."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Builder */}
      <section id="membership" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-[10px] font-bold text-emerald-700 tracking-[0.3em] uppercase">Membership Hub</div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-slate-900">Predictable Perfection.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MEMBERSHIP_PLANS.map(plan => (
              <div 
                key={plan.id}
                className={cn(
                  "relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col justify-between min-h-[500px]",
                  plan.highlight 
                    ? "bg-[#FDFBF7] border-emerald-200 shadow-2xl scale-105 z-10" 
                    : "bg-white border-slate-100 hover:border-emerald-100"
                )}
              >
                {plan.tag && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-700 text-white text-[10px] font-bold rounded-full">
                    {plan.tag}
                  </div>
                )}
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-light text-slate-900">${plan.price}</span>
                      <span className="text-xs text-slate-400 font-sans">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-slate-500 font-sans">
                        <Check className="w-4 h-4 text-emerald-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={cn(
                  "w-full py-4 rounded-full font-bold text-xs transition-all",
                  plan.highlight ? "bg-emerald-700 text-white" : "bg-slate-100 text-slate-900 hover:bg-emerald-50"
                )}>
                  SELECT PLAN
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section id="protocol" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-emerald-700 tracking-[0.3em] uppercase">The Routine AI</div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-slate-900 leading-none">
                50-Point <br />
                <span className="italic">Standard.</span>
              </h2>
              <p className="text-lg text-slate-500 font-sans leading-relaxed">
                Every visit follows a rigorous, tech-managed protocol. We don't just clean; 
                we restore your home to its original state of calm.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {CLEANING_PROTOCOL.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                      {i === 0 && <Coffee className="w-4 h-4 text-emerald-600" />}
                      {i === 1 && <Home className="w-4 h-4 text-emerald-600" />}
                      {i === 2 && <Sparkles className="w-4 h-4 text-emerald-600" />}
                      {i === 3 && <Wind className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <h4 className="font-bold text-slate-900">{item.room}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.tasks.map(task => (
                      <li key={task} className="text-xs text-slate-400 font-sans flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-200" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <PortalSneakPeek />
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-[10px] font-bold text-emerald-700 tracking-[0.3em] uppercase">Visual Proof</div>
            <h2 className="text-5xl font-light tracking-tighter text-slate-900">High-End Results.</h2>
          </div>
          <ComparisonSlider />
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <button className="w-full py-5 bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-2xl flex items-center justify-center gap-3">
          <Calendar className="w-4 h-4" />
          MANAGE RECURRING SLOTS
        </button>
      </div>

      <footer className="bg-[#FDFBF7] border-t border-slate-100 py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-3xl font-light tracking-tighter text-slate-900">
              VICTORIA <span className="font-bold">P. KELLY</span>
            </div>
            <p className="text-slate-400 text-sm font-sans max-w-xs leading-relaxed">
              Elevated cleaning memberships for Crestview's finest homes. 
              Predictable revenue for us, pristine peace for you.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 font-sans">
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Service</div>
              <div className="flex flex-col gap-2 text-sm text-slate-500">
                <a href="#">Memberships</a>
                <a href="#">One-Off Refresh</a>
                <a href="#">Deep Clean</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Company</div>
              <div className="flex flex-col gap-2 text-sm text-slate-500">
                <a href="#">Reviews</a>
                <a href="#">Protocols</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Legal</div>
              <div className="flex flex-col gap-2 text-sm text-slate-500">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-100 text-center">
          <div className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            © 2026 VICTORIA_P_KELLY // POWERED_BY_LAUNCHBOX_INFRASTRUCTURE
          </div>
        </div>
      </footer>
    </div>
  );
}
