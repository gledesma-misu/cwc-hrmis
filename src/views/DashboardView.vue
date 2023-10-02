<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <div class="content">
      <Header>

      </Header>
      <div class="container-fluid">
        <!-- Page Heading -->
        <h1 class="h3 mb-3 text-gray-800">Dashboard</h1>
        <div class="row">
          
          <div class="col-lg-6">
            <!-- Announcement Button -->
            <a href="#" class="btn btn-primary btn-icon-split">
              <span class="icon text-white-50">
                <i class="fas fa-flag"></i>
              </span>
              <span class="text">Create Announcement</span>
            </a>
            <!-- Attendance Button -->
            
            <a href="#" class="btn btn-success btn-icon-split">
              <span class="icon text-white-50">
                <i class="fas fa-board"></i>
              </span>
              <span class="text">Today's Attendance</span>
            </a>
          </div>
         
        </div>
        <div class="my-2"></div>
        <!-- First Row -->
        <div class="row">
          <!-- Total Employees Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total Employee</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">256 Employees</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-person fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- On-leave Employees Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      On-leave Employees</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">25</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-person-walking-luggage fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tasks Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Pending Applicants
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0  font-weight-bold text-gray-800">3</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pending Requests Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending Leave Requests</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Second Row -->
        <div class="row">
          <!-- First Column -->
          <div class="col-lg-6">

            <!--Upcoming Events Card Example -->
            <div class="card mb-4">
              <div class="card-header">
                <h6 class="m-0 font-weight-bold text-primary">Upcoming Events</h6>
              </div>
              <div class="card-body">

              </div>
            </div>

            <!-- Basic Card Example -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Attendance</h6>
              </div>
              <div class="card-body">

              </div>
            </div>
          </div>
          <!-- Second Column -->
          <div class="col-lg-6">
            <!-- Basic Card Example -->
            <div class="card shadow mb-0">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Announcement</h6>
              </div>
              <div class="card-body">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

import Sidebar from '../components/Sidebar/Sidebar.vue'
import Header from '../components/Header/Header.vue'
import { sidebarWidth } from '../components/Sidebar/state'
</script>

<style scoped>
@import '../assets/sb-admin-2.min.css';
</style>