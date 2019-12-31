import axios from "axios"
export const dataMixin = {
    data (){
        return{
            
        }
    },
    methods : {
        getLogin (){
            return axios.get("/api/login.json");
        },
        getStudent (){
            return axios.get("http://sisyshell.com/castdb/webservis.php?islem=listele&tablo=ogrenci");
            //return axios.get("/api/student.json");
        },
        getTeacher (){
            return axios.get("http://sisyshell.com/castdb/webservis.php?islem=listele&tablo=ogretmen");
        },
        getCourse(){
            return axios.get("http://sisyshell.com/castdb/webservis.php?islem=listele&tablo=ders")
        },
        getTeacherCourse(){
            return axios.get("http://sisyshell.com/castdb/webservis.php?islem=listele&tablo=ogretmen_ders")
        },
        getDiscontinuity(){
            return axios.get("http://sisyshell.com/castdb/webservis.php?islem=listele&tablo=devamsizlik")
        }

    },
    created(){
       
    }
}