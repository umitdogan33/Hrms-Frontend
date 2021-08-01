import Navi from "./Navi";
import Register from '../pages/Register'
import Login from "../pages/Login";
import JobAdvertisement from "./JobAdvertisement";
import { Route } from "react-router";
import CandidateRegister from "./CandidateRegister";
import viewCv from  "../pages/viewCv"
import EmployerInformation from "../pages/EmployerInformation";
import EmployerEndorsement from "../pages/EmployerEndorsement"
// import EmployerRegister from "./EmployerRegister";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navi/>
      <Route exact path="/" component={JobAdvertisement}/>
      <Route  path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route  path="/register/candidate" component={CandidateRegister}/>
      {/* <Route  path="/register/employers" component={EmployerRegister}/> */}
      <Route path="/cv" component={viewCv}/>
      <Route path="/employerinformation" component={EmployerInformation}/>
      <Route path="/employerconfirm" component={EmployerEndorsement}/>
      </div>
  );
}