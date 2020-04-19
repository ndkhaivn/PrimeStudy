import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import { useTranslation } from 'react-i18next';
import Lesson from './components/Lesson';
import Schedule from './components/Schedule';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8765/api';
axios.defaults.headers.common['Accept'] = 'application/json';

function App() {

  return (
    <Provider store={store}>
      
      <BrowserRouter>
        <Navigation/> 

        <Switch>
          <Route path="/lesson">
            <Lesson/>
          </Route>

          <Route path="/schedule">
            <Schedule/>
          </Route>
        </Switch>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
