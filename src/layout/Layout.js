import React from "react";
import { Col, Row } from "reactstrap";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <Row>
        <Col md="2" lg="2">
          <SideBar />
        </Col>
        <Col md="10" lg="10">
          {children}
        </Col>
      </Row>
    </div>
  );
}
