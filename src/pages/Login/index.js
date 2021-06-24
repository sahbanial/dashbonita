import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import ImgLogin from "../../assets/images/login-logo.png";
import { Formik } from "formik";
import { useAuthContext } from "../../context/AuthContext";
export default function Login({ history }) {
  const { login, error } = useAuthContext();

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <Col md="4" className="form-login">
        <img src={ImgLogin} className="logo" />
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            login(values).then(() => {
              history.push("/");
            });
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Nom d'utilisateur</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </FormGroup>

              {errors.email && touched.email && errors.email}
              <FormGroup>
                <Label>Mot de passe</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </FormGroup>

              {errors.password && touched.password && errors.password}
              <div className="flex-center mt-2">
                <Button type="submit" color="success" disabled={isSubmitting}>
                  Se connecter
                </Button>
              </div>
              <div className="flex-center mt-2">
                {error && <span className="text-danger">{error}</span>}
              </div>
            </form>
          )}
        </Formik>
      </Col>
    </div>
  );
}
