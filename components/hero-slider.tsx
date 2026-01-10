"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            id: 0,
            title: "AWS Cloud Club IIT Madras",
            category: "Community",
            caption: "Building the next generation of cloud professionals at IIT Madras",
            image: "/event_1.png",
            color: "#FF9900",
        },
        {
            id: 1,
            title: "AWS Professionals Talks",
            category: "Events",
            caption: "Join us for our AWS professionals talks and learn from the best in the cloud industry",
            image: "/event_4.png",
            color: "#F97316",
        },
        {
            id: 2,
            title: "International Speakers",
            category: "Events",
            caption: "Join us for our international speakers and learn from the best in the cloud industry",
            image: "/international.jpg",
            color: "#3B82F6",
        },
        {
            id: 3,
            title: "Hands-on Labs",
            category: "Skills",
            caption: "Practice with real AWS services and gain practical experience",
            image: "/event_5.png",
            color: "#22C55E",
        },
        {
            id: 4,
            title: "Panel Discussion",
            category: "Events",
            caption: "Engage in insightful discussions with industry experts and cloud professionals",
            image: "/event_2.png",
            color: "#EC4899",
        },
        {
            id: 5,
            title: "Giving Back to Community",
            category: "Community",
            caption: "Helping other Universities setup the AWS Cloud Club",
            image: "/event_3.png",
            color: "#8B5CF6",
        },
        {
            id: 6,
            title: "Collaborations",
            category: "Community",
            caption: "Collaborating with other clubs and organizations to promote cloud computing",
            image: "/event_8.png",
            color: "#6366F1",
        },
        {
            id: 7,
            title: "DeepRacer Events",
            category: "Compete",
            caption: "Train ML models to race autonomous cars and compete in AWS DeepRacer challenges",
            image: "/event_6.jpg",
            color: "#10B981",
        },
        {
            id: 8,
            title: "DeepRacer Events",
            category: "Compete",
            caption: "Experience the thrill of reinforcement learning with AWS DeepRacer competitions",
            image: "/event_7.jpg",
            color: "#14B8A6",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const goToPrev = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlide = slides[activeIndex];

    return (
        <div className="relative w-full max-w-[95%] sm:max-w-[85%] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[540px] mx-auto">
            {/* Gradient Border Wrapper */}
            <div
                className="p-[2px] rounded-2xl lg:rounded-3xl transition-all duration-700"
                style={{
                    background: `linear-gradient(135deg, ${currentSlide.color}, transparent 50%, ${currentSlide.color})`
                }}
            >
                {/* Main Slider Container - Fixed Aspect Ratio */}
                <div
                    className="relative w-full aspect-[16/9] rounded-[14px] lg:rounded-[22px] overflow-hidden bg-gray-900"
                    style={{
                        boxShadow: `0 20px 50px -12px ${currentSlide.color}40, 0 8px 24px -8px rgba(0,0,0,0.2)`
                    }}
                >
                    {/* Slides */}
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-all duration-700 ease-out ${index === activeIndex
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-110 pointer-events-none'
                                }`}
                        >
                            {/* Image - fully visible */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-contain object-center"
                            />

                            {/* Gradient Overlay - More stylish */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                            {/* Category Badge - Glassmorphism */}
                            <div
                                className="absolute top-3 left-3 lg:top-4 lg:left-4 px-3 py-1.5 rounded-lg text-[10px] lg:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20"
                                style={{ backgroundColor: `${slide.color}CC` }}
                            >
                                {slide.category}
                            </div>

                            {/* Caption - Enhanced */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                                <h3 className="font-bold text-white text-base lg:text-xl leading-tight mb-1">
                                    {slide.title}
                                </h3>
                                <p className="text-white/80 text-xs lg:text-sm leading-relaxed line-clamp-2">
                                    {slide.caption}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows - Modern Style */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-2 lg:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </button>
                </div>
            </div>

            {/* Dot Indicators - Modern Style */}
            <div className="flex justify-center gap-1.5 mt-4">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setActiveIndex(index)}
                        className={`rounded-full transition-all duration-300 ${index === activeIndex
                            ? 'w-6 h-2'
                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                        style={{
                            backgroundColor: index === activeIndex ? slide.color : undefined
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
