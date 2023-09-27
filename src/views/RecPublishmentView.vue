<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <div class="container">
      
        <Navbar :tabs="tabs">
          <template #RecruitmentPublishing>
            <!-- Tab Content for Home -->
            <div>

              <Publishing />
            </div>
          </template>
          <template #Applicants>
            <!-- Tab Content for About -->
            <div>

              <Applicants />
              <!-- Add your content here -->
            </div>
          </template>
          <template #JobLibraries>
            <!-- Tab Content for About -->
            <div>
              <JobLibraries />
              <!-- Add your content here -->
            </div>
          </template>
          <template #EmployeeTrainings>
            <!-- Tab Content for About -->
            <div>
              <EmployeeTrainings />
              <!-- Add your content here -->
            </div>
          </template>
        </Navbar>


    </div>
  </div>
</template>
  
<script >
import { RouterLink, RouterView } from "vue-router";
import Sidebar from '../components/Sidebar/Sidebar.vue'
import Navbar from '../components/NavBar/Navbar.vue'


export default {
  name: 'Recruitment Publishment',
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      tabs: [
        { label: 'Recruitment Publishing', name: 'RecruitmentPublishing' },
        { label: 'Applicants', name: 'Applicants' },
        { label: 'Job Libraries', name: 'JobLibraries' },
        { label: 'Employee Trainings', name: 'EmployeeTrainings' },
      ],
    };
  },
};
</script>
<script setup>
import Publishing from '../views/RecPublishment/RecPublishingView.vue'
import Applicants from '../views/RecPublishment/ApplicantsView.vue'
import JobLibraries from '../views/RecPublishment/JobLibrariesView.vue'
import EmployeeTrainings from '../views/RecPublishment/EmployeeTrainingsView.vue'
import { sidebarWidth } from '../components/Sidebar/state'
</script>
<style  scoped>
.container {
  padding-top: 5%;
}
</style>