import Vue from"vue"
import Vuex from "vuex"


Vue.use(Vuex)

const store = new Vuex.Store({
	state : {
		Auth : []
	},
	mutations : {
		addAuth(state,data){
			state.Auth.push(data)
		}
	},
	actions : {
		addAuth(vuexContext,data){
			vuexContext.commit("addAuth",data)
		}
	},
	getters : {
		getAuth(state){
			return state.Auth
		}
	}

})

export default store