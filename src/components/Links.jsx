import React from "react";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";
const links = ({ name, url, icon }) => {
  return (
    <>
      <li className="bg-primary rounded-md mx-2 py-4 m-2 hover:bg-hover">
        <a
          className="text-white font-bold hover:text-secundary"
          href="https://www.linkedin.com/in/leandro-bordon"
        >
          <Linkedin size={24} className="inline" /> - Linkedin resume
        </a>
      </li>
      <li className="bg-primary rounded-md mx-2 py-4 m-2 hover:bg-hover">
        <a
          className="text-white font-bold hover:text-secundary"
          href="https://github.com/Alocerio"
        >
          <Github size={24} className="inline" /> - GitHub porfile
        </a>
      </li>
    </>
  );
};

export default links;
