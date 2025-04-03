import React, { useState, useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

import YoUno from "../img/Yo-1.webp";
import YoDos from "../img/Yo-2.webp";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div>
      <Header />
      <div className="mt-[90px] max-w-full-xl mx-auto my-12 p-7 text-center">
        <motion.div
          ref={ref}
          className="max-w-7xl flex flex-col justify-center mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
        >
          <motion.h1 className="my-7 text-8xl" variants={itemVariants}>
            <Typewriter
              words={["Sobre mi"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
            />
          </motion.h1>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center mb-8 md:mr-[25%]"
            variants={itemVariants}
          >
            <motion.img
              src={YoUno}
              alt="Thiago Silveira Machado"
              className="flex-1 max-w-xs rounded-full"
              variants={itemVariants}
            />
            <motion.div className="flex-1 p-5" variants={itemVariants}>
              <motion.h2
                className="text-2xl mt-8 mb-2 text-gray-700 md:text-left text-center"
                variants={itemVariants}
              >
                Yo
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed text-gray-600 md:text-left text-center"
                variants={itemVariants}
              >
                ¡Hola! Soy Thiago, una persona que simplemente hace lo que más
                le gusta, que es diseñar y desarrollar cualquier tipo de cosa.
                Disfruto convertir tu idea en realidad haciéndolo de la mejor
                manera posible.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row-reverse items-center justify-center mb-8 md:ml-[25%]"
            variants={itemVariants}
          >
            <motion.img
              src={YoDos}
              alt="Thiago Silveira Machado"
              className="flex-1 max-w-xs rounded-full"
              variants={itemVariants}
            />
            <motion.div className="flex-1 p-5" variants={itemVariants}>
              <motion.h2
                className="text-2xl mt-8 mb-2 text-gray-700 md:text-right text-center"
                variants={itemVariants}
              >
                Mi Visión
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed text-gray-600 md:text-right text-center"
                variants={itemVariants}
              >
                Mi visión también es simple, mejorar continuamente mis
                habilidades y conocimientos, manteniéndome al margen con las
                últimas tecnologías y herramientas en el diseño y desarrollo. Mi
                objetivo es crear soluciones de alta calidad y que proporcionen
                excelentes experiencias de usuario.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Skills />
      <Footer />
    </div>
  );
};

export default About;
