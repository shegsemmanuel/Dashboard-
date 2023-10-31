<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main>
    <!--  -->
    <div @click="router.back()" class="flex items-center gap-x-2 cursor-pointer">
      <Icon class="text-[#646668] text-[30px]" icon="iconamoon:arrow-left-2-light" />
      <p class="text-[#646668]">Back</p>
    </div>
    <div class="flex items-center gap-x-2 mt-5 ml-2">
      <p class="text-[#646668] text-[14px]">Type: Payout</p>
    </div>

    <div class="grid grid-cols-12 gap-x-6 gap-y-4 mt-10">
      <div class="bg-white py-[39px] px-[40px] rounded-[8px] col-span-12 lg:col-span-6">
        <div class="flex items-center justify-between border-b border-b-[#E4E6E8] pb-4 mb-5">
          <div class="flex items-center gap-x-4">
            <img src="../assets/success.svg" alt="success" />
            <p>8012682284</p>
          </div>

          <div>
            <p class="text-[#343434] text-[12px] font-medium text-right">Amount</p>
            <p class="text-[#646668] text-[14px]">₦100.00</p>
          </div>
        </div>
        <div class="flex items-center justify-between border-b border-b-[#E4E6E8] pb-4 mb-5">
          <div class="">
            <p class="text-[#343434] text-[12px] font-medium">Customer Reference</p>
            <p class="text-[#646668] text-[14px]">53</p>
          </div>

          <div>
            <p class="text-[#343434] text-[12px] font-medium text-right">Customer Name</p>
            <p class="text-[#646668] text-[14px]">Gamma Spark Updated</p>
          </div>
        </div>
        <div class="flex items-center justify-between border-b border-b-[#E4E6E8] pb-4 mb-5">
          <div class="">
            <p class="text-[#343434] text-[12px] font-medium">Customer Phone</p>
            <p class="text-[#646668] text-[14px]">7708809901</p>
          </div>

          <div>
            <p class="text-[#343434] text-[12px] font-medium text-right">Customer Email</p>
            <p class="text-[#646668]">gamma-sparks@yopmail.com</p>
          </div>
        </div>

        <div class="flex items-center justify-between border-b border-b-[#E4E6E8] pb-4 mb-5">
          <div class="">
            <p class="text-[#343434] text-[12px] font-medium text-right">Customer Reference</p>
            <p class="text-[#646668] text-[14px]">53</p>
          </div>

          <div>
            <p class="text-[#343434] text-[12px] font-medium text-right">Customer Name</p>
            <p class="text-[#646668] text-[14px]">Gamma Spark Updated</p>
          </div>
        </div>

        <div class="flex items-center justify-between pb-4 mb-5 border-b border-[#E4E6E8]">
          <div class="">
            <p class="text-[#343434] text-[12px] font-medium">Source Account</p>
            <p class="text-[#646668] break-words text-[14px]">
              CORONATION MERCHANT BANK Load Test Account
            </p>
          </div>

          <div>
            <p class="text-[#343434] text-[12px] font-medium break-words w-full text-right">
              Settlement Account
            </p>
            <p class="text-[#646668] text-[14px]">Not Available</p>
          </div>
        </div>
        <div class="flex items-center justify-between pb-4 mb-5">
          <div class="">
            <p class="text-[#343434] text-[12px] font-medium">Transaction Date</p>
            <p class="text-[#646668] break-words text-[14px]">
              Wednesday, March 22nd 2023, 4:03:29 pm
            </p>
          </div>

          <div>
            <p class="text-[#343434] text-[12px] font-medium break-words w-full text-right">
              Status Description
            </p>
            <p class="text-[#646668] text-[14px]">Successful</p>
          </div>
        </div>
      </div>
      <div
        class="bg-white py-[10px] px-[30px] rounded-[8px] min-h-[100px] col-span-12 lg:col-span-6 self-start"
      >
        <div class="flex items-center justify-between border-b border-[#E4E6E8] py-6">
          <p class="text-[#343434] text-[12px] font-medium">TRANSACTION LOGS</p>

          <div class="flex items-center gap-x-1">
            <Icon class="text-[#188475] text-[12px]" icon="ph:arrows-counter-clockwise" />
            <p class="text-[#188475] text-[12px]">Resend callback</p>
          </div>
        </div>

        <div class="flex items-start justify-start">
          <div class="flex items-stretch flex-col gap-y-4 transform  translate-y-8 ">
          <Icon class="text-[#EB8B1E] text-[8px]" icon="clarity:circle-solid" />
          <div class="w-10 h-10 border-l transform translate-x-1"></div>
          <Icon class="text-[#188475] text-[8px]" icon="clarity:circle-solid" />
            
          </div>
          <div class="pl-6">
          <div>
            <div class="mt-7">
              <p class="text-[#343434] text-[12px] font-bold break-words">Transaction initiated</p>
              <p class="text-[#646668] text-[14px]">Wednesday, March 22nd 2023, 4:03:29 pm</p>
            </div>
          </div>
          <div>
            <div class="mt-7">
              <p class="text-[#000] text-[12px] font-bold break-words">
                Callback sent Response code: 429
              </p>
              <p class="text-[#646668] text-[14px]">Thursday, March 23rd 2023, 2:21:17 am</p>
            </div>
          </div>
          <div class="bg-[#F9FAFB] py-[10px] max-w-xs text-center my-8">
          <p class="text-[#646668] text-[12px]">+ { /* Click to view response */ }</p>
        </div>
        </div>

        
        </div>
      </div>
    </div>
  </main>
</template>


