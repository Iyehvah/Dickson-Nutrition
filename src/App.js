import React from 'react'
import './App.css'
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="App">
      <Router>
      <Navigation />
      <Home path="/home"/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
