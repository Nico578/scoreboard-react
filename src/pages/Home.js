import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import CreateMatch from "../components/CreateMatch";

const Home = () => {
  const btnConnect = document.querySelector(".btnConnect");

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogOut = async () => {
    await signOut(auth);
    btnConnect.style.visibility = "visible";
  };

  return (
    <div className="home">
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button onClick={handleLogOut}>
              Se deconnecter
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        )}
        <div></div>
      </div>
      <CreateMatch />
    </div>
  );
};

export default Home;
