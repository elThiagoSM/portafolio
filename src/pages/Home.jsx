import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

import ProjectDoneComponent from "../components/ProjectDoneComponent";

import LogoFarmaciaLaIda from "../img/proyectos/farmacia_la_ida_img.png";
import LogoParillaLaBrasa from "../img/proyectos/parilla_la_brasa.png";
import LogoAlejandroRiosFotografo from "../img/proyectos/alejandro_rios.png";
import LogoRatingReact from "../img/proyectos/rating_react_img.png";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10, delay },
    }),
  };

  return (
    <div>
      <Header />

      <div className="mt-[90px] flex flex-col md:flex-row justify-center items-center w-full h-screen bg-[#0087FF]">
        <div className="mb-[90px] max-w-7xl flex flex-col items-center text-center text-white">
          <motion.h1
            className="my-7 text-8xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hola, soy Thiago
          </motion.h1>
          <p className="m-0 text-xl text-center">
            <Typewriter
              words={[
                "Diseñador y desarollador de paginas webs y videojuegos.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
            />
          </p>
          <Link to="/projects">
            <motion.p
              className="mt-6 py-2 px-4 bg-white text-[#0087FF] rounded-full"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
              whileHover={{ backgroundColor: "#E5E7EB", scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Ver proyectos
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="pt-[90px] pb-[90px] mx-auto p-5 bg-[#0087FF]">
        <h1 className="text-5xl text-white mb-12">Proyectos realizados</h1>
        <div className="flex flex-wrap justify-center gap-5 lg:justify-center">
          <ProjectDoneComponent
            image={LogoAlejandroRiosFotografo}
            title="Alejandro Ríos - Fotógrafo"
            text="Sitio web que muestra el trabajo de Alejandro Ríos como fotógrafo."
            enlace="https://alejandoriosfotografo.vercel.app/"
            alt="Alejandro Ríos - Fotógrafo"
            delay={0.1}
          />
          <ProjectDoneComponent
            image={LogoParillaLaBrasa}
            title="Parrilla La Brasa"
            text="Sitio web de Parrilla La Brasa para reservas, menú e información de contacto."
            enlace="https://labrasa.netlify.app/"
            alt="Parrilla La Brasa"
            delay={0.2}
          />
          <ProjectDoneComponent
            image={LogoFarmaciaLaIda}
            title="Farmacia La Ida"
            text="Sitio web que presenta y ofrece información sobre Farmacia La Ida."
            enlace="https://farmacia-laida.netlify.app/"
            alt="Farmacia La Ida"
            delay={0.3}
          />
          <ProjectDoneComponent
            image={LogoRatingReact}
            title="Rating React"
            text="Libreria de un componente de calificación fácil de usar para las reseñas de los usuarios."
            enlace="https://elthiagosm.github.io/documentation-rating-react/"
            alt="Rating React"
            delay={0.4}
          />
        </div>
      </div>

      <Skills />

      {/*<Contact />*/}

      <Footer />
    </div>
  );
};

export default Home;
