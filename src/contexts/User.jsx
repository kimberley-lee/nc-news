import propTypes from "prop-types";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("cooljmessy");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: propTypes.array.isRequired,
};
