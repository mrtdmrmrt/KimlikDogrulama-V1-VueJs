<template>
    <div class="container">
        <h3>Öğrenci Sistemi</h3>
     <table class="table table-hover">
    <thead>
      <tr>
        
        <th>Ders Kodu</th>
        <th>Ders Adı</th>
        <th>Devam Sınırı</th>
        <th>Geldi/Gelmedi</th>
      </tr>
    </thead>
    <tbody v-for=" (data,key) in vuexgetCourse" :key="key" >
      <tr>
        <td>{{data.ders_kodu}}</td>
        <td>{{data.ders_adi}}</td>
        <td >{{data.devam_siniri}}</td>
         
        <td>
          <i v-if=" data.discontinuityCout >= '4'" class="fa fa-times-circle"></i>
          <i v-else class="fas fa-check-circle"></i>
           
        </td>
        
      </tr>
    </tbody>
  </table>
   
  </div>
</template>
<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return {
            Discontinuity:[]
        }
    },
    computed : {
        vuexgetAuth(){
           return this.$store.getters.getAuth
           
        },
        vuexgetCourse(){
        return this.$store.getters.getCourse
      }
    },
    methods : {
        
    },
    created (){
      console.log(this.vuexgetAuth)
    }

}
</script>