<template>
    <div class="container">
       <h3>Öğretmen Sistemi</h3>
       <hr>
       <p v-for=" (data,key) in vuexgetAuth" :key="key" >Hoş Geldiniz Sn. {{data.name}}</p>
       <br>
       <button @click="$router.push('/CourseCreate')" class="btn btn-outline-info">Ders Oluştur</button>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Ders Kodu</th>
              <th>Ders Adı</th>
              <th>Devam Sınırı</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for=" (value,key) in vuexgetCourse" :key="key" >
            <tr>
              <td>{{value.ders_kodu}}</td>
              <td>{{value.ders_adi}}</td>
              <td>{{value.devam_siniri}}</td>
              <td><button @click="deleteCourse(value.ders_kodu,value.ders_adi,value.devam_siniri)" class="btn btn-outline-danger">Sil</button></td>
           </tr>
          </tbody>
        </table>
       
    </div>
</template>
<script>
import axios from "axios"
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data() {
        return{
          Teacher:null,
          Course:null,
          TeacherCourse:null,
          id:null
        }
    },
    computed:{
      vuexgetAuth(){
        return this.$store.getters.getAuth
      },
      vuexgetCourse(){
        return this.$store.getters.getCourse
      }
    },
    methods:{
     deleteCourse(ders_kodu,ders_adi,devam_siniri){
       this.vuexgetAuth.forEach(element => {
                this.id = element.id             
            });
       const headers = {
                    'Content-Type': 'text/plain'
                };
                
       //ders tablosundan veri silme
       axios.delete(
                'http://sisyshell.com/castdb/webservis.php?islem=sil&tablo=ders&ders_kodu='+this.ders_kodu,
                {
                    ders_kodu: ders_kodu,
                },
                {headers}
                ).then(response => {
                    console.log("Success ========>", response);
                })
                .catch(error => {
                    console.log("Error ========>", error);
                })
         //ogretmen_ders tablosundan veri silme
       axios.delete(
                'http://sisyshell.com/castdb/webservis.php?islem=sil&tablo=ogretmen_ders&ders_kodu='+ders_kodu+'&ogretmen_id='+this.id,
                {
                    ders_kodu: ders_kodu,
                    ogretmen_id : this.id
                },
                {headers}
                ).then(response => {
                    console.log("Success ========>", response);
                })
                .catch(error => {
                    console.log("Error ========>", error);
                })
     }
      
    },
     created(){
     
      this.getTeacher()
			.then(response => {
        this.Teacher = response.data;
       
        
      })
       this.getCourse()
			.then(response => {
          this.Course = response.data;
          
      })
       this.getTeacherCourse()
			.then(response => {
          this.TeacherCourse = response.data;
      })
   
      
    }
}
</script>