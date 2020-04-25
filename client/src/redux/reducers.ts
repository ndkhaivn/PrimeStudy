import { combineReducers } from 'redux';

import lang from './lang';

const reducers = {
    lang,
};

type Reducers = typeof reducers;
export type RootState =
{
    [S in keyof Reducers]: ReturnType<Reducers[S]>;
}

export default combineReducers(reducers);
