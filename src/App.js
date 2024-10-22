import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MessageSquare, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const skills = {
    backend: [
      { name: '.NET', level: 95 },
      { name: 'C#', level: 90 },
      { name: 'SQL Server', level: 85 },
      { name: 'SQS', level: 80 }
    ],
    cloud: [
      { name: 'AWS Services', level: 70 },
      { name: 'Azure', level: 75 },
      { name: 'Docker/Kubernetes', level: 40 },
      { name: 'Okta/Auth0', level: 75 }
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ section }) => (
    <button
      onClick={() => {
        document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }}
      className={`transition-colors duration-300 ${
        activeSection === section.toLowerCase()
          ? 'text-blue-400'
          : 'text-gray-300 hover:text-blue-400'
      }`}
    >
      {section}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Shakeel.</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Skills', 'Education', 'Contact'].map(section => (
                <NavLink key={section} section={section} />
              ))}
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}>
            <div className="py-4 space-y-4">
              {['Home', 'Experience', 'Skills', 'Education', 'Contact'].map(section => (
                <div key={section} className="px-4">
                  <NavLink section={section} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I'm Shakeel K A
                <div className="text-xl md:text-2xl text-blue-400 mt-2">
                  Software Engineer | .NET Specialist
                </div>
              </h1>
              <p className="text-gray-300">
              Results-driven Software Engineer with over 5 years of specialized experience in .NET technologies, 
            including .NET Core and Azure. Proven track record of delivering high-performance, 
            scalable solutions in backend API development, real-time messaging, and cloud technologies.
          </p>
              <div className="flex gap-4">
                <a href="https://drive.google.com/uc?export=download&id=1yci5kMp_hGJ28ocDehoPMngWMafEKWoe" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Download CV
                  </button>
                </a>
                <button className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500/10 transition-colors">
                  Let's Connect
                </button>
              </div>
              <div className="flex space-x-6">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/shakeel-ka/" },
                  { Icon: Mail, href: "mailto:kashakeel@gmail.com" },
                  { Icon: Phone, href: "tel:+919633935275" },
                  { Icon: MessageSquare, href: "skype:kashakeel@gmail.com" }
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D03AQG-5iBRgW4PnQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695232564184?e=1735171200&v=beta&t=BP4fhMUYJDTuarJhtdF0MQa9kfYHGETBQKGTgyUKLrw"
                  alt="Shakeel K A Profile Photo"
                  className="rounded-full w-full h-full object-cover border-4 border-blue-500/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5 hover:border-blue-500 transition-colors">
                <div className="text-blue-400 mb-2">{item.period}</div>
                <div className="text-xl font-semibold mb-2">{item.title}</div>
                <div className="text-gray-400 mb-4">{item.company}</div>
                <ul className="space-y-2">
                  {item.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-blue-950/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl mb-6 capitalize">{category.replace('_', ' ')}</h3>
                <div className="space-y-6">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-blue-500/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5 hover:border-blue-500 transition-colors">
                <div className="text-blue-400 mb-2">{item.period}</div>
                <div className="text-xl font-semibold mb-2">{item.degree}</div>
                <div className="text-gray-400 mb-2">{item.school}</div>
                <p className="text-gray-300">{item.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-950/30">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 
                  focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 
                  focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 
                focus:outline-none focus:border-blue-500 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 
                focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 px-8 py-3 rounded-lg hover:bg-blue-600 
                transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} Shakeel K A. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;