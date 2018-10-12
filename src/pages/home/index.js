import React,{ Component } from 'react';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import { connect} from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4494/9d9f6188aff3634c9fb99ec0f68299d509faae48.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={ this.handleScrollTop}>BackTop</BackTop> : '' }
                
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeSrollTopShow)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeSrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action =  actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeSrollTopShow() {
        if(document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleShow(true))
        }else {
            dispatch(actionCreators.toggleShow(false))
        }
    }
})

export default connect(mapState,mapDispatch)(Home);