import React from 'react'

import { motion } from "framer-motion";
import TextType from './ui/TextType';


import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
} from "react-icons/si";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <motion.section
      className="mt-16 lg:mt-24"
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <div className="w-11/12 lg:w-5/6 bg-[#314445]/50 backdrop-blur-sm mx-auto px-3 sm:px-6 md:px-10 py-12 md:py-16 flex flex-col-reverse lg:flex-row gap-16 lg:gap-0 border border-white/20 rounded-2xl">
        {/* LEFT CONTENT */}
        <div className="w-full text-center lg:text-left">
          <p className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Hello, I'm <span className="text-[#00B1F0]">Jamir</span>
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl text-[#00B1F0] font-medium mt-6">
            A Passionate Full Stack Developer
          </p>

          <p className="text-base md:text-lg text-white/80 font-extralight mt-6 w-full lg:w-3/4 mx-auto lg:mx-0">
            I craft responsive, user-friendly web applications using modern
            technologies like React, Node.js, and Tailwind CSS.
          </p>

          <p className="text-lg md:text-xl text-white font-bold mt-6">
            I am a
            <TextType
              text={[
                " MERN stack Developer",
                " Frontend Enthusiast",
                " Backend Explorer",
                " Team Collaborator",
                " Creative Thinker",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
            {[faFacebookF, faXTwitter, faInstagram, faLinkedinIn, faGithub].map(
              (icon, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={icon}
                  className="py-3 px-3 border-2 text-xl border-[#00A6F4] rounded-full hover:scale-110 transition"
                />
              )
            )}
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition">
              Download Resume
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex items-center justify-center">
          <div className="relative w-48 h-48 md:w-60 md:h-60">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#00A6F4]">
              <img
                src="images/selfpp.png"
                alt="Jamir"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ORBIT ICONS (unchanged animation) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-orange-500"
            >
              <SiNodedotjs size={26} />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
              className="absolute top-6 -right-6 text-cyan-400"
            >
              <SiReact size={26} />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
              className="absolute bottom-6 -right-8 text-yellow-400"
            >
              <SiJavascript size={26} />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-red-500"
            >
              <SiHtml5 size={26} />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
              className="absolute bottom-6 -left-6 text-gray-300"
            >
              <SiExpress size={26} />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
              className="absolute top-6 -left-6 text-green-600"
            >
              <SiMongodb size={26} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home