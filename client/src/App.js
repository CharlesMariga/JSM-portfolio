import React from "react";
import "./App.scss";
import { About, Footer, Header, Skills, Testimonial, Work } from "./containers";
import { Navbar } from "./components";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
