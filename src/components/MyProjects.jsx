import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import airbnb from '../assests/project/airbnb.png'
import notekeeping from '../assests/project/notekeeping.png'
import rickymorty from '../assests/project/rickymorty.png'
import shopperApp from "../assests/project/shopperApp.png"
import knowledgeai from '../assests/project/knowledgeai.png'
import pracco from "../assests/project/pracco.png"
import advertisement from '../assests/project/advertisement.png'
import ecommerce from '../assests/project/ecommerce.png'
import portfolio from '../assests/project/portfolio.png'
import todoapp from '../assests/project/todoapp.png'
import githubfinderapp from '../assests/project/githubfinderapp.png'
import wordleapp from '../assests/project/wordleapp.png'

const projects = [
  {
    id: 1,
    name: 'FullStack AirBnb App',
    description: "An inspired Airbnb clone with a sleek UI, featuring backend-powered user authentication, photo uploads, and booking management.",
    photo: airbnb,
    liveLink: 'https://graceful-dasik-f2b0d5.netlify.app/',
    githubLink: 'https://github.com/Rajneesh2223/FullStackBookingApp',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS','Express Js','bcrypt js']
  },
  {
    id: 2,
    name: 'NoteKeeping Backend App ',
    description: 'Responsive recreation of Calendly\'s homepage with modern UI components and animations.',
    photo: notekeeping,
    liveLink: 'https://profound-manatee-55952e.netlify.app/notes',
    githubLink: 'https://github.com/Rajneesh2223/NoteKeepingApp',
    tags: ['React', 'Tailwind CSS', 'Framer Motion' , "Firebase " , "firebase auth ", "javascript"]
  },
  {
    id: 3,
    name: 'Rick and Morty Explorer App ',
    description:"A responsive Rick and Morty Explorer app with modern UI, React Hooks, and interactive animations.",
    photo: rickymorty,
    liveLink: 'https://strong-maamoul-9efbd4.netlify.app/',
    githubLink: 'https://github.com/Rajneesh2223/Rickipedia-App',
    tags: ['React', 'Tailwind CSS', 'React Hooks ' , "lucide-React "]
  },
  {
    id: 4,
    name: 'Full Stack Ecommerce App ',
    description: '"A full-stack e-commerce application with a responsive design, modern UI components, smooth animations, and user-friendly features."',
    photo: shopperApp,
    liveLink: '',
    githubLink: 'https://github.com/Rajneesh2223/Full-Stack-Commerce-Project',
    tags: ['React', 'Tailwind CSS', 'Framer Motion','Node.js','Express.js','MongoDB','JWT','Mongoose']
  },
  {
    id: 5,
    name: 'Knowledge Ai Website ',
    description: '"A responsive and visually engaging homepage for Knowledge AI, featuring modern UI components, smooth animations, and seamless interactivity."',
    photo: knowledgeai,
    liveLink: 'https://lucent-conkies-307fc8.netlify.app/',
    githubLink: 'https://github.com/KnowledgeEdgeAI/Web-dev',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },{
    id: 6,
    name: 'My Portfolio App ',
    description: '"A personal portfolio app showcasing projects, skills, and achievements, built with React, Tailwind CSS, and Framer Motion for a modern and interactive user experience."',
    photo: portfolio,
    liveLink: '',
    githubLink: 'https://github.com/Rajneesh2223/ReactPortfolio',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 7,
    name: 'Pracco',
    description: 'Welcome to Pracco, a unified platform where individuals from diverse backgrounds come together to foster trust and excellence in the market ',
    photo: pracco,
    liveLink: 'https://pracco.in/',
    githubLink: 'https://github.com/KnowledgeEdgeAI/Pracco-website',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 8,
    name: 'Pracco Advertisement Page',
    description: 'Welcome to Pracco, a unified platform where individuals from diverse backgrounds come together to foster trust and excellence in the market ',
    photo:advertisement,
    liveLink: 'https://pracco.in/advPage/advertisement.html',
    githubLink: 'https://github.com/KnowledgeEdgeAI/Pracco-website/tree/main/client/advPage',
    tags: ['HTML', 'Bootstrap ','CSS']
  },
  {
    id: 9,
    name: 'Pracco Ecommerce Page ',
    description: 'Welcome to Pracco, a unified platform where individuals from diverse backgrounds come together to foster trust and excellence in the market ',
    photo:ecommerce,
    liveLink: 'https://pracco.in/ecommercePage/ecommerce.html',
    githubLink: 'https://github.com/KnowledgeEdgeAI/Pracco-website/tree/main/client/advPage',
    tags: ['HTML', 'Bootstrap ','CSS']
  },
  {
    id: 10,
    name: 'Task List App (TO DO Task)',
    description: 'ask List App (TO DO Task) is a user-friendly application designed to help individuals organize and manage their tasks efficiently. Built with HTML, Bootstrap, and CSS, the app ensures a responsive and visually appealing interface.',
    photo:todoapp,
    liveLink: 'https://eclectic-faun-a30d88.netlify.app/',
    githubLink: 'https://github.com/Rajneesh2223/To-Do-List-Web-dev-project',
    tags: ['HTML', 'Bootstrap ','CSS','React js ' , 'Hooks']
  },
  {
    id: 11,
    name: "Github Finder App",
    description: "Github Finder App is a powerful tool designed to search for GitHub users and display their profile details with ease. Built using React.js, Hooks, and styled with HTML, Bootstrap, and CSS, this app offers a smooth and responsive user experience. Users can search for GitHub users and view their repositories, followers, and other details directly from the interface.",
    photo: githubfinderapp,
    liveLink: "https://lively-genie-06e0d7.netlify.app/",
    githubLink: "https://github.com/Rajneesh2223/Github-Finder-App",
    tags: ["HTML", "Bootstrap", "CSS", "React.js", "Hooks"]
  },
  {
    id: 12,
    name: "Wordle Game",
    description: "Wordle Game is a fun and engaging word puzzle game where players must guess a 5-letter word in six attempts. Built with React.js and styled using HTML, CSS, and Bootstrap, the app provides a smooth and interactive user experience. Players receive visual feedback on each guess, making it a challenging and enjoyable game for users of all ages.",
    photo: wordleapp,
    liveLink: "https://clever-daffodil-1bb752.netlify.app/",
    githubLink: "https://github.com/Rajneesh2223/Github-Finder-App",
    tags: ["HTML", "Bootstrap", "CSS", "React.js", "Hooks"]
  }
  
  

  
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
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
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