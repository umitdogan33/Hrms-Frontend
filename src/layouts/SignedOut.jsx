import React from 'react'
import { NavLink } from 'react-router-dom';
import {Button } from "semantic-ui-react";

export default function SignedOut(props) {
    return (
        <div className="right menu">
            <Button.Group>
              <Button color="teal" onClick={props.signIn}>Giriş Yap</Button>
              <Button.Or />
              <Button color="violet" onClick={props.signIn}>Kayıt Ol</Button>
            </Button.Group>
        </div>
        
    )
}
