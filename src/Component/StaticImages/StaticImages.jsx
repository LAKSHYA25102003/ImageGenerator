import React from "react";
import { motion } from "framer-motion";

function StaticImages() {
  return (
    <div className="py-6 pt-10 mt-6 text-white flex justify-center items-center">
      <div className="w-[80%] max-[1000px]:w-[100%] flex flex-col gap-14 justify-center items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center max-[700px]:text-[20px] font-bold text-2xl"
        >
          Get inspired with our AI-generated images and art gallery
        </motion.div>
        <div className="grid w-[100%]  max-[1000px]:grid-cols-1 max-[1488px]:grid-cols-2 grid-cols-3 gap-10 ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="ai  relative card-zoom  overflow-hidden shadow-xl w-[100%] min-h-[600px]"
          >
            <div className="ai-image  bg-ai3 card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            className="ai  relative card-zoom  overflow-hidden shadow-xl w-[100%] min-h-[600px]"
          >
            <div className="ai-image bg-ai5  card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="ai relative  overflow-hidden  w-[100%] shadow-xl   min-h-[600px]"
          >
            <div className="ai-image bg-ai1  absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center "></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default StaticImages;
