import React from "react";
import { useState } from "react";
import { teamsData } from "../data/teamsData";
import Card from "./Card";

const Teams = () => {
  const [rangeValue, setRangeValue] = useState(8);
  const [selectedRadioTeams, setSelectedRadioTeams] = useState("");
  const [selectedRadioPools, setSelectedRadioPools] = useState("");
  const [searchTeam, setSearchTeam] = useState("");
  const radios = ["Elite Masculine", "Elite Féminine"];
  const pools = ["Poule A", "Poule B"];

  return (
    <div className="teams">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="50"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((ligue) => (
          <li>
            <input
              type="radio"
              id={ligue}
              name="ligueRadio"
              checked={ligue === selectedRadioTeams}
              onChange={(e) => setSelectedRadioTeams(e.target.id)}
            />
            <label htmlFor={ligue}> {ligue} </label>
          </li>
        ))}
        <input
          type="search"
          defaultValue={searchTeam}
          onChange={(e) => setSearchTeam(e.target.value)}
        />
      </ul>
      {selectedRadioTeams && (
        <ul>
        {pools.map((poule) => (
          <li>
            <input
              type="radio"
              id={poule}
              name="pouleRadio"
              checked={poule === selectedRadioPools}
              onChange={(e) => setSelectedRadioPools(e.target.id)}
            />
            <label htmlFor={poule}> {poule} </label>
          </li>
        ))} 
        </ul>
      )}
      {selectedRadioPools && (
        <button onClick={(e) => (setSelectedRadioTeams("")) (setSelectedRadioPools("")) }>
            annuler la recherche
        </button>
      )}
      
      <ul>
        {teamsData
          .filter(
            (teams) =>
              teams.name.includes(searchTeam) || teams.logo.includes(searchTeam)
          )
          .filter((teams) => teams.ligue.includes(selectedRadioTeams))
          .filter((teams) => teams.poule.includes(selectedRadioPools))
          .slice(0, rangeValue)
          .map((teams, index) => (
            <Card key={index} teams={teams} />
          ))}
      </ul>
    </div>
  );
};

export default Teams;
