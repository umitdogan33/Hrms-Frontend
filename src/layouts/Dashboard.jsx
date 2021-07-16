import Navi from "./Navi";
import Register from '../pages/Register'
import Login from "../pages/Login";
import JobAdvertisement from "./JobAdvertisement";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navi/>
      <JobAdvertisement/>
      
    </div>
  );
}