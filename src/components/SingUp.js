import React, { useRef, useState } from "react"; 
import { auth } from "../utils/firebase.config"

const SignUp = () => {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("")

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
        registerPassword.current.value
      ).then(async (userAuth) => {
        await userAuth.user.updateProfile({
          displayName 
        })
        console.log(userAuth)
        window.location.reload()
      })
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input onChange={(e) => setDisplayName(e.target.value)} type="text" placeholder="Pseudo" required />
          <input
            ref={registerEmail}
            type="email"
            placeholder="Email"
            required
          />
          <input
            ref={registerPassword}
            type="password"
            placeholder="Mot de passe"
            required
          />
          <input type="submit" value="Valider l'inscription" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
