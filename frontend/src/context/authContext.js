import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

function useUser() {
  function getUser() {
    const userJSON = sessionStorage.getItem("user");
    const user = JSON.parse(userJSON);
    return user;
  }

  const [user, setUser] = useState(getUser());

  function saveUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  return { user, setUser: saveUser };
}

const AuthContext = createContext();

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuthContext must be used within an AuthProvider.");
  return context;
}

function AuthProvider({ children }) {
  const hook = useUser();
  return <AuthContext.Provider value={hook}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};
export { AuthProvider };
