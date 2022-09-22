import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import ConnectModal from "../components/ConnectModal";
import MainScore from "../components/MainScore";
import Navigation from "../components/Navigation";
import { auth } from "../utils/firebase.config";


const Scoreboard = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="scoreboard">
      <Navigation />
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button onClick={handleLogOut}>
              Se deconnecter{" "}
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        )}
        {user ? <MainScore /> : <ConnectModal />}
      </div>
    </div>
  );
};

export default Scoreboard;
