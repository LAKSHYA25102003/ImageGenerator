import React from "react";
import { motion } from "framer-motion";

function TopText() {
  return (
    <div className="relative font-fav1 card-zoom overflow-hidden shadow-xl min-h-[400px]">
      <div className="bg-hero card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  min-h-[400px] flex justify-center items-center ">
        <div className="pt-6 text-white flex justify-center items-center w-full">
          <div className="max-[1390px]:w-[100%]  w-[82%] card-zoom-text flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="text-center p-2 font-bold text-4xl   max-[1200px]:text-3xl max-[1200px]:w-[100%] max-[1400px]:w-[70%] w-[60%]"
            >
              Welcome to Dashtoon Image Generator
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="w-[50%] max-[1200px]:font-semibold font-bold max-[600px]:text-[15px] max-[1200px]:text-1xl text-2xl max-[1200px]:w-[70%]"
            >
              <h1 className="text-center p-2   ">
                Transform Text into Stunning Visuals, Instantly and
                Effortlessly!
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopText;
