import React from 'react'
import * as Yup from "yup";
import {Form,Formik} from "formik";
import EmployerService from '../services/employerService';
import { useEffect, useState } from 'react/cjs/react.development';
import TextInput from "../utilities/customFormControls/TextInput";
import { Button } from 'semantic-ui-react';

export default function EmployerUpdate() {
   const [employer,setEmployer] = useState([]);
   
    useEffect(() => {
        let employerService = new EmployerService();
        employerService
          .getByUserId(11) 
          .then((result) => setEmployer(result.data.data));
          
      }, []);
   
 console.log(employer.password)
      const passwordconst =employer.password
   const initialValues = {user_id:employer.user_id,email:1, password:passwordconst,webSite:employer.webSite,companyname:employer.companyname,phoneNumber:employer.phoneNumber,passwordRepeat:employer.passwordRepeat}


    return (
        <div>
            <Formik
            initialValues=
            {initialValues}
            onSubmit={(values)=>{
                console.log(values);
            }}
            >
                <Form className="ui form">
                    <TextInput name="user_id" readonly="yes"></TextInput>
                    <TextInput placeholder="email" name="email"></TextInput>
                    <TextInput placeholder="password" name="password"></TextInput>
                    <TextInput placeholder="passwordRepeat" name="passwordRepeat"></TextInput>
                    <TextInput placeholder="webSite" name="webSite"></TextInput>
                    <TextInput placeholder="companyname" name="companyname"></TextInput>
                    <TextInput placeholder="phoneNumber" name="phoneNumber"></TextInput>
                    <Button color="olive" type="sumbit" onClick={()=>console.log(employer)}>Güncelle</Button>
                </Form>

            </Formik>
        </div>
    )
}
