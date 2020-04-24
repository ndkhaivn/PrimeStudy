import { h } from 'preact';
import { Provider } from 'react-redux';

import MainPanel from './components/MainPanel';
import Navigation from './components/Navigation';
import store from './redux/store';
import config from './config';
import './App.css';


export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
            <MainPanel />
        </Provider>
    );
}
