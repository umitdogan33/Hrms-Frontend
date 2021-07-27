import React,{useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Header, Container, Button } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  const [auth,setAuth] = useState(false)

 function SignIn(params){
    setAuth(true)
  }

  function SignOut(params){
    setAuth(false)
  }

  return (
    <div className="navi">
      <Container>
        <div className="ui secondary  menu ">
          <div className="item">
            <Header color="teal" as={NavLink} to="/">
              arayis.net
            </Header>
          </div>
          <a className="item ">
            <i className="search link icon"></i> İş ara
          </a>
        {auth? <SignedIn signOut={SignOut}/>: <SignedOut signIn={SignIn}/>}
        </div>
      </Container>
      <hr color="lightgray" />
    </div>
  );
}
