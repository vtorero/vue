<template>
  <section id="content">
    <h2 class="subheader">Pagina de pruebas</h2>
    <h3>{{ id_desde_url }}</h3>
  </section>
</template>
<script>
export default {
  name: "PaginaComponent",
created(){
  console.log("componente creado");
},
updated(){
  console.log("componente actualizado");
},

  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("componente montado");
  },
  data() {
    return {
      id_desde_url: null
    }
  }
}
</script>