"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/events", label: "Events" },
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-[#232F3E] backdrop-blur-md border-b border-gray-700/50 shadow-lg font-sans">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF9900] blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <Image
                src="/aws-logo.jpg"
                alt="AWS Cloud Club IIT Madras"
                width={45}
                height={45}
                className="rounded-full relative z-10 border-2 border-transparent group-hover:border-[#FF9900] transition-all"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-white tracking-tight leading-none group-hover:text-[#FF9900] transition-colors">AWS CLOUD CLUB</span>
              <span className="text-[10px] font-medium text-gray-300 tracking-[0.2em] uppercase leading-none mt-1 group-hover:text-white transition-colors">IIT Madras</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-[#FF9900] transition-colors group overflow-hidden tracking-wide"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF9900] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 delay-75"></span>
              </Link>
            ))}

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZc34TnSTzQukgBkfMGjcvXZIHgXgz0hQly-KVsbGjdxzcfw/viewform" target="_blank" rel="noopener noreferrer">
              <Button className="ml-4 bg-[#FF9900] hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full border-none shadow-[0_4px_14px_0_rgba(255,153,0,0.4)] hover:shadow-[0_6px_20px_rgba(255,153,0,0.5)] hover:scale-105 transition-all duration-300">
                Join Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#FF9900] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#232F3E] border-b border-gray-700 p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg border-l-2 border-transparent hover:border-[#FF9900] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZc34TnSTzQukgBkfMGjcvXZIHgXgz0hQly-KVsbGjdxzcfw/viewform" target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                <Button className="w-full bg-[#FF9900] hover:bg-orange-600 text-white font-medium rounded-full shadow-[0_4px_14px_0_rgba(255,153,0,0.4)]">
                  Join Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
