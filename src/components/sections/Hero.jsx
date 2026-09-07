"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const tlRef = useRef(null);

    // --------------------------------------------------
    // Mouse Parallax
    // --------------------------------------------------
    useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: fine)");

        if (!mediaQuery.matches) return;
        if (!imageRef.current || !textRef.current) return;

        const imgX = gsap.quickTo(imageRef.current, "x", {
            duration: 0.8,
            ease: "power3.out",
        });

        const imgY = gsap.quickTo(imageRef.current, "y", {
            duration: 0.8,
            ease: "power3.out",
        });

        const txtX = gsap.quickTo(textRef.current, "x", {
            duration: 1.2,
            ease: "power3.out",
        });

        const txtY = gsap.quickTo(textRef.current, "y", {
            duration: 1.2,
            ease: "power3.out",
        });

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;

            const x = (e.clientX / innerWidth) * 2 - 1;
            const y = (e.clientY / innerHeight) * 2 - 1;

            imgX(x * 30);
            imgY(y * 30);

            txtX(x * -40);
            txtY(y * -40);
        };

        window.addEventListener("mousemove", handleMouseMove, {
            passive: true,
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // --------------------------------------------------
    // GSAP Animations
    // --------------------------------------------------
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                paused: true,
                defaults: {
                    ease: "power3.out",
                },
            });

            tlRef.current = tl;

            // Initial states
            gsap.set(".title-line", {
                yPercent: 100,
                rotationX: -45,
                transformOrigin: "top center",
                opacity: 0,
            });

            gsap.set(".hero-img-wrapper", {
                scale: 0.7,
                opacity: 0,
                rotation: -2,
            });

            gsap.set(".hero-img", {
                scale: 1.6,
            });

            gsap.set(".meta-line", {
                opacity: 0,
                x: -20,
            });

            gsap.set(".scroll-badge", {
                scale: 0,
                rotation: -90,
            });

            // Hero entrance
            tl.to(".hero-img-wrapper", {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 2,
                ease: "power4.inOut",
            })
                .to(
                    ".hero-img",
                    {
                        scale: 1,
                        duration: 2,
                        ease: "power4.inOut",
                    },
                    "<"
                )
                .to(
                    ".title-line",
                    {
                        yPercent: 0,
                        rotationX: 0,
                        opacity: 1,
                        duration: 1.4,
                        stagger: 0.15,
                        ease: "power3.out",
                    },
                    "-=1.2"
                )
                .to(
                    ".meta-line",
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        stagger: 0.1,
                    },
                    "-=1"
                )
                .to(
                    ".scroll-badge",
                    {
                        scale: 1,
                        rotation: 0,
                        duration: 1.2,
                        ease: "back.out(1.5)",
                    },
                    "-=1"
                );

            // Background marquee
            gsap.to(".bg-marquee", {
                xPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // Image scroll effect
            gsap.to(imageRef.current, {
                yPercent: 30,
                scale: 0.95,
                opacity: 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text scroll effect
            gsap.to(textRef.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.2,
                },
            });

            // Rotating badge text
            gsap.to(".scroll-badge-text", {
                rotation: 360,
                duration: 10,
                repeat: -1,
                ease: "linear",
            });
        }, sectionRef);

        return () => {
            tlRef.current = null;
            ctx.revert();
        };
    }, []);

    // --------------------------------------------------
    // Start entrance animation
    // --------------------------------------------------
    useEffect(() => {
        tlRef.current?.play();
    }, []);

    // --------------------------------------------------
    // Scroll to menu
    // --------------------------------------------------
    // const scrollToContent = () => {
    //     const nextSection = document.querySelector("#menu");

    //     if (nextSection) {
    //         nextSection.scrollIntoView({
    //             behavior: "smooth",
    //         });
    //     }
    // };

    return (
        <section
            id="welcome"
            ref={sectionRef}
            className="relative w-full min-w-0 min-h-[100dvh] h-screen bg-[#070707] text-white overflow-hidden perspective-distant selection:bg-white selection:text-black flex flex-col justify-between"
        >
            {/* Cinematic Noise */}
            <div className="pointer-events-none absolute inset-0 z-50 mix-blend-overlay opacity-[0.03]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
            </div>

            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,7,0.8)_100%)]" />

            {/* Header */}
            <div className="absolute top-0 start-0 w-full z-30 px-6 md:px-12 py-10 landscape:max-md:py-6 flex justify-between items-start pointer-events-none">
                <div className="meta-line flex flex-col gap-1 pointer-events-auto">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"
                            aria-hidden="true"
                        />

                        <p className="text-[10px] uppercase tracking-[0.4em] font-mono opacity-80">
                            llama cafe
                        </p>
                    </div>
                </div>

                <div className="meta-line text-end hidden md:block pointer-events-auto">
                    <p className="text-[10px] font-mono opacity-50 uppercase tracking-[0.2em] mb-1">
                        Location
                    </p>

                    <p className="text-xs font-serif tracking-wide opacity-80">
                        Dammam • Dhahran
                    </p>
                </div>
            </div>

            {/* Background Marquee */}
            <div className="absolute top-[20%] start-0 w-full pointer-events-none z-0 overflow-hidden whitespace-nowrap mix-blend-color-dodge">
                <h2 className="bg-marquee text-[25vw] font-serif leading-none opacity-5 tracking-tighter will-change-transform text-white">
                    llama
                </h2>
            </div>

            {/* Main Composition */}
            <div className="relative w-full h-full flex items-center justify-center pt-20 landscape:max-md:pt-10">


                {/* Center Image */}
                <div ref={imageRef} className="absolute z-10 w-full sm:w-[80vw] md:w-[55vw] h-auto max-h-[72dvh] aspect-square max-[1025px]:!h-auto min-[1026px]:aspect-auto min-[1026px]:h-[70vh] landscape:max-md:w-[70vw] will-change-transform">

                    <div className="hero-img-wrapper relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1px] bg-black shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                        <img src="/images/Hero/llama-sign.webp" alt="Llama Café Signature Coffee" className="hero-img block h-full w-full object-contain min-[1026px]:object-cover grayscale-20 contrast-110 will-change-transform" loading="eager" decoding="async" />
                    </div>
                </div>

                {/* Foreground Typography */}
                <div
                    ref={textRef}
                    className="relative z-20 w-full px-6 md:px-12 pointer-events-none mix-blend-difference"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <h1 className="flex min-w-0 flex-col text-[clamp(2.75rem,16vw,16vw)] md:text-[11vw] landscape:max-md:text-[12vw] font-serif leading-[0.8] tracking-[-0.04em] uppercase text-white drop-shadow-2xl">

                        <div
                            className="overflow-hidden pb-4"
                            style={{ perspective: "800px" }}
                        >
                            <span className="block max-w-full wrap-break-word pb-auto md:py-7 title-line will-change-transform p-3">
                                Brewed
                            </span>
                        </div>

                        <div
                            className="overflow-hidden md:ms-[15%] pb-4"
                            style={{ perspective: "800px" }}
                        >
                            <span className="block max-w-full max-md:whitespace-nowrap text-[13.8vw] pb-auto p-2 md:py-7 title-line will-change-transform italic opacity-90 [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] md:text-[11vw] md:text-white md:[-webkit-text-stroke:0px]">
                                Beautifully.
                            </span>
                        </div>
                    </h1>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 start-0 w-full z-30 px-6 md:px-12 py-10 landscape:max-md:py-5 flex flex-col md:flex-row items-end justify-between gap-8 landscape:max-md:gap-4 pointer-events-none">

                <div className="meta-line max-w-70 pointer-events-auto">
                    <p className="text-[11px] font-mono text-white/50 uppercase tracking-[0.2em] leading-[1.8]">
                        Every cup is crafted with passion, bringing together premium
                        beans, warm hospitality, and the authentic spirit of Saudi
                        coffee culture.
                    </p>
                </div>

                {/* Scroll Badge */}
                <div
                    role="button"
                    tabIndex={0}
                    aria-label="Scroll down to menu"
                    // onClick={scrollToContent}
                    // onKeyDown={(e) => {
                    //     if (e.key === "Enter" || e.key === " ") {
                    //         e.preventDefault();
                    //         scrollToContent();
                    //     }
                    // }}
                    className="scroll-badge relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mix-blend-difference pointer-events-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    <div
                        className="absolute w-1.5 h-1.5 bg-white rounded-full"
                        aria-hidden="true"
                    />

                    <svg
                        viewBox="0 0 100 100"
                        className="scroll-badge-text absolute w-full h-full fill-white opacity-80"
                        aria-hidden="true"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                            />
                        </defs>

                        <text className="text-[10px] font-mono uppercase tracking-normal">
                            <textPath href="#circlePath" startOffset="0%">
                                explore the menu
                            </textPath>

                            <textPath href="#circlePath" startOffset="50%">
                                explore the menu
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </section>
    );
}

