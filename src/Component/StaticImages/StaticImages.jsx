import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function StaticImages() {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });
  return (
    <div className="py-6 text-white flex justify-center items-center">
      <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
        <h1 className="text-center font-bold text-3xl">
          Get inspired with our AI-generated images and art gallery
        </h1>
        <div ref={ref} className="grid grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="ai relative  overflow-hidden shadow-xl w-[400px] min-h-[600px] "
          >
            <div className="ai-image bg-ai1  absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="ai relative card-zoom overflow-hidden shadow-xl w-[400px] min-h-[600px]"
          >
            <div className="ai-image bg-ai2 card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="ai relative card-zoom overflow-hidden shadow-xl w-[400px] min-h-[600px]"
          >
            <div className="ai-image bg-ai3 card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="ai relative card-zoom overflow-hidden shadow-xl w-[400px] min-h-[600px]"
          >
            <div className="ai-image bg-ai4 card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="ai relative card-zoom overflow-hidden shadow-xl w-[400px] min-h-[600px]"
          >
            <div className="ai-image bg-ai5 card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="ai relative card-zoom overflow-hidden shadow-xl w-[400px] min-h-[600px]"
          >
            <div className="ai-image bg-ai6 card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default StaticImages;
