import { h } from 'preact';
import { Provider } from 'react-redux';

import MainPanel from './MainPanel';
import Navigation from './Navigation';
import store from '../redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
            <MainPanel />
        </Provider>
    );
}
