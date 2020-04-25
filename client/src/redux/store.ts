import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const localStorage = typeof window === 'object' && window.localStorage;
const initialState = JSON.parse(localStorage && localStorage.getItem('UserData') || '{}');

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(applyMiddleware(
    thunk,
));

const store = createStore(reducers, initialState, enhancer);

if (localStorage)
{
    store.subscribe(() => {
        localStorage.setItem('UserData', JSON.stringify(store.getState()))
    });
}


export default store;
