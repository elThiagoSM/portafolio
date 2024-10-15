import React from "react";

const ProjectDoneComponent = ({ image, title, text, enlace, alt }) => {
  const handleClick = () => {
    window.open(enlace, "_blank");
  };

  return (
    <div
      className="border-4 border-white rounded p-4 mb-5 w-64 text-white mx-2 box-border flex flex-col items-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full relative overflow-hidden rounded mb-2 aspect-square">
        <img
          src={image}
          alt={alt}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-2sm text-center">{text}</p>
    </div>
  );
};

export default ProjectDoneComponent;
