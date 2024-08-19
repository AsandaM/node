<template>
   <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link to="/"><img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareLogo2.gif" alt="logo" loading="eager"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareLogo2.gif" alt="logo" loading="eager"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item mt-2">
                  <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item dropdown mt-2">
                    <router-link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Collection
                    </router-link>
                    <ul class="dropdown-menu">
                      <li><router-link to="/newproducts" class="dropdown-item" href="#new">New</router-link></li>
                      <li><router-link to="/products" class="dropdown-item" href="#all">Shop All</router-link></li>
                    </ul>
                  </li>
                  <li class="nav-item mt-2">
                    <a class="nav-link" aria-current="page" href="#ourStory">Our Story</a>
                  </li>
                  <li class="nav-item mt-2">
                    <a class="nav-link" aria-current="page" href="#admin">Admin</a>
                  </li>
                  <li class="nav-item mt-2">
                    <a class="nav-link" aria-current="page" href="#contact">Contact</a>
                  </li>
              </ul>
              

              <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#account"><i class="bi bi-person"></i></a>
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

</style>
