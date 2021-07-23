import React from "react";
import { Header, Container, Button } from "semantic-ui-react";
import SignedOut from "./SignedOut";

export default function Navi() {
  return (
    <div className="navi">
      <Container>
        <div className="ui secondary  menu ">
          <div className="item">
            <Header color="teal" as="h2">
              arayis.net
            </Header>
          </div>
          <a className="item ">
            <i className="search link icon"></i> İş ara
          </a>
        <SignedOut/>
        </div>
      </Container>
      <hr color="lightgray" />
    </div>
  );
}
