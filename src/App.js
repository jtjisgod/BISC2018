import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './style.css'

import Home from './pages/Home';
import Rank from './pages/Rank';
import Challenge from './pages/Challenge';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import bisc from './pages/bisc';
import NotFound from './pages/NotFound';

import Menu from './components/Menu';


class App extends Component {
  render() {
    return (
        <React.Fragment>
            <header>
                <Container>
                    <h1>BISC CTF</h1>
                    <div>
                        <Menu/>
                    </div>
                </Container>
            </header>
            <section>
                <Container>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path = "/" component = {Home} />
                            <Route path = "/rank" component = {Rank} />
                            <Route path = "/Challenge" component = {Challenge} />
                            <Route path = "/Login" component = {Login} />
                            <Route path = "/Logout" component = {Logout} />
                            <Route path = "/Register" component = {Register} />
                            <Route path = "/bisc" component = {bisc} />
                            <Route component={NotFound}/>
                        </Switch>        
                    </BrowserRouter>
                </Container>
            </section>
            <footer>
                <Container>
                    Copyright (c) jtjisgod &amp; BISC
                </Container>
            </footer>
        </React.Fragment>
    )
  }
}


export default App;