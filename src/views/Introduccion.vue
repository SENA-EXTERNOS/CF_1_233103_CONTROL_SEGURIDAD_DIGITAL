<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/introduccion/img1_intro.svg", alt="alt")
      .col-lg-7
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán conceptos fundamentales sobre el proceso de preparación, planeación y recolección de información y algunos términos y procedimientos claves para desempeñarse en el área de la seguridad digital, como parte de un equipo de trabajo. 
          p.mt-3 Usted podrá afianzarse en el reconocimiento de técnicas necesarias para mejorar la habilidad para comunicarse, extraer la información y comprender cómo funcionan los procesos dentro de una organización, para todo esto, se debe iniciar con algunas definiciones básicas, estudiar algunos procedimientos y casos prácticos a través del contenido y material audiovisual disponible.
          
    .row.mt-5
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xnMpT3_Wz3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
