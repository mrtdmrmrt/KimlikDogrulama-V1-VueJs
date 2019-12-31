<template>
   <div class="container">
        <div class="row  mt-5">
            <div class="col-md-4 offset-4 card card-grey p-3 border">
                <h3 class="text-center mb-3 mt-3">Sisteme Giris</h3>
                <hr>
                <button class="btn btn-outline-primary" @click="$router.push('/LoginStudent')">Öğrenci Girişi</button>
                <button class="btn btn-outline-success" @click="$router.push('/LoginTeacher')">Öğretmen Girişi</button>
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
       
      }
    },
    methods : {

    },
    created(){
    
    }
}
</script>

<style scoped>
.card-grey{
  border: 3px solid  grey !important;
}
.btn-outline-success{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
