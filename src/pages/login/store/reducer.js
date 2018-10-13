import {
    fromJS
} from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
    login: false
});


export default (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.LOGIN:
        return state.set('login', action.value)
    case actionTypes.LOGINOUT:
        return state.set('login', action.value)
    default:
            return state;
    }
}