<template>
    <div class="container">
       <h3>Öğretmen Sistemi</h3>
       <hr>
       
       {{vuexgetCourse}}
       <p v-for=" (data,key) in vuexgetAuth" :key="key" >Hoş Geldiniz Sn. {{data.name}}</p>
       <br>
       <button @click="$router.push('/CourseCreate')" class="btn btn-outline-info">Ders Oluştur</button>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Ders Kodu</th>
              <th>Ders Adı</th>
              <th>Devam Sınırı</th>
            </tr>
          </thead>
          <tbody v-for=" (value,key) in vuexgetCourse" :key="key" >
            <tr>
              <td>{{value.ders_kodu}}</td>
              <td>{{value.ders_adi}}</td>
              <td>{{value.devam_siniri}}</td>
           </tr>
          </tbody>
        </table>
       
    </div>
</template>
<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data() {
        return{
          Teacher:null,
          Course:null,
          TeacherCourse:null
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