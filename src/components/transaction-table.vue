<template>
  <div class="bg-white py-6 rounded-[12px]">
    <DataTable
      class="sm-table"
      :hide-footer="true"
      theme-color="#F9FAFB"
      :headers="headers"
      :items="items"
      @click-row="showDetails"
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
      <template #item-type="{ type }">
        <p :class="setColor(type)">
          {{ type }}
        </p>
      </template>
      <template #item-status="{ status }">
        <p :class="setStatus(status)">
          {{ status }}
        </p>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import type { Header, Item } from 'vue3-easy-data-table'
import {useRouter} from 'vue-router'


const router = useRouter()
const headers: Header[] = [
  { text: 'CUSTOMER', value: 'customer' },
  { text: 'AMOUNT', value: 'amount' },
  { text: 'CHANNEL', value: 'channel' },
  { text: 'STATUS', value: 'status', sortable: true },
  { text: 'TYPE', value: 'type', sortable: true },
  { text: 'PAYMENT DATE', value: 'paymentDate', sortable: true }
]

const items: Item[] = [
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'PAYOUT',
    type: 'Failed',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'COLLECTION',
    type: 'Successful',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'PAYOUT',
    type: 'Failed',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'COLLECTION',
    type: 'Successful',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
   {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'COLLECTION',
    type: 'Successful',
    paymentDate: 'March 3, 2023 4:25 PM'
  }
  ,
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'PAYOUT',
    type: 'Failed',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'COLLECTION',
    type: 'Successful',
    paymentDate: 'March 3, 2023 4:25 PM'
  }
  ,
  {
    customer: 'Sharuk Kahn',
    amount: '₦27,002,075.65',
    email: 'sharukkibobo@gmail.com',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'PAYOUT',
    type: 'Failed',
    paymentDate: 'March 3, 2023 4:25 PM'
  },
  {
    customer: 'Sharuk Kahn',
    email: 'sharukkibobo@gmail.com',
    amount: '₦27,002,075.65',
    channel: 'wf_py_53_1xyn9myhgrft',
    status: 'COLLECTION',
    type: 'Successful',
    paymentDate: 'March 3, 2023 4:25 PM'
  }
]

const setColor = (type: string) => {
  if (type.toLowerCase() === 'failed') {
    return 'failed'
  } else return 'success'
}
const setStatus = (status: string) => {
  if (status === 'PAYOUT') {
    return 'text-[#79242F]'
  } else return 'text-[#0B3C35]'
}

const showDetails = () => {
  router.push('/transaction-details')
}
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
