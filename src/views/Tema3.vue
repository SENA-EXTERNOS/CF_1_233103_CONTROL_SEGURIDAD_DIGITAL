<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metodologías para la planificación de actividades.

    .row.mt-3
      .col-lg-12
        figure
          img(src="@/assets/curso/temas/tema3/img1_tema3.svg", alt="alt")    
    
    .row.cajon.tema13.mt-5 
      .cajon.color-t3.p-4
        .row
          .col-lg-4
            figure
              img(src="@/assets/curso/temas/tema3/img2_tema3.svg", alt="alt") 
          .col-lg-8 
            p En este punto del componente formativo, conozca y asimile las metodologías de planificación más usadas en el campo de la industria, especialmente, en el campo de los proyectos, para la planeación y ejecución de tareas, enfocadas a la obtención de información, en el entorno de la seguridad digital. 

            p Las metodologías mencionadas no son las únicas existentes; se trata solo de opciones que merecen ser conocidas y aplicadas en labores de grupos de trabajo.

    .row.mt-5
      h3 Metodologías ágiles

    .row
      .col-lg-3
        figure.tema3-img1 
          img(src="@/assets/curso/temas/tema3/img3_tema3.svg", alt="alt") 
      .col-lg-9 
        p Las metodologías ágiles agrupan un conjunto de procedimientos que ayudan a realizar una labor de forma dinámica y que, al ser bien utilizadas, pueden ahorrar considerablemente el tiempo y el uso de recursos, sin comprometer la calidad del producto.

    .row.mt-5
      p Para conocer algunas generalidades sobre esta metodología hacer clic sobre cada uno de los puntos del siguiente gráfico.
    
    ImagenInfografica.color-primario.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img4_tema3.svg', alt='Texto que describa la imagen')
          

      .tarjeta.color-acento-botones.p-3(x="35%" y="17%" numero="")
        p.tarjeta.color-acento-botones-t3 Objetivo: desarrollar una actividad de manera rápida sin afectar la calidad de este, aprovechando al máximo el tiempo y habilidades del equipo de colaboradores.

      .tarjeta.color-acento-botones.p-3(x="34%" y="38%" numero="")
        p.tarjeta.color-acento-botones-t3 Características: se divide el problema o actividad a realizar en tareas pequeñas, estas se ubican en una línea de tiempo y se asignan en orden a cada colaborador, de manera que se puedan realizar en plazos pequeños y ver avances de forma rápida.

      .tarjeta.color-acento-botones.p-3(x="36%" y="58%" numero="")
        p.tarjeta.color-acento-botones-t3 <em style="color:white"><b style="color:white"> Kanban:</b></em> método ágil basado en el seguimiento visual de los avances de la tarea, mediante tarjetas adhesivas, algún software o diagrama visual. En este se especifican las tareas y se asignan al colaborador indicado, permitiendo observar lo que se ha hecho, qué está en proceso y cuál culminó su realización.
      
      .tarjeta.color-acento-botones.p-3(x="46%" y="78%" numero="")
        p.tarjeta.color-acento-botones-t3 <em style="color:white"><b style="color:white"> Scrum:</b></em> es otro método ágil basado en ciclos de trabajo o periodos de entrega fijos en días, semanas o incluso meses dependiendo del tamaño y dificultad de la tarea; el método incluye reuniones periódicas para la revisión de avances y realizar ajustes en las tareas programadas.
    .row.mt-5
      h3 Metodología en cascada
    
    .row.cajon.tema13.mt-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img5_tema3.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el desarrollo de proyectos, la metodología en cascada es muy utilizada. Para conocer el concepto y características de implementación, se le invita a ver el siguiente vídeo. Tome nota, en su libreta personal de apuntes, de los elementos más destacados del video.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jTcnxFnAaJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mt-5
      h3 Metodología de ruta crítica
    
    
    .row.mt-3
      .col-lg-12
        figure
          img(src="@/assets/curso/temas/tema3/img6_tema3.svg", alt="alt") 
    
    .row.mt-5
      .col-lg-12
        p El método de la ruta crítica permite identificar la secuencia de actividades más importantes de un proyecto o tarea. En su implementación, las demás actividades girarán en torno a la ruta principal.
        p.color-intro.mt-3  <b>A continuación, algunos aspectos generales de esta metodología.</b>


    .row.mt-5
      .col-lg-12
        figure
          img(src="@/assets/curso/temas/tema3/img7_tema3.svg", alt="alt") 

    .row.mt-5
      .col-lg-12
        h4 En el siguiente diagrama se ilustra cómo puede conformarse un gráfico de ruta crítica sencillo.


    .row.titulo-T3-9.mt-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2
          p <em>Diagrama de ejemplo de una ruta crítica</em> 
            
    .row.imagen-T3-9.mt-5 
      .col-lg-10
        figure
        img(src='@/assets/curso/temas/tema3/img8_tema3.svg', alt='Texto que describa la imagen')
    
    .row.mt-5
      .col-lg-12
        p El siguiente es un esquema sobre cómo se puede realizar y graficar un desglose de tareas.
    
    .row.titulo-T3-9.mt-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3
          p <em>Desglose de tareas:</em> 
    
    .row.imagen-T3-9.mt-5 
      .col-lg-10
          figure
          img(src='@/assets/curso/temas/tema3/img9_tema3.svg', alt='Texto que describa la imagen')
    
    
    .row.cajon.tema13.mt-5 
      .cajon.color-t3.p-4
        .row
          .col-lg-10 
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
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
