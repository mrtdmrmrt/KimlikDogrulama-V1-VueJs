<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
    <a class="navbar-brand" href="#">Ders Projesi</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        
          <router-link class="nav-item" tag="li" to="/">
            <a class="nav-link" href="#">Anasayfa</a>
          </router-link>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item">
          <a @click="$router.push('/Login')" class="nav-link" >Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.nav-link{
  cursor: pointer;
}
</style>>