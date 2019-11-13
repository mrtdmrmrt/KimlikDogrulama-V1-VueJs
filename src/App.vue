<template>
  <div class="container">
    <Header />
    <router-view ></router-view>
  </div>
</template>
<script>
  import {dataMixin} from "./dataMixin"
  import Header from "./components/Header"
  export default {
    mixins : [dataMixin],
    data () {
      return{
        Teacher : []
      }
    },
    components:{
      Header
    },
    methods :{
      
    },
    created(){
      this.getTeacher()
			.then(response => {
        
        this.Teacher = response.data;
      })
    }
  }

</script>
