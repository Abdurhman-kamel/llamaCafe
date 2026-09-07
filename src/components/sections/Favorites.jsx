"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { favoritesData } from "../constants/Favorites";

// Register ScrollTrigger cleanly for Next.js SSR compatibility
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FavoritesSection() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const cardsRef = useRef([]);
    const imagesRef = useRef([]);

    // Find the initially featured index
    const initialIndex = favoritesData.findIndex((item) => item.featured) || 0;
    const [activeIndex, setActiveIndex] = useState(initialIndex);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Entrance Animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            tl.fromTo(
                headerRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
                .fromTo(
                    cardsRef.current,
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" },
                    "-=0.6"
                )
                .fromTo(
                    imagesRef.current,
                    { scale: 1.08 },
                    { scale: 1, duration: 1.5, ease: "power2.out", stagger: 0.08 },
                    "-=1"
                );

            // 2. Responsive Layout Setup
            const mm = gsap.matchMedia();

            // Desktop: Apply asymmetric flex basis
            mm.add("(min-width: 1024px)", () => {
                gsap.set(cardsRef.current, {
                    flex: (i) => (i === activeIndex ? 6 : 1),
                });
            });

            // Mobile/Tablet: Clear flex inline styles to allow Tailwind vertical stacking
            mm.add("(max-width: 1023px)", () => {
                gsap.set(cardsRef.current, { clearProps: "flex" });
            });
        }, sectionRef);

        return () => ctx.revert(); // Proper cleanup to prevent Next.js hydration/re-render issues
    }, []);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);

        // Only run the GSAP flex layout transition on desktop
        if (window.innerWidth >= 1024) {
            gsap.to(cardsRef.current, {
                flex: (i) => (i === index ? 6 : 1),
                duration: 0.85,
                ease: "expo.out",
                overwrite: "auto",
            });

            // Subtle GSAP image scale interaction
            gsap.to(imagesRef.current, {
                scale: (i) => (i === index ? 1 : 1.05),
                duration: 0.85,
                ease: "expo.out",
                overwrite: "auto",
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            className="w-full bg-black text-white py-24 px-4 md:px-8 lg:px-12 overflow-hidden"
        >
            <div className="max-w-[1800px] mx-auto">

                {/* Section Header */}
                <div ref={headerRef} className="mb-12 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80 block" />
                        <span className="text-xs tracking-[0.3em] font-mono text-white/80 uppercase">
                            Most Loved
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-light tracking-wide uppercase leading-none">
                        Our Favorites
                    </h2>
                </div>

                {/* Cards Container */}
                <div
                    ref={cardsContainerRef}
                    className="flex flex-col lg:flex-row h-auto lg:h-[650px] w-full gap-3 lg:gap-4"
                >
                    {favoritesData.map((card, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={card.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                className={`
                  relative rounded-[2rem] overflow-hidden cursor-pointer shrink-0 
                  transition-all duration-700 ease-out
                  ${isActive ? "h-[240px] md:h-[300px] lg:h-full" : "h-[120px] md:h-[140px] lg:h-full"}
                `}
                            >
                                {/* Image & Overlays */}
                                <div className={`absolute inset-0 transition-all duration-700 ${isActive ? "grayscale-0" : "grayscale"}`}>
                                    <Image
                                        ref={(el) => (imagesRef.current[index] = el)}
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />

                                    {/* Base overlay for inactive cards */}
                                    <div
                                        className={`absolute inset-0 bg-black transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-60"}`}
                                    />

                                    {/* Cinematic gradient for active card */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                                    />
                                </div>

                                {/* Card Number */}
                                <span className="absolute top-6 left-6 text-sm font-mono font-bold tracking-wider z-10">
                                    {card.number}
                                </span>

                                {/* Vertical Category Text (Desktop Inactive) */}
                                <span
                                    className={`
                    absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono tracking-[0.25em] 
                    text-white/60 uppercase whitespace-nowrap hidden lg:block transition-all duration-500
                    ${isActive ? "opacity-0 scale-95" : "opacity-100 scale-100 delay-200"}
                  `}
                                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                >
                                    {card.category}
                                </span>

                                {/* Horizontal Category Text (Mobile Inactive) */}
                                <span className={`
                  absolute bottom-6 left-6 text-xs font-mono tracking-[0.2em] text-white/60 uppercase 
                  block lg:hidden transition-opacity duration-500
                  ${isActive ? "opacity-0" : "opacity-100 delay-200"}
                `}>
                                    {card.category}
                                </span>

                                {/* Featured Title */}
                                <h3 className={`
                  absolute bottom-8 left-6 lg:left-10 text-3xl md:text-5xl lg:text-6xl font-serif 
                  text-white tracking-wide z-10 transition-all duration-700 ease-out
                  ${isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"}
                `}>
                                    {card.title}
                                </h3>

                                {/* Circular Arrow Button */}
                                <div className={`
                  absolute bottom-8 right-6 lg:right-10 w-12 h-12 lg:w-14 lg:h-14 bg-white 
                  rounded-full flex items-center justify-center z-10 transition-all duration-700 ease-out
                  ${isActive ? "opacity-100 scale-100 rotate-0 delay-200" : "opacity-0 scale-50 -rotate-45"}
                `}>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}