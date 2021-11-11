import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Empresas from './pages/Empresa/empresa';

import Catalogo from './pages/Catalogo/catalogo'
import Contact from './pages/contato/contact';
import SignUp from './pages/SignUp/signup';
import SignIn from './pages/SignIn/signIn';


function App() {
  return (
   <>
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' component={SignIn}/>
        <Route path='/empresas' component={Empresas} />
        <Route path ='/catalogo' component={Catalogo}/>
        <Route path='/contato' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
