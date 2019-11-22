import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { TruckProvider } from './context';

ReactDOM.render(
  <TruckProvider>
    <Router>
      <App />
    </Router>
  </TruckProvider>,
  document.getElementById('root'));


serviceWorker.unregister();
