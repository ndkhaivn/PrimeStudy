import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import MainPanel from './components/MainPanel';
import { setUser } from './redux/actions/user';

axios.defaults.baseURL = 'http://localhost:8765/api';
axios.defaults.headers.common['Accept'] = 'application/json';

const studentData = localStorage.StudentData;
if (studentData) {
  store.dispatch(setUser(JSON.parse(studentData)));
}

function App() {

  return (
    <Provider store={store}>
      
      <BrowserRouter>
        <Navigation/> 

        <MainPanel/>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
