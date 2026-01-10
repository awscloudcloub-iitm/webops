"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading screen after page loads
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#232F3E] transition-opacity duration-500 ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* Logo */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#FF9900] blur-2xl opacity-30 animate-pulse rounded-full scale-150"></div>
                <Image
                    src="/aws-logo.jpg"
                    alt="AWS Cloud Club"
                    width={100}
                    height={100}
                    className="rounded-full relative z-10 border-4 border-[#FF9900]/50 animate-pulse"
                />
            </div>

            {/* Club Name */}
            <h1 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                AWS CLOUD CLUB
            </h1>
            <p className="text-sm text-gray-400 tracking-[0.3em] uppercase mb-8">
                IIT Madras
            </p>

            {/* Loading Animation */}
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF9900] animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-3 h-3 rounded-full bg-[#FF9900] animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-3 h-3 rounded-full bg-[#FF9900] animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>

            {/* Loading Text */}
            <p className="mt-6 text-gray-500 text-sm animate-pulse">Loading...</p>
        </div>
    );
}
