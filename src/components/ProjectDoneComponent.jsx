import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10, delay },
  }),
};

const ProjectDoneComponent = ({ image, title, text, enlace, alt, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleClick = () => {
    window.open(enlace, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      className="border-4 border-white rounded p-4 mb-5 w-64 text-white mx-2 box-border flex flex-col items-center cursor-pointer"
      onClick={handleClick}
      variants={itemVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      custom={delay}
    >
      <div className="w-full relative overflow-hidden rounded mb-2 aspect-square">
        <motion.img
          src={image}
          alt={alt}
          className="absolute w-full h-full object-cover"
          variants={itemVariants}
          custom={delay}
        />
      </div>
      <motion.h2
        className="text-2xl font-bold mb-2"
        variants={itemVariants}
        custom={delay}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-2sm text-center"
        variants={itemVariants}
        custom={delay}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default ProjectDoneComponent;
