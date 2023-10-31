

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import SideBar from '../components/SideBar.vue'
import Toggle from '../components/toggle.vue'
const show = ref(false)
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="relative md:flex h-screen overflow-hidden">
    <SideBar
      @click.self="show = !show"
      :class="[show ? 'open' : 'hidden']"
      class="xl:block"
    />

    <div class="flex-1  h-screen overflow-y-auto">
      <div>
        <header
          class="px-4 py-6 md:py-[24px] md:px-[50px] sticky-nav bg-white fixed top-0 left-0 w-full"
        >
          <!--  -->
          <div class="flex items-center justify-between side-bar--header">
            <div class="ml-4">
              <h4 class="text-[#4E4E4E] text-[20px] font-extrabold leading-[21px] tracking-[0.1px]">
                <!-- #FD801B -->
                {{ $route.name }}
              </h4>
            </div>
            <div class="flex items-center gap-x-7">
              <div
                class="w-[30.805px] h-[30.805px] rounded-full notify flex items-center justify-center p-2 cursor-pointer"
              ></div>

              <!--  -->
              <Icon @click="show = !show" class="text-[#646668] text-[30px] block md:hidden" icon="ion:menu" />
              <div  class="hidden md:flex items-center gap-x-3 ">
                <Toggle />
                <h5 class="text-[15.105px] text-[#0D4840] mt-1">Live Mode</h5>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="flex-1 px-4 mt-24 min-h-screen overflow-y-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>



<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.sticky-nav {
  margin-left: 0;
  transition: all 0.5s ease;
  position: fixed;
  z-index: 10;
}

.main-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  margin-left: 0%;
  margin-right: auto;
  position: relative;
  max-width: 100%;
  width: 100%;
  z-index: 1;
}

@media (min-width: 1024px) {
  .main-content {
    top: 65px;
    overflow-y: scroll;
    margin-left: 0%;
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 1280px) {
  .side-bar--header {
    width: calc(100% - 200px);
  }
  .sticky-nav {
    margin-left: 13rem;
    transition: all 0.5s ease;
    position: fixed;
  }
  .main-content {
    width: calc(100% - 190px);
    height: 100%;
    margin-left: 15%;
  }
}

@media (min-width: 1500px) {
  .main-content {
    width: calc(100% - 220px);
    height: calc(110vh - 60px);
    height: 100%;
  }
  .side-bar--header {
    width: calc(100% - 230px);
    height: 100%;
  }
  .sticky-nav {
    margin-left: 15rem;
    transition: all 0.5s ease;
    position: fixed;
  }
}

.open {
  animation: slide-in 0.1s linear;
  transition: all 0.2s;
}

@keyframes slide-in {
  0% {
    left: -250px;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}
</style>