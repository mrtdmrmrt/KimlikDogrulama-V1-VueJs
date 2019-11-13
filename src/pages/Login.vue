<template>
   <div class="container">
        <div class="row  mt-5">
            <div class="col-md-4 offset-4 card card-primary p-3 border">
                <h3 class="text-center mb-3 mt-3">Sisteme Giris</h3>
                <hr>
                <form >
                    <div class="form-group">
                        <label>Öğrenci Numaranızı Girin</label>
                        <input v-model="user.ogrNo" type="text" class="form-control" placeholder="Öğrenci Numarası...">
                    </div>
                    <div class="form-group">
                        <label>Şifre</label>
                        <input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz...">
                    </div>
                    <div class="button-container d-flex  flex-column align-items-center">
                        <button type="submit" @click="auth" class="btn btn-outline-primary mb-2">Giriş</button>
                        <!--<router-link type="submit" class="btn btn-outline-primary" :to="{ name: 'table', params: { floorId: floor.Id }}">Giriş</router-link>-->
                    </div>
                </form>
                <div class="alert alert-danger " :class="{'d-none' : error}" role="alert">
                  Hatalı Öğrenci Numarası veya Şifre !!!
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
                ogrNo: null,
                password: null,
                studentID : null,
                name : null,
                surname : null,
                devam : null
              },
        error : true,
        Login : [],
        Student : []
        
      }
    },
    methods : {
      auth(){
        this.Login.forEach(e => {
          if(this.user.ogrNo == e.userName && this.user.password == e.password ){
            this.Student.forEach(s => {
              if(s.id == e.studentID){
                this.user.name = s.name
                this.user.surname = s.surname
                this.user.devam = s.devam
                this.user.studentID = e.studentID
                this.$store.dispatch("addAuth",this.user)
              }
            });
            if(e.status == "1"){
                this.$router.push("/Teacher")
              }
              else{
                this.$router.push("/Student")
              }
          }
            
          else{
            this.error = false
          }
        });
      }
    },
    created(){
      this.getLogin()
			.then(response => {
        this.Login = response.data;
        console.log(this.Login)
      })
      this.getStudent()
			.then(response => {
        this.Student = response.data;
       
      })
      
    }
}
</script>

<style scoped>
.card-primary{
  border: 3px solid  #007bff !important;
}
</style>
