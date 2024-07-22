import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <>
      <nav className='navbar py-10 bg-black'>
        <div className='container flex justify-between items-center py-4 text-white z-50'>
          <motion.h1 
            className='text-xl font-bold ml-24'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            Rajneesh
          </motion.h1>
          <motion.div 
            className='flex'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className='flex space-x-4 font-sans'>
              <motion.li 
                whileHover={{ scale: 1.1, color: '#f97316' }} // Change color on hover
                whileTap={{ scale: 0.95 }} // Slightly shrink on click
              >
                <Link to='home' smooth={true} duration={500} className='hover:underline'>
                  Home
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: '#f97316' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to='about' smooth={true} duration={500} className='hover:underline'>
                  About
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: '#f97316' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to='projects' smooth={true} duration={500} className='hover:underline'>
                  Projects
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: '#f97316' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to='experience' smooth={true} duration={500} className='hover:underline'>
                  My Experience
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: '#f97316' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to='contact' smooth={true} duration={500} className='hover:underline'>
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className='flex space-x-4 mr-24 z-30'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              href='https://github.com/Rajneesh2223' 
              className='flex items-center hover:underline' 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#f97316' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className='text-white text-xl mr-2' />
              GitHub
            </motion.a>
            <motion.a 
              href='https://www.linkedin.com/in/rajneesh-kumar-740674211/' 
              className='flex items-center hover:underline' 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#f97316' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className='text-blue-500 text-xl mr-2' />
              LinkedIn
            </motion.a>
            <motion.a 
              href='https://drive.google.com/file/d/1pO4ZO1zcuDrSvhap3voDopw41HtIwxt0/view?usp=drive_link' 
              className='flex items-center hover:underline' 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#f97316' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFileAlt className='text-gray-300 text-xl mr-2' />
              Resume
            </motion.a>
          </motion.div>
        </div>
      </nav>
      <motion.div 
        className='fixed bottom-4 right-4 z-50 w-12 h-12'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link to='home' smooth={true} duration={500} className='flex items-center justify-center border border-white text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors'>
          <FaArrowUp className='text-lg' />
        </Link>
      </motion.div>
    </>
  );
}

export default Navbar;
