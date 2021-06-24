import React from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export default function PrivateRoute(props) {
  const { currentUser, setCurrentUser } = useAuthContext();
  const history = useHistory();
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    console.log({ user });
    if (!user) {
      history.push("/login");
    }
    if (user) {
      const us = JSON.parse(user);
      setCurrentUser(us);
    }
  }, []);
  return <div>{props?.children}</div>;
}
