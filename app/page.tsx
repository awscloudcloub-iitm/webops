import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Calendar, Award, Code, Youtube, Instagram, Github, Terminal, Cloud, Database, Cpu, Linkedin } from "lucide-react";

import HeroSlider from "@/components/hero-slider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 overflow-x-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF9900]/10 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-purple-100 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-2 pb-20 px-4 md:pt-8 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left z-10 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#FF9900] animate-pulse"></span>
                <span className="text-sm font-bold text-black tracking-wide uppercase">JOIN NOW</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tighter leading-[0.9]">
                LEARN. BUILD.
                <span className="text-[#FF9900]">SCALE.</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">REPEAT.</span>

              </h1>

              <p className="text-xl text-black mb-8 max-w-lg font-medium leading-relaxed">
                AWS Cloud Club IIT Madras is a student-run cloud computing community at IIT Madras BS focused on learning, building, and scaling with AWS.              </p>

              <div className="flex items-center gap-6 text-black pt-2">
                <Github className="w-8 h-8 hover:text-[#FF9900] transition-colors cursor-pointer" />
                <Instagram className="w-8 h-8 hover:text-[#FF9900] transition-colors cursor-pointer" />
                <Youtube className="w-8 h-8 hover:text-[#FF9900] transition-colors cursor-pointer" />
                <Linkedin className="w-8 h-8 hover:text-[#FF9900] transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Right Slider (Visual Stack) */}
            <div className="order-1 md:order-2 w-full flex justify-center">
              <HeroSlider />
            </div>
          </div>


        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Members", value: "200+", color: "text-orange-600" },
              { label: "Events Held", value: "30+", color: "text-blue-600" },
              { label: "Tech Sessions", value: "25+", color: "text-green-600" },
              { label: "Partners", value: "10+", color: "text-purple-600" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center group cursor-default">
                <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2 scale-100 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-black uppercase tracking-widest group-hover:text-black transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Holographic Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-yellow-500">DIFFERENT</span>
              </h2>
              <p className="text-xl text-black max-w-xl font-medium">
                We don't just learn theory. We ship code, deploy infrastructure, and break things (in a safe environment).
              </p>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FF9900]/50 to-transparent mb-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-[#FF9900] shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Calendar size={120} className="text-black" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#FF9900]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-7 h-7 text-[#FF9900]" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Workshops</h3>
                <p className="text-black leading-relaxed mb-6 font-medium">
                  Weekly deep-dives into EC2, Lambda, S3, and more. Laptop required, coffee provided.
                </p>
                <div className="flex items-center text-[#FF9900] font-bold text-sm tracking-wide uppercase group-hover:translate-x-2 transition-transform cursor-pointer">
                  See Schedule <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users size={120} className="text-black" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Study Groups</h3>
                <p className="text-black leading-relaxed mb-6 font-medium">
                  Crush your AWS certifications with peer learning. From Cloud Practitioner to Solutions Architect.
                </p>
                <div className="flex items-center text-blue-600 font-bold text-sm tracking-wide uppercase group-hover:translate-x-2 transition-transform cursor-pointer">
                  Join a Squad <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code size={120} className="text-black" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Hackathons</h3>
                <p className="text-black leading-relaxed mb-6 font-medium">
                  24-hour sprints to build serverless apps, AI bots, and cloud-native solutions. Win big.
                </p>
                <div className="flex items-center text-purple-600 font-bold text-sm tracking-wide uppercase group-hover:translate-x-2 transition-transform cursor-pointer">
                  Start Hacking <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks - Bento Grid Style */}
      <section className="py-24 bg-gray-50/50 backdrop-blur-3xl">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6">CHOOSE YOUR <span className="text-[#FF9900]">PATH</span></h2>
            <p className="text-black max-w-2xl mx-auto text-lg font-medium">Multiple tracks designed to take you from hello world to production ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cloud Computing */}
            <div className="col-span-1 lg:col-span-2 p-8 rounded-3xl bg-white border border-gray-200 hover:border-[#FF9900] hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 rounded-full bg-[#FF9900]/10 text-[#FF9900]">
                  <Cloud size={32} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF9900]/10 text-[#FF9900] uppercase tracking-wider">Core</span>
              </div>
              <h3 className="text-3xl font-black text-black mb-4 group-hover:text-[#FF9900] transition-colors">Cloud Computing</h3>
              <p className="text-black mb-6 text-lg font-medium">Master the fundamentals of the internet. EC2, VPCs, and storage solutions that power 70% of the web.</p>
              <div className="flex flex-wrap gap-2">
                {['EC2', 'S3', 'Lambda', 'Terraform'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-gray-100 text-black text-sm font-mono border border-gray-200">{tag}</span>
                ))}
              </div>
            </div>

            {/* Other tracks */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Cpu size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-black text-black mb-4 group-hover:text-blue-600 transition-colors">AI & ML</h3>
              <p className="text-black mb-6 font-medium">Train models on SageMaker. Deploy LLMs. Build smart apps.</p>
              <div className="flex flex-wrap gap-2">
                {['SageMaker', 'Bedrock', 'Python'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-gray-100 text-black text-sm font-mono border border-gray-200">{tag}</span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-green-600 hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <Terminal size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-black text-black mb-4 group-hover:text-green-600 transition-colors">DevOps</h3>
              <p className="text-black mb-6 font-medium">CI/CD, Containers, and Automation. Make deployment boring.</p>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'K8s', 'Jenkins'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-gray-100 text-black text-sm font-mono border border-gray-200">{tag}</span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 p-8 rounded-3xl bg-white border border-gray-200 hover:border-purple-600 hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <Award size={32} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-600 uppercase tracking-wider">Certifications</span>
              </div>
              <h3 className="text-3xl font-black text-black mb-4 group-hover:text-purple-600 transition-colors">Certification Prep</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <p className="text-black text-lg flex-1 font-medium">Guided paths for Cloud Practitioner, Solutions Architect, and Developer Associate exams. We pay for your practice tests.</p>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-100 -ml-4 md:ml-0">
                  View Study Guides <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Glitch Effect */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#FF9900] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter">
            READY TO <span className="text-[#FF9900]">LAUNCH?</span>
          </h2>
          <p className="text-2xl text-black mb-12 font-medium max-w-2xl mx-auto">
            The cloud is waiting. Join 200+ builders, dreamers, and future architects.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl bg-[#232F3E] text-white hover:bg-black font-bold rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300">
            <Link href="/contact">Join Discord Server</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
