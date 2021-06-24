import React from "react";
import { Col, Row } from "reactstrap";
import { useAuthContext } from "../../context/AuthContext";
import { useFactureContext } from "../../context/FactureContext";
import Layout from "../../layout/Layout";
import SideBar from "../../layout/SideBar";
import FactureFormAdd from "./FactureFormAdd";
import FactureFormEdit1 from "./FactureFormEdit1";
import FactureFormEditAccount from "./FactureFormEditAccount";
import FactureFormEditFinancial from "./FactureFormEditFinancial";
import FactureFormEditFinancialDirection from "./FactureFormEditFinancialDirection";
import FactureFormEditManagment from "./FactureFormEditManagment";
import FactureFormEditOffice from "./FactureFormEditOffice";
import FactureFormEditSchudle from "./FactureFormEditSchudle";
import FactureFormEditTax from "./FactureFormEditTax";
import FactureLists from "./FactureLists";

export default function Home() {
  const { currentUser } = useAuthContext();
  const FormByRole = {
    OFFICE_ORDER: FactureFormEditOffice,
    ADMINISTRATIVE_DEPARTMENT: FactureFormEdit1,
    FINANCIAL_DIRECTION: FactureFormEditFinancialDirection,
    ACCOUNTING_DEPARTMENT: FactureFormEditAccount,
    TAX_DEPARTMENT: FactureFormEditTax,
    SCHEDILING_SERVICE: FactureFormEditSchudle,
    FINANCIAL_SERVICE: FactureFormEditFinancial,
    EXECUTIVE_MANAGMENT: FactureFormEditManagment,
  };

  const { selectedFacture } = useFactureContext();
  const renderForm = () => {
    const Component = FormByRole[currentUser?.role];
    if (!Component) {
      return <FactureFormAdd />;
    }
    if (selectedFacture) {
      return <Component />;
    }
    if (["OFFICE_ORDER", "ADMIN"].includes(currentUser?.role))
      return <FactureFormAdd />;
  };

  return (
    <Layout>
      <Row className="no-margin no-pading">
        <Col md="6" lg="8" className="ml-4">
          <FactureLists />
        </Col>
        <Col md="6" lg="4">
          {renderForm()}
        </Col>
      </Row>
    </Layout>
  );
}
