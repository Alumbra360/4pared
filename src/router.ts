import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import NotFoundView from './views/NotFoundView.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: HomeView }, { path: '/:pathMatch(.*)*', component: NotFoundView }],
  scrollBehavior(to, _from, savedPosition) { return savedPosition || (to.hash ? { el: to.hash, top: 100 } : { top: 0 }) },
})
