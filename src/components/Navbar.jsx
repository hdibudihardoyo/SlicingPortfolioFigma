import { useState } from "react";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="w-full px-6 sm:px-12 py-6">
      <nav className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-center bg-[#1a1a2e] backdrop-blur-md shadow-md rounded-full transition-all duration-300">
        
        {/* Logo */}
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

        {/* Navbar (Desktop) */}
        <ul className="list-none sm:flex hidden items-center space-x-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-poppins cursor-pointer text-[15px] text-gray-400 hover:text-blue-500 transition"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Navbar (Mobile) */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt={toggle ? "Close Menu" : "Open Menu"}
            title={toggle ? "Close Menu" : "Open Menu"}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-[#1a1a2e] absolute top-20 right-4 min-w-[180px] rounded-xl shadow-lg`}
          >
            <ul className="list-none flex flex-col items-center space-y-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-blue-500 transition"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
