import React from "react";

import IconoDiseñador from "../public/iconos/icono-diseñador.png";
import IconoDesarolladorFrontend from "../public/iconos/icono-desarollador-frontend.png";
import IconoDesarolladorVideojuegos from "../public/iconos/icono-desarollador-videojuegos.png";

const Skills = () => {
  return (
    <div className="max-w-full my-24 flex justify-center p-7">
      <div className="max-w-7xl flex flex-col md:flex-row justify-around rounded-2xl border border-gray-300">
        <div className="text-center p-5 flex-1 min-w-[200px]">
          <img
            src={IconoDiseñador}
            alt="Imagen 1"
            className="w-[75px] h-[75px] rounded-full mt-12 mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Diseñador</h2>
          <div className="mt-4">
            <p className="text-lg">
              Hay algo que me encanta en este mundo y es es diseñar, agarrar una
              vision o una idea y traerla a la realidad.
            </p>
            <p className="text-lg text-[#0087FF] mt-12">Me encantan diseñar:</p>
            <p className="text-lg mb-12">
              Interfaces, Paginas Web, Apps, Logos
            </p>
            <p className="text-lg text-[#0087FF]">Herramientas que utilizo:</p>
            <ul className="text-lg list-none p-0 mb-12">
              <li>Adobe Illustrator</li>
              <li>Blender</li>
              <li>Adobe Photoshop</li>
              <li>Figma</li>
              <li>Canvas</li>
            </ul>
          </div>
        </div>
        <div className="text-center p-5 flex-1 min-w-[200px] border-t md:border-t-0 md:border-l md:border-r border-gray-300">
          <img
            src={IconoDesarolladorFrontend}
            alt="Imagen 2"
            className="w-[75px] h-[75px] rounded-full mt-12 mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Desarrollador Web</h2>
          <div className="mt-4">
            <p className="text-lg">
              Aparte de que me encanta diseñar tambien me encantra hacer que ese
              diseño cobre vida en una pagina web.
            </p>
            <p className="text-lg text-[#0087FF] mt-12">
              Lenguajes que utilizo:
            </p>
            <p className="text-lg mb-12">HTML, CSS, JavaScript, PHP, MySQL</p>
            <p className="text-lg text-[#0087FF]">
              Herramientas de desarrollo:
            </p>
            <ul className="text-lg list-none p-0 mb-12">
              <li>React JS</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
              <li>Github</li>
              <li>XAAMPP</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
        <div className="text-center p-5 flex-1 min-w-[200px] border-t md:border-t-0 md:border-r border-gray-300">
          <img
            src={IconoDesarolladorVideojuegos}
            alt="Imagen 3"
            className="w-[75px] h-[75px] rounded-full mt-12 mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">
            Desarrollador de videojuegos
          </h2>
          <div className="mt-4">
            <p className="text-lg">
              Desde pequeño siempre quise hacer videojuegos y hoy gracias a mis
              conocimentos puedo hacerlo realidad.
            </p>
            <p className="text-lg text-[#0087FF] mt-12">
              Lenguajes que utilizo:
            </p>
            <p className="text-lg mb-12">C#, JavaScript, Python</p>
            <p className="text-lg text-[#0087FF]">
              Herramientas y tecnologías:
            </p>
            <ul className="text-lg list-none p-0 mb-12">
              <li>Unity</li>
              <li>Unreal</li>
              <li>Godot</li>
              <li>Blender</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
