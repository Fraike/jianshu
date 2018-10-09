import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

const Header = (props) => {
    return (
            <HeaderWrapper>
                <Logo  />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">
                            &#xe607;
                        </i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                            className={props.focused ? 'focused': ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={props.focused ? 'focused iconfont': 'iconfont'}>
                            &#xe616;
                        </i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">
                            &#xe62b;
                        </i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
    )
}



const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: 'search_Blur'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);