import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import GridData from './components/GridData/GridData';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import Page404 from './pages/Page404'
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/animes">
            <GridData />
          </Route>
          <Route path="/anime/:id">
            <Details />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}



export default App;