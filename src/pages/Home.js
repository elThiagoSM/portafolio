import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Yo from "../img/Yo-2.png";

import ProjectDoneComponent from "../components/ProjectDoneComponent";

import LogoDuolingo from "../img/logos-redes-sociales/logo-duolingo.png";
import LogoFacebook from "../img/logos-redes-sociales/logo-facebook.png";
import LogoInstagram from "../img/logos-redes-sociales/logo-instagram.png";
import LogoPinterest from "../img/logos-redes-sociales/logo-pinterest.png";

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
            image={LogoDuolingo}
            title="Duolingo"
            text="App para aprender idiomas de forma gratuita a través de juegos y lecciones cortas."
            enlace="https://es.duolingo.com/"
          />
          <ProjectDoneComponent
            image={LogoFacebook}
            title="Facebook"
            text="Red social para conectar con amigos y familiares, compartir noticias, fotos y videos."
            enlace="https://www.facebook.com/"
          />
          <ProjectDoneComponent
            image={LogoInstagram}
            title="Instagram"
            text="Red social para compartir fotos y videos cortos con filtros y efectos."
            enlace="https://www.instagram.com/"
          />
          <ProjectDoneComponent
            image={LogoPinterest}
            title="Pinterest"
            text="Plataforma para descubrir ideas e inspiración a través de imágenes y videos."
            enlace="https://www.pinterest.es/"
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
