import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import CreateMatch from "../components/CreateMatch";
import MainScore from "../components/MainScore";
import Navigation from "../components/Navigation";
import { auth } from "../utils/firebase.config";


const Scoreboard = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth , (currentUser) => {
    setUser(currentUser);
  });

  const handleLogOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="scoreboard">
      <CreateMatch />
    </div>
  );
};

export default Scoreboard;
