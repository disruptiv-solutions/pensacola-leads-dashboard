"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Star, 
  Calendar, 
  Droplets, 
  Sun, 
  CheckCircle2, 
  ChevronRight, 
  Clock,
  Award,
  Phone,
  Users,
  Ruler,
  Palette,
  TrendingUp,
  AlertCircle,
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const SUNSET_GOLD = "#FFA726";
const OCEAN_TEAL = "#00897B";
const CONCRETE_GRAY = "#5D6D7E";
const DARK_CONCRETE = "#2C3E50";

const CONCRETE_FINISHES = [
  { 
    id: "stamped", 
    name: "Stamped Concrete", 
    cost: "$$$", 
    durability: 90, 
    maintenance: "Low",
    description: "Decorative patterns mimicking stone, brick, or tile",
    image: "/new-horizons/stamped-concrete.jpg"
  },
  { 
    id: "stained", 
    name: "Acid-Stained", 
    cost: "$$", 
    durability: 85, 
    maintenance: "Low",
    description: "Rich, translucent color variations",
    image: "/new-horizons/acid-stain.jpg"
  },
  { 
    id: "polished", 
    name: "Polished Concrete", 
    cost: "$$$", 
    durability: 95, 
    maintenance: "Very Low",
    description: "Smooth, glossy finish with modern appeal",
    image: "/new-horizons/polished concrete.jpg"
  },
  { 
    id: "aggregate", 
    name: "Exposed Aggregate", 
    cost: "$$", 
    durability: 88, 
    maintenance: "Medium",
    description: "Textured surface with natural stone visibility",
    image: "/new-horizons/exposed-aggregate.jpg"
  },
];

const TESTIMONIALS = [
  {
    name: "Jason B.",
    location: "Pensacola, FL",
    rating: 5,
    date: "Aug 29, 2025",
    text: "Layton and his crew are hands down the best. If you want someone who pours his life into his work this guy is it. Just a beautiful pool deck!"
  },
  {
    name: "Mary Beth S.",
    location: "AL",
    rating: 5,
    date: "Sep 7, 2023",
    text: "Amazing work by a wonderful and respectful crew! Job was done as quoted and quickly without sacrificing quality. No cracks or flaws! Definitely the right choice!!"
  },
];

const PORTFOLIO_PROJECTS = [
  {
    title: "Luxury Pool Deck",
    location: "Pensacola, FL",
    finish: "Stamped Concrete",
    sqft: "1,200 sq ft",
    timeline: "6 days",
    before: "/new-horizons/luxury-pool-deck-before.jpg",
    after: "/new-horizons/luxury-pool-deck-after.jpg"
  },
  {
    title: "Residential Driveway",
    location: "Gulf Breeze, FL",
    finish: "Exposed Aggregate",
    sqft: "850 sq ft",
    timeline: "5 days",
    before: "/new-horizons/driveway-before.jpg",
    after: "/new-horizons/driveway-after.jpg"
  },
];

const BOOKING_CALENDAR = [
  { month: "Feb 2026", availability: 85, status: "Available" },
  { month: "Mar 2026", availability: 65, status: "Filling Fast" },
  { month: "Apr 2026", availability: 45, status: "Limited" },
  { month: "May 2026", availability: 22, status: "Almost Full" },
  { month: "Jun 2026", availability: 15, status: "Almost Full" },
  { month: "Jul 2026", availability: 8, status: "Critical" },
];

const PROJECT_PHASES = [
  { phase: "Site Prep", duration: "1 day", description: "Excavation and base preparation" },
  { phase: "Pour", duration: "1 day", description: "Concrete placement and leveling" },
  { phase: "Cure", duration: "3-5 days", description: "Weather-dependent curing process" },
  { phase: "Seal", duration: "1 day", description: "Final sealing and protection" },
];

// --- Components ---

const SunsetGuarantee = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] border-4 border-[#FFA726] p-6 shadow-2xl backdrop-blur-sm max-w-[280px] relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors rounded"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3 mb-3 border-b-2 border-[#FFA726]/30 pb-3">
          <ShieldCheck className="w-8 h-8 text-[#FFA726]" />
          <div className="text-xs font-black text-[#FFA726] uppercase tracking-widest">Sunset Guarantee</div>
        </div>
        <p className="text-white text-sm font-bold leading-relaxed">
          No cracks within 5 years or we'll redo it free.
        </p>
        <div className="mt-3 text-[10px] text-white/80 font-bold uppercase">
          Flawless Craftsmanship Promise
        </div>
      </div>
    </motion.div>
  );
};

const PoolSeasonDemandTracker = () => {
  const totalSpots = 50;
  const bookedSpots = 39;
  const remainingSpots = totalSpots - bookedSpots;
  const percentFull = Math.round((bookedSpots / totalSpots) * 100);

  return (
    <div className="bg-[#ECF0F1] border-4 border-[#5D6D7E] p-8 shadow-[12px_12px_0px_rgba(93,109,126,0.2)]">
      <div className="flex items-center gap-3 mb-6 border-b-2 border-[#5D6D7E]/30 pb-4">
        <TrendingUp className="w-6 h-6 text-[#2C3E50]" />
        <div>
          <h3 className="text-xl font-black uppercase tracking-tight">Pool Season Demand</h3>
          <p className="text-xs font-bold text-slate-500 uppercase">Summer 2026 Booking Status</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center space-y-3">
          <div className="text-5xl font-black text-[#FFA726]">{percentFull}%</div>
          <div className="text-sm font-bold text-slate-600 uppercase">Capacity Booked</div>
          <div className="text-xs text-slate-500 font-bold">
            Only <span className="text-[#FF6F00] font-black">{remainingSpots} spots</span> remaining for peak season
          </div>
        </div>

        <div className="space-y-2">
          {BOOKING_CALENDAR.map((month, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white border-l-4" 
                 style={{ borderColor: month.availability > 50 ? '#5D6D7E' : month.availability > 20 ? '#FFA726' : '#FF6F00' }}>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-bold">{month.month}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs font-black uppercase" 
                     style={{ color: month.availability > 50 ? '#5D6D7E' : month.availability > 20 ? '#FFA726' : '#FF6F00' }}>
                  {month.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ConcreteFinishVisualizer = () => {
  const [selectedFinish, setSelectedFinish] = useState(CONCRETE_FINISHES[0]);

  return (
    <div className="bg-[#2C3E50] text-white p-8 border-4 border-[#5D6D7E] shadow-[12px_12px_0px_rgba(93,109,126,0.3)]">
      <div className="space-y-2 mb-6">
        <h3 className="text-3xl font-black uppercase tracking-tight">Finish Selector</h3>
        <p className="text-sm font-bold text-[#ECF0F1] uppercase">Choose Your Pool Deck Style</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {CONCRETE_FINISHES.map(finish => (
          <button
            key={finish.id}
            onClick={() => setSelectedFinish(finish)}
            className={cn(
              "p-4 border-2 transition-all text-left space-y-2",
              selectedFinish.id === finish.id
                ? "border-[#FFA726] bg-[#FFA726]/20"
                : "border-white/30 bg-white/5 hover:border-white/50"
            )}
          >
            <div className="text-sm font-black uppercase">{finish.name}</div>
            <div className="text-xs text-[#ECF0F1]">{finish.cost} • {finish.maintenance} Maintenance</div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="aspect-video overflow-hidden border-4 border-white">
          <img src={selectedFinish.image} alt={selectedFinish.name} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-3 bg-white/10 p-4">
          <p className="text-sm font-bold">{selectedFinish.description}</p>
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold uppercase">Durability</span>
            <span className="font-black">{selectedFinish.durability}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#FFA726]" style={{ width: `${selectedFinish.durability}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSlider = ({ project }: { project: typeof PORTFOLIO_PROJECTS[0] }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="bg-white border-4 border-[#5D6D7E] overflow-hidden shadow-[8px_8px_0px_rgba(93,109,126,0.2)]">
      <div className="relative h-[400px] overflow-hidden cursor-col-resize" 
           onMouseMove={(e) => {
             const rect = e.currentTarget.getBoundingClientRect();
             const x = e.clientX - rect.left;
             setSliderPosition((x / rect.width) * 100);
           }}>
        <img src={project.before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={project.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div 
          className="absolute top-0 bottom-0 w-1 bg-[#FFA726] cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFA726] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 text-xs font-black uppercase">Before</div>
        <div className="absolute top-4 right-4 bg-[#2C3E50] text-white px-4 py-2 text-xs font-black uppercase">After</div>
      </div>
      <div className="p-6 space-y-3">
        <h4 className="text-xl font-black uppercase tracking-tight">{project.title}</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-[10px] text-slate-500 font-bold uppercase">Location</div>
            <div className="font-bold">{project.location}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-bold uppercase">Finish</div>
            <div className="font-bold">{project.finish}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-bold uppercase">Size</div>
            <div className="font-bold">{project.sqft}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-bold uppercase">Timeline</div>
            <div className="font-bold text-[#2C3E50]">{project.timeline}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
  <div className="bg-white border-4 border-[#FFA726] p-8 shadow-[8px_8px_0px_rgba(255,167,38,0.2)]">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#FFA726] text-[#FFA726]" />
      ))}
    </div>
    <p className="text-slate-700 font-bold text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
    <div className="flex items-center justify-between border-t-2 border-slate-200 pt-4">
      <div>
        <div className="font-black uppercase tracking-tight">{testimonial.name}</div>
        <div className="text-xs text-slate-500 font-bold">{testimonial.location}</div>
      </div>
      <div className="text-xs text-slate-400 font-bold">{testimonial.date}</div>
    </div>
  </div>
);

export default function LaytonPoolDecks() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-[#FFA726] selection:text-white overflow-x-hidden">
      <SunsetGuarantee />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" 
            alt="Sunset over water" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-[#FFA726] text-white font-black text-sm uppercase tracking-tighter border-4 border-white shadow-2xl">
              <ShieldCheck className="w-6 h-6" />
              NO CRACKS. NO FLAWS. GUARANTEED.
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white">
              NEW HORIZON<br />
              <span className="text-[#FFA726]">CONCRETE</span>
            </h1>
            <p className="max-w-3xl mx-auto text-white/90 text-xl md:text-2xl font-bold leading-relaxed">
              Premium pool deck & concrete solutions for your coastal paradise.<br />
              Serving Pensacola & the Gulf Coast.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-[#FFA726] text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-[#2C3E50] transition-colors flex items-center gap-4 group border-4 border-white shadow-2xl">
              SCHEDULE FREE ESTIMATE <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-6 text-sm font-black uppercase tracking-widest text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-white text-white" />
                <span>5-Star Rated</span>
              </div>
              <span>•</span>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#5D6D7E] uppercase tracking-widest">Client Reviews</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="bg-[#ECF0F1] py-24 px-8 border-y-4 border-[#5D6D7E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs font-black text-[#2C3E50] uppercase tracking-widest">Recent Projects</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Our Work</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {PORTFOLIO_PROJECTS.map((project, i) => (
              <BeforeAfterSlider key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#5D6D7E] uppercase tracking-widest">Design Your Deck</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Plan Your Project</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ConcreteFinishVisualizer />
          <PoolSeasonDemandTracker />
        </div>
      </section>

      {/* Crew Respect Protocol */}
      <section className="bg-[#2C3E50] text-white py-24 px-8 border-y-4 border-[#5D6D7E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-12 h-12 text-[#FFA726]" />
                  <div className="text-xs font-black text-[#FFA726] uppercase tracking-widest">Crew Respect Protocol</div>
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Professional Standards</h2>
                <p className="text-white/90 font-bold text-lg leading-relaxed">
                  "Amazing work by a wonderful and respectful crew!" - Mary Beth S.<br />
                  Our reputation is built on craftsmanship AND professionalism.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { standard: "Clean Workspace", description: "Daily site cleanup and debris removal" },
                  { standard: "Respectful Communication", description: "Clear updates and courteous interaction" },
                  { standard: "On-Time Arrival", description: "Punctual start times, every day" },
                  { standard: "Quality Guarantee", description: "5-year warranty on all work" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/10 border-l-4 border-[#FFA726]">
                    <CheckCircle2 className="w-5 h-5 text-[#FFA726] shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-black uppercase">{item.standard}</div>
                      <div className="text-xs text-white/70 font-bold">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#ECF0F1] text-slate-900 border-4 border-[#5D6D7E] p-12 space-y-8">
              <div className="text-center space-y-4">
                <Clock className="w-20 h-20 text-[#FFA726] mx-auto" />
                <h3 className="text-3xl font-black uppercase">Project Timeline</h3>
                <p className="text-sm text-slate-600 font-bold">Typical pool deck installation schedule</p>
              </div>
              <div className="space-y-4">
                {PROJECT_PHASES.map((phase, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black uppercase">{phase.phase}</span>
                      <span className="text-xs font-bold text-[#2C3E50]">{phase.duration}</span>
                    </div>
                    <div className="text-xs text-slate-500 font-bold">{phase.description}</div>
                    {i < PROJECT_PHASES.length - 1 && <div className="h-px bg-slate-200 mt-3" />}
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t-2 border-slate-200 text-center">
                <div className="text-xs font-black text-[#FFA726] uppercase tracking-widest">
                  Weather-Dependent Scheduling for Optimal Results
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="bg-white border-4 border-[#5D6D7E] p-12 shadow-[16px_16px_0px_rgba(93,109,126,0.3)] space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Request Your Free Estimate</h2>
            <p className="text-[#2C3E50] font-bold text-sm uppercase">We'll Hold Your Spot • No Commitment Required</p>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-600">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#5D6D7E] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-600">Phone Number</label>
                <input type="tel" className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#5D6D7E] transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-600">Pool Deck Size (Approx.)</label>
              <select className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#00897B] transition-colors appearance-none">
                <option>Small (Under 500 sq ft)</option>
                <option>Medium (500-1000 sq ft)</option>
                <option>Large (1000-1500 sq ft)</option>
                <option>Extra Large (1500+ sq ft)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-600">Desired Finish</label>
              <select className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#5D6D7E] transition-colors appearance-none">
                <option>Stamped Concrete</option>
                <option>Acid-Stained</option>
                <option>Polished Concrete</option>
                <option>Exposed Aggregate</option>
                <option>Not Sure / Need Consultation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-600">Project Details</label>
              <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#5D6D7E] transition-colors resize-none" placeholder="Tell us about your pool deck project..." />
            </div>

            <button className="w-full py-6 bg-[#2C3E50] text-white text-xl font-black uppercase tracking-widest hover:bg-[#FFA726] transition-colors border-4 border-[#2C3E50]">
              SCHEDULE FREE ESTIMATE
            </button>
          </form>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#2C3E50] border-t-4 border-[#FFA726] p-4">
        <button className="w-full py-4 bg-[#FFA726] text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-[#2C3E50] transition-colors">
          <Phone className="w-5 h-5" />
          CALL FOR ESTIMATE
        </button>
      </div>

      <footer className="bg-[#2C3E50] text-white border-t-4 border-[#5D6D7E] py-24 px-8 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-4xl font-black tracking-tighter uppercase">
              NEW HORIZON<br />
              <span className="text-[#FFA726]">CONCRETE & SOLUTIONS</span>
            </div>
            <p className="text-white/70 font-bold text-sm max-w-xs leading-relaxed">
              Premium concrete pool deck installation. 5-year warranty. 
              Serving Pensacola & the Gulf Coast.
            </p>
            <div className="text-xs text-white/50 font-bold uppercase">
              Layton, Owner & Lead Craftsman
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFA726] text-[#FFA726]" />
              ))}
              <span className="ml-2 text-sm font-bold">5.0 Rating</span>
            </div>
          </div>
          <div className="text-right space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#FFA726]">Licensed & Insured</div>
            <div className="text-sm font-bold text-white/50 uppercase">
              © 2026 NEW_HORIZON_CONCRETE_&_SOLUTIONS_LLC<br />
              PENSACOLA • GULF_BREEZE • NAVARRE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
