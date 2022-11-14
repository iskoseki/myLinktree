import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import LinksContainer from "./components/linksContainer/LinksContainer";

function App() {
  return (
    <div className=" drop-shadow-2xl shadow-xl bg-secundary p-12 rounded-md">
      <Header />
      <LinksContainer />
      <Footer />
    </div>
  );
}

export default App;
