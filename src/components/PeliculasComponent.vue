<template>
    <section id="content">
                 <h2 class="subheader">Peliculas</h2>
 
 
                 <!--Listado articulos-->
                 <div id="articles">
                     <article class="article-item" v-for="pelicula in peliculas" v-bind:key="pelicula.title">
                         <div class="image-wrap">
                             <img :src="pelicula.image" 
                             :alt="pelicula.title"
                             :title="pelicula.title" />
                         </div>
 
                         <h2>{{pelicula.title}}</h2>
                         <span class="date" :class="{
                            yeargreeen: pelicula.year>=2015,
                            yearred: pelicula.year<2016
                         }">
                            {{ pelicula.year }}
                         </span>
                         <a href="#">Leer más</a>
 
                         <div class="clearfix"></div>
                     </article>
 
                     <!--AÑADIR ARTICULOS VIA JS-->
 
                 </div>
 
             </section>
 
 </template>
 <script>
 export default {
 name:'PeliculasComponent'
 ,
 data(){
    return {
        peliculas:[
            {
                title:'Batman vs Superman',year:2017,image:'https://i.blogs.es/503736/batman-v-superman-la-pelicula-2016-imagen-blogdecine/1366_2000.jpg'
            },
            {
                title:'Gran Torino',year:2015,image:'https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_FMjpg_UX1000_.jpg'
            },
            {
                title:'El señor de los anillos',year:2015,image:'https://es.web.img3.acsta.net/pictures/22/10/04/16/26/1929878.jpg'
            },

        ]
    }
 }
}

 </script>