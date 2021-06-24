import React from "react";
import { Formik } from "formik";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useFactureContext } from "../../context/FactureContext";
export default function FactureFormAdd() {
  const { saveFacture } = useFactureContext();
  return (
    <div className="p-2">
      <Formik
        initialValues={{
          num: "",
          provider: "",
          receptionDate: "",
          destination: "",
          amount: 0,
          file: null,
        }}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          saveFacture(values).then((response) => {});
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
            <h3>Enregistrement facture</h3>
            <FormGroup>
              <Label>Identifiant de facture</Label>
              <Input
                type="text"
                name="num"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.num}
              />
            </FormGroup>
            <FormGroup>
              <Label>Fournisseur</Label>
              <Input
                name="provider"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.provider}
              />
            </FormGroup>
            <FormGroup>
              <Label>Montant(DT)</Label>
              <Input
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
              />
            </FormGroup>
            <FormGroup>
              <Label>Designiation</Label>
              <Input
                name="destination"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.destination}
              />
            </FormGroup>
            <FormGroup>
              <Label>Date de reception</Label>
              <Input
                type="date"
                name="receptionDate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.receptionDate}
              />
            </FormGroup>
            <FormGroup className="mt-2">
              <Label>Fichier</Label>
              <Input
                type="file"
                name="file"
                onChange={(event) =>
                  //setFieldValue("file", event?.currentTarget.files[0])
                  //console.log({ event: event?.currentTarget?.files[0] })
                  setFieldValue("file", event?.currentTarget.files[0])
                }
              />
            </FormGroup>
            <div className="mt-2 flex-center">
              <Button color="warning" disabled={isSubmitting}>
                Annuler
              </Button>
              <Button
                type="submit"
                color="success"
                className="ml-05"
                disabled={isSubmitting}
              >
                Enregister la facture
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
