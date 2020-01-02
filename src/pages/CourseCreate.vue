<template>
    <div class="container">
        {{vuexgetAuth.id}}
        <div class="row">
            <input v-model="courseCode" type="text" class="form-control" placeholder="Dersin Kodunu Giriniz.">
        </div>
        <div class="row">
            <input v-model="courseName" type="text" class="form-control" placeholder="Dersin Adını Giriniz.">
        </div>
        <div class="row">
            <input v-model="absenceLimit" type="text" class="form-control" placeholder="Devam Sınırını Giriniz.">
        </div>
        <div class="row">
            <button @click="add" class="btn btn-success">Ders Oluştur</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return {
            courseCode:null,
            courseName:null,
            absenceLimit:null,
            id:null
            
        }
    },
    computed:{
      vuexgetAuth(){
        return this.$store.getters.getAuth
      }
    }, 
     methods : {
        add(){
            
            this.vuexgetAuth.forEach(element => {
                this.id = element.id             
            });
            console.log(this.courseCode ) 
            console.log(this.courseName)
            console.log(this.absenceLimit)
            console.log(this.id)
            if(this.courseCode !== "" && this.courseName !== "" && this.absenceLimit !== ""){
                console.log("add")
                /*
               axios({
                method: 'post',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    url: 'http://sisyshell.com/castdb/webservis.php?islem=ekle&tablo=ders',
                    data: { 
                        ders_kodu: this.courseCode,
                        ders_adi:this.courseName,
                        devam_siniri:this.absenceLimit
                        }
                    }).then(function (response) {
                console.log(response.data);
                }) .catch(function(error){
                    console.log(error);
                });
                axios({
                    method: 'post',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    url: 'http://sisyshell.com/castdb/webservis.php?islem=ekle&tablo=ogretmen_ders',
                    data: { 
                        ders_kodu: this.courseCode,
                        ogretmen_id : this.id
                        }
                    }).then(function (response) {
                    console.log(response.data);
                    })
                     .catch(function(error){
                    console.log(error);
                });
                */
               /*
                
                axios.post("http://sisyshell.com/castdb/webservis.php?islem=ekle&tablo=ders",{ 
                    ders_kodu: this.courseCode,
                    ders_adi:this.courseName,
                    devam_siniri:this.absenceLimit
                    
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
                axios.post("http://sisyshell.com/castdb/webservis.php?islem=ekle&tablo=ogretmen_ders",{ 
                    ders_kodu: this.courseCode,
                    ogretmen_id : this.id
                    
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
                */
               const headers = {
                    'Content-Type': 'text/plain'
                };
                //ogretmen_ders tablosuna veri ekleme
                axios.post(
                    'http://sisyshell.com/castdb/webservis.php?islem=ekle&tablo=ogretmen_ders&ders_kodu='+this.courseCode+'&ogretmen_id='+this.id,
                    {
                        ders_kodu: this.courseCode,
                        ogretmen_id : this.id
                    },
                    {headers}
                    ).then(response => {
                        console.log("Success ========>", response);
                    })
                    .catch(error => {
                        console.log("Error ========>", error);
                    })
                //ders tablosuna veri ekleme
                axios.post(
                    'http://sisyshell.com/castdb/webservis.php?islem=ekle&tablo=ders&ders_kodu='+this.courseCode+'&ders_adi='+this.courseName+'&devam_siniri='+this.absenceLimit,
                    {
                        ders_kodu: this.courseCode,
                        ders_adi:this.courseName,
                        devam_siniri:this.absenceLimit
                    },
                    {headers}
                    ).then(response => {
                        console.log("Success ========>", response);
                    })
                    .catch(error => {
                        console.log("Error ========>", error);
                    })
            }
        }
     }
}
</script>

<style scoped>
.row{
    width:500px ;
    margin-top: 10px;
}
</style>