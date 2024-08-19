<template>
    
    <div class="container-fluid">
    
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators d-none d-md-block">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <div class="overlay"></div>
            <div class="carousel-caption">
              <h1 class="animate__animated animate__fadeInDown">Welcome to Skin Oasis</h1>
              <p class="animate__animated animate__fadeInUp">Discover the perfect blend of nature and science to nourish your skin. Dive into our oasis and let your skin thrive.</p>
              <router-link to="/products"><button class="hb-button animate__animated animate__fadeInUp">Explore Now</button></router-link>
              <div class="hb-bannerLinks animate__animated animate__fadeInUp">
                <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
              <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a class="lnk text-white" href="https://github.com/LeahBasson" target="_blank"><i class="bi bi-github"></i></a>
              </div>
            </div>
            <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner19.png" alt="slideImage" loading="eager">
          </div>
          <div class="carousel-item">
            <div class="overlay"></div>
            <div class="carousel-caption">
              <h1 class="animate__animated animate__fadeInDown">Experience the Ultimate Hydration and Glow</h1>
              <p class="animate__animated animate__fadeInUp">Discover our range of skin masks designed for every skin type.</p>
              <router-link to="/products"><button class="hb-button animate__animated animate__fadeInUp">Shop Now</button></router-link>
              <div class="hb-bannerLinks animate__animated animate__fadeInUp">
                <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
              <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a class="lnk text-white" href="https://github.com/LeahBasson" target="_blank"><i class="bi bi-github"></i></a>
              </div>
            </div>
            <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner3.jpg" alt="slideImage" loading="eager">
          </div>
          
          <div class="carousel-item">
            <div class="overlay"></div>
            <div class="carousel-caption">
              <h1 class="animate__animated animate__fadeInDown">Nourish Your Skin Naturally</h1>
              <p class="animate__animated animate__fadeInUp">Say goodbye to dryness and hello to lasting hydration. </p>
              <router-link to="/products"><button class="hb-button animate__animated animate__fadeInUp">Shop Now</button></router-link>
              <div class="hb-bannerLinks animate__animated animate__fadeInUp">
                <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
              <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a class="lnk text-white" href="https://github.com/LeahBasson" target="_blank"><i class="bi bi-github"></i></a>
              </div>
            </div>
            <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareBanner22.png" alt="slideImage" loading="eager">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 

      <div class="home-shopNew">
    <h1 class="pt-3 heading">Shop our New</h1>
    <div class="cardsDiv pt-3 pb-3">

      <Card>
            <template #cardHeader>
              <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/BlackheadClearingDeepClarifying.jpg" alt="cardImage" loading="eager">
            </template>

            <template #cardBody>
                <div class="card-title">Clearskin Blackhead Clearing Deep Clarifying Mask</div>
                <p class="card-text">R92,00</p>
                <button class="card-button">View</button>
            </template>
      </Card>
    
    </div>

    <div class="btn-shopNew">View More</div>
    
  </div>
  <div class="home-category">
    <h1 class="pt-5 heading">Shop by Category</h1>
    <div class="categoryCircles pt-3">
      <div class="circle">
    <div class="circle-overlay">
      <a href="#Dry"><p>Toner</p></a>
    </div>
    
    <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/toner.png" alt="cardImage" loading="eager">
    </div>

    <div class="circle">
    <div class="circle-overlay">
      <a href="#Dry"><p>Masks</p></a>
    </div>
    
    <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/oskin.png" alt="cardImage" loading="eager">
    </div>

    <div class="circle">
    <div class="circle-overlay">
      <a href="#Dry"><p>Moisturiser</p></a>
    </div>
    
    <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/combinationSkin2.png" alt="cardImage" loading="eager">
    </div>

    </div>
  </div>
    
  <div class="home-blog ">
    
    <div id="carouselExample" class="carousel slide pt-5" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="overlay"></div>
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/wrinkleSkin.png" alt="slideImage" loading="eager">
      <div class="carousel-caption2">
        <h1 class="animate__animated animate__fadeInUp">Reveal Your Youthful Glow: Say Goodbye to Wrinkles</h1>
        <p class="animate__animated animate__fadeInUp">Fine lines and wrinkles don’t stand a chance with our advanced skincare solutions. Packed with powerful ingredients, our products are designed to rejuvenate and nourish your skin, leaving it smooth, firm, and radiant.</p>
        <button class="hb-button animate__animated animate__fadeInUp">Discover</button>
      </div>
    </div>
    <div class="carousel-item">
      <div class="overlay"></div>
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/sensitiveSkin.png" alt="slideImage" loading="eager">
      <div class="carousel-caption2">
        <h1 class="animate__animated animate__fadeInUp">Gentle Care for Sensitive Skin</h1>
        <p class="animate__animated animate__fadeInUp">Discover our specially formulated products designed to soothe and protect delicate skin.Caring for sensitive skin requires the right balance of gentle yet effective ingredients. </p>
        <button class="hb-button animate__animated animate__fadeInUp">Discover</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  
  </div>

  <div class="home-ourStory">
    <h1 class="pt-4 heading">Sustainably Sourced</h1>
    <div class="ourStoryCards">
      <div class="card text-bg-dark">
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/peta-approved.jpg" alt="Rabbit" loading="eager">
  <div class="card-img-overlay">
    <h5 class="card-title pb-3">PETA-Approved</h5>
    <button class="card-button">Read More</button>
  </div>
</div>
<div class="card text-bg-dark">
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/planet.jpg" alt="Forest" loading="eager">
  <div class="card-img-overlay">
    <h5 class="card-title pb-3">Protect Our Planet</h5>
    <button class="card-button">Read More</button>
  </div>
</div>
<div class="card text-bg-dark">
      <img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/recycle4.png" alt="Products" loading="eager">
  <div class="card-img-overlay">
    <h5 class="card-title pb-3">Reuse , Reduce , Recycle</h5>
    <button class="card-button">Read More</button>
  </div>
</div>
    </div>
    
  </div>

    </div>     
    </template>
    
    <script>
  import Card from './Card.vue'

export default {
    name: "LandingSection",
    components: {
      Card
}
}
    </script>
    
    <style>
   
    .carousel-inner{
        width: 100%;
    }
    
    img[alt='slideImage']{
        width: 100%;
        height: 82vh;
    }
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6); 
        z-index: 1;
    }

    .card-img-overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); 
        z-index: 1;
    }
    
    .hb-content{
        position: absolute;
        top: 10rem;
        left: 28rem;
        width: 40rem;
        z-index: 1;
    }
    
    .carousel-caption{
      z-index: 1;
      position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 40rem;
    }
    
    .carousel-caption h1{
        color: var(--secondary);
        font-size: 2.6rem;
        text-align: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
    }
    
    .carousel-caption p{
        color: var(--secondary);
        text-align: center;
        font-size: 1.2rem;
        font-family: "Montserrat", sans-serif;
    }
    
    .hb-button{
        padding: 0.5rem 2rem;
        background-color: var(--alternative);
        border: 1px solid var(--primary);
        border-radius: 0.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        margin-top: 1rem;
    }
    
    .hb-button:hover{
        transition: 2s;
        background-color: var(--awesome);
    }
    
    .hb-bannerLinks{
       display: flex;
       justify-content: space-between;
       width: 6rem;
       margin:auto;
       margin-top: 1.3rem;
       font-size: 1.3rem;
    }
    
    .home-shopNew{
      width: 100%;
    }
    
    .heading{
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: var(--primary);
    }
    
    .cardsDiv{
      display: flex;
      justify-content: center;
      gap: 3.5rem;
    }
    
    .cardsDiv .card-title{
      font-family: "Poppins", sans-serif;
      color: var(--primary);
      font-weight: 600;
    }
    
    .card-text{
      font-family: "Poppins", sans-serif;
      color: var(--primary);
      font-weight: bold;
      font-size: 1.2rem;
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
    
    .btn-shopNew{
      margin: auto;
      padding: 0.5rem 1rem;
      width: 13rem;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
      background-color: var(--alternative);
      color: var(--primary);
      font-weight: bold;
      font-family: "Montserrat", sans-serif;
      margin-top: 0.5rem;
      cursor: pointer;
    }

    .btn-shopNew:hover{
        transition: 2s;
        background-color: var(--awesome);
    }
    
    .categoryCircles{
      display: flex;
      justify-content: center;
      gap: 3.5rem;
    }
    
    .circle {
        position: relative;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
        width: 18rem; /* Adjust the size as needed */
        border: 2px solid var(--alternative);
    }
    
    .circle img {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .circle-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* Customize the overlay color and opacity */
        z-index: 1;
        border-radius: 50%;
    }
    
    .circle-overlay p{
      z-index: 2;
      color: var(--secondary);
      margin: 8rem auto 2rem;
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      font-size: 1.5rem;
    }
    
    .circle-overlay a{
      text-decoration: none;
    }

    .carousel-caption2{
  z-index: 1;
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 60rem;
    text-align: left;
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
}

.carousel-caption2 p{
  font-size: 1.2rem;
  font-weight: 300;
}

.home-blog .carousel-item{
  cursor: pointer;
}

.card{
  width: 18rem;
  border-radius: 0%;
  border: 2px solid var(--alternative);
}

.ourStoryCards{
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  gap: 3.5rem;
}

.ourStoryCards .card-title{
  color: var(--secondary);
  margin-top: 12rem;
  font-weight: 600;
}

.ourStoryCards .card-button{
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
      background-color: var(--alternative);
      color: var(--primary);
      font-weight: bold;
      font-family: "Poppins", sans-serif;
    }

    .ourStoryCards .card-button:hover{
        transition: 2s;
        background-color: var(--awesome);
    }

    @media (width < 999px)
    {
        .heading{
            font-size: 1.3rem;
        }

        img[alt='slideImage']{
        width: 100%;
        height: 40vh;
      }
    
      .carousel-caption{
        width: 14rem;
      }
    
      .carousel-caption h1{
        font-size: 1.1rem;
      }
    
      .carousel-caption p{
        font-size: 0.9rem;
      }
    
    .hb-button{
      padding: 0.2rem 1rem; 
      margin-top: -0.5rem;
      font-size: 0.8rem;
    }
    .hb-bannerLinks{
      font-size: 0.9rem;
      margin-top: 0.6rem;
    }
    
    .cardsDiv{
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 3.5rem;
    }
    
    .categoryCircles{
      display: flex;
      justify-content: center;
      gap: 3.5rem;
      flex-direction: column;
    }
    
    .circle img{
      width: 13rem;
    }
    .circle{
      margin: auto;
      width: 13rem;
    }
    .circle-overlay p{
      margin: 5rem auto 2rem;
    }

    .carousel-caption2{
  z-index: 1;
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 14rem;
    text-align: center;
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
}

.carousel-caption2 p{
  font-size: 0.8rem;
  font-weight: 300;
}

.carousel-caption2 h1{
  font-size: 0.9rem;
}

.card{
  width: 13rem;
}

.ourStoryCards .card-title{
    margin-top: 9rem;
}

.ourStoryCards{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
    }
    
    </style>