import React from "react";
import { useState } from "react";
import { teamsData } from "../data/teamsData";
import Card from "./Card";

const Teams = () => {
  const [rangeValue, setRangeValue] = useState(8);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [searchTeam, setSearchTeam] = useState("");
  const radios = ["Elite Masculine", "Elite Féminine"];

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
            <input type="radio" id={ligue} name="ligueRadio" onChange={(e) => setSelectedRadio(e.target.id) } />
            <label htmlFor={ligue}> {ligue} </label>
          </li>
        ))}
        <input 
        type="search" 
        defaultValue={searchTeam} 
        onChange={(e) => setSearchTeam(e.target.value)}/>
      </ul>
      <ul>
        {teamsData
        .filter((teams) => teams.name.includes(searchTeam))
        .filter((teams) => teams.ligue.includes(selectedRadio))
        .slice(0, rangeValue)
        .map((teams, index) => (
          <Card key={index} teams={teams} />
        ))}
      </ul>
    </div>
  );
};

export default Teams;
