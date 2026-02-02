import React from "react";
import { motion } from "framer-motion";

const techs = [
  { name: "Tailwind CSS", logo: "🌬️" },
  { name: "DaisyUI", logo: "🌼" },
  { name: "SwiperJS", logo: "🌀" },
  { name: "Framer Motion", logo: "🎞️" },
  { name: "GSAP", logo: "⚡" },
  { name: "React", logo: "⚛️" },
  { name: "Next.js", logo: "▲" },
  { name: "Node.js", logo: "🟢" },
  { name: "Express", logo: "🚀" },
  { name: "MongoDB", logo: "🍃" },
  { name: "Firebase", logo: "🔥" },
  { name: "TypeScript", logo: "📘" },
];

const items = [...techs, ...techs];

const card = `
  w-28 h-36
  sm:w-32 sm:h-40
  md:w-40 md:h-48
  lg:w-44 lg:h-52
  bg-[#314445]/60 backdrop-blur-sm
  rounded-2xl
  flex flex-col items-center justify-center
  transition-all
  lg:grayscale lg:hover:grayscale-0
`;

const ModernTech = () => {
  return (
    <section className="mt-28 md:mt-32 lg:mt-48">
      <div className="w-[95%] sm:w-11/12 lg:w-4/5 mx-auto">
        <p className="text-3xl sm:text-4xl lg:text-6xl text-[#F6C100] font-bold text-center">
          Powered by Modern Tech
        </p>

        <div className="w-48 sm:w-72 lg:w-96 h-1 mx-auto mt-6 lg:mt-8 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>

        {/* TOP — LEFT ➜ RIGHT */}
        <div className="overflow-hidden mt-16 lg:mt-24">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 14,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {items.map((item, i) => (
              <div key={i} className={card}>
                <div className="text-3xl sm:text-4xl lg:text-6xl mb-2 lg:mb-4">
                  {item.logo}
                </div>
                <p className="text-[10px] sm:text-xs lg:text-sm text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM — RIGHT ➜ LEFT */}
        <div className="overflow-hidden mt-10 lg:mt-20">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-10 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 14,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {items.map((item, i) => (
              <div key={i} className={card}>
                <div className="text-3xl sm:text-4xl lg:text-6xl mb-2 lg:mb-4">
                  {item.logo}
                </div>
                <p className="text-[10px] sm:text-xs lg:text-sm text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernTech;
