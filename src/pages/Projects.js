import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ProjectDoneComponent from "../components/ProjectDoneComponent";

import LogoFarmaciaLaIda from "../img/proyectos/farmacia_la_ida_img.png";
import LogoGifApp from "../img/proyectos/gif_app_img.png";
import LogoPinturariaArcoiris from "../img/proyectos/pintureria_arcoiris_img.png";
import LogoRatingReact from "../img/proyectos/rating_react_img.png";

import LogoConversorMoneda from "../img/proyectos/conversor_moneda_img.png";
import LogoGeneradorContraseña from "../img/proyectos/generador_contraseñas_img.png";
import LogoSelectorColores from "../img/proyectos/selector_colores_img.png";
import LogoSimuladorDado from "../img/proyectos/simulador_dado_img.png";

import Logo1937 from "../img/proyectos/juego_1937_img.png";
import LogoChoseTheDoor from "../img/proyectos/juego_chosethedoor_img.png";

const Projects = () => {
  return (
    <div className="bg-[#0087FF]">
      <Header />

      <div className="mt-[90px] max-w-7xl mx-auto p-5 bg-[#0087FF]">
        <h1 className="text-5xl text-white mb-12">Proyectos realizados</h1>
        <div className="flex flex-wrap justify-center gap-5 lg:justify-center">
          <ProjectDoneComponent
            image={LogoPinturariaArcoiris}
            title="Pintureria Arcoiris"
            text="Sitio web de venta de pintuturas y herramientas."
            enlace="http://pintureriaarcoiris.great-site.net/"
            alt="Pintureria Arcoiris"
          />
          <ProjectDoneComponent
            image={LogoGifApp}
            title="Gif App"
            text="Un sitio donde puedes buscar y descargar tus GIFs favoritos."
            enlace="https://buscar-gifs-gratis.netlify.app/"
            alt="Gif App"
          />
          <ProjectDoneComponent
            image={LogoFarmaciaLaIda}
            title="Farmacia La Ida"
            text="Sitio web que presenta y ofrece información sobre Farmacia La Ida."
            enlace="https://farmacia-laida.netlify.app/"
            alt="Farmacia La Ida"
          />
          <ProjectDoneComponent
            image={LogoRatingReact}
            title="Rating React"
            text="Libreria de un componente de calificación fácil de usar para las reseñas de los usuarios."
            enlace="https://elthiagosm.github.io/documentation-rating-react/"
            alt="Rating React"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-5 bg-[#0087FF]">
        <h1 className="text-5xl text-white mb-12">Proyectos personales</h1>
        <div className="flex flex-wrap justify-center gap-5 lg:justify-center">
          <ProjectDoneComponent
            image={LogoGeneradorContraseña}
            title="Generador de Contraseñas"
            text="Una aplicación que permite generar contraseñas aleatorias."
            enlace="https://thiagosilveiramachado.netlify.app"
            alt="Generador de contraseñas"
          />
          <ProjectDoneComponent
            image={LogoSelectorColores}
            title="Selector de Color"
            text="Un selector de colores que permite al usuario elegir colores y obtener sus códigos hexadecimales."
            enlace="https://thiagosilveiramachado.netlify.app"
            alt="Selector de color"
          />
          <ProjectDoneComponent
            image={LogoConversorMoneda}
            title="Convertidor de Moneda"
            text="Una aplicación web que convierte distintas monedas en tiempo real."
            enlace="https://thiagosilveiramachado.netlify.app"
            alt="Convertidor de moneda"
          />
          <ProjectDoneComponent
            image={LogoSimuladorDado}
            title="Simulador de Dado"
            text="Un simulador de lanzamiento de dados aleatorio en 3D."
            enlace="https://thiagosilveiramachado.netlify.app"
            alt="Simulador de dado"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-5 bg-[#0087FF]">
        <h1 className="text-5xl text-white mb-12">Videojuegos hechos</h1>
        <div className="flex flex-wrap justify-center gap-5 lg:justify-center">
          <ProjectDoneComponent
            image={Logo1937}
            title="1937"
            text="Videojuego de plataformas en 2D creado con el motor Unity."
            enlace="https://thiagosm.itch.io/1937"
            alt="Juego 1937"
          />
          <ProjectDoneComponent
            image={LogoChoseTheDoor}
            title="Choose The Door"
            text="Videojuego 3D de puzles en primera persona que se desarrolla dentro de una casa."
            enlace="https://thiagosm.itch.io/choosethedoor"
            alt="Choose the door"
          />
          <ProjectDoneComponent
            image={Logo1937}
            title="Rolling Balls"
            text="Videojuego 3D de puzzles sobre resolver laverintos siendo una pelota."
            enlace="https://thiagosm.itch.io/rollingballs"
            alt="Rolling balls"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
