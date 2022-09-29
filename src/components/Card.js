import React from "react";

const Card = ({teams}) => {

  const selectedTeamHome = (e) => {
    console.log(teamhome)
    document.querySelector(".teamHome > p").innerHTML = `${teams.name}`

  };
  

  const selectedTeamVisitor = (e) => {
      document.querySelector(".teamVisitor > p").innerHTML = `${teams.name}`
  };


  return (
    <div className="card  m-3 p-1 border-primary bg-dark w-230">
      <li className="card bg-dark ">
        <div className="img m-auto">
          <img
          className="d-flex mx-auto object-fit-contain"
            src={teams.logo}
            alt={"logo de " + teams.logo}
            id="logo"
            value={teams.name}
          />
        </div>
        <div className="infos d-grid align-items-center justify-content-around">
          <h2 className="m-2">{teams.name}</h2>
          <p>
            {teams.ligue} : {teams.poule}
          </p>
        </div>
        <div className="selectTeams">
          <button onClick={selectedTeamHome} title={teams.name} className="m-2">
            <i class="bi bi-house-door-fill" title={teams.name}></i>
          </button>
          <button
            onClick={selectedTeamVisitor}
            title={teams.name}
            className="m-2"
          >
            <i class="bi bi-airplane-fill" title={teams.name}></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Card;
