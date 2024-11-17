import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

const SkillBadge = ({ text }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border border-gray-700 shadow-lg"
  >
    <span className="text-gray-300 font-medium">{text}</span>
  </motion.div>
);

const ContactCard = ({ icon: Icon, title, value, link, color }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-${color}-500 transition-all duration-300`}
  >
    <div className={`p-3 rounded-lg bg-${color}-500/10 text-${color}-500`}>
      <Icon className="text-2xl" />
    </div>
    <div className="flex-1">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-white font-medium">{value}</p>
    </div>
  </motion.a>
);

const Connect = () => {
  const skills = [
    "UI/UX Design", "Web Design", "React.js", "Next.js",
    "Frontend Development", "Responsive Design", "TypeScript", "Tailwind CSS","Firebase","Backend Development"
    ,"Bootstrap","Framer Motion","Node JS","Express JS","Fastapi","MongoDB","MySql","JWT","Github","Git","Postman",
    "Firebase Firestore","Docker","Redux"
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen relative overflow-hidden" id="connect">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-16 pb-8 px-4"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">Skills & Expertise</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillBadge text={skill} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      
      <div className="relative px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Let's Connect
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 px-4">
            <ContactCard
              icon={FaEnvelope}
              title="Email"
              value="rajneeshkumar6267@gmail.com"
              link="mailto:rajneeshkumar6267@gmail.com"
              color="blue"
            />
            <ContactCard
              icon={FaPhone}
              title="Phone"
              value="+91 7565873395"
              link="tel:+917565873395"
              color="green"
            />
            <ContactCard
              icon={FaGithub}
              title="GitHub"
              value="Rajneesh2223"
              link="https://github.com/Rajneesh2223"
              color="gray"
            />
            <ContactCard
              icon={HiLocationMarker}
              title="Location"
              value="India"
              link="#"
              color="red"
            />
          </div>

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;