import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-white/10 py-4">

      <div className="flex items-center justify-center gap-10 text-gray-300">

        {/* Left */}
        <div className="flex items-center gap-2 text-sm">

          <span>💻</span>

          <p>
            © 2026 DevTinder. All rights reserved.
          </p>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-xl">

          <FaGithub className="cursor-pointer hover:text-indigo-400 transition" />

          <FaLinkedin className="cursor-pointer hover:text-indigo-400 transition" />

          <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />

        </div>

      </div>
    </footer>
  );
};

export default Footer;