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
            </tr>
          </thead>
          <tbody v-for=" (value,key) in vuexgetAuth" :key="key" >
            <tr>
              <td>{{value.courseCode}}</td>
              <td>{{value.courseName}}</td>
              <td>{{value.absenceLimit}}</td>
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
        return{}
    },
    computed:{
      vuexgetAuth(){
        return this.$store.getters.getAuth
      }
    }
}
</script>