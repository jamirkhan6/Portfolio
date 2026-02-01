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
      className="mt-24"
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <div className="w-5/6  bg-[#314445]/50 backdrop-blur-sm mx-auto px-10 py-16 flex justify-between border border-white/20 rounded-2xl">
        <div className="w-full">
          <p className="text-6xl text-white font-bold">
            Hello, I'm <span className="text-[#00B1F0]">Jamir</span>
          </p>
          <p className="text-3xl text-[#00B1F0] font-medium mt-6">
            A Passionate Full Stack Developer
          </p>
          <p className="text-xl text-white/80 font-extralight mt-6 w-3/4">
            I craft responsive, user-friendly web applications using modern
            technologies like React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-2xl text-white font-bold mt-6">
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
              texts={[
                "Welcome to React Bits! Good to see you!",
                "Build some amazing experiences!",
              ]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </p>
          <div className="mt-6 flex justify-between w-2/5">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="py-3 px-2 border-2 text-[#0004f0] text-2xl border-[#00A6F4] rounded-full"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="py-3 px-2 border-2 text-[#f000bc] text-2xl border-[#00A6F4] rounded-full"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="py-3 px-2 border-2 text-[#f00094] text-2xl border-[#00A6F4] rounded-full"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="py-3 px-2 border-2 text-[#0004f0] text-2xl border-[#00A6F4] rounded-full"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="py-3 px-2 border-2 text-[#00f020] text-2xl border-[#00A6F4] rounded-full"
            />
          </div>
          <div className="mt-8 px-6 py-3 w-3/12 text-center rounded-full bg-blue-600">
            Download Resume
          </div>
        </div>

        <div className="w-full ">
          <div className="w-60 h-60 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
            <div
              className="absolute inset-0 m-auto w-60 h-60
                    rounded-full overflow-hidden
                    border-4 border-[#00A6F4]"
            >
              <img
                src="images/selfpp.png"
                alt="Jamir"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Node.js - rotate 360° in 8s */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              whileHover={{ rotate: 0, scale: 1.2 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 text-orange-500"
            >
              <SiNodedotjs size={30} />
            </motion.div>

            {/* React - rotate 360° in 6s */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ rotate: 0, scale: 1.2 }}
              className="absolute top-10 -right-6 text-cyan-400 "
            >
              <SiReact size={30} />
            </motion.div>

            {/* JavaScript - rotate 360° in 5s */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ rotate: 0, scale: 1.2 }}
              className="absolute bottom-10 -right-8 text-yellow-400 "
            >
              <SiJavascript size={30} />
            </motion.div>

            {/* HTML5 - rotate 360° in 7s */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ rotate: 0, scale: 1.2 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-red-500 "
            >
              <SiHtml5 size={30} />
            </motion.div>
            {/* Express.js - rotate 360° in 9s */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ rotate: 0, scale: 1.2 }}
              className="absolute bottom-10 -left-6 text-gray-300 "
            >
              <SiExpress size={30} />
            </motion.div>

            {/* MongoDB - rotate 360° in 6.5s */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              whileHover={{ rotate: 0, scale: 1.2 }}
              className="absolute top-8 -left-4 text-green-600 "
            >
              <SiMongodb size={30} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home