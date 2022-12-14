import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/index.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Scoreboard from "./pages/Scoreboard";
import SignInModal from "./components/SignInModal";
import Navigation from "./components/Navigation";
import Teams from "./components/Teams";
import ShowTeams from "./pages/ShowTeams";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <SignInModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<ShowTeams/>} />
          <Route path="/Scoreboard" element={<Scoreboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
