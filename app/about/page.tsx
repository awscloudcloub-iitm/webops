import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative pt-2 pb-20 px-4 md:pt-8 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-bold text-black tracking-wide uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tighter">
              STUDENT-LED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">REVOLUTION</span>
            </h1>
            <p className="text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
              Founded in 2023 at IIT Madras. We organize workshops, study groups, and hackathons to help students learn AWS technologies and advance their careers.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-black">What we do</h2>
            <div className="space-y-12">
              <div className="border-l-4 border-[#FF9900] pl-8">
                <h3 className="text-xl font-medium mb-3 text-black">Weekly workshops</h3>
                <p className="text-black leading-relaxed">
                  Every week, we cover a different AWS service or concept. Recent topics include Lambda functions, DynamoDB, CI/CD with CodePipeline, and container orchestration with ECS.
                </p>
              </div>
              <div className="border-l-4 border-gray-200 pl-8">
                <h3 className="text-xl font-medium mb-3 text-black">Certification study groups</h3>
                <p className="text-black leading-relaxed">
                  Preparing for AWS certifications? Join our study groups where we go through practice questions, discuss tricky concepts, and share study strategies.
                </p>
              </div>
              <div className="border-l-4 border-gray-200 pl-8">
                <h3 className="text-xl font-medium mb-3 text-black">Hackathons & projects</h3>
                <p className="text-black leading-relaxed">
                  We organize monthly hackathons where teams build full applications on AWS. Past projects include serverless APIs, ML-powered chatbots, and data pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-black">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="font-semibold mb-2 text-black">Cloud Fundamentals</h3>
                <p className="text-black">EC2, S3, VPC, IAM - the core services you need to know.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Serverless Computing</h3>
                <p className="text-black">Build apps with Lambda, API Gateway, and DynamoDB.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Containers</h3>
                <p className="text-black">Deploy with Docker, ECS, and Kubernetes (EKS).</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Machine Learning</h3>
                <p className="text-black">Use SageMaker for training and deploying ML models.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">DevOps Practices</h3>
                <p className="text-black">CI/CD with CodePipeline, infrastructure as code with CDK.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Security Best Practices</h3>
                <p className="text-black">Learn how to secure your cloud infrastructure properly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Join Us</h2>
            <p className="text-xl text-black mb-8 leading-relaxed">
              Whether you're completely new to cloud or already have some experience, you're welcome here. We meet every Thursday evening in the CSE block.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#FF9900] px-8 text-sm font-medium text-white hover:bg-[#E6890A] transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/events"
                className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-black hover:bg-gray-50 transition-colors"
              >
                See Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
