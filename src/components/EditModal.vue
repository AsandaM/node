<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" :id="'editProductModal'+product.prodID" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="editProductModalLabel">Edit Product</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="editProductForm" name="editProductForm">
                        <div class="mb-3">
                          <label for="productName" class="form-label">Product Name</label>
                          <input type="text" class="form-control" id="productName" v-model="prodName">
                        </div>
                        <div class="mb-3">
                          <label for="Quantity" class="form-label">Quantity</label>
                          <input type="text" class="form-control" id="productName" v-model="quantity">
                        </div>
                        <div class="mb-3">
                          <label for="productAmount" class="form-label">Product Amount</label>
                          <input type="text" class="form-control" id="productName" v-model="amount">
                        </div>
                        <div class="mb-3">
                          <label for="productCategory" class="form-label">Product Category</label>
                          <input type="text" class="form-control" id="productName" v-model="category">
                        </div>
                        <div class="mb-3">
                          <label for="productImage" class="form-label">Product ProdUrl</label>
                          <input type="text" class="form-control" id="productName" v-model="prodURL">
                        </div>
                        <div class="mb-3">
                          <label for="productDesc" class="form-label">Product Description</label>
                          <input type="text" class="form-control" id="productName" v-model="prodDescription">
                        </div> 
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button" @click="editProducts(product.prodID)">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
name: 'EditModal',
props:['product'],

data() {
  return {
    
      prodName : this.product.prodName,
      quantity : this.product.quantity,
      amount : this.product.amount,
      category : this.product.category,
      prodURL : this.product.prodURL,
      prodDescription : this.product.prodDescription
    }
  
},

methods: {
    editProducts(id) {
      console.log('hehe'+id);

          this.$store.dispatch('editProducts',{id:id, info:this.$data})
        },
  
},

computed: {
        fetchProducts() {
      return this.$store.state.product
    } 
  },

  // mounted() {
  //   this.$store.dispatch('fetchProduct')
  // }

}
</script>

<style>
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
</style>