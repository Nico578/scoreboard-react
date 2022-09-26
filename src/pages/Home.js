import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import Teams from "../components/Teams";

const Home = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="home">
      <div className="app-header">
        {user &&
          (
            <div className="user-infos">
              <span>{user?.displayName[0]}</span>
              <h4>{user?.displayName}</h4>
              <button onClick={handleLogOut}>
                Se deconnecter
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </div>
          )}
          <div>
            {user ? <Teams /> : null }
          </div>
          
      </div>
    </div>
  );
};

export default Home;
