<template>
    <div class="container">
        <div class="row">
            <h2 class="heading">Product Details</h2>
        </div>
        <div class="row justify-content-center padding" v-if="product">
            <Card>
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="img-fluid cardImage" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                    <p class="lead">
                        {{ product.prodDescription }}
                    </p>
                    <p class="lead"><span class="fw-bold">Amount</span>: R{{ product.amount }}</p>
                </template>
            </Card>
        </div>
        <div v-else> 
            <Spinner/>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const product = computed(
    () => store.state.product
)
onMounted(() => {
    store.dispatch('fetchProduct', route.params.id)
}) 
</script>

<style scoped>
.heading{
      padding-top: 3rem;
      padding-bottom: 2rem;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: var(--primary);
    }

.padding{
    padding-bottom: 4rem;
    font-family: "Poppins", sans-serif;
    color: var(--primary);
}

</style>