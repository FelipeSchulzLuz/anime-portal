import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store/storeConfig';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import GridData from './components/GridData/GridData';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import Page404 from './pages/Page404'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/animes">
              <GridData />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;