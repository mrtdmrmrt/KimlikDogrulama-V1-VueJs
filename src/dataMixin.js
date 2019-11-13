import axios from "axios"
export const dataMixin = {
    data (){

    },
    methods : {
        getLogin (){
            return axios.get("/api/login.json");
        },
        getStudent (){
            return axios.get("/api/student.json");
        },
        getTeacher (){
            return axios.get("/api/teacher.json");
        }
    }
}