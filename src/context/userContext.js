import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [modalState, setModalState] = useState({
    signInModal: false,
  });

  const toggleModals = modal => {
    if (modal === "signIn") {
      setModalState({
        signInModal: true
      });
    }
    if (modal === "close") {
      setModalState({
        signInModal: false
      });
    }
  };

  return (
    <UserContext.Provider value={{ modalState, toggleModals }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
