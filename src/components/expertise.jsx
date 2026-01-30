import React from 'react'

import SkillBar from './ui/percentage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faLightbulb, } from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
  return (
    <section className="mt-48 pb-48">
      <div className="mx-auto w-5/6">
        <p className="text-6xl text-[#F6C100] font-bold text-center">
          My Expartise By The Number
        </p>
        <div className="w-96 h-1 mx-auto mt-8 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>

        <div className="grid grid-cols-4 gap-8 mt-24">
          <div className="col-span-1 flex flex-col items-center justify-center gap-2 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl">
            <FontAwesomeIcon icon={faMusic} className="text-3xl" />
            <p className="text-xl">Singing</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-2 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl">
            <FontAwesomeIcon icon={faMusic} className="text-3xl" />
            <p className="text-xl">Singing</p>
          </div>

          <div className="col-span-2 row-span-2 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl p-6">
            <div className="w-10/12 mx-auto mt-6">
              <div className="text-3xl text-[#F6C100] font-bold flex gap-2 items-center mb-6">
                <FontAwesomeIcon icon={faLightbulb} />
                <p>My Expertise</p>
              </div>
              <SkillBar title="Frontend" percent={85} />
              <SkillBar title="Backend" percent={35} />
              <SkillBar title="Problem Solving" percent={70} />
              <SkillBar title="Creativity" percent={60} />
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center gap-2 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl">
            <FontAwesomeIcon icon={faMusic} className="text-3xl" />
            <p className="text-xl">Singing</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-2 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl">
            <FontAwesomeIcon icon={faMusic} className="text-3xl" />
            <p className="text-xl">Singing</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-8 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl p-6">
            <p>100+</p>
            <p>commits</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-8 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl p-6">
            <p>100+</p>
            <p>commits</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-8 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl p-6">
            <p>100+</p>
            <p>commits</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-8 w-full bg-[#314445]/50 backdrop-blur-sm border border-[#F6C100] rounded-2xl p-6">
            <p>100+</p>
            <p>commits</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise
