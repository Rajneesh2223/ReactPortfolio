import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowTrendUp, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { useLocation } from 'react-router-dom';
import Second from '../assests/Second.png'

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const location = useLocation();
  const [inView, setInView] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div ref={homeRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <ParticleBackground />
      
      <AnimatePresence>
        {inView && (
          <motion.div 
            className="container mx-auto px-4 h-screen flex items-center justify-between relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div 
              className="flex-1 z-10 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-orange-400 font-medium text-xl"
              >
                👋 Hello, I'm a
              </motion.div>

              <motion.h1 
                className="text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Full-Stack
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-400 text-lg max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Crafting digital experiences with modern technologies and creative solutions.
              </motion.p>

              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full
                           flex items-center gap-2 font-medium shadow-lg shadow-orange-500/25
                           hover:shadow-orange-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                  <FaArrowTrendUp className="text-lg" />
                </motion.button>

                <div className="flex gap-4">
                  {[FaGithub, FaLinkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="text-xl text-gray-400 hover:text-orange-400" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="flex-1 relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <img 
                  src={Second} 
                  alt="Developer" 
                  className="w-[600px] relative z-10 drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Location Badge */}
            <motion.div 
              className="absolute bottom-32 left-1/2 transform -translate-x-1/2
                         bg-gray-800/80 backdrop-blur-sm border border-gray-700
                         px-6 py-3 rounded-full flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 font-medium">Available for Work</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1 text-gray-400">
                <HiLocationMarker />
                <span>Based in India</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;