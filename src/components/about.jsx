import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCode} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <section className="mt-48">
      <div className="grid grid-cols-5 gap-20 mx-auto w-5/6 ">
        <div className="col-span-2 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faCode}
              className="text-black text-xl px-4 py-4 bg-[#F6BA00] rounded-full"
            />
            <p className="text-2xl font-bold text-[#FEF9C2]">Hello There!</p>
          </div>
          <div className="mt-6">
            <p className="mt-6 text-xl font-semibold">
              I'm Shehabul Islam, a passionate web developer from Dhaka,
              Bangladesh 🇧🇩. I specialize in crafting elegant, responsive, and
              interactive digital experiences that leave a lasting impression.
            </p>
            <p className="mt-6 text-xl font-semibold">
              I'm Shehabul Islam, a passionate web developer from Dhaka,
              Bangladesh 🇧🇩. I specialize in crafting elegant, responsive, and
              interactive digital experiences that leave a lasting impression.
            </p>
            <button className="mt-6 px-6 py-3 text-black rounded-full bg-[#F6C100] font-semibold ">
              Read My Full Story...
            </button>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex flex-col items-center ">
            <p className="border border-[#F6C100] px-6 py-3 rounded-full text-[#F6C100] font-semibold">
              Get To Know Me
            </p>
            <h1 className="mt-10 text-6xl font-bold text-[#F6C100]">
              My Story
            </h1>
            <p className="mt-4 text-xl ">
              Passionate Developer | Creative Thinker | Problem Solver
            </p>
            <div className="w-42 h-1 mt-12 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
          </div>
          <div className="w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl p-6 mt-12">
            <p className='text-4xl'>
              "Code is like poetry — clean, meaningful, and expressive. Every
              line tells a story."
            </p>
            <p className='text-end text-2xl'>__ My Phiosophy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
