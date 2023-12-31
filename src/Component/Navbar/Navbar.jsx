import React from "react";
import logo from "../../Images/logo.png";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="h-20 bg-[#050814] sticky top-0 left-0 right-0 z-50  opacity-[85%] p-4 flex items-center justify-center border-b-[1px] border-gray-400">
      <div className="flex justify-between items-center max-[1000px]:px-[1px] max-[1000px]:px-3 max-[1000px]:w-[100%] w-[80%]">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img className="h-16" src={logo} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-white flex justify-center items-center gap-5"
        >
          <a href="https://github.com/LAKSHYA25102003/ImageGenerator" target="_blank">
            <button className="font-medium text-lg max-[1000px]:text-base cursor-pointer hover:bg-cyan-500 p-1 px-2 outline-none border-none  hover:scale-[1.1]  rounded-md transition delay-150 duration-300 ease-in-out">
              Github Link
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
