import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import { useTranslation, I18nextProvider } from 'react-i18next';
import axios from 'axios';
import MainPanel from './components/MainPanel';
import { setUser } from './redux/actions/user';
import config from './config';
import i18n from './i18n';

axios.defaults.baseURL = config.apiEndpoint;
axios.defaults.headers.common['Accept'] = 'application/json';

const userData = localStorage.UserData;
if (userData) {
  store.dispatch(setUser(JSON.parse(userData)));
}

function App() {

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>

      
      <BrowserRouter>
        <Navigation/> 

        <MainPanel/>
        
      </BrowserRouter>

      </I18nextProvider>
    </Provider>
  );
}

export default App;
