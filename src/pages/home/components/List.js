import React,{ Component } from 'react';
import { ListItem,ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store'

class List extends Component {
    render() {
        const { list, gerMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item,index)=>{
                        return (
                            <ListItem key={index}>
                                <img alt="" className="pic" src={item.get('imgUrl')}></img>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">
                                        {item.get('desc')}
                                    </p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={()=>gerMoreList(page)}>加载更多</LoadMore>
            </div>
            
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage']),

})
const marDispatch = (dispatch) => ({
    gerMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
})

export default connect(mapState,marDispatch)(List);