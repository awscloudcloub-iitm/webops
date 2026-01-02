import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogsPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative pt-2 pb-20 px-4 md:pt-8 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-bold text-black tracking-wide uppercase">Engineering Blog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tighter">
              TECHNICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">INSIGHTS</span>
            </h1>
            <p className="text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
              Tutorials and deep dives from our community. Learn how to build on the cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-black">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-4 text-xs text-black">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full text-sm" asChild>
                    <Link href={`/blogs/${post.id}`}>
                      Read Article →
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
