"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Embedded JSON Chapters Data
const CHAPTERS_DATA = [
    {
        id: "01",
        phase: "Who We Are",
        title: "Where Every Cup Begins",
        subtitle: "A café built around curiosity, warmth, and craftsmanship.",
        description: "Llama was created to be more than a coffee shop. It's a place where thoughtful design, exceptional coffee, and genuine hospitality come together to create memorable everyday moments.",
        metric: "Since 2025"
    },
    {
        id: "02",
        phase: "Our Menu",
        title: "Crafted for Every Craving",
        subtitle: "Specialty coffee, handcrafted drinks, and artisan desserts.",
        description: "Every item on our menu is carefully selected and prepared using premium ingredients. From signature espresso creations to refreshing cold drinks and freshly baked desserts, every choice is made with quality in mind.",
        metric: "50+ Creations"
    },
    {
        id: "03",
        phase: "The Experience",
        title: "More Than Just Coffee",
        subtitle: "A space designed to slow time and inspire connection.",
        description: "Whether you're meeting friends, working remotely, or enjoying a quiet moment alone, Llama blends contemporary design, inviting comfort, and rich flavours into an experience you'll want to revisit.",
        metric: "One Unique Destination"
    }
];

const CHAPTER_IMAGES = [
    "/images/About/coffee machine.webp",
    "/images/About/about menu.webp",
    "/images/About/lama outdoor.webp",
];

export const AboutUs = () => {
    const containerRef = useRef(null);
    const slidesRef = useRef([]);
    const progressLineRef = useRef(null);

    slidesRef.current = [];

    useEffect(() => {
        if (!CHAPTERS_DATA.length) return;

        const ctx = gsap.context(() => {
            const slides = slidesRef.current;
            const totalSlides = slides.length;

            // Set initial visibility via GSAP
            slides.forEach((slide, i) => {
                if (!slide) return;
                const content = slide.querySelector(".slide-content");
                const image = slide.querySelector(".slide-image-wrapper");

                if (i === 0) {
                    gsap.set([content, image], { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
                } else {
                    gsap.set(content, { opacity: 0, y: 60, filter: "blur(10px)" });
                    gsap.set(image, { opacity: 0, scale: 1.1 });
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalSlides * 100}%`,
                    pin: true,
                    scrub: 0.8,
                    anticipatePin: 1,
                    invalidateOnRefresh: true, // Recalculates triggering points when mobile browser bar toggles
                    onUpdate: (self) => {
                        if (progressLineRef.current) {
                            gsap.to(progressLineRef.current, {
                                scaleY: self.progress,
                                transformOrigin: "top top",
                                duration: 0.1,
                                ease: "none",
                            });
                        }
                    },
                },
            });

            slides.forEach((slide, index) => {
                if (index === 0 || !slide) return;
                const prevSlide = slides[index - 1];

                // Transition Out Previous Slide
                tl.to(
                    prevSlide.querySelector(".slide-content"),
                    { y: -50, opacity: 0, filter: "blur(10px)", duration: 1, ease: "power2.inOut" },
                    index - 0.5
                ).to(
                    prevSlide.querySelector(".slide-image-wrapper"),
                    { scale: 0.9, opacity: 0, duration: 1, ease: "power2.inOut" },
                    "<"
                );

                // Transition In Current Slide
                tl.to(slide, { pointerEvents: "auto", duration: 0 }, index - 0.5)
                    .to(prevSlide, { pointerEvents: "none", duration: 0 }, "<")
                    .to(
                        slide.querySelector(".slide-content"),
                        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
                        "<"
                    )
                    .to(
                        slide.querySelector(".slide-image-wrapper"),
                        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
                        "<"
                    );
            });

            const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
            return () => cancelAnimationFrame(raf);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="aboutUs"
            ref={containerRef}
            className="relative w-full h-[100dvh] bg-[#070707] text-white overflow-hidden selection:bg-white selection:text-black"
            aria-label="About Us"
        >
            {/* Subtle Noise Texture Overlay */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-40 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                }}
            />

            {/* Side Indicator / Scroll Progress Bar (Desktop) */}
            <div className="absolute inset-y-0 end-6 md:end-12 flex-col justify-center z-50 pointer-events-none hidden md:flex">
                <div className="flex flex-col items-center gap-4">
                    <span className="font-mono text-[10px] tracking-widest text-white/40">01</span>
                    <div className="w-0.5 h-32 bg-white/10 relative overflow-hidden rounded-full">
                        <div
                            ref={progressLineRef}
                            className="absolute top-0 start-0 w-full h-full bg-white origin-top scale-y-0"
                        />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-white/40">
                        {CHAPTERS_DATA.length < 10 ? `0${CHAPTERS_DATA.length}` : CHAPTERS_DATA.length}
                    </span>
                </div>
            </div>

            {/* Slides Container */}
            <div className="relative w-full h-full">
                {CHAPTERS_DATA.map((chapter, index) => (
                    <div
                        key={chapter.id || index}
                        ref={(el) => {
                            if (el) slidesRef.current[index] = el;
                        }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24"
                        style={{ pointerEvents: index === 0 ? "auto" : "none" }}
                    >
                        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full max-h-full py-10 md:py-20 landscape:max-md:py-6">
                            {/* Text Content */}
                            <div
                                className="slide-content lg:col-span-6 flex flex-col justify-center space-y-4 md:space-y-6 lg:space-y-8 z-20 will-change-transform"
                                style={{ opacity: index === 0 ? 1 : 0 }}
                            >
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="font-mono text-[10px] md:text-xs tracking-widest text-white/50">
                                        {chapter.id}
                                    </span>
                                    <span className="w-6 md:w-8 h-px bg-white/30" />
                                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70">
                                        {chapter.phase}
                                    </span>
                                </div>

                                <div className="space-y-3 md:space-y-4">
                                    <h2 className="text-3xl md:text-5xl landscape:max-md:text-4xl lg:text-7xl font-serif tracking-tight leading-[1.05]">
                                        {chapter.title}
                                    </h2>
                                    <p className="font-mono text-[10px] md:text-xs lg:text-sm uppercase tracking-wider text-white/60">
                                        {chapter.subtitle}
                                    </p>
                                </div>

                                <p className="text-white/70 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-xl">
                                    {chapter.description}
                                </p>

                                <div className="pt-2">
                                    <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                        <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/90">
                                            {chapter.metric}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div
                                className="slide-image-wrapper lg:col-span-6 relative flex items-center justify-center will-change-transform w-full mt-auto lg:mt-0"
                                style={{ opacity: index === 0 ? 1 : 0 }}
                            >
                                <div className="w-full h-[35vh] sm:h-[40vh] md:h-[50vh] landscape:max-md:h-[35vh] lg:h-[clamp(20rem,55vh,34rem)] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group">
                                    <img
                                        src={CHAPTER_IMAGES[index]}
                                        alt={chapter.title}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        decoding="async"
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};