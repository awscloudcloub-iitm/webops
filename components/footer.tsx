import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AWS</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">AWS Cloud Club</div>
                <div className="text-xs">IIT Madras</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Empowering students in cloud computing, AI, ML, and DevOps through 
              hands-on experience, expert-led workshops, and industry-focused projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-orange-400 transition-colors">Team</Link></li>
              <li><Link href="/events" className="hover:text-orange-400 transition-colors">Events</Link></li>
              <li><Link href="/blogs" className="hover:text-orange-400 transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <Link href="/contact" className="text-sm hover:text-orange-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AWS Cloud Club IIT Madras. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
