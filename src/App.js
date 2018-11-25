import React, {Component} from "react";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
