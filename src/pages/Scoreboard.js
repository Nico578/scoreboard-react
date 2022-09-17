import React from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Teams from "../components/Teams";

const Scoreboard = () => {
  const teamV = window.localStorage.teamVisitor;
  const logoV = window.localStorage.logoVisitor;
  const teamH = window.localStorage.teamHome;
  const logoH = window.localStorage.logoHome;
  return (
    <div className="scoreboard">
      <Navigation />
      <div className="scoreboard-container">
        <div className="home">
          <img src={logoV} alt="" />
          <h2>{teamV}</h2>
        </div>
        <div className="visitor">
          <h2>{teamH}</h2>
          <img src={logoH} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
