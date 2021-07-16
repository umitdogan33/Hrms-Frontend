import React from "react";
import { Header, Container, Button } from "semantic-ui-react";

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
          <a className="item ">Anasayfa</a>
          <a className="item">Anasayfa</a>
          <div className="right menu">
            <Button.Group>
              <Button color="teal">Giriş Yap</Button>
              <Button.Or />
              <Button color="violet">Kayıt Ol</Button>
            </Button.Group>
          </div>
        </div>
      </Container>
      <hr color="lightgray" />
    </div>
  );
}
