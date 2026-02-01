"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Wrench, 
  Rocket, 
  Check, 
  Map, 
  Eye, 
  TrendingUp,
  Store,
  Star,
  ArrowLeft,
  ArrowRight,
  Menu,
  Zap,
  RefreshCw,
  Storefront,
  ChevronRight
} from "lucide-react";

const OFFERS = [
  {
    id: "launch-site",
    icon: Rocket,
    name: "The Launch Site",
    badge: "Best Value",
    badgeColor: "bg-blue-100 dark:bg-blue-900 text-primary",
    price: 997,
    period: "one-time",
    description: "Perfect for new businesses needing a professional presence fast.",
    features: [
      "High-converting one-pager",
      "Mobile optimized & Fast",
      "Basic SEO Foundation",
      "5-Day Delivery"
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white",
    featured: false
  },
  {
    id: "local-automations",
    icon: RefreshCw,
    name: "Local Automations",
    badge: "Popular",
    badgeColor: "bg-primary text-white",
    price: 297,
    period: "/mo",
    description: "Automate your reputation and customer management.",
    features: [
      "Auto-review requests (SMS/Email)",
      "Unified Inbox & CRM",
      "Missed Call Text Back",
      "Lead Capture Forms"
    ],
    buttonText: "Start Free Trial",
    buttonStyle: "bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25",
    featured: true
  },
  {
    id: "directory-boost",
    icon: Storefront,
    name: "Directory Boost",
    badge: "Add-on",
    badgeColor: "bg-blue-100 dark:bg-blue-900 text-primary",
    price: 97,
    period: "/mo",
    description: "Get found by locals on our exclusive community directory.",
    features: [
      "Premium Directory Listing",
      "Featured Homepage Placement",
      "High-Authority Local Backlink",
      "Monthly Traffic Report"
    ],
    buttonText: "Join Directory",
    buttonStyle: "bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white",
    featured: false
  }
];

const TESTIMONIALS = [
  {
    name: "Michael R.",
    role: "Owner, Bayview Coffee",
    rating: 5,
    text: "The speed was incredible. We went from no website to a fully functional site and 5 new google reviews in less than a week. Highly recommend for any local shop.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Sarah Jenkins",
    role: "Director, Coastal Realty",
    rating: 5,
    text: "The Local Automations package changed how we handle leads. I don't miss calls anymore because the system texts them back instantly. It's paid for itself ten times over.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "David Chen",
    role: "Manager, TechFix Pensacola",
    rating: 5,
    text: "Being part of the directory gave us an immediate boost in local SEO. We're finally showing up on the first page for our keywords. The team is professional and responsive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-x-hidden">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 text-blue-500">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Digital Duo Studio</h2>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-6 lg:gap-9">
              <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#offers">Offers</a>
              <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#directory">Directory</a>
              <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#process">Process</a>
              <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#testimonials">Testimonials</a>
            </div>
            <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold transition-colors">
              Contact Us
            </button>
          </div>
          
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative px-4 py-12 md:py-20 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0">
                  <Zap className="w-4 h-4" />
                  Pensacola's Fastest Agency
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                  Modern Web & <span className="text-blue-500">Automations</span> for Pensacola Businesses
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Launch your site in days, not months. Automate your growth and dominate the local market with our streamlined digital solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#offers" className="flex items-center justify-center rounded-lg h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-bold shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">
                  View Our Offers
                </a>
                <a href="#process" className="flex items-center justify-center rounded-lg h-12 px-8 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-base font-bold transition-colors">
                  How It Works
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-square max-h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                alt="Modern office workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Offers Header */}
        <section className="px-4 py-8 bg-slate-50 dark:bg-slate-950" id="offers">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight">Our Core Offers</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Simple, transparent pricing for productized services that get results.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-4 pb-20 pt-8 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OFFERS.map((offer, idx) => {
                const IconComponent = offer.icon;
                return (
                  <div
                    key={offer.id}
                    className={`flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${
                      offer.featured ? 'border-2 border-blue-500 lg:-translate-y-4' : 'border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <IconComponent className="w-20 h-20 text-blue-500" />
                    </div>
                    
                    <div className="flex flex-col gap-1 z-10">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-lg font-bold ${offer.featured ? 'text-blue-500' : ''}`}>
                          {offer.name}
                        </h3>
                        <span className={`${offer.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
                          {offer.badge}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-4xl font-black tracking-tight">
                          ${offer.price}
                        </span>
                        <span className="text-slate-500 font-bold">{offer.period}</span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                        {offer.description}
                      </p>
                    </div>

                    <hr className="border-slate-100 dark:border-slate-700 my-2" />

                    <div className="flex flex-col gap-3 flex-1 z-10">
                      {offer.features.map((feature, i) => (
                        <div key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <Check className="w-5 h-5 text-blue-500 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button className={`mt-6 w-full py-3 rounded-lg font-bold transition-colors z-10 ${offer.buttonStyle}`}>
                      {offer.buttonText}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Directory Feature Section */}
        <section className="px-4 py-16 md:py-24 bg-white dark:bg-slate-900 overflow-hidden" id="directory">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="flex flex-col gap-8 lg:w-1/2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-blue-500 font-bold">
                    <Map className="w-5 h-5" />
                    <span>Local Growth Engine</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black leading-tight">
                    The Pensacola Directory Integration
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    More than just a website. Gain immediate visibility through our exclusive Pensacola Community Directory. We drive local traffic directly to your new digital storefront from day one.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mb-2">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold">Immediate Visibility</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Get in front of local customers instantly through our established network.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mb-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold">Local SEO Boost</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Enhance your rankings with a high-quality backlink from a trusted local hub.
                    </p>
                  </div>
                </div>

                <Link
                  href="/demo-pages"
                  className="w-fit flex items-center justify-center rounded-lg h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors"
                >
                  Explore The Directory
                </Link>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <div className="w-full aspect-square bg-cover bg-center">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                      alt="Map of Pensacola"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center text-white shrink-0">
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold">New Listing</p>
                      <p className="font-bold">Your Business Name</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Check className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 py-16 md:py-24 bg-slate-50 dark:bg-slate-950" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">The 3-Step Playbook</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                Our standardized delivery process ensures quality and speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-10 border-t-2 border-dashed border-slate-300 dark:border-slate-600"></div>

              {[
                { icon: Phone, title: "Strategy Call", description: "We define your goals, target audience, and key offer in a focused 30-minute session." },
                { icon: Wrench, title: "Rapid Build", description: "Our team builds your site and sets up automations within 5 business days." },
                { icon: Rocket, title: "Growth Launch", description: "We launch your site, list you in the directory, and activate your review engine." }
              ].map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-800 shadow-lg flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <IconComponent className="w-10 h-10" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xs">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-16 md:py-24 bg-white dark:bg-slate-900" id="testimonials">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold">Trusted by Pensacola Locals</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Join dozens of local businesses growing with Digital Duo.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 bg-blue-500 text-white">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              Stop losing customers to outdated tech. Get a modern site and automated growth engine today.
            </p>
            <button className="mt-4 px-8 py-4 bg-white text-blue-500 text-lg font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-xl">
              Get Your Free Strategy Call
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-lg">Digital Duo Studio</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Helping Pensacola businesses grow through modern web design, automation, and community connection.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-500">
                <li><a className="hover:text-blue-500 transition-colors" href="#">Web Design</a></li>
                <li><a className="hover:text-blue-500 transition-colors" href="#">Local Automations</a></li>
                <li><a className="hover:text-blue-500 transition-colors" href="#">Directory Listing</a></li>
                <li><a className="hover:text-blue-500 transition-colors" href="#">SEO Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-500">
                <li><a className="hover:text-blue-500 transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-blue-500 transition-colors" href="#">Process</a></li>
                <li><a className="hover:text-blue-500 transition-colors" href="#">Careers</a></li>
                <li><a className="hover:text-blue-500 transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 014.15 2.525c.636-.247 1.363-.416 2.427-.465C7.673 2.013 8.044 2 10.328 2h1.988zm-.952 1.802h-1.034c-2.266 0-2.548.009-3.44.049-.864.04-1.332.186-1.644.31a2.75 2.75 0 00-1.02.663 2.75 2.75 0 00-.663 1.02c-.124.312-.27.78-.31 1.644-.04.892-.049 1.174-.049 3.44v1.034c0 2.266.009 2.548.049 3.44.04.864.186 1.332.31 1.644.145.372.337.67.663 1.02.35.326.648.518 1.02.663.312.124.78.27 1.644.31.892.04 1.174.049 3.44.049h1.034c2.266 0 2.548-.009 3.44-.049.864-.04 1.332-.186 1.644-.31a2.75 2.75 0 001.02-.663 2.75 2.75 0 00.663-1.02c.124-.312.27-.78.31-1.644.04-.892.049-1.174.049-3.44v-1.034c0-2.266-.009-2.548-.049-3.44-.04-.864-.186-1.332-.31-1.644a2.75 2.75 0 00-.663-1.02 2.75 2.75 0 00-1.02-.663c-.312-.124-.78-.27-1.644-.31-.892-.04-1.174-.049-3.44-.049zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
                <a className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 Digital Duo Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-blue-500" href="#">Privacy Policy</a>
              <a className="hover:text-blue-500" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
