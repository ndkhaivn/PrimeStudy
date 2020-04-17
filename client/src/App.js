import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

export default App;
