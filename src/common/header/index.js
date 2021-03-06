import React,{Component} from 'react';
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
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button
} from './style';


class Header extends Component{
   
    getListArea(){
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const pageList = [];
        const newLisht = list.toJS();
        
        for (let i = (page-1)*10; i < page*10; i++) {
           pageList.push(
                <SearchInfoItem key={newLisht[i]}>{newLisht[i]}</SearchInfoItem>
           )
            
        }
        if(focused || mouseIn){
            return (
                <SearchInfo onMouseEnter = {handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                    <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i> 
                        换一批
                         
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null;
        }
        }
     render(){
        const {focused,list,handleInputFocus,handleInputonBlur} = this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                        <NavSearch 
                        onFocus={() => handleInputFocus(list)}
                        onBlur = {handleInputonBlur}
                        className = {focused ?'focused':''}
                        placeholder = '搜索'>
                        </NavSearch>
                        </CSSTransition>
                        <i className = {focused ?'focused iconfont zoom':'iconfont zoom'}>&#xe69d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className = 'writting'><i className="iconfont">&#xe624;</i>写文章</Button>
                    <Button className = 'reg'>注册</Button>                    
                </Addition>
            </HeaderWrapper>
        );
    }
}


//取数据
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


const mapDispathToProps = (dispatch)=>{

    return {
        handleInputFocus(list){
            
            const action = actionCreators.searchFocus();
            if(list.size === 0){
                dispatch ( actionCreators.getList() );
            }
            
            dispatch(action)
        },
        handleInputonBlur(){
            const action = actionCreators.searchBlur();
            dispatch(action)
        },
        handleMouseEnter(){
            dispatch ( actionCreators.MouseEnter() );
        },
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			//dispatch(loginActionCreators.logout())
		}        
    }

}


export default connect(mapStateToProps,mapDispathToProps)(Header)