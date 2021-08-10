import React, { useState,useEffect } from "react";
import CvService from "../services/cvService";
import "./css/cv.css";
import LanguageService from "../services/languageService"
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function ViewCv() {
  const [cv, setCv] = useState([]);
  const [languages,setLanguages] = useState([])

  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getLanguage()
      .then((result) => setLanguages(result.data.data));
  }, []);


  useEffect(() => {
    let cvService = new CvService();
    cvService
      .getCv()
      .then((result) => setCv(result.data.data));
  }, []);

 console.log(cv)
 console.error(languages)

  return (

    <div className="cv">
            {cv.map((Cv) => (
      <div className="image">


        <img
          className="cvphoto"
          src="https://res.cloudinary.com/cakeresume/image/upload/s--4SuGMyXy--/c_fill,fl_png8,g_face,h_300,w_300/v1547128648/pggod5pcjwfyzql2idfu.png"
        />
        <i as={NavLink} to="/tesdt" className="edit icon"/>
        <div className="employee_name">
          <strong>{Cv.candidate.firstName}</strong>
        </div>

        <div className="social_media">
          <img
            className="facebook"
            src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
          />
          <img
            className="twitter"
            src="https://cdn.icon-icons.com/icons2/726/PNG/512/TWITTER_icon-icons.com_62686.png"
          />
          <img
            className="github"
            src="https://img.icons8.com/small/452/github.png"
          />
          <img
            className="instagram"
            src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png"
          />

          <img />
        </div>

        <div className="title">
          Fullstack Developer • Morgantown WV,US •{" "}
          <a href="mailto:{Cv.candidate.email}" target="_blank">
            {Cv.candidate.email}
          </a>
        </div>

        <div className="cover_letter">
          <p className="deneme">
           {Cv.coverLetter.coverLetter}
          </p>
        </div>

        <div className="abilities">
          <b className="abilities_title">Abilities </b>
          <img
            className="abilities_image"
            src="https://image.flaticon.com/icons/png/512/59/59505.png"
          />
          <h3 className="software_title">Software Development</h3>
        </div>

        <img
          className="software_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyVAEJy7TEbak9boSZjnNRFMHVWdOmu8pSeqT-Vd4ZYUETnIliPamOfuuJbQn5C8MvWY&usqp=CAU"
        />

        <ul className="labels">
          <li className="sotware_title">{Cv.technology.technologyName}</li>

        </ul>


        <div className="language">
          <h3 className="language_title">
            Languages
          </h3>
        </div>

        <img className="language_image" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_language_48px-512.png"/>
{languages.map((language) => (
        <div>
        <h4>
            <span className="language_name">{language.language.languageName}</span>

          </h4>

          </div>
         ))}
      </div>
          ))}

    </div>
  );
}

//// T
