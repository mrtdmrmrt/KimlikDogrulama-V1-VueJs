<template>
    <div class="container">
        <h3>Öğrenci Sistemi</h3>
     <table class="table table-hover">
    <thead>
      <tr>
        <th>Numarasi</th>
        <th>Adi</th>
        <th>Soyadi</th>
        <th>Devam</th>
      </tr>
    </thead>
    <tbody v-for=" (data,key) in vuexgetAuth" :key="key" >
      <tr>
        <td>{{data.ogrNo}}</td>
        <td >{{data.name}}</td>
        <td> {{data.surname}}</td>
        <td>
            <i v-if=" data.devam == '1'" class="fas fa-check-circle"></i>
            <i v-else class="fa fa-times-circle"></i>
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
            Student :[]
        }
    },
    computed : {
        vuexgetAuth(){
           return this.$store.getters.getAuth
           
        }
    },
    methods : {
        getir(){
            console.log(this.vuexgetAuth)
        }
    },
    created (){
        this.getStudent()
			.then(response => {
                this.Student = response.data;
                console.log(this.Student)
      })
    }

}
</script>