import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-sm font-medium text-[#FF9900] mb-4 uppercase tracking-wide">About</div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
                Student-led cloud computing community
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Founded in 2023 at IIT Madras. We organize workshops, study groups, and hackathons to help students learn AWS technologies and advance their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-gray-900">What we do</h2>
            <div className="space-y-12">
              <div className="border-l-4 border-[#FF9900] pl-8">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Weekly workshops</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every week, we cover a different AWS service or concept. Recent topics include Lambda functions, DynamoDB, CI/CD with CodePipeline, and container orchestration with ECS.
                </p>
              </div>
              <div className="border-l-4 border-gray-200 pl-8">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Certification study groups</h3>
                <p className="text-gray-600 leading-relaxed">
                  Preparing for AWS certifications? Join our study groups where we go through practice questions, discuss tricky concepts, and share study strategies.
                </p>
              </div>
              <div className="border-l-4 border-gray-200 pl-8">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Hackathons & projects</h3>
                <p className="text-gray-600 leading-relaxed">
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
            <h2 className="text-3xl font-bold mb-12 text-gray-900">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Cloud Fundamentals</h3>
                <p className="text-gray-600">EC2, S3, VPC, IAM - the core services you need to know.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Serverless Computing</h3>
                <p className="text-gray-600">Build apps with Lambda, API Gateway, and DynamoDB.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Containers</h3>
                <p className="text-gray-600">Deploy with Docker, ECS, and Kubernetes (EKS).</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Machine Learning</h3>
                <p className="text-gray-600">Use SageMaker for training and deploying ML models.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">DevOps Practices</h3>
                <p className="text-gray-600">CI/CD with CodePipeline, infrastructure as code with CDK.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Security Best Practices</h3>
                <p className="text-gray-600">Learn how to secure your cloud infrastructure properly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Us</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
                className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
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
