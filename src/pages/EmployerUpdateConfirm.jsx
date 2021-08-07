import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login"
import { Dialog } from 'primereact/dialog';
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import { toast } from "react-toastify";
import EmployerService from "../services/employerService";
import "./css/EmployerUpdateConfirm.css"

export default function EmployerUpdateConfirm() {
    const [employers,setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService();
        employerService 
          .getByUpdatedData()
          .then((result) => setEmployers(result.data.data));
          
      }, []);

   

     
  function updateConfirm(id) {
    let employerService = new EmployerService();
    employerService
      .updateConfirm(id)
      .then(result => {
        toast.success("Job posting activated successfully");
        window.location.reload();
      }, [])
  }

    return (
        <div className="confirm_table">
           <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
            <Table.HeaderCell>internet sitesi</Table.HeaderCell>
            <Table.HeaderCell>doğrulama bölümü</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {employers.map((employer) => (
            <Table.Row key={employer.updatedData.user_id}>
              <Table.Cell className="company_name">{employer.updatedData.companyname}</Table.Cell>
              <Table.Cell className="email">{employer.updatedData.email}</Table.Cell>
              <Table.Cell className="web_site">{employer.updatedData.webSite}</Table.Cell>
              <Table.Cell className="row4">
                <Button color="green" onClick={()=>updateConfirm(employer.user_id)}>Onayla</Button>
                <Button className="detay" color="yellow"><Link to={`/employerupdate/detail/${employer.updatedData.user_id}`}>Detaylar</Link></Button>
              </Table.Cell>
            </Table.Row>
            ))}
        </Table.Body>

      </Table>
        </div>
    )
}
