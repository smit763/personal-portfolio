import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Aboute from "./components/Aboute/Aboute";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div class="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
        <Hero />
        <Aboute />
        <Services />
        <Clients />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
