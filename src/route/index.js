import { createRouter, createWebHistory } from "vue-router";
import GetData from '../components/GetData'
import Post_data from '../components/Post_data'
import Get_id from '../components/Get_id'

const routes = [
  {
    path: "/",
    name: "home",
    component: GetData,

  },
  
  { path: '/getdata', component: Post_data },
  { path: "/idpage", component: Get_id },
 


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;