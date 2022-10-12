<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos y teoría de la información.

    .row.mt-3
      .col-lg-12
        figure
          img(src="@/assets/curso/temas/tema1/img1_tema1.svg", alt="alt")

    .row.mt-5
      .col-lg-12
          p Como se ha podido apreciar en el material de introducción, el término sobre el que girará toda la temática de este contenido, será la ‘información’. Al ser técnico en control de la seguridad digital, es importante apropiar una definición de este y de otros términos que guardan completa relación y mención frecuente.
   
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Definiciones básicas: información, datos, metodología, instrumentos, comunicación.

    .row.mt-5
      .col-lg-12
        p Para iniciar con el primer tema de estudio, es necesario definir el concepto central a tratar, la ‘información’, conocer cómo los principales teóricos la definen:

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row
          .col-md-4
            p Chiavenato, Idalberto. 
            figure
              img(src='@/assets/curso/temas/tema1/img2_tema1.svg', alt='Texto que describa la imagen')
              figcaption Fotografía del autor
          .col-md-8.mb-4.mb-md-0
            .cajon.color-t1.p-4.mt-3
              p.color-cajon-t1 Según Idalberto Chiavenato, referente en la administración, su concepto de la información es (2004):his is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
              p.mt-3.color-cajon-t1 Consiste en un conjunto de datos que poseen un significado, de modo tal que reducen la incertidumbre y aumentan el conocimiento de quien se acerca a contemplarlos. Estos datos se encuentran disponibles para su uso inmediato y sirven para clarificar incertidumbres sobre determinados temas (p.365). 
        
        .row
          .col-md-4
            p RAE
            figure
              img(src='@/assets/curso/temas/tema1/img3_tema1.svg', alt='Texto que describa la imagen')
              
          .col-md-8.mb-4.mb-md-0
            .cajon.color-t1.p-4.mt-3
              p.color-cajon-t1 Del diccionario de la RAE encontramos la siguiente definición (2014): “Comunicación o adquisición de conocimientos que permiten ampliar o precisar los que se poseen sobre una materia determinada” (23a ed.).
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>

        .row
          .col-md-4
            p Michael R. Czinkota 
            figure
              img(src='@/assets/curso/temas/tema1/img4_tema1.svg', alt='Texto que describa la imagen')
              figcaption Fotografía del autor
          .col-md-8.mb-4.mb-md-0
            .cajon.color-t1.p-4.mt-3
              p.color-cajon-t1 Según Czinkota y Kotabe la ‘información’ "consiste en datos seleccionados y ordenados con un propósito específico" (p.115).
              <br>
              <br>
              <br>
              <br>
              <br>
              <br> 

        .row
          .col-md-4
            p
            figure
              img(src='@/assets/curso/temas/tema1/img5_tema1.svg', alt='Texto que describa la imagen')
              figcaption Fotografía del autor
          .col-md-8.mb-4.mb-md-0
            .cajon.color-t1.p-4.mt-3
              p.color-cajon-t1 Portada: introducción a los negocios en un mundo cambiante 
              p.mt-3.color-cajon-t1 Para Ferrell y Hirt (2004), la información "comprende los datos y conocimientos que se usan en la toma de decisiones" (p.121).
              <br>
              <br>
              <br>
              <br>
              <br>
        
    .row.mt-5
      .col-lg-12
        p Algunos conceptos también asociados al tema y que se deben conocer son:  

    .tarjeta.tarjeta--gris.p-4.mt-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6_tema1.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p <b>Comunicación:</b> es el proceso mediante el cual, se transmite la información desde una fuente de origen o transmisor, hacia un oyente o receptor. Intervienen también reglas o protocolos para que ambas partes se entiendan.

        .row(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7_tema1.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p Los tipos de comunicación más comunes son:
              ul.mt-3
                li 
                  i.fas.fa-check.lista-ul--color_t1
                  |  <b>Oral: </b>se vale de la interacción a través del habla.
                li  
                  i.fas.fa-check.lista-ul--color_t1  
                  |  <b>Escrita: </b>se vale de medios escritos como cartas, anotaciones, formatos e instrumentos.
                li  
                  i.fas.fa-check.lista-ul--color_t1
                  |  <b>Digital: </b> se vale de medios tecnológicos y contenidos audiovisuales.

        .row(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8_tema1.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p <b>Dato:</b> Les una unidad pequeña de información compuesta por símbolos, letras o números, que al darle un contexto y agruparla con otros datos puede componer una unidad de información mucho más completa.

        .row(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9_tema1.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p <b>Instrumento:</b> es una herramienta u objeto elaborado de tal forma que permite realizar la recolección de información de manera ordenada.

        .row(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10_tema1.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p <b>Metodología:</b> es el conjunto de acciones, mecanismos, recursos, técnicas o pasos, que previamente han sido establecidos y ordenados de una manera lógica, para realizar uno o más objetivos definidos dentro de una actividad.

        .row(titulo="")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11_tema1.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p <b>Técnica:</b> es el conjunto de procedimientos y/o recursos que se emplean para llevar a cabo una acción en específico, para desarrollar una técnica correcta, se requiere que previamente la persona adquiera un conocimiento y pueda practicar hasta obtener un nivel aceptable de habilidad.


    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Clasificación de la información.

    .row.cajon.tema13 
      .cajon.color-t11.p-4
        .row
          .col-lg-10 
            p La información es un concepto que puede abarcar muchas cosas, esto trae consigo una dificultad a la hora de analizarla, por lo que una buena opción es clasificarla.  
    
    .row.mt-5
      .col-lg-12
          p A continuación, puede explorar cada una las formas en las que se puede clasificar la información según la norma <b>ISO 27001.</b>
    

    .row.acor-t14.mt-5
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")                
          .row(titulo="Clasificación según el formato o medio:")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img12_tema1.svg', alt='Texto que describa la imagen')
                
            .col-md-6.mb-4.mb-md-0
              p 
                ul.mt-3
                  li 
                    i.fas.fa-check.lista-ul--color_t1
                    |  <b>nformación verbal: </b>sinformación recibida de manera verbal de la cual se deja un precedente para su seguimiento, este tipo de información no es muy recomendable en entornos empresariales.
                  li  
                    i.fas.fa-check.lista-ul--color_t1  
                    |  <b>Medio físico papel: </b>información impresa o escrita en papel, que debe ser archivada físicamente para su preservación.
                  li  
                    i.fas.fa-check.lista-ul--color_t1
                    |  <b>Correos electrónicos: </b> sabarca todo tipo de información enviada por este medio, sea solo texto o con componentes multimedia.
                  li  
                    i.fas.fa-check.lista-ul--color_t1
                    |  <b>Bases de datos: </b> grandes volúmenes de información que se guardan de forma digital en un formato o estructura en específico, que puede ser administrada y consultada mediante algún tipo de software de base de datos.
                  li  
                    i.fas.fa-check.lista-ul--color_t1
                    |  <b>Documentos electrónicos: </b> son documentos generados y almacenados en computadoras o dispositivos digitales sin copia física.
         
          .row(titulo="Clasificación según el grado de confidencialidad o sensibilidad: ")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img12_tema1.svg', alt='Texto que describa la imagen')
                
            .col-md-6.mb-4.mb-md-0
              p 
                ul.mt-3
                  li 
                    i.fas.fa-check.lista-ul--color_t1
                    |  <b>nformación verbal: </b>sinformación recibida de manera verbal de la cual se deja un precedente para su seguimiento, este tipo de información no es muy recomendable en entornos empresariales.
                  li  
                    i.fas.fa-check.lista-ul--color_t1  
                    |  <b>Medio físico papel: </b>información impresa o escrita en papel, que debe ser archivada físicamente para su preservación.
                  li  
                    i.fas.fa-check.lista-ul--color_t1
                    |  <b>Correos electrónicos: </b> sabarca todo tipo de información enviada por este medio, sea solo texto o con componentes multimedia.
                  li  
                    i.fas.fa-check.lista-ul--color_t1
                    |  <b>Bases de datos: </b> grandes volúmenes de información que se guardan de forma digital en un formato o estructura en específico, que puede ser administrada y consultada mediante algún tipo de software de base de datos.
                  li  
                    i.fas.fa-check.lista-ul--color_t1
                    |  <b>Documentos electrónicos: </b> son documentos generados

          .row(titulo="Según área de interés: ")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img12_tema1.svg', alt='Texto que describa la imagen')
                
            .col-md-6.mb-4.mb-md-0
              p Aunque no está definida como tal en la norma, la información puede ser clasificada según el área de interés o dependencia a la que esté asociada como, por ejemplo:
                ul.mt-3
                    li  
                      i.fas.fa-check.lista-ul--color_t1  
                      |  Académica
                    li  
                      i.fas.fa-check.lista-ul--color_t1
                      |  Procesos industriales
                    li  
                      i.fas.fa-check.lista-ul--color_t1
                      |  Financiera
                    li  
                      i.fas.fa-check.lista-ul--color_t1
                      |  Personal
          
          .row(titulo="Según la dependencia o área de trabajo: ")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img12_tema1.svg', alt='Texto que describa la imagen')
                
            .col-md-6.mb-4.mb-md-0
              p La información se clasifica según el área de la compañía en donde se produce, circula o que por su contenido es solo pertinente para una dependencia o área:
                ul.mt-3
                    li  
                      i.fas.fa-check.lista-ul--color_t1  
                      |  Contable
                    li  
                      i.fas.fa-check.lista-ul--color_t1
                      |  De proyectos
                    li  
                      i.fas.fa-check.lista-ul--color_t1
                      |  De contratación
                    li  
                      i.fas.fa-check.lista-ul--color_t1
                      |  De mantenimiento
                    li  
                      i.fas.fa-check.lista-ul--color_t1
                      |  De recursos humanos  

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Manejo y preservación de la información      
          
    .row.mt-3
        .col-lg-3
          figure
            img(src="@/assets/curso/temas/tema1/img13_tema1.svg", alt="alt")
        .col-lg-9
            p A continuación, se listan algunos aspectos generales asociados al sistema de gestión documental, como estructura presente dentro de las empresas para la gestión de la información:

    .row.mt-5
      .col-lg-12
        p Los siguientes son los algunos de los aspectos del sistema de gestión documental y su estructura:   


    LineaTiempoC.color-secundario(text-small).mt-5
      .row.align-items-center(titulo="Sistema de gestión documental").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema1/img14_tema1.svg' alt='').mb-4
        .col-lg-7
          h4 Sistema de gestión documental:
          p Es el conjunto de procedimientos, normas y políticas encaminadas a manejar, clasificar, conservar y mantener la información de la empresa en condiciones óptimas; abarcando documentos tanto físicos como digitales.

      .row.align-items-center(titulo="Acceso a la información").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema1/img15_tema1.svg' alt='').mb-4
        .col-lg-7
          h4 Acceso a la información:
          p 
            ul.mt-3
              li  
                i.fas.fa-check.lista-ul--color_t1  
                |  El sistema debe permitir el acceso a determinada información solo para quienes posean el rol y los permisos para hacerlo.
              li  
                i.fas.fa-check.lista-ul--color_t1
                |  El sistema tiene la obligación de ser ágil y permitir ubicar la información con prontitud.
              li  
                i.fas.fa-check.lista-ul--color_t1
                |  El sistema deberá llevar un control del uso de la información, creación, modificación y eliminación de esta.
      
      .row.align-items-center(titulo="Conservación de la información").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema1/img16_tema1.svg' alt='').mb-4
        .col-lg-7
          h4 Conservación de la información:
          p El sistema deberá proporcionar los espacios físicos y virtuales aptos para mantener y conservar la información, incluyendo elementos como discos duros, copias de seguridad, servidores, almacenamiento en la nube, folios, contenedores físicos, factores ambientales, eléctricos y de seguridad informática.
      
      .row.align-items-center(titulo="Alcance y caducidad de la información").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema1/img17_tema1.svg' alt='').mb-4
        .col-lg-7
          h4 Alcance y caducidad de la información:
          p El sistema debe establecer las políticas relacionadas al tiempo de validez y actualizaciones de la información; así como a la circulación de la misma y los tiempos de eliminación de este, si es el caso.
      
      .row.align-items-center(titulo="Clasificación").p-4
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema1/img18_tema1.svg' alt='').mb-4
        .col-lg-7
          h4 Clasificación
          p El sistema permite clasificar la información según los criterios propios de la empresa. La información debe ser codificada (rotulada) y se debe utilizar una nomenclatura estandarizada, que permita su fácil ubicación y gestión.
      
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [],
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
