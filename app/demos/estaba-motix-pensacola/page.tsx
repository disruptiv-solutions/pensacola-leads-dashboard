"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight, 
  Award,
  Car,
  Gauge,
  Settings,
  Truck,
  Calendar,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Navigation,
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const BURNT_ORANGE = "#FF6600";
const METALLIC_GOLD = "#D4AF37";
const STEEL_GRAY = "#71797E";

const SERVICES = [
  { 
    id: "engine", 
    name: "Engine Repair & Replacement", 
    icon: Settings, 
    warranty: "Up to 3 Years",
    description: "Complete engine diagnostics, repair, and replacement",
    priceRange: "$500 - $5,000+"
  },
  { 
    id: "transmission", 
    name: "Transmission Repair & Replacement", 
    icon: Gauge, 
    warranty: "Up to 3 Years",
    description: "Expert transmission service and rebuilds",
    priceRange: "$800 - $4,000+"
  },
  { 
    id: "general", 
    name: "General Auto Repair", 
    icon: Wrench, 
    warranty: "Up to 1 Year",
    description: "Brakes, suspension, electrical, and more",
    priceRange: "$100 - $1,500+"
  },
  { 
    id: "diagnostic", 
    name: "Diagnostics", 
    icon: Gauge, 
    warranty: "FREE First Year",
    description: "Computer diagnostics and issue identification",
    priceRange: "FREE"
  },
];

const WARRANTY_TIERS = [
  { service: "Engine Replacement", coverage: "3 Years", value: "$3,000 - $8,000" },
  { service: "Transmission Replacement", coverage: "3 Years", value: "$2,500 - $6,000" },
  { service: "General Repairs", coverage: "1 Year", value: "$500 - $2,000" },
];

const COMMON_ISSUES = [
  { issue: "Check Engine Light", potential: "Sensor/Emissions Issue", estimate: "$100 - $500" },
  { issue: "Strange Noises", potential: "Suspension/Exhaust", estimate: "$200 - $1,000" },
  { issue: "Poor Performance", potential: "Fuel/Ignition System", estimate: "$150 - $800" },
  { issue: "Transmission Slipping", potential: "Transmission Service", estimate: "$300 - $3,500" },
];

const SHUTTLE_ZONES = [
  { area: "Downtown Pensacola", distance: "5 miles", time: "15 min" },
  { area: "East Pensacola", distance: "8 miles", time: "20 min" },
  { area: "West Pensacola", distance: "10 miles", time: "25 min" },
  { area: "Gulf Breeze", distance: "12 miles", time: "30 min" },
];

// --- Components ---

const FreeDiagnosticBanner = () => {
  const [daysLeft, setDaysLeft] = useState(287); // Example: days left in first year
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF6600] to-[#D4AF37] border-b-4 border-black shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 w-6 h-6 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-white animate-pulse" />
          <div className="text-white font-black uppercase tracking-tight">
            <div className="text-lg">First Year Special: FREE Basic Diagnostics!</div>
            <div className="text-xs font-bold opacity-90">Limited Time Offer</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white font-black text-sm">{daysLeft} Days Left</span>
          </div>
          <button className="bg-white text-[#FF6600] px-6 py-2 font-black uppercase text-sm hover:bg-black hover:text-white transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const DiagnosticBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    issue: "",
    date: ""
  });

  return (
    <div className="bg-white border-4 border-[#FF6600] p-8 shadow-[12px_12px_0px_rgba(255,102,0,0.3)]">
      <div className="space-y-2 mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tight">Book Free Diagnostic</h3>
        <p className="text-sm font-bold text-slate-500 uppercase">First Year Promotion - No Cost</p>
      </div>

      <form className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-600">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6600] transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-600">Phone Number</label>
            <input 
              type="tel" 
              className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6600] transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-600">Year</label>
            <input 
              type="text" 
              placeholder="2020"
              className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6600] transition-colors"
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-600">Make</label>
            <input 
              type="text" 
              placeholder="Honda"
              className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6600] transition-colors"
              value={formData.make}
              onChange={(e) => setFormData({...formData, make: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-600">Model</label>
            <input 
              type="text" 
              placeholder="Civic"
              className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6600] transition-colors"
              value={formData.model}
              onChange={(e) => setFormData({...formData, model: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-slate-600">Describe the Issue</label>
          <textarea 
            rows={4}
            className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6600] transition-colors resize-none"
            placeholder="Check engine light is on, strange noise when braking..."
            value={formData.issue}
            onChange={(e) => setFormData({...formData, issue: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-slate-600">Preferred Date</label>
          <input 
            type="date" 
            className="w-full bg-slate-50 border-2 border-slate-300 p-4 font-bold outline-none focus:border-[#FF6600] transition-colors"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>

        <button className="w-full py-6 bg-[#FF6600] text-white text-xl font-black uppercase tracking-widest hover:bg-black transition-colors border-4 border-[#FF6600]">
          BOOK FREE DIAGNOSTIC
        </button>
      </form>
    </div>
  );
};

const ServiceCard = ({ service }: { service: typeof SERVICES[0] }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="bg-[#1A1A1A] border-4 border-[#FF6600] p-8 hover:border-[#D4AF37] transition-all group">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <IconComponent className="w-12 h-12 text-[#FF6600] group-hover:text-[#D4AF37] transition-colors" />
          <div className="flex-1">
            <h4 className="text-xl font-black uppercase tracking-tight text-white">{service.name}</h4>
            <div className="text-xs font-bold text-[#D4AF37] uppercase mt-1">Warranty: {service.warranty}</div>
          </div>
        </div>
        <p className="text-sm text-slate-400 font-bold">{service.description}</p>
        <div className="flex items-center justify-between pt-4 border-t-2 border-[#FF6600]/30">
          <span className="text-xs font-bold text-slate-500 uppercase">Price Range</span>
          <span className="text-lg font-black text-[#FF6600]">{service.priceRange}</span>
        </div>
      </div>
    </div>
  );
};

const WarrantyCalculator = () => {
  const [selectedService, setSelectedService] = useState(WARRANTY_TIERS[0]);

  return (
    <div className="bg-white border-4 border-[#D4AF37] p-8 shadow-[12px_12px_0px_rgba(212,175,55,0.3)]">
      <div className="space-y-2 mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tight">Warranty Coverage</h3>
        <p className="text-sm font-bold text-slate-500 uppercase">Peace of Mind Protection</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-600">Select Service Type</label>
          <div className="space-y-2">
            {WARRANTY_TIERS.map((tier, i) => (
              <button
                key={i}
                onClick={() => setSelectedService(tier)}
                className={cn(
                  "w-full p-4 border-2 transition-all flex items-center justify-between",
                  selectedService.service === tier.service
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-slate-300 bg-slate-50 hover:border-slate-400"
                )}
              >
                <span className="text-sm font-bold">{tier.service}</span>
                <span className="text-xs text-slate-500">{tier.coverage} Coverage</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#FF6600]/10 border-2 border-[#FF6600] p-6 space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#FF6600]" />
            <div>
              <div className="text-sm font-black uppercase text-[#FF6600]">Your Coverage</div>
              <div className="text-2xl font-black">{selectedService.coverage}</div>
            </div>
          </div>
          <div className="text-xs text-slate-600 font-bold">
            Protection Value: <span className="text-[#FF6600] font-black">{selectedService.value}</span>
          </div>
          <div className="text-[10px] text-slate-500 font-bold uppercase">
            Most competitors offer 30-90 days. We offer up to 3 years.
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EstabaMotixPensacola() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans selection:bg-[#FF6600] selection:text-white overflow-x-hidden">
      <FreeDiagnosticBanner />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
            alt="Auto mechanic" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />

        {/* Diagonal Orange Stripe */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF6600] transform skew-x-12 origin-top-right opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-[#FF6600] text-white font-black text-sm uppercase tracking-tighter border-4 border-white shadow-2xl">
              <Award className="w-6 h-6" />
              EST. 2020 • UP TO 3-YEAR WARRANTY
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white">
              ESTABA<br />
              <span className="text-[#FF6600]">MOTIX</span>
            </h1>
            <p className="max-w-3xl mx-auto text-white/90 text-xl md:text-2xl font-bold leading-relaxed uppercase tracking-tight">
              Specialized Auto Repair<br />
              Affordable Engines & Transmissions
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-[#FF6600] text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-colors flex items-center gap-4 group border-4 border-white shadow-2xl">
              BOOK FREE DIAGNOSTIC <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-black uppercase tracking-widest text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>8808 N Palafox St, Pensacola</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(251) 391-0513</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Diagnostic Booking Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#FF6600] uppercase tracking-widest">Limited Time Offer</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Free Basic Diagnostics</h2>
          <p className="text-slate-400 font-bold text-lg max-w-2xl mx-auto">
            First year promotion - Get expert computer diagnostics at no cost
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <DiagnosticBookingForm />
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black/50 py-24 px-8 border-y-4 border-[#FF6600]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs font-black text-[#D4AF37] uppercase tracking-widest">Our Expertise</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Specialized Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Calculator & Common Issues */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <WarrantyCalculator />

          <div className="bg-[#1A1A1A] border-4 border-[#71797E] p-8">
            <div className="space-y-2 mb-8">
              <h3 className="text-3xl font-black uppercase tracking-tight">Common Issues</h3>
              <p className="text-sm font-bold text-slate-500 uppercase">Potential Causes & Estimates</p>
            </div>

            <div className="space-y-4">
              {COMMON_ISSUES.map((item, i) => (
                <div key={i} className="bg-black/50 border-l-4 border-[#FF6600] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black uppercase">{item.issue}</h4>
                    <AlertCircle className="w-5 h-5 text-[#FF6600]" />
                  </div>
                  <div className="text-xs text-slate-400 font-bold">Potential: {item.potential}</div>
                  <div className="text-xs text-[#D4AF37] font-black">Est. {item.estimate}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shuttle Service */}
      <section className="bg-[#FF6600] text-white py-24 px-8 border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Truck className="w-16 h-16 mx-auto" />
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">We Come To You</h2>
            <p className="text-white/90 font-bold text-lg max-w-2xl mx-auto">
              Free shuttle service within Pensacola area - Drop off your car and we'll take you home
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {SHUTTLE_ZONES.map((zone, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 text-center space-y-3">
                <Navigation className="w-8 h-8 mx-auto" />
                <h4 className="text-lg font-black uppercase">{zone.area}</h4>
                <div className="text-sm font-bold">{zone.distance} • {zone.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Business Model */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-[#1A1A1A] border-4 border-[#D4AF37] p-12 space-y-8">
          <div className="text-center space-y-4">
            <Car className="w-16 h-16 text-[#D4AF37] mx-auto" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">The Dealership Advantage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-black uppercase text-[#FF6600]">Used Car Dealership</h4>
              <ul className="space-y-3">
                {[
                  "Quality pre-owned vehicles",
                  "Thorough inspections",
                  "Competitive pricing",
                  "Trade-ins accepted"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6600] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-black uppercase text-[#D4AF37]">Full-Service Repair Shop</h4>
              <ul className="space-y-3">
                {[
                  "Expert automotive repairs",
                  "Up to 3-year warranties",
                  "Affordable pricing",
                  "Shuttle service available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-[#D4AF37]/30 text-center">
            <p className="text-lg font-bold text-slate-400">
              Buy a car from us and get <span className="text-[#FF6600] font-black">discounted repair services</span> for life
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FF6600] border-t-4 border-black p-4">
        <a href="tel:2513910513" className="w-full py-4 bg-white text-[#FF6600] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-colors">
          <Phone className="w-5 h-5" />
          CALL (251) 391-0513
        </a>
      </div>

      <footer className="bg-black border-t-4 border-[#FF6600] py-24 px-8 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-4xl font-black tracking-tighter uppercase">
              ESTABA<br />
              <span className="text-[#FF6600]">MOTIX PENSACOLA</span>
            </div>
            <p className="text-slate-500 font-bold text-sm max-w-xs leading-relaxed uppercase">
              Specialized Auto Repair • Affordable Prices<br />
              Up to 3-Year Warranty • Shuttle Service
            </p>
            <div className="space-y-2 text-sm font-bold text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6600]" />
                <span>8808 N Palafox St, Pensacola, FL 32534</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6600]" />
                <span>(251) 391-0513</span>
              </div>
            </div>
          </div>
          <div className="text-right space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Est. 2020</div>
            <div className="text-sm font-bold text-slate-700 uppercase">
              © 2026 ESTABA_MOTIX_PENSACOLA<br />
              AUTOMOTIVE_EXCELLENCE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
