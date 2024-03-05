<template>
<div id="mi-componente">
    <hr>
<h1>Este es mi componente</h1>
<h2>{{ subtitulo }}</h2>
<hr>
<h2>Reactividad</h2>
<input type="text" v-model="nombre"/>
{{ nombre }}
<pre>{{ $data }}</pre>
<h2>Directivias condicionales</h2>
<input type="number" v-model="edad">
mi edad es :<strong>{{ edad }}</strong>
</div>
<p class="alert-success-provisional" v-if="edad && edad>=18 && edad<65">
Eres mayor de edad !!
</p>
<p class="alert-purple-provisional" v-else-if="edad && edad>=65">
Eres de avanzada edad!!</p>
<p class="alert-danger-provisional" v-else>
!! ERES MENOR DE EDAD!!</p>
<h2>Directiva iterativa</h2>
<ol>
    <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
</ol>
</template>
<script>
export default{
    name:'MiComponente',
    data(){
        return{
            subtitulo:"Soy el subtitulo de mi componente",
            nombre:'',
            edad:18,
            peliculas:['Batman vs Superman','El señor de los anillos','Spiderman','Forest Gumb']
        }
    }
}
</script>