import Vue from "vue"
import VueRouter from "vue-router"

import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import LoginStudent from "./pages/LoginStudent"
import LoginTeacher from "./pages/LoginTeacher"
import Student from "./pages/Student"
import Teacher from "./pages/Teacher"
import CourseCreate from "./pages/CourseCreate"

Vue.use(VueRouter)
export const router = new VueRouter({
	routes : [
	{
		path : "/" ,
		name : "/", 
		component : HomePage , 
	
	},
	{
		path : "/CourseCreate" ,
		name : "/CourseCreate", 
		component : CourseCreate , 
	
	},
	{
		path : "/Login" ,
		name : "Login", 
        component : Login
	},
	{
		path : "/LoginTeacher" ,
		name : "LoginTeacher", 
        component : LoginTeacher
	},
	{
		path : "/LoginStudent" ,
		name : "LoginStudent", 
        component : LoginStudent
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