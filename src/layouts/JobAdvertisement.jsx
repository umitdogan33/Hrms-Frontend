import React, { useState, useEffect } from "react";
import { Card, CardGroup, Icon, Image,Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService.js";
export default function JobAdvertisement() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobService = new JobAdvertisementService();
    jobService
      .getJobAdvertisement()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  return (
    <div className="jobAdvertisement">
      <CardGroup itemsPerRow={2}>
        {jobAdverts?.map((job) => (
          <Card className="test">
            <img className="job" src="jobLogo.png" alt="public" />
            <Card.Content>
              <Card.Header floated="center">
                <a style={{ marginRight: "80px" }}>
                  <Icon name="hourglass outline icon"/>
                  {job.appealDeadline}
                </a>

                <a className="titleName">{job.jobTitle.titleName}</a>

                <a style={{ marginLeft: "30px" }}>
                  <Icon name="map marker alternate" />
                 {job.city.cityName}
                </a>

              </Card.Header>
              <Card.Meta>
                <span className="date">{job.employer.companyname}</span>
              </Card.Meta>
              <Card.Description>
             <Button className="detaylar" color="yellow">Detaylar</Button> <Button className="basvuru" color="green">Basvur</Button>
               
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
