"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Calendar, 
  Users, 
  ChevronRight, 
  Activity, 
  ShieldCheck, 
  Clock, 
  BookOpen,
  Sprout,
  Home,
  Navigation,
  AlertCircle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const MOSS_GREEN = "#6B8E23";
const CREAM = "#FAF8F3";

const LOCATIONS = [
  {
    id: "laurel-hill",
    name: "Laurel Hill Campus",
    address: "1234 Heritage Road, Laurel Hill, FL",
    curriculum: [
      { grade: "Pre-K", spots: 3, schedule: "Mon/Wed/Fri 9am-12pm" },
      { grade: "K-2nd", spots: 5, schedule: "Tue/Thu 10am-2pm" },
      { grade: "3rd-5th", spots: 2, schedule: "Mon-Fri 9am-3pm" },
    ],
    activities: ["Outdoor Ag Lab", "Animal Husbandry", "Heritage Crafts"]
  },
  {
    id: "freeport",
    name: "Freeport Campus",
    address: "5678 Ranch Trail, Freeport, FL",
    curriculum: [
      { grade: "Pre-K", spots: 7, schedule: "Mon/Wed 9am-12pm" },
      { grade: "K-2nd", spots: 4, schedule: "Tue/Thu/Fri 10am-2pm" },
      { grade: "3rd-5th", spots: 6, schedule: "Mon-Fri 8am-3pm" },
    ],
    activities: ["Science Workshop", "Farm-to-Table", "Nature Studies"]
  }
];

// --- Components ---

const RanchRelayer = ({ location }: { location: typeof LOCATIONS[0] }) => {
  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % location.activities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#6B8E23] text-white py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <Activity className="w-3 h-3 animate-pulse" />
          <span className="hidden sm:inline">Current Operations:</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentActivity}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-2"
          >
            <span>{location.activities[currentActivity]}</span>
            <span className="text-[#C4D79B]">in {location.name.split(' ')[0]}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const LocationScanner = ({ onLocationChange }: { onLocationChange: (loc: typeof LOCATIONS[0]) => void }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [selectedLoc, setSelectedLoc] = useState(LOCATIONS[0]);

  const handleSwitch = (location: typeof LOCATIONS[0]) => {
    if (location.id === selectedLoc.id) return;
    setIsScanning(true);
    setTimeout(() => {
      setSelectedLoc(location);
      onLocationChange(location);
      setIsScanning(false);
    }, 1200);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isScanning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#6B8E23]/20 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="bg-white p-12 rounded-3xl border-4 border-[#6B8E23] shadow-2xl space-y-6 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-[#6B8E23] border-t-transparent rounded-full mx-auto"
              />
              <div className="space-y-2">
                <div className="text-xl font-bold text-[#6B8E23] uppercase tracking-tight">Reconfiguring Campus Data</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Syncing curriculum schedules...</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid md:grid-cols-2 gap-6">
        {LOCATIONS.map(location => (
          <button
            key={location.id}
            onClick={() => handleSwitch(location)}
            className={cn(
              "relative p-8 rounded-3xl border-4 transition-all duration-500 text-left group overflow-hidden",
              selectedLoc.id === location.id
                ? "border-[#6B8E23] bg-[#6B8E23]/5 shadow-2xl"
                : "border-slate-200 bg-white hover:border-[#6B8E23]/30"
            )}
          >
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className={cn("w-6 h-6", selectedLoc.id === location.id ? "text-[#6B8E23]" : "text-slate-400")} />
                <h3 className="text-2xl font-bold text-slate-900">{location.name}</h3>
              </div>
              <p className="text-sm text-slate-500 font-medium">{location.address}</p>
              {selectedLoc.id === location.id && (
                <motion.div
                  layoutId="selected-location"
                  className="absolute bottom-0 left-0 h-2 bg-[#6B8E23] w-full"
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const CurriculumMatrix = ({ location }: { location: typeof LOCATIONS[0] }) => (
  <div className="bg-slate-900 text-white p-8 rounded-3xl border-4 border-slate-800 space-y-8">
    <div className="flex justify-between items-center border-b border-white/10 pb-4">
      <div className="space-y-1">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Enrollment Matrix</h3>
        <p className="text-[10px] font-bold text-[#C4D79B] uppercase tracking-widest">{location.name}</p>
      </div>
      <Navigation className="w-6 h-6 text-[#6B8E23]" />
    </div>

    <div className="space-y-4">
      {location.curriculum.map((item, i) => (
        <motion.div
          key={item.grade}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 bg-slate-800 border-l-4 border-[#6B8E23] space-y-3"
        >
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold uppercase tracking-tight">{item.grade} Grade</div>
            <div className={cn(
              "px-4 py-1 text-[10px] font-black uppercase tracking-widest",
              item.spots <= 3 ? "bg-red-600" : "bg-[#6B8E23]"
            )}>
              {item.spots} Spots Left
            </div>
          </div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{item.schedule}</div>
        </motion.div>
      ))}
    </div>

    <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase">
      <AlertCircle className="w-4 h-4 text-[#6B8E23]" />
      Limited enrollment spots update in real-time
    </div>
  </div>
);

export default function WagyuMamaRanchLanding() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-slate-900 font-serif selection:bg-[#6B8E23]/20 overflow-x-hidden pt-10">
      <RanchRelayer location={selectedLocation} />

      {/* Hero Section */}
      <section className="relative py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B8E23]/10 border border-[#6B8E23]/20 rounded-full">
                <Sprout className="w-4 h-4 text-[#6B8E23]" />
                <span className="text-[10px] font-bold text-[#6B8E23] uppercase tracking-widest font-sans">Agricultural Education</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] text-slate-900">
                WagyuMama <br />
                <span className="italic font-serif text-[#6B8E23]">Ranch.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-md font-sans leading-relaxed">
                Heritage modern education across two Florida campuses. 
                Unified enrollment. Location-intelligent curriculum.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="px-10 py-5 bg-[#6B8E23] text-white font-bold text-sm rounded-full hover:bg-slate-900 transition-all flex items-center gap-3 font-sans">
                Explore Programs <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-[#6B8E23]/20 flex items-center justify-center text-[10px] font-bold text-[#6B8E23]">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-sans">
                  <div className="font-bold text-slate-900">24 Families Enrolled</div>
                  <div className="text-slate-400">This Semester</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-[16px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Ranch Education" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 space-y-4 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#6B8E23]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 font-sans">EST. 2018</div>
                  <div className="text-[10px] text-slate-400 font-sans">Heritage Education</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                "Our kids thrive in the hands-on agricultural curriculum. The dual-campus model gives us flexibility."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-[10px] font-bold text-[#6B8E23] tracking-[0.3em] uppercase font-sans">Campus Intelligence</div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-slate-900">Choose Your Location.</h2>
          </div>

          <LocationScanner onLocationChange={setSelectedLocation} />
        </div>
      </section>

      {/* Curriculum & Enrollment */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-[#6B8E23] tracking-[0.3em] uppercase font-sans">Real-Time Availability</div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-slate-900 leading-none">
                Curriculum <br />
                <span className="italic">Schedules.</span>
              </h2>
              <p className="text-lg text-slate-500 font-sans leading-relaxed max-w-md">
                Every campus offers unique programming tailored to its environment. 
                Enrollment spots are limited and update in real-time.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-white border-2 border-slate-100 rounded-2xl font-sans">
                <BookOpen className="w-6 h-6 text-[#6B8E23]" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Hands-On Learning</div>
                  <div className="text-xs text-slate-400">Farm-to-table curriculum</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white border-2 border-slate-100 rounded-2xl font-sans">
                <Users className="w-6 h-6 text-[#6B8E23]" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Small Class Sizes</div>
                  <div className="text-xs text-slate-400">8-12 students per cohort</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white border-2 border-slate-100 rounded-2xl font-sans">
                <Home className="w-6 h-6 text-[#6B8E23]" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Dual Campus Access</div>
                  <div className="text-xs text-slate-400">Flexible location options</div>
                </div>
              </div>
            </div>
          </div>

          <CurriculumMatrix location={selectedLocation} />
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-24 px-8 bg-[#6B8E23]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none">
              Join the Waitlist.
            </h2>
            <p className="text-xl text-[#C4D79B] font-sans max-w-2xl mx-auto leading-relaxed">
              Limited enrollment spots available for the upcoming semester. 
              Secure your child's place in our heritage education program.
            </p>
          </div>

          <form className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-2xl space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 font-sans">Parent Name</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 p-4 font-sans font-bold outline-none focus:border-[#6B8E23] transition-colors rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 font-sans">Email</label>
                <input type="email" className="w-full bg-slate-50 border-2 border-slate-200 p-4 font-sans font-bold outline-none focus:border-[#6B8E23] transition-colors rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-slate-400 font-sans">Preferred Campus</label>
              <select className="w-full bg-slate-50 border-2 border-slate-200 p-4 font-sans font-bold outline-none focus:border-[#6B8E23] transition-colors rounded-xl appearance-none">
                <option>Laurel Hill Campus</option>
                <option>Freeport Campus</option>
                <option>Either Location</option>
              </select>
            </div>
            <button className="w-full py-6 bg-[#6B8E23] text-white text-xl font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors rounded-2xl font-sans">
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <button className="w-full py-5 bg-[#6B8E23] text-white font-bold text-sm rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-sans">
          <Calendar className="w-4 h-4" />
          Schedule Campus Tour
        </button>
      </div>

      <footer className="bg-white border-t border-slate-100 py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-3xl font-light tracking-tighter text-slate-900">
              WagyuMama <span className="font-bold text-[#6B8E23]">Ranch</span>
            </div>
            <p className="text-slate-400 text-sm font-sans max-w-xs leading-relaxed">
              Heritage modern agricultural education. Two campuses, one unified vision for hands-on learning.
            </p>
          </div>
          <div className="text-right space-y-4 font-sans">
            <div className="text-[10px] font-bold text-[#6B8E23] uppercase tracking-widest">Educational Excellence</div>
            <div className="text-sm font-bold text-slate-300 uppercase">
              © 2026 WAGYUMAMA_RANCH<br />
              DUAL_CAMPUS_EDUCATION_HUB
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
