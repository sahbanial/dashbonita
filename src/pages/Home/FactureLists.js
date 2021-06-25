import moment from "moment";
import React from "react";
import {
  Edit,
  Eye,
  Play,
  RefreshCcw,
  RefreshCw,
  RotateCw,
} from "react-feather";
import { Badge, Row, Table, Input } from "reactstrap";
import { FactureStatus, LocationServices } from "../../config/config";
import { API } from "../../config/constant";
import { useAuthContext } from "../../context/AuthContext";
import { useFactureContext } from "../../context/FactureContext";

export default function FactureLists() {
  const { data, handleSelectFacture, allData } = useFactureContext();
  const { currentUser } = useAuthContext();
  const renderHeader = () => {
    const cols = [
      "Identifiant",
      "Destination",
      "Montant(DT)",
      "Facture(PDF)",
      "Date de reception",
      "Status",
      "Service",
      "Traiter",
    ];
    return cols?.map((col) => <th className="p-2">{col}</th>);
  };
  const renderData = () => {
    return data?.map((item) => (
      <tr className="p-2">
        <td className="p-2">{item?.num}</td>
        <td>{item?.destination}</td>
        <td>{item?.amount}</td>
        <td>
          <a target="_blank" href={`${API}/facture/files/${item?.file}`}>
            Voir Facture
          </a>
        </td>
        <td>{moment(item?.receptionDate).format("DD/MM/YYYY")}</td>
        <td>
          <div className="badge">
            {" "}
            <span className="text-black">{FactureStatus[item?.status]}</span>
          </div>
        </td>
        <td>
          <div className="d-flex">
            <div className="cursor-pointer">
              <a target="_blank" href={`${API}/facture/files/${item?.file}`}>
                <Eye size={16} color="black" />
              </a>
            </div>
            <div
              className="cursor-pointer ml-05"
              onClick={() => handleSelectFacture(item)}
            >
              <Edit size={16} color="black" />
            </div>
          </div>
        </td>
      </tr>
    ));
  };
  const renderDataInstance = () => {
    return data
      ?.filter((fact) => fact.status === "IN_INSTANCE")
      ?.map((item) => (
        <tr className="p-2">
          <td className="p-2">{item?.num}</td>
          <td>{item?.destination}</td>
          <td>{item?.amount}</td>
          <td>
            <a target="_blank" href={`${API}/facture/files/${item?.file}`}>
              Voir Facture
            </a>
          </td>
          <td>{moment(item?.receptionDate).format("DD/MM/YYYY")}</td>
          <td>
            <div className="badge">
              {" "}
              <span className="text-black">{FactureStatus[item?.status]}</span>
            </div>
          </td>

          <td>
            <div className="d-flex">
              <div className="cursor-pointer">
                <a target="_blank" href={`${API}/facture/files/${item?.file}`}>
                  <Eye size={16} color="black" />
                </a>
              </div>
              <div
                className="cursor-pointer ml-05"
                onClick={() => handleSelectFacture(item)}
              >
                <Edit size={16} color="black" />
              </div>
            </div>
          </td>
        </tr>
      ));
  };
  const renderFactSigne = () => {
    return allData
      ?.filter((fact) => fact.status === "APPROVED_SERVICE_FINANCIAL")
      ?.map((item) => (
        <tr className="p-2">
          <td className="p-2">{item?.num}</td>
          <td>{item?.destination}</td>
          <td>{item?.amount}</td>
          <td>
            <a target="_blank" href={`${API}/facture/files/${item?.file}`}>
              Voir Facture
            </a>
          </td>
          <td>{moment(item?.receptionDate).format("DD/MM/YYYY")}</td>
          <td>
            <div className="badge">
              {" "}
              <span className="text-black">{FactureStatus[item?.status]}</span>
            </div>
          </td>
          <td>
            <div className="badge">
              {" "}
              <span className="text-black"></span>
            </div>
          </td>
          <td>
            <div className="d-flex">
              <div className="cursor-pointer">
                <a target="_blank" href={`${API}/facture/files/${item?.file}`}>
                  <Eye size={16} color="black" />
                </a>
              </div>
              <div
                className="cursor-pointer ml-05"
                onClick={() => handleSelectFacture(item)}
              >
                <Edit size={16} color="black" />
              </div>
            </div>
          </td>
        </tr>
      ));
  };
  const renderSuivie = () => {
    return allData?.map((item) => (
      <tr className="p-2">
        <td className="p-2">{item?.num}</td>
        <td>{item?.destination}</td>
        <td>{item?.amount}</td>
        <td>
          <a target="_blank" href={`${API}/facture/files/${item?.file}`}>
            Voir Facture
          </a>
        </td>
        <td>{moment(item?.receptionDate).format("DD/MM/YYYY")}</td>
        <td>
          <div className="badge">
            {" "}
            <span className="text-black">{FactureStatus[item?.status]}</span>
          </div>
        </td>
        <td>
          <div className="badge">
            {" "}
            <span className="text-black">
              {LocationServices[item?.location]}
            </span>
          </div>
        </td>
        <td>
          <div className="d-flex">
            <div className="cursor-pointer">
              <a target="_blank" href={`${API}/facture/files/${item?.file}`}>
                <Eye size={16} color="black" />
              </a>
            </div>
            <div
              className="cursor-pointer ml-05"
              onClick={() => handleSelectFacture(item)}
            >
              <Edit size={16} color="black" />
            </div>
          </div>
        </td>
      </tr>
    ));
  };
  const getTitleListByRole = (role) => {
    const status = {
      OFFICE_ORDER: "Liste des factures à envoyer",
      ADMINISTRATIVE_DEPARTMENT: "Liste des factures à valider",
      FINANCIAL_DIRECTION: "Liste des factures à valider",
      ACCOUNTING_DEPARTMENT: "Liste des factures à valider",
      TAX_DEPARTMENT: "Liste des factures à valider",
      SCHEDILING_SERVICE: "Liste des factures à valider",
      FINANCIAL_SERVICE: "Liste des factures à valider",
      EXECUTIVE_MANAGMENT: "Liste des factures à valider",
    };
    return status[role];
  };
  return (
    <div className="mt-2">
      <div>
        <div className="list-header d-flex align-items-center">
          <span>Filters</span>
        </div>
        <div className="p-2 border">
          <Input placeholder="chercher" />
        </div>
      </div>

      <div className="mt-3">
        <div className="list-header d-flex align-items-center">
          <span>{getTitleListByRole(currentUser?.role)}</span>
          <div className="ml-05">
            <RotateCw size={15} />
          </div>
        </div>
        <Table striped>
          <thead>{renderHeader()}</thead>
          <tbody>{renderData()}</tbody>
        </Table>
      </div>

      {["ADMINISTRATIVE_DEPARTMENT", "FINANCIAL_DIRECTION"].includes(
        currentUser?.role
      ) && (
        <div className="mt-3">
          <div className="list-header d-flex align-items-center">
            <span>Liste des facture en instance</span>
            <div className="ml-05">
              <RotateCw size={15} />
            </div>
          </div>
          <Table striped>
            <thead>{renderHeader()}</thead>
            <tbody>{renderDataInstance()}</tbody>
          </Table>
        </div>
      )}
      {["ADMINISTRATIVE_DEPARTMENT"].includes(currentUser?.role) && (
        <div className="mt-3">
          <div className="list-header d-flex align-items-center">
            <span>Suivie de facture</span>
            <div className="ml-05">
              <RotateCw size={15} />
            </div>
          </div>
          <Table striped>
            <thead>{renderHeader()}</thead>
            <tbody>{renderSuivie()}</tbody>
          </Table>
        </div>
      )}
      {["FINANCIAL_DIRECTION"].includes(currentUser?.role) && (
        <div className="mt-3">
          <div className="list-header d-flex align-items-center">
            <span>List des facture à signé</span>
            <div className="ml-05">
              <RotateCw size={15} />
            </div>
          </div>
          <Table striped>
            <thead>{renderHeader()}</thead>
            <tbody>{renderFactSigne()}</tbody>
          </Table>
        </div>
      )}
    </div>
  );
}
