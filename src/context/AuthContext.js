import React from "react";
import { Network } from "../config/constant";
const AuthContext = React.createContext();
const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const login = (data) =>
    new Promise((resolve, reject) =>
      Network()
        .post("/user/login", data)
        .then((httpResponse) => {
          if (httpResponse?.error) {
            setError(httpResponse?.error);
            reject(false);
          }
          if (httpResponse?.success) {
            setCurrentUser(httpResponse?.user);
            localStorage.setItem("user", JSON.stringify(httpResponse?.user));
            localStorage.setItem("token", httpResponse?.token);
            resolve(true);
          }
        })
    );

  return (
    <AuthContext.Provider value={{ currentUser, login, error, setCurrentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
const useAuthContext = () => React.useContext(AuthContext);
export { AuthContext, useAuthContext, AuthProvider };
