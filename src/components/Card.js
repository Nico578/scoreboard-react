import React, { useState } from "react";

const Card = ({ teams }) => {
  const addStorageHome = () => {
    document.querySelector(
      ".teamHome-container > p"
    ).innerHTML = `${teams.name}`;
  };

  const addStorageVisitor = () => {
    document.querySelector(
      ".teamVisitor-container > p"
    ).innerHTML = `${teams.name}`;
  };

  return (
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
        <div className="btn">
          <button
            className="teamHome"
            name="btnHome"
            onClick={(e) => addStorageHome()}
            type="submit"
            value={teams.name}
          >
            <img
              src="./assets/img/font-awesome/house-solid.svg"
              alt="Equipe à l'exterieur"
            />
          </button>
          <button
            className="teamVisitor"
            name="btnVisitor"
            onClick={(e) => addStorageVisitor(e)}
            type="submit"
            value={teams.name}
          >
            <img
              src="./assets/img/font-awesome/plane-solid.svg"
              alt="Equipe à l'exterieur"
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
