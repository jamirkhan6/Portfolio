import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFutbol,
  faRocket,
  faFighterJet,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import SkillBar from "./ui/percentage";

/* ---------------- COUNT UP ---------------- */
const CountUp = ({ target }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
};

/* ---------------- MOBILE ICON CARD ---------------- */
const MobileIconCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center gap-3 bg-[#314445]/60 rounded-2xl py-6 border border-white/10">
    <div className="text-3xl text-[#F6C100]">{icon}</div>
    <p className="text-sm font-medium">{title}</p>
  </div>
);

/* ---------------- MOBILE STAT CARD ---------------- */
const MobileStatCard = ({ number, label }) => (
  <div className="bg-[#314445]/60 rounded-xl border border-white/10 px-4 py-5 text-center">
    <p className="text-3xl font-bold text-[#F6C100]">
      <CountUp target={number} />+
    </p>
    <p className="text-xs mt-1">{label}</p>
  </div>
);

/* ---------------- DESKTOP CARDS ---------------- */
const AnimatedCard = ({ icon, title }) => (
  <motion.div
    whileHover={{
      y: -10,
      boxShadow: "0 0 30px rgba(246,193,0,0.35)",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="flex flex-col items-center justify-center gap-6 w-full bg-[#314445]/50 backdrop-blur-sm border border-white/20 rounded-2xl py-12 cursor-pointer"
  >
    <motion.div
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-5xl text-[#F6C100]"
    >
      {icon}
    </motion.div>
    <p className="text-xl">{title}</p>
  </motion.div>
);

const NumberCard = ({ number, label }) => (
  <div className="flex flex-col items-center justify-center bg-[#314445]/50 border border-white/20 rounded-2xl py-8">
    <p className="text-5xl font-bold text-[#F6C100]">
      <CountUp target={number} />+
    </p>
    <p className="text-2xl mt-2">{label}</p>
  </div>
);

/* ---------------- MAIN ---------------- */
const Expertise = () => {
  return (
    <section className="mt-24 md:mt-32 lg:mt-48">
      <div className="mx-auto w-[95%] lg:w-5/6">
        {/* MAIN HEADLINE (ALL SCREENS) */}
        <p className="text-3xl sm:text-4xl lg:text-6xl text-[#F6C100] font-bold text-center">
          My Expertise By The Number
        </p>
        <div className="w-40 sm:w-72 lg:w-96 h-1 mx-auto mt-6 lg:mt-8 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>

        {/* ---------- MOBILE LAYOUT ---------- */}
        <div className="block lg:hidden mt-12 space-y-10">
          {/* My Expertise (top on mobile) */}
          <div className="bg-[#314445]/60 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-2 text-xl text-[#F6C100] font-bold mb-4">
              <FontAwesomeIcon icon={faLightbulb} />
              <p>My Expertise</p>
            </div>
            <SkillBar title="Frontend" percent={85} />
            <SkillBar title="Backend" percent={35} />
            <SkillBar title="Problem Solving" percent={70} />
            <SkillBar title="Creativity" percent={60} />
          </div>

          {/* Mobile icon grid */}
          <div className="grid grid-cols-2 gap-4">
            <MobileIconCard
              icon={<FontAwesomeIcon icon={faCode} />}
              title="Coding"
            />
            <MobileIconCard
              icon={<FontAwesomeIcon icon={faFutbol} />}
              title="Football"
            />
            <MobileIconCard
              icon={<FontAwesomeIcon icon={faRocket} />}
              title="Innovation"
            />
            <MobileIconCard
              icon={<FontAwesomeIcon icon={faFighterJet} />}
              title="Traveling"
            />
          </div>

          {/* Mobile stats */}
          <div className="grid grid-cols-2 gap-4">
            <MobileStatCard number={15} label="Projects" />
            <MobileStatCard number={200} label="Commits" />
            <MobileStatCard number={480} label="Coding Hours" />
            <MobileStatCard number={80} label="Coffee" />
          </div>
        </div>

        {/* ---------- DESKTOP (UNCHANGED) ---------- */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mt-24">
          <AnimatedCard
            icon={<FontAwesomeIcon icon={faCode} />}
            title="Coding"
          />
          <AnimatedCard
            icon={<FontAwesomeIcon icon={faFutbol} />}
            title="Football"
          />

          <div className="col-span-2 row-span-2 bg-[#314445]/50 border border-white/20 rounded-2xl p-6">
            <div className="w-10/12 mx-auto mt-6">
              <div className="flex items-center gap-2 text-3xl text-[#F6C100] font-bold mb-6">
                <FontAwesomeIcon icon={faLightbulb} />
                <p>My Expertise</p>
              </div>
              <SkillBar title="Frontend" percent={85} />
              <SkillBar title="Backend" percent={35} />
              <SkillBar title="Problem Solving" percent={70} />
              <SkillBar title="Creativity" percent={60} />
            </div>
          </div>

          <AnimatedCard
            icon={<FontAwesomeIcon icon={faRocket} />}
            title="Innovation"
          />
          <AnimatedCard
            icon={<FontAwesomeIcon icon={faFighterJet} />}
            title="Traveling"
          />

          <NumberCard number={15} label="Projects Built" />
          <NumberCard number={200} label="Git Commits" />
          <NumberCard number={480} label="Coding Hours" />
          <NumberCard number={80} label="Cups of Coffee" />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
