import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import EmployerService from "../services/employerService";
import { useEffect, useState } from "react/cjs/react.development";
import TextInput from "../utilities/customFormControls/TextInput";
import { Button} from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";
import { NavLink, useHistory } from "react-router-dom";

export default function EmployerUpdate() {
  let history = useHistory();
  const [employer, setEmployer] = useState([]);
  let employerService = new EmployerService();

  useEffect(() => {
    employerService
      .getByUserId(11)
      .then((result) => setEmployer(result.data.data));
  }, []);

  const initialValues = {
    user_id: employer.user_id,
    email: employer.email,
    password: employer.password,
    passwordRepeat: employer.passwordRepeat,
    companyname: employer.companyname,
    phoneNumber: employer.phoneNumber,
    webSite: employer.webSite,
  };

  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(6, "6 dan küçük olmaz")
      .required("password is required"),
    passwordRepeat: Yup.mixed().test(
      "mach",
      "şifreler eşleşmiyor",
      function () {
        return this.parent.password === this.parent.passwordRepeat;
      }
    ),
  });

  function update(values) {
    employerService.update(values).then((result) => {
        toast.success("successfult updated");
    });
  }


  

  return (
    <div>
     
      <Formik
        onSubmit={(values) => {
          update(values);
        }}
        validationSchema={schema}
        initialValues={initialValues}
        enableReinitialize
      >
        <Form className="ui form">
          <TextInput placeholder="email" name="email"></TextInput>
          <TextInput placeholder="password" name="password"></TextInput>
          <TextInput
            placeholder="passwordRepeat"
            name="passwordRepeat"
          ></TextInput>
          <TextInput placeholder="webSite" name="webSite"></TextInput>
          <TextInput placeholder="companyname" name="companyname"></TextInput>
          <TextInput placeholder="phoneNumber" name="phoneNumber"></TextInput>
          {/* <ToastContainer position="bottom-right"></ToastContainer> */}
          <Button color="olive" type="sumbit" as={NavLink} to="/">
            Güncelle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
