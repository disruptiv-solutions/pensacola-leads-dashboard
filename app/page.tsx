"use client";

import Link from "next/link";

const businesses = [
  {
    id: "gazmir-loshi",
    name: "Gazmir Loshi V",
    type: "Agency Hub",
    priority: "High",
    description: "Regional Infrastructure & Handyman Network. High-velocity maintenance.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "southeast-air",
    name: "Southeast Air Shuttle",
    type: "Air Charter",
    priority: "High",
    description: "Premium FAA-approved Part-135 operation. Elite private travel.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "miris-treats",
    name: "Miri's Simply Sweet Treats",
    type: "Food & Treats",
    priority: "High",
    description: "Viral Garlic Parmesan Spicy Bowls & handcrafted candied fruit.",
    image: "/mini-treats/mini_treats_assortment.png"
  },
  {
    id: "tattoos-by-shanna",
    name: "Tattoos by Shanna",
    type: "Artist",
    priority: "High",
    description: "Licensed Pace artist. High-engagement portfolio on social.",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "three-goats",
    name: "3 Goats Plumbing & Gas",
    type: "Service",
    priority: "High",
    description: "24/7 expert emergency plumbing and gas license holders.",
    image: "https://images.unsplash.com/photo-1581244276891-8bb499f07dad?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "ready-air",
    name: "Ready Air LLC",
    type: "HVAC",
    priority: "High",
    description: "Modern HVAC solutions without an independent digital domain.",
    image: "https://images.unsplash.com/photo-1599933023503-a447372d8544?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "jerome-ervin",
    name: "Jerome Ervin Fitness",
    type: "Wellness",
    priority: "High",
    description: "Personal weight loss & glute growth specialist in Pcola.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden relative">
      {/* Background Polish */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-950/20 via-black to-pink-950/10"></div>

      <div className="max-w-[1600px] mx-auto px-8 py-20 relative antialiased uppercase">
        {/* Editorial Header */}
        <header className="mb-32 space-y-12 flex flex-col items-center text-center italic">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black tracking-[0.5em] opacity-30">
             <span>PENSACOLA.VOL.01</span>
             <span>•</span>
             <span>BD_CORP_2026</span>
             <span>•</span>
             <span>UNFILTERED_LEADS</span>
          </div>
          
          <h1 className="text-8xl md:text-[15rem] font-black leading-[0.75] tracking-tighter transition-all hover:tracking-tight cursor-default select-none">
            THE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-pink-500 animate-gradient-x">LEADS</span>
          </h1>

          <div className="max-w-2xl text-lg font-bold tracking-[0.1em] leading-tight opacity-40 text-center uppercase">
            Brutalist Market Expansion. Converting the offline giants of Pensacola into digital dominators.
          </div>
        </header>

        {/* Lead Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-48 md:gap-x-12 relative z-10">
          {businesses.map((biz, idx) => (
            <div
              key={biz.id}
              className={`group relative flex flex-col cursor-crosshair transition-transform duration-1000 hover:scale-[1.01] ${
                idx % 3 === 0 ? "md:col-span-8" : "md:col-span-4"
              } ${idx % 2 === 1 ? "md:mt-32" : ""} ${idx === 5 ? "md:mt-0" : ""}`}
            >
              {/* Index Protocol */}
              <div className="absolute -top-16 -left-8 text-[12rem] font-black opacity-[0.03] group-hover:opacity-10 transition-opacity z-0 pointer-events-none italic leading-none">
                0{idx + 1}
              </div>

              {/* Media Container */}
              <Link
                href={`/demos/${biz.id}`}
                className="relative aspect-[16/9] w-full overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-700 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
              >
                 <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                 <img 
                    src={biz.image} 
                    alt={biz.name} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] ease-out scale-110 group-hover:scale-100" 
                 />
                 
                 {/* Visual HUD */}
                 <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1">
                    <div className="bg-white text-black px-3 py-1 text-[9px] font-black tracking-widest leading-none">
                      {biz.priority}_PRIORITY
                    </div>
                 </div>
              </Link>

              {/* Branding Section */}
              <div className="mt-12 space-y-6 text-left relative z-20">
                <Link href={`/demos/${biz.id}`} className="space-y-2 block group/title">
                    <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 opacity-80">{biz.type}</span>
                    <h3 className="text-4xl md:text-8xl font-black italic tracking-tighter leading-none group-hover/title:pl-4 transition-all duration-500 break-words">
                    {biz.name}
                    </h3>
                </Link>
                
                <p className="text-lg font-bold opacity-30 leading-tight tracking-tight italic normal-case max-w-md">
                  {biz.description}
                </p>
                
                <div className="pt-8">
                    <Link
                      href={`/demos/${biz.id}`}
                      className="inline-flex items-center gap-6 group/btn py-1"
                    >
                      <span className="text-white font-black text-sm tracking-[0.3em] group-hover/btn:tracking-[0.5em] transition-all">EXECUTE_DEMO</span>
                      <div className="h-[2px] w-12 bg-white/20 group-hover/btn:w-24 group-hover/btn:bg-blue-500 transition-all"></div>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Footer */}
        <div className="mt-80 border-t border-white/5 pt-20 flex flex-col md:flex-row justify-between items-start gap-12 font-black italic tracking-tighter text-4xl opacity-10 hover:opacity-100 transition-opacity pb-20">
            <div className="max-w-xl leading-none uppercase">
                Pensacola_Sector<br/>
                <span className="text-blue-500">Digital_Correction.</span>
            </div>
            <div className="text-right uppercase text-sm tracking-[0.5em]">
                CLAWDELL_SYSTEMS_2026<br/>
                AUTHORIZED_USER:IAN_MC
            </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </main>
  );
}
