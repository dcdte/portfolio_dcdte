import { useState } from "react";
import { motion } from "motion/react";

import LogoDark from "../assets/logo_dark.png";
import LogoLigth from "../assets/logo_ligth.png";
import { Moon, Sun } from "./svgIcons";

export function Header() {
  const [hovered, setHovered] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const totggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const itemVariants = {
    open: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 4, type: "spring", stiffness: 40 },
    },
    closed: {
      scale: 1,
      transition: { duration: 2, type: "spring", stiffness: 100 },
      rotate: 0,
    },
  };

  return (
    <header className="px-xxl py-xs flex justify-between items-center">
      <div className="max-w-[80px]">
        <img src={darkMode ? LogoLigth : LogoDark} alt="" />
      </div>
      <ul className="flex justify-center gap-lg text-md font-semibold text-black items-center dark:text-white">
        <li className="">Acerca de mí</li>
        <li className="">Experiencias</li>
        <li className="">Proyectos</li>
        <li className="">Contacto</li>
      </ul>
      <div>
        <motion.button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={totggleDarkMode}
          animate={hovered ? "open" : "closed"}
          className="p-2 rounded-full bg-black cursor-pointer dark:bg-white"
        >
          <motion.div variants={itemVariants}>
            {darkMode ? <Moon /> : <Sun />}
          </motion.div>
        </motion.button>
      </div>
    </header>
  );
}
