import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Resume from "./components/Resume/Resume";
import Blogs from "./components/Blogs/Blogs";
import TopBar from "./components/TopBar/TopBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

function App() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <div className="App">
      <Router>
        <TopBar></TopBar>
        <Switch>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
