"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Coffee, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight, 
  Plus,
  Minus,
  Heart,
  Sparkles,
  Award,
  Users,
  Calendar,
  ShoppingBag,
  X,
  Droplets,
  Grape,
  Cherry,
  Apple,
  Citrus
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const UBE_PURPLE = "#8B7BA8";
const MATCHA_GREEN = "#88B04B";
const MANGO_ORANGE = "#FF9F1C";
const MILK_TEA_BEIGE = "#F5E6D3";

const DRINK_BASES = [
  { id: "milk-tea", name: "Milk Tea", price: 5.50, icon: Droplets },
  { id: "fruit-tea", name: "Fruit Tea", price: 5.00, icon: Cherry },
  { id: "coffee", name: "Coffee", price: 4.50, icon: Coffee },
  { id: "refresher", name: "Refresher", price: 4.75, icon: Citrus },
];

const FLAVORS = [
  { id: "ube", name: "Ube", color: "#8B7BA8", icon: Grape },
  { id: "matcha", name: "Matcha", color: "#88B04B", icon: Coffee },
  { id: "mango", name: "Mango", color: "#FF9F1C", icon: Apple },
  { id: "taro", name: "Taro", color: "#A78BCA", icon: Grape },
  { id: "strawberry", name: "Strawberry", color: "#FF6B9D", icon: Cherry },
];

const TOPPINGS = [
  { id: "tapioca", name: "Tapioca Pearls", price: 0.75 },
  { id: "honey-popper", name: "Honey Poppers", price: 0.75 },
  { id: "lychee-jelly", name: "Lychee Jelly", price: 0.75 },
  { id: "coconut-jelly", name: "Coconut Jelly", price: 0.75 },
];

const SIGNATURE_FLIGHTS = [
  {
    name: "Tropical Paradise",
    drinks: ["Mango Milk Tea", "Passion Fruit Tea", "Coconut Latte", "Lychee Refresher"],
    price: 16.00,
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Classic Favorites",
    drinks: ["Ube Latte", "Matcha Latte", "Thai Tea", "Brown Sugar Milk Tea"],
    price: 16.00,
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=800"
  },
];

const MENU_ITEMS = [
  { 
    name: "Spam Musubi", 
    category: "Snacks", 
    price: 4.50, 
    description: "Grilled spam on rice, wrapped in nori",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Taiyaki", 
    category: "Snacks", 
    price: 5.00, 
    description: "Fish-shaped waffle filled with custard or red bean",
    image: "https://images.unsplash.com/photo-1625938145312-598e25f2f2c6?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Mango Coconut Snow Ice", 
    category: "Desserts", 
    price: 8.50, 
    description: "Shaved ice with mango, coconut jelly, lychee",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Ube Cake", 
    category: "Desserts", 
    price: 6.00, 
    description: "Purple yam cake with cream cheese frosting",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
  },
];

const WEEKEND_SPECIALS = [
  { name: "Lumpia", description: "Filipino spring rolls", available: "Saturdays" },
  { name: "Pancit", description: "Filipino stir-fried noodles", available: "Sundays" },
  { name: "BBQ Skewers", description: "Grilled meat skewers", available: "Weekends" },
];

const TESTIMONIALS = [
  {
    name: "Loralei Mason",
    rating: 5,
    text: "Full of seating, outstanding service! Jasmine was so sweet and ready to answer any questions. I got the strawberry green tea with kiwi popping and the nutella taiyaki, both were 10/10!",
    date: "2 weeks ago"
  },
  {
    name: "Grace Pardieck",
    rating: 5,
    text: "We had the very best time there today! We were offered several free samples and everything was delicious! We will definitely be making this a regularly stop for us!",
    date: "2 weeks ago"
  },
  {
    name: "Erin Bevis",
    rating: 5,
    text: "One of the best matchas ever!",
    date: "5 days ago"
  },
];

const CULTURAL_GLOSSARY = [
  { term: "Ube", pronunciation: "OO-beh", definition: "Purple yam from the Philippines, naturally sweet and vibrant", origin: "Philippines" },
  { term: "Pandan", pronunciation: "PAN-dan", definition: "Tropical leaf with vanilla-like aroma, used in Southeast Asian desserts", origin: "Southeast Asia" },
  { term: "Lychee", pronunciation: "LIE-chee", definition: "Sweet tropical fruit with floral notes and translucent flesh", origin: "China" },
  { term: "Matcha", pronunciation: "MAH-cha", definition: "Finely ground green tea powder, earthy and energizing", origin: "Japan" },
];

// --- Components ---

const SoftOpeningBadge = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="bg-gradient-to-br from-[#8B7BA8] to-[#A78BCA] border-4 border-white p-6 shadow-2xl backdrop-blur-sm max-w-[300px] relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors rounded"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3 mb-3 border-b-2 border-white/30 pb-3">
          <Sparkles className="w-8 h-8 text-white" />
          <div className="text-xs font-black text-white uppercase tracking-widest">Soft Opening</div>
        </div>
        <p className="text-white text-sm font-bold leading-relaxed">
          Now Open Daily<br />
          10AM - 7PM
        </p>
        <div className="mt-3 text-[10px] text-white/80 font-bold uppercase">
          Asian-Owned • Guam-Inspired
        </div>
      </div>
    </motion.div>
  );
};

const DrinkBuilder = () => {
  const [selectedBase, setSelectedBase] = useState(DRINK_BASES[0]);
  const [selectedFlavor, setSelectedFlavor] = useState<typeof FLAVORS[0] | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const toggleTopping = (id: string) => {
    setSelectedToppings(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedBase.price + 
    (selectedFlavor ? 0.50 : 0) + 
    (selectedToppings.length * 0.75);

  return (
    <div className="bg-white border-4 border-[#8B7BA8] p-8 shadow-[12px_12px_0px_rgba(139,123,168,0.2)]">
      <div className="space-y-2 mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tight">Build Your Drink</h3>
        <p className="text-sm font-bold text-slate-500 uppercase">Customize Your Perfect Boba</p>
      </div>

      <div className="space-y-8">
        {/* Base Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-600">Choose Your Base</label>
          <div className="grid grid-cols-2 gap-3">
              {DRINK_BASES.map(base => {
                const IconComponent = base.icon;
                return (
                  <button
                    key={base.id}
                    onClick={() => setSelectedBase(base)}
                    className={cn(
                      "p-4 border-2 transition-all text-center space-y-2",
                      selectedBase.id === base.id
                        ? "border-[#8B7BA8] bg-[#8B7BA8]/10"
                        : "border-slate-300 bg-slate-50 hover:border-slate-400"
                    )}
                  >
                    <IconComponent className="w-8 h-8 mx-auto text-[#8B7BA8]" />
                    <div className="text-sm font-bold uppercase">{base.name}</div>
                    <div className="text-xs text-slate-500">${base.price.toFixed(2)}</div>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Flavor Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-600">Add Flavor (+$0.50)</label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {FLAVORS.map(flavor => {
              const IconComponent = flavor.icon;
              return (
                <button
                  key={flavor.id}
                  onClick={() => setSelectedFlavor(selectedFlavor?.id === flavor.id ? null : flavor)}
                  className={cn(
                    "p-3 border-2 transition-all text-center space-y-1",
                    selectedFlavor?.id === flavor.id
                      ? "border-[#8B7BA8] bg-[#8B7BA8]/10"
                      : "border-slate-300 bg-slate-50 hover:border-slate-400"
                  )}
                  style={{ borderColor: selectedFlavor?.id === flavor.id ? flavor.color : undefined }}
                >
                  <IconComponent className="w-6 h-6 mx-auto" style={{ color: flavor.color }} />
                  <div className="text-[10px] font-bold uppercase">{flavor.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Toppings Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-600">Add Toppings ($0.75 each)</label>
          <div className="space-y-2">
            {TOPPINGS.map(topping => (
              <button
                key={topping.id}
                onClick={() => toggleTopping(topping.id)}
                className={cn(
                  "w-full p-3 border-2 transition-all flex items-center justify-between",
                  selectedToppings.includes(topping.id)
                    ? "border-[#8B7BA8] bg-[#8B7BA8]/10"
                    : "border-slate-300 bg-slate-50 hover:border-slate-400"
                )}
              >
                <span className="text-sm font-bold">{topping.name}</span>
                <span className="text-xs text-slate-500">+${topping.price.toFixed(2)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="pt-6 border-t-2 border-slate-200">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold uppercase text-slate-600">Your Total</span>
            <span className="text-4xl font-black text-[#8B7BA8]">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
  <div className="bg-white border-4 border-[#88B04B] p-6 shadow-[8px_8px_0px_rgba(136,176,75,0.2)]">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FF9F1C] text-[#FF9F1C]" />
      ))}
    </div>
    <p className="text-slate-700 font-bold text-base leading-relaxed mb-4">"{testimonial.text}"</p>
    <div className="flex items-center justify-between border-t-2 border-slate-200 pt-3">
      <div className="font-black uppercase text-sm tracking-tight">{testimonial.name}</div>
      <div className="text-xs text-slate-400 font-bold">{testimonial.date}</div>
    </div>
  </div>
);

export default function AllAboutBoba() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-[#8B7BA8] selection:text-white overflow-x-hidden">
      <SoftOpeningBadge />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=2000" 
            alt="Boba drinks" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#8B7BA8] via-[#8B7BA8]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-white text-[#8B7BA8] font-black text-sm uppercase tracking-tighter border-4 border-white shadow-2xl">
              <Award className="w-6 h-6" />
              4.8 STARS • 19 REVIEWS
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white">
              ALL ABOUT<br />
              <span className="text-[#FF9F1C]">BOBA</span>
            </h1>
            <p className="max-w-3xl mx-auto text-white text-xl md:text-2xl font-bold leading-relaxed">
              Asian-inspired café bringing Guam flavors to Pensacola.<br />
              Boba • Coffee • Snacks • Culture
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-[#FF9F1C] text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-[#88B04B] transition-colors flex items-center gap-4 group border-4 border-white shadow-2xl">
              ORDER PICKUP <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-6 text-sm font-black uppercase tracking-widest text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>6429 N 9th Ave</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10AM - 7PM Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drink Builder Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#8B7BA8] uppercase tracking-widest">Interactive Menu</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Build Your Perfect Drink</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <DrinkBuilder />
        </div>
      </section>

      {/* Signature Flights */}
      <section className="bg-[#F5E6D3] py-24 px-8 border-y-4 border-[#8B7BA8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs font-black text-[#8B7BA8] uppercase tracking-widest">Try Before You Commit</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Boba Flights</h2>
            <p className="text-slate-600 font-bold text-lg max-w-2xl mx-auto">
              Sample 4 unique flavors in smaller portions. Perfect for exploring new tastes!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SIGNATURE_FLIGHTS.map((flight, i) => (
              <div key={i} className="bg-white border-4 border-[#88B04B] overflow-hidden shadow-[8px_8px_0px_rgba(136,176,75,0.2)]">
                <div className="aspect-video overflow-hidden">
                  <img src={flight.image} alt={flight.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight">{flight.name}</h3>
                  <ul className="space-y-2">
                    {flight.drinks.map((drink, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                        <div className="w-2 h-2 bg-[#88B04B] rounded-full" />
                        {drink}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-slate-200">
                    <span className="text-xs font-bold uppercase text-slate-500">Flight Price</span>
                    <span className="text-3xl font-black text-[#8B7BA8]">${flight.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Gallery */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#8B7BA8] uppercase tracking-widest">Snacks & Treats</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Our Menu</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, i) => (
            <div key={i} className="bg-white border-4 border-[#FF9F1C] overflow-hidden shadow-[8px_8px_0px_rgba(255,159,28,0.2)] group hover:shadow-[12px_12px_0px_rgba(255,159,28,0.3)] transition-all">
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 space-y-2">
                <div className="text-[10px] font-black text-[#FF9F1C] uppercase tracking-widest">{item.category}</div>
                <h4 className="text-lg font-black uppercase tracking-tight">{item.name}</h4>
                <p className="text-xs text-slate-600 font-bold">{item.description}</p>
                <div className="text-xl font-black text-[#8B7BA8]">${item.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural Glossary */}
      <section className="bg-[#8B7BA8] text-white py-24 px-8 border-y-4 border-[#FF9F1C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs font-black text-[#FF9F1C] uppercase tracking-widest">Learn With Us</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Flavor Glossary</h2>
            <p className="text-white/90 font-bold text-lg max-w-2xl mx-auto">
              Discover the unique ingredients that make our drinks special
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CULTURAL_GLOSSARY.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-black uppercase">{item.term}</h4>
                  <span className="text-sm font-bold text-[#FF9F1C]">{item.origin}</span>
                </div>
                <div className="text-sm font-bold text-white/70 italic">Pronunciation: {item.pronunciation}</div>
                <p className="text-base font-bold leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend Specials */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#88B04B] uppercase tracking-widest">Coming Soon</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Weekend Specials</h2>
          <p className="text-slate-600 font-bold text-lg max-w-2xl mx-auto">
            Full Filipino dishes available on weekends. Pre-order for parties & events!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {WEEKEND_SPECIALS.map((special, i) => (
            <div key={i} className="bg-[#F5E6D3] border-4 border-[#88B04B] p-8 text-center space-y-4">
              <Calendar className="w-12 h-12 text-[#88B04B] mx-auto" />
              <h4 className="text-2xl font-black uppercase tracking-tight">{special.name}</h4>
              <p className="text-sm font-bold text-slate-600">{special.description}</p>
              <div className="pt-4 border-t-2 border-[#88B04B]/30">
                <div className="text-xs font-black text-[#88B04B] uppercase tracking-widest">{special.available}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-100 py-24 px-8 border-y-4 border-[#8B7BA8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs font-black text-[#8B7BA8] uppercase tracking-widest">Customer Love</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">What People Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* From Guam to Pensacola */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#8B7BA8] uppercase tracking-widest">Our Story</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">From Guam to Pensacola</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white border-4 border-[#8B7BA8] p-8 space-y-6">
            <p className="text-lg font-bold leading-relaxed text-slate-700">
              "We grew up with boba on every corner in Guam. Spam musubi at every mom-and-pop shop. 
              Street vendors selling BBQ skewers. When we moved to Pensacola, we wanted to bring 
              that same cultural experience here."
            </p>
            <div className="text-sm font-black text-[#8B7BA8] uppercase">— Jasmine, Store Manager</div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { year: "2023", milestone: "Food Truck at Market of Pace" },
              { year: "2024", milestone: "Palafox Market Tent" },
              { year: "2024-2025", milestone: "Kiosk at The Garden" },
              { year: "2026", milestone: "Brick-and-Mortar Café" },
            ].map((step, i) => (
              <div key={i} className="bg-[#F5E6D3] border-2 border-[#8B7BA8] p-6 text-center space-y-2">
                <div className="text-3xl font-black text-[#8B7BA8]">{step.year}</div>
                <div className="text-xs font-bold uppercase text-slate-600">{step.milestone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Location */}
      <section className="bg-[#88B04B] text-white py-24 px-8 border-t-4 border-[#8B7BA8]">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Visit Us</h2>
            <p className="text-xl font-bold">We're in the Cordova area, ready to serve you!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <MapPin className="w-8 h-8 mx-auto" />
              <div className="text-sm font-black uppercase">Location</div>
              <div className="text-xs font-bold">6429 N 9th Ave<br />Pensacola, FL 32504</div>
            </div>
            <div className="space-y-2">
              <Clock className="w-8 h-8 mx-auto" />
              <div className="text-sm font-black uppercase">Hours</div>
              <div className="text-xs font-bold">Daily: 10AM - 7PM<br />(Soft Opening)</div>
            </div>
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto" />
              <div className="text-sm font-black uppercase">Contact</div>
              <div className="text-xs font-bold">(850) 291-7225</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#8B7BA8] border-t-4 border-[#FF9F1C] p-4">
        <a href="tel:8502917225" className="w-full py-4 bg-[#FF9F1C] text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-[#8B7BA8] transition-colors">
          <Phone className="w-5 h-5" />
          CALL TO ORDER
        </a>
      </div>

      <footer className="bg-[#8B7BA8] text-white border-t-4 border-[#FF9F1C] py-24 px-8 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-4xl font-black tracking-tighter uppercase">
              ALL ABOUT<br />
              <span className="text-[#FF9F1C]">BOBA</span>
            </div>
            <p className="text-white/70 font-bold text-sm max-w-xs leading-relaxed">
              Asian-inspired café bringing Guam culture to Pensacola. 
              Boba, coffee, snacks, and community.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF9F1C] text-[#FF9F1C]" />
              ))}
              <span className="ml-2 text-sm font-bold">4.8 Rating</span>
            </div>
          </div>
          <div className="text-right space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#FF9F1C]">Asian-Owned • Family-Run</div>
            <div className="text-sm font-bold text-white/50 uppercase">
              © 2026 ALL_ABOUT_BOBA_CAFÉ<br />
              PENSACOLA • CORDOVA_AREA
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
