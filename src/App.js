import React from 'react';
import { Github, Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';
import photo from "./Photo.jpg";

const Portfolio = () => {
  const skills = {
    backend: [
      { name: '.NET Core', level: 95 },
      { name: 'C#', level: 90 },
      { name: 'SQL Server', level: 85 },
      { name: 'Python', level: 80 }
    ],
    cloud: [
      { name: 'AWS Services', level: 85 },
      { name: 'Azure', level: 80 },
      { name: 'Docker/Kubernetes', level: 75 },
      { name: 'DevOps', level: 75 }
    ]
  };

  const experience = [
    {
      title: '.NET Core Developer',
      company: 'iROID Technologies',
      period: 'Oct 2023 - Present',
      description: [
        'Led a 2-member backend team to successfully deliver a complex project within a tight 3-month deadline, managing a database of 1,000 users with over 3 million data records.',
        'Optimized resource consumption and SQL query performance by 30%, significantly improving application responsiveness and user experience.',
        'Developed and implemented microservices architecture using .NET Core 8, enhancing system scalability and maintainability.',
        'Engineered robust backend REST APIs integrated with AWS services (S3, SQS, EC2) and implemented security protocols using AWS Secrets Manager, Okta, and Auth0.',
        'Designed and implemented an AI-powered image recognition solution using AWS Recognition and .NET, processing over 10,000 images per day.',
        'Developed an automated video processing system using AFX and FFMPEG, eliminating the need for manual editing.',
        'Integrated YouTube API for seamless backend video uploads, increasing content delivery efficiency by 40%.',
        'Mentored new developers, reducing onboarding time by 25% and improving team productivity.'
      ]
    },
    {
      title: 'Remote Consultant C# Developer',
      company: 'American Safety Council – via Geval6',
      period: 'Nov 2020 - April 2023',
      description: [
        'Developed C# (.NET) solvers for Electromechanical Simulations, improving simulation accuracy.',
        'Enhanced software reliability by modifying test frameworks and conducting extensive N-Unit Testing, reducing post-release bugs by 40%.',
        'Led the development of an FMUWrapper in .NET Core, optimizing HVAC Solver performance.',
        'Conducted root cause analysis for critical production issues, reducing average resolution time from 48 hours to 12 hours.',
        'Mentored team members on advanced C# concepts and debugging techniques, improving overall team performance by 30%.'
      ]
    },
    {
      title: 'Software Developer (.NET)',
      company: 'UST Global',
      period: 'May 2016 - June 2018',
      description: [
        'Upgraded WebAPI and WebAdmin Tool for an Electronic Driver Logging App, increasing system efficiency by 20%.',
        'Implemented Hadoop Geolocation Support, improving application accuracy.',
        'Led front-end development efforts, resolving over 100 critical bugs and implementing key controller changes.',
        'Successfully managed the Colors employee engagement program, increasing team satisfaction scores by 25%.'
      ]
    }
  ];

  const education = [
    {
      degree: 'M.Tech in Computer Applications in Power Systems Engineering',
      school: 'Government Engineering College, Thrissur',
      period: '2018 - 2020',
      grade: 'GPA: 8.13'
    },
    {
      degree: 'B.Tech in Electrical & Electronics Engineering',
      school: 'SCMS College of Engineering, Karukuty',
      period: '2011 - 2015',
      grade: 'GPA: 7.35'
    }
  ];

  // JSX part for rendering experience with bullets
const ExperienceSection = () => (
  <div className="mb-32">
    <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
    <div className="space-y-6">
      {experience.map((item, index) => (
        <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5">
          <div className="text-blue-400 mb-2">{item.period}</div>
          <div className="text-xl font-semibold mb-2">{item.title}</div>
          <div className="text-gray-400 mb-2">{item.company}</div>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {item.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white p-8">
      {/* Header/Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="text-xl font-bold">Shakeel.</div>
        <div className="space-x-6">
          {['Home', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="flex justify-between items-center mb-32">
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
          <a href="https://drive.google.com/uc?export=download&id=1yci5kMp_hGJ28ocDehoPMngWMafEKWoe" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600">
            Download CV
          </button>
        </a>
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
        src={photo}
        alt="Shakeel K A Profile Photo"
        className="rounded-full w-96 h-96 object-cover border-4 border-blue-500/30"
      />
    </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="mb-32">
    <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
    <div className="space-y-6">
      {experience.map((item, index) => (
        <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5">
          <div className="text-blue-400 mb-2">{item.period}</div>
          <div className="text-xl font-semibold mb-2">{item.title}</div>
          <div className="text-gray-400 mb-2">{item.company}</div>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {item.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>

      {/* Skills Section */}
      <div id="skills" className="mb-32">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl mb-6">Backend Development</h3>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-blue-500/20 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-6">Cloud & DevOps</h3>
            <div className="space-y-4">
              {skills.cloud.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-blue-500/20 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="mb-32">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5">
              <div className="text-blue-400 mb-2">{item.period}</div>
              <div className="text-xl font-semibold mb-2">{item.degree}</div>
              <div className="text-gray-400 mb-2">{item.school}</div>
              <p className="text-gray-300">{item.grade}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button className="bg-blue-500 px-8 py-3 rounded-md hover:bg-blue-600 w-full">
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-400 mt-16">
        Copyright © 2024 by Shakeel K A | All Rights Reserved
      </div>
    </div>
  );
};

export default Portfolio;