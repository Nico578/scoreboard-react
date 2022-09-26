import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { auth } from "../utils/firebase.config";

export default function SignInModal() {
  const { modalState, toggleModals } = useContext(UserContext);
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      )
      window.location.reload()
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
          >
            <div
              className="position-absolute top-50 start-50 bg-light translate-middle text-dark"
              style={{ minWidth: "400px", padding: "20px" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Se connecter</h5>
                    <button
                      onClick={() => toggleModals("close")}
                      className="btn-close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form
                      onSubmit={(e) => handleLogin(e)}
                      className="sign-up-form"
                    >
                      <div className="mb-3">
                        <label className="form-label" htmlFor="signUpEmail">
                          Adresse mail
                        </label>
                        <input
                          ref={loginEmail}
                          type="email"
                          id="signUpEmail"
                          name="email"
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="signUpPassword">
                          Mot de passe
                        </label>
                        <input
                          ref={loginPassword}
                          type="password"
                          id="signUpPassword"
                          name="password"
                          required
                          className="form-control"
                        />
                      </div>
                      <input
                        type="submit"
                        value="Se connecter"
                        className="btn btn-primary"
                      />
                    </form>
                  </div>
                  <span className="text-danger fst-italic text-center fw-bold mt-1">
                    {error && "Adresse Email ou mot de passe incorrect"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
