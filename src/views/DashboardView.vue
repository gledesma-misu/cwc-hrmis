<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <div class="container mt-5">
      <div class="row">
        <!-- Card 1 -->
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card 1</h5>
              <p class="card-text">This is the first card.</p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card 2</h5>
              <p class="card-text">This is the second card.</p>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card 3</h5>
              <p class="card-text">This is the third card.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- DataTable -->
      <div class="row mt-4">
        <div class="col-md-12">
          <table id="example" class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>User</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Buttons -->
      <div class="row mt-4">
        <div class="col-md-12">
          <button class="btn btn-primary">Button 1</button>
          <button class="btn btn-secondary">Button 2</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from '../components/Sidebar/Sidebar.vue'
import { sidebarWidth } from '../components/Sidebar/state'
</script>

<style  scoped>
/* Add custom styles here */
.custom-card {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
}

.custom-card .card-title {
  color: #333;
}

.custom-table {
  width: 100%;
}

.custom-button {
  margin-right: 10px;
}
</style>