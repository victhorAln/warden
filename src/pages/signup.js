import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/link';
import green from '@material-ui/core/colors/green';

const ColorButton = withStyles(theme => ({
  root:{
      color: '#fff',
      backgroundColor: green[500],
      '&:hover' : {
          backgroundColor:green[700]
      }
  }
}))(Button)

const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <div>
            <Container component = "main" maxwidth ="xs">
                    <div className="column">
                        <div className="text-center">
                            <Typography className = "mt-3 font-weight-normal" component="h1" variant="h6">Faça o Cadastro</Typography>
                        </div>
                    </div >
                    <form action="/add" method="post">
                    <TextField 
                                    variant ="outlined"
                                    margin ="normal"
                                    required
                                    fullWidth
                                    id="nome"
                                    label="Nome"
                                    name="usarname"
                                    type="name"
                                   />
                        <TextField 
                                    variant ="outlined"
                                    margin ="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
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
                                    label="Senha"
                                    name="password"
                                    type="password"
                                />
                        <TextField 
                                    variant ="outlined"
                                    margin ="normal"
                                    required
                                    fullWidth
                                    id="CEP"
                                    label="CEP"
                                    name="cep"
                                   />    

                        <TextField 
                                    variant ="outlined"
                                    margin ="normal"
                                    required
                                    fullWidth
                                    id="CPF"
                                    label="CPF"
                                    name="cpf"
                                   />   
                         
                                <Button
                                    type ="button"
                                    variant ="container"
                                    fullWidth
                                    color="red"
                                    size="large"    
                                >
                                </Button>
                                <Link
                                    href="/home"
                                >
                                <ColorButton
                                    type="button"
                                    size="large"
                                    variant="container"
                                    fullWidth
                                >
                                    Cadastrar
                                </ColorButton>
                                </Link>
                     </form>
                </Container>
        </div>
    </div>
  );
};

export default SignUp;
