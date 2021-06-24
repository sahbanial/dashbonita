import React from "react";
import { Formik } from "formik";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useFactureContext } from "../../context/FactureContext";
export default function FactureFormEditSchudle() {
  const { selectedFacture, updateFacture, paymentMethod, setPaymentMethod } =
    useFactureContext();
  //React.useEffect(() => {}, [selectedFacture]);
  return (
    <div className="p-2">
      <Formik
        initialValues={{
          ...selectedFacture,
        }}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          //saveFacture(values).then((response) => {});
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <h3>Ordonnancement facture</h3>
            <FormGroup>
              <Label>Numero de facture</Label>
              <Input
                type="text"
                name="num"
                onChange={handleChange}
                onBlur={handleBlur}
                value={selectedFacture.num}
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label>Fournisseur</Label>
              <Input
                name="provider"
                onChange={handleChange}
                onBlur={handleBlur}
                value={selectedFacture.provider}
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label>Montant</Label>
              <Input
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={selectedFacture.amount}
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label>Destination</Label>
              <Input
                name="destination"
                onChange={handleChange}
                onBlur={handleBlur}
                value={selectedFacture.destination}
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label>Date de reception</Label>
              <Input
                type="date"
                name="receptionDate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={selectedFacture.receptionDate}
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label>Methode de paiement</Label>
              <Input
                type="select"
                onChange={(e) => setPaymentMethod(e?.target?.value)}
              >
                <option value="CHEC">CHEQUE</option>
                <option value="VIREMENT">VIREMENT</option>
              </Input>
            </FormGroup>

            <div className="mt-2 flex-center">
              <Button
                type="button"
                color="success"
                className="ml-05"
                onClick={() =>
                  updateFacture({
                    id: selectedFacture?.id,
                    status: "APPROVED",
                    location: "FINANCIAL_SERVICE",
                    paymentMethod,
                  })
                }
              >
                Edition terminé
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
