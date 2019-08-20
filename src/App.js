import React , {Component} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
import Iconfont from './statics/iconfont/iconfont';
import CSSReset from './style';
import store from './store';



class App extends Component{

  render(){
      return(
        <Provider store = {store}>
          <CSSReset />
          <Iconfont />

          <Header/>
        </Provider>
      );
  }
}

export default App;
