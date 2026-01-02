import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-100 pt-20 pb-10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#FF9900] to-transparent opacity-30 shadow-[0_0_20px_#FF9900]"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <img
                  src="/logo.jpg"
                  alt="AWS Cloud Club IIT Madras"
                  className="w-12 h-12 rounded-full border-2 border-transparent group-hover:border-[#FF9900] transition-all object-cover"
                />
              </div>
              <div>
                <div className="font-black text-black text-xl tracking-tight leading-none group-hover:text-[#FF9900] transition-colors">AWS CLOUD CLUB</div>
                <div className="text-xs font-bold text-black tracking-[0.2em] uppercase leading-none mt-1">IIT Madras</div>
              </div>
            </Link>
            <p className="text-black max-w-md leading-relaxed font-medium">
              Empowering the next generation of cloud architects. We build, deploy, and scale together.
              Join the revolution at IIT Madras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-black mb-6 text-lg">Menu</h3>
            <ul className="space-y-4">
              {['About Us', 'Team', 'Events', 'Blogs'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-black hover:text-[#FF9900] transition-colors flex items-center group font-medium">
                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-[#FF9900] mr-0 group-hover:mr-2">/</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-black mb-6 text-lg">Socials</h3>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#FF9900] hover:text-white hover:scale-110 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#1DA1F2] hover:text-white hover:scale-110 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
            <Link href="/contact" className="text-[#FF9900] font-bold hover:text-black transition-colors uppercase tracking-widest text-sm border-b-2 border-[#FF9900] hover:border-gray-900 pb-1">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black font-medium">
          <p>&copy; {new Date().getFullYear()} AWS Cloud Club IITM. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
