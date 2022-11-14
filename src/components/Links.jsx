import React from "react";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";
const links = () => {
  return (
    <>
      <li className="bg-primary rounded-md  mx-2 py-4 m-2 hover:bg-hover">
        <a
          className="text-white font-bold hover:text-secundary"
          href="https://www.linkedin.com/in/leandro-bordon"
          target="_blank"
        >
          <Linkedin size={24} className="inline" /> Linkedin resume
        </a>
      </li>
      <li className="bg-primary rounded-md mx-2 py-4 m-2 hover:bg-hover">
        <a
          className="text-white font-bold hover:text-secundary"
          href="https://github.com/Alocerio"
          target="_blank"
        >
          <Github size={24} className="inline" /> - GitHub porfile
        </a>
      </li>
      <li className="bg-primary rounded-md mx-2 py-4 m-2 hover:bg-hover">
        <a
          className="text-white font-bold hover:text-secundary"
          href="/src/assets/resume - Leandro Bordon.pdf"
          target="_blank"
        >
          ⬇ Download my resume
        </a>
      </li>
    </>
  );
};

export default links;

/*

*/
