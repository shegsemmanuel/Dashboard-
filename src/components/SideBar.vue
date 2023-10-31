<script setup lang="ts">
import { sideBarLinks } from "../utils/sidebarlinks";
import { Icon } from "@iconify/vue";

const linkText = (text: string) => {
  console.log(text);
};
</script>

<template>
  <div
    class="w-full bg-black md:bg-none min-h-screen fixed top-0 bottom-0 md:static z-50 bg-opacity-20 md:z-30 md:bg-opacity-0 md:w-[240px]"
  >
    <aside
      class="sidebar fixed left-0 top-0 bottom-0 lg:block md:realtive"
    >
      <div
        class="w-full bg-[#79242F] max-w-[200px] my-4 mx-4 rounded-[6px] py-[13px] px-[11px] user-details flex items-center gap-x-2"
      >
        <img class="w-[40px]" src="../assets/user.svg" alt="profile" />
        <div>
          <p class="mb-1 text-[12px]">Gamma Spark Updated</p>
          <p class="text-[10px]">sammyfish007@gmail.com</p>
        </div>
      </div>
      <div class="px-6 h-[88%] py-4 overflow-y-scroll">
        <ul>
          <li
            :key="index"
            v-for="(links, index) in sideBarLinks"
            :class="{
              'my-12 font-bold': links.type == 'sub-headings',
              '': linkText(links.title),
            }"
            class="text-justify w-full"
          >
            <div
              :class="{
                'border-l-4 pl-3 border-[#79242F] rounded transform -translate-x-4':
                  links.title === 'Dashboard',
              }"
              class="flex items-center gap-x-3 mb-6 link"
            >
              <Icon
                :class="{
                  '!text-[#79242F] font-extrabold': links.title === 'Dashboard',
                }"
                v-if="links.icon"
                :icon="links.icon"
              />
              <p
                :class="{
                  'font-extrabold text-[#A4A6A8] tracking-[0.1px]':
                    links.type === 'sub-headings',
                }"
                v-if="links.type == 'sub-headings'"
              >
                {{ links.title }}
              </p>
              <router-link
                :class="{
                  '!text-[#79242F] font-extrabold': links.title === 'Dashboard',
                }"
                v-else
                class="text-[14px]"
                to="/"
                >{{ links.title }}</router-link
              >
            </div>
            <div
              class="flex items-center gap-x-3 mb-6 link"
              :key="index"
              v-for="(link, index) in links.content"
            >
              <Icon :icon="link.icon" />
              <router-link
                class="text-[14px] hover:!text-[#79242F] font-medium"
                to="#"
                >{{ link.title }}</router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </div>

  
</template>

<style scoped>
.sidebar {
  background: linear-gradient(
      241.47deg,
      rgba(204, 255, 250, 0.25) -2.96%,
      rgba(255, 252, 245, 0.25) 44.27%,
      rgba(255, 229, 233, 0.25) 89.58%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  z-index: 1000;
  transition: all 0.5s ease;
}

.sidebar a {
  font-weight: 400;
  line-height: 100%;
  color: #646668;
  transition: all 0.5s ease;
}

.sidebar main {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
}
.sidebar main::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.sidebar .link:hover svg {
  color: #79242f;
}

.sidebar .link:hover a {
  color: #79242f !important;
}

.sidebar .link svg {
  color: #4f4f4f;
}
.sidebar p {
  line-height: 100%;
}

.sidebar .user-details p {
  font-size: 12px;
  color: #ffffff;
}
</style>
