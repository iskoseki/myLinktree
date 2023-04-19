import React from "react";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";
import resume from "../assets/LeandroBordon.pdf";
const links = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/leandro-bordon" target="_blank">
        <li className="transition ease-in delay-100 bg-primary rounded-md text-white font-bold hover:text-secundary  mx-2 py-4 m-2 hover:bg-hover">
          <Linkedin size={24} className="inline" /> Linkedin resume
        </li>
      </a>
      <a className="" href="https://github.com/kosekijsx" target="_blank">
        <li className="transition ease-in delay-100 text-white font-bold hover:text-secundary bg-primary rounded-md mx-2 py-4 m-2 hover:bg-hover">
          <Github size={24} className="inline" /> GitHub porfile
        </li>
      </a>
      <a href={resume} target="_blank">
        <li className="transition ease-in delay-100 bg-primary text-white font-bold hover:text-secundary rounded-md mx-2 py-4 m-2 hover:bg-hover">
          ⬇ Download my resume
        </li>
      </a>
    </>
  );
};

export default links;

/*

*/
