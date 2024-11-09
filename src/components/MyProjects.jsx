import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import project1 from '../assests/project1.png'
import project2 from '../assests/project2.png'

const projects = [
  {
    id: 1,
    name: 'FullStack AirBnb App',
    description: 'A complete clone of Airbnb with booking functionality, user authentication, and property management.',
    photo: project1,
    liveLink: 'https://your-airbnb-clone.com',
    githubLink: 'https://github.com/yourusername/airbnb-clone',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    id: 2,
    name: 'Frontend Calendly Homepage',
    description: 'Responsive recreation of Calendly\'s homepage with modern UI components and animations.',
    photo: project2,
    liveLink: 'https://your-calendly-clone.com',
    githubLink: 'https://github.com/yourusername/calendly-clone',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 3,
    name: 'Frontend Calendly Homepage',
    description: 'Responsive recreation of Calendly\'s homepage with modern UI components and animations.',
    photo: project2,
    liveLink: 'https://your-calendly-clone.com',
    githubLink: 'https://github.com/yourusername/calendly-clone',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 4,
    name: 'Frontend Calendly Homepage',
    description: 'Responsive recreation of Calendly\'s homepage with modern UI components and animations.',
    photo: project2,
    liveLink: 'https://your-calendly-clone.com',
    githubLink: 'https://github.com/yourusername/calendly-clone',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 5,
    name: 'Frontend Calendly Homepage',
    description: 'Responsive recreation of Calendly\'s homepage with modern UI components and animations.',
    photo: project2,
    liveLink: 'https://your-calendly-clone.com',
    githubLink: 'https://github.com/yourusername/calendly-clone',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 6,
    name: 'Frontend Calendly Homepage',
    description: 'Responsive recreation of Calendly\'s homepage with modern UI components and animations.',
    photo: project2,
    liveLink: 'https://your-calendly-clone.com',
    githubLink: 'https://github.com/yourusername/calendly-clone',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className=" flex-shrink-0 bg-gray-800 rounded-xl overflow-hidden shadow-2xl relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          src={project.photo}
          alt={project.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-orange-400">{project.name}</h2>
        
        <p className="text-gray-300 text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const MyProjects = () => {
  const containerRef = React.useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -384, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 384, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 min-w-full" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Explore my latest works and creative endeavors
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            ref={containerRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory no-scrollbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project) => (
              <div key={project.id} className="snap-center">
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>

          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition-colors duration-300 shadow-lg"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition-colors duration-300 shadow-lg"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;