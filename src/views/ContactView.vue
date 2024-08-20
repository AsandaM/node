<template>
    <div class="container-fluid" id="contact">
      <div class="row">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h3 class="animate__animated animate__fadeInDown">Get in Touch with Us</h3>
            <p class="animate__animated animate__fadeInUp">Whether you have questions about our products, need personalized recommendations, or just want to share your experience, we’d love to hear from you. Reach out to us today, and let’s start a conversation!</p>
            </div> 
       </div>
      </div>
    </div>
  </template>

<style scoped>
#contact{
  position: relative;
  z-index: 1;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner15.png");
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
  margin: 15rem auto 15rem;
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

@media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .banner-content{
    width: 18rem;
    margin: 6rem auto 6rem;
  }
}
</style>
