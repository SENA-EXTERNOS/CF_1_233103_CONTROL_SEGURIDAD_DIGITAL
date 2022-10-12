<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
    .titulo-sexto.color-acento-contenido
      h5 Control de la seguridad digital
        p.mb-0 Síntesis: Recolección de información para la seguridad digital 
   
    .row.mt-5
      .col-lg-l12
          p En el siguiente diagrama se encuentra un resumen de conceptos y palabras claves de los temas abordados en este contenido formativo.

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
     

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
