
import front from '../assests/front.png'
import my from '../assests/my.png'
import Second from '../assests/Second.png'
import { FaArrowTrendUp } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Home = () => {
  const location = useLocation();
  const path = location.pathname;
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

  return (
    <div ref={homeRef} className='bg-custom-gradient text-white h-screen flex items-center'>
      <AnimatePresence>
        {inView && (
          <>
            <motion.div 
              className='flex-1 ml-24 z-10'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              <h1 className='text-8xl font-bold'>
                Full-Stack Developer
              </h1>
              <motion.button 
                className='mt-20 text-[20px] hover:bg-orange-400 bg-orange-500 rounded-full py-3 px-10 border-2 flex items-center gap-2'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Hire Me
                <span><FaArrowTrendUp /></span>
              </motion.button>
            </motion.div>

            <motion.div 
              className='flex-1 justify-end z-20 mb-40'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
            >
              <img src={Second} alt='Front view' className='w-[600px] mb-56 h-auto object-cover' />
            </motion.div>

            <motion.div 
              className='absolute ml-[700px] mt-[600px] flex flex-col items-center'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
            >
              <h1 className='text-white mt-50 text-lg font-bold '>OPEN TO WORK *</h1>
              <p className='opacity-70 '>Based In India</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;