"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
    children: ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";
    delay?: number;
    threshold?: number;
}

export default function ScrollAnimate({
    children,
    className = "",
    animation = "fadeUp",
    delay = 0,
    threshold = 0.1,
}: ScrollAnimateProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const animationClass = {
        fadeUp: "animate-on-scroll",
        fadeLeft: "animate-fade-left",
        fadeRight: "animate-fade-right",
        scaleIn: "animate-scale-in",
    }[animation];

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
