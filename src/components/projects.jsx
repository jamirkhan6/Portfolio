import React from "react";

const Projects = () => {
  return (
    <section className="min-h-screen text-white px-10 mt-48">
      <p className="text-6xl text-[#F6C100] font-bold text-center">
        Projects
      </p>
      <div className="w-48 h-1 mx-auto mt-8 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>

      <div className="relative mt-24">
        {/* Project 1 */}
        <div className="h-[60vh] sticky top-20 z-10 w-4/5 bg-[#314445]/50 backdrop-blur-sm mx-auto rounded-3xl flex items-center">
          <div className="flex w-full h-full p-10 gap-10">
            {/* Image */}
            <div className="w-1/2 h-full rounded-2xl bg-black/30 flex items-center justify-center">
              <span className="opacity-50">Project Image</span>
            </div>

            {/* Details */}
            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">Netflix Clone</h2>
              <p className="text-white/80 mb-6">
                A full-featured Netflix clone with authentication, movie listing
                and responsive UI.
              </p>

              <p className="text-sm text-white/60 mb-6">
                React · Tailwind · Firebase
              </p>

              <button className="self-start px-6 py-2 rounded-xl bg-white text-black font-semibold">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* spacer */}
        <div className="h-[5vh]" />
        {/* Project 2 */}
        <div className="h-[60vh] sticky top-30 z-20 w-4/5 bg-[#314445]/50 backdrop-blur-sm mx-auto rounded-3xl flex items-center">
          <div className="flex w-full h-full p-10 gap-10">
            <div className="w-1/2 h-full rounded-2xl bg-black/30 flex items-center justify-center">
              <span className="opacity-50">Project Image</span>
            </div>

            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">Commercial Website</h2>
              <p className="text-white/80 mb-6">
                A business-oriented commercial website built with performance
                and SEO in mind.
              </p>

              <p className="text-sm text-white/60 mb-6">
                Next.js · Tailwind · SEO
              </p>

              <button className="self-start px-6 py-2 rounded-xl bg-white text-black font-semibold">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* spacer */}
        <div className="h-[5vh]" />
        {/* Project 3 */}
        <div className="h-[60vh] sticky top-40 z-30 w-4/5 bg-[#314445]/50 backdrop-blur-sm mx-auto rounded-3xl flex items-center">
          <div className="flex w-full h-full p-10 gap-10">
            <div className="w-1/2 h-full rounded-2xl bg-black/30 flex items-center justify-center">
              <span className="opacity-50">Project Image</span>
            </div>

            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">Book Vibes</h2>
              <p className="text-white/80 mb-6">
                A minimal book discovery platform with clean UI and smooth
                interactions.
              </p>

              <p className="text-sm text-white/60 mb-6">
                React · Tailwind · UI Design
              </p>

              <button className="self-start px-6 py-2 rounded-xl bg-white text-black font-semibold">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* spacer */}
        <div className="h-[5vh]" />
        {/* Project 4 */}
        <div className="h-[60vh] sticky top-50 z-30 w-4/5 bg-[#314445]/50 backdrop-blur-sm mx-auto rounded-3xl flex items-center">
          <div className="flex w-full h-full p-10 gap-10">
            <div className="w-1/2 h-full rounded-2xl bg-black/30 flex items-center justify-center">
              <span className="opacity-50">Project Image</span>
            </div>

            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">Books Vibes 2</h2>
              <p className="text-white/80 mb-6">
                Extended version with advanced UI components and smoother UX.
              </p>

              <p className="text-sm text-white/60 mb-6">
                React · Tailwind · Animation
              </p>

              <button className="self-start px-6 py-2 rounded-xl bg-white text-black font-semibold">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* spacer */}
        <div className="h-[20vh]" />
      </div>
    </section>
  );
};

export default Projects;
