import React,{ Component } from 'react';
import { RecommedWrapper,RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component {
    render() {
        return (
            <RecommedWrapper>
                {
                    this.props.list.map((item)=> {
                        return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
                    })
                }
                
            </RecommedWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend);