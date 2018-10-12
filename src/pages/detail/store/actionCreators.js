import axios from 'axios';
import * as actionTypes from './constants';

const getDetailAction = (result) => ({
    type: actionTypes.GET_DETAIL,
    title: result.title,
    content: result.content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res)=> {
            const result = res.data.data;
            dispatch(getDetailAction(result))
        })
    }
}
