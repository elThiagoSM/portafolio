import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithubAlt,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-7 bg-[#0087FF]">
      <nav className="flex flex-col md:flex-row md:justify-between items-center w-full max-w-7xl">
        <div className="flex justify-center mb-4 md:mb-0">
          <button
            className="w-9 h-9 rounded-full mx-1 border-none cursor-pointer bg-transparent text-white flex items-center justify-center text-lg"
            onClick={() =>
              window.open("https://github.com/elThiagoSM", "_blank")
            }
          >
            <FaGithubAlt />
          </button>
          <button
            className="w-9 h-9 rounded-full mx-1 border-none cursor-pointer bg-transparent text-white flex items-center justify-center text-lg"
            onClick={() =>
              window.open("https://twitter.com/elThiagoSM", "_blank")
            }
          >
            <FaTwitter />
          </button>
          <button
            className="w-9 h-9 rounded-full mx-1 border-none cursor-pointer bg-transparent text-white flex items-center justify-center text-lg"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/thiago-silveira-machado-81738529b/",
                "_blank"
              )
            }
          >
            <FaLinkedinIn />
          </button>
          <button
            className="w-9 h-9 rounded-full mx-1 border-none cursor-pointer bg-transparent text-white flex items-center justify-center text-lg"
            onClick={() =>
              window.open("https://www.instagram.com/studio.soca/", "_blank")
            }
          >
            <FaInstagram />
          </button>
        </div>

        <div className="flex flex-col text-center md:text-right">
          <div className="text-xs text-white">
            © Thiago Silveira Machado. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap justify-center md:justify-end">
            <Link
              to="/"
              className="m-0 text-xs cursor-pointer pt-2.5 px-2 md:pl-5 text-white no-underline font-bold"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/about"
              className="m-0 text-xs cursor-pointer pt-2.5 px-2 md:pl-5 text-white no-underline font-bold"
            >
              Términos de Uso
            </Link>
            <Link
              to="/projects"
              className="m-0 text-xs cursor-pointer pt-2.5 px-2 md:pl-5 text-white no-underline font-bold"
            >
              Información
            </Link>
            <Link
              to="/services"
              className="m-0 text-xs cursor-pointer pt-2.5 px-2 md:pl-5 text-white no-underline font-bold"
            >
              Ayuda
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
