import React from "react";

const Card = ({ teams }) => {

  return (
    <li className="card" >
      <div className="img">
        <img src={teams.logo} alt="" id="logo" value={teams.name}  />
      </div>
      <div className="infos">
        <h2>{teams.name}</h2>
        <p >
          {teams.ligue} {teams.poule}
        </p>
        <button type="submit" value={teams.name}>
          Choisir cette équipe
        </button>
      </div>
    </li>
  );
};

export default Card;
