import React from 'react';
import { motion } from 'framer-motion';
import third1 from '../assests/third1.png'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPiedPiper } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaBug } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { y: [0, -20, 0], transition: { yoyo: Infinity, duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const About = () => {
  return (
    <div className="bg-custom-gradient text-white" id="about">
      <div className="w-full h-[50px]"></div>

      <motion.div
        className="w-full opacity-80 h-[100px] border-y text-white flex justify-center items-center gap-24 text-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={iconVariants} whileHover="hover"><TiHtml5 size={40} /></motion.div>
        <motion.div variants={iconVariants} whileHover="hover"><IoLogoCss3 size={40} /></motion.div>
        <motion.div variants={iconVariants} whileHover="hover"><FaReact size={40} /></motion.div>
        <motion.div variants={iconVariants} whileHover="hover"><FaPiedPiper size={40} /></motion.div>
        <motion.div variants={iconVariants} whileHover="hover"><RiNextjsFill size={40} /></motion.div>
        <motion.div variants={iconVariants} whileHover="hover"><FaDocker size={40} /></motion.div>
        <motion.div variants={iconVariants} whileHover="hover"><VscGithub size={40} /></motion.div>
        <motion.div variants={iconVariants} whileHover="hover"><FaBug size={40} /></motion.div>
        <motion.div variants={iconVariants} whileHover="hover"><FaSoundcloud size={40} /></motion.div>
      </motion.div>

      <motion.h1
        className="text-4xl font-semibold text-center mx-4 opacity-75 mt-10 font-serif"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        "Addiction is anything that drains life of <br />
        meaning while making it seem better."
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 mx-auto max-w-screen-lg font-sans">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <img src={third1} className="border w-[500px] rounded-3xl shadow-lg" alt="Rajneesh Kumar" />
        </motion.div>

        <motion.div
          className="text-center md:text-left font-serif"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <h1 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2 text-orange-200">
            About Me
          </h1>
          <p className="text-lg mb-4 italic">
            Hey, <span className="text-orange-500"> I’m Rajneesh Kumar. </span>
          </p>
          <p className="text-lg mb-4">
            I’m a creative frontend developer focusing on React.js with proficiency in HTML, CSS, JavaScript, and various front-end frameworks.
          </p>
          <p className="text-lg mb-4">
            I have been working with web technologies for over 3 years. During this time, I have gained hands-on experience in developing full-stack web applications and automating CI/CD pipelines.
          </p>
          <p className="text-lg mb-4 italic">
            I’m passionate about creating engaging user experiences and am always eager to learn new technologies and improve my skills.
          </p>
          <p className="text-lg mb-4 border-t-2 border-white pt-2">
            Feel free to reach out if you’d like to discuss projects or opportunities!
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center space-x-6 mt-20 flex-wrap gap-6 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, staggerChildren: 0.3 }}
      >
        <motion.div
          className="w-[240px] h-[100px] border border-orange-400 rounded-lg flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-2xl font-semibold text-orange-400">Creative Designs</h2>
        </motion.div>
        <motion.div
          className="w-[240px] h-[100px] border border-orange-400 rounded-lg flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-2xl font-semibold text-orange-400">Front-End Dev</h2>
        </motion.div>
        <motion.div
          className="w-[240px] h-[100px] border border-orange-400 rounded-lg flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-2xl font-semibold text-orange-400">Project Management</h2>
        </motion.div>
        <motion.div
          className="w-[240px] h-[100px] border border-orange-400 rounded-lg flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-2xl font-semibold text-orange-400">Continuous Learning</h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;