<template>
    <div class="container-fluid" id="newProducts">
      <div class="row">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h3>Radiant Skin Starts Here</h3>
            <p>Discover our latest skincare innovations designed to bring out your natural glow. From hydration to anti-aging, our products are crafted with care and backed by science to deliver real results. Elevate your skincare routine with us today!</p>
            </div> 
       </div>
      </div>
    </div>

    <div class="container-fluid" id="newDisplay">
      <div class="product-display">
        <h1 class="heading">New Products</h1>
        
      </div>
    </div>
</template>

<script>

export default {
  name: 'NewProducts'
}
</script>

<style>
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

.product-display .heading{
  color: var(--primary);
  padding-top: 3rem;
  font-weight: 600;
}

@media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .banner-content{
    width: 18rem;
    margin: 3rem auto 6rem;
    margin: 6rem auto 6rem;
  }
}


</style>

