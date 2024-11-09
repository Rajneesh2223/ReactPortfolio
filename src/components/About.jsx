import React from 'react';
import { motion } from 'framer-motion';
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact, FaPiedPiper, FaDocker, FaSoundcloud } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { FaBug } from "react-icons/fa";
import third1 from "../assests/third1.png"

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: {
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 10 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const About = () => {
  const technologies = [
    { Icon: TiHtml5, name: "HTML5" },
    { Icon: IoLogoCss3, name: "CSS3" },
    { Icon: FaReact, name: "React" },
    { Icon: FaPiedPiper, name: "Pied Piper" },
    { Icon: RiNextjsFill, name: "Next.js" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: VscGithub, name: "GitHub" },
    { Icon: FaBug, name: "Debug" },
    { Icon: FaSoundcloud, name: "SoundCloud" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4" id="about">
      {/* Tech Stack Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-3 md:grid-cols-9 gap-8 p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm">
          {technologies.map(({ Icon, name }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 group"
              variants={iconVariants}
              whileHover="hover"
            >
              <Icon className="text-4xl text-orange-400 group-hover:text-orange-300 transition-colors" />
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif italic text-orange-300 leading-relaxed">
          "Addiction is anything that drains life of meaning<br />while making it seem better."
        </h2>
      </motion.div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-orange-400/20 blur-2xl rounded-full"></div>
          <img 
            src={third1} 
            className="relative rounded-2xl shadow-2xl border-2 border-orange-400/20 w-full object-cover" 
            alt="Rajneesh Kumar" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-orange-400 font-serif">About Me</h1>
          <div className="space-y-4 text-gray-300">
            <p className="text-xl font-medium">
              Hey, <span className="text-orange-400">I'm Rajneesh Kumar.</span>
            </p>
            <p>
              I'm a creative frontend developer focusing on React.js with proficiency in HTML, CSS, JavaScript, and various front-end frameworks.
            </p>
            <p>
              I have been working with web technologies for over 3 years. During this time, I have gained hands-on experience in developing full-stack web applications .
            </p>
            <p className="italic text-orange-300">
              I'm passionate about creating engaging user experiences and am always eager to learn new technologies and improve my skills.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-700">
            <p className="text-gray-400">
              Feel free to reach out if you'd like to discuss projects or opportunities!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills Cards */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          "Front-End Dev",
          "Project Management",
          "Continuous Learning",
          "Back-End Development"
        ].map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-400/20 shadow-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-orange-400 text-center">{skill}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;