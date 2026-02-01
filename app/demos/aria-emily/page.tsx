"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Truck, 
  ShieldCheck, 
  Calculator, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight, 
  Star, 
  Box, 
  Package, 
  Home, 
  Armchair, 
  CheckCircle2,
  Navigation,
  Calendar,
  ArrowRight
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const PRIMARY_NAVY = "#0F172A";
const ACCENT_BLUE = "#38BDF8";

const INVENTORY_ITEMS = [
  { id: "box", name: "Standard Box", icon: Box, weight: 25, size: 2 },
  { id: "couch", name: "Couch/Sofa", icon: Armchair, weight: 150, size: 35 },
  { id: "bed", name: "King Bed", icon: Home, weight: 200, size: 50 },
  { id: "package", name: "Fragile Item", icon: Package, weight: 40, size: 5 },
];

const DISPATCH_ROUTES = [
  { id: "sarasota", name: "Sarasota", coords: { x: 35, y: 70 } },
  { id: "miami", name: "Miami", coords: { x: 75, y: 90 } },
  { id: "jupiter", name: "Jupiter", coords: { x: 78, y: 75 } },
];

// --- Components ---

const WhiteGloveBadge = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="fixed top-24 right-6 z-50 pointer-events-none"
  >
    <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[280px]">
      <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
        <ShieldCheck className="w-6 h-6 text-sky-400" />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Protocol Alpha</div>
        <div className="text-sm font-black text-slate-900 leading-tight">Artifact Protection & Insurance Guarantee</div>
      </div>
    </div>
  </motion.div>
);

const InventoryEstimator = () => {
  const [counts, setCounts] = useState<Record<string, number>>({ box: 0, couch: 0, bed: 0, package: 0 });
  
  const totalWeight = Object.entries(counts).reduce((acc, [id, count]) => {
    const item = INVENTORY_ITEMS.find(i => i.id === id);
    return acc + (item?.weight || 0) * count;
  }, 0);

  const truckSize = totalWeight < 500 ? "Sprinter Van" : totalWeight < 2000 ? "16ft Box Truck" : "26ft Freight Liner";

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-8">
      <div className="space-y-2">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Inventory Estimator</h3>
        <p className="text-slate-500 text-sm font-medium">Drag or click to add items to your manifest.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {INVENTORY_ITEMS.map(item => (
          <div
            key={item.id}
            className="group p-4 bg-white border border-slate-200 rounded-2xl hover:border-sky-500 hover:shadow-xl transition-all flex flex-col items-center gap-3"
          >
            <item.icon className="w-8 h-8 text-slate-400 group-hover:text-sky-500 transition-colors" />
            <div className="text-center">
              <div className="text-xs font-bold text-slate-900">{item.name}</div>
            </div>
            
            <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1 border border-slate-100">
              <button 
                onClick={() => setCounts(prev => ({ ...prev, [item.id]: Math.max(0, prev[item.id] - 1) }))}
                className="w-6 h-6 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all text-sm font-bold"
              >
                -
              </button>
              <span className="text-xs font-black text-slate-900 min-w-[1.5ch] text-center">{counts[item.id]}</span>
              <button 
                onClick={() => setCounts(prev => ({ ...prev, [item.id]: prev[item.id] + 1 }))}
                className="w-6 h-6 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all text-sm font-bold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estimated Payload</div>
          <div className="text-3xl font-black text-slate-900">{totalWeight} <span className="text-lg font-bold text-slate-400">LBS</span></div>
        </div>
        <div className="px-6 py-3 bg-slate-900 rounded-full text-white text-sm font-bold flex items-center gap-3">
          <Truck className="w-4 h-4 text-sky-400" />
          {truckSize.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

const RouteSimulator = () => {
  const [fromZip, setFromZip] = useState("");
  const [toZip, setToZip] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 3000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
          <Navigation className="w-5 h-5 text-sky-600" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Live Route Simulator</h3>
      </div>

      <form onSubmit={handleSimulate} className="grid sm:grid-cols-3 gap-4">
        <input 
          type="text" 
          placeholder="Origin Zip" 
          className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm font-bold outline-none focus:border-sky-500 transition-colors"
          value={fromZip}
          onChange={e => setFromZip(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Destination Zip" 
          className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm font-bold outline-none focus:border-sky-500 transition-colors"
          value={toZip}
          onChange={e => setToZip(e.target.value)}
        />
        <button className="bg-sky-500 text-white font-black py-4 rounded-xl hover:bg-sky-600 transition-colors">
          CALCULATE
        </button>
      </form>

      <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        {/* Florida Map Mockup */}
        <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
          {/* Detailed Florida Path */}
          <path 
            d="M40,20 L120,20 L125,35 L135,45 L145,70 L155,110 L150,140 L140,160 L125,175 L110,180 L100,170 L95,150 L90,130 L85,100 L75,80 L65,75 L40,70 Z" 
            fill="white" 
            stroke="#E2E8F0" 
            strokeWidth="1" 
          />
          
          {/* Route Dots */}
          {DISPATCH_ROUTES.map(route => (
            <g key={route.id}>
              <circle cx={route.coords.x * 1.5} cy={route.coords.y * 1.5} r="2" fill="#38BDF8" className="animate-pulse" />
              <text 
                x={route.coords.x * 1.5 + 4} 
                y={route.coords.y * 1.5 + 2} 
                className="text-[5px] font-black fill-slate-400"
              >
                {route.name.toUpperCase()}
              </text>
            </g>
          ))}
          
          {isSimulating && (
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M50,40 Q100,100 130,150"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
          )}
        </svg>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className="flex gap-2">
            {DISPATCH_ROUTES.map(route => (
              <div key={route.id} className="px-2 py-1 bg-white/80 backdrop-blur-sm border border-slate-200 rounded text-[8px] font-bold text-slate-500">
                {route.name.toUpperCase()}
              </div>
            ))}
          </div>
          {isSimulating && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold text-sky-600 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              OPTIMIZING LOGISTICS...
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AriaEmilyLanding() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 overflow-x-hidden">
      <WhiteGloveBadge />

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-slate-900">
            ARIA <span className="text-sky-500">EMILY</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#routes" className="hover:text-sky-500 transition-colors">ROUTES</a>
            <a href="#quote" className="hover:text-sky-500 transition-colors">QUOTE_HUB</a>
            <a href="#trust" className="hover:text-sky-500 transition-colors">TRUST_PROTOCOL</a>
            <button className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-sky-500 transition-all">
              BOOK_NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-truck-driving-on-a-highway-at-night-34562-large.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-white" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-sky-400 uppercase">Premium Logistics Network</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              LONG DISTANCE <br />
              <span className="text-sky-400">REDEFINED.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
              Sarasota. Miami. Jupiter. High-trust moving services for high-value assets. 
              White-glove protection as standard.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-10 py-5 bg-sky-500 text-white font-black tracking-widest text-sm hover:bg-white hover:text-slate-900 transition-all flex items-center gap-3">
              INITIALIZE QUOTE <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black tracking-widest text-sm hover:bg-white/20 transition-all">
              VIEW PROTOCOLS
            </button>
          </motion.div>
        </div>

        {/* HUD Overlay */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl space-y-4 min-w-[240px]">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-[10px] font-bold text-slate-400">LIVE_DISPATCH</span>
              <Navigation className="w-3 h-3 text-sky-400" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-white">SARASOTA_HUB</span>
                <span className="text-sky-400">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-white">MIAMI_SECTOR</span>
                <span className="text-sky-400">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Hub */}
      <section id="quote" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-sky-500 tracking-[0.3em] uppercase">Operational Intelligence</div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900">QUOTE_HUB</h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                Our AI-integrated calculator justifies premium rates through precise logistics modeling. 
                No estimates—only synchronization.
              </p>
            </div>
            
            <RouteSimulator />
          </div>

          <InventoryEstimator />
        </div>
      </section>

      {/* Operational Map */}
      <section id="routes" className="bg-slate-900 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-[10px] font-bold text-sky-400 tracking-[0.3em] uppercase">Coverage Matrix</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">Sarasota • Miami • Jupiter</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DISPATCH_ROUTES.map(route => (
              <div key={route.id} className="group relative p-12 bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <MapPin className="w-32 h-32 text-sky-400" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="text-4xl font-black text-white">{route.name.toUpperCase()}</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                      DAILY DISPATCH
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                      CLIMATE CONTROLLED
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Sections */}
      <section id="trust" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div className="text-[10px] font-bold text-sky-500 tracking-[0.3em] uppercase">Trust Protocol</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-none">
              WHITE-GLOVE <br />
              PRESERVATION.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We don't just move furniture; we preserve artifacts. Our protection protocol 
              is engineered for high-value items, utilizing multi-layer wrapping and 
              custom crating.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safety Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-slate-900">24/7</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Tracking</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1000" 
                alt="Furniture Wrapping" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-sky-500/10" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">INSURANCE_VERIFIED</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Artifact Protection Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <button className="w-full py-5 bg-slate-900 text-white font-black tracking-widest text-sm rounded-2xl shadow-2xl flex items-center justify-center gap-3">
          <Calendar className="w-4 h-4 text-sky-400" />
          SCHEDULE MOVING DATE
        </button>
      </div>

      <footer className="bg-slate-50 border-t border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-3xl font-black tracking-tighter text-slate-900">
              ARIA <span className="text-sky-500">EMILY</span>
            </div>
            <p className="text-slate-400 text-sm font-medium max-w-xs leading-relaxed">
              Professional logistics and high-intent moving services for Sarasota, Miami, and Jupiter.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Network</div>
              <div className="flex flex-col gap-2 text-sm font-bold text-slate-500">
                <a href="#">Sarasota</a>
                <a href="#">Miami</a>
                <a href="#">Jupiter</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Legal</div>
              <div className="flex flex-col gap-2 text-sm font-bold text-slate-500">
                <a href="#">Privacy</a>
                <a href="#">Insurance</a>
                <a href="#">Terms</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Contact</div>
              <div className="flex flex-col gap-2 text-sm font-bold text-slate-500">
                <a href="#">+1 (800) ARIA-MOV</a>
                <a href="#">dispatch@ariaemily.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-200 text-center">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            © 2026 ARIA_EMILY_LOGISTICS // PREMIUM_DISPATCH_INFRASTRUCTURE
          </div>
        </div>
      </footer>
    </div>
  );
}
