import React from 'react'

const About = () => {
  return (
    <section className="mt-24">
      <div className="w-5/6  bg-[#314445]/50 backdrop-blur-sm mx-auto p-8 border border-white/20 rounded-2xl">
        <div>
          <p className="text-6xl text-white font-bold">
            Hello, I'm <span className='text-blue-400'>Jamir</span>
          </p>
          <p className="text-2xl text-blue-400 font-medium mt-6">
            A Passionate Full Stack Developer
          </p>
          <p className="text-2xl text-white/50 font mt-6">
            I craft responsive, user-friendly web applications using modern
            technologies like React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-2xl text-white font-bold"></p>
          <p className="text-2xl text-white font-bold"></p>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default About
