import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import IconoDiseñador from "../public/iconos/icono-diseñador.png";
import IconoDesarolladorFrontend from "../public/iconos/icono-desarollador-frontend.png";
import IconoDesarolladorVideojuegos from "../public/iconos/icono-desarollador-videojuegos.png";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px" });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div className="max-w-full my-24 flex justify-center p-7">
      <div
        ref={ref}
        className="max-w-7xl flex flex-col md:flex-row justify-around rounded-2xl border border-gray-300 p-5 pt-0 pb-0 items-stretch"
      >
        {/* Diseñador */}
        <div className="text-center p-5 flex-1 min-w-[200px] h-full">
          <motion.img
            src={IconoDiseñador}
            alt="Diseñador"
            className="w-[75px] h-[75px] rounded-full mt-12 mx-auto"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          />
          <motion.h2
            className="text-2xl font-bold mt-4"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Diseñador
          </motion.h2>
          <motion.p
            className="text-lg mt-4"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Hay algo que me encanta en este mundo y es diseñar, agarrar una
            visión o una idea y traerla a la realidad.
          </motion.p>
          <motion.p
            className="text-lg text-[#0087FF] mt-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Me encantan diseñar:
          </motion.p>
          <motion.p
            className="text-lg mb-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Interfaces, Páginas Web, Apps, Logos
          </motion.p>
          <motion.p
            className="text-lg text-[#0087FF]"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Herramientas que utilizo:
          </motion.p>
          <motion.ul
            className="text-lg list-none p-0 mb-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            <li>Adobe Illustrator</li>
            <li>Blender</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>Canva</li>
          </motion.ul>
        </div>

        {/* Desarrollador Web */}
        <div className="text-center p-5 flex-1 min-w-[200px] h-full border-t md:border-t-0 md:border-l border-gray-300">
          <motion.img
            src={IconoDesarolladorFrontend}
            alt="Desarrollador Web"
            className="w-[75px] h-[75px] rounded-full mt-12 mx-auto"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          />
          <motion.h2
            className="text-2xl font-bold mt-4"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Desarrollador Web
          </motion.h2>
          <motion.p
            className="text-lg mt-4"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Aparte de que me encanta diseñar, también me encanta hacer que ese
            diseño cobre vida en una página web.
          </motion.p>
          <motion.p
            className="text-lg text-[#0087FF] mt-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Lenguajes que utilizo:
          </motion.p>
          <motion.p
            className="text-lg mb-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            HTML, CSS, JavaScript, PHP, MySQL
          </motion.p>
          <motion.p
            className="text-lg text-[#0087FF]"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Herramientas de desarrollo:
          </motion.p>
          <motion.ul
            className="text-lg list-none p-0 mb-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
            <li>Github</li>
            <li>XAMPP</li>
            <li>VS Code</li>
          </motion.ul>
        </div>

        {/* Desarrollador de Videojuegos */}
        <div className="text-center p-5 flex-1 min-w-[200px] h-full border-t md:border-t-0 md:border-l border-gray-300">
          <motion.img
            src={IconoDesarolladorVideojuegos}
            alt="Desarrollador de Videojuegos"
            className="w-[75px] h-[75px] rounded-full mt-12 mx-auto"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          />
          <motion.h2
            className="text-2xl font-bold mt-4"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Desarrollador de Videojuegos
          </motion.h2>
          <motion.p
            className="text-lg mt-4"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Desde pequeño siempre quise hacer videojuegos y hoy, gracias a mis
            conocimientos, puedo hacerlo realidad.
          </motion.p>
          <motion.p
            className="text-lg text-[#0087FF] mt-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Lenguajes que utilizo:
          </motion.p>
          <motion.p
            className="text-lg mb-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            C#, JavaScript, Python
          </motion.p>
          <motion.p
            className="text-lg text-[#0087FF]"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            Herramientas y tecnologías:
          </motion.p>
          <motion.ul
            className="text-lg list-none p-0 mb-12"
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            <li>Unity</li>
            <li>Unreal</li>
            <li>Godot</li>
            <li>Blender</li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
