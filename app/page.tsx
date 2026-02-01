"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              Pensacola Leads Dashboard
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
              Transform<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                Local Business
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 font-bold leading-relaxed">
              High-production demo pages for Pensacola's offline giants.
              Converting marketplace listings into digital dominators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/demo-pages"
              className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3"
            >
              <span>View All Demos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/demo-pages"
              className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-black uppercase tracking-widest transition-all duration-300"
            >
              Explore Portfolio
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-20"
          >
            <div className="space-y-2">
              <div className="text-5xl font-black text-blue-400">20+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Demo Pages</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-cyan-400">100%</div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Unique Designs</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-blue-400">24/7</div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Live Demos</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <div className="text-xs font-bold uppercase tracking-widest">Scroll to explore</div>
            <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">What We Build</h2>
            <p className="text-xl text-slate-400 font-bold">High-production landing pages for real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Interactive Experiences",
                description: "Custom booking systems, calculators, and real-time tools"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance with modern tech stack"
              },
              {
                icon: TrendingUp,
                title: "Conversion Focused",
                description: "Designed to turn visitors into customers"
              }
            ].map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <IconComponent className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-slate-400 font-bold leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Ready to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              See the Demos?
            </span>
          </h2>
          <p className="text-xl text-slate-400 font-bold">
            Explore our portfolio of high-production landing pages
          </p>
          <Link
            href="/demo-pages"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black text-xl uppercase tracking-widest transition-all duration-300"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            © 2026 Pensacola Leads Dashboard
          </div>
          <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Clawdell Systems
          </div>
        </div>
      </footer>
    </main>
  );
}
