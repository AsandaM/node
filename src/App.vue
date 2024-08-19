<template>

  <div class="wrapper">
    <HeaderComp />
    <NavBar />
    <main>
      <router-view />
    </main>
    <FooterComp />
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderComp from './components/Header.vue'
import FooterComp from './components/Footer.vue'

export default {
  components: {
    NavBar,
    HeaderComp,
    FooterComp
  } 
}

</script>

<style src="./assets/css/style.css">

</style>
