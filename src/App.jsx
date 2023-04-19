import React, { useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import LinksContainer from "./components/linksContainer/LinksContainer";

const ContentCard = (props) => {
  return (
    <div className=" bg-secundary  drop-shadow-2xl shadow-xl p-12 rounded-md">
      <Header />
      <LinksContainer />
      <Footer />
    </div>
  );
};

function App() {
  return <ContentCard />;
}

export default App;
