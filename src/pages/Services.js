import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import IconoDiseñador from "../public/iconos/icono-diseñador.png";
import IconoDesarolladorFrontend from "../public/iconos/icono-desarollador-frontend.png";
import IconoMantenimiento from "../public/iconos/icono-mantenimiento.png";
import IconoOptimizacionSeo from "../public/iconos/icono-optimizacion-seo.png";

const Services = () => {
  return (
    <div>
      <Header />

      <div className="mt-[90px] flex justify-center items-center p-7 my-12">
        <div className="relative flex flex-col items-center text-center max-w-7xl mx-auto box-border rounded-2xl border border-gray-300">
          {/* Línea horizontal para pantallas grandes */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
          {/* Línea vertical para pantallas grandes */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

          <div className="flex justify-center flex-wrap">
            <div className="w-full sm:w-[calc(50%-20px)] text-center p-12 m-2.5 bg-white rounded-xl box-border">
              <img
                src={IconoDiseñador}
                alt="Service 1"
                className="w-[75px] h-[75px] rounded-full mb-4 mx-auto"
              />
              <h2 className="text-2xl font-bold mb-4">Diseño de paginas web</h2>
              <p className="text-lg text-gray-600">
                Creación de paginas web desde cero, incluyendo diseño de
                interfaz de usuario (UI) y experiencia de usuario (UX),
                wireframes, maquetas, y prototipos.
              </p>
            </div>
            {/* Línea horizontal para pantallas pequeñas */}
            <div className="block sm:hidden w-full h-px bg-gray-300"></div>

            <div className="w-full sm:w-[calc(50%-20px)] text-center p-12 m-2.5 bg-white rounded-xl box-border">
              <img
                src={IconoDesarolladorFrontend}
                alt="Service 2"
                className="w-[75px] h-[75px] rounded-full mb-4 mx-auto"
              />
              <h2 className="text-2xl font-bold mb-4">
                Desarrollo de paginas web
              </h2>
              <p className="text-lg text-gray-600">
                Creación de paginas web utilizando lenguajes de programación
                como HTML, CSS, y JavaScript.
              </p>
            </div>
            {/* Línea horizontal para pantallas pequeñas */}
            <div className="block sm:hidden w-full h-px bg-gray-300"></div>

            <div className="w-full sm:w-[calc(50%-20px)] text-center p-12 m-2.5 bg-white rounded-xl box-border">
              <img
                src={IconoMantenimiento}
                alt="Service 3"
                className="w-[75px] h-[75px] rounded-full mb-4 mx-auto"
              />
              <h2 className="text-2xl font-bold mb-4">
                Mantenimiento de paginas web
              </h2>
              <p className="text-lg text-gray-600">
                Realización de actualizaciones y correcciones de errores en
                paginas web.
              </p>
            </div>
            {/* Línea horizontal para pantallas pequeñas */}
            <div className="block sm:hidden w-full h-px bg-gray-300"></div>

            <div className="w-full sm:w-[calc(50%-20px)] text-center p-12 m-2.5 bg-white rounded-xl box-border">
              <img
                src={IconoOptimizacionSeo}
                alt="Service 4"
                className="w-[75px] h-[75px] rounded-full mb-4 mx-auto"
              />
              <h2 className="text-2xl font-bold mb-4">Optimización SEO</h2>
              <p className="text-lg text-gray-600">
                Mejora del posicionamiento en buscadores para aumentar la
                visibilidad y el tráfico orgánico.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
