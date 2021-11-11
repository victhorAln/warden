import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/link';
import green from '@material-ui/core/colors/green';
import { black, blue} from '@material-ui/core/colors';

const CollorButton = withStyles(thema=> ({
    root:{
        color: '#fff',
        backgroundColor:blue[800],
        '&:hover':{
            backgroundColor:blue[800]
        }
    }
}))(Button)
const ColorButton = withStyles(theme => ({
    root:{
        color: '#fff',
        backgroundColor: green[500],
        '&:hover' : {
            backgroundColor:green[700]
        }
    }
}))(Button)


export class SignIn extends Component {
        render (){
    return(
        <div>
                <Container component = "main" maxwidth ="xs">
                    <div className="column">
                        <div className="text-center">
                            <Typography className = "mt-3 font-weight-normal" component="h1" variant="h6">Faça Login</Typography>
                        </div>
                    </div >
                    <form action="/add" method="post">
                        <TextField 
                                    variant ="outlined"
                                    margin ="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="email"
                                    name="usarname"
                                    type="email"
                                   />
                            
                        <TextField 
                                    variant ="outlined"
                                    margin ="normal"
                                    required
                                    flex-direction ="column"
                                    fullWidth
                                    id="password"
                                    label="senha"
                                    name="password"
                                    type="password"
                                />
                                
                                <CollorButton
                                    type="button"
                                    size="sm"
                                    variant="container"
                                    fullWidth 
                                >
                                        Entrar
                                    </CollorButton>
                                    

                          <Link href="/sign-up">
                                    
                                <ColorButton
                                    type="button"
                                    size="large"
                                    variant="container"
                                    fullWidth   
                                >
                                   Ainda não possui cadastro?
                                </ColorButton>

                         </Link>
                    </form>
                </Container>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({})

export default SignIn