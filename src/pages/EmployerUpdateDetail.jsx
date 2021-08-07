import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EmployerService from "../services/employerService";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import "./css/EmployerUpdateDetail.css";
export default function EmployerUpdateDetail() {
  const [employer, setEmployer] = useState([]);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByUserId(11)
      .then((result) => setEmployer(result.data.data));
  }, []);
    //  console.log(employer.updatedData.password);
  function handleClick() {
      history.push("/employer/updateconfirm");
  }
  return (
    <div>
      <div className="last_inf">
        <Card>
          <Card.Content>
            <Card.Header>Last information</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <div>email : {employer.email}</div>
              <div>password : {employer.password}</div>
              <div>webSite : {employer.webSite}</div>
              <div>companyname : {employer.companyname}</div>
              <div>phoneNumber : {employer.phoneNumber}</div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
      <div className="new_inf">
        <Card>
          <Card.Content>
            <Card.Header>new information</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <div>email : {employer.updatedData.email}</div>
              <div>password : {employer.updatedData.password}</div>
              <div>webSite : {employer.updatedData.webSite}</div>
              <div>companyname : {employer.updatedData.companyname}</div>
              <div>phoneNumber : {employer.updatedData.phoneNumber}</div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
      <Button color="yellow" onClick={()=> handleClick()}>Geri Dön</Button>
     
    </div>
  );
}
