import React from 'react'
import { NavLink } from 'react-router-dom';
import {Button } from "semantic-ui-react";

export default function SignedOut() {
    return (
        <div className="right menu">
            <Button.Group>
              <Button as={NavLink} to="/login" color="teal">Giriş Yap</Button>
              <Button.Or />
              <Button as={NavLink} to="/register" color="violet">Kayıt Ol</Button>
            </Button.Group>
        </div>
        
    )
}
