  import React from 'react'
import { Button, Grid ,Message} from 'semantic-ui-react'


export default function Register(){
    return(
    <Grid textAlign='center' /*sty le={{ height: '100vh' }} */ verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Button.Group size='huge'>
                    <Button color='teal'>İş Arayan Hesabı</Button>
                    <Button.Or />
                    <Button color='violet'>İş Veren Hesabı</Button>
                </Button.Group>
                <hr /> 
                <Message>
                    Zaten hesabın var mı? <p>Giriş yap</p>
                </Message>
            </Grid.Column>
        </Grid>
    );
}