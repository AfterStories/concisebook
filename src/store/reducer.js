import{ combineReducers } from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store/';
//因为在header的reducer中导出的小reducer名字叫reducer，所以这里导入reducer
//但是要重命名成headerReducer，避免和这个大reducer里最后导出的reducer重名
const reducer =  combineReducers({
    header:headerReducer
})

export default reducer