"use client";

import { useState } from "react";
import { Code, Users, Calendar, Rocket, Trophy, Zap, ArrowRight } from "lucide-react";

interface Activity {
    id: number;
    title: string;
    category: string;
    description: string;
    color: string;
    icon: React.ReactNode;
}

export default function ActivitiesSlider() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const activities: Activity[] = [
        {
            id: 0,
            title: "Hackathons",
            category: "Build",
            description: "24-hour sprints to build serverless apps, AI bots, and cloud-native solutions. Compete, innovate, and win big!",
            color: "#8B5CF6",
            icon: <Code className="w-6 h-6" />,
        },
        {
            id: 1,
            title: "Hands-on Workshops",
            category: "Learn",
            description: "Weekly deep-dives into EC2, Lambda, S3, and more. Practical sessions with real AWS services.",
            color: "#FF9900",
            icon: <Zap className="w-6 h-6" />,
        },
        {
            id: 2,
            title: "Study Groups",
            category: "Collaborate",
            description: "Crush your AWS certifications with peer learning. From Cloud Practitioner to Solutions Architect.",
            color: "#3B82F6",
            icon: <Users className="w-6 h-6" />,
        },
        {
            id: 3,
            title: "Tech Talks",
            category: "Events",
            description: "Industry professionals share their cloud journey, best practices, and latest AWS innovations.",
            color: "#22C55E",
            icon: <Calendar className="w-6 h-6" />,
        },
        {
            id: 4,
            title: "DeepRacer Competitions",
            category: "Compete",
            description: "Train ML models to race autonomous cars. Learn reinforcement learning while having fun!",
            color: "#EC4899",
            icon: <Trophy className="w-6 h-6" />,
        },
        {
            id: 5,
            title: "Project Showcases",
            category: "Showcase",
            description: "Present your cloud projects to the community. Get feedback, network, and inspire others.",
            color: "#F97316",
            icon: <Rocket className="w-6 h-6" />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
                <div
                    key={activity.id}
                    className="group relative p-6 md:p-8 rounded-2xl bg-white border-2 transition-all duration-500 cursor-pointer overflow-hidden"
                    style={{
                        borderColor: hoveredIndex === index ? activity.color : '#e5e7eb',
                        boxShadow: hoveredIndex === index ? `0 20px 40px -15px ${activity.color}40` : '0 4px 20px -5px rgba(0,0,0,0.08)'
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Background Gradient on Hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                        style={{ backgroundColor: activity.color }}
                    />

                    {/* Category Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 transition-all duration-300"
                        style={{
                            backgroundColor: `${activity.color}15`,
                            color: activity.color
                        }}
                    >
                        {activity.icon}
                        {activity.category}
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl md:text-2xl font-bold text-black mb-3 transition-colors duration-300 group-hover:text-current"
                        style={{ color: hoveredIndex === index ? activity.color : '#000' }}
                    >
                        {activity.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                        {activity.description}
                    </p>

                    {/* Learn More Link */}
                    <div
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 group-hover:translate-x-2"
                        style={{ color: activity.color }}
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Decorative Number */}
                    <div
                        className="absolute -bottom-4 -right-2 text-8xl font-black opacity-5 select-none pointer-events-none"
                        style={{ color: activity.color }}
                    >
                        0{index + 1}
                    </div>
                </div>
            ))}
        </div>
    );
}
