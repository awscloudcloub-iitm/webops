import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, ExternalLink, Award, Code } from "lucide-react";
import Link from "next/link";

const awsResources = [
  {
    title: "AWS Free Tier",
    description: "Get hands-on experience with AWS platform, products, and services for free",
    url: "https://aws.amazon.com/free/",
    type: "Platform",
  },
  {
    title: "AWS Documentation",
    description: "Official AWS documentation covering all services and features",
    url: "https://docs.aws.amazon.com/",
    type: "Documentation",
  },
  {
    title: "AWS Training & Certification",
    description: "Official AWS training courses and certification paths",
    url: "https://aws.amazon.com/training/",
    type: "Training",
  },
  {
    title: "AWS Architecture Center",
    description: "Best practices, reference architectures, and diagrams",
    url: "https://aws.amazon.com/architecture/",
    type: "Architecture",
  },
];

const learningPaths = [
  {
    title: "Cloud Practitioner",
    level: "Beginner",
    description: "Start your cloud journey with foundational AWS knowledge",
    topics: ["Cloud Concepts", "AWS Services Overview", "Security & Compliance", "Pricing & Support"],
  },
  {
    title: "Solutions Architect",
    level: "Associate",
    description: "Design and deploy scalable, highly available systems on AWS",
    topics: ["Compute Services", "Storage & Databases", "Networking", "High Availability"],
  },
  {
    title: "Developer",
    level: "Associate",
    description: "Develop and maintain AWS-based applications",
    topics: ["Development Tools", "Serverless", "Containers", "Security"],
  },
  {
    title: "DevOps Engineer",
    level: "Professional",
    description: "Automate and optimize AWS infrastructure and deployments",
    topics: ["CI/CD", "Infrastructure as Code", "Monitoring", "Configuration Management"],
  },
];

const tutorials = [
  {
    title: "Building a Serverless Web Application",
    description: "Step-by-step guide to create a serverless app using Lambda, API Gateway, and DynamoDB",
    icon: Code,
  },
  {
    title: "Setting Up a VPC from Scratch",
    description: "Learn networking fundamentals by creating a custom VPC with public and private subnets",
    icon: FileText,
  },
  {
    title: "Deploying with AWS Amplify",
    description: "Host and deploy full-stack applications with AWS Amplify",
    icon: Code,
  },
  {
    title: "Introduction to AWS CloudFormation",
    description: "Automate your infrastructure with Infrastructure as Code",
    icon: FileText,
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-medium text-[#FF9900] mb-4 uppercase tracking-wide">Resources</div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Learning Resources
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Curated materials and guides for AWS learning.
            </p>
          </div>
        </div>
      </section>

      {/* AWS Official Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Official AWS Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {awsResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Certification Paths</h2>
            <p className="text-gray-600 max-w-2xl">
              Study paths for AWS certifications. Join our study groups if you're preparing for exams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {learningPaths.map((path, index) => (
              <Card key={index}>
                <CardHeader>
                  <Badge variant={
                    path.level === "Beginner" ? "default" : "secondary"
                  }>
                    {path.level}
                  </Badge>
                  <CardTitle className="text-lg mt-2">{path.title}</CardTitle>
                  <CardDescription className="text-sm">{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2 text-xs text-gray-700">Topics:</h4>
                  <ul className="space-y-1">
                    {path.topics.map((topic, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-[#FF9900] mr-1.5">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {tutorials.map((tutorial, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded">
                    <tutorial.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{tutorial.title}</CardTitle>
                    <CardDescription className="text-sm">{tutorial.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
