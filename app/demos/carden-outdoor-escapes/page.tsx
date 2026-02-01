"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  MapPin, 
  Ruler, 
  Trees, 
  Fence, 
  Lightbulb, 
  Home, 
  ChevronRight, 
  Star,
  CheckCircle2,
  ArrowRight,
  Layers,
  Clock,
  Award,
  Phone
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const FOREST_GREEN = "#1A4D2E";
const SUNSET_GOLD = "#F4A261";
const WARM_STONE = "#E9C46A";

const SERVICES = [
  { 
    id: "landscape", 
    name: "Landscape Renovation", 
    icon: Trees, 
    description: "Transform your outdoor space with professional design",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "hardscape", 
    name: "Hardscape Renovation", 
    icon: Layers, 
    description: "Patios, walkways, and retaining walls",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "fencing", 
    name: "Fencing", 
    icon: Fence, 
    description: "Privacy, security, and aesthetic appeal",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "lighting", 
    name: "Landscape Lighting", 
    icon: Lightbulb, 
    description: "Illuminate your outdoor escape",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "deck", 
    name: "Deck & Patio Builder", 
    icon: Home, 
    description: "Custom outdoor living spaces",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "walls", 
    name: "Retaining Walls", 
    icon: Layers, 
    description: "Structural beauty and erosion control",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
  },
];

const COVERAGE_AREAS = [
  { city: "Milton", lat: 30.6324, lng: -87.0397, active: 3 },
  { city: "Pensacola", lat: 30.4213, lng: -87.2169, active: 5 },
  { city: "Jay", lat: 30.9544, lng: -87.1536, active: 2 },
];

const PORTFOLIO_PROJECTS = [
  {
    title: "Greenhouse Installation",
    location: "Milton, FL",
    type: "Custom Build",
    before: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    specs: "320 sq ft | 5 days"
  },
  {
    title: "Retaining Wall & Patio",
    location: "Pensacola, FL",
    type: "Hardscape",
    before: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    specs: "850 sq ft | 12 days"
  },
  {
    title: "Custom Deck Build",
    location: "Jay, FL",
    type: "Deck & Patio",
    before: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    specs: "480 sq ft | 8 days"
  },
];

const MATERIALS = [
  { name: "Natural Stone", cost: "$$$", durability: 95, maintenance: "Low" },
  { name: "Pavers", cost: "$$", durability: 85, maintenance: "Medium" },
  { name: "Composite Decking", cost: "$$$", durability: 90, maintenance: "Very Low" },
  { name: "Pressure-Treated Wood", cost: "$", durability: 70, maintenance: "High" },
];

// --- Components ---

const VeteranBadge = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="fixed top-6 left-6 z-50"
  >
    <div className="bg-[#1A4D2E] border-4 border-[#F4A261] p-4 shadow-2xl flex items-center gap-3 backdrop-blur-sm">
      <Shield className="w-8 h-8 text-[#F4A261]" />
      <div>
        <div className="text-xs font-black text-[#F4A261] uppercase tracking-widest">Veteran Owned</div>
        <div className="text-[10px] text-white/80 font-bold uppercase">& Operated</div>
      </div>
    </div>
  </motion.div>
);

const LiveProjectTracker = () => {
  const [progress, setProgress] = useState({ milton: 65, pensacola: 30 });

  return (
    <div className="bg-white border-4 border-[#1A4D2E] p-8 shadow-[12px_12px_0px_rgba(26,77,46,0.2)]">
      <div className="flex items-center gap-3 mb-6 border-b-2 border-[#1A4D2E]/20 pb-4">
        <Activity className="w-6 h-6 text-[#1A4D2E]" />
        <div>
          <h3 className="text-xl font-black uppercase tracking-tight">Live Project Tracker</h3>
          <p className="text-xs font-bold text-slate-500 uppercase">Current Active Projects</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold">Retaining Wall • Milton</span>
            <span className="text-xs font-black text-[#1A4D2E]">{progress.milton}%</span>
          </div>
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#1A4D2E]"
              initial={{ width: 0 }}
              animate={{ width: `${progress.milton}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="text-[10px] text-slate-500 font-bold uppercase">Est. Completion: 3 days</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold">Deck Build • Pensacola</span>
            <span className="text-xs font-black text-[#F4A261]">{progress.pensacola}%</span>
          </div>
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#F4A261]"
              initial={{ width: 0 }}
              animate={{ width: `${progress.pensacola}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
          </div>
          <div className="text-[10px] text-slate-500 font-bold uppercase">Starting Monday</div>
        </div>

        <div className="pt-4 border-t-2 border-slate-200">
          <div className="text-[10px] font-black text-[#1A4D2E] uppercase tracking-widest">
            ● 5 Projects in Queue
          </div>
        </div>
      </div>
    </div>
  );
};

const EscapeVisualizer = () => {
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const elements = [
    { id: "firepit", name: "Fire Pit", cost: 2500, icon: "🔥" },
    { id: "pergola", name: "Pergola", cost: 4500, icon: "🏛️" },
    { id: "wall", name: "Retaining Wall", cost: 3800, icon: "🧱" },
    { id: "kitchen", name: "Outdoor Kitchen", cost: 8500, icon: "🍳" },
  ];

  const toggleElement = (id: string) => {
    setSelectedElements(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const totalCost = elements
    .filter(e => selectedElements.includes(e.id))
    .reduce((sum, e) => sum + e.cost, 0);

  return (
    <div className="bg-[#1A4D2E] text-white p-8 border-4 border-[#F4A261] shadow-[12px_12px_0px_rgba(244,162,97,0.3)]">
      <div className="space-y-2 mb-6">
        <h3 className="text-3xl font-black uppercase tracking-tight">Escape Visualizer</h3>
        <p className="text-sm font-bold text-[#E9C46A] uppercase">Design Your Dream Outdoor Space</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {elements.map(element => (
          <button
            key={element.id}
            onClick={() => toggleElement(element.id)}
            className={cn(
              "p-6 border-2 transition-all text-center space-y-2",
              selectedElements.includes(element.id)
                ? "border-[#F4A261] bg-[#F4A261]/20"
                : "border-white/30 bg-white/5 hover:border-white/50"
            )}
          >
            <div className="text-4xl">{element.icon}</div>
            <div className="text-sm font-bold uppercase">{element.name}</div>
            <div className="text-xs text-[#E9C46A]">${element.cost.toLocaleString()}</div>
          </button>
        ))}
      </div>

      <div className="pt-6 border-t-2 border-white/20">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold uppercase">Project Scope Estimate</span>
          <span className="text-3xl font-black text-[#F4A261]">${totalCost.toLocaleString()}</span>
        </div>
        {selectedElements.length > 0 && (
          <div className="mt-4 text-[10px] text-[#E9C46A] uppercase tracking-wide">
            {selectedElements.length} elements selected • Free consultation available
          </div>
        )}
      </div>
    </div>
  );
};

const BeforeAfterSlider = ({ project }: { project: typeof PORTFOLIO_PROJECTS[0] }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="bg-white border-4 border-[#1A4D2E] overflow-hidden shadow-[8px_8px_0px_rgba(26,77,46,0.2)]">
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
          className="absolute top-0 bottom-0 w-1 bg-[#F4A261] cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#F4A261] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 text-xs font-black uppercase">Before</div>
        <div className="absolute top-4 right-4 bg-[#1A4D2E] text-white px-4 py-2 text-xs font-black uppercase">After</div>
      </div>
      <div className="p-6 space-y-2">
        <h4 className="text-xl font-black uppercase tracking-tight">{project.title}</h4>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin className="w-4 h-4" />
          <span className="font-bold">{project.location}</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t-2 border-slate-200">
          <span className="text-xs font-bold text-[#1A4D2E] uppercase">{project.type}</span>
          <span className="text-xs text-slate-500 font-bold">{project.specs}</span>
        </div>
      </div>
    </div>
  );
};

export default function CardenOutdoorEscapes() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-[#F4A261] selection:text-white overflow-x-hidden">
      <VeteranBadge />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Outdoor Landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white">
              CARDEN<br />
              <span className="text-[#F4A261]">OUTDOOR</span><br />
              ESCAPES
            </h1>
            <p className="max-w-3xl mx-auto text-white/90 text-xl md:text-2xl font-bold leading-relaxed">
              Transform your outdoor space into an escape from reality.<br />
              Professional landscape design & hardscapes.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-[#F4A261] text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-[#1A4D2E] transition-colors flex items-center gap-4 group border-4 border-white shadow-2xl">
              SCHEDULE FREE ESTIMATE <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-white/80">
              <span>Milton</span>
              <span>•</span>
              <span>Pensacola</span>
              <span>•</span>
              <span>Jay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#1A4D2E] uppercase tracking-widest">Comprehensive Services</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">What We Build</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <motion.div
              key={service.id}
              onHoverStart={() => setSelectedService(service.id)}
              onHoverEnd={() => setSelectedService(null)}
              className="group relative overflow-hidden border-4 border-[#1A4D2E] bg-white shadow-[8px_8px_0px_rgba(26,77,46,0.2)] hover:shadow-[12px_12px_0px_rgba(244,162,97,0.4)] transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <service.icon className="w-6 h-6 text-[#1A4D2E]" />
                  <h3 className="text-xl font-black uppercase tracking-tight">{service.name}</h3>
                </div>
                <p className="text-sm text-slate-600 font-bold">{service.description}</p>
              </div>
              <div className={cn(
                "absolute inset-0 bg-[#1A4D2E]/95 flex items-center justify-center transition-opacity",
                selectedService === service.id ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                <div className="text-center space-y-4 px-6">
                  <service.icon className="w-16 h-16 text-[#F4A261] mx-auto" />
                  <div className="text-2xl font-black text-white uppercase">{service.name}</div>
                  <button className="bg-[#F4A261] text-white px-6 py-3 text-sm font-black uppercase hover:bg-white hover:text-[#1A4D2E] transition-colors border-2 border-white">
                    View Projects
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="bg-slate-100 py-24 px-8 border-y-4 border-[#1A4D2E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs font-black text-[#1A4D2E] uppercase tracking-widest">Design Tools</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Plan Your Escape</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <EscapeVisualizer />
            <LiveProjectTracker />
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#1A4D2E] uppercase tracking-widest">Proven Results</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Recent Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {PORTFOLIO_PROJECTS.slice(0, 2).map((project, i) => (
            <BeforeAfterSlider key={i} project={project} />
          ))}
        </div>
      </section>

      {/* Material Intelligence Hub */}
      <section className="bg-white py-24 px-8 border-y-4 border-[#1A4D2E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs font-black text-[#1A4D2E] uppercase tracking-widest">Material Intelligence</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Choose Your Materials</h2>
            <p className="text-slate-600 font-bold text-lg max-w-2xl mx-auto">
              Expert guidance on material selection for durability, cost, and maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.map((material, i) => (
              <div key={i} className="bg-slate-50 border-2 border-[#1A4D2E] p-6 space-y-4 hover:border-[#F4A261] transition-colors">
                <h4 className="text-lg font-black uppercase tracking-tight">{material.name}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-600 uppercase">Cost</span>
                    <span className="text-sm font-black text-[#1A4D2E]">{material.cost}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-600 uppercase">Durability</span>
                      <span className="text-xs font-black">{material.durability}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1A4D2E]" style={{ width: `${material.durability}%` }} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-600 uppercase">Maintenance</span>
                    <span className="text-xs font-black text-[#F4A261]">{material.maintenance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran Precision Protocol */}
      <section className="bg-[#1A4D2E] text-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-12 h-12 text-[#F4A261]" />
                  <div className="text-xs font-black text-[#F4A261] uppercase tracking-widest">Veteran Precision Protocol</div>
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Military-Grade Project Management</h2>
                <p className="text-white/80 font-bold text-lg leading-relaxed">
                  Every project executed with the same precision and discipline learned in service. 
                  Clear timelines. Zero surprises. Mission accomplished.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { day: "Day 1", task: "Site Assessment & Prep" },
                  { day: "Day 2-3", task: "Foundation & Base Work" },
                  { day: "Day 4-6", task: "Primary Construction" },
                  { day: "Day 7", task: "Final Inspection & Cleanup" },
                ].map((phase, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/10 border-l-4 border-[#F4A261]">
                    <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-black uppercase">{phase.day}</div>
                      <div className="text-xs text-white/70 font-bold">{phase.task}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border-4 border-[#F4A261] p-12 space-y-8">
              <div className="text-center space-y-4">
                <Award className="w-20 h-20 text-[#F4A261] mx-auto" />
                <h3 className="text-3xl font-black uppercase">Our Commitment</h3>
              </div>
              <div className="space-y-4 text-sm font-bold">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
                  <span>Free detailed estimates within 48 hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
                  <span>Licensed & insured for your protection</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
                  <span>Clear communication throughout project</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
                  <span>Veteran-owned, community-focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="bg-white border-4 border-[#1A4D2E] p-12 shadow-[16px_16px_0px_rgba(244,162,97,0.3)] space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Schedule Your Free Estimate</h2>
            <p className="text-[#1A4D2E] font-bold text-sm uppercase">48-Hour Response Guarantee</p>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-600">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#1A4D2E] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-600">Phone Number</label>
                <input type="tel" className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#1A4D2E] transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-600">Service Needed</label>
              <select className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#1A4D2E] transition-colors appearance-none">
                <option>Landscape Renovation</option>
                <option>Hardscape Renovation</option>
                <option>Fencing</option>
                <option>Landscape Lighting</option>
                <option>Deck & Patio Builder</option>
                <option>Retaining Walls</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-600">Project Details</label>
              <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#1A4D2E] transition-colors resize-none" placeholder="Tell us about your outdoor escape vision..." />
            </div>

            <button className="w-full py-6 bg-[#1A4D2E] text-white text-xl font-black uppercase tracking-widest hover:bg-[#F4A261] transition-colors border-4 border-[#1A4D2E]">
              REQUEST FREE ESTIMATE
            </button>
          </form>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#1A4D2E] border-t-4 border-[#F4A261] p-4">
        <a href="tel:4043537220" className="w-full py-4 bg-[#F4A261] text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-[#1A4D2E] transition-colors">
          <Phone className="w-5 h-5" />
          CALL (404) 353-7220
        </a>
      </div>

      <footer className="bg-[#1A4D2E] text-white border-t-4 border-[#F4A261] py-24 px-8 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-4xl font-black tracking-tighter uppercase">
              CARDEN<br />
              <span className="text-[#F4A261]">OUTDOOR ESCAPES</span>
            </div>
            <p className="text-white/70 font-bold text-sm max-w-xs leading-relaxed">
              Veteran-owned & operated. Transforming outdoor spaces in Milton, Pensacola, and Jay.
            </p>
            <div className="flex items-center gap-3 text-sm font-bold">
              <Phone className="w-4 h-4 text-[#F4A261]" />
              <span>(404) 353-7220</span>
            </div>
          </div>
          <div className="text-right space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#F4A261]">Licensed & Insured</div>
            <div className="text-sm font-bold text-white/50 uppercase">
              © 2026 CARDEN_OUTDOOR_ESCAPES<br />
              MILTON • PENSACOLA • JAY
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
