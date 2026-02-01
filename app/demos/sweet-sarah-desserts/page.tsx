"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight, 
  Heart,
  Sparkles,
  Award,
  Calendar,
  ShoppingCart,
  X,
  Check,
  Cake,
  Gift,
  Baby,
  GraduationCap,
  Users,
  DollarSign
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const TIFFANY_BLUE = "#81D8D0";
const BLUSH_PINK = "#FFB6C1";
const VANILLA_CREAM = "#FFF8DC";

const CAKE_SIZES = [
  { 
    id: "small-tall", 
    name: "Small & Tall", 
    servings: "8-12", 
    basePrice: 35, 
    description: "Perfect for intimate celebrations",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "standard", 
    name: "Standard", 
    servings: "15-20", 
    basePrice: 55, 
    description: "Our most popular size",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "multi-tier", 
    name: "Multi-Tier", 
    servings: "40+", 
    basePrice: 125, 
    description: "Statement piece for grand events",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800"
  },
];

const CAKE_FLAVORS = [
  { id: "vanilla", name: "Vanilla", color: "#FFF8DC" },
  { id: "chocolate", name: "Chocolate", color: "#3E2723" },
  { id: "red-velvet", name: "Red Velvet", color: "#8B0000" },
  { id: "lemon", name: "Lemon", color: "#FFF44F" },
  { id: "strawberry", name: "Strawberry", color: "#FFB6C1" },
  { id: "marble", name: "Marble", color: "#8B7355" },
];

const FROSTING_FLAVORS = [
  { id: "vanilla-buttercream", name: "Vanilla Buttercream" },
  { id: "chocolate-buttercream", name: "Chocolate Buttercream" },
  { id: "cream-cheese", name: "Cream Cheese" },
  { id: "strawberry-buttercream", name: "Strawberry Buttercream" },
];

const FILLINGS = [
  { id: "none", name: "No Filling", price: 0 },
  { id: "strawberry", name: "Strawberry", price: 5 },
  { id: "raspberry", name: "Raspberry", price: 5 },
  { id: "chocolate-ganache", name: "Chocolate Ganache", price: 8 },
  { id: "lemon-curd", name: "Lemon Curd", price: 8 },
];

const OCCASIONS = [
  { 
    id: "birthday", 
    name: "Birthday", 
    icon: Cake, 
    color: "#FFB6C1",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "wedding", 
    name: "Wedding", 
    icon: Heart, 
    color: "#FFF8DC",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "baby-shower", 
    name: "Baby Shower", 
    icon: Baby, 
    color: "#ADD8E6",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "graduation", 
    name: "Graduation", 
    icon: GraduationCap, 
    color: "#FFD700",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800"
  },
];

const SIGNATURE_COLLECTION = [
  {
    name: "Classic Elegance",
    description: "White buttercream with fresh flowers",
    price: 65,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Chocolate Dream",
    description: "Rich chocolate with chocolate ganache drip",
    price: 70,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Rainbow Delight",
    description: "Colorful layers with vanilla buttercream",
    price: 60,
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=800"
  },
];

// --- Components ---

const FlashSaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 30 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FFB6C1] to-[#81D8D0] border-b-4 border-white shadow-2xl"
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
          <Sparkles className="w-6 h-6 text-white" />
          <div className="text-white font-black uppercase tracking-tight">
            <div className="text-lg">Flash Sale: Small & Tall Cakes $35!</div>
            <div className="text-xs font-bold opacity-90">Ends Tonight at 10PM</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white font-black text-lg">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <button className="bg-white text-[#FFB6C1] px-6 py-2 font-black uppercase text-sm hover:bg-[#FFF8DC] transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FlavorBuilder = () => {
  const [selectedSize, setSelectedSize] = useState(CAKE_SIZES[0]);
  const [selectedFlavor, setSelectedFlavor] = useState(CAKE_FLAVORS[0]);
  const [selectedFrosting, setSelectedFrosting] = useState(FROSTING_FLAVORS[0]);
  const [selectedFilling, setSelectedFilling] = useState(FILLINGS[0]);

  const totalPrice = selectedSize.basePrice + selectedFilling.price;

  return (
    <div className="bg-white border-4 border-[#81D8D0] p-8 shadow-[12px_12px_0px_rgba(129,216,208,0.3)]">
      <div className="space-y-2 mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tight">Build Your Cake</h3>
        <p className="text-sm font-bold text-slate-500 uppercase">Customize Every Detail</p>
      </div>

      <div className="space-y-8">
        {/* Size Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-600">Choose Size</label>
          <div className="grid md:grid-cols-3 gap-4">
            {CAKE_SIZES.map(size => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size)}
                className={cn(
                  "p-4 border-2 transition-all text-left space-y-2",
                  selectedSize.id === size.id
                    ? "border-[#81D8D0] bg-[#81D8D0]/10"
                    : "border-slate-300 bg-slate-50 hover:border-slate-400"
                )}
              >
                <div className="text-sm font-black uppercase">{size.name}</div>
                <div className="text-xs text-slate-500">{size.servings} servings</div>
                <div className="text-lg font-black text-[#FFB6C1]">${size.basePrice}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Flavor Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-600">Cake Flavor</label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {CAKE_FLAVORS.map(flavor => (
              <button
                key={flavor.id}
                onClick={() => setSelectedFlavor(flavor)}
                className={cn(
                  "p-3 border-2 transition-all text-center space-y-2",
                  selectedFlavor.id === flavor.id
                    ? "border-[#81D8D0] bg-[#81D8D0]/10"
                    : "border-slate-300 bg-slate-50 hover:border-slate-400"
                )}
              >
                <div className="w-8 h-8 mx-auto rounded-full border-2 border-slate-300" style={{ backgroundColor: flavor.color }} />
                <div className="text-[10px] font-bold uppercase">{flavor.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Frosting Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-600">Frosting</label>
          <div className="grid sm:grid-cols-2 gap-2">
            {FROSTING_FLAVORS.map(frosting => (
              <button
                key={frosting.id}
                onClick={() => setSelectedFrosting(frosting)}
                className={cn(
                  "p-3 border-2 transition-all text-left",
                  selectedFrosting.id === frosting.id
                    ? "border-[#81D8D0] bg-[#81D8D0]/10"
                    : "border-slate-300 bg-slate-50 hover:border-slate-400"
                )}
              >
                <span className="text-sm font-bold">{frosting.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filling Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase text-slate-600">Optional Filling</label>
          <div className="grid sm:grid-cols-2 gap-2">
            {FILLINGS.map(filling => (
              <button
                key={filling.id}
                onClick={() => setSelectedFilling(filling)}
                className={cn(
                  "p-3 border-2 transition-all flex items-center justify-between",
                  selectedFilling.id === filling.id
                    ? "border-[#81D8D0] bg-[#81D8D0]/10"
                    : "border-slate-300 bg-slate-50 hover:border-slate-400"
                )}
              >
                <span className="text-sm font-bold">{filling.name}</span>
                {filling.price > 0 && <span className="text-xs text-slate-500">+${filling.price}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="pt-6 border-t-2 border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold uppercase text-slate-600">Your Total</span>
            <span className="text-4xl font-black text-[#FFB6C1]">${totalPrice}</span>
          </div>
          <div className="text-xs text-slate-500 font-bold">
            {selectedSize.name} • {selectedFlavor.name} • {selectedFrosting.name}
            {selectedFilling.price > 0 && ` • ${selectedFilling.name} Filling`}
          </div>
        </div>
      </div>
    </div>
  );
};

const OccasionCard = ({ occasion }: { occasion: typeof OCCASIONS[0] }) => {
  const IconComponent = occasion.icon;
  
  return (
    <div className="group relative overflow-hidden border-4 border-[#FFB6C1] shadow-[8px_8px_0px_rgba(255,182,193,0.3)] hover:shadow-[12px_12px_0px_rgba(255,182,193,0.4)] transition-all">
      <div className="aspect-square overflow-hidden">
        <img 
          src={occasion.image} 
          alt={occasion.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 bg-white space-y-3">
        <div className="flex items-center gap-3">
          <IconComponent className="w-6 h-6" style={{ color: occasion.color }} />
          <h4 className="text-xl font-black uppercase tracking-tight">{occasion.name}</h4>
        </div>
        <button className="w-full py-3 bg-[#81D8D0] text-white font-black uppercase text-sm hover:bg-[#FFB6C1] transition-colors">
          Browse Designs
        </button>
      </div>
    </div>
  );
};

const SignatureCard = ({ cake }: { cake: typeof SIGNATURE_COLLECTION[0] }) => (
  <div className="bg-white border-4 border-[#FFB6C1] overflow-hidden shadow-[8px_8px_0px_rgba(255,182,193,0.2)]">
    <div className="aspect-square overflow-hidden">
      <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 space-y-3">
      <h4 className="text-xl font-black uppercase tracking-tight">{cake.name}</h4>
      <p className="text-sm text-slate-600 font-bold">{cake.description}</p>
      <div className="flex items-center justify-between pt-3 border-t-2 border-slate-200">
        <span className="text-2xl font-black text-[#81D8D0]">${cake.price}</span>
        <button className="px-4 py-2 bg-[#FFB6C1] text-white font-black uppercase text-xs hover:bg-[#81D8D0] transition-colors">
          Order This
        </button>
      </div>
    </div>
  </div>
);

export default function SweetSarahDesserts() {
  return (
    <div className="min-h-screen bg-[#FFF8DC] text-slate-900 font-sans selection:bg-[#81D8D0] selection:text-white overflow-x-hidden">
      <FlashSaleBanner />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful cake" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFB6C1] via-[#FFB6C1]/70 to-transparent" />

        {/* Sparkle Effect */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle, #81D8D0 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-white text-[#FFB6C1] font-black text-sm uppercase tracking-tighter border-4 border-white shadow-2xl">
              <Award className="w-6 h-6" />
              100% RECOMMENDED • 61 REVIEWS
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white" style={{
              textShadow: '4px 4px 0px rgba(129,216,208,0.5)'
            }}>
              SWEET<br />
              <span className="text-[#81D8D0]">SARAH</span>
            </h1>
            <p className="max-w-3xl mx-auto text-white text-xl md:text-2xl font-bold leading-relaxed">
              Made-to-order desserts & treats for everyday cravings<br />
              and special occasions.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-[#81D8D0] text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-[#FFB6C1] transition-colors flex items-center gap-4 group border-4 border-white shadow-2xl">
              START YOUR ORDER <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-6 text-sm font-black uppercase tracking-widest text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Cantonment, FL</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(850) 982-5993</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Builder Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#81D8D0] uppercase tracking-widest">Custom Creations</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Design Your Dream Cake</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <FlavorBuilder />
        </div>
      </section>

      {/* Signature Collection */}
      <section className="bg-white py-24 px-8 border-y-4 border-[#FFB6C1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs font-black text-[#FFB6C1] uppercase tracking-widest">Sarah's Favorites</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Signature Collection</h2>
            <p className="text-slate-600 font-bold text-lg max-w-2xl mx-auto">
              Our most popular designs, ready to order with one click
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SIGNATURE_COLLECTION.map((cake, i) => (
              <SignatureCard key={i} cake={cake} />
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#81D8D0] uppercase tracking-widest">Every Celebration</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Shop By Occasion</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OCCASIONS.map((occasion, i) => (
            <OccasionCard key={i} occasion={occasion} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#81D8D0] text-white py-24 px-8 border-y-4 border-[#FFB6C1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Your Cake", description: "Select size, flavors, and design" },
              { step: "2", title: "Customize Details", description: "Add personalization and special requests" },
              { step: "3", title: "Select Pickup Date", description: "Choose from available dates" },
              { step: "4", title: "Pay & Confirm", description: "Venmo, PayPal, CashApp, or Card" },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white text-[#81D8D0] rounded-full flex items-center justify-center text-3xl font-black">
                  {item.step}
                </div>
                <h4 className="text-xl font-black uppercase">{item.title}</h4>
                <p className="text-sm font-bold text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-black text-[#FFB6C1] uppercase tracking-widest">Customer Love</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">100% Recommended</h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#FFD700] text-[#FFD700]" />
            ))}
            <span className="ml-2 text-2xl font-black text-slate-600">61 Reviews</span>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FFB6C1] border-t-4 border-[#81D8D0] p-4">
        <a href="tel:8509825993" className="w-full py-4 bg-white text-[#FFB6C1] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-[#81D8D0] hover:text-white transition-colors">
          <Phone className="w-5 h-5" />
          CALL TO ORDER
        </a>
      </div>

      <footer className="bg-[#FFB6C1] text-white border-t-4 border-[#81D8D0] py-24 px-8 pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-4xl font-black tracking-tighter uppercase">
              SWEET<br />
              <span className="text-[#81D8D0]">SARAH</span>
            </div>
            <p className="text-white/90 font-bold text-sm max-w-xs leading-relaxed">
              Made-to-order desserts for every occasion. 
              Cantonment, FL • 100% Recommended
            </p>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-bold">(850) 982-5993</span>
            </div>
          </div>
          <div className="text-right space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#81D8D0]">Custom Cakes • Cupcakes • Treats</div>
            <div className="text-sm font-bold text-white/70 uppercase">
              © 2026 SWEET_SARAH_DESSERTS<br />
              CANTONMENT • FLORIDA
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
