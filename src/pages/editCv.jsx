import React, { useState,useEffect } from 'react'
import EmployerService from '../services/employerService';
import LanguageService from '../services/languageService';
import {Button} from "semantic-ui-react"
export default function EditCv() {
    const [employers,setEmployers] = useState([])


    useEffect(() => {
        let employerService = new EmployerService();
        employerService 
          .getByUserId(11)
          .then((result) => setEmployers(result.data.data));
          
      }, []);
    


    
    return (
        <div>
            <label for="cars">Choose a car:</label>
<select id="cars" name="cars">

    
    <option values={employers.user_id}>{employers.companyname}</option>
    
   
</select>
<Button onClick={()=>console.log(employers.user_id)}>Ekle</Button>
    </div>
    )
}
