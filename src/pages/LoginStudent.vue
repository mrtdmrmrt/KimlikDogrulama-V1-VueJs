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
                discontinuity:null,
                discontinuityCount:null,
                discontinuityLimit:null

              },
              userCourse :[],
              userGetCourse:[],
        error : true,
        Teacher : [],
        Student : [],
        Discontinuity : [],
        Course : [],
        count:0
        
      }
    },
    methods : {
      auth(){
         /*
       this.Student.forEach(element => {
              if(element.ogrenci_no == this.user.ogrNo && element.sifre == this.user.password){
                this.user.name = element.adi_soyadi
                this.user.ogrNo = element.ogrenci_no
                this.user.password = element.sifre
                    this.Discontinuity.forEach(d=> {
                      console.log('Donguye girdi')
                    if(d.ogrenci_no == this.user.ogrNo){
                      this.user.discontinuity = d.devam
                            this.Course.forEach(c => {
                              console.log('Courseye girdi')
                                if(c.ders_kodu == d.ders_kodu){
                                  console.log('ders_kodu')
                                    this.userCourse = c
                                    this.user.discontinuityCount = d.devam.count()
                                    this.$store.dispatch("addCourse",this.userCourse)
                                    
                                }
                                
                          });
                      }
                  });
                
                  
                  this.$store.dispatch("addAuth",this.user)
                  this.$router.push("/Student")
                    
                }
                else{
                    this.error = false
                }
          });
         */
        this.Student.forEach(element => {
          console.log('Donguye girdi')
        if(element.ogrenci_no == this.user.ogrNo && element.sifre == this.user.password){
          this.user.name = element.adi_soyadi
          this.user.ogrNo = element.ogrenci_no
          this.user.password = element.sifre
          this.Discontinuity.forEach(d => {
           this.Course.forEach(c => {
             if(d.ogrenci_no == this.user.ogrNo){
                 this.user.discontinuity = d.devam
                if(c.ders_kodu == d.ders_kodu ){
                  this.userCourse = c
                  this.count++;
                  this.user.discontinuityCount = this.count
                  this.$store.dispatch("addCourse",this.userCourse)
              }
             }
              
            });
          });
         
          
          this.$store.dispatch("addAuth",this.user)
          this.$router.push("/Student")
        }
         else{
            this.error = false
          }
      })
       
      }
      
     
    },
    created(){
     this.getStudent()
			.then(response => {
        this.Student = response.data;
        console.log(this.Student)
      })

      this.getCourse()
			.then(response => {
        this.Course = response.data;
        console.log(this.Course)
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
