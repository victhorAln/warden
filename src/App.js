import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Empresas from './pages/empresas';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' component={SignIn}/>
        <Route path='/empresas' component={Empresas} />
        <Route path='/services' component={Services} />
        <Route path='/contato' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
