<template>
  <div>
   <section class="row" id="home">
    <CarouselBanner/>
    <ShopNewComp />
    <homeContent/>
   </section>
 </div>  
</template>

<script>
import homeContent from '@/components/homeContent.vue';
import CarouselBanner from '@/components/CarouselBanner.vue';
import ShopNewComp from '@/components/ShopNewComp.vue';

export default {
  name: 'HomeView',

  components: {
    homeContent,
   CarouselBanner,
   ShopNewComp
  }
  
}

</script>
