<template>
   <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link to="/"><img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareLogo2.gif" alt="logo" loading="eager"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <router-link to="/"><img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareLogo2.gif" alt="logo" loading="eager"></router-link>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1">
                <li class="nav-item mt-2">
                  <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item dropdown mt-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Collection
                    </a>
                    <ul class="dropdown-menu">
                      <li><router-link to="/newproducts" class="dropdown-item">New</router-link></li>
                      <li><router-link to="/products" class="dropdown-item">Shop All</router-link></li>
                    </ul>
                  </li>
                  <li class="nav-item mt-2">
                    <router-link to="/about" class="nav-link" aria-current="page">Our Story</router-link>
                  </li>
                  <li class="nav-item mt-2">
                    <router-link to="/admin" class="nav-link" aria-current="page">Admin</router-link>
                  </li>
                  <li class="nav-item mt-2">
                    <router-link to="/contact" class="nav-link" aria-current="page">Contact</router-link>
                  </li>
              </ul>
              

              
            </div>
    
          </div>
        </div>
      </nav>
</template>

<script>

</script>

<style scoped>
img[alt='logo']{
    width: 15rem;
    object-fit: cover;
    object-position: center;
    transition: all .5s;
}

img[alt='logo']:hover{
  transform: scale(1.1);
}

.nav-link{
    color: black;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
}

.nav-link:hover{
    color: #5D7599; 
}

.nav-item{
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.navbar{
    transition: all 0.5s;
}

.nav-link i{
    font-size: 1.5rem;
}

:is(.dropdown-item:active){
    background-color: #5D7599;
}

@media (width < 999px)
{ 
  .navbar-nav{
    text-align: left;
    margin-left: 1rem;
  }

    img[alt='logo']{
      width: 12rem;
    }

    .nav-item{
      margin-right: 0rem;
      margin-left: 0rem;
    }
}
</style>
