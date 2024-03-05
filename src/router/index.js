import LastArticles from "@/components/LastArticles.vue";
import BlogComponent from "@/components/BlogComponent.vue";
import PaginaComponent from "@/components/PaginaComponent.vue";
import FormularioComponent from "@/components/FormularioComponent.vue";
import MiComponente from "../components/MiComponente.vue";
import PeliculasComponent from "../components/PeliculasComponent.vue";

import { createWebHistory, createRouter } from "vue-router";



const routes = [
  {path: "/home",name: "Home",component: LastArticles},
  {path: "/blog",name: "Blog",component: BlogComponent},
  {path:'/formulario',component:FormularioComponent },
  {path:'/pagina/:id?',name:'pagina',component:PaginaComponent },
  {path:'/mi-componente',name:'pagina2',component:MiComponente},
  {path:'/peliculas',name:'peliculas',component:PeliculasComponent},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;