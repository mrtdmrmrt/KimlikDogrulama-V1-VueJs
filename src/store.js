import Vue from"vue"
import Vuex from "vuex"


Vue.use(Vuex)

const store = new Vuex.Store({
	state : {
		Auth : [],
		Course:[],
		Teacher:[],
		TeacherCourse: []
	},
	mutations : {
		addAuth(state,data){
			state.Auth.push(data)
		},
		addCourse(state,data){
			state.Course.push(data)
		},
		addTeacher(state,data){
			state.Teacher.push(data)
		},
		addTeacherCourse(state,data){
			state.TeacherCourse.push(data)
		}
	},
	actions : {
		addAuth(vuexContext,data){
			vuexContext.commit("addAuth",data)
		},
		addCourse(vuexContext,data){
			vuexContext.commit("addCourse",data)
		},
		addTeacher(vuexContext,data){
			vuexContext.commit("addTeacher",data)
		},
		addTeacherCourse(vuexContext,data){
			vuexContext.commit("addTeacherCourse",data)
		}
	},
	getters : {
		getAuth(state){
			return state.Auth
		},
		getCourse(state){
			return state.Course
		},
		getTeacher(state){
			return state.Teacher
		},
		getTeacherCourse(state){
			return state.TeacherCourse
		}
	}

})

export default store