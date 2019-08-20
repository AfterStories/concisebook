import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
`
//(${logoPic})多行文本嵌入对象
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:58px;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav = styled.div`
    height:100%;
    width:960px;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;

`

export const NavItem = styled.div`
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }    
    &.active{
        color:#ea6f5a;
    }
    line-height:56px;
    padding: 0 15px;
    color:#333;
`
export const NavSearch = styled.input`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    padding:0 30px 0 20px;
    margin:9px 0 0 20px;
    box-sizing:border-box;
    font-size:14px;
    color:#777;
    &::placheholder{
        color:#999;
    }
    &.focused{
        width:240px;        
    }

    &.slide-enter{
        transition:all 0.2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all 0.2s ease-out;
    }  
    &.slide-entexiter-active{
        width:160px;
    }      
`
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width :30px;
        height:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }

`

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border-radius:19px;
    border:1px solid #ec6149; 
    font-size:16px 
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background-color:#ec6149;
    }
      
`


