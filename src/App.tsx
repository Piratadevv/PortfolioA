import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, User, MessageSquare } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/username/ecommerce",
      demo: "https://demo-ecommerce.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      github: "https://github.com/username/taskmanager",
      demo: "https://demo-taskmanager.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization, location-based forecasts, and historical weather data analysis.",
      tech: ["Vue.js", "D3.js", "Express", "OpenWeather API"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://demo-weather.com"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics platform for social media performance tracking with automated reporting and engagement insights.",
      tech: ["React", "Python", "Django", "Chart.js"],
      github: "https://github.com/username/social-analytics",
      demo: "https://demo-analytics.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-md px-8 py-3">
        <div className="flex items-center space-x-8">
          <div className="flex space-x-6">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-all duration-200 px-3 py-1 rounded-full ${
                  activeSection === id 
                    ? 'text-white bg-[#d0cede] shadow-md rounded-md' 
                    : 'text-gray-700 hover:bg-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-gray-800">
                Alex Johnson
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 font-light">
              Full-Stack Developer | MERN Stack, Next.js, Angular & Laravel
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-[#d0cede] text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:bg-[#c4b8d1] transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center">
                  View Projects
                  <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 font-semibold rounded-md shadow-lg hover:shadow-xl hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work showcasing modern web development technologies and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-white/20 border border-white/30 rounded-md p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-3 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-[#d0cede]/30 text-gray-700 rounded-md border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center px-4 py-2 bg-[#d0cede] text-white rounded-md hover:bg-[#c4b8d1] hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to work together? I'd love to hear about your project and discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-lg p-8 shadow-lg">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-md p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/30 rounded-md focus:ring-2 focus:ring-[#d0cede] focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/30 rounded-md focus:ring-2 focus:ring-[#d0cede] focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/30 rounded-md focus:ring-2 focus:ring-[#d0cede] focus:border-transparent transition-all duration-200 placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#d0cede] text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:bg-[#c4b8d1] transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/30 backdrop-blur-md bg-white/10">
        <p className="text-gray-600">
          © 2024 Alex Johnson. Built with React and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;