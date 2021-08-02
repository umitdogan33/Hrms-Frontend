import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import { toast } from "react-toastify";
import "./css/EmployerEndorsement.css"
import EmployerService from "../services/employerService";

export default function EmployerEndorsement() {
    const [employers,setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService();
        employerService
          .getIsConfirmFalse()
          .then((result) => setEmployers(result.data.data));
          
      }, []);

     
  function confirmEmployer(id) {
    let employerService = new EmployerService();
    employerService
      .confirmEmployer(id)
      .then(result => {
        toast.success("Job posting activated successfully");
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
            <Table.Row key={employer.user_id}>
              <Table.Cell>{employer.companyname}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.webSite}</Table.Cell>
              <Table.Cell className="row4">
                <Button color="green" onClick={()=>confirmEmployer(employer.user_id)}>Onayla</Button>
              </Table.Cell>
            </Table.Row>
            ))}
        </Table.Body>

        {/* <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer> */}
      </Table>
        </div>
    )
}
