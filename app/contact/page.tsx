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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-medium text-[#FF9900] mb-4 uppercase tracking-wide">Contact</div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Get in touch
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Questions about joining or upcoming events?
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send a Message</h2>
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Info</h2>
              <div className="space-y-5">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded">
                        <Mail className="w-5 h-5 text-gray-700" />
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
                        <MapPin className="w-5 h-5 text-gray-700" />
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
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Meet Us</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="space-y-1.5 text-gray-700 text-sm">
                        <p><strong>Thursday evenings:</strong> CSE Block</p>
                        <p><strong>Time:</strong> 6:00 PM - 8:00 PM</p>
                        <p className="text-xs text-gray-500 mt-2">Check our events page for specific room numbers</p>
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
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Common Questions</h2>
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
