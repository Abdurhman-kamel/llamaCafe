"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { menuCards } from "../constants/menuData"; // Assuming you have a separate file for menu data
gsap.registerPlugin(ScrollTrigger);
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image";


// --------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------
export default function MenuExperience() {
    const containerRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState(menuCards[0].slug);
    const [hoveredImage, setHoveredImage] = useState(menuCards[0].image);


    // GSAP Animations setup
    useGSAP(() => {
        const ctx = gsap.context(() => {
            // 1. Entrance animation for header
            gsap.from(".hero-text-anim", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out"
            });

            // 2. ScrollTrigger for Category Sections
            menuCards.forEach((cat) => {
                ScrollTrigger.create({
                    trigger: `#category-${cat.slug}`,
                    start: "top 35%",
                    end: "bottom 35%",
                    onEnter: () => setActiveCategory(cat.slug),
                    onEnterBack: () => setActiveCategory(cat.slug)
                });
            });

            // 3. Stagger reveal menu rows on scroll
            gsap.utils.toArray(".menu-row-anim").forEach((row) => {
                gsap.from(row, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);


    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-screen bg-[#070707] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden"
        >
            {/* Background Cinematic FX */}
            <div className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay opacity-[0.03]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
            </div>
            {/* <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,7,0.85)_100%)]" /> */}



            {/* Hero Editorial Header */}
            <section className="relative w-full pt-16 pb-12 px-6 md:px-12 border-b border-white/10 flex flex-col justify-between">
                <div className="max-w-6xl">
                    <p className="hero-text-anim text-[11px] font-mono text-white/50 uppercase tracking-[0.3em] mb-4">
                        Gourmet Selection & Brews
                    </p>
                    <h1 className="hero-text-anim text-[clamp(2.5rem,8vw,7rem)] font-serif leading-[0.9] tracking-tight uppercase mb-6">
                        Crafted <span className="italic text-white/70">Flavor</span> Menu
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6">
                    <p className="hero-text-anim max-w-md text-xs font-mono text-white/60 leading-relaxed uppercase tracking-wider">
                        Every recipe is thoughtfully composed, blending specialty roasted beans with artisanal 24-hr sourdough bakery creations.
                    </p>
                </div>
            </section>

            <Tabs
                defaultValue={menuCards[0].slug}
                className="w-full relative"
            >
                {/* Tab Navigation */}
                <div className="sticky top-[57px] z-30 w-full backdrop-blur-md bg-[#070707]/90 border-b border-white/10 overflow-x-auto no-scrollbar py-3 px-6 md:px-12">
                    <TabsList className="flex h-auto w-full justify-start gap-2 rounded-none bg-transparent p-0">
                        {menuCards.map((tab, idx) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.slug}
                                className="relative flex h-auto cursor-pointer items-center gap-2 rounded-[1px] border border-white/10 bg-transparent px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-white/60 shadow-none outline-none transition-all duration-300 hover:border-white/40 hover:text-white data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none focus-visible:border-white focus-visible:ring-0 after:hidden whitespace-nowrap"
                            >
                                <span className="opacity-50">0{idx + 1}</span>
                                <span>{tab.title}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {/* Tab Content Areas */}
                {menuCards.map((tab) => (
                    <TabsContent
                        key={tab.id}
                        value={tab.slug}
                        className="w-full outline-none focus-visible:ring-0 mt-0 data-[state=inactive]:hidden animate-in fade-in duration-700"
                    >
                        <div className="w-full px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-12 lg:gap-16">

                            {/* Left Side: Category Spotlight Image (Desktop Only) */}
                            <aside className="lg:w-[42%] hidden lg:block">
                                <div className="sticky top-[140px] w-full flex flex-col gap-6">
                                    <div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-[1px] border border-white/10 group">
                                        <Image
                                            src={tab.image}
                                            alt={tab.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 42vw"
                                            className="object-cover transition-transform duration-700 ease-out grayscale-[20%] contrast-105 group-hover:scale-105"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />

                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                                            <div>
                                                <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest drop-shadow-md">
                                                    Active Focus
                                                </p>
                                                <p className="text-xl font-serif text-white tracking-wide drop-shadow-md">
                                                    {tab.title}
                                                </p>
                                            </div>
                                            <span
                                                className="w-3 h-3 rounded-full shadow-lg"
                                                style={{ backgroundColor: tab.colorHex || "#fff" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Right Side: Menu Items List */}
                            <section className="lg:w-[58%] flex flex-col gap-10 pb-20">
                                <div className="relative flex justify-between items-baseline px-6 py-8 md:py-10 border border-white/10 rounded-[1px] overflow-hidden group">
                                    {/* Background Image */}
                                    <Image
                                        src={tab.image}
                                        alt={tab.title}
                                        fill
                                        className="object-cover opacity-30 grayscale-[20%] group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out"
                                    />

                                    {/* Cinematic Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-transparent z-10 pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent z-10 pointer-events-none" />

                                    {/* Content (Z-20 pulls it above the image and gradient) */}
                                    <div className="relative z-20 flex w-full justify-between items-baseline">
                                        <h2 className="text-3xl md:text-4xl font-serif tracking-tight uppercase text-white drop-shadow-md">
                                            {tab.title}
                                        </h2>
                                        <span className="text-[10px] text-center font-mono uppercase tracking-widest text-white/70 bg-black/40 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-[1px]">
                                            {tab.sections.reduce((acc, s) => acc + s.items.length, 0)} Items
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {tab.sections.map((sec, secIndex) => (
                                        <div key={secIndex} className="flex flex-col gap-4">
                                            {tab.sections.length > 1 && (
                                                <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 pt-2">
                                        // {sec.name}
                                                </h3>
                                            )}

                                            <div className="flex flex-col divide-y divide-white/5 border-t border-b border-white/5">
                                                {sec.items.map((item, itemIdx) => (
                                                    <div
                                                        key={itemIdx}
                                                        onClick={() => setSelectedItem?.(item)}
                                                        className="group py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer hover:bg-white/[0.02] px-2 transition-colors duration-200"
                                                        role="button"
                                                        tabIndex={0}
                                                        onKeyDown={(e) => e.key === "Enter" && setSelectedItem?.(item)}
                                                    >
                                                        <div className="flex flex-col">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-sm font-serif tracking-wide text-white group-hover:text-[#2DD4BF] transition-colors">
                                                                    {item.name}
                                                                </span>
                                                                {item.ingredients && (
                                                                    <span className="text-[9px] font-mono border border-white/20 text-white/50 px-1.5 py-0.5 rounded-[1px] group-hover:border-[#2DD4BF] transition-colors">
                                                                        INFO
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-6 self-end sm:self-center">
                                                            {item.cal > 0 && (
                                                                <span className="text-[10px] font-mono text-white/40 tracking-wider">
                                                                    {item.cal} CAL
                                                                </span>
                                                            )}
                                                            <div className="text-sm font-mono tracking-widest text-white/90 min-w-[60px] text-right">
                                                                {item.price} <span className="text-[10px] text-white/40">SAR</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>





        </div>
    );
}