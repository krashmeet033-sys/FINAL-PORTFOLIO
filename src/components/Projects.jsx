import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder, Maximize2, X, PlayCircle, Star, GitFork } from 'lucide-react';

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-[40px] blur opacity-0 group-hover:opacity-20 transition duration-700"></div>
      <div className="relative glass-card rounded-[40px] p-10 h-full flex flex-col bg-slate-900/40 border-white/5 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
        
        {/* Animated Background Icon */}
        <div className="absolute -right-8 -top-8 text-white/5 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
          <Folder size={200} />
        </div>

        <div className="flex justify-between items-start mb-10 relative z-10">
          <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
            <Folder size={28} />
          </div>
          <div className="flex gap-3">
            <a href={project.html_url || project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass border-white/10 hover:border-primary/50 text-gray-400 hover:text-white transition-all">
              <Github size={20} />
            </a>
            <button onClick={() => onOpen(project)} className="p-3 rounded-xl glass border-white/10 hover:border-primary/50 text-gray-400 hover:text-white transition-all">
              <Maximize2 size={20} />
            </button>
          </div>
        </div>

        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-4 mb-2">
             <span className="text-[10px] uppercase tracking-widest font-black text-primary/60">{project.language || 'Code'}</span>
             {project.stargazers_count > 0 && (
               <div className="flex items-center gap-1 text-[10px] text-gray-500">
                 <Star size={10} /> {project.stargazers_count}
               </div>
             )}
          </div>
          <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight italic">
            {(project.name || project.title).replace(/-/g, ' ')}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 font-light line-clamp-3">
            {project.description || "A cutting-edge project exploring the boundaries of modern technology and creative design."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 relative z-10">
          {(project.topics?.slice(0, 3) || project.tags)?.map((tag, i) => (
            <span key={i} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 uppercase tracking-widest font-black group-hover:border-primary/20 group-hover:text-primary/70 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Modal = ({ project, onClose }) => {
  if (!project) return null;
  const title = (project.name || project.title).replace(/-/g, ' ');
  const tags = project.topics || project.tags || [];
  const url = project.html_url || project.github;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass-card w-full max-w-5xl rounded-[48px] overflow-hidden relative border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-8 right-8 p-3 rounded-full glass border-white/10 hover:bg-white/5 transition-all z-10">
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 to-transparent"></div>
             <h4 className="text-4xl font-black italic uppercase tracking-tighter text-white/20 select-none">{title}</h4>
          </div>
          
          <div className="p-12 md:p-16 flex flex-col">
            <h2 className="text-5xl font-black italic tracking-tighter mb-6 uppercase">{title}</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 flex-1">
              {project.description || "A cutting-edge project exploring the boundaries of modern technology and creative design."}
            </p>

            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span key={i} className="text-xs px-4 py-1.5 rounded-full glass border-white/10 text-primary font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest text-center hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <Github size={18} /> View Code
                </a>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-5 glass border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest text-center hover:bg-white/5 transition-all text-white flex items-center justify-center gap-2"
                >
                  <PlayCircle size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/krashmeet033-sys/repos?sort=updated&per_page=8');
        const data = await response.json();
        if (Array.isArray(data)) {
          setGithubProjects(data);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const projects = githubProjects.length > 0 ? githubProjects : [
    {
      name: "FAQify",
      description: "A high-performance FAQ application built with React and Framer Motion. Features a buttery-smooth accordion interface.",
      topics: ["React", "Framer Motion", "Tailwind"],
      html_url: "https://github.com/krashmeet033-sys/FAQify"
    },
    {
      name: "QuickCart",
      description: "Modern E-commerce frontend with focus on clean UI and seamless user experience.",
      topics: ["JavaScript", "HTML5", "CSS3"],
      html_url: "#"
    },
    {
      name: "Sorting Visualizer",
      description: "Interactive tool to visualize various sorting algorithms in real-time.",
      topics: ["Algorithms", "React", "Visuals"],
      html_url: "#"
    },
    {
      name: "Search Ranking System",
      description: "A robust system for ranking and searching through complex data structures.",
      topics: ["Logic", "Data Structures", "Web"],
      html_url: "#"
    },
    {
      name: "Bus Booking",
      description: "A robust C++ system for managing bus reservations. Implements complex data structures and OOP principles.",
      topics: ["C++", "OOP", "Systems"],
      html_url: "https://github.com/krashmeet033-sys/Bus-Ticket-Booking-System-C-"
    },
    {
      name: "Web Games Hub",
      description: "A collection of visually stunning web games exploring different aspects of front-end development.",
      topics: ["Creative", "JS", "UI/UX"],
      html_url: "https://github.com/krashmeet033-sys/advanced-interactive-web-games"
    },
    {
      name: "Wellness Web",
      description: "A lifestyle and fitness platform featuring a modern aesthetic and intuitive user experience.",
      topics: ["HTML", "CSS", "Design"],
      html_url: "https://github.com/krashmeet033-sys/healthy-lifestyle-website"
    },
    {
      name: "Bank Simulation",
      description: "A sophisticated financial management simulation handling complex transaction logic.",
      topics: ["JavaScript", "Logic", "Finance"],
      html_url: "https://github.com/krashmeet033-sys/Bank-Javascript"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-12">
        <div className="max-w-2xl">
          <h2 className="text-7xl md:text-8xl font-black tracking-tighter uppercase italic mb-8 select-none">Selected Works</h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed">
            Pushing the boundaries of web development and system design through innovative projects.
          </p>
        </div>
        <motion.a 
          href="https://github.com/krashmeet033-sys" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ x: 10 }}
          className="text-sm font-black uppercase tracking-[0.4em] text-primary flex items-center gap-4 group transition-colors hover:text-white"
        >
          View Repositories 
          <span className="w-12 h-[1px] bg-primary group-hover:bg-white transition-colors"></span>
        </motion.a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} onOpen={setSelectedProject} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
