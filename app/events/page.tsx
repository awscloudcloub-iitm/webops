import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Youtube, Github } from "lucide-react";

const upcomingEvents = [
  {
    title: "Agentic AI with AWS",
    date: "January 2026",
    time: "TBD",
    location: "Online",
    type: "Workshop",
    attendees: 500,
    description: "Deep dive into building autonomous agents using AWS Bedrock and Amazon Q.",
  },
  {
    title: "Machine Learning with AWS",
    date: "January 2026",
    time: "TBD",
    location: "Online",
    type: "Workshop",
    attendees: 500,
    description: "Comprehensive session on ML pipelines, SageMaker, and deploying models on AWS.",
  },
];

const pastEvents = [
  {
    title: "Hands on Workshop: Build with Amazon Q CLI & Amazon Bedrock",
    date: "August 23, 2025",
    type: "Workshop",
    attendees: 117,
    description: "Master GenAI with Amazon Q CLI. Explore real-world use cases and practice live with experts.",
    host: "Sujit Laware",
    speaker: "Danny Chan",
    speakerRole: "AWS Community Day Ambassador",
    videoLink: "https://www.youtube.com/watch?v=4lCMV4Tkpgw",
  },
  {
    title: "Build Applications with Amazon Bedrock, Agents & Strands",
    date: "August 19, 2025",
    type: "Workshop",
    attendees: 50,
    description: "Build agentic AI applications with Amazon Bedrock. Learn about foundation models, AI agents, and Strands live.",
    host: "Sujit Laware",
    speaker: "Shubham Londhe",
    speakerRole: "Developer Advocate @AWS",
    videoLink: "https://www.youtube.com/watch?v=Fb7nzQ36SnQ&pp=0gcJCU0KAYcqIYzv",
  },
  {
    title: "CLOUD 101: Your Gateway to AWS",
    date: "April 6, 2025",
    type: "Webinar",
    attendees: 65,
    description: "Kickstart your cloud journey. Learn AWS core services, pricing models, architecture basics, and career opportunities.",
    host: "Sujit Laware",
    speaker: "Indranil Bhattacharyya",
    speakerRole: "Data Scientist, RNTBCI",
    videoLink: "https://www.youtube.com/watch?v=Vvkz0AYrYHE",
  },
  {
    title: "AWS DeepRacer Virtual Race March'25 Edition",
    date: "March 9, 2025",
    type: "Competition",
    attendees: 22,
    description: "Thrilling autonomous racing competition testing skills in designing and training reinforcement learning models.",
    host: "Indranil B. & Sujit L.",
    speaker: null,
  },
  {
    title: "AWS Exam Slam - Cloud Practitioner",
    date: "December 10, 2024",
    type: "Webinar",
    attendees: 100,
    description: "Kickstarted cloud journeys with an exam overview, tips from experts, and a challenge to win 100% discount vouchers.",
    host: "Indranil B.",
    speaker: null,
  },
  {
    title: "AWS DeepRacer Virtual Race Sep'24",
    date: "September 22, 2024",
    type: "Competition",
    attendees: 33,
    description: "Thrilling autonomous racing competition using reinforcement learning models on the AWS DeepRacer simulator.",
    host: "Indranil B.",
    speaker: null,
  },
  {
    title: "AWS DeepRacer Virtual Race May'24",
    date: "May 5, 2024",
    type: "Competition",
    attendees: 9,
    description: "Hands-on machine learning competition where students designed and trained self-driving car models.",
    host: "Indranil B.",
    speaker: null,
  },
  {
    title: "AWS Cloud Club Orientation Session",
    date: "January 14, 2024",
    type: "Keynote",
    attendees: 14,
    description: "Inaugural session featuring Stephen Howell from AWS Academic Advocacy, exploring cloud services and club roadmap.",
    videoLink: "https://www.youtube.com/live/omqduizJyiM?si=8oj9EdBRSLsXQamX",
    host: "Indranil B.",
    speaker: "Stephen Howell",
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative pt-2 pb-20 px-4 md:pt-8 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-bold text-black tracking-wide uppercase">Community Events</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tighter">
              WORKSHOPS & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">LEARNING</span>
            </h1>
            <p className="text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
              Level up your skills. From "Hello World" to deploying serverless architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black">Coming Up</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{event.type}</Badge>
                    <div className="flex items-center gap-1 text-sm text-black">
                      <Users size={16} />
                      <span>{event.attendees} spots</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-black text-sm">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-black text-sm">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-black text-sm">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#FF9900] hover:bg-[#E6890A]">
                    Register
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">{event.type}</Badge>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 text-black">
                    <Calendar size={18} />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <Users size={18} />
                    <span className="font-medium">{event.attendees} attendees</span>
                  </div>
                  {/* @ts-ignore */}
                  {event.host && (
                    <div className="text-sm text-gray-600 mt-2">
                      <span className="font-bold text-black">Host:</span> {event.host}
                    </div>
                  )}
                  {/* @ts-ignore */}
                  {event.speaker && (
                    <div className="text-sm text-gray-600">
                      <span className="font-bold text-black">Speaker:</span> {event.speaker}
                      {/* @ts-ignore */}
                      {event.speakerRole && <div className="text-xs text-gray-500">{event.speakerRole}</div>}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {/* @ts-ignore */}
                    {event.videoLink && (
                      <Button variant="outline" size="sm" className="flex-1 hover:bg-red-50 hover:border-red-300 group" asChild>
                        {/* @ts-ignore */}
                        <a href={event.videoLink} target="_blank" rel="noopener noreferrer">
                          <Youtube size={20} className="mr-2 text-red-600 group-hover:text-red-700" />
                          <span className="text-black group-hover:text-red-700">Recording</span>
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-gray-50 hover:border-gray-400 group">
                      <Github size={20} className="mr-2 text-black group-hover:text-black" />
                      <span className="text-black group-hover:text-black">Resources</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
