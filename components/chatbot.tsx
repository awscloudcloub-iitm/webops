"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hello! 👋 I'm the AWS Cloud Club assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simple bot responses
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase());
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
    }, 500);

    setInput("");
  };

  const getBotResponse = (input: string): string => {
    if (input.includes("event") || input.includes("workshop")) {
      return "We host regular workshops and events! Check out our Events page to see upcoming sessions on AWS, AI/ML, and DevOps. Would you like to know more about any specific event?";
    } else if (input.includes("join") || input.includes("member")) {
      return "Joining AWS Cloud Club is easy! We welcome all IIT Madras students. Follow us on social media and attend our events to get involved. No membership fees required!";
    } else if (input.includes("certification") || input.includes("aws cert")) {
      return "We offer study groups and resources for AWS certifications including Cloud Practitioner, Solutions Architect, and Developer Associate. Visit our Resources page for learning materials!";
    } else if (input.includes("contact") || input.includes("reach")) {
      return "You can reach us at awscloudclub@iitm.ac.in or visit our Contact page. Our office hours are Monday-Friday 5-7 PM and Saturday 2-5 PM.";
    } else if (input.includes("resource") || input.includes("learn")) {
      return "Check out our Resources page for AWS tutorials, certification paths, and learning materials. We have curated content for beginners to advanced learners!";
    } else if (input.includes("team")) {
      return "Our team consists of passionate students leading various initiatives. Visit our Team page to meet our leadership and core team members!";
    } else if (input.includes("hello") || input.includes("hi")) {
      return "Hello! How can I assist you with AWS Cloud Club today? Feel free to ask about events, membership, certifications, or resources!";
    } else {
      return "That's a great question! For detailed information, please visit our website pages or contact us at awscloudclub@iitm.ac.in. You can also ask me about events, membership, certifications, or resources!";
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 z-50 group"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-t-lg flex flex-row items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">AWS Club Assistant</CardTitle>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                className="bg-orange-600 hover:bg-orange-700"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
