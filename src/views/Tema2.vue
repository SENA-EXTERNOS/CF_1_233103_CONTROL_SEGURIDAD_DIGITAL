<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodología para la recolección de información

    .row.cajon.tema13
      .col-lg-12
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/icon1_tema2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Información de calidad
                  p.text-small Para conocer a detalle sobre cuáles son las características de una información de alta calidad, ver el siguiente documento.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Técnicas para la recolección de información    
    
    .row
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1_tema2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A continuación, se describen los métodos más comunes que se aplican con frecuencia en el entorno laboral y científico para obtener información.
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.1.1 Observación  
    
    .row
      .col-lg-12
        p La observación es tal vez el proceso más común e intuitivo en cual se puede obtener información, a través del planteamiento de interrogantes iniciales o, en otros casos, encontrando pistas claves sobre el objeto, aspecto o situación de la que se requiere información. A continuación, algunas pautas sobre cómo aplicar el método de la observación.
    
    .tarjeta.tarjeta--gris.p-4.mt-5
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.mt-3 Según lo presenta Bermúdez (2017), la observación no encaja en el término de percibir, ya que para llevarla a cabalidad debe ser sinónimo de pensar; el proceso de observación debe ir más allá de simplemente ver y hacer un registro de lo visto, exige una revisión más rigurosa y capaz de abarcar puntos relevantes, que no suelen ser tomados en cuenta a simple vista.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2_tema2.svg', alt='Texto que describa la imagen')
              
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.mt-3 Observación indirecta, cuando el observador conocerá el objeto de observación a través de datos de otras fuentes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img3_tema2.svg', alt='Texto que describa la imagen')
        
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Observación directa, cuando el observador está en contacto y/o presencia del objeto de observación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img4_tema2.svg', alt='Texto que describa la imagen')
       
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p En el proceso de observar intervienen tres elementos: el ‘observador’, el ‘objeto’ y el ‘instrumento’; mediante la observación deberá tener definidos los otros dos aspectos, primero deberá tener claridad sobre lo que observará o por lo menos qué desea encontrar (objeto) y la manera o recurso (instrumento) que utilizará para registrar y almacenar la información recolectada.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img5_tema2.svg', alt='Texto que describa la imagen')
        
    
    .row.cajon.tema13.mt-5
      .col-lg-12
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/icon2_tema2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Pasos para la observación 
                  p.text-small Para reconocer el procedimiento para recolectar información a través de la observación y con detalle los pasos que debe realizar en el proceso de observación, ver el documento.   
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .row
      .col-lg-12
        p <b>Encuestas y entrevistas</b>
        p.mt-5 Las entrevistas y las encuestas son dos métodos a través de los cuales se puede obtener información de un público objetivo, la diferencia entre ambas radica en la manera como se registraron las respuestas del encuestado o entrevistado. La encuesta suele contener preguntas cerradas con opciones de respuesta cortas tipo si/no u opciones; mientras que, en una entrevista, las respuestas suelen ser de un carácter más abierto y la valoración de estas dependerá en cierta medida, del criterio de quien realiza la entrevista. Para preparar una entrevista o encuesta tenga en cuenta:
    
    .tarjeta.tarjeta--azul.p-4.mt-5
      SlyderA(tipo="b")
        .row
          .col-md-8
            p  <b>Determinar los objetivos de la Entrevista/ Encuesta.</b>
            p.mt-3 Definir el o los objetivos ¿qué se desea obtener al realizar la encuesta /entrevista?  
          
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img6_tema2.svg', alt='Texto que describa la imagen')
          
        .row
          .col-md-8
            p  <b>Formular previamente las preguntas y respuestas para la encuesta, o solo las preguntas para la entrevista.</b>
            p.mt-3 La calidad de las respuestas que se obtengan, dependerá en gran parte de las preguntas que se formulen. Estas deben ser directas, cortas y fáciles de comprender para el entrevistado/encuestado; deben ayudar a responder los objetivos planteados y el qué, cómo, cuándo y quién.
          
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img7_tema2.svg', alt='Texto que describa la imagen')
          
        .row
          .col-md-8
            p  <b>Seleccione el público objetivo, medio, momento y lugar adecuados para realizar la entrevista/encuesta.</b>
            p.mt-3 Es importante saber a quién o quienes se entrevistarán, su disponibilidad y relación con la temática a desarrollar. Poco sirven las preguntas bien elaboradas, si se realizan a personas que carecen de conocimiento sobre el tema.
          
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img8_tema2.svg', alt='Texto que describa la imagen')
          
        .row
          .col-md-8
            p  <b>Realizar la encuesta siguiendo los protocolos y normas básicas de comunicación.</b>
            p.mt-3 Presentarse de ser necesario, explicar el propósito y precisar las instrucciones para realizar la actividad antes de iniciar, verificar o solicitar los datos del encuestado/entrevistado y si está de acuerdo con realizar dicha actividad.
            p.mt-3 Tener una actitud adecuada para la situación es clave, la apariencia y lenguaje deben transmitir confianza, profesionalismo y respeto a la otra persona. El uso de palabras que motiven al entrevistado/encuestado a responder de manera clara y sincera a las preguntas, además se debe estar atento a contestar dudas o hacer aclaraciones durante el proceso, si es el caso, se recomienda brindar copia del cuestionario y respuestas.

          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img9_tema2.svg', alt='Texto que describa la imagen')

        .row
          .col-md-8
            p  <b>Realice el análisis de la información recolectada.</b>
            p.mt-3 Con la información recolectada es importante realizar la organización y análisis, apoyándose en herramientas informáticas para realizar un estudio estadístico, creación de diagramas o  registrar las apreciaciones del proceso según sea el caso.
          
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img10_tema2.svg', alt='Texto que describa la imagen')  

        .row
          .col-md-8
            p  <b>Elaborar conclusiones finales e informe del proceso.</b>
            p.mt-3 Con la información obtenida y producto del análisis se deben realizar las correspondientes conclusiones, enfocadas en responder a los objetivos planteados y a enunciar qué puntos han quedado pendientes o las nuevas preguntas que han surgido como resultado del proceso de investigar, es necesario plantearlas dentro de un informe que siga los estándares de la organización, donde además se pueda documentar y contar el proceso que se realizó para llegar a las mencionadas conclusiones.

          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img11_tema2.svg', alt='Texto que describa la imagen') 
    
    .row.mt-5
      .col-lg-12
        p <b>Metodología JAD</b>
        p.mt-5 Esta metodología se implementa principalmente para el desarrollo de software, pero su procedimiento es aplicable al proceso de obtención de información.

    .row
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img12_tema2.svg', alt='Texto que describa la imagen') 
    
      .col-lg-8
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-small.bloque-texto-f__texto.color-cajon-t1 JAD es una metodología estructurada para la definición de objetivos, requerimientos y diseño externo que expande el rol de los usuarios, característica que la destaca de las otras técnicas de análisis y diseño de sistemas.
    
    
    .row.mt-5
      .col-lg-12
        p A continuación, se describe en qué consiste esta metodología:

    .row.mt-5
      .col-lg-12
        SlyderB.mb-5(:datos="datosSlyder")
    
    .row.mt-5
      .col-lg-12
        p <b>Pruebas y Cuestionarios</b>
        p.mt-5 La formulación de preguntas es una herramienta básica para la recolección de información, el éxito de este método dependerá principalmente de cómo se formulan los diferentes cuestionamientos.
        p.mt-5 Las siguientes son algunas pautas y datos útiles sobre el tema:
   
    .row.mt-5
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Preguntas Cerradas: ")
            .col-md-12.mb-4.mb-md-0
              p son determinadas por el diseñador del cuestionario, y se asocian respuestas que usan dinámicas tipo: si/no, Verdadero y Falso, selección múltiple (A, B, C, D) y con una sola respuesta, entre otros. Este tipo de preguntas facilita la automatización para el análisis estadístico y calificación de la prueba.
          
          .row(titulo="Preguntas abiertas: ")
            .col-md-12.mb-4.mb-md-0
              p La respuesta del usuario dependerá de su conocimiento del tema y su capacidad argumentativa, requiere de un revisor que las valide y realice el análisis de los datos, haciendo su automatización más compleja.
          
          .row(titulo="Preguntas interactivas:  ")
            .col-md-12.mb-4.mb-md-0
              p Involucran el uso de tecnologías para implementar cuestionarios interactivos con material multimedia, uso de micrófono y reconocimiento de voz; dinámicas como asociación de términos, apareamiento, movimiento de bloques didácticos, búsqueda de diferencias, entre otras. 
            
      .col-lg-5
         figure
          img(src='@/assets/curso/temas/tema2/img18_tema2.svg', alt='Texto que describa la imagen') 
    
    .row.cajon.tema13.mt-5 
      .cajon.color-t2.p-4
        .row
          .col-lg-10 
            p <b>Procedimiento para implementación:</b> los pasos son bastante similares a los expuestos en métodos anteriores, se recomienda que el orden sea:


   
   
    //beto
    
    

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Herramientas de hardware y software


    .row.mt-5
      .col-lg-8            
        p.mb-0 Para prevenir estos ataques informáticos se hace necesario el uso de una poderosa infraestructura de TI que ayude a detectar y frenar amenazas. En este ítem se describen algunos elementos que son parte de la infraestructura de TI para detectar y frenar amenaza.
        p.mt-3 La seguridad informática y la seguridad de la información están encargadas de proteger los datos contra robo de información, acceso no autorizado, obstaculización al sistema informático, manipulación y/o eliminación de datos. Cuando se habla de procesos empresariales impulsados en la transformación digital con tecnología de punta, se entiende que están expuestos a diferentes vulnerabilidades, amenazas y ataques informáticos dirigidos a la seguridad y la privacidad de la información. Mediante la norma ISO 27001, la implementación del SGSI sigue el modelo Planificar – Hacer – Verificar – Actuar, para la mejora continua de los procesos.
      .col-lg-4
         img(src="@/assets/curso/temas/tema2/img5_tema2.svg", alt="alt")

    .row.mt-3
      .col-lg-12
        p Sin embargo, la seguridad para las empresas es un tema cada vez más crítico y de preocupación constante, debido a que los ciberataques pueden ser tan catastróficos como un robo, explosión o un incendio.

    .row.mt-3
      .col-lg-12
        p Algunos elementos que son parte de la infraestructura de TI para detectar y frenar amenazas son:
   
    .row.mt-5
      .col-lg-12
        SlyderB.mb-5(:datos="datosSlyder2")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Eventos e incidentes

    .row
      .col-lg-12
        p Para finalizar el tema de estudio en este componente, es necesario definir los eventos e incidentes que permiten documentar los diferentes casos asociados a riesgos, amenazas detectadas o daños causados en el sistema de información de la empresa, cómo se describe a continuación.      

    .row.mt-5
      .col-lg-5              
        img(src="@/assets/curso/temas/tema2/img11_tema2.svg", alt="alt")
      .col-lg-7
         p.mb-0 Las normas y los sistemas de gestión relacionan la “gestión de incidencias” como medida a las interrupciones que se puedan presentar en los procesos de negocio; los términos más utilizados son los <b>eventos y los incidentes.</b>
         p.mt-3 Por evento se entiende como un cambio que no genera resultados negativos, es decir, el evento no trae implicaciones negativas, de este modo, puede ser usado como una expresión neutral, por el contrario, el incidente si representa resultados negativos, y pueden verse como las interrupciones o desmejoramiento en la calidad de los servicios prestados a los usuarios. Los incidentes deben atenderse mediante la estructura de gestión de incidencias.
    
    .row.mt-5
      .col-lg-12
         p.mb-0 Según la norma ISO 27001 el incidente genera un impacto de las operaciones de la seguridad de la información, según el nivel de afectación se pueden clasificar los incidentes según el impacto generado como: 


    .row.justify-content-center.mb-5.mt-5
        .col-8.col-lg-4.mb-4
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img.bgr-tarjeta-4
              figure
                img(src="@/assets/curso/temas/tema2/img122_tema2.svg", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Confidencial 
              p.mb-0 Reserva de la información.
              <br>
              <br>
              <br>
              <br>



        .col-8.col-lg-4.mb-4
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/img133_tema2.svg", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Integridad
              p.mb-0 Información completa sin alteraciones.             
              <br>
              <br>
              <br>

        .col-8.col-lg-4.mb-4
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/img134_tema2.svg", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Disponibilidad
              p.mb-0 Garantizar el acceso a las personas con los permisos o credenciales requeridas.
              <br>
              <br>
              <br>
                   

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Joint Application Development, o en español desarrollo conjunto de aplicación o JAD,  es un método centrado en el trabajo en equipo para  definir los requerimientos de un sistema de información, y a partir de esto, realizar el diseño y desarrollo del mismo, en el proceso deben intervenir expertos y los clientes o usuarios del futuro sistema',
        imagen: require('@/assets/curso/temas/tema2/img13_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sus características son:',
        texto: '',
        imagen: require('@/assets/curso/temas/tema2/img14_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Los objetivos del método JAD son:',
        texto: '',
        imagen: require('@/assets/curso/temas/tema2/img15_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ventajas del Modelo JAD',
        texto: '',
        imagen: require('@/assets/curso/temas/tema2/img16_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Desventajas del modelo JAD',
        texto: '',
        imagen: require('@/assets/curso/temas/tema2/img17_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Software antivirus',
        texto:
          'En cualquier caso, todos los computadores que estén conectados a una red interna o internet, deben contar con un antivirus gratuito o pago pero que sea confiable. Estos programas permiten contar con medidas de protección efectivas cuando el equipo se encuentre expuesto a software malicioso o cualquier otro tipo de malware; Estos programas ofrecen la oportunidad de eliminarlo por completo o poner en estado de cuarentena. Kaspersky, Avast, Nod32, McAfee, son algunas de las posibilidades que se pueden encontrar en el mercado actual, lo más importante es que cualquier solución de antivirus en la que el usuario quiera confiar, debe tener la certeza que se adapte a las necesidades de seguridad y cuentan con actualizaciones constantes, debido a que los malware están en continua evolución.',
        imagen: require('@/assets/curso/temas/tema2/img6_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Firewall perimetral de red',
        texto:
          'Como su nombre lo indica, hace la función de una pared de bloqueo. Es un sistema cuya función es prevenir y proteger la privada de ataques de otras redes. Su funcionamiento es sencillo: escanea los paquetes de red, permitiéndoles o bloqueándolos según las reglas definidas por un administrador.',
        imagen: require('@/assets/curso/temas/tema2/img7_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Servidor proxy',
        texto:
          'Un proxy es un es un servidor, puede ser un programa o dispositivo físico, que actúa de intermediario entre conexiones del navegador e internet, filtrando todos los paquetes entre ambos. Así mismo, establece un sistema de autentificación, que limita el acceso a la red externa, por lo cual, se puede generar los registros sobre sitios, visitas, y demás datos de navegación.',
        imagen: require('@/assets/curso/temas/tema2/img8_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cifrado de punto final o end point disk encryption',
        texto:
          'Contiene el proceso para codificación de datos, de tal forma que no puedan ser leídos por agentes externos que no cuenten con la clave para decodificarlos. Es decir, genera protección de los sistemas operativos ante cualquier instalación o ejecución de agentes corruptos, logrando bloquear todos los archivos almacenados en el servidor, o cualquier otro punto final.',
        imagen: require('@/assets/curso/temas/tema2/img9_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Escáner de vulnerabilidades',
        texto:
          'Es un software que detecta puntos frágiles en los sistemas informáticos de las empresas, con el objetivo de analizarlos y gestionarlos, dando respuesta oportuna a cualquier evento desafortunado. Con este sistema se puede controlar las amenazas y consecuencias en los activos digitales, además de generar alertas en tiempo real, ayudando a solucionar incidentes sin que se llegue a comprometer el normal desarrollo de los procesos en las empresas.',
        imagen: require('@/assets/curso/temas/tema2/img10_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
