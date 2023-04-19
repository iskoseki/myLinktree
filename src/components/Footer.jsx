import React from "react";
const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          href="https://www.leandrobordon.com/"
          target="_blank"
        >
          🌎 <span class="ml-3 text-xl hover:underline">leandrobordon.com</span>
        </a>
        <p class="transition ease-in delay-200 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © All rights reserved 2023{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
