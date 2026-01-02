"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Users, Cloud, Terminal, Award } from "lucide-react";

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            id: 0,
            title: "AWS Cloud Club",
            category: "Identity",
            color: "text-black",
            content: (
                <div className="h-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#FF9900]/10 mix-blend-overlay z-10"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/event_1.jpg"
                        alt="AWS Cloud Club"
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#FF9900]">
                        EST. 2024
                    </div>
                </div>
            ),
        },
        {
            id: 1,
            title: "Vibrant Community",
            category: "Networking",
            color: "text-blue-600",
            content: (
                <div className="h-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/event_2.jpg"
                        alt="Community Networking"
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
        },
        {
            id: 2,
            title: "Expert Workshops",
            category: "Learning",
            color: "text-purple-600",
            content: (
                <div className="h-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/event_3.jpg"
                        alt="Tech Speaker"
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
        },
        {
            id: 3,
            title: "Build Weekends",
            category: "Hackathons",
            color: "text-orange-600",
            content: (
                <div className="h-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/event_4.jpg"
                        alt="Hackathon Team"
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
        },
        {
            id: 4,
            title: "Hands-on Labs",
            category: "Skills",
            color: "text-green-600",
            content: (
                <div className="h-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay z-10"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/event_5.jpg"
                        alt="Coding Workshop"
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
        },
        {
            id: 5,
            title: "Tech Sessions",
            category: "Knowledge",
            color: "text-red-600",
            content: (
                <div className="h-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay z-10"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/event_6.jpg"
                        alt="Tech Sessions"
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
        },
        {
            id: 6,
            title: "Future Ready",
            category: "Innovation",
            color: "text-indigo-600",
            content: (
                <div className="h-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/event_7.jpg"
                        alt="Future Ready"
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [cards.length]);

    const getCardStyle = (index: number) => {
        // Calculate distance from active index
        const distance = (index - activeIndex + cards.length) % cards.length;

        if (distance === 0) {
            // Front card
            return "z-30 scale-100 rotate-0 translate-x-0 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)]";
        } else if (distance === 1) {
            // Behind card (right)
            return "z-20 scale-95 rotate-6 translate-x-8 -translate-y-2 opacity-100 shadow-xl bg-gray-50";
        } else {
            // Back card (left/hidden in stack)
            return "z-10 scale-90 -rotate-6 -translate-x-8 translate-y-4 opacity-80 shadow-lg bg-gray-100";
        }
    };

    return (
        <div className="relative h-[450px] w-full flex items-center justify-center [perspective:1000px]">
            {/* Decorative Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9900]/10 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-slow pointer-events-none"></div>

            {cards.map((card, index) => (
                <div
                    key={card.id}
                    className={`absolute w-[280px] h-[380px] rounded-3xl border border-gray-200 transition-all duration-700 ease-in-out cursor-pointer overflow-hidden flex flex-col group bg-white ${getCardStyle(
                        index
                    )}`}
                    onClick={() => setActiveIndex(index)}
                >
                    <div className="h-2/3 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        {card.content}
                    </div>
                    <div className="h-1/3 bg-white p-6 relative border-t border-gray-100">
                        <div className="absolute top-0 right-0 p-5">
                            <ArrowRight className="w-6 h-6 text-black group-hover:text-[#FF9900] -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                        </div>
                        <div className={`text-xs font-bold mb-1 uppercase tracking-wider ${card.color}`}>
                            {card.category}
                        </div>
                        <div className="font-bold text-black text-2xl leading-tight">
                            {card.title}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
