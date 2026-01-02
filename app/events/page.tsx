import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Youtube, Github } from "lucide-react";

const upcomingEvents = [

  {
    title: "Cloud Security Best Practices",
    date: "December 22, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Online",
    type: "Webinar",
    attendees: 100,
    description: "Expert session on securing your AWS infrastructure with IAM, VPC, and security groups.",
  },
  {
    title: "Serverless Architecture Hackathon",
    date: "January 10, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "BSB Building, IIT Madras",
    type: "Hackathon",
    attendees: 80,
    description: "24-hour hackathon focused on building serverless applications using AWS Lambda and API Gateway.",
  },
];

const pastEvents = [
  {
    title: "Introduction to AWS Cloud",
    date: "November 5, 2025",
    type: "Workshop",
    attendees: 60,
    description: "Introductory workshop covering AWS basics and account setup.",
  },
  {
    title: "Machine Learning on AWS",
    date: "October 20, 2025",
    type: "Workshop",
    attendees: 45,
    description: "Hands-on session with Amazon SageMaker and ML services.",
  },
  {
    title: "DevOps with AWS",
    date: "October 10, 2025",
    type: "Workshop",
    attendees: 55,
    description: "CI/CD pipelines using AWS CodePipeline and CodeDeploy.",
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

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-red-50 hover:border-red-300 group">
                      <Youtube size={20} className="mr-2 text-red-600 group-hover:text-red-700" />
                      <span className="text-black group-hover:text-red-700">Recording</span>
                    </Button>
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
