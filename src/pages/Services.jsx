import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

import IconoDiseñador from "../public/iconos/icono-diseñador.png";
import IconoDesarolladorFrontend from "../public/iconos/icono-desarollador-frontend.png";
import IconoMantenimiento from "../public/iconos/icono-mantenimiento.png";
import IconoOptimizacionSeo from "../public/iconos/icono-optimizacion-seo.png";

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

const Services = () => {
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
      <div className="mt-[90px] flex justify-center items-center p-7 my-12">
        <div className="relative flex flex-col items-center text-center max-w-7xl mx-auto box-border rounded-2xl border border-gray-300">
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

          <motion.div
            ref={ref}
            className="flex justify-center flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            <motion.div
              className="w-full sm:w-[calc(50%-20px)] text-center p-12 m-2.5 bg-none rounded-xl box-border"
              variants={itemVariants}
            >
              <motion.img
                src={IconoDiseñador}
                alt="Diseño de páginas web"
                className="w-[75px] h-[75px] rounded-full mb-4 mx-auto"
                variants={itemVariants}
              />
              <motion.h2
                className="text-2xl font-bold mb-4"
                variants={itemVariants}
              >
                Diseño de páginas web
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                variants={itemVariants}
              >
                Creación de páginas web desde cero, incluyendo diseño de
                interfaz de usuario (UI) y experiencia de usuario (UX),
                wireframes, maquetas y prototipos.
              </motion.p>
            </motion.div>

            <motion.div
              className="w-full sm:w-[calc(50%-20px)] text-center p-12 m-2.5 bg-none rounded-xl box-border"
              variants={itemVariants}
            >
              <motion.img
                src={IconoDesarolladorFrontend}
                alt="Desarrollo de páginas web"
                className="w-[75px] h-[75px] rounded-full mb-4 mx-auto"
                variants={itemVariants}
              />
              <motion.h2
                className="text-2xl font-bold mb-4"
                variants={itemVariants}
              >
                Desarrollo de páginas web
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                variants={itemVariants}
              >
                Creación de páginas web utilizando lenguajes de programación
                como HTML, CSS y JavaScript.
              </motion.p>
            </motion.div>

            <motion.div
              className="w-full sm:w-[calc(50%-20px)] text-center p-12 m-2.5 bg-none rounded-xl box-border"
              variants={itemVariants}
            >
              <motion.img
                src={IconoMantenimiento}
                alt="Mantenimiento de páginas web"
                className="w-[75px] h-[75px] rounded-full mb-4 mx-auto"
                variants={itemVariants}
              />
              <motion.h2
                className="text-2xl font-bold mb-4"
                variants={itemVariants}
              >
                Mantenimiento de páginas web
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                variants={itemVariants}
              >
                Realización de actualizaciones y correcciones de errores en
                páginas web.
              </motion.p>
            </motion.div>

            <motion.div
              className="w-full sm:w-[calc(50%-20px)] text-center p-12 m-2.5 bg-none rounded-xl box-border"
              variants={itemVariants}
            >
              <motion.img
                src={IconoOptimizacionSeo}
                alt="Optimización SEO"
                className="w-[75px] h-[75px] rounded-full mb-4 mx-auto"
                variants={itemVariants}
              />
              <motion.h2
                className="text-2xl font-bold mb-4"
                variants={itemVariants}
              >
                Optimización SEO
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                variants={itemVariants}
              >
                Mejora del posicionamiento en buscadores para aumentar la
                visibilidad y el tráfico orgánico.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
