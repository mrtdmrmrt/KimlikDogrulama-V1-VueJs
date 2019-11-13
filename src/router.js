import Vue from "vue"
import VueRouter from "vue-router"

import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Student from "./pages/Student"
import Teacher from "./pages/Teacher"

Vue.use(VueRouter)
export const router = new VueRouter({
	routes : [
	{
		path : "/" ,
		name : "/", 
		component : HomePage , 
	
	},
	{
		path : "/Login" ,
		name : "Login", 
        component : Login
	}
	,
	{
		path : "/Student" ,
		name : "Student",
        component : Student
	}
	,
	{
		path : "/Teacher" ,
		name : "Teacher", 
        component : Teacher
    }
	],
	mode : "history"
})