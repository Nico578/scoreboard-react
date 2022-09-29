import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import Teams from "../components/Teams";
import { auth } from "../utils/firebase.config";

const ShowTeams = ({teams}) => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      {user ? <Teams /> : null}
    </div>
  );
};

export default ShowTeams;
