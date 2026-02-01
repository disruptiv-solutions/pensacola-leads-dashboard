"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Zap, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  Calendar,
  ChevronDown,
  Activity,
  DollarSign,
  Clock,
  Shield,
  Target,
  Users
} from "lucide-react";

const PACKAGES = [
  {
    id: "launch-site",
    icon: Rocket,
    name: "Launch Site",
    tagline: "One-page powerhouse. Live in 5 days.",
    priceFlat: 1497,
    priceMonthly: 149,
    timeline: "Delivered in 5 days",
    features: [
      "Custom design",
      "Mobile-optimized",
      "Contact form + automation",
      "Free directory listing",
      "30-day support"
    ]
  },
  {
    id: "local-automations",
    icon: Zap,
    name: "Local Automations Starter",
    tagline: "Review requests, lead capture, CRM sync.",
    priceFlat: 997,
    priceMonthly: 97,
    timeline: "Setup in 3 days",
    features: [
      "Automated review requests",
      "Contact form flows",
      "CRM integration",
      "Monthly monitoring",
      "Free directory boost"
    ]
  },
  {
    id: "directory-boost",
    icon: TrendingUp,
    name: "Directory Boost",
    tagline: "Featured listing + monthly promo post.",
    priceFlat: null,
    priceMonthly: 297,
    timeline: "Live immediately",
    features: [
      "Enhanced directory profile",
      "Monthly feature post",
      "Social media share",
      "Priority placement",
      "Analytics dashboard"
    ]
  }
];

const PHASES = [
  {
    number: 1,
    title: "MVP & First 10–20 Clients",
    description: "We're building the engine. Join the founding cohort.",
    status: "completed"
  },
  {
    number: 2,
    title: "Productized Offers",
    description: "Lock in your package. No custom chaos.",
    status: "current"
  },
  {
    number: 3,
    title: "Recurring Revenue",
    description: "Maintenance, monitoring, monthly promos.",
    status: "upcoming"
  },
  {
    number: 4,
    title: "Directory as Asset",
    description: "Your business, always visible. Always growing.",
    status: "upcoming"
  },
  {
    number: 5,
    title: "Regional Expansion",
    description: "Gulf Breeze. Ft. Walton. Beyond.",
    status: "upcoming"
  }
];

const DIRECTORY_PREVIEW = [
  { name: "AA Mobile Detailing", category: "Automotive", image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=400" },
  { name: "Sweet Sarah Desserts", category: "Bakery", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" },
  { name: "Carden Outdoor Escapes", category: "Landscaping", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" },
  { name: "Guy Brothers Roofing", category: "Roofing", image: "https://images.unsplash.com/photo-1631545866282-299942475527?auto=format&fit=crop&q=80&w=400" },
  { name: "All About Boba Café", category: "Food & Beverage", image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=400" },
  { name: "New Horizon Concrete", category: "Construction", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400" }
];

const FAQS = [
  {
    question: "What if I need something custom?",
    answer: "We can discuss custom work, but our productized packages cover 90% of what local businesses need. If you need something unique, we'll quote it separately—but we always recommend starting with a package to get live fast."
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely. Many clients start with Launch Site and add Local Automations or Directory Boost later. We make it seamless."
  },
  {
    question: "What's included in the directory listing?",
    answer: "Every package includes a free basic directory listing (business name, category, description, contact info). Directory Boost upgrades you to featured placement with monthly promo posts."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. For flat-fee packages, we offer 50% upfront, 50% at launch. Monthly packages are billed monthly with no long-term contract."
  },
  {
    question: "What happens after launch?",
    answer: "You get 30 days of support included. After that, you can add a maintenance retainer ($50–300/month) for ongoing updates, hosting, and monitoring."
  }
];

const LiveProjectTracker = () => {
  const [activeProjects, setActiveProjects] = useState(12);
  const [launchingThisWeek, setLaunchingThisWeek] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProjects(prev => (prev === 12 ? 13 : 12));
      setLaunchingThisWeek(prev => (prev === 3 ? 4 : 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-6 right-6 z-50 bg-slate-900/95 backdrop-blur-sm border border-blue-500/30 px-4 py-3 shadow-2xl"
    >
      <div className="flex items-center gap-3 text-xs font-black uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-white">Active: {activeProjects}</span>
        </div>
        <div className="w-px h-4 bg-white/20" />
        <div className="flex items-center gap-2">
          <Rocket className="w-3 h-3 text-blue-400" />
          <span className="text-blue-400">Launching: {launchingThisWeek}</span>
        </div>
      </div>
    </motion.div>
  );
};

const PhaseIndicatorBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-2 px-4 text-center"
    >
      <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-white">
        <span className="text-yellow-300">🔥</span>
        <span>Phase 2 Active: Productized Offers Now Live</span>
      </div>
    </motion.div>
  );
};

const IncomeGoalSimulator = () => {
  const [monthlyGoal, setMonthlyGoal] = useState(2000);
  const [timeframe, setTimeframe] = useState(3);

  const launchSites = Math.ceil(monthlyGoal / 149);
  const retainers = Math.ceil(monthlyGoal / 97);
  const mixed = Math.ceil(monthlyGoal / 200);

  return (
    <div className="bg-slate-800/50 border border-blue-500/30 p-8 space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Target className="w-6 h-6 text-blue-400" />
        <h3 className="text-2xl font-black uppercase tracking-tight">Income Goal Simulator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
            Monthly Goal ($)
          </label>
          <input
            type="number"
            value={monthlyGoal}
            onChange={(e) => setMonthlyGoal(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white font-bold text-lg focus:border-blue-500 focus:outline-none"
            step="500"
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
            Timeframe (months)
          </label>
          <input
            type="number"
            value={timeframe}
            onChange={(e) => setTimeframe(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white font-bold text-lg focus:border-blue-500 focus:outline-none"
            step="1"
            min="1"
          />
        </div>
      </div>

      <div className="border-t border-slate-700 pt-6 space-y-3">
        <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
          You'll Need:
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Launch Sites (monthly):</span>
            <span className="text-blue-400 font-black text-lg">{launchSites}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">OR Automation Retainers:</span>
            <span className="text-cyan-400 font-black text-lg">{retainers}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">OR Mixed Clients:</span>
            <span className="text-green-400 font-black text-lg">{mixed}</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black uppercase tracking-wider py-4 transition-all duration-300 flex items-center justify-center gap-2">
        <span>Let's Build Your Plan</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const RetainerVisualizer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const tiers = [
    { clients: 1, revenue: 150 },
    { clients: 5, revenue: 750 },
    { clients: 10, revenue: 1500 },
    { clients: 20, revenue: 3000 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <DollarSign className="w-6 h-6 text-green-400" />
        <h3 className="text-2xl font-black uppercase tracking-tight">Stack Your Retainers</h3>
      </div>

      <div className="space-y-4">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                {tier.clients} Client{tier.clients > 1 ? 's' : ''}
              </span>
              <span className="text-lg font-black text-green-400">
                ${tier.revenue.toLocaleString()}/mo
              </span>
            </div>
            <div className="relative h-8 bg-slate-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ 
                  width: hoveredIndex === idx ? '100%' : `${(tier.revenue / 3000) * 100}%` 
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-slate-500 italic">
        Average retainer: $150/month. Hover to see full potential.
      </p>
    </div>
  );
};

export default function Home() {
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [paymentMode, setPaymentMode] = useState<"flat" | "monthly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const togglePackage = (id: string) => {
    setSelectedPackages(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let setupTotal = 0;
    let monthlyTotal = 0;

    selectedPackages.forEach(id => {
      const pkg = PACKAGES.find(p => p.id === id);
      if (pkg) {
        if (paymentMode === "flat" && pkg.priceFlat) {
          setupTotal += pkg.priceFlat;
        } else if (pkg.priceMonthly) {
          monthlyTotal += pkg.priceMonthly;
        }
      }
    });

    return { setupTotal, monthlyTotal };
  };

  const { setupTotal, monthlyTotal } = calculateTotal();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PhaseIndicatorBadge />
      <LiveProjectTracker />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-950 to-cyan-950/30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto text-center space-y-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-500/30 text-sm font-black uppercase tracking-widest">
              <Activity className="w-4 h-4" />
              Digital Duo Studio
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none uppercase">
              Pensacola's<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                Productized
              </span><br />
              Web Studio
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-300 font-bold leading-relaxed">
              Fixed prices. Fast delivery. Recurring results.<br />
              <span className="text-slate-500">No scope creep, no surprises.</span>
            </p>

            {/* Live Stats Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-8 px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">12</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Projects</div>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400">8</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Retainers</div>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <div className="text-3xl font-black text-green-400">47</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Directory Listings</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#packages"
              className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <span>View Packages</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/demo-pages"
              className="px-10 py-5 border-2 border-slate-700 hover:border-blue-500 text-white font-black uppercase tracking-widest transition-all duration-300 text-lg"
            >
              Browse Directory
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Serving Pensacola, Gulf Breeze & Beyond</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="text-lg font-black uppercase tracking-tight">
            Tired of custom quotes that balloon into 6-month projects?
          </div>
          <div className="hidden md:block w-px h-12 bg-white/30" />
          <div className="text-lg font-black uppercase tracking-tight">
            We run plays, not experiments. Pick a package. Launch in days.
          </div>
        </div>
      </section>

      {/* Productized Offers Grid */}
      <section id="packages" className="py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Choose Your Package
            </h2>
            <p className="text-xl text-slate-400 font-bold">
              Clear scope. Clear price. Clear timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="space-y-6">
                    <IconComponent className="w-12 h-12 text-blue-400" />
                    
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-slate-400 font-bold">
                        {pkg.tagline}
                      </p>
                    </div>

                    <div className="border-t border-slate-800 pt-6">
                      {pkg.priceFlat && (
                        <div className="mb-2">
                          <span className="text-4xl font-black text-white">
                            ${pkg.priceFlat.toLocaleString()}
                          </span>
                          <span className="text-slate-500 font-bold ml-2">flat</span>
                        </div>
                      )}
                      <div>
                        <span className="text-4xl font-black text-cyan-400">
                          ${pkg.priceMonthly}
                        </span>
                        <span className="text-slate-500 font-bold">/month</span>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span className="font-bold">{pkg.timeline}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                          <span className="text-slate-300 font-bold">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black uppercase tracking-wider py-4 transition-all duration-300 flex items-center justify-center gap-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 5-Phase Roadmap */}
      <section className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              The Roadmap
            </h2>
            <p className="text-xl text-slate-400 font-bold">
              Five phases. One mission: Scale smart.
            </p>
          </div>

          <div className="space-y-6">
            {PHASES.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 p-8 border-l-4 ${
                  phase.status === 'current'
                    ? 'border-blue-500 bg-blue-500/10'
                    : phase.status === 'completed'
                    ? 'border-green-500 bg-green-500/5'
                    : 'border-slate-700 bg-slate-900/30'
                }`}
              >
                <div className={`shrink-0 w-16 h-16 flex items-center justify-center font-black text-2xl ${
                  phase.status === 'current'
                    ? 'bg-blue-500 text-white'
                    : phase.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-800 text-slate-500'
                }`}>
                  {phase.number}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {phase.title}
                    </h3>
                    {phase.status === 'current' && (
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-black uppercase tracking-wider">
                        Current Phase
                      </span>
                    )}
                    {phase.status === 'completed' && (
                      <Check className="w-6 h-6 text-green-400" />
                    )}
                  </div>
                  <p className="text-slate-400 font-bold text-lg">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Productized? */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Why Productized?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "No Scope Creep",
                description: "Fixed scope. Fixed price. Fixed timeline. You know exactly what you're getting."
              },
              {
                icon: Zap,
                title: "Faster Delivery",
                description: "We've run this play 20+ times. You get the refined version, not the experiment."
              },
              {
                icon: TrendingUp,
                title: "Stacked Retainers",
                description: "Every project can become $50–300/month in recurring revenue for you."
              }
            ].map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/10 border border-blue-500/30">
                    <IconComponent className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 font-bold leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Directory Preview */}
      <section className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Meet the Directory
            </h2>
            <p className="text-xl text-slate-400 font-bold">
              Free basic listing with any package. Paid upgrades available.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {DIRECTORY_PREVIEW.map((business, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden border border-slate-800 hover:border-blue-500 transition-all duration-300"
              >
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="text-xs font-black uppercase tracking-wider text-blue-400 mb-1">
                    {business.category}
                  </div>
                  <div className="text-sm font-black">
                    {business.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/demo-pages"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-500 hover:bg-blue-500 text-white font-black uppercase tracking-widest transition-all duration-300"
            >
              <span>Explore Full Directory</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Calculator & Tools */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Plan Your Growth
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pricing Calculator */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-black uppercase tracking-tight">Pricing Calculator</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={() => setPaymentMode('monthly')}
                    className={`flex-1 py-3 font-black uppercase tracking-wider transition-all ${
                      paymentMode === 'monthly'
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setPaymentMode('flat')}
                    className={`flex-1 py-3 font-black uppercase tracking-wider transition-all ${
                      paymentMode === 'flat'
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    One-Time
                  </button>
                </div>

                {PACKAGES.map(pkg => (
                  <label
                    key={pkg.id}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPackages.includes(pkg.id)}
                      onChange={() => togglePackage(pkg.id)}
                      className="w-5 h-5"
                    />
                    <div className="flex-1">
                      <div className="font-black uppercase tracking-tight">{pkg.name}</div>
                      <div className="text-sm text-slate-500 font-bold">
                        {paymentMode === 'flat' && pkg.priceFlat
                          ? `$${pkg.priceFlat.toLocaleString()} flat`
                          : `$${pkg.priceMonthly}/month`}
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="border-t border-slate-700 pt-6 space-y-3">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-slate-400">Your Investment:</span>
                  <div className="text-right">
                    {setupTotal > 0 && (
                      <div className="text-2xl font-black text-white">
                        ${setupTotal.toLocaleString()} setup
                      </div>
                    )}
                    {monthlyTotal > 0 && (
                      <div className="text-2xl font-black text-cyan-400">
                        ${monthlyTotal}/month
                      </div>
                    )}
                    {setupTotal === 0 && monthlyTotal === 0 && (
                      <div className="text-2xl font-black text-slate-600">
                        Select packages
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-black uppercase tracking-wider py-4 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Lock This In</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Income Goal Simulator */}
            <div className="space-y-8">
              <IncomeGoalSimulator />
              <RetainerVisualizer />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-blue-400 mb-2">12</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">Sites Launched</div>
            </div>
            <div>
              <div className="text-5xl font-black text-cyan-400 mb-2">8</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">Active Retainers</div>
            </div>
            <div>
              <div className="text-5xl font-black text-green-400 mb-2">47</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">Directory Listings</div>
            </div>
            <div>
              <div className="text-5xl font-black text-yellow-400 mb-2">100%</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-800 bg-slate-900/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-black uppercase tracking-tight text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-400 font-bold leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-950/50 via-slate-950 to-cyan-950/50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Ready to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Launch?
            </span>
          </h2>
          <p className="text-2xl text-slate-400 font-bold">
            Pick a package. Book a call. Go live in days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black text-xl uppercase tracking-widest transition-all duration-300 flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <span>Schedule Discovery Call</span>
            </button>

            <a
              href="#packages"
              className="px-12 py-6 border-2 border-slate-700 hover:border-blue-500 text-white font-black text-xl uppercase tracking-widest transition-all duration-300"
            >
              View Pricing Again
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>No contracts. No surprises. Just results.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-black uppercase tracking-tight mb-2">
                Digital Duo Studio
              </div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                Pensacola's Productized Web Studio
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-wider">
              <a href="#packages" className="text-slate-400 hover:text-white transition-colors">
                Packages
              </a>
              <Link href="/demo-pages" className="text-slate-400 hover:text-white transition-colors">
                Directory
              </Link>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            <div className="text-sm text-slate-500 font-bold uppercase tracking-wider text-center md:text-right">
              Built in Pensacola 🌴<br />
              © 2026 Digital Duo Studio
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/95 backdrop-blur-sm border-t border-slate-800 md:hidden z-40">
        <a
          href="#packages"
          className="block w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-black uppercase tracking-widest text-center"
        >
          View Packages
        </a>
      </div>
    </main>
  );
}
