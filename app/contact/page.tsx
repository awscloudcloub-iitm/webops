"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative pt-2 pb-20 px-4 md:pt-8 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-bold text-black tracking-wide uppercase">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tighter">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">TOGETHER</span>
            </h1>
            <p className="text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
              Questions about joining the revolution? We're just a message away.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={6}
                    className="mt-1.5"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#FF9900] hover:bg-[#E6890A]">
                  <Send className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Contact Info</h2>
              <div className="space-y-5">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded">
                        <Mail className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Email</CardTitle>
                        <CardDescription className="text-sm">awscloudclub@iitm.ac.in</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded">
                        <MapPin className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Location</CardTitle>
                        <CardDescription className="text-sm">
                          IIT Madras Campus<br />
                          Chennai, Tamil Nadu 600036
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-black">Meet Us</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="space-y-1.5 text-black text-sm">
                        <p><strong>Thursday evenings:</strong> CSE Block</p>
                        <p><strong>Time:</strong> 6:00 PM - 8:00 PM</p>
                        <p className="text-xs text-black mt-2">Check our events page for specific room numbers</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: "How do I join?",
                answer: "Just show up to our Thursday meetings. No registration needed - everyone's welcome.",
              },
              {
                question: "Any membership fees?",
                answer: "Nope, it's completely free for all IIT Madras students.",
              },
              {
                question: "Need prior AWS experience?",
                answer: "Not at all. We have workshops for complete beginners and advanced users.",
              },
              {
                question: "How often are events?",
                answer: "We meet weekly on Thursdays, plus occasional weekend hackathons and workshops.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{faq.question}</CardTitle>
                  <CardDescription className="text-sm">{faq.answer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
