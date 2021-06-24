import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} exact={true} path="/login" />
        <PrivateRoute>
          <Route component={Home} exact={true} path="/" />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
