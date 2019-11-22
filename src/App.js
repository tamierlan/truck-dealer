import React from 'react';
import './App.css';

import Home from './pages/Home';
import Trucks from './pages/Trucks';
import SingleTruck from './pages/SingleTruck';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trucks" component={Trucks} />
        <Route exact path="/trucks/:detail" component={SingleTruck} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
