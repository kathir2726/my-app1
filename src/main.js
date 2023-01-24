import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HomeView from './views/HomeView'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net';
 
DataTable.use(DataTablesLib);

loadFonts()

const app = createApp(App);
app.use(VueAxios, axios)
// app.use('router', router);
app.use('vuetify', vuetify);
app.component('EasyDataTable', Vue3EasyDataTable);
app.component('HomeView', HomeView);
const mountedApp = app.mount('#app');



// createApp(App)
//   .use(router)
//   .use(vuetify)
//   .use(VueAxios, axios)
//   .use(HomeView)
//   .mount('#app')
