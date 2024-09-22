/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import React, { useState } from 'react';
import { ChevronRight, Image, Video, BookOpen, Code, Mic, Plus, History, Share, Trash2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WorkflowOption {
  icon: React.ReactNode;
  label: string;
}

interface ChatHistoryItem {
  title: string;
  description: string;
  image?: string;
  timestamp: string;
}

const HomePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const workflowOptions: WorkflowOption[] = [
    { icon: <Image className="h-5 w-5" />, label: "Photo edition" },
    { icon: <Video className="h-5 w-5" />, label: "Video generation" },
    { icon: <BookOpen className="h-5 w-5" />, label: "Education feedback" },
    { icon: <Code className="h-5 w-5" />, label: "Code generation" },
    { icon: <Mic className="h-5 w-5" />, label: "Audio generation" },
  ];

  const chatHistory: ChatHistoryItem[] = [
    { title: "Xora sense", description: "Write code (HTML, CSS and JS) for a...", timestamp: "Just now" },
    { title: "Welcome page with input", description: "Write code (HTML, CSS and JS) for a...", image: "/dark-blue.jpg", timestamp: "Just now" },
    { title: "Photo retouch", description: "Photography shot of anime Travelers...", timestamp: "Just now" },
    { title: "Auto generate title", description: "Write code (HTML, CSS and JS) for a...", timestamp: "Just now" },
  ];

  return (
    <div className="flex h-screen bg-gray-950 ">
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-2">Discover AI workflows</h1>
        <p className="text-gray-400 mb-6">Chat with the smartest AI - Experience the power of AI with us</p>
        
        <div className="space-y-3 mb-6">
          {workflowOptions.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`w-full justify-between text-left font-normal ${
                index === selectedOption ? 'bg-[#1a2234] border-[#2a3441]' : 'bg-[#151c2c] hover:bg-[#1a2234]'
              }`}
              onClick={() => setSelectedOption(index)}
            >
              <div className="flex items-center">
                {option.icon}
                <span className="ml-3">{option.label}</span>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Button>
          ))}
        </div>

        <div className="flex space-x-3">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Type / for commands"
              className="w-full bg-[#151c2c] border-[#2a3441] text-white pl-10"
            />
            <Plus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white">
            + New project
          </Button>
        </div>
      </div>

      <div className="w-80 border-l border-[#2a3441] p-4 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="vercel.jpeg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <Button variant="outline" size="sm" className="text-white">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <History className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Chat history</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">28/100</span>
            <Trash2 className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="space-y-4">
          {chatHistory.map((item, index) => (
            <div key={index} className="bg-[#151c2c] p-3 rounded-lg">
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{item.description}</p>
              {item.image && (
                <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded-md mb-2" />
              )}
              <div className="flex justify-between items-center text-xs text-gray-400">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/vercel.jpeg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span>{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;