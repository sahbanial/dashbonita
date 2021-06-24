import React from "react";
import { Col, Row } from "reactstrap";
import logo from "../assets/images/logo.png";
import defaultUser from "../assets/images/default-user.png";
import { useAuthContext } from "../context/AuthContext";
import { Lock } from "react-feather";
export default function NavBar() {
  const { currentUser } = useAuthContext();
  return (
    <React.Fragment>
      <div className="navbar-header">
        <Row className="no-padding no-margin align-items-center ">
          <Col md="4" lg="4">
            <div>
              <img src={logo} className="navbar-logo" />
            </div>
          </Col>
          <Col className="d-flex justify-content-end" md="8" lg="8">
            <Row className="align-items-center">
              <Col md="6" lg="6">
                <div style={{ width: "300px" }}>
                  <span className="font-medium-2">Bienvennue :</span>
                  <span className="font-medium-2 text-primary">
                    {currentUser?.userName}
                  </span>
                </div>
              </Col>
              <Col md="6" lg="6">
                <div>
                  <img src={defaultUser} className="user-img" />
                  <span className="font-weight-600">Utilisateur</span>
                  <div
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      window.location.reload();
                    }}
                  >
                    <Lock size={16} />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="navbar-menu">
        <ul type="none">
          <li>
            <span>Taches</span>
          </li>
          <li>
            <span>Cas</span>
          </li>
          <li>
            <span>Processus</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
