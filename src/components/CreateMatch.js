import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../utils/firebase.config";
import Card from "./Card";
import Teams from "./Teams";

const CreateMatch = ({ teams }) => {
  const [matchsView, setMatchsView] = useState([]);
  const [searchTeam, setSearchTeam] = useState("");
  const [teamsView, setTeamsView] = useState([]);

  useEffect(() => {
    onValue(ref(database, "/teams"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((teams) => {
          setTeamsView((oldArray) => [...oldArray, teams]);
        });
      }
    });
  }, []);

  return (
    <>
      <form>
        <div className="container-fluid w-50 d-flex mx-auto m-2 border rounded">
          <div className="container">
            <div className="container-teams mx-auto d-flex justify-content-around">
              <div className="teamHome me-5">
                <h6 className="mt-2 text-center">Équipe à domicile</h6>
                <input
                  type="text"
                  defaultValue={searchTeam}
                  onChange={(e) => setSearchTeam(e.target.value)}
                />
              </div>
              <div className="teamVisitor ms-5">
                <h6 className="mt-2 text-center">Équipe à l'exterieur</h6>
                <input
                  type="text"
                  defaultValue={searchTeam}
                  onChange={(e) => setSearchTeam(e.target.value)}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Valider les équipes"
              className="btn btn-success mx-auto w-30 d-flex mt-2 "
            />
          </div>
        </div>
      </form>
      <ul>
        {teamsView
          .filter(
            (teams) =>
              teams.name.toLowerCase().includes(searchTeam.toLowerCase()) || teams.logo.toLowerCase().includes(searchTeam.toLowerCase())
          )
          .slice(`${setSearchTeam}`)
          .map((teams, index) => (
            <Card key={index} teams={teams} />
          ))}
      </ul>
    </>
  );
};

export default CreateMatch;
