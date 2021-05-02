import React from "react";
import Header from "../Header/Header";
import About from "../../About/About";
import Projects from "../../Projects/Projects";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#e4e4e6", height: "100%" }}>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
