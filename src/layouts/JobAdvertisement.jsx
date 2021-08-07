import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardGroup, Icon, Image, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService.js";
import "../pages/css/JobAdvertisement.css";
import FavoriteService from "../services/FavoriteService.js";
export default function JobAdvertisement() {
  const [jobAdverts, setJobAdverts] = useState([]);
  const [favorite, setFavorite] = useState([]);
  let jobService = new JobAdvertisementService();
  let favoriteService = new FavoriteService();

  useEffect(() => {
    jobService
      .getJobAdvertisement()
      .then((result) => setJobAdverts(result.data.data));
  }, []);


  useEffect(() => {
    favoriteService
      .getByUserId(2)
      .then((result) => setFavorite(result.data.data));
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
                  {favorite? <Button color="red">Add Favo</Button>:<Button color="green">Delete Favo</Button>}
                  {job.appealDeadline}
                </a>


                <a className="titleName">{job.jobTitle.titleName}</a>

                <a style={{ marginLeft: "30px" }}>
                  <Icon name="map marker alternate" />
                  {job.city.cityName}
                </a>
                <Icon className="heart outline icon" />
              </Card.Header>  
              <Card.Meta>
                <span className="date">{job.employer.companyname}</span>
              </Card.Meta>
              <Card.Description>
                <Button className="detaylar" color="yellow" as={NavLink}
                  to={`/jobadvertisement/detail/${job.id}`}> 
                  Detaylar
                </Button>{" "}
                <Button
                  className="basvuru"
                  color="green"
                >
                  Basvur
                </Button>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
