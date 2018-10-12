import axios from 'axios';
import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const getHomeInfoAction = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const getMoreInfoAction = (result, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(result),
    nextPage: fromJS(nextPage)
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

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then((res)=>{
            const result = res.data.data;
            dispatch(getMoreInfoAction(result, page + 1))
        }).catch(()=>{
            console.log('error')
        })
    }
}

export const toggleShow = (show) => ({
    type: actionTypes.CHANGE_TOGGLE_SHOW,
    show
})