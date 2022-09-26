import { teamsData } from "../data/teamsData";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Teams = () => {
  const [rangeValue, setRangeValue] = useState(8);
  const [selectedRadioTeams, setSelectedRadioTeams] = useState("");
  const [selectedRadioPools, setSelectedRadioPools] = useState("");
  const [searchTeam, setSearchTeam] = useState("");
  const radios = ["Elite Masculine", "Elite Féminine", "Elite Avenir"];
  const pools = ["Poule A", "Poule B"];
  const poolsAmateur = ["Poule A", "Poule B", "Poule C", "Poule D"];

  function tri(a, b) {
    if (a.name < b.name) return -1;
    else if (a.name == b.name) return 0;
    else return 1;
  }

  return (
    <div className="teams">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="52"
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

      {selectedRadioTeams.valueOf() == "Elite Avenir" ? (
        <ul>
          {poolsAmateur.map((poule) => (
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
      ) : (
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
        <button
          onClick={(e) => setSelectedRadioTeams("")(setSelectedRadioPools(""))}
        >
          annuler la recherche
        </button>
      )}

      <ul>
        {teamsData
          .filter(
            (teams) =>
              teams.name.includes(searchTeam) || teams.logo.includes(searchTeam)
          )
          .sort(tri)
          .filter((teams) => teams.ligue.includes(selectedRadioTeams))
          .sort(tri)
          .filter((teams) => teams.poule.includes(selectedRadioPools))
          .sort(tri)
          .slice(0, rangeValue)
          .map((teams, index) => (
            <Card key={index} teams={teams} />
          ))}
      </ul>
    </div>
  );
};

export default Teams;
