<template>
    <div class="container-fluid" id="newProducts">
      <div class="row">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h3 class="animate__animated animate__fadeInDown">Radiant Skin Starts Here</h3>
            <p class="animate__animated animate__fadeInUp">Discover our latest skincare innovations designed to bring out your natural glow. From hydration to anti-aging, our products are crafted with care and backed by science to deliver real results. Elevate your skincare routine with us today!</p>
            </div> 
       </div>
      </div>
    </div>

   
  <div class="container-fluid" id="newDisplay">
    <div class="product-display">
      <h1 class="heading">New Products</h1>
      <div class="product-interaction">
        <form class="d-flex mt-3" role="search">
          <input class="form-control" type="text" placeholder="Search by product name" id="searchInput" v-model="searchQuery">
        </form>
        <div class="buttons">
          <button class="product-button" @click="sortProducts"> {{ sortButtonText }}</button>
          <button class="product-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filter</button>

          <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Filter By Category</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <p @click="filterByCategory('All')">All</p>
              <p @click="filterByCategory('Toner')">Toner</p>
              <p @click="filterByCategory('Mask')">Mask</p>
              <p @click="filterByCategory('Moisturiser')">Moisturiser</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="loading">
        <Spinner />
      </div>

      <div class="cardsDiv pt-3 pb-3" v-else>
        <p class="not-found-message" v-if="isProductNotFound">Product not found</p>
        <Card v-else v-for="product in filteredProducts" :key="product.prodID">
          <template #cardHeader>
            <img :src="product.prodURL" :alt="product.prodName" loading="eager" class="img-fluid">
          </template>

          <template #cardBody>
            <div class="card-title">{{ product.prodName }}</div>
            <p class="card-text">{{ product.category }}</p>
            <p class="card-title">R {{ product.amount }}</p>
            <router-link :to="{name: 'productdetails', params: {id: product.prodID}}"><button class="card-button">View</button></router-link>
          </template>
        </Card>
      </div>
    </div>
  </div>

</template>

<script>
import Spinner from '@/components/Spinner.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'NewProducts',
  components: {
    Card,
    Spinner
  },

  data() {
    return {
      selectedCategory: 'All',
      searchQuery: '',  
      loading: true,
      isToggle: false,
      sortButtonText: 'Sort Price'
    }
  },

  methods: {
    //Filter by category
    filterByCategory(category) {
      this.selectedCategory = category;
    },
    //Sort Price
    sortProducts() {
      if (!this.$store.state.recentProducts) {
        alert('Please try again later');
        return;
      }
      if (this.sortButtonText === 'Sort Price') {
        this.$store.state.recentProducts.sort((a, b) => a.amount - b.amount);
        this.sortButtonText = 'PRICE: LOW TO HIGH';
      } else if (this.sortButtonText === 'PRICE: LOW TO HIGH') {
        this.$store.state.recentProducts.sort((a, b) => b.amount - a.amount);
        this.sortButtonText = 'PRICE: HIGH TO LOW';
      } else {
        this.$store.state.recentProducts.sort((a, b) => a.amount - b.amount);
        this.sortButtonText = 'PRICE: LOW TO HIGH';
      }
      this.isToggle = !this.isToggle;
    }
  },

  computed: {
    filteredProducts() {
      let products = this.$store.state.recentProducts;

      if (this.selectedCategory !== 'All') {
        products = products.filter(
          product => product.category === this.selectedCategory
        );
      }

      if (this.searchQuery) {
        products = products.filter(
          product => product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return products;
    },

    isProductNotFound() {
      return this.filteredProducts.length === 0 && this.searchQuery !== '';
    }
  },

  mounted() {
    this.$store.dispatch('recentProducts').then(() => {
      this.loading = false; 
    });
  }
};
</script>


<style scoped>
.not-found-message{
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  font-size: 1.3rem;
}

#newProducts{
  position: relative;
  z-index: 1;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/skincareWebsite/banner1.png");
    background-size: cover;
    background-position: center; 
    position: relative;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); 
    z-index: 1;
}

.banner-content{
  position: relative;
  z-index: 2;
  width: 44rem;
  margin: 14rem auto 14rem;
  font-family: "Poppins", sans-serif;
  color: var(--secondary);
}

.banner-content h3 {
    font-weight: 600;
    z-index: 2;
} 

.banner-content p{
    font-weight: 400;
    font-size: 1.2rem;
}

.product-display{
  width: 65%;
  margin: auto;
}

.product-display .heading{
  color: var(--primary);
  padding-top: 3rem;
  font-weight: 600;
}

.product-display .form-control{
  width: 20rem;
  border: 1px solid var(--alternative);
  font-family: "Poppins", sans-serif;
}

.product-display .form-control::placeholder{
  color: var(--primary);
}

.product-interaction{
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  padding-top: 2rem;
}

.product-button{
  background-color: var(--alternative);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  width: 14rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
}

.product-button:hover{
  transition: 2s;
  background-color: var(--awesome);
}

.product-display .offcanvas-body{
  display: flex;
  text-align: left;
  flex-direction: column;
  cursor: pointer;
}

.cardsDiv{
      display: flex;
      justify-content: center;
      gap: 3.5rem;
      flex-wrap: wrap;
    }
    
    .cardsDiv .card-title{
      font-family: "Poppins", sans-serif;
      color: var(--primary);
      font-weight: 600;
    }

    .cardsDiv .card-button{
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
      background-color: var(--alternative);
      color: var(--primary);
      font-weight: bold;
      font-family: "Poppins", sans-serif;
    }

    .cardsDiv .card-button:hover{
        transition: 2s;
        background-color: var(--awesome);
    }

    .heading{
      padding-top: 3rem;
      padding-bottom: 2rem;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: var(--primary);
    }

@media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .banner-content{
    width: 18rem;
    margin: 6rem auto 6rem;
  }

  .product-interaction{
  display: flex;
  justify-content: center;
  flex-direction: column; 
  gap: 1rem;
}

.product-display .form-control{
  width: 16rem;
  margin: auto;
}

.product-button{
  width: 16rem;
  margin: auto;
}

.buttons{
  display: flex;
  justify-content: center;
  flex-direction: column; 
  gap: 1rem;
}

.heading{
    font-size: 1.8rem;
    padding-bottom: 0rem;
}

}


</style>

