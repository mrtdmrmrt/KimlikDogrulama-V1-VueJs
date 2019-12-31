<template>
    <div class="container">
        <h3>Öğrenci Sistemi</h3>
     <table class="table table-hover">
    <thead>
      <tr>
        <th>Numarası</th>
        <th>Adı Soyadı</th>
         <th>Devamsızlık Gün</th>
        <th>Devam</th>
      </tr>
    </thead>
    <tbody v-for=" (data,key) in vuexgetAuth" :key="key" >
      <tr>
        <td>{{data.ogrNo}}</td>
        <td >{{data.name}}</td>
         <td >{{data.discontinuity}}</td>
        <td>
          <i v-if=" data.discontinuity >= '4'" class="fa fa-times-circle"></i>
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
           
        }
    },
    methods : {
        
    },
    created (){
    
    }

}
</script>