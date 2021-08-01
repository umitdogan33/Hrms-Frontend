import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import '../css/SignedIn.css'
export default function SignedIn(props) {
    return (
        <div className="signed_in">
           <a>
            <Dropdown text='hoşgeldiniz' className="dropdown_text">
    <Dropdown.Menu className="dropdown_item">
    
      <Dropdown.Item as={NavLink} to="/cv" icon='trash' text='iş arayan kulanıcı bilgileri' />
      <Dropdown.Item as={NavLink} to="/employerinformation" icon='trash' text='iş veren kulanıcı bilgileri' />
      <Dropdown.Item icon='trash' text='sistem kulanıcı onaylama ekranı'/>
      <Dropdown.Divider />
      <Dropdown.Item text='çıkış yap' onClick={props.signOut}/>
    </Dropdown.Menu>
  </Dropdown>
  </a>
        </div>
        
    )
}
