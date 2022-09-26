import React, { useRef, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const SignUp = () => {
  const email = useRef();
  const password = useRef();
  const [displayName, setDisplayName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then( async (userAuth) => {
        await updateProfile(userAuth.user, {
          displayName
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div
            className="position-absolute top-50 bg-light start-50 translate-middle text-dark"
            style={{ minWidth: "400px", padding: "20px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">S'inscrire</h5>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={(e) => handleRegister(e)}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label className="form-label" htmlFor="signUpPseudo">
                        Pseudo
                      </label>
                      <input
                        onChange={(e) => setDisplayName(e.target.value)}
                        type="text"
                        id="signUpPseudo"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="signUpEmail">
                        Adresse mail
                      </label>
                      <input
                        ref={email}
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
                        ref={password}
                        type="password"
                        id="signUpPassword"
                        name="password"
                        required
                        className="form-control"
                      />
                    </div>
                    <input
                      type="submit"
                      value="S'inscrire"
                      className="btn btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
