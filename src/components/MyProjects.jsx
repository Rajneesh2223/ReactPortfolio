import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import project1 from '../assests/project1.png'
import project2 from '../assests/project2.png'
import project3 from '../assests/project3.png'
import project4 from '../assests/project4.png'
import project5 from '../assests/project5.png'
import project6 from '../assests/project6.png'
import project7 from '../assests/project7.png'
const projects = [
  { id: 1, name: 'FullStack AirBnb App', description: 'Description for project one.', photo: project1 },
  { id: 2, name: 'Frontened Calendly Homepage', description: 'Description for project two.', photo: project4 },
  { id: 3, name: 'Full Stack Shop App ', description: 'Description for project three.', photo: project3 },
  { id: 4, name: 'Full Stack Admin Dashboard', description: 'Description for project four.', photo: project2 },
  { id: 5, name: 'Github Finder App', description: 'Description for project five.', photo: project5 },
  { id: 6, name: 'Modern Homepage', description: 'Description for project six.', photo: project6 },
  { id: 7, name: 'New React Homepage', description: 'Description for project seven.', photo: project7 },
  { id: 8, name: 'Project Eight', description: 'Description for project eight.', photo: project1 },
];

const MyProjects = () => {
  const scrollLeft = () => {
    document.querySelector('.projects-container').scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.querySelector('.projects-container').scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-10 bg-gray-800 min-w-full" id="projects">
      <h1 className="text-4xl font-semibold text-orange-400 text-center mb-10">
        Explore My Recent Projects
      </h1>
      <div className="relative">
        <motion.div
          className="flex overflow-x-auto gap-4 p-4 h-[400px] no-scrollbar projects-container mt-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="w-80 h-80 flex-shrink-0 bg-gray-700 rounded-lg flex items-center justify-center relative group border-4 border-orange-500"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-80 h-80 object-contain overflow-clip"
                src={project.photo}
                alt={`Project ${project.id}`}
              />
              <motion.div
                className="text-center text-black opacity-0 group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center bg-orange-200 bg-opacity-60 transition-opacity duration-300 p-4 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="mt-2">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {/* Scroll buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 p-2 rounded-r text-white hover:bg-orange-300"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 p-2 rounded-l text-white hover:bg-orange-300"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
