<template>
  <div>
   <section class="row" id="home">
    <LandingSection/>
   </section>
 </div>  
</template>

<script>
import LandingSection from '@/components/LandingSection.vue';

export default {
  name: 'HomeView',

  components: {
   LandingSection
  }
  
}

</script>
