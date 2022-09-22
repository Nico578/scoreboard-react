import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const Login = () => {
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [error, setError] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(loginEmail.current.value, loginPassword.current.value);

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      console.log(user);
    } catch (error) {
      setError(true)
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login">
          <h3>Se connecter</h3>
          <form className="form-login" onSubmit={(e) => handleLogin(e)}>
            <input type="email" placeholder="Email" required ref={loginEmail} />
            <input
              type="password"
              placeholder="Mot de passe"
              required
              ref={loginPassword}
            />
            <input type="submit" value="Se connnecter" />
            <span>{error && "Adresse mail ou mot de passe incorrect"}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
