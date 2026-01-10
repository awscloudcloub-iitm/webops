import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, ExternalLink, Award, Code } from "lucide-react";
import Link from "next/link";

const awsResources = [
  {
    title: "AWS Builder Center",
    description: "Central hub for AWS builders with tutorials, sample code, and hands-on learning",
    url: "https://aws.amazon.com/builders/",
    type: "Platform",
  },
  {
    title: "AWS Skill Builder",
    description: "Free and paid digital training courses to build your cloud skills on-demand",
    url: "https://skillbuilder.aws/",
    type: "Training",
  },
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
    title: "Cloud Engineer",
    role: "Cloud Engineer",
    color: "#FF9900",
    description: "Build and manage cloud infrastructure on AWS",
    certifications: [
      { name: "Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { name: "Solutions Architect Associate", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
      { name: "SysOps Administrator Associate", url: "https://aws.amazon.com/certification/certified-sysops-admin-associate/" },
      { name: "Solutions Architect Professional", url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/" },
    ],
    skills: ["EC2", "VPC", "S3", "IAM", "CloudFormation"],
  },
  {
    title: "AI/ML Engineer",
    role: "AI/ML Engineer",
    color: "#8B5CF6",
    description: "Build intelligent applications with AWS AI/ML services",
    certifications: [
      { name: "Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { name: "AI Practitioner", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" },
      { name: "Machine Learning Engineer Associate", url: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/" },
      { name: "Machine Learning Specialty", url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/" },
    ],
    skills: ["SageMaker", "Bedrock", "Rekognition", "Comprehend", "Lex"],
  },
  {
    title: "DevOps Engineer",
    role: "DevOps Engineer",
    color: "#22C55E",
    description: "Automate deployments and manage CI/CD pipelines",
    certifications: [
      { name: "Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { name: "Developer Associate", url: "https://aws.amazon.com/certification/certified-developer-associate/" },
      { name: "SysOps Administrator Associate", url: "https://aws.amazon.com/certification/certified-sysops-admin-associate/" },
      { name: "DevOps Engineer Professional", url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/" },
    ],
    skills: ["CodePipeline", "CodeBuild", "ECS", "EKS", "CloudWatch"],
  },
  {
    title: "Data Engineer",
    role: "Data Engineer",
    color: "#3B82F6",
    description: "Design and build data pipelines and analytics solutions",
    certifications: [
      { name: "Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { name: "Data Engineer Associate", url: "https://aws.amazon.com/certification/certified-data-engineer-associate/" },
      { name: "Database Specialty", url: "https://aws.amazon.com/certification/certified-database-specialty/" },
      { name: "Data Analytics Specialty", url: "https://aws.amazon.com/certification/certified-data-analytics-specialty/" },
    ],
    skills: ["Glue", "Redshift", "Athena", "Kinesis", "RDS"],
  },
  {
    title: "Security Engineer",
    role: "Security Engineer",
    color: "#EF4444",
    description: "Secure AWS workloads and implement compliance",
    certifications: [
      { name: "Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { name: "Solutions Architect Associate", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
      { name: "SysOps Administrator Associate", url: "https://aws.amazon.com/certification/certified-sysops-admin-associate/" },
      { name: "Security Specialty", url: "https://aws.amazon.com/certification/certified-security-specialty/" },
    ],
    skills: ["GuardDuty", "Security Hub", "KMS", "WAF", "Shield"],
  },
  {
    title: "Full Stack Developer",
    role: "Full Stack Developer",
    color: "#EC4899",
    description: "Build end-to-end applications using AWS services",
    certifications: [
      { name: "Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { name: "Developer Associate", url: "https://aws.amazon.com/certification/certified-developer-associate/" },
      { name: "Solutions Architect Associate", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
    ],
    skills: ["Amplify", "Lambda", "API Gateway", "DynamoDB", "Cognito"],
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
    <div className="flex flex-col pt-20 bg-white">
      {/* Scrolling Grid Background */}
      <div className="scrolling-grid"></div>

      {/* Hero Section */}
      <section className="relative pt-2 pb-10 px-4 md:pt-8 md:pb-12 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-bold text-black tracking-wide uppercase">Resources</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tighter">
              LEARNING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">MATERIALS</span>
            </h1>
            <p className="text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
              Curated guides, documentation, and paths to master AWS.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Paths - Roadmap Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Certification Roadmaps</h2>
            <p className="text-black max-w-2xl">
              Choose your target role and follow the certification roadmap to become job-ready.
            </p>
          </div>
          <div className="space-y-6 max-w-7xl">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border-2 border-[#FF9900] bg-white hover:shadow-xl transition-all duration-300"
              // style={{ borderColor: `${path.color}30` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Role Badge & Title */}
                  <div className="flex items-center gap-4 lg:w-64 flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: path.color }}
                    >
                      {path.title.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">{path.title}</h3>
                      <p className="text-xs text-gray-500">{path.description}</p>
                    </div>
                  </div>

                  {/* Roadmap Arrow */}
                  <div className="hidden lg:flex items-center text-gray-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  {/* Certification Roadmap */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      {path.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 bg-white hover:shadow-lg transition-all duration-300"
                            style={{
                              borderColor: path.color,
                              color: path.color
                            }}
                          >
                            <span
                              className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                              style={{ backgroundColor: path.color }}
                            >
                              {idx + 1}
                            </span>
                            <span className="text-sm font-semibold">{cert.name}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          {idx < path.certifications.length - 1 && (
                            <div className="flex items-center text-gray-300">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="lg:w-auto flex-shrink-0">
                    <div className="flex flex-wrap gap-1.5">
                      {path.skills.slice(0, 4).map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-1 rounded font-mono bg-gray-100 text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                      {path.skills.length > 4 && (
                        <span className="text-[10px] px-2 py-1 rounded font-mono bg-gray-100 text-gray-400">
                          +{path.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Official Resources */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black">Official AWS Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
            {awsResources.map((resource, index) => (
              <Card key={index} className="border-2 border-[#FF9900] hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <ExternalLink size={16} className="text-black" />
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

      {/* Tutorials */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black">Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="border-2 border-[#FF9900] hover:shadow-lg transition-all">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded">
                    <tutorial.icon className="w-5 h-5 text-black" />
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
