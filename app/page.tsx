'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-primary">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-20">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600">
                Full Stack Developer & Designer
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                I create beautiful, functional, and user-friendly websites and applications.
                Passionate about clean code and innovative solutions.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Get In Touch
                </a>
                <a href="#projects" className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
                  View Work
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary via-secondary to-accent rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-white text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                I'm a passionate developer with over 5 years of experience in building web applications.
                I specialize in modern JavaScript frameworks and love creating intuitive user experiences.
              </p>
              <p className="text-lg text-gray-700">
                My journey in tech started with a curiosity about how things work, and has evolved into
                a career focused on building scalable, maintainable, and beautiful applications.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to open source,
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="font-bold text-xl mb-2">Focused</h3>
                <p className="text-gray-600">Detail-oriented approach to every project</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="font-bold text-xl mb-2">Fast</h3>
                <p className="text-gray-600">Efficient and optimized solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="font-bold text-xl mb-2">Creative</h3>
                <p className="text-gray-600">Innovative design thinking</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="font-bold text-xl mb-2">Collaborative</h3>
                <p className="text-gray-600">Team player and communicator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with payment integration and admin dashboard",
                tech: ["Next.js", "TypeScript", "Stripe"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Social Media App",
                description: "Real-time social networking platform with messaging and content sharing",
                tech: ["React", "Node.js", "Socket.io"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Analytics Dashboard",
                description: "Data visualization dashboard with interactive charts and reports",
                tech: ["Vue.js", "D3.js", "Python"],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Task Management Tool",
                description: "Collaborative project management application with real-time updates",
                tech: ["React", "Firebase", "Tailwind"],
                color: "from-orange-500 to-red-500"
              },
              {
                title: "AI Chatbot",
                description: "Intelligent chatbot with natural language processing capabilities",
                tech: ["Python", "TensorFlow", "Flask"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Portfolio CMS",
                description: "Custom content management system for creative professionals",
                tech: ["Next.js", "Sanity", "GraphQL"],
                color: "from-pink-500 to-rose-500"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-6xl`}>
                  💼
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 text-primary hover:text-primary/80 font-medium flex items-center gap-2">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "React", level: 95, icon: "⚛️" },
              { name: "TypeScript", level: 90, icon: "📘" },
              { name: "Next.js", level: 92, icon: "▲" },
              { name: "Node.js", level: 88, icon: "🟢" },
              { name: "Python", level: 85, icon: "🐍" },
              { name: "TailwindCSS", level: 95, icon: "🎨" },
              { name: "GraphQL", level: 80, icon: "◈" },
              { name: "Docker", level: 75, icon: "🐳" }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3 text-center">{skill.icon}</div>
                <h3 className="text-lg font-bold text-center mb-3">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-lg"
              >
                Send Message
              </button>
            </form>
            <div className="mt-12 flex justify-center gap-6">
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 John Doe. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
