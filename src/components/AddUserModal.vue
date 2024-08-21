<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addUserModalLabel">Add New User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="addUserForm" name="addUserForm">
                        <div class="mb-3">
                          <label for="firstName" class="form-label">Firstname</label>
                          <input type="text" class="form-control" id="firstName" placeholder="Enter user firstname" v-model="firstName">
                        </div>
                        <div class="mb-3">
                          <label for="lastName" class="form-label">Lastname</label>
                          <input type="text" class="form-control" id="lastname" placeholder="Enter user lastname" v-model="lastName">
                        </div>
                        <div class="mb-3">
                          <label for="userAge" class="form-label">User Age</label>
                          <input type="text" class="form-control" id="userAge" placeholder="Enter user age" v-model="userAge">
                        </div>
                        <div class="mb-3">
                          <label for="gender" class="form-label">Gender</label>
                          <input type="text" class="form-control" id="gender" placeholder="Enter user gender" v-model="gender">
                        </div>
                        <div class="mb-3">
                          <label for="userRole" class="form-label">User Role</label>
                          <input type="text" class="form-control" id="userRole" placeholder="Enter the user role" v-model="userRole">
                        </div>
                        <div class="mb-3">
                          <label for="emailAdd" class="form-label">User Email Address</label>
                          <input type="text" class="form-control" id="emailAdd" placeholder="Enter user email address" v-model="emailAdd">
                        </div>
                        <div class="mb-3">
                          <label for="userPass" class="form-label">User Password</label>
                          <input type="text" class="form-control" id="userPass" placeholder="Enter user password" v-model="userPass">
                        </div> 
                        <div class="mb-3">
                          <label for="userProfile" class="form-label">User Profile Image</label>
                          <input type="text" class="form-control" id="userProfile" placeholder="Enter the user profile image url" v-model="userProfile">
                        </div> 
                      </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button" @click="addUsers">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
name: 'AddUserModal',

data() {
  return {
    firstName : '',
    lastName : '',
    userAge : '',
    gender : '',
    userRole : '',
    emailAdd : '',
    userPass : '',
    userProfile : ''
  }
},

methods: {
  addUsers() {
    this.$store.dispatch('addUsers', this.$data)
  }
}

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