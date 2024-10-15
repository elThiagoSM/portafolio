import React, { useState } from "react";
import Typical from "react-typical";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

import YoUno from "../img/Yo-1.webp";
import YoDos from "../img/Yo-2.webp";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div>
      <Header />
      <div className="mt-[90px] max-w-full-xl mx-auto my-12 p-7 text-center">
        <div className="max-w-7xl flex flex-col justify-center mx-auto">
          <h1 className="my-7 text-8xl">
            <Typical steps={["Sobre mi", 2000]} loop={1} wrapper="p" />
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mr-[25%]">
            <img
              src={YoUno}
              alt="Thiago Silveira Machado"
              className="flex-1 max-w-xs rounded-full"
            />
            <div className="flex-1 p-5">
              <h2 className="text-2xl mt-8 mb-2 text-gray-700 md:text-left text-center">
                Yo
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 md:text-left text-center">
                ¡Hola! Soy Thiago, una persona que simplemente hace lo que mas
                le gusta, que es diseñar y desarollar cualquier tipo de cosa.
                Disfruto convertir tu idea en realidad haciendolo de la mejor
                manera posible.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-8 md:ml-[25%]">
            <img
              src={YoDos}
              alt="Thiago Silveira Machado"
              className="flex-1 max-w-xs rounded-full"
            />
            <div className="flex-1 p-5">
              <h2 className="text-2xl mt-8 mb-2 text-gray-700 md:text-right text-center">
                Mi Visión
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 md:text-right text-center">
                Mi vision tambien es simple, mejorar continuamente mis
                habilidades y conocimientos, manteniéndome al marjen con las
                últimas tecnologías y herramienas en el diseño y desarollo. Mi
                objetivo es crear soluciones de alta calidad y que proporcionen
                excelentes experiencias de usuario.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Skills />

      <Footer />
    </div>
  );
};

export default About;
