<template>

    <div class="header">FREE shipping on orders over R600 SHOP NOW!</div>

</template>
    
<script>
    export default {
        name: "HeaderComp"    
    }   
</script>

<style scoped>
.header{
    width: 100%;
    background-color: var(--alternative);
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    color: var(--primary);
}

@media (width < 999px)
{ 
    .header{
        font-size: 0.8rem;
        font-weight: 600;
    }
}

</style>
