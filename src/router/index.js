


import Vue from 'vue';
import Router from 'vue-router';
import admin from './admin.js';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue2';



Vue.use( CKEditor );

import routerGuard from '../middleware/auth.js';
Vue.use(Router);
const routes = [...admin];
const router = new Router({
  mode: 'history', 
  routes: routes
});




router.beforeEach(routerGuard)




// export default router;
// import admin from './admin.js';
// const routes =[...admin];

// const router = createRouter({
//     history: createWebHistory(),
//     routes 
// })

export default router;