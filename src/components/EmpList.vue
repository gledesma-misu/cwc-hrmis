
<template>
 
        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="name" header="Employee Name" style="width: 25%"></Column>
            <Column field="country.name" header="ID Number" style="width: 25%"></Column>
            <Column field="company" header="Office/Division/Section/Unit" style="width: 25%"></Column>
            <Column field="representative.name" header="Status" style="width: 25%"></Column>
        </DataTable>
 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/services/Api';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();

</script>