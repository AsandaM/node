<template>

    <div class="Footer mt-5">
        Skin Oasis &copy; {{ cYear }}
    </div>
    
</template>

<script>
  export default {
      name: "FooterComp",
      data(){
          return{
              cYear: new Date().getUTCFullYear()
          }
      }
  }
  </script>

  <style>
  .Footer{
    background-color: var(--alternative);
  }
</style>