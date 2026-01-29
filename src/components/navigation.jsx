import React from 'react'

const Navigation = () => {
  return (
    <section className="mt-8">
      <div className="w-3/4 h-16 bg-[#314445]/50 backdrop-blur-sm mx-auto flex items-center justify-between px-8 border border-white/20 rounded-full">
        <div className="text-4xl font-bold">logo</div>

        {/* Nav Links */}
        <div className="flex gap-8 text-md font-medium">
          <a href="#" className="hover:text-teal-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-teal-300 transition">
            About Me
          </a>
          <a href="#" className="hover:text-teal-300 transition">
            Projects
          </a>
          <a href="#" className="hover:text-teal-300 transition">
            Contact
          </a>
        </div>

        {/* Right side (button / icon / anything) */}
        <div>
          <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navigation
