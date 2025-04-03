import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          className="text-3xl font-bold text-white cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Soca Studio
        </h1>

        <nav className="flex items-center">
          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="relative text-lg text-white">
              Inicio
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                animate={{ width: location.pathname === "/" ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link to="/about" className="relative text-lg text-white">
              Sobre mí
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                animate={{ width: location.pathname === "/about" ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link to="/projects" className="relative text-lg text-white">
              Proyectos
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                animate={{
                  width: location.pathname === "/projects" ? "100%" : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link to="/services" className="relative text-lg text-white">
              Servicios
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                animate={{
                  width: location.pathname === "/services" ? "100%" : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <div className="flex space-x-4">
              <motion.button
                className="w-9 h-9 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-xl"
                onClick={() =>
                  window.open("https://github.com/elThiagoSM", "_blank")
                }
                whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                transition={{ duration: 0.3 }}
              >
                <FaGithubAlt />
              </motion.button>
              <motion.button
                className="w-9 h-9 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-xl"
                onClick={() =>
                  window.open("https://twitter.com/elThiagoSM", "_blank")
                }
                whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                transition={{ duration: 0.3 }}
              >
                <FaTwitter />
              </motion.button>
              <motion.button
                className="w-9 h-9 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-xl"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/thiago-silveira-machado-81738529b/",
                    "_blank"
                  )
                }
                whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedinIn />
              </motion.button>
              <motion.button
                className="w-9 h-9 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-xl"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/studio.soca/",
                    "_blank"
                  )
                }
                whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                transition={{ duration: 0.3 }}
              >
                <FaInstagram />
              </motion.button>
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
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden fixed inset-0 bg-[#0087FF] z-20 flex flex-col items-center justify-center text-white"
                onClick={closeMenu}
              >
                <div className="flex flex-col items-center space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Link
                      to="/"
                      className="text-3xl relative"
                      onClick={closeMenu}
                    >
                      Inicio
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-white"
                        initial={{ width: 0 }}
                        animate={{
                          width: location.pathname === "/" ? "100%" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Link
                      to="/about"
                      className="text-3xl relative"
                      onClick={closeMenu}
                    >
                      Sobre mí
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-white"
                        initial={{ width: 0 }}
                        animate={{
                          width: location.pathname === "/about" ? "100%" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Link
                      to="/projects"
                      className="text-3xl relative"
                      onClick={closeMenu}
                    >
                      Proyectos
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-white"
                        initial={{ width: 0 }}
                        animate={{
                          width: location.pathname === "/projects" ? "100%" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Link
                      to="/services"
                      className="text-3xl relative"
                      onClick={closeMenu}
                    >
                      Servicios
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-white"
                        initial={{ width: 0 }}
                        animate={{
                          width: location.pathname === "/services" ? "100%" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>

                  <div className="flex space-x-4 my-4">
                    <motion.button
                      className="w-12 h-12 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-2xl"
                      onClick={() =>
                        window.open("https://github.com/elThiagoSM", "_blank")
                      }
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <FaGithubAlt />
                    </motion.button>
                    <motion.button
                      className="w-12 h-12 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-2xl"
                      onClick={() =>
                        window.open("https://www.twitter.com", "_blank")
                      }
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <FaTwitter />
                    </motion.button>
                    <motion.button
                      className="w-12 h-12 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-2xl"
                      onClick={() =>
                        window.open("https://www.linkedin.com", "_blank")
                      }
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <FaLinkedinIn />
                    </motion.button>
                    <motion.button
                      className="w-12 h-12 rounded-full border-none bg-white text-[#0087FF] flex items-center justify-center text-2xl"
                      onClick={() =>
                        window.open("https://www.instagram.com", "_blank")
                      }
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <FaInstagram />
                    </motion.button>
                  </div>
                  {/* Botón para cerrar el menú */}
                  <motion.button
                    className="text-5xl text-white mt-4 px-4 py-2"
                    onClick={closeMenu}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  >
                    <IoClose />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;
