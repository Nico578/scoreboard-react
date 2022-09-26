import React from "react";

const Card = ({teams}) => {
  return (
    <div className="card">
      <li className="card">
        <div className="img">
          <img
            src={teams.logo}
            alt={"logo de " + teams.logo}
            id="logo"
            value={teams.name}
          />
        </div>
        <div className="infos">
          <h2>{teams.name}</h2>
          <p>
            {teams.ligue} : {teams.poule}
          </p>
        </div>
      </li>
    </div>
  );
};

export default Card;
