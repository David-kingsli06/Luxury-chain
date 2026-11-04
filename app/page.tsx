"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  ArrowUpRight,
  Plus,
  Sparkles,
  ShieldCheck,
  Search,
  Check,
  Menu,
  X,
} from "lucide-react";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showSpecs, setShowSpecs] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth 3D tilt tracking based on cursor relative to screen center
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    const x = (e.clientX / clientWidth - 0.5) * 2; // -1 to 1
    const y = (e.clientY / clientHeight - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleAcquire = () => {
    setCartCount((prev) => prev + 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2400);
  };

  // Parallax offsets
  const tiltX = mousePos.y * -9; // degrees
  const tiltY = mousePos.x * 12; // degrees
  const bgOffsetX = mousePos.x * -18;
  const bgOffsetY = mousePos.y * -18;
  const textOffsetX = mousePos.x * 24;
  const textOffsetY = mousePos.y * 14;

  return (
    <main
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen max-h-screen bg-[#04060a] text-[#f1f5f9] overflow-hidden flex flex-col justify-between selection:bg-[#1e293b] selection:text-[#38bdf8]"
      style={{ perspective: "1200px" }}
    >
      {/* 1. ATMOSPHERIC LIGHTING & GRADIENTS: Obsidian & Midnight Sapphire */}
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${bgOffsetX}px, ${bgOffsetY}px, 0)`,
        }}
      >
        {/* Core radial spotlight behind the hand */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] md:w-[940px] md:h-[940px] rounded-full bg-radial from-[#1e3a5f]/35 via-[#0b172a]/25 to-transparent blur-3xl animate-ambient-glow" />

        {/* Ethereal Ice-Blue / Diamond flare accent */}
        <div className="absolute top-[28%] left-[54%] w-64 h-64 rounded-full bg-[#38bdf8]/12 blur-[100px] pointer-events-none" />

        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#04060a]/60 to-[#020305]" />

        {/* Subtle luxury grain pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* 2. TOP NAVIGATION BAR */}
      <header className="relative z-40 w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-5 sm:pt-7 pb-3 flex items-center justify-between anim-hero-nav">
        {/* Left Navigation: Desktop links + Mobile hamburger */}
        <div className="flex-1 flex justify-start items-center">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#94a3b8] hover:text-[#f8fafc] p-1.5 -ml-1 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[10px] lg:text-[11px] tracking-[0.25em] uppercase font-light text-[#94a3b8]">
            {["Collection", "Atelier", "Heritage", "Bespoke"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative transition-colors duration-300 hover:text-white group py-1"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#d4af37] via-[#93c5fd] to-transparent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Center Brand Identity (Strictly True Centered) */}
        <div className="flex-shrink-0 flex flex-col items-center cursor-pointer select-none group text-center px-2">
          <span
            className="text-xl sm:text-2xl md:text-3xl italic tracking-wide transition-all duration-300 group-hover:scale-105"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              background: "linear-gradient(135deg, #ffffff 15%, #e2e8f0 55%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Aurelia Atelier
          </span>
          <span className="text-[7.5px] sm:text-[8.5px] md:text-[9px] tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#64748b] -mt-0.5">
            Haute Joaillerie · Genève
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex-1 flex justify-end items-center gap-3 sm:gap-5 md:gap-6">
          <button
            aria-label="Search collection"
            className="text-[#94a3b8] hover:text-white transition-colors p-1"
          >
            <Search className="w-4 h-4 stroke-[1.5]" />
          </button>

          <button
            aria-label="Shopping bag"
            className="relative flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md hover:border-white/40 hover:bg-white/[0.08] transition-all text-xs text-[#e2e8f0]"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#d4af37] stroke-[1.7]" />
            <span className="tracking-widest font-mono text-[10px] sm:text-[11px]">
              {cartCount}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full px-6 py-6 bg-[#070b12]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl md:hidden flex flex-col gap-5 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
            {["Collection", "Atelier", "Heritage", "Bespoke"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-[#cbd5e1] hover:text-white font-serif transition-colors py-1 flex items-center justify-between border-b border-white/[0.06]"
              >
                <span>{item}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 3. HERO CANVAS: BACKDROP TYPOGRAPHY + 3D HAND & CHAIN + FLOATING CARDS */}
      <section className="relative z-30 flex-1 w-full px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-center overflow-visible">
        {/* A. Giant Editorial Backdrop Typography (Behind the Hand) */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none transition-transform duration-700 ease-out anim-hero-text"
          style={{
            transform: `translate3d(${textOffsetX}px, ${textOffsetY}px, 0)`,
          }}
        >
          <div className="relative text-center px-4">
            <span
              className="block text-[21vw] sm:text-[19vw] md:text-[16vw] lg:text-[13vw] font-serif uppercase tracking-tight leading-none text-white/[0.035] blur-[0.4px]"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                textShadow: "0 0 100px rgba(56, 189, 248, 0.15)",
              }}
            >
              AURELIA
            </span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] sm:text-xs md:text-sm tracking-[0.35em] sm:tracking-[0.55em] uppercase text-[#64748b]/50 whitespace-nowrap">
              The Sovereign Chain · Edition N° 01
            </div>
          </div>
        </div>

        {/* B. Centered 3D Hand & Chain (The Interactive Masterpiece) */}
        <div
          className="relative z-20 flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-500 ease-out anim-hero-hand"
          style={{
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative animate-luxury-float">
            {/* Soft contact shadow underneath */}
            <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 sm:h-14 bg-black/70 blur-2xl rounded-full pointer-events-none" />

            {/* Hand with Chain cut-out responsive sizing */}
            <div className="relative w-[260px] h-[360px] sm:w-[320px] sm:h-[440px] md:w-[400px] md:h-[530px] lg:w-[470px] lg:h-[620px] xl:w-[520px] xl:h-[660px] max-h-[55vh] sm:max-h-[62vh] md:max-h-[68vh] lg:max-h-[72vh] transition-transform duration-700">
              <Image
                src="/hero-hand-chain.png"
                alt="Aurelia Atelier 18k Gold and Midnight Sapphire Sovereign Chain"
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, (max-width: 1024px) 420px, 520px"
                className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] filter contrast-[1.03]"
              />

              {/* Interactive Specular Glint effect across navy sapphires on mouse movement */}
              <div
                className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 140px at ${50 + mousePos.x * 35}% ${45 + mousePos.y * 35}%, rgba(255, 255, 255, 0.7), transparent 70%)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* C. Top-Right Floating Pill: "The Imperial Link" */}
        <div
          className="absolute top-2 sm:top-6 md:top-8 right-3 sm:right-6 md:right-10 lg:right-14 z-30 transition-transform duration-500 ease-out anim-hero-card-right"
          style={{
            transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 0)`,
          }}
        >
          <div className="relative">
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#0d1422]/75 backdrop-blur-xl border border-white/15 shadow-2xl hover:border-white/40 transition-all duration-300 group"
            >
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-white/20 bg-[#060a12]">
                <Image
                  src="/hero-hand-chain.png"
                  alt="Emerald macro thumbnail"
                  fill
                  className="object-cover scale-200 translate-y-1 -translate-x-1"
                />
              </div>
              <div className="text-left">
                <div className="text-[11px] sm:text-xs font-serif tracking-wider text-[#f1f5f9] group-hover:text-[#38bdf8] transition-colors">
                  The Imperial Link
                </div>
                <div className="text-[8.5px] sm:text-[10px] tracking-widest text-[#94a3b8] uppercase font-light">
                  Grade AAA Ceylon Sapphire
                </div>
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/[0.08] flex items-center justify-center text-[#e2e8f0] border border-white/10 group-hover:rotate-90 group-hover:bg-[#38bdf8]/20 group-hover:text-[#38bdf8] transition-all duration-300">
                <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </button>

            {/* Expandable Specifications Modal */}
            {showSpecs && (
              <div className="absolute right-0 mt-3 w-56 sm:w-64 p-3.5 sm:p-4 rounded-2xl bg-[#090e1a]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-xs text-[#cbd5e1] space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 font-serif text-xs sm:text-sm text-[#f8fafc]">
                  <span>Specification</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
                <div className="flex justify-between text-[10px] sm:text-[11px]">
                  <span className="text-[#94a3b8]">Gold Purity</span>
                  <span className="font-mono text-[#f1f5f9]">18K Solid Gold</span>
                </div>
                <div className="flex justify-between text-[10px] sm:text-[11px]">
                  <span className="text-[#94a3b8]">Gemstones</span>
                  <span className="font-mono text-[#f1f5f9]">Ceylon Sapphires (4.8 ct)</span>
                </div>
                <div className="flex justify-between text-[10px] sm:text-[11px]">
                  <span className="text-[#94a3b8]">Clasp</span>
                  <span className="font-mono text-[#f1f5f9]">Dual-Lock Pavé</span>
                </div>
                <div className="pt-2 flex justify-between items-center text-[10px] sm:text-[11px] border-t border-white/10">
                  <span className="text-[#94a3b8]">Price</span>
                  <span className="font-serif text-xs sm:text-sm text-[#38bdf8] font-semibold">
                    $24,500 USD
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* D. Bottom-Left Card: Brand Philosophy & "Acquire Piece" CTA */}
        <div
          className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 md:left-10 lg:left-14 z-30 max-w-[290px] sm:max-w-xs md:max-w-sm transition-transform duration-500 ease-out anim-hero-card-left"
          style={{
            transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, 0)`,
          }}
        >
          <div className="p-3.5 sm:p-5 md:p-6 rounded-2xl bg-[#0d1422]/75 md:bg-[#0d1422]/60 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden group">
            {/* Corner metallic glow */}
            <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#38bdf8]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#38bdf8] mb-1 sm:mb-1.5 flex items-center gap-1.5 font-light">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Certified Sovereign Creation</span>
            </div>

            <h1
              className="text-base sm:text-xl md:text-2xl font-serif text-[#f8fafc] leading-snug mb-1 sm:mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Eternal Radiance, Sculpted by Hand
            </h1>

            <p className="text-[11px] sm:text-xs text-[#94a3b8] leading-relaxed mb-3 sm:mb-5 font-light line-clamp-2 sm:line-clamp-none">
              Crafted in 18-karat solid heirloom gold and crowned with step-cut
              untreated Ceylon midnight sapphires. Engineered for sovereign presence.
            </p>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleAcquire}
                className="relative flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] text-[#090d16] text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{addedNotice ? "Reserved in Bag" : "Acquire Piece"}</span>
                {addedNotice && <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1.5 stroke-[2.5]" />}
              </button>

              <a
                href="#details"
                className="px-2 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs text-[#cbd5e1] hover:text-white tracking-wider transition-colors"
              >
                Atelier Notes
              </a>
            </div>
          </div>
        </div>

        {/* E. Bottom-Right Card: Private Collector Circle (Social Proof) */}
        <div
          className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 md:right-10 lg:right-14 z-30 transition-transform duration-500 ease-out hidden md:block anim-hero-patron"
          style={{
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
          }}
        >
          <div className="p-3 sm:p-4 rounded-2xl bg-[#0d1422]/60 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3 sm:gap-4 hover:border-white/35 transition-colors">
            {/* Overlapping luxury patron avatars */}
            <div className="flex -space-x-2">
              {[
                { initials: "EA", bg: "from-[#475569] to-[#1e293b]", ring: "border-slate-400/40" },
                { initials: "VM", bg: "from-[#1e3a8a] to-[#0f172a]", ring: "border-blue-400/40" },
                { initials: "SC", bg: "from-[#e2e8f0] to-[#94a3b8]", ring: "border-white/40" },
              ].map((patron, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 ${patron.ring} bg-gradient-to-br ${patron.bg} flex items-center justify-center shadow-md relative select-none`}
                >
                  <span className="text-[9px] sm:text-[10px] font-serif font-semibold tracking-wider text-white">
                    {patron.initials}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <div className="text-[11px] sm:text-xs font-serif text-[#f8fafc] tracking-wide flex items-center gap-1">
                <span>Private Collector Circle</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#38bdf8]" />
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-wider text-[#94a3b8] uppercase font-light">
                3,800+ Heirlooms Commissioned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER / SUBTLE CREDITS & DEDICATION */}
      <footer className="relative z-40 w-full px-4 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 flex items-center justify-between text-[9px] sm:text-[10px] md:text-[11px] text-[#64748b] border-t border-white/[0.06] anim-hero-footer">
        <div>© 2026 Aurelia Atelier Genève. All rights reserved.</div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="hidden sm:inline">Handcrafted in Switzerland</span>
          <span className="text-[#94a3b8] font-mono tracking-widest text-[9px] sm:text-[11px]">
            COLLECTION MMXXVI
          </span>
        </div>
      </footer>
    </main>
  );
}
