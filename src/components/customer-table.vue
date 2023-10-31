<template>
  <div class="bg-white py-6 rounded-[12px]">

    <DataTable
      class="sm-table"
      :hide-footer="true"
      theme-color="#F9FAFB"
      :headers="headers"
      :items="items"
      header-text-direction="justify"
      body-text-direction="justify"
    >
      <template #item-customer="{ customer, email }">
        <p class="text-[#4F4F4F] font-extrabold">
          {{ customer }}
        </p>
        <p class="text-[#848688]">
          {{ email }}
        </p>
      </template>
     
      
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import type { Header, Item } from 'vue3-easy-data-table'

const headers: Header[] = [
  { text: 'CUSTOMER', value: 'customer' },
  { text: 'AMOUNT', value: 'amount' },
  { text: 'REFERENCE', value: 'reference' },
  // { text: 'STATUS', value: 'status', sortable: true },
  { text: 'NUBAN', value: 'nuban', sortable: true },
  { text: 'DATE CREATED', value: 'paymentDate', sortable: true }
]

const items: Item[] = [
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    reference: 'COMPLETE SIZE',
   
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    reference: 'wf_py_53_1xyn9myhgrft',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    reference: 'BALA BLU',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    reference: 'BALA BLU',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  }
  ,
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    reference: 'BALA BLU',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  }
  ,
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    reference: 'COMPLETE SIZE',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    nuban: '0938475648',
    paymentDate: 'March 3, 2023 4:25 PM'
  }
]


</script>

<style scoped>
.failed {
  border-radius: 4px;
  background: #ffe5e9;
  color: #79242f;
  display: flex;
  width: 79px;

  padding: 5px 20px;
  justify-content: center;
  align-items: center;
}
.success {
  border-radius: 4px;
  background: #e4f7f5;
  color: #0b3c35;
  display: flex;
  width: 79px;

  padding: 5px 20px;
  justify-content: center;
  align-items: center;
}
</style>
