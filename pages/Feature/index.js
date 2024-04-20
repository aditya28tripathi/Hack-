import React from 'react';
import { motion } from 'framer-motion';
import Header1 from '@/components/Header1';
import { Scene } from 'three';
const NextJsComponent = () => {
  
  return (
    <>
     <Header1/> 
    <section className="text-gray-400 body-font bg-gray-900">
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Increased duration for a slower animation
      style={{ perspective: "1000px" }} // Adding perspective for 3D effect
    >
     <div className="container px-5 py-24 mx-auto">
        {/* First animated div */}
        <motion.div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-700 sm:flex-row flex-col"
          initial={{ x: -100, opacity: 0, rotateY: -180 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-800 text-indigo-300 flex-shrink-0">
            <img className="w-full h-full rounded-full object-cover" src="gg.jpg" alt="Profile Picture" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-100 text-lg title-font font-medium mb-2">Arian Devin</h2>
            <p className="leading-relaxed text-base">A water artist is a creative individual who specializes in using water as their primary medium for artistic expression. They harness the fluidity and transparency of water to produce captivating works of art, ranging from watercolor paintings to intricate water sculptures, reflecting the beauty and versatility of this elemental medium.</p>
            <a className="mt-3 text-indigo-300 inline-flex items-center">Show More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </motion.div>
        {/* Second animated div */}
        <motion.div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-700 sm:flex-row flex-col"
          initial={{ x: -100, opacity: 0, rotateY: -180 }} // Initial rotation to make it invisible
          animate={{ x: 0, opacity: 1, rotateY: 0 }} // Animating rotation to make it visible
          transition={{ duration: 1.2, delay: 0.2 }} // Increased duration for a slower animation and added delay
          style={{ backfaceVisibility: "hidden" }} // Hiding backface during rotation
        >
          
          
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-100 text-lg title-font font-medium mb-2">Smith Canael</h2>
            <p className="leading-relaxed text-base">
Creating art that resonates with both the heart and home, this artist's pieces infuse spaces with warmth, personality, and a timeless aesthetic appeal.</p>
            <a className="mt-3 text-indigo-300 inline-flex items-center">Show More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-800 text-indigo-300 flex-shrink-0">
    <img className="w-full h-full rounded-full object-cover" src="ff.jpg" alt="Profile Picture" />
  </div>
         
        </motion.div>
        {/* Third animated div */}
        <motion.div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col"
          initial={{ x: -100, opacity: 0, rotateY: -180 }} // Initial rotation to make it invisible
          animate={{ x: 0, opacity: 1, rotateY: 0 }} // Animating rotation to make it visible
          transition={{ duration: 1.4, delay: 0.4 }} // Increased duration for a slower animation and added delay
          style={{ backfaceVisibility: "hidden" }} // Hiding backface during rotation
        >
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-800 text-indigo-300 flex-shrink-0">
            <img className="w-full h-full rounded-full object-cover" src="https://www.milwaukeemag.com/wp-content/uploads/2019/04/Mulvey-2.jpg" alt="Profile Picture" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-100 text-lg title-font font-medium mb-2">Karlous</h2>
            <p className="leading-relaxed text-base">
Karlous is a literary virtuoso, crafting narratives that transcend boundaries. With an eloquent pen and boundless creativity, he paints vivid tapestries of emotion and insight, leaving readers spellbound by his storytelling prowess.





</p>
            <a className="mt-3 text-indigo-300 inline-flex items-center">Show More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </motion.div>
        <button className="flex mx-auto mt-20 text-white bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg">More</button>
      </div>
    </motion.section>
    </section>
    </>
  ); 
};

export default NextJsComponent;
