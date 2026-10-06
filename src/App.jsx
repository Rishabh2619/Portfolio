import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, 
  FaBars, FaTimes, FaDownload
} from 'react-icons/fa'
import profileImg from './assets/profile.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const skillTags = [
    '#Python', '#JavaScript', '#React', '#Flask', '#HTML5', '#CSS3', 
    '#Tailwind', '#Git', '#SQLAlchemy', '#DSA'
  ]

  const projects = [
    {
      title: 'Campus Placement & Recruitment System',
      description: 'Full-stack web platform to digitize campus recruitment. Features multi-role dashboards (Student/Staff/Admin), job postings, application tracking, eligibility filtering and resume uploads.',
      tech: ['Python', 'Flask', 'SQLAlchemy', 'HTML', 'CSS', 'JavaScript'],
      live: 'https://cprs-projects.onrender.com',
      github: 'https://github.com/Rishabh2619/CPRS_Project',
    },
    {
      title: 'Frontend Developer Internship Work',
      description: 'Built and optimized responsive UI layouts across 5 weekly assignments. Focused on DOM manipulation, modern styling techniques and deploying projects to GitHub.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Rishabh2619/Frontend-Developer-Internship-YuvaIntern',
    },
    {
      title: 'CodeAlpha Python Projects',
      description: 'Collection of Python projects including Hangman Game, Stock Tracker and Basic Chatbot completed during CodeAlpha internship.',
      tech: ['Python'],
      github: 'https://github.com/Rishabh2619',
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-sans">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0f1c]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <span className="w-8 h-8 rounded-full bg-cyan-400 text-[#0a0f1c] flex items-center justify-center text-sm font-bold">RJ</span>
            Rishabh Jha
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-[#0a0f1c] rounded-full text-sm font-semibold hover:bg-cyan-300 transition-colors"
            >
              <FaDownload size={12} /> Download CV
            </a>
          </div>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0f1c] border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 text-sm font-medium tracking-widest mb-4 uppercase">
              Hello World, I am a Computer Science Student
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
              Rishabh Jha
            </h1>
            <h2 className="text-2xl md:text-3xl text-amber-400 font-medium mb-6">
              Computer Science Student
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Currently pursuing B.Tech in Computer Science Engineering. Passionate about building clean, responsive web experiences and solving real-world problems with code. Recently completed Frontend Developer Internship at YuvaIntern.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {skillTags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-6 py-3 bg-cyan-400 text-[#0a0f1c] rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10">
                <img 
                  src={profileImg} 
                  alt="Rishabh Jha" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#111827] border border-white/10 rounded-full px-5 py-2.5 shadow-lg">
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Open to work
                </span>
                <div className="flex gap-3 text-gray-400">
                  <a href="https://github.com/Rishabh2619" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <FaGithub size={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/rishabh-jha-026b5b412" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                    <FaLinkedin size={16} />
                  </a>
                  <a href="mailto:rishabhjha457@gmail.com" className="hover:text-red-400 transition-colors">
                    <FaEnvelope size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
            <p>
              Currently pursuing a Bachelor’s degree in Computer Science Engineering at Arya College of Engineering and IT, expected to graduate in August 2029. 
              Recently completed a two-month role as a Frontend Developer at YuvaIntern, where I contributed to responsive UI design, interactive web features, and code management.
            </p>
            <p>
              Core competencies include HTML5, CSS3, JavaScript, React, Flask, SQLite, and SQLAlchemy. 
              I am motivated to leverage my technical skills and educational foundation to contribute to innovative, user-focused digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-[#0d1424] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          
          <div className="relative border-l border-cyan-500/30 pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cyan-400 border-4 border-[#0d1424]"></div>
              <div className="flex flex-wrap justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
                <span className="text-sm text-gray-500">Aug 2026 – Sep 2026</span>
              </div>
              <p className="text-cyan-400 mb-3">YuvaIntern · Remote, India</p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Built and optimized responsive UI layouts using HTML5, CSS3, and JavaScript across 5 weekly assignments</li>
                <li>Developed interactive web features including dynamic content structures and DOM manipulation</li>
                <li>Managed project source code, handled version control, and deployed weekly assignments to GitHub</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-20 mb-12">Education</h2>
          <div className="relative border-l border-cyan-500/30 pl-8 space-y-10">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-amber-400 border-4 border-[#0d1424]"></div>
              <div className="flex flex-wrap justify-between gap-2 mb-1">
                <h3 className="text-xl font-semibold">B.Tech in Computer Science and Engineering</h3>
                <span className="text-sm text-gray-500">Jun 2026 – Present</span>
              </div>
              <p className="text-gray-400">Arya College of Engineering and Information Technology · Jaipur, India</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-amber-400 border-4 border-[#0d1424]"></div>
              <div className="flex flex-wrap justify-between gap-2 mb-1">
                <h3 className="text-xl font-semibold">Diploma in Computer Science</h3>
                <span className="text-sm text-gray-500">Jul 2023 – Jun 2026</span>
              </div>
              <p className="text-gray-400">College of Engineering, Roorkee · Haridwar, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/5 text-gray-300 text-xs rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline"
                    >
                      Live Demo <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-[#0d1424] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-[#111827] border border-white/5 rounded-2xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'Python', 'Java', 'C'].map(s => (
                  <span key={s} className="px-4 py-2 bg-white/5 rounded-lg text-gray-300">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#111827] border border-white/5 rounded-2xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-4">Web & Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flask'].map(s => (
                  <span key={s} className="px-4 py-2 bg-white/5 rounded-lg text-gray-300">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-16 mb-6 text-center">Certificates</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Python (Basic) – HackerRank',
              'Data Structure and Algorithm – TestDome',
              'Python Certification – CodeAlpha',
              'Python Programming – TestDome'
            ].map((cert, i) => (
              <div key={i} className="bg-[#111827] border border-white/5 rounded-xl px-5 py-4 text-gray-300 text-sm">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-10 text-lg">
            I'm currently looking for internships and opportunities to grow as a developer. 
            Feel free to reach out!
          </p>
          
          <a 
            href="mailto:rishabhjha457@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-[#0a0f1c] rounded-xl font-semibold hover:bg-cyan-300 transition-colors mb-10"
          >
            <FaEnvelope /> rishabhjha457@gmail.com
          </a>

          <div className="flex justify-center gap-8 text-gray-400">
            <a href="https://github.com/Rishabh2619" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <FaGithub size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rishabh-jha-026b5b412" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Rishabh Jha. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App
