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
        <div class="adminButtons">
          <button class="admin-button">Sorting Alphabetically</button>
      
        <button type="button" class="admin-button" data-bs-toggle="modal" data-bs-target="#addProductModal">
          Add New Product
        </button>
        </div>
        
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addProductModalLabel">Add New Product</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="addProductForm" name="addProductForm">
                        <div class="mb-3">
                          <label for="productName" class="form-label">Product Name</label>
                          <input type="text" class="form-control" id="productName" placeholder="Enter a product name">
                        </div>
                        <div class="mb-3">
                          <label for="Quantity" class="form-label">Quantity</label>
                          <input type="text" class="form-control" id="quantity" placeholder="Enter product quantity">
                        </div>
                        <div class="mb-3">
                          <label for="productAmount" class="form-label">Product Amount</label>
                          <input type="text" class="form-control" id="productAmount" placeholder="Enter your product amount">
                        </div>
                        <div class="mb-3">
                          <label for="productCategory" class="form-label">Product Category</label>
                          <input type="number" class="form-control" id="productCategory" placeholder="Enter the product category">
                        </div>
                        <div class="mb-3">
                          <label for="productImage" class="form-label">Product ProdUrl</label>
                          <input type="text" class="form-control" id="productImage" placeholder="Enter the product image url">
                        </div>
                        <div class="mb-3">
                          <label for="productDesc" class="form-label">Product Description</label>
                          <input type="text" class="form-control" id="productDesc" placeholder="Enter the product description">
                        </div> 
                      </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div class="spinnerDiv"></div>

        <div class="tableContainer">
              <table>
                <thead>
                 <th>Product Name</th>
                 <th>Category</th>
                 <th>Image</th>
                 <th>Amount</th>
                 <th>Action</th>
                </thead>
                <tbody data>
     
                </tbody>
             </table>
            </div>


      </div>
    </div>

    

  </template>


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

.close-button{
  background-color: var(--alternative);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.close-button:hover, .save-button:hover, .admin-button:hover{
  transition: 2s;
  background-color: var(--awesome);
}

.save-button{
  background-color: var(--alternative);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.form-label{
  display: flex;
}

.modal-footer{
  display: flex;
  justify-content: space-between;
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

.btnModal{
    padding: 0.5rem 2.1rem;
    background-color: var(--alternative);
    color: var(--secondary);
    border: 1px solid var(--secondary);
    border-radius: 0.5rem;
    width: 14vw;
    margin: auto;
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

.tableContainer table, thead, tbody, th, td, tr {
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
.tableContainer td:nth-of-type(4):before { content: "Material"; }
.tableContainer td:nth-of-type(5):before { content: "Amount"; }
.tableContainer td:nth-of-type(6):before { content: "Action"; }
.tableContainer .total-row td:before { content: ""; }
.tableContainer .total-row td:before { content: ""; }

.btnModal{
    width: 75vw;
    margin: auto;
}
}
</style>