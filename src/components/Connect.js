import React from 'react';
import '../index.css';
import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

const Connect = () => {
  return (
    <div className='bg-custom-gradient min-h-screen ' id='connect'>
      {/* Skills Section */}
      <div className='bg-gray-700 w-full opacity-80 h-[80px] border-y text-white flex justify-center items-center gap-6 text-2xl overflow-x-auto'>
        <h1 className='font-dm-serif'>
          UI / UX Design
        </h1>
        <h1 className='font-dm-serif'>*</h1>
        <h1 className='font-dm-serif'>
          Web Design
        </h1>
        <h1 className='font-dm-serif'>*</h1>
        <h1 className='font-dm-serif'>
          React JS
        </h1>
        <h1 className='font-dm-serif'>*</h1>
        <h1 className='font-dm-serif'>
          Next.js
        </h1>
        <h1 className='font-dm-serif'>*</h1>
        <h1 className='font-dm-serif'>
          Web Design
        </h1>
        <h1 className='font-dm-serif'>*</h1>
        <h1 className='font-dm-serif'>
          UI / UX Design
        </h1>
        <h1 className='font-dm-serif'>*</h1>
        <h1 className='font-dm-serif'>
          Next.js
        </h1>
      </div>

      {/* Contact Section */}
      <div className='flex items-center justify-center h-screen p-4'>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96 h-96 flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Contact Me</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-300">
              <FaEnvelope className="mr-3 text-blue-400 text-xl" />
              <a href="mailto:rajneeshkumar6267@gmail.com" className="hover:text-blue-500">rajneeshkumar6267@gmail.com</a>
            </li>
            <li className="flex items-center text-gray-300">
              <FaPhone className="mr-3 text-green-400 text-xl" />
              <a href="tel:+91 7565873395" className="hover:text-green-500">+91 7565873395</a>
            </li>
            <li className="flex items-center text-gray-300">
              <FaGithub className="mr-3 text-gray-400 text-2xl" />
              <a href="https://github.com/Rajneesh2223" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">https://github.com/Rajneesh2223</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Connect;
