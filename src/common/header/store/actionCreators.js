import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});
export const MouseEnter = () => ({
	type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data:fromJS(data),//转换成immutable对象的数组，这样在reducer里才能放在immutable的空数组里
	totalPage:Math.ceil(data.length/10)
});


export const getList = () => {//在这个函数里专门负责用来请求接口数据
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res)=>{
			const data = res.data;
			dispatch(changeList(data.data));

		}).catch(()=>{
			console.log('error')
		})
	}
};