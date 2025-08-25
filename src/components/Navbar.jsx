import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Section } from "lucide-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="px-20 py-7">
          <nav className="py-4 flex justify-between items-center bg-[#1a1a2e] backdrop-blur-md shadow-md rounded-full transition-all duration-300">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

      {/* Navbar (Desktop) */}
      <ul className="list-none sm:flex hidden justify-center items-center">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[15px] mr-6 text-gray-400 hover:text-blue-500 transition ease-in-out duration-100`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Navbar (Mobile) */}
      <div className="sm:hidden flex flex-1 justify-center items-center">
        <img
          src={toggle ? close : menu}
          alt={toggle ? "Close Menu" : "Open Menu"}
          title={toggle ? "Close Menu" : "Open Menu"}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white hover:text-secondary`}
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