"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

// Combined static data (No more i18n required)
const BRANCHES = [
    {
        id: "01",
        city: "Dammam",
        address: "Kingdom of Saudi Arabia, Dammam",
        coords: "26.36659148789169, 50.09400169112811",
        image: "/images/Branches/dammam branch.webp"
    },
    {
        id: "02",
        city: "Dhahran",
        address: "Kingdom of Saudi Arabia, Dhahran",
        coords: "26.34101585960781, 50.15488876530732",
        image: "/images/Branches/dhahran branch.webp"
    }
];

export const Branches = () => {
    const cursorRef = useRef(null);
    const cursorImageWrapRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [displayIndex, setDisplayIndex] = useState(0);

    // GSAP Setup for the Magnetic Image Cursor
    useEffect(() => {
        let ctx = gsap.context(() => {
            const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.6, ease: "power4.out" });
            const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.6, ease: "power4.out" });

            gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

            const moveCursor = (e) => {
                xTo(e.clientX);
                yTo(e.clientY);
            };

            window.addEventListener("mousemove", moveCursor);
            return () => window.removeEventListener("mousemove", moveCursor);
        });

        return () => ctx.revert();
    }, []);

    // GSAP Hover Animations
    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        setDisplayIndex(index);

        gsap.to(cursorRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "expo.out",
            overwrite: "auto"
        });

        gsap.fromTo(cursorImageWrapRef.current,
            { scale: 1.5 },
            { scale: 1, duration: 1.2, ease: "expo.out", overwrite: "auto" }
        );
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);

        gsap.to(cursorRef.current, {
            scale: 0.2,
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
            overwrite: "auto"
        });
    };

    return (
        <section id='branches' className="relative w-full min-h-screen bg-[#070707] text-white overflow-hidden py-24 md:py-32 landscape:py-10 landscape:md:py-16 selection:bg-white selection:text-black">

            {/* Cinematic Noise Overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />

            {/* Editorial Header */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 mb-16 md:mb-32 landscape:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.3em] font-mono opacity-70">Global Presence</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Our Locations</h2>
                </div>
                <p className="text-sm font-mono text-white/50 uppercase tracking-widest max-w-xs md:text-end">
                    Crafted in Saudi Arabia. Shared between Dammam & Dhahran.
                </p>
            </div>

            {/* Floating Image Cursor (Desktop Only) */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[24rem] h-[32rem] pointer-events-none z-50 overflow-hidden rounded-[2rem] hidden md:block isolation-auto shadow-2xl"
            >
                <div ref={cursorImageWrapRef} className="w-full h-full relative">
                    <Image
                        src={BRANCHES[displayIndex].image}
                        alt="Branch Location"
                        fill
                        sizes="(max-width: 768px) 0vw, 384px"
                        className="object-cover grayscale-[30%]"
                        priority={displayIndex === 0}
                    />
                </div>
                {/* Volumetric shadow inside the floating image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            </div>

            {/* Massive Typography List */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col w-full">
                {BRANCHES.map((branch, index) => {
                    const isFaded = activeIndex !== null && activeIndex !== index;

                    return (
                        <div
                            key={branch.id}
                            className="group relative border-b border-white/10 last:border-0 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-all duration-700 ease-out"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{ opacity: isFaded ? 0.3 : 1 }}
                        >
                            {/* Start Side: Number & Name */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                                <span className="font-mono text-sm tracking-widest text-white/40 group-hover:text-white transition-colors duration-500">
                                    {branch.id}
                                </span>
                                <h3 className="text-5xl md:text-7xl lg:text-9xl font-serif tracking-tight transform origin-left transition-transform duration-700 ease-out group-hover:translate-x-4 md:group-hover:translate-x-8">
                                    {branch.city}
                                </h3>
                            </div>

                            {/* End Side: Metadata */}
                            <div className="mt-6 md:mt-0 flex flex-col md:items-end gap-2 text-start md:text-end overflow-hidden">
                                <p className="font-mono text-xs uppercase tracking-widest text-white/60">
                                    {branch.coords}
                                </p>
                                <p className="text-sm md:text-base font-medium opacity-80 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                                    {branch.address}
                                </p>
                            </div>

                            {/* Mobile Image Fallback (Hidden on Desktop) */}
                            <div className="md:hidden mt-8 w-full h-[60vh] landscape:h-[35vh] rounded-2xl overflow-hidden relative">
                                <Image
                                    src={branch.image}
                                    alt={branch.city}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 0vw"
                                    className="object-cover grayscale-[50%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 z-10" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};