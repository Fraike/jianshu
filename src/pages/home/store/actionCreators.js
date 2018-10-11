import axios from 'axios';
import * as actionTypes from './constants';

const getHomeInfoAction = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            dispatch(getHomeInfoAction(result))
        }).catch(()=>{
            console.log('error')
        })
    }
    
}