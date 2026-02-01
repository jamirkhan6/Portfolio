import React from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.section
      className="mt-8"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <div className="w-3/4 h-16 bg-[#314445]/50 backdrop-blur-sm mx-auto flex items-center justify-between px-8 border border-white/20 rounded-full">
        <div className="w-32 h-12 bg-transparent">
          <img src="images/portfolio.png" alt="Logo" />
        </div>

        {/* Nav Links */}
        <div className="flex gap-8 text-md font-medium">
          <a href="#" className="text-[#d3d3d3] hover:text-teal-300 transition">
            Home
          </a>
          <a href="#" className="text-[#d3d3d3] hover:text-teal-300 transition">
            Projects
          </a>
          <a href="#" className="text-[#d3d3d3] hover:text-teal-300 transition">
            About Me
          </a>
          <a href="#" className="text-[#d3d3d3] hover:text-teal-300 transition">
            Contact
          </a>
        </div>

        {/* Right side */}
        <div>
          <button className="px-5 py-2 rounded-full text-[#d3d3d3] bg-white/10 hover:bg-white/20 transition">
            Hire Me
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Navigation;
