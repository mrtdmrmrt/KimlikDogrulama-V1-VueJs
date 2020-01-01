<template>
   <div class="container">
        <div class="row  mt-5">
            <div class="col-md-4 offset-4 card card-success p-3 border">
                <h3 class="text-center mb-3 mt-3">Sisteme Giriş</h3>
                <hr>
                <form >
                    <div class="form-group">
                        <label>Kullanıcı Adı</label>
                        <input v-model="user.userName" type="text" class="form-control" placeholder="Kullanıcı Adı...">
                    </div>
                    <div class="form-group">
                        <label>Şifre</label>
                        <input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz...">
                    </div>
                    <div class="button-container d-flex  flex-column align-items-center">
                        <button type="submit" @click="auth" class="btn btn-outline-success mb-2">Giriş</button>
                        <!--<router-link type="submit" class="btn btn-outline-primary" :to="{ name: 'table', params: { floorId: floor.Id }}">Giriş</router-link>-->
                    </div>
                </form>
                <div class="alert alert-danger " :class="{'d-none' : error}" role="alert">
                  Hatalı Kuallanıcı Adı veya Şifre !!!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {dataMixin} from "../dataMixin"
export default {
  mixins : [dataMixin],
    data(){
      return {
        user: {
                id:null,
                //courseCode:null,
                //courseName:null,
                //absenceLimit:null,
                userName: null,
                password: null,
                name : null,
              },
        userCourse:[],
        

        error : true,
        Teacher : [],
        Course:[],
        TeacherCourse: []
        
      }
    },
    methods : {
      auth(){
          this.Teacher.forEach(element => {
              if(element.kullanici_adi == this.user.userName && element.sifre == this.user.password){
                this.user.name = element.adi_soyadi
                this.user.userName = element.kullanici_adi
                this.user.password = element.sifre
                    this.TeacherCourse.forEach(tc => {
                        if(tc.ogretmen_id == element.id){
                         this.user.id = tc.ogretmen_id
                            this.Course.forEach(c => {
                                if(c.ders_kodu == tc.ders_kodu){
                                    this.userCourse = c
                                    this.$store.dispatch("addCourse",this.userCourse)
                                    
                                }
                                
                          });
                            
                    }
                  });
                  this.$store.dispatch("addAuth",this.user)
                  this.$router.push("/Teacher")
                    
                }
                else{
                    this.error = false
                }
          });
          
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

<style scoped>
.card-success{
  border: 3px solid  #28a745 !important;
}
</style>
