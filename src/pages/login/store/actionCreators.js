import axios from 'axios';
import * as actionTypes from './constants';


const loginAction = () => ({
    type: actionTypes.LOGIN,
    value: true
})

export const login = (account,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+ account +'&password=' + password).then((res=> {
            const result = res.data.data;
            if(result) {
                dispatch(loginAction())
            }
        }))
    }
}

export const logout  = () => ({
    type: actionTypes.LOGINOUT,
    value: false
})