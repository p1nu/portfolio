import { useScrollAnimation } from "./useScrollAnimation";

function App() {
  useScrollAnimation({threshold: 0.3, triggerOnce: false});

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PhanhaPich
          </h1>
          <div className="flex gap-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Photo */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse fade-in-left"></div>
              <img
                src="/profile.jpg"
                alt="Pich"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl fade-in-left"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left overflow-hidden">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium fade-in-right">
                Available for Freelance
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 fade-in-right">
              Full-Stack Web Developer
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed fade-in-right">
              Building modern web applications with React, Node.js, and Odoo.
              <br />
              <span className="text-blue-600">6 months professional experience</span> • Based in Cambodia
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap fade-in-right">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition transform hover:-translate-y-0.5 font-medium"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/p1nu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transition transform hover:-translate-y-0.5 font-medium flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 overflow-hidden">
        <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center fade-in-left">
          About Me
        </h3>
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed fade-in-right">
              I'm a junior web developer with <span className="font-semibold text-blue-600">6 months of professional experience</span> building modern web applications. I hold a Bachelor's degree in Informative Economics from Royal University of Laws and Economics.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed fade-in-right">
              Currently working as an <span className="font-semibold">Odoo Developer at DGTalize Partners Co., Ltd</span>, I specialize in creating responsive, user-friendly websites and customizing Odoo modules. I'm passionate about learning new technologies and solving complex problems.
            </p>
          </div>
          
          <div className="mt-8">
            <h4 className="font-bold text-gray-900 mb-4 text-xl fade-in-right">Technical Skills</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'React.js', color: 'from-blue-500 to-cyan-500' },
                { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
                { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
                { name: 'Odoo', color: 'from-purple-500 to-pink-500' },
                { name: 'Figma', color: 'from-red-500 to-rose-500' },
                { name: 'HTML/CSS', color: 'from-indigo-500 to-blue-500' },
                { name: 'Git', color: 'from-gray-700 to-gray-900' }
              ].map(skill => (
                <span
                  key={skill.name}
                  className={`bg-gradient-to-r ${skill.color} text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 fade-in-right`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl fade-in-right">
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-700">Months Experience</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl fade-in-right">
              <div className="text-3xl font-bold text-purple-600 mb-2">Full-Stack</div>
              <div className="text-gray-700">Development</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl fade-in-right">
              <div className="text-3xl font-bold text-green-600 mb-2">&lt;24h</div>
              <div className="text-gray-700">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16 overflow-hidden">
        <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center fade-in-left">
          Featured Projects
        </h3>
        <div className="grid gap-8">
          {/* Project 1 */}
          <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition fade-in-right">
                Saisons Holding Website
              </h4>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium fade-in-right">
                Live
              </span>
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed fade-in-right">
              Complete full-stack website built from scratch - designed in Figma and developed 
              with React and Node.js. Handled the entire development lifecycle over one year 
              as my first major professional project. This experience taught me everything from 
              UI/UX design to backend architecture.
            </p>
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-lg text-sm font-medium fade-in-right">React</span>
              <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-lg text-sm font-medium fade-in-right">Node.js</span>
              <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-lg text-sm font-medium fade-in-right">Figma</span>
              <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-lg text-sm font-medium fade-in-right">Full-Stack</span>
            </div>
            <a
              href="https://saisonsholding.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg group-hover:gap-3 transition-all fade-in-right"
            >
              View Live Site
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 overflow-hidden">
        <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center fade-in-left">
          Let's Work Together
        </h3>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl shadow-2xl text-white text-center">
          <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto fade-in-right">
            I'm currently accepting freelance projects and typically respond within 24 hours. 
            Whether you need a new website, Odoo customization, or help with an existing project, 
            let's discuss how I can help bring your ideas to life!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:p1nu@outlook.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold text-lg flex items-center gap-2 fade-in-right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a
              href="https://github.com/p1nu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold text-lg flex items-center gap-2 fade-in-right"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-lg fade-in-up">© 2025 Pich. Built with React and Tailwind CSS.</p>
          <p className="text-gray-500 mt-2 fade-in-up">Full-Stack Web Developer • Phnom Penh, Cambodia</p>
        </div>
      </footer>
    </div>
  );
}

export default App;