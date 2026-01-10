"use client";

import Link from "next/link";
import { ArrowRight, Youtube, Instagram, Github, Linkedin } from "lucide-react";

import HeroSlider from "@/components/hero-slider";
import ActivitiesSlider from "@/components/activities-slider";
import ScrollAnimate from "@/components/scroll-animate";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 overflow-x-hidden bg-white">
      {/* Scrolling Grid Background */}
      <div className="scrolling-grid"></div>

      {/* Hero Section */}
      <section className="relative pt-2 pb-8 px-4 md:pt-8 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 px-2">
              {/* Status Badge */}
              <ScrollAnimate animation="fadeUp" delay={100}>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#FF9900]"></span>
                  <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">Open for All IITM BS Students</span>
                </div>
              </ScrollAnimate>

              {/* Typography */}
              <ScrollAnimate animation="fadeUp" delay={200}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-5 tracking-tight leading-[1]">
                  <span className="block">LEARN.</span>
                  <span className="block">BUILD.<span className="text-[#FF9900]">SCALE.</span></span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">REPEAT.</span>
                </h1>
              </ScrollAnimate>

              {/* Description */}
              <ScrollAnimate animation="fadeUp" delay={300}>
                <p className="text-base sm:text-lg md:text-xl text-black mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  A student-run cloud computing community at IIT Madras BS focused on learning, building, and scaling with AWS.
                </p>
              </ScrollAnimate>

              {/* CTA Buttons */}
              <ScrollAnimate animation="fadeUp" delay={400}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-3">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZc34TnSTzQukgBkfMGjcvXZIHgXgz0hQly-KVsbGjdxzcfw/viewform" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 bg-[#FF9900] text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2">
                      Join the Club
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </a>
                  <Link href="/events">
                    <button className="px-6 py-3 bg-white text-black font-bold rounded-lg border-2 border-gray-200 hover:border-[#FF9900] hover:text-[#FF9900] transition-all duration-300">
                      View Events
                    </button>
                  </Link>
                </div>
                <p className="text-xs text-gray-500 text-center lg:text-left mb-4">Use official IITM email ID to join</p>
              </ScrollAnimate>

            </div>

            {/* Right Slider with Social Icons below */}
            <ScrollAnimate animation="fadeRight" delay={300} className="order-1 lg:order-2 w-full flex flex-col items-center lg:pt-8">
              <HeroSlider />

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <a href="#" className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-500 hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Members", value: "900+", color: "text-orange-600" },
              { label: "Events Held", value: "10+", color: "text-blue-600" },
              { label: "Tech Sessions", value: "10+", color: "text-green-600" },
              { label: "Partners", value: "10+", color: "text-purple-600" }
            ].map((stat, i) => (
              <ScrollAnimate key={i} animation="scaleIn" delay={i * 100}>
                <div className="flex flex-col items-center justify-center text-center group cursor-default">
                  <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2 scale-100 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-black uppercase tracking-widest group-hover:text-black transition-colors">{stat.label}</div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section with Image Slider */}
      <section className="py-12 relative bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollAnimate animation="fadeUp">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-yellow-500">DO</span>
              </h2>
              <p className="text-xl text-black max-w-2xl mx-auto font-medium">
                From hackathons to workshops, explore our community activities
              </p>
            </div>
          </ScrollAnimate>

          {/* Activities Slider */}
          <ScrollAnimate animation="scaleIn" delay={200}>
            <ActivitiesSlider />
          </ScrollAnimate>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#FF9900] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollAnimate animation="fadeUp">
            <h2 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter">
              READY TO <span className="text-[#FF9900]">LAUNCH?</span>
            </h2>
          </ScrollAnimate>
          <ScrollAnimate animation="fadeUp" delay={100}>
            <p className="text-2xl text-black mb-6 font-medium max-w-2xl mx-auto">
              The cloud is waiting. Join 900+ builders, dreamers, and future architects.
            </p>
          </ScrollAnimate>
          <ScrollAnimate animation="fadeUp" delay={200}>
            <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto">
              Fill the form with your <span className="font-bold text-[#FF9900]">official IITM email ID</span> to get access to the WhatsApp group link.
            </p>
          </ScrollAnimate>
          <ScrollAnimate animation="scaleIn" delay={300}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZc34TnSTzQukgBkfMGjcvXZIHgXgz0hQly-KVsbGjdxzcfw/viewform" target="_blank" rel="noopener noreferrer">
              <button className="h-16 px-12 text-xl bg-[#25D366] text-white hover:bg-[#128C7E] font-bold rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-105 transition-transform duration-300">
                Join WhatsApp Group
              </button>
            </a>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
}
