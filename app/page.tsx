import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Calendar, Award, Code, Youtube, Instagram, Github, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-medium text-[#FF9900] mb-4 uppercase tracking-wide">Student Community</div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight mt-2">
                  <span className="font-black uppercase">AWS CLOUD CLUB</span>
                  <span className="block font-black uppercase mt-2 text-4xl md:text-5xl">IIT MADRAS</span>
                </h1>
                <p className="text-xl text-white mb-8 leading-relaxed font-normal">
                  Learn cloud computing through hands-on workshops, certification prep, and real-world projects.
                </p>
                
                {/* Social Media Links */}
                <div className="mb-8">
                  <div className="flex gap-4">
                    <a href="#" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 transform hover:scale-110">
                      <Youtube size={24} className="text-red-500 group-hover:text-red-400" />
                    </a>
                    <a href="#" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 transform hover:scale-110">
                      <Instagram size={24} className="text-pink-500 group-hover:text-pink-400" />
                    </a>
                    <a href="#" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 transform hover:scale-110">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">m</span>
                      </div>
                    </a>
                    <a href="#" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 transform hover:scale-110">
                      <Github size={24} className="text-white group-hover:text-gray-300" />
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button size="lg" className="bg-[#FF9900] hover:bg-[#E6890A] text-black font-medium px-8" asChild>
                    <Link href="/events">View Events</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-gray-900 font-medium" asChild>
                    <Link href="/contact">Join Us</Link>
                  </Button>
                </div>
              </div>
              
              {/* Right Stats - Keep the new design */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-gradient-to-br from-white/90 to-orange-50/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200/50">
                      <div className="text-center space-y-2">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FF9900] to-orange-600 bg-clip-text text-transparent">200+</div>
                        <div className="text-sm font-medium text-gray-700">Active Members</div>
                      </div>
                    </div>
                    
                    <div className="group bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200/50">
                      <div className="text-center space-y-2">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#146EB4] to-blue-600 bg-clip-text text-transparent">30+</div>
                        <div className="text-sm font-medium text-gray-700">Events Held</div>
                      </div>
                    </div>
                    
                    <div className="group bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200/50">
                      <div className="text-center space-y-2">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#7AA116] to-green-600 bg-clip-text text-transparent">25+</div>
                        <div className="text-sm font-medium text-gray-700">Tech Sessions</div>
                      </div>
                    </div>
                    
                    <div className="group bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200/50">
                      <div className="text-center space-y-2">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#9146FF] to-purple-600 bg-clip-text text-transparent">10+</div>
                        <div className="text-sm font-medium text-gray-700">Industry Partners</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">What we do</h2>
              <p className="text-lg text-black max-w-2xl mx-auto">We help students learn AWS through practical, hands-on experiences.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Calendar className="w-8 h-8 text-[#FF9900] mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Weekly Workshops</h3>
                  <p className="text-black leading-relaxed">
                    Hands-on sessions covering AWS services from basics to advanced topics.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Users className="w-8 h-8 text-[#FF9900] mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Study Groups</h3>
                  <p className="text-black leading-relaxed">
                    Collaborative preparation for AWS certification exams with peer support.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Code className="w-8 h-8 text-[#FF9900] mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Hackathons</h3>
                  <p className="text-black leading-relaxed">
                    Build real applications using AWS services in competitive environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Learning Tracks
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#FF9900] pl-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Cloud Computing</h3>
                <p className="text-black mb-4">
                  Learn AWS fundamentals, architecture patterns, and cloud-native development through practical workshops.
                </p>
                <ul className="space-y-2 text-black">
                  <li>• EC2, S3, RDS basics</li>
                  <li>• VPC and networking</li>
                  <li>• Serverless with Lambda</li>
                  <li>• Infrastructure as Code</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Machine Learning</h3>
                <p className="text-black mb-4">
                  Explore AWS ML services and build intelligent applications with hands-on projects.
                </p>
                <ul className="space-y-2 text-black">
                  <li>• SageMaker fundamentals</li>
                  <li>• ML model deployment</li>
                  <li>• Computer vision with Rekognition</li>
                  <li>• NLP with Comprehend</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">DevOps & Automation</h3>
                <p className="text-black mb-4">
                  Master CI/CD pipelines, container orchestration, and infrastructure automation.
                </p>
                <ul className="space-y-2 text-black">
                  <li>• CodePipeline & CodeBuild</li>
                  <li>• Docker & ECS/EKS</li>
                  <li>• CloudFormation & Terraform</li>
                  <li>• Monitoring with CloudWatch</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Certification Prep</h3>
                <p className="text-black mb-4">
                  Study groups and resources for AWS certification exams.
                </p>
                <ul className="space-y-2 text-black">
                  <li>• Cloud Practitioner</li>
                  <li>• Solutions Architect Associate</li>
                  <li>• Developer Associate</li>
                  <li>• Weekly study sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#232F3E] via-slate-800 to-gray-800 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9900]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Ready to start learning?</h2>
            <p className="text-xl mb-8 text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
              Join our community and accelerate your cloud computing journey with hands-on AWS experience.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#FF9900] to-orange-600 hover:from-orange-600 hover:to-[#FF9900] text-black font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" asChild>
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
