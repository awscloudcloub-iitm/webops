"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const teams = {
  "2025-26": {
    leadership: [
      {
        name: "Sujit Laware",
        role: "Captain / Secretary",
        description: "Leading the club's vision and strategic initiatives",
        avatar: "",
        initials: "SL",
      },
      {
        name: "Tarun Gangwar",
        role: "Deputy Secretary",
        description: "Supporting leadership and club operations",
        avatar: "",
        initials: "TG",
      },
      {
        name: "Tanushree Dey",
        role: "Graphics & Multimedia",
        description: "Creating visual content and multimedia materials",
        avatar: "",
        initials: "TD",
      },
      {
        name: "ANKIT KUMAR .",
        role: "WebOps",
        description: "Managing web operations and digital platforms",
        avatar: "",
        initials: "AK",
      },
      {
        name: "Shubhanshu Mishra",
        role: "Public Relations Lead",
        description: "Managing external communications and partnerships",
        avatar: "",
        initials: "SM",
      },
      {
        name: "Riya Saini",
        role: "Graphics & Design",
        description: "Designing visual elements and brand materials",
        avatar: "",
        initials: "RS",
      },
      {
        name: "Parth Chitranshi",
        role: "Event Coordinator",
        description: "Organizing and coordinating club events",
        avatar: "",
        initials: "PC",
      },
    ],
    coreTeam: [],
  },
  "2024-25": {
    leadership: [
      {
        name: "INDRANIL BHATACHARYA",
        role: "Captain / Secretary",
        description: "Led successful expansion of club activities",
        avatar: "",
        initials: "IB",
      },
      {
        name: "Sujit Laware",
        role: "Deputy Secretary",
        description: "Supported leadership and strategic planning",
        avatar: "",
        initials: "SL",
      },
    ],
    coreTeam: [
      { name: "Rahul P", role: "DevOps Lead", initials: "RP" },
      { name: "Lakshmi V", role: "AI/ML Lead", initials: "LV" },
      { name: "Nikhil B", role: "Cloud Architecture Lead", initials: "NB" },
      { name: "Pooja M", role: "Community Manager", initials: "PM" },
      { name: "Aman K", role: "Design Lead", initials: "AK" },
      { name: "Shreya L", role: "Web Dev Lead", initials: "SL" },
    ],
  },
};

export default function TeamPage() {
  const [selectedYear, setSelectedYear] = useState<"2025-26" | "2024-25">("2025-26");
  const currentTeam = teams[selectedYear];

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative pt-2 pb-20 px-4 md:pt-8 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-bold text-black tracking-wide uppercase">The Squad</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tighter">
              MEET THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">FUTURE</span>
            </h1>
            <p className="text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
              Passionate students building the next generation of cloud architects and engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Year Selection */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <Button
              variant={selectedYear === "2025-26" ? "default" : "outline"}
              onClick={() => setSelectedYear("2025-26")}
              className={selectedYear === "2025-26" ? "bg-[#FF9900] hover:bg-[#E6890A]" : ""}
            >
              2025-26
            </Button>
            <Button
              variant={selectedYear === "2024-25" ? "default" : "outline"}
              onClick={() => setSelectedYear("2024-25")}
              className={selectedYear === "2024-25" ? "bg-[#FF9900] hover:bg-[#E6890A]" : ""}
            >
              2024-25
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {currentTeam.leadership.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-orange-400 to-blue-400 text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2 mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>{member.description}</CardDescription>
                  <div className="flex justify-center gap-3 mt-4">
                    <a href="#" className="text-black hover:text-[#FF9900] transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-black hover:text-[#FF9900] transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-black hover:text-[#FF9900] transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team - Only show when there are core team members */}
      {currentTeam.coreTeam && currentTeam.coreTeam.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {currentTeam.coreTeam.map((member: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-gradient-to-br from-orange-300 to-blue-300 text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-sm">{member.role}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join the Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-lg text-black mb-8">
              We're always looking for passionate students who want to contribute to the AWS Cloud Club
              community. Whether you're interested in organizing events, creating content, or leading
              technical workshops, there's a place for you!
            </p>
            <Card className="bg-gradient-to-br from-orange-50 to-blue-50 border-2 border-orange-200">
              <CardContent className="pt-6">
                <p className="text-black mb-4">
                  Recruitment announcements are made at the beginning of each semester.
                  Follow us on social media to stay updated!
                </p>
                <div className="flex justify-center gap-4">
                  <Badge className="bg-[#FF9900] hover:bg-[#E6890A]">Applications Open Soon</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
