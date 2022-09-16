import React from "react";
import { teamsData } from "../data/teamsData";

const Card = ({ teams }) => {
  return (
    <div className="card">
      <img src={teams.logo} alt="" id="logo" />
      <div className="infos">
        <h2>{teams.name}</h2>
        <p>
          {teams.ligue} {teams.poule}
        </p>
      </div>
    </div>
  );
};

export default Card;
