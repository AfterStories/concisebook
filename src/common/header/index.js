import React from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Addition,
    Button
} from './style';

const Header = (props) => {
    return(
        <HeaderWrapper>
            <Logo href = './'/>
            <Nav>
                <NavItem className = 'left active'>首页</NavItem>
                <NavItem className = 'left'>下载App</NavItem>
                <NavItem className = 'right'>登陆</NavItem>
                <NavItem className = 'right'><i className="iconfont">&#xe636;</i></NavItem>
                <SearchWrapper>  
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                    <NavSearch 
                    onFocus={props.handleInputFocus}
                    onBlur = {props.handleInputonBlur}
                    className = {props.focused ?'focused':''}
                    placeholder = '搜索'>
                    </NavSearch>
                    </CSSTransition>
                    <i className = {props.focused ?'focused iconfont':'iconfont'}>&#xe69d;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className = 'writting'><i className="iconfont">&#xe624;</i>写文章</Button>
                <Button className = 'reg'>注册</Button>                    
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
	}
}


const mapDispathToProps = (dispath)=>{

    return {
        handleInputFocus(){
            const action = actionCreators.searchFocus();
            dispath(action)
        }
        ,handleInputonBlur(){
            const action = actionCreators.searchBlur();
            dispath(action)
        }
    }

}


export default connect(mapStateToProps,mapDispathToProps)(Header)