import React from 'react'
import './App.css'
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact";


function App() {

  return (
    <div className="App">
      <Router>
      <Navigation />
      <Route exact path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
