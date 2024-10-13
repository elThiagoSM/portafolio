import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithubAlt,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="h-[90px] fixed top-0 left-0 right-0 flex justify-center items-center p-7 bg-[#0087FF] z-50">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <h1
          className="text-2xl font-bold text-white"
          onClick={() => (window.location.href = "/")}
        >
          Soca Studio
        </h1>

        <nav className="flex items-center">
          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-lg text-white relative ${
                location.pathname === "/" ? "active-link" : ""
              }`}
            >
              Inicio
              {location.pathname === "/" && (
                <span className="block w-full h-[1px] bg-white"></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`text-lg text-white relative ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
            >
              Sobre mí
              {location.pathname === "/about" && (
                <span className="block w-full h-[1px] bg-white"></span>
              )}
            </Link>
            <Link
              to="/projects"
              className={`text-lg text-white relative ${
                location.pathname === "/projects" ? "active-link" : ""
              }`}
            >
              Proyectos
              {location.pathname === "/projects" && (
                <span className="block w-full h-[1px] bg-white"></span>
              )}
            </Link>
            <Link
              to="/services"
              className={`text-lg text-white relative ${
                location.pathname === "/services" ? "active-link" : ""
              }`}
            >
              Servicios
              {location.pathname === "/services" && (
                <span className="block w-full h-[1px] bg-white"></span>
              )}
            </Link>
            <div className="flex space-x-4">
              <button
                className="w-9 h-9 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-xl"
                onClick={() =>
                  window.open("https://github.com/elThiagoSM", "_blank")
                }
              >
                <FaGithubAlt />
              </button>
              <button
                className="w-9 h-9 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-xl"
                onClick={() =>
                  window.open("https://twitter.com/elThiagoSM", "_blank")
                }
              >
                <FaTwitter />
              </button>
              <button
                className="w-9 h-9 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-xl"
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
                className="w-9 h-9 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-xl"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/studio.soca/",
                    "_blank"
                  )
                }
              >
                <FaInstagram />
              </button>
            </div>
          </div>

          {/* Icono de menú para pantallas pequeñas */}
          <button
            className="flex md:hidden w-9 h-9 bg-none text-white items-center justify-center text-4xl"
            onClick={toggleMenu}
          >
            <IoMenu />
          </button>

          {/* Menú desplegable para pantallas pequeñas */}
          {isOpen && (
            <div
              className="md:hidden fixed inset-0 bg-[#0087FF] z-20 flex flex-col items-center justify-center text-white"
              onClick={closeMenu}
            >
              <div className="flex flex-col items-center">
                <Link
                  to="/"
                  className={`my-4 text-3xl relative ${
                    location.pathname === "/" ? "active-link" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Inicio
                  {location.pathname === "/" && (
                    <span className="block w-full h-[1px] bg-white"></span>
                  )}
                </Link>
                <Link
                  to="/about"
                  className={`my-4 text-3xl relative ${
                    location.pathname === "/about" ? "active-link" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Sobre mí
                  {location.pathname === "/about" && (
                    <span className="block w-full h-[1px] bg-white"></span>
                  )}
                </Link>
                <Link
                  to="/projects"
                  className={`my-4 text-3xl relative ${
                    location.pathname === "/projects" ? "active-link" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Proyectos
                  {location.pathname === "/projects" && (
                    <span className="block w-full h-[1px] bg-white"></span>
                  )}
                </Link>
                <Link
                  to="/services"
                  className={`my-4 text-3xl relative ${
                    location.pathname === "/services" ? "active-link" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Servicios
                  {location.pathname === "/services" && (
                    <span className="block w-full h-[1px] bg-white"></span>
                  )}
                </Link>
                <div className="flex space-x-4 my-4">
                  <button
                    className="w-12 h-12 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-2xl"
                    onClick={() =>
                      window.open(
                        "https://https://github.com/elThiagoSM",
                        "_blank"
                      )
                    }
                  >
                    <FaGithubAlt />
                  </button>
                  <button
                    className="w-12 h-12 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-2xl"
                    onClick={() =>
                      window.open("https://www.twitter.com", "_blank")
                    }
                  >
                    <FaTwitter />
                  </button>
                  <button
                    className="w-12 h-12 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-2xl"
                    onClick={() =>
                      window.open("https://www.linkedin.com", "_blank")
                    }
                  >
                    <FaLinkedinIn />
                  </button>
                  <button
                    className="w-12 h-12 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-2xl"
                    onClick={() =>
                      window.open("https://www.instagram.com", "_blank")
                    }
                  >
                    <FaInstagram />
                  </button>
                </div>
                {/* Botón para cerrar el menú */}
                <button className="text-5xl text-white mt-4 px-4 py-2">
                  <IoClose />
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
