import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import LinksContainer from "./components/linksContainer/LinksContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <LinksContainer />
      <Footer />
    </div>
  );
}

export default App;
