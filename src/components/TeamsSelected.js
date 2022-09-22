import { addDoc, collection } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "../utils/firebase.config";

const TeamsSelected = () => {

  const teamHome = useRef();
  const teamVisitor = useRef();

  const handleTeams = async (e) => {
    e.preventDefault();

    const dataTeams = {
      teamHome: {
        name: teamHome.current.textContent,
        setHome: [0, 0, 0, 0, 0],
        pointsHome: [0, 0, 0, 0, 0],
      },
      teamVisitor: {
        name: teamVisitor.current.textContent,
        setVisitor: [0, 0, 0, 0, 0],
        pointsVisitor: [0, 0, 0, 0, 0],
      },
      date: Date.now(),
    };
    await addDoc(collection(db, "matchs"), dataTeams);
  };
  return (
    <div className="teamsselected">
      <form className="form" onSubmit={(e) => handleTeams(e)}>
        <div className="team-container">
          <div className="teamHome-container">
            <h4>Équipe à domicile</h4>
            <p ref={teamHome}></p>
          </div>
          <div className="teamVisitor-container">
            <h4>Équipe à l'exterieur</h4>
            <p ref={teamVisitor}></p>
          </div>
        </div>
        <input type="submit" value="Valider les équipes" />
      </form>
    </div>
  );
};

export default TeamsSelected;
