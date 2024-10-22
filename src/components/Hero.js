import React from 'react';
import { Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';

export const Hero = () => (
  <div className="flex justify-between items-center mb-32">
    <div className="max-w-xl">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Shakeel K A
        <div className="text-2xl text-blue-400 mt-2">Software Engineer | .NET Specialist</div>
      </h1>
      <p className="text-gray-300 mb-8">
        Results-driven Software Engineer with over 5 years of specialized experience in .NET technologies, 
        including .NET Core and Azure. Proven track record of delivering high-performance, 
        scalable solutions in backend API development, real-time messaging, and cloud technologies.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600">
          Download CV
        </button>
        <button className="border border-blue-500 px-6 py-3 rounded-md hover:bg-blue-500/10">
          Let's Connect
        </button>
      </div>
      <div className="flex space-x-6 mt-8">
        <a href="https://www.linkedin.com/in/shakeel-ka/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-400" />
        </a>
        <a href="mailto:kashakeel@gmail.com">
          <Mail className="w-6 h-6 cursor-pointer hover:text-blue-400" />
        </a>
        <a href="tel:+919633935275">
          <Phone className="w-6 h-6 cursor-pointer hover:text-blue-400" />
        </a>
        <a href="skype:kashakeel@gmail.com">
          <MessageSquare className="w-6 h-6 cursor-pointer hover:text-blue-400" />
        </a>
      </div>
    </div>
    <div className="relative">
      <img 
        src="/api/placeholder/400/400" 
        alt="Profile"
        className="rounded-full w-96 h-96 object-cover border-4 border-blue-500/30"
      />
    </div>
  </div>
);