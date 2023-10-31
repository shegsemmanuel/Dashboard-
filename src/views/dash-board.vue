<script setup lang="ts">
import Card from '../components/ov-card.vue'
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'
// @ts-ignore
import TransactionTable from '../components/transaction-table.vue'
// @ts-ignore
import CustomerTable from '../components/customer-table.vue'
type Tabs = {
  [key: string]: any; // Use 'any' for the value type, as it can be different components
}
const tabs:Tabs = {
  TransactionTable,
  CustomerTable
}



const currentTab = ref<string>('TransactionTable')

const setTab = (tab: string) => {
  currentTab.value = tab
}

const options = reactive({
  chartOptions: {
    chart: {
      width: 350,
      type: 'donut'
    },
    labels: ['Successful', 'Pending', 'Failed'],
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            show: false
          }
        }
      }
    ],
    colors: ['#4BDECA', '#A63241', '#EB8B1E'],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 200
    }
  },
  series: [300, 45, 15]
})
</script>

<template>
  <main>
    <!--  -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
      <Card>
        <div class="flex items-center justify-between my-3">
          <p class="text-[#4E4E4E] font-medium text-[14px]">Total Amount Received</p>

          <button
            type="button"
            class="py-[9] px-[10px] bg-[#E4F7F5] rounded-[4px] h-[32px] flex items-center gap-x-4"
          >
            <p class="text-[12px] text-[#188475]">This week</p>
            <Icon class="text-[#188475] text-[16px]" icon="iconamoon:arrow-down-2-thin" />
          </button>
        </div>
        <div class="my-4">
          <h2 class="text-[34px] font-extrabold text-[#4E4E4E]">₦27,002,075.65</h2>
        </div>
        <div class="border-t pt-3 border-[#EEF0F1] mt-0 flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <a href="#" class="text-[#C94A5A] text-[12px]">View Transactions</a>
            <Icon class="text-[#C94A5A] text-[16px]" icon="ph:swap-duotone" />
          </div>
          <Icon class="text-[#C94A5A] text-[16px]" icon="iconamoon:arrow-right-2-light" />
        </div>
      </Card>
      <Card class="max-h-[208px]">
        <div class="flex items-center justify-between my-3">
          <p class="text-[#4E4E4E] font-medium text-[14px]">Total Payouts</p>

          <button
            type="button"
            class="py-[9] px-[10px] bg-[#E4F7F5] rounded-[4px] h-[32px] flex items-center gap-x-4"
          >
            <p class="text-[12px] text-[#188475]">This week</p>
            <Icon class="text-[#188475] text-[16px]" icon="iconamoon:arrow-down-2-thin" />
          </button>
        </div>
        <div class="my-4">
          <h2 class="text-[34px] font-extrabold text-[#4E4E4E]">₦27,002,075.65</h2>
        </div>
        <div class="border-t pt-3 border-[#EEF0F1] mt-0 flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <a href="#" class="text-[#C94A5A] text-[12px]">View Transactions</a>
            <Icon class="text-[#C94A5A] text-[16px]" icon="ph:swap-duotone" />
          </div>
          <Icon class="text-[#C94A5A] text-[16px]" icon="iconamoon:arrow-right-2-light" />
        </div>
      </Card>
      <Card class="chart-box max-h-[208px]">
        <div class="flex items-center justify-between my-3">
          <p class="text-[#4E4E4E] font-medium text-[14px]">Transaction analytics</p>

          <button
            type="button"
            class="py-[9] px-[10px] bg-white rounded-[4px] h-[32px] flex items-center gap-x-4"
          >
            <p class="text-[12px] text-[#188475]">This week</p>
            <Icon class="text-[#188475] text-[16px]" icon="iconamoon:arrow-down-2-thin" />
          </button>
        </div>

        <div class="transform -translate-x-12">
          <apexchart
            height="120px"
            :options="options.chartOptions"
            :series="options.series"
          ></apexchart>
        </div>
      </Card>
    </div>

    <div class="my-7">
      <div class="bg-white rounded-[12px] w-full min-h-[80px] flex gap-x-8 px-2 md:px-12 py-4">
        <div @click="setTab('TransactionTable')" class="cursor-pointer">
          <button
            :class="{
              'border-b-4 border-[#79242F] !text-[#79242F] rounded-b-sm':
                currentTab === 'TransactionTable'
            }"
            class="text-[#646668] py-4 px-4 md:w-[150px] block font-medium rounded-b-sm"
          >
            Transactions
          </button>
        </div>
        <div @click="setTab('CustomerTable')" class="cursor-pointer">
          <button
            :class="{
              'border-b-4 border-[#79242F] !text-[#79242F] rounded-b-sm':
                currentTab === 'CustomerTable'
            }"
            class="text-[#646668] py-4 px-4 md:w-[150px] block font-light"
          >
            Customers [32]
          </button>
        </div>
      </div>
    </div>

    <component :is="tabs[currentTab]" class="tab"></component>
  </main>
</template>


