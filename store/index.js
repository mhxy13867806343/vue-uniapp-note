import Vue from 'vue'
import Vuex from 'vuex'
import useStore from "@/hooks/useStroe"; // 请确保此自定义 Hook 已经正确定义

const { setStorageSync, getStorageSync } = useStore();
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		token:uni.getStorageSync('token') || '', //token信息
		userInfo:getStorageSync('user')||{},
	},
	getters:{
		userInfo:state=>state.userInfo,
		token:state=>state.token,
	},
	mutations:{
		//设置token
		setUserData: (state, data={}) => {
		    state.token = data.token || ''
			state.userInfo = data
			setStorageSync('token',data.token)
			setStorageSync('user',data)
		},
		clear(state){
			state.token=''
			state.userInfo={}
			uni.removeStorageSync('token')
			uni.removeStorageSync('user')
		}
	
	},
	actions:{
		//设置token
		setUserToken({commit},data={}){
			commit('setUserData',data)
		},
		//清除token
		clearToken({commit}){
			commit('clear')
		}
	}
})
export default store
