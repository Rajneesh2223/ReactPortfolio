import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

const experiences = [
  {
    type: "Full-Time",
    position: "Intern Full-Stack Developer",
    company: "Nous (Start Up)",
    project: "Project Nous",
    duration: "July 2024 - Present",
    responsibilities: [
      "Gained hands-on experience with Git for version control and GitHub for project collaboration",
      "Created full-fledged website designs for the project",
      "Collaborated with a team of 4 developers, participating in code reviews and Agile sprints"
    ],
    links: {
      live: "https://hustlr-pro.webflow.io/",
      github: "https://github.com/nousmnky/nous.shortcuts"
    }
  },
  {
    type: "Full-Time",
    position: "Intern Full-Stack Developer",
    company: "SynthLeap PVT. LTD.",
    project: "KnowledgeAI",
    duration: "July 2024 - Present",
    responsibilities: [
      "Building a standout website with React, Framer Motion, and Tailwind CSS",
      "Developing scalable backend using FastAPI",
      "Creating an advertisement page for Pracco Services Company",
      "Designed and implemented client templates on Webflow"
    ],
    links: {
      live: "https://knowledgeai.com",
      github: "https://github.com/KnowledgeEdgeAI/Web-dev"
    }
  },
  {
    type: "Internship",
    position: "Frontend Developer",
    company: "Aeonaxy Tech PVT. LTD.",
    duration: "April 2024 - May 2024",
    responsibilities: [
      "Designed and implemented responsive homepage, improving user engagement",
      "Ensured cross-browser compatibility and responsiveness"
    ]
  },
  {
    type: "Open Source",
    position: "Contributor",
    company: "Various Programs",
    duration: "2023 - 2024",
    contributions: [
      {
          program :"Finalist in Medecro Hackathon (2024)",
          link:"https://drive.google.com/file/d/1ogOSSbmI88AHQaiOwmtE4FPHtxlAOdGN/view?usp=drive_link"
      },
      {
        program: "Social Summer Of Code (SSOC'23)",
        link: "https://drive.google.com/file/d/1qWjIEsUaPDIoQ3c6NaHSFDnO6zFRL-2B/view?usp=sharing"
      },
      {
        program: "Social Winter Of Code (SWOC'24)",
        link: "https://certificate.givemycertificate.com/c/b8d2f0f0-4e94-40f1-a75d-c0fa530fe921"
      },
      {
        program: "HacktoberFest'23",
        link: "https://drive.google.com/file/d/1mp_LVI4qgYH-R9Kr_I0Q35iwhScJ29jl/view?usp=sharing"
      }
    ]
  }
];

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-500/20"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <FaBriefcase className="text-orange-400 text-xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{experience.position}</h3>
            <p className="text-orange-400">{experience.company}</p>
          </div>
        </div>
        <span className="text-sm text-gray-400">{experience.duration}</span>
      </div>

      {experience.project && (
        <div className="mt-4 bg-orange-500/5 rounded-lg p-3">
          <p className="text-sm text-orange-300 font-medium">Project: {experience.project}</p>
        </div>
      )}

      <div className="mt-4 space-y-2">
        {experience.responsibilities?.map((resp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-2"
          >
            <HiOutlineLightBulb className="text-orange-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300 text-sm">{resp}</p>
          </motion.div>
        ))}
      </div>

      {experience.contributions && (
        <div className="mt-4 space-y-2">
          {experience.contributions.map((contribution, index) => (
            <div key={index} className="flex items-center justify-between bg-orange-500/5 rounded-lg p-3">
              <span className="text-gray-300">{contribution.program}</span>
              <a
                href={contribution.link}
                className="text-orange-400 hover:text-orange-300 flex items-center space-x-1"
              >
                <span>View</span>
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          ))}
        </div>
      )}

      {experience.links && (
        <div className="mt-4 flex space-x-4">
          {experience.links.live && (
            <a
              href={experience.links.live}
              className="flex items-center space-x-2 text-sm text-orange-400 hover:text-orange-300"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
          {experience.links.github && (
            <a
              href={experience.links.github}
              className="flex items-center space-x-2 text-sm text-orange-400 hover:text-orange-300"
            >
              <FaGithub />
              <span>Source Code</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

const MyExperience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 lg:px-8" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Building digital experiences that make a difference
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MyExperience;