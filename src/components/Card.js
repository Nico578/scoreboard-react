import React from "react";


const Card = ({ teams }) => {

  const addStorageHome = () => {
      window.localStorage.teamHome = teams.diminutive
      window.localStorage.logoHome = teams.logo
      location.reload()

  }

  const addStorageVisitor = () => {
    window.localStorage.teamVisitor = teams.diminutive
    window.localStorage.logoVisitor = teams.logo
    location.reload()
  }

  return (
    <li className="card">
      <div className="img">
        <img src={teams.logo} alt="" id="logo" value={teams.name} />
      </div>
      <div className="infos">
        <h2>{teams.name}</h2>
        <p>
          {teams.ligue} {teams.poule}
        </p>
        <div className="btn">
          <button
          className="teamHome"
          name="btnHome"
          onClick={() => addStorageHome()}
          type="submit"
          value={teams.name}
        >
          <img src="./assets/img/font-awesome/house-solid.svg" alt="Equipe à l'exterieur" />
        </button>
        <button
          className="teamVisitor"
          name="btnVisitor"
          onClick={() => addStorageVisitor()}
          type="submit"
          value={teams.name}
        >
         <img src="./assets/img/font-awesome/plane-solid.svg" alt="Equipe à l'exterieur" />
        </button>
        </div>
        
      </div>
    </li>
  );
};

export default Card;
