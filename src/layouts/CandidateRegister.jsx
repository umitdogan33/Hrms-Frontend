import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import CandidateService from "../services/candidateService";
import { Form, Grid, Segment, Header,Button } from "semantic-ui-react";
import { add } from "lodash";
export default function CandidateRegister() {
  
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          nationalIdentity: "",
          yearOfBirth: "",
          password: "",
          passwordRepeat: "",
        }}
        validationSchema={Yup.object({
          yearOfBirth: Yup.date().required("Lütfen Doğum Tarihinizi Giriniz."),
          email: Yup.string()
            .email("Lütfen Geçerli Bir E-Mail Alanı Giriniz.")
            .required("Lütfen E-Mail Adresinizi Giriniz."),
          nationalIdentity: Yup.string().required(
            "Lütfen TC Kimlik Numaranızı Giriniz."
          ),
          firstName: Yup.string().required("Lütfen Adınızı Giriniz."),
          lastName: Yup.string().required("Lütfen Soyadınızı Giriniz"),
          password: Yup.string().required("Lütfen Bir Şifre Belirleyiniz."),
          passwordRepeat: Yup.string()
            .oneOf([Yup.ref("password"), null], "Şifreler Eşleşmiyor.")
            .required("Lütfen Şifrenizi Doğrulayın."),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let candidateService = new CandidateService();
          let add = new CandidateService();
       add.addCandidate(values)
          candidateService.registerCandidate(values).then((result) => {});
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          touched,
          handleReset,
          handleBlur,
          dirty,
          isSubmitting,
        }) => (
          <Form
            className="register-candidate-form p-4"
            onSubmit={handleSubmit}
            size="large"
          >
            <Header as="h2" color="teal" textAlign="center">
              Kayıt ol
            </Header>

            <Grid textAlign="center" verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <input
                id="firstName"
                  fluid
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  type="text"
                  placeholder="Adınızı Giriniz"
                />
                {errors.name && touched.name && (
                  <small className="d-block text-danger">{errors.name}</small>
                )}

                <input
                  fluid
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  type="text"
                  placeholder="Soyadınızı Giriniz"
                />
                {errors.surname && touched.surname && (
                  <small className="d-block text-danger">
                    {errors.surname}
                  </small>
                )}

                <input
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  type="email"
                  placeholder="E-Mail Adresinizi Giriniz"
                />
                {errors.eMail && touched.eMail && (
                  <small className="d-block text-danger">{errors.eMail}</small>
                )}

                <input
                id = "password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  type="password"
                  placeholder="Şifre Belirleyiniz"
                />
                {errors.password && touched.password && (
                  <small className="d-block text-danger">
                    {errors.password}
                  </small>
                )}

                <input
                id="passwordRepeat"
                  fluid
                  value={values.passwordRepeat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  type="password"
                  placeholder="Şifrenizi tekrar giriniz"
                />
                {errors.passwordRepeat && touched.passwordRepeat && (
                  <small className="d-block text-danger">
                    {errors.passwordRepeat}
                  </small>
                )}
                <input
                id = "nationalIdentity"
                  fluid
                  value={values.nationalIdentity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="TC Kimlik Numaranızı Giriniz"
                />
                {errors.identifyNumber && touched.identifyNumber && (
                  <small className="d-block text-danger">
                    {errors.identifyNumber}
                  </small>
                )}

                <input
                  id="birthDate"
                  value={values.yearOfBirth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="date"
                  placeholder="Doğum Tarihinizi Giriniz"
                />
                {errors.birthDate && touched.birthDate && (
                  <small className="d-block text-danger">
                    {errors.birthDate}
                  </small>
                )}
                <br></br>
                <br></br>
                <br></br>
                <Button
                  color="green"
                 
                  disabled={!dirty || isSubmitting}
                  
                  className="detaylar" 
                  color="yellow"
                >
                  Kayıt Ol
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}
