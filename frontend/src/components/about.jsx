import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="mt-20 lg:mt-48">
      <div className="grid lg:grid-cols-5 gap-20 mx-auto w-5/6 ">
        {/* right card -1  */}
        <div className=" lg:hidden col-span-5 lg:col-span-3">
          <div className="flex flex-col items-center ">

            {/* Animated heading */}
            <motion.h1
              className="mt-10 text-4xl lg:text-6xl font-bold text-[#F6C100]"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              My Story
            </motion.h1>

            {/* Animated subtext */}
            <motion.p
              className="mt-4 text-xl text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              Passionate Developer | Creative Thinker | Problem Solver
            </motion.p>

            <div className="w-42 h-1 mt-6 lg:mt-12 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
          </div>

          {/* Animated quote */}
          <div className="mt-12 w-full">
            <motion.p
              className="text-4xl"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              "Code is like poetry — clean, meaningful, and expressive. Every
              line tells a story."
            </motion.p>

            <motion.p
              className="text-end text-2xl mt-4"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              __ My Philosophy
            </motion.p>
          </div>
        </div>
        {/* Left card */}
        <div className="col-span-5 lg:col-span-2 w-full bg-[#314445]/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            {/* Icon stays static */}
            <FontAwesomeIcon
              icon={faCode}
              className="text-black text-xl px-4 py-4 bg-[#F6BA00] rounded-full"
            />
            <p className="text-2xl font-bold text-[#FEF9C2]">Hello There!</p>
          </div>

          <div className="mt-6 space-y-6">
            {/* Animated Text 1 */}
            <motion.p
              className="text-xl font-semibold"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              I'm Jamir Khan, a passionate web developer from Dhaka,
              Bangladesh 🇧🇩. I specialize in crafting elegant, responsive, and
              interactive digital experiences that leave a lasting impression.
            </motion.p>

            {/* Animated Text 2 */}
            <motion.p
              className="text-xl font-semibold"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              I also love collaborating with creative teams and continuously
              improving my skills to deliver top-notch solutions.
            </motion.p>

            {/* Button stays static */}
            <button className="mt-6 px-6 py-3 text-black rounded-full bg-[#F6C100] font-semibold">
              Read My Full Story...
            </button>
          </div>
        </div>

        {/* Right card */}
        <div className="hidden lg:block col-span-5 lg:col-span-3">
          <div className="flex flex-col items-center ">
            {/* Static */}
            <p className="border border-[#F6C100] px-6 py-3 rounded-full text-[#F6C100] font-semibold">
              Get To Know Me
            </p>

            {/* Animated heading */}
            <motion.h1
              className="mt-10 text-6xl font-bold text-[#F6C100]"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              My Story
            </motion.h1>

            {/* Animated subtext */}
            <motion.p
              className="mt-4 text-xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              Passionate Developer | Creative Thinker | Problem Solver
            </motion.p>

            <div className="w-42 h-1 mt-8 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
          </div>

          {/* Animated quote */}
          <div className="mt-16 w-full">
            <motion.p
              className="text-4xl dmMono"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              "Code is like poetry — clean, meaningful, and expressive. Every
              line tells a story."
            </motion.p>

            <motion.p
              className="text-end text-2xl mt-4"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              __ My Philosophy
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
