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
          p.mb-0 Bienvenido a este contenido formativo en el que se abordarán conceptos fundamentales sobre el proceso de preparación, planeación y recolección de información, algunos términos y procedimientos claves para desempeñarse en el área de la seguridad digital como parte de un equipo de trabajo. El objetivo es reconocer las técnicas necesarias para mejorar la habilidad para comunicarse, extraer la información y comprender cómo funcionan los procesos dentro de una organización, para todo esto, se debe iniciar con algunas definiciones básicas, estudiar algunos procedimientos y casos prácticos a través del contenido y material audiovisual preparado.
          p.mt-3 En el siguiente video se realiza una introducción general a la temática que se estudiará a lo largo del componente formativo. 
          p.mt-3.color-intro <b>¡Muchos éxitos! en este proceso de aprendizaje.</b>   
    

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video




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
