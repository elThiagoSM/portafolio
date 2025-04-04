import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ProjectDoneComponent from "../components/ProjectDoneComponent";

import LogoParillaLaBrasa from "../img/proyectos/parilla_la_brasa.png";
import LogoAlejandroRiosFotografo from "../img/proyectos/alejandro_rios.png";
import LogoRestauranteMishiguene from "../img/proyectos/restaurante_mishiguene.png";
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
            image={LogoAlejandroRiosFotografo}
            title="Alejandro Ríos - Fotógrafo"
            text="Sitio web que muestra el trabajo de Alejandro Ríos como fotógrafo."
            enlace="https://alejandorriosfotografo.vercel.app/"
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
            image={LogoRatingReact}
            title="Rating React"
            text="Libreria de un componente de calificación fácil de usar para las reseñas de los usuarios."
            enlace="https://elthiagosm.github.io/documentation-rating-react/"
            alt="Rating React"
            delay={0.3}
          />
          <ProjectDoneComponent
            image={LogoGifApp}
            title="Gif App"
            text="Un sitio donde puedes buscar y descargar tus GIFs favoritos."
            enlace="https://buscar-gifs-gratis.netlify.app/"
            alt="Gif App"
            delay={0.4}
          />
          <ProjectDoneComponent
            image={LogoFarmaciaLaIda}
            title="Farmacia La Ida"
            text="Sitio web que presenta y ofrece información sobre Farmacia La Ida."
            enlace="https://farmacia-laida.netlify.app/"
            alt="Farmacia La Ida"
            delay={0.5}
          />
          <ProjectDoneComponent
            image={LogoRestauranteMishiguene}
            title="Restaurante Mishiguene"
            text="Clon funcional del sitio web de Mishiguene para presentar su carta digital."
            enlace="https://carta-mishiguene.netlify.app/"
            alt="Restaurante Mishiguene"
            delay={0.6}
          />
          <ProjectDoneComponent
            image={LogoPinturariaArcoiris}
            title="Pintureria Arcoiris"
            text="Sitio web de venta de pintuturas y herramientas."
            enlace="http://pintureriaarcoiris.great-site.net/"
            alt="Pintureria Arcoiris"
            delay={0.7}
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
            delay={0.1}
          />
          <ProjectDoneComponent
            image={LogoSelectorColores}
            title="Selector de Color"
            text="Un selector de colores que permite al usuario elegir colores y obtener sus códigos hexadecimales."
            enlace="https://thiagosilveiramachado.netlify.app"
            alt="Selector de color"
            delay={0.2}
          />
          <ProjectDoneComponent
            image={LogoConversorMoneda}
            title="Convertidor de Moneda"
            text="Una aplicación web que convierte distintas monedas en tiempo real."
            enlace="https://thiagosilveiramachado.netlify.app"
            alt="Convertidor de moneda"
            delay={0.3}
          />
          <ProjectDoneComponent
            image={LogoSimuladorDado}
            title="Simulador de Dado"
            text="Un simulador de lanzamiento de dados aleatorio en 3D."
            enlace="https://thiagosilveiramachado.netlify.app"
            alt="Simulador de dado"
            delay={0.4}
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
            delay={0.1}
          />
          <ProjectDoneComponent
            image={LogoChoseTheDoor}
            title="Choose The Door"
            text="Videojuego 3D de puzles en primera persona que se desarrolla dentro de una casa."
            enlace="https://thiagosm.itch.io/choosethedoor"
            alt="Choose the door"
            delay={0.2}
          />
          <ProjectDoneComponent
            image={Logo1937}
            title="Rolling Balls"
            text="Videojuego 3D de puzzles sobre resolver laverintos siendo una pelota."
            enlace="https://thiagosm.itch.io/rollingballs"
            alt="Rolling balls"
            delay={0.3}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
