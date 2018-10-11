import React,{ Component } from 'react';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight 
} from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import { connect} from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
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
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action =  actionCreators.getHomeInfo();
        dispatch(action);
    }
})

export default connect(null,mapDispatch)(Home);