"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React from "react";

const businessData = {
  "southeast-air": {
    name: "Southeast Air Shuttle",
    hero: "ELITE AVIATION.",
    subhero: "PNS-BASED PRIVATE CHARTER. OPERATING AT THE SPEED OF YOUR AMBITION.",
    features: ["FAA PART-135 CERTIFIED", "EXPERT PNS FLIGHT CREW", "0% WAITING. 100% ACCESS."],
    cta: "INITIATE_QUOTE",
    color: "from-blue-900 to-black",
    accent: "text-blue-500",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000"
  },
  "three-goats": {
    name: "3 Goats Plumbing & Gas",
    hero: "UNBREAKABLE FLOW.",
    subhero: "FL LICENSE #RF11067941. PLUMBING AND GAS SYSTEMS BUILT TO ENDURE.",
    features: ["EMERGENCY RESPONSE 24/7", "MASTER-GRADE GAS PIPING", "CERTIFIED PENSACOLA PROS"],
    cta: "REQUEST_DISPATCH",
    accent: "text-orange-500",
    color: "from-orange-950 to-black",
    image: "https://images.unsplash.com/photo-1581244276891-8bb499f07dad?auto=format&fit=crop&q=80&w=1000"
  },
  "ready-air": {
    name: "Ready Air LLC",
    hero: "CLIMATE CONTROL.",
    subhero: "PRECISION HVAC INSTALLATION AND MAINTENANCE FOR THE GULF COAST HEAT.",
    features: ["HIGH-EFFICIENCY INSTALLS", "INSTANT THERMAL AUDITS", "LOCAL RESIDENTIAL MASTERY"],
    cta: "STAY_COOL",
    accent: "text-cyan-400",
    color: "from-cyan-950 to-black",
    image: "https://images.unsplash.com/photo-1599933023503-a447372d8544?auto=format&fit=crop&q=80&w=1000"
  },
  "tattoos-by-shanna": {
    name: "Tattoos by Shanna",
    hero: "INK ETERNITY.",
    subhero: "THE ELITE FEMALE TATTOO COLLECTIVE IN PACE. ART WITHOUT COMPROMISE.",
    features: ["CUSTOM ILLUSTRATION", "LICENSED STERILE STUDIO", "AWARD-WINNING PORTFOLIO"],
    cta: "CLAIM_YOUR_SLOT",
    accent: "text-purple-500",
    color: "from-purple-950 to-black",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1000"
  },
  "jerome-ervin": {
    name: "Jerome Ervin Fitness",
    hero: "HUMAN OPTIMIZATION.",
    subhero: "LOCAL WELLNESS MASTER. FAT LOSS, STRENGTH, AND RADICAL TRANSFORMATION.",
    features: ["PERSONALIZED BIO-PLANS", "ELITE GLUTE DEVELOPMENT", "VIRTUAL + ON-SITE COACHING"],
    cta: "START_EVOLUTION",
    accent: "text-emerald-400",
    color: "from-emerald-950 to-black",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000"
  },
  "sweet-lou": {
    name: "Sweet Lou Laundry",
    hero: "CLEAN DISRUPTION.",
    subhero: "MOBILE WASH AND FOLD. OPERATIONAL EXCELLENCE FOR MILITARY AND SENIORS.",
    features: ["DOOR-TO-DOOR LOGISTICS", "RANK-GRADE PRECISION", "HYPOALLERGENIC PROTOCOLS"],
    cta: "SCHEDULE_PICKUP",
    accent: "text-zinc-300",
    color: "from-zinc-900 to-black",
    image: "https://images.unsplash.com/photo-1545173153-5ddf466b537c?auto=format&fit=crop&q=80&w=1000"
  },
  "miris-treats": {
    name: "Miri's Simply Sweet Treats",
    hero: "THE ART OF THE TREAT.",
    subhero: "A COUTURE CONFECTIONERY EXPERIENCE. HANDCRAFTED IN PENSACOLA BY TEEN ENTREPRENEUR A'MIRACA MIMS.",
    about: "Hi, I’m A’miraca Mims, the founder of Miri’s Simply Sweet Treats! I’ve loved baking since I was little, and in September 2024 I decided to turn that passion into a business. I’m now a teen entrepreneur and proud NRFSP Food Safety Manager, ESB Small Business & Entrepreneurship Certified & ServSafe Manager Certified, bringing creativity and care into every treat I make.",
    features: ["NRFSP CERTIFIED", "SMALL BUSINESS CERTIFIED", "SERVSAFE MANAGER"],
    cta: "Reserve Your Collection",
    accent: "text-rose-400",
    color: "from-[#FFF8F8] via-[#FFFDFB] to-white",
    textColor: "text-rose-950",
    isSoftTheme: true,
    image: "/unnamed.jpg",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/sweettreatsbymiri" },
      { platform: "Facebook", url: "https://www.facebook.com/share/1A6KYfkqj5/" },
      { platform: "TikTok", url: "https://bakesy.shop/b/www.tiktok.com/@sweettreatsbymiri" }
    ],
    extraImages: [
      "/mini-treats/mini_brownies.png",
      "/mini-treats/mini_macarons_display.png",
      "/mini-treats/mini_fruit_tarts.png"
    ],
    menu: [
      { category: "BEST SELLERS", items: ["Garlic Parmesean Alfredo Spicy Bowl ($12)", "Candied Grapes ($12)", "Regular Spicy Bowl ($10)", "Banana Pudding ($8)"] },
      { category: "SIGNATURE SWEETS", items: ["Strawberry Crunch ($3.50)", "Cookies & Cream ($3.50)", "Cookie Monster ($3.50)", "Cookie Brownies ($4)"] },
      { category: "COLLECTIONS", items: ["Cookie Brownie Box ($18)"] }
    ],
    policies: {
      notice: "3 to 5 days notice for large orders.",
      deposit: "50% deposit required for orders over $15.",
      payment: "Cash App & ApplePay accepted.",
      minimum: "$6 minimum order."
    }
  }
};

const ElegantSerif = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`font-serif tracking-tight ${className}`} style={{ fontFamily: "'Playfair Display', serif" }}>
    {children}
  </span>
);

export default function DemoPage() {
  const params = useParams();
  const id = params?.id as string;
  const biz = businessData[id as keyof typeof businessData] as any;

  if (!biz) {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 uppercase font-black italic">
            <h1 className="text-9xl text-white font-black italic tracking-tighter leading-none opacity-20">404</h1>
            <p className="text-4xl text-blue-500 mt-4 leading-none tracking-tighter italic">Protocol_Not_Found</p>
            <Link href="/" className="mt-12 text-white border border-white/20 px-12 py-4 hover:bg-white hover:text-black transition-all font-black tracking-widest text-xs">Return_to_Base</Link>
        </div>
    );
  }

  const isSoft = biz.isSoftTheme;

  return (
    <div className={`min-h-screen ${isSoft ? 'bg-[#FFFDFB] text-rose-950' : 'bg-black text-white'} font-sans selection:bg-rose-200 selection:text-rose-900 uppercase overflow-x-hidden relative`}>
      {/* Dynamic Background Noise */}
      <div className={`fixed inset-0 pointer-events-none ${isSoft ? 'opacity-[0.015]' : 'opacity-[0.03]'} bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50`}></div>

      {/* Atmospheric Glows for Soft Theme */}
      {isSoft && (
        <>
          <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-100/30 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
          <div className="fixed bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-rose-50/40 blur-[100px] rounded-full pointer-events-none"></div>
        </>
      )}

      {/* Editorial Navigation */}
      <nav className={`p-8 flex justify-between items-center border-b ${isSoft ? 'border-rose-100/50 bg-white/40' : 'border-white/5 bg-black/80'} backdrop-blur-3xl z-[200] sticky top-0 transition-all duration-500`}>
        <div className="flex flex-col text-left">
            <span className={`text-[9px] font-black tracking-[0.6em] opacity-30 leading-none mb-2 underline ${isSoft ? 'decoration-rose-300' : 'decoration-blue-500/40'}`}>EST_2026_SECTOR</span>
            <div className={`text-3xl md:text-4xl font-black italic tracking-tighter leading-none ${isSoft ? 'text-rose-900' : biz.accent}`}>
              {isSoft ? <ElegantSerif>{biz.name}</ElegantSerif> : biz.name}
            </div>
        </div>
        <div className={`hidden lg:flex gap-16 text-[9px] font-black tracking-[0.6em] opacity-30 ${isSoft ? 'text-rose-900' : 'text-white'}`}>
          <span className="hover:opacity-100 cursor-pointer transition-all hover:tracking-[0.8em] pb-1">{isSoft ? "Collections" : "COLLECTIONS"}</span>
          <span className="hover:opacity-100 cursor-pointer transition-all hover:tracking-[0.8em] pb-1">{isSoft ? "The Maker" : "THE MAKER"}</span>
          <span className={`hover:opacity-100 cursor-pointer transition-all hover:tracking-[0.8em] pb-1 ${isSoft ? 'text-rose-500' : 'text-white'} opacity-100`}>{isSoft ? "Inquiries" : "INQUIRIES"}</span>
        </div>
      </nav>

      {/* Radical Hero */}
      <header className={`relative w-full overflow-hidden ${isSoft ? 'bg-[#FFFDFB]' : `bg-gradient-to-b ${biz.color}`}`}>
        <div className="max-w-[1600px] mx-auto pt-12 sm:pt-32 pb-32 sm:pb-64 px-6 sm:px-12 flex flex-col xl:flex-row gap-12 sm:gap-24 items-center text-left relative">
             <div className="w-full xl:flex-1 space-y-12 sm:space-y-20 relative z-20">
                <div className="space-y-4 sm:space-y-6">
                    <div className={`text-[10px] sm:text-[11px] font-black tracking-[0.5em] sm:tracking-[1em] ${isSoft ? 'text-rose-400' : 'text-blue-500'} opacity-60 animate-in fade-in slide-in-from-left duration-1000 uppercase`}>
                      {isSoft ? "Couture Confectionery" : "COUTURE CONFECTIONERY"}
                    </div>
                    
                    {/* Responsive Hero Text */}
                    <div className="relative">
                      <h1 className={`text-5xl sm:text-8xl md:text-[10rem] xl:text-[13rem] font-black italic tracking-tight leading-[1.1] sm:leading-[0.75] ${isSoft ? 'text-rose-950' : 'text-white'} uppercase select-none transition-all duration-1000 animate-in zoom-in-95 duration-1000`}>
                          {biz.hero.split(' ').map((word: string, i: number) => (
                            <span key={i} className="block last:mb-0">
                              {isSoft ? <ElegantSerif className="normal-case font-medium">{word}</ElegantSerif> : word}
                            </span>
                          ))}
                      </h1>
                    </div>
                </div>
                
                <div className={`flex flex-col md:flex-row gap-8 sm:gap-16 items-start md:items-end border-l-2 ${isSoft ? 'border-rose-200' : 'border-white/10'} pl-6 sm:pl-16 ml-2 sm:ml-4`}>
                    <p className={`text-lg sm:text-xl md:text-4xl font-bold tracking-tight leading-snug sm:leading-[1] max-w-xl italic ${isSoft ? 'text-rose-900/70' : 'text-white/40'} italic`}>
                        {isSoft ? <ElegantSerif className="normal-case">{biz.subhero}</ElegantSerif> : biz.subhero}
                    </p>
                    <div className="flex flex-col gap-6 w-full md:w-auto pt-4 sm:pt-0">
                        <button className={`group relative px-12 sm:px-20 py-6 sm:py-10 overflow-hidden ${isSoft ? 'bg-rose-950 text-white rounded-full' : `${biz.accent.replace('text-', 'bg-')} text-black shadow-[20px_20px_0px_rgba(0,0,0,0.3)]`} font-black text-lg sm:text-xl tracking-[0.3em] transition-all hover:scale-105 active:scale-95 whitespace-nowrap`}>
                          <span className="relative z-10">{biz.cta}</span>
                          {isSoft && <div className="absolute inset-0 bg-rose-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>}
                        </button>
                    </div>
                </div>

                {/* About Section for Soft Theme */}
                {isSoft && biz.about && (
                  <div className="max-w-2xl pt-8 sm:pt-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                    <h3 className="text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.5em] text-rose-400 mb-4 sm:mb-6 uppercase">The Maker</h3>
                    <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-rose-900/60 italic">
                      <ElegantSerif className="normal-case">{biz.about}</ElegantSerif>
                    </p>
                    {biz.socials && (
                      <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-10">
                        {biz.socials.map((social: any) => (
                          <a 
                            key={social.platform} 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-rose-950 hover:text-rose-500 transition-colors border-b border-rose-200 pb-1"
                          >
                            {social.platform.toUpperCase()}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
             </div>

             {/* Hero Image - Responsive Container */}
             <div className="w-full xl:flex-[1.5] relative perspective-1000 mt-12 xl:mt-0 xl:translate-x-12">
                <div className={`aspect-[4/5] sm:aspect-[1/1.2] relative overflow-hidden ${isSoft ? 'border-none rounded-[40px] sm:rounded-[120px]' : 'border border-white/10 rounded-none'} shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] sm:shadow-[0_100px_200px_-40px_rgba(0,0,0,0.5)] group transition-all duration-1000 hover:rotate-y-12`}>
                    <img src={biz.image} className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110" alt={biz.name} />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${isSoft ? 'from-rose-200/20 via-transparent' : 'from-black/80'} to-transparent`}></div>
                    
                    {/* Floating Label */}
                    <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 right-8 sm:right-16 flex justify-between items-end">
                      <div className="text-left space-y-1 sm:space-y-2">
                          <span className={`text-[8px] sm:text-[10px] font-black tracking-[0.4em] sm:tracking-[0.6em] opacity-60 ${isSoft ? 'text-rose-900' : 'text-white'} leading-none`}>{isSoft ? "Asset 001 Master" : "ASSET 001 MASTER"}</span>
                          <h4 className={`text-3xl sm:text-5xl font-black italic tracking-tighter ${isSoft ? 'text-rose-950' : 'text-white'} lowercase leading-none select-none`}>{biz.name.split(' ')[0]}</h4>
                      </div>
                      {isSoft && <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border border-rose-900/20 flex items-center justify-center animate-spin-slow">
                        <span className="text-[6px] sm:text-[8px] font-black text-rose-900/40 tracking-widest">Limited Edition </span>
                      </div>}
                    </div>
                </div>
             </div>
        </div>
      </header>

      {/* Gallery Protocols (Level 10 Luxury) */}
      {biz.extraImages && (
        <section className={`${isSoft ? 'bg-[#FFFDFB]' : 'bg-zinc-950'} py-48 px-12 relative`}>
            <div className={`flex justify-between items-end mb-24 opacity-40 ${isSoft ? 'text-rose-900' : 'text-white'}`}>
                <div className="space-y-2">
                  <span className="text-[10px] font-black tracking-[0.8em]">{isSoft ? "Curated Visuals" : "CURATED_VISUALS"}</span>
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter">{isSoft ? "The Vault" : "THE_VAULT"}</h2>
                </div>
                <div className={`h-px flex-grow mx-20 ${isSoft ? 'bg-rose-200' : 'bg-white/10'}`}></div>
                <span className="text-[10px] font-mono">{isSoft ? "PNS Gulf Coast" : "PNS_GULF_COAST_REF"}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1600px] mx-auto">
                {biz.extraImages.map((imgUrl: string, i: number) => (
                    <div key={i} className={`group relative aspect-[4/5] overflow-hidden ${isSoft ? 'rounded-[60px]' : 'rounded-none border border-white/5'} transition-all duration-1000 hover:-translate-y-4`}>
                        <img src={imgUrl} className={`w-full h-full object-cover ${isSoft ? 'scale-105' : 'grayscale opacity-40'} group-hover:scale-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000`} alt={`Visual prot ${i}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className={`absolute bottom-10 left-10 right-10 flex justify-between items-center translate-y-8 group-hover:translate-y-0 transition-transform duration-700`}>
                          <span className="text-white font-black italic tracking-tighter text-2xl uppercase">COLLECTION_0{i + 1}</span>
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-950 font-black">→</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      )}

      {/* Manifest Data (Ultra-Premium Editorial) */}
      {biz.menu && (
          <section className={`${isSoft ? 'bg-[#FFFDFB]' : 'bg-white'} text-black py-64 px-12 relative text-left overflow-hidden`}>
              {/* Background Text Decal */}
              {isSoft && <div className="absolute top-0 right-0 text-[30rem] font-black text-rose-100/20 italic leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4">MIRI</div>}
              
              <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40 text-left items-start relative z-10">
                  <div className="lg:col-span-5 space-y-16 text-left sticky top-40">
                      <div className="space-y-6">
                        <div className={`text-[12px] font-black tracking-[1em] ${isSoft ? 'text-rose-400' : 'text-blue-600'} opacity-80 leading-none uppercase`}>CORE_INVENTORY</div>
                        <h2 className={`text-8xl md:text-[14rem] font-black italic tracking-[calc(-0.08em)] leading-[0.6] uppercase ${isSoft ? 'text-rose-950' : 'text-black'} break-words`}>
                            {isSoft ? <ElegantSerif className="normal-case font-medium">The<br/><span className="text-rose-500 italic">Manifest.</span></ElegantSerif> : <>THE<br/><span className={biz.accent}>MANIFEST.</span></>}
                        </h2>
                      </div>
                      <div className={`max-w-[360px] text-lg font-bold opacity-50 leading-tight uppercase tracking-tight italic ${isSoft ? 'text-rose-900' : 'text-black'}`}>
                        {isSoft ? <ElegantSerif className="normal-case">A meticulously curated selection of handcrafted masterpieces. Verified for sensory excellence.</ElegantSerif> : "A meticulously curated selection of handcrafted masterpieces. Verified for sensory excellence."}
                      </div>

                      {/* Policies for Soft Theme */}
                      {isSoft && biz.policies && (
                        <div className="pt-20 space-y-12 animate-in fade-in slide-in-from-left duration-1000 delay-700">
                          <div className="space-y-4">
                            <h4 className="text-[10px] font-black tracking-[0.4em] text-rose-400 uppercase">Ordering Protocol</h4>
                            <p className="text-sm font-medium text-rose-900/60 leading-relaxed italic">
                              <ElegantSerif className="normal-case">{biz.policies.notice} {biz.policies.deposit}</ElegantSerif>
                            </p>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-[10px] font-black tracking-[0.4em] text-rose-400 uppercase">Minimums & Payment</h4>
                            <p className="text-sm font-medium text-rose-900/60 leading-relaxed italic">
                              <ElegantSerif className="normal-case">{biz.policies.minimum} {biz.policies.payment}</ElegantSerif>
                            </p>
                          </div>
                        </div>
                      )}
                  </div>
                  
                  <div className="lg:col-span-7 space-y-40 pt-20">
                    {biz.menu.map((cat: any) => (
                        <div key={cat.category} className="space-y-12 group/item text-left relative">
                            <div className="flex items-center gap-6">
                              <h3 className={`text-sm font-black tracking-[0.5em] opacity-40 uppercase italic ${isSoft ? 'text-rose-900' : 'text-black'}`}>
                                {isSoft ? <ElegantSerif className="normal-case tracking-[0.2em]">{cat.category}</ElegantSerif> : cat.category}
                              </h3>
                              <div className={`h-[2px] flex-grow ${isSoft ? 'bg-rose-100' : 'bg-black/5'}`}></div>
                            </div>
                            <ul className="space-y-12">
                                {cat.items.map((item: string) => (
                                    <li key={item} className={`group/row cursor-default ${isSoft ? 'text-rose-950' : 'text-black'} text-left`}>
                                        <div className="flex justify-between items-end gap-8">
                                          <div className={`text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.8] group-hover/row:pl-8 transition-all duration-700 ${isSoft ? 'group-hover/row:text-rose-500' : 'group-hover/row:text-blue-600'}`}>
                                            {isSoft ? <ElegantSerif className="normal-case font-light italic">{item}</ElegantSerif> : item}
                                          </div>
                                          <div className={`text-xs font-black tracking-widest opacity-20 group-hover/row:opacity-100 transition-opacity`}>{isSoft ? "Available" : "AVAILABLE"}</div>
                                        </div>
                                        <div className={`h-px w-full mt-6 ${isSoft ? 'bg-rose-100 group-hover/row:bg-rose-500' : 'bg-black/10 group-hover/row:bg-blue-500'} transition-all duration-700`}></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                  </div>
              </div>
          </section>
      )}

      {/* Final Call Protocol (Level 10) */}
      <section className={`${isSoft ? 'bg-[#FFFDFB]' : 'bg-black'} py-64 px-12 ${isSoft ? 'text-rose-950' : 'text-white'} relative overflow-hidden`}>
                {isSoft && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-rose-100/20 to-transparent"></div>}
                
                <div className="max-w-7xl mx-auto space-y-24 text-left relative z-10">
                    <div className={`flex items-center gap-6 sm:gap-12 ${isSoft ? 'opacity-60' : 'opacity-20'}`}>
                        <span className="text-[10px] sm:text-xs font-black tracking-[0.5em] sm:tracking-[1.5em] uppercase whitespace-nowrap">{isSoft ? "System Arch V2" : "SYSTEM ARCH V2"}</span>
                        <div className={`h-px flex-grow ${isSoft ? 'bg-rose-300' : 'bg-white'}`}></div>
                    </div>
                    
                    <h3 className={`text-5xl sm:text-8xl md:text-[15rem] font-black tracking-tight italic uppercase leading-[1.1] sm:leading-[0.65] ${isSoft ? 'text-rose-950' : 'text-white'} select-none`}>
                      {isSoft ? (
                        <div className="flex flex-col gap-2">
                          <ElegantSerif className="normal-case font-medium block">Refined for</ElegantSerif>
                          <span className="text-rose-500 underline decoration-rose-200 underline-offset-8 italic block">
                            <ElegantSerif className="normal-case">Pensacola.</ElegantSerif>
                          </span>
                        </div>
                      ) : (
                        <>Refined for <br/><span className="text-blue-500">Pensacola.</span></>
                      )}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 pt-20">
                        {biz.features.map((f: string, idx: number) => (
                            <div key={f} className={`space-y-8 group/f border-l-4 ${isSoft ? 'border-rose-100 hover:border-rose-500' : 'border-white/5 hover:border-blue-500'} pl-12 transition-all duration-700 hover:bg-rose-50/50 p-8 rounded-r-3xl text-left`}>
                                <div className="text-6xl font-black italic opacity-5 antialiased leading-none">0{idx + 1}</div>
                                <h4 className="text-4xl font-black italic tracking-tighter uppercase leading-none opacity-80 group-hover/f:opacity-100 transition-opacity">{f}</h4>
                                <p className={`text-sm font-bold opacity-40 leading-relaxed italic normal-case ${isSoft ? 'text-rose-900' : 'text-white'}`}>
                                    Achieving the absolute zenith of regional luxury. A digital experience that mirrors the artisanal quality of the product.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
      </section>

      {/* Execution Trigger Bar (Floating Pill) */}
      <footer className="fixed bottom-12 inset-x-0 mx-auto w-fit z-[300] flex">
        <Link href="/" className={`group relative ${isSoft ? 'bg-rose-950 text-white rounded-full' : 'bg-white text-black'} px-16 py-6 font-black uppercase tracking-[0.4em] shadow-[0_50px_100px_rgba(0,0,0,0.4)] transition-all hover:scale-[1.1] hover:px-20 flex items-center gap-8 overflow-hidden`}>
          <span className="relative z-10 text-xl italic leading-none">↖</span> 
          <span className="relative z-10">{isSoft ? <ElegantSerif className="normal-case tracking-[0.2em] font-medium">Return to Collections</ElegantSerif> : "INITIATE_NEW_SEQUENCE"}</span>
          {isSoft && <div className="absolute inset-0 bg-rose-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>}
        </Link>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
      `}</style>
    </div>
  );
}
