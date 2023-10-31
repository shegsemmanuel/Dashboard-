import './styles.css'

import VueApexCharts from "vue3-apexcharts";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.component('DataTable', Vue3EasyDataTable);
app.use(VueApexCharts);
app.use(createPinia())
app.use(router)

app.mount('#app')
