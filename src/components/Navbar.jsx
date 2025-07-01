import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close, github, x, linkedin } from "../assets";

import { Cursor } from "react-simple-typewriter";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX}  w-full flex items-center py-5 fixed top-0 z-20 bg-black`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="flex items-center justify-center"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <h1 className="my-auto">
              FELIPE
              <span className="text-primary p-0">
                .DEV()
                <Cursor />
              </span>
            </h1>
          </Link>
          <div className="ml-6 flex flex-row items-center gap-4">
            <Link
              to={
                "https://github.com/Flying-Spaghetti-Monster69/threejs-portfolio"
              }
              className="hover:scale-110 w-6 h-6 sm:w-7 sm:h-7"
              target="_blank"
            >
              <img src={github} alt="github" className="h-full w-full" />
            </Link>
            <Link
              to={
                "https://www.linkedin.com/in/felipe-garzon-melguizo-0826971b5/"
              }
              className="hover:scale-110 w-6 h-6 sm:w-7 sm:h-7 p-1"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="h-full w-full" />
            </Link>
            <Link
              to={"https://x.com/FelipeG10017424"}
              className="hover:scale-110 w-6 h-6 sm:w-7 sm:h-7 p-1"
              target="_blank"
            >
              <img src={x} alt="x.com" className="h-full w-full" />
            </Link>
          </div>
        </div>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-primary" : "text-white"
                } hover:text-primary `}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 green-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-primary" : "text-white"
                    } hover:text-primary font-medium text-[16px] `}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
