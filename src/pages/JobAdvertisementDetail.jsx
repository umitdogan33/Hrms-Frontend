import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobAdvertisementService from "../services/jobAdvertisementService.js";
import './css/JobAdvertisementDetail.css'

export default function JobAdvertisementDetail() {
    const [jobAdverts, setJobAdverts] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        let jobService = new JobAdvertisementService();
        jobService
          .getJobAdvertisement()
          .then((result) => setJobAdverts(result.data.data));
      }, []);

    return (
        <div>
            
        </div>
    )
}
