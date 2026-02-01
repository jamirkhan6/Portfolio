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

const card =
  "w-44 h-52 bg-[#314445]/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all";

const MordernTect = () => {
  return (
    <section className="mt-48 mb-48">
      <div className="w-4/5 mx-auto">
        <p className="text-6xl text-[#F6C100] font-bold text-center">
          Powered by Modern Tech
        </p>
        <div className="w-96 h-1 mx-auto mt-8 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>

        {/* TOP — LEFT ➜ RIGHT */}
        <div className="overflow-hidden mt-24">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 14,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {items.map((item, i) => (
              <div key={i} className={card}>
                <div className="text-6xl mb-4">{item.logo}</div>
                <p className="text-sm">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM — RIGHT ➜ LEFT */}
        <div className="overflow-hidden mt-20">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 14,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {items.map((item, i) => (
              <div key={i} className={card}>
                <div className="text-6xl mb-4">{item.logo}</div>
                <p className="text-sm">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MordernTect;
