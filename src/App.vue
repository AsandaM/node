<template>

  <div class="wrapper">
    <HeaderComp />
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderComp from './components/Header.vue'

export default {
  components: {
    NavBar,
    HeaderComp
  } 
}

</script>

<style src="./assets/css/style.css">

</style>
