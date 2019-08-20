import * as constants from './constants';

import { fromJS} from 'immutable';
const defaultState = fromJS({
    focused:false
});
    


export default (state = defaultState,action) => {
    if(action.type === constants.SEARCH_FOCUS){
        //set方法会结合之前的immutable的值生成一个新的对象
        return state.set('focused',true);
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused',false);
    }
    
    return state;

}