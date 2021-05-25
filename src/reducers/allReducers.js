import counterReducer from '../reducers/counter';
import isLogged from '../reducers/isLogged';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLogged
});

export default allReducers;