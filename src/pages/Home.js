import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Yo from "../img/Yo-2.png";

import ProjectDoneComponent from "../components/ProjectDoneComponent";

import LogoFarmaciaLaIda from "../img/proyectos/farmacia_la_ida_img.png";
import LogoGifApp from "../img/proyectos/gif_app_img.png";
import LogoPinturariaArcoiris from "../img/proyectos/pintureria_arcoiris_img.png";
import LogoRatingReact from "../img/proyectos/rating_react_img.png";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="mt-[90px] flex flex-col md:flex-row justify-center items-center w-full h-screen bg-[#0087FF]">
        <div className="mb-[90px] max-w-7xl flex flex-col items-center text-center text-white">
          <h1 className="my-7 text-8xl">Hola, soy Thiago</h1>
          <p className="m-0 text-xl text-center">
            <Typical
              steps={[
                "Diseñador y desarollador de paginas webs y videojuegos.",
                2000,
              ]}
              loop={1}
              wrapper="p"
            />
          </p>
          <Link
            to="/projects"
            className="mt-6 py-2 px-4 bg-white text-[#0087FF] rounded-full hover:bg-gray-200 transition duration-300"
          >
            Ver proyectos
          </Link>
        </div>
      </div>

      <div className="pt-[90px] pb-[90px] mx-auto p-5 bg-[#0087FF]">
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

      <Skills />

      {/*<Contact />*/}

      <Footer />
    </div>
  );
};

export default Home;
