<template>
   <div class="container">
        <div class="row  mt-5">
            <div class="col-md-4 offset-4 card card-primary p-3 border">
                <h3 class="text-center mb-3 mt-3">Sisteme Giriş</h3>
                <hr>
                <form >
                    <div class="form-group">
                        <label>Kullanıcı Adı</label>
                        <input v-model="user.ogrNo" type="text" class="form-control" placeholder="Öğrenci Numaranız...">
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
                name : null,
                discontinuity:null
              },
        error : true,
        Teacher : [],
        Student : [],
        Discontinuity : []
        
      }
    },
    methods : {
      auth(){
        /*
        this.Login.forEach(e => {
          if(this.user.kullaniciAdi == e.userName && this.user.password == e.password ){
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
        */
        this.Student.forEach(element => {
        if(element.ogrenci_no == this.user.ogrNo && element.sifre == this.user.password){
          this.user.name = element.adi_soyadi
          this.user.ogrNo = element.ogrenci_no
          this.user.password = element.sifre
          this.Discontinuity.forEach(d => {
            if(d.ogrenci_no == this.user.ogrNo){
              this.user.discontinuity = d.devam
            }
            this.user.discontinuity=5
          });
          this.$store.dispatch("addAuth",this.user)
          this.$router.push("/Student")
        }
         else{
            this.error = false
          }
      });
      }
      
     
    },
    created(){
     
      this.getStudent()
			.then(response => {
        this.Student = response.data;
       
      })
      this.getDiscontinuity()
			.then(response => {
        this.Discontinuity = response.data;
       console.log(this.Discontinuity)
      })
    }
}
</script>

<style scoped>
.card-primary{
  border: 3px solid  #007bff !important;
}
</style>
