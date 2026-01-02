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
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF9900] blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <Image
                src="/logo.jpg"
                alt="AWS Cloud Club IIT Madras"
                width={45}
                height={45}
                className="rounded-full relative z-10 border-2 border-transparent group-hover:border-[#FF9900] transition-all"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-black tracking-tight leading-none group-hover:text-[#FF9900] transition-colors">AWS CLOUD CLUB</span>
              <span className="text-[10px] font-bold text-black tracking-[0.2em] uppercase leading-none mt-1 group-hover:text-black transition-colors">IIT Madras</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold text-black hover:text-black transition-colors group overflow-hidden"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-md"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF9900] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 delay-75"></span>
              </Link>
            ))}

            <Button className="ml-4 bg-[#232F3E] hover:bg-[#2c3e50] text-white font-bold border-none shadow-[0_4px_14px_0_rgba(35,47,62,0.39)] hover:shadow-[0_6px_20px_rgba(35,47,62,0.23)] transition-all">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-[#FF9900] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-bold text-black hover:text-black hover:bg-gray-50 rounded-lg border-l-2 border-transparent hover:border-[#FF9900] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-[#232F3E] text-white font-bold">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
