import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const HomeLeft = () => {
  return (
    <div className="home-left">
      <div className="flex flex-col items-start gap-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hadi <br /> Budi Hardoyo
        </h1>
        <p className="text-gray-400">
          Frontend Developer | UI/UX Designer
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-400 text-2xl">
          <a
            href="https://linkedin.com/in/hdibudihardoyo"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hdibudihardoyo"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/hdibudihardoyo"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
