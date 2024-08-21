<template>
    <div class="container-fluid" id="admin">
      <div class="row">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h1 class="animate__animated animate__fadeInDown">Admin</h1>
            </div> 
       </div>
      </div>
    </div>

    <div class="container-fluid" id="admin-content">
      <div class="row">
        <h1 class="heading">Products Table</h1>
        <div class="adminButtons">
          <button class="admin-button" @click="sortByNameAsc">Sorting Alphabetically</button>
      
        <button type="button" class="admin-button" data-bs-toggle="modal" data-bs-target="#addProductModal">
          Add New Product
        </button>
        </div>
        <Modal />
        <div class="tableContainer">
              <table>
                <thead>
                 <th>Product Name</th>
                 <th>Category</th>
                 <th>Image</th>
                 <th>Amount</th>
                 <th>Action</th>
                </thead>
                <tbody v-if="fetchProducts">
                  <tr v-for="product in fetchProducts" :key="product.prodID">
                    <td>
                      {{ product.prodName }}
                    </td>
                    <td>
                      {{ product.category }}
                    </td>
                    <td>
                      <img :src="product.prodURL" :alt="product.prodName" loading="eager" class="img-fluid adminImages">
                    </td>
                    <td>
                      {{ product.amount }}
                    </td>
                    <td>
                      <div class="adminButtons">
                        <button class="table-button" data-bs-toggle="modal" data-bs-target="#editProductModal"><i class="bi bi-pen-fill"></i></button>
                        <button class="table-button" @click="deleteProduct(product.prodID)"><i class="bi bi-trash-fill"></i></button>
                      </div>
                    </td>
                  </tr>
                   
                </tbody>
             </table>
            </div>

            <div v-for="product in fetchProducts" :key="product.prodID">
              <EditModal :product='product'>
                <!-- <template #input>
                  <input type="text" class="form-control" id="productName" :value="product.prodName">
            
                </template> -->
              </EditModal>

            </div>

          
      </div>
    </div>

    <!-- <div class="container-fluid" id="admin-content">
      <div class="row">
        <h1 class="heading">Users Table</h1>
        <div class="adminButtons">
          <button class="admin-button" @click="sortByNameAsc">Sorting Alphabetically</button>
      
        <button type="button" class="admin-button" data-bs-toggle="modal" data-bs-target="#addProductModal">
          Add New Product
        </button>
        </div>
        <Modal />
        <div class="tableContainer">
              <table>
                <thead>
                 <th>Product Name</th>
                 <th>Category</th>
                 <th>Image</th>
                 <th>Amount</th>
                 <th>Action</th>
                </thead>
                <tbody v-if="fetchProducts">
                  <tr v-for="product in fetchProducts" :key="product.prodID">
                    <td>
                      {{ product.prodName }}
                    </td>
                    <td>
                      {{ product.category }}
                    </td>
                    <td>
                      <img :src="product.prodURL" :alt="product.prodName" loading="eager" class="img-fluid adminImages">
                    </td>
                    <td>
                      {{ product.amount }}
                    </td>
                    <td>
                      <div class="adminButtons">
                        <button class="table-button" data-bs-toggle="modal" data-bs-target="#editProductModal"><i class="bi bi-pen-fill"></i></button>
                        <button class="table-button" @click="deleteProduct(product.prodID)"><i class="bi bi-trash-fill"></i></button>
                      </div>
                    </td>
                  </tr>
                   
                </tbody>
             </table>
            </div>
            
      </div>
    </div> -->

  </template>

<script>
import Modal from '@/components/ModalComp.vue'
import EditModal from '@/components/EditModal.vue';

export default {
name: 'AdminView',
components: {
        Modal,
        EditModal
      },

      methods: {
          sortByNameAsc(){
            this.$store.state.products.sort((a, b)=>{
              return a.prodName.localeCompare(b.prodName)
            })
          },
          deleteProduct(id){
          this.$store.dispatch('deleteProduct', id)
          },
          
        },

      computed: {
        fetchProducts() {
      return this.$store.state.products
    } 
  },

  mounted() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
#admin{
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
  margin: 17rem auto 17rem;
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

.adminButtons{
    width: 65%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
}

.admin-button{
  background-color: var(--alternative);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  width: 16rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

/* Table Styling*/
th, td{
    border: 1px solid black;
    padding: 0.6rem 2rem;
    margin: 0;
}

table{
  width: 63.5%;
  margin: auto;
  margin-top: 2rem;
}

.adminImages{
    width: 30%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
}

.btnEdit{
    padding: 0.5rem 2.1rem;
    background-color: var(--alternative);
    color: var(--secondary);
    border: 1px solid var(--secondary);
    border-radius: 0.5rem;
}

.btnDelete{
    padding: 0.5rem 1.5rem;
    background-color: var(--alternative);
    color: var(--secondary);
    border: 1px solid var(--secondary);
    border-radius: 0.5rem;
}

#addProductForm #name_error,#category_error{
    display: none;
}

.heading{
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 2rem;
}

.adminButtons{
 margin: auto;
}

.table-button{
  background-color: var(--alternative);
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 1.5rem;
  font-size: 1rem;
} 



@media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .banner-content{
    width: 18rem;
    margin: 14rem auto 14rem;
  }

  .admin-button{
  width: 16rem;
  margin: auto;
}

.adminButtons{
  display: flex;
  justify-content: center;
  flex-direction: column; 
  gap: 1rem;
}

.adminImages{
    width: 6rem;
}

table{
  width: 64%;
  margin: auto;
  margin-top: 2rem;
}

th, td{
    border: 1px solid black;
    padding: 0.6rem 0.8rem;
    margin: 0;
}

thead{
  display: none;
}

.tableContainer table, tbody, th, td, tr {
    display: block;
}

.tableContainer table {
    margin-bottom: 5rem;
}

.tableContainer thead tr {
    display: none;
}

.tableContainer tr {
    margin-bottom: 15px;
}

.tableContainer td {
    position: relative;
    padding-left: 50%;
}

.tableContainer td:before {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    transform: translateY(-50%);
}

.tableContainer td:nth-of-type(1):before { content: "Product Name"; }
.tableContainer td:nth-of-type(2):before { content: "Category"; }
.tableContainer td:nth-of-type(3):before { content: "Image"; }
.tableContainer td:nth-of-type(4):before { content: "Amount"; }
.tableContainer td:nth-of-type(5):before { content: "Action"; }
.tableContainer .total-row td:before { content: ""; }
.tableContainer .total-row td:before { content: ""; }

}
</style>