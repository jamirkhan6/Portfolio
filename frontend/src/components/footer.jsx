import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section id="contact" className="mt-28 sm:mt-32 md:mt-40 lg:mt-48 mb-20">
      {/* MAIN CONTAINER */}
      <div className="w-11/12 md:w-5/6 mx-auto bg-[#314445]/50 backdrop-blur-sm border border-white/20 rounded-2xl px-6 md:px-12 py-20">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F6C100] font-bold">
            Let’s Connect
          </p>
          <div className="w-56 h-1 mx-auto mt-8 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            {/* LOCATION */}
            <div className="flex flex-col md:flex-row md:items-end gap-3 mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-4xl text-[#00B1F0]"
                />
                <p className="text-3xl text-white">Bangladesh</p>
              </div>
              <span className="ml-6 text-sm text-green-400">
                ● Available 24/7
              </span>
            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/8801772177815"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="
                  w-full bg-[#00AE42]
                  border border-white/20
                  rounded-xl px-3 py-4 md:px-6 md:py-6 mb-4
                  flex items-center justify-center gap-2 md:gap-4
                  shadow-lg shadow-green-500/30
                  transition hover:bg-[#18c35a]
                  hover:scale-[1.02]
                  cursor-pointer
                "
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-4xl text-white"
                />
                <div>
                  <p className="text-white/70 text-md md:text-xl mb-1">
                    WhatsApp
                  </p>
                  <p className="text-white text-xl font-medium">
                    +88 01772 177 815
                  </p>
                </div>
              </div>
            </a>

            {/* PHONE */}
            <a href="tel:+8801772177815" className="block">
              <div
                className="
                  w-full bg-[#DF9A00]
                  border border-white/20
                  rounded-xl px-3 py-4 md:px-6 md:py-6 mb-12
                  flex items-center justify-center gap-2 md:gap-4
                  shadow-lg shadow-yellow-500/30
                  transition hover:bg-[#f0b429]
                  hover:scale-[1.02]
                  cursor-pointer
                "
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-3xl text-white"
                />
                <div>
                  <p className="text-white/70 text-md mb-1">Call Now</p>
                  <p className="text-white text-xl font-medium">
                    +88 01772 177 815
                  </p>
                </div>
              </div>
            </a>

            {/* SOCIAL */}
            <p className="text-xl text-white font-bold mb-2">
              Connect on Social Media
            </p>

            <div className="flex justify-between mt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com/m.jamirkhan6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="p-3 border text-[#1877F2] text-2xl border-[#00A6F4] rounded-2xl cursor-pointer transition hover:scale-110 hover:bg-white/10"
                />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/jamirkhan06"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="p-3 border text-white text-2xl border-[#00A6F4] rounded-2xl cursor-pointer transition hover:scale-110 hover:bg-white/10"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/jamirkhan06"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="p-3 border text-[#E4405F] text-2xl border-[#00A6F4] rounded-2xl cursor-pointer transition hover:scale-110 hover:bg-white/10"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/jamirkhan6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="p-3 border text-[#0A66C2] text-2xl border-[#00A6F4] rounded-2xl cursor-pointer transition hover:scale-110 hover:bg-white/10"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801772177815"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="p-3 border text-[#25D366] text-2xl border-[#00A6F4] rounded-2xl cursor-pointer transition hover:scale-110 hover:bg-white/10"
                />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2">
            <p className="text-2xl text-white font-bold mb-6">Send a Message</p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full px-5 py-4 rounded-xl
                  bg-transparent border border-white/20
                  text-white outline-none
                  transition
                  hover:border-[#00B1F0]
                  focus:border-[#00B1F0] focus:shadow-lg focus:shadow-cyan-500/20
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full px-5 py-4 rounded-xl
                  bg-transparent border border-white/20
                  text-white outline-none
                  transition
                  hover:border-[#00B1F0]
                  focus:border-[#00B1F0] focus:shadow-lg focus:shadow-cyan-500/20
                "
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="
                  w-full px-5 py-4 rounded-xl
                  bg-transparent border border-white/20
                  text-white outline-none resize-none
                  transition
                  hover:border-[#00B1F0]
                  focus:border-[#00B1F0] focus:shadow-lg focus:shadow-cyan-500/20
                "
              />

              <button
                type="submit"
                className="
                  px-10 py-4 rounded-full
                  bg-[#00B1F0] text-black font-semibold
                  transition hover:scale-105 hover:bg-[#3ac7ff]
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
