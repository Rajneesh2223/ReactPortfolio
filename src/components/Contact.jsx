import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandPointRight } from "react-icons/fa";
import { IoIosThunderstorm } from "react-icons/io";

const experiences = [
    
    {
      title: "Intern Frontend Developer",
      company: "Aeonaxy Tech PVT. LTD.",
      duration: "Apr 2024 - May 2024",
      responsibilities: [
        "Designed and implemented a responsive homepage based on Figma designs.",
        "Ensured cross-browser compatibility."
      ]
    },
    {
      title: "Participant",
      company: "Summer Winter of Code (SWOC’23)",
      duration: "",
      responsibilities: [
        "Contributed to projects like Mindspace and PaletteGram.",
        "Optimized front-end performance and collaborated globally."
      ]
    },
    {
        title: "Participant",
        company: "Summer Summer  of Code (SSOC’24)",
        duration: "",
        responsibilities: [
          "Contributed to projects like Mindspace and PaletteGram.",
          "Optimized front-end performance and collaborated globally."
        ]
      },
    {
      title: "Contributor",
      company: "Hacktoberfest 2023",
      duration: "",
      responsibilities: [
        "Actively contributed to multiple open-source repositories."
      ]
    },
   
  ];

  const ExperienceCard = ({ title, company, duration, responsibilities }) => {
    return (
      <motion.div
        className="border border-gray-300 rounded-lg p-4 mb-4 ml-4 bg-custom-gradient shadow-md"
        id='contact'
        whileHover={{ scale: 1.05 }} // Hover animation: scale up slightly
        transition={{ duration: 0.2 }} // Transition duration for hover animation
      >
        <div className="flex items-center mb-2">
          <FaHandPointRight className="text-orange-400 mr-2" />
          <h3 className="text-xl font-semibold text-white-900">{title}</h3>
        </div>
        <h4 className="text-lg font-medium text-white-700">{company}</h4>
        <p className="text-sm text-white-600">{duration}</p>
        <ul className="list-disc list-inside mt-2 opacity-50">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    );
  };
  
  const MyExperience = () => {
    return (
      <div className="container mx-auto px-4 py-10 bg-custom-gradient text-white" id='experience'>
        <h1 className="text-5xl text-orange-400 text-center font-bold">My Experiences</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
          <div className=' '>
            <h1 className='text-6xl font-normal leading-tight flex justify-center '>
              Boost Your Brand <br />
              with my extensive <br />
              expertise in <br />
              Coding
            </h1>
            <div className='flex justify-center mt-10'>
              <IoIosThunderstorm style={{ color: 'orange', fontSize: '400px' }} />
            </div>
          </div>
          <div className='flex flex-col space-y-4 border-l text-white '>
            <AnimatePresence>
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  duration={exp.duration}
                  responsibilities={exp.responsibilities}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyExperience;