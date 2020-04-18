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

function App() {

  return (
    <Provider store={store}>
      
      <BrowserRouter>
        <Navigation/> 
        <Lesson/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
