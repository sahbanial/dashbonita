import React from "react";
import { useQuery } from "react-query";
import { Network } from "../config/constant";
import { useAuthContext } from "./AuthContext";
const FactureContext = React.createContext();
const FactureProvider = (props) => {
  const [selectedFacture, setSelectedFacture] = React.useState(null);
  const { currentUser } = useAuthContext();
  const [paymentMethod, setPaymentMethod] = React.useState("CHEK");
  const [error, setError] = React.useState(null);
  const { data, isLoading, refetch } = useQuery("factures", () =>
    Network().get("/facture")
  );
  const handleSelectFacture = (facture) => {
    setSelectedFacture(facture);
  };
  const updateFacture = (body) => {
    Network().post("/facture/edit", body);
    refetch();
  };
  React.useEffect(() => {}, [data, isLoading]);
  const saveFacture = (data) =>
    new Promise((resolve, reject) =>
      Network()
        .upload("/facture/add", data)
        .then((httpResponse) => {
          if (httpResponse?.error) {
            setError(httpResponse?.error);
            reject(false);
          }
          if (httpResponse?.success) {
          }
          refetch();
        })
    );
  const dataFiltred = (factures) => {
    let filtred = factures;
    const role = currentUser?.role;
    filtred = filtred
      ?.filter((fact) => fact?.location == role || role === "ADMIN")
      ?.filter(
        (fact) =>
          role === "ADMIN" || fact?.status !== "FINAL_APPROVED_OFFICE_ORDER"
      );
    return filtred;
  };
  return (
    <FactureContext.Provider
      value={{
        saveFacture,
        data: dataFiltred(data?.data?.nodes),
        allData: data?.data?.nodes,
        handleSelectFacture,
        selectedFacture,
        updateFacture,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {props.children}
    </FactureContext.Provider>
  );
};
const useFactureContext = () => React.useContext(FactureContext);
export { FactureContext, useFactureContext, FactureProvider };
