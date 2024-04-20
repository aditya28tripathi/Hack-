import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const FeedbackSection = () => {
  const [sent, setSent] = useState(false);
  const ref = useRef();

  const handleSend = () => {
    setSent(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s650blm', 'template_2643uju', ref.current, {
        publicKey: 'iQOYSOXjjuP0ZrGF-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.section
      className="text-gray-600 body-font relative h-screen"
      initial={{ opacity: 0, y: 100, rotateY: -90, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, rotateY: -90, rotateX: 90 }}
        animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
      >
        {!sent ? (
          <motion.div
            className="lg:w-1/3 md:w-1/2 bg-gradient-to-r from-black to-gray-800 rounded-lg p-8 relative z-10 shadow-md"
            initial={{ opacity: 0, rotateY: -90, rotateX: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
            whileHover={{ rotateY: 5, rotateX: 5, scale: 1.05 }}
            whileTap={{ rotateY: -5, rotateX: -5, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Us!</h2>
            <p className="leading-relaxed mb-5 text-gray-400">Let's Get In Touch :)</p>
            <form className="flex flex-col" ref={ref} onSubmit={sendEmail}>
              <label className="text-gray-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full bg-transparent rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
              />
              <label className="text-gray-400 mb-1">Message</label>
              <textarea
                name="message"
                className="w-full bg-transparent rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mb-4"
              ></textarea>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out"
              
              >
                Send
              </button>
            
            </form>
          </motion.div>
        ) : (
          <motion.div
            className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 relative z-10 shadow-md"
            initial={{ opacity: 0, rotateY: -90, rotateX: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
          >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Explore More</h2>
            <p className="leading-relaxed mb-5 text-gray-600">You have sent your feedback. Thank you!</p>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default FeedbackSection;