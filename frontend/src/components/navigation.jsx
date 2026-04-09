import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };


  return (
    <motion.section
      className="mt-6"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-11/12 lg:w-3/4 h-16 bg-[#314445]/50 backdrop-blur-sm mx-auto flex items-center justify-between px-6 lg:px-8 border border-white/20 rounded-full">
        {/* Logo */}
        <div className="w-32 h-10">
          <img src="images/portfolio.png" alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 text-md font-medium">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#d3d3d3] hover:text-teal-300 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hire Me - Desktop */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-[#d3d3d3] bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-white"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden w-11/12 mx-auto mt-4 bg-[#314445]/90 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="text-lg text-white hover:text-teal-300"
                >
                  {item}
                </button>
              ))}

              {/* Mobile Hire Me */}
              <button
                onClick={() => handleScroll("contact")}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Navigation;
