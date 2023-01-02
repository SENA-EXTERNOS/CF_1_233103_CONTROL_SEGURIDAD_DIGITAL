<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodología para la recolección de información

    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img1.svg")
      .col-lg-8
        p Existen diferentes metodologías para la recolección de información o datos, cada uno de ellos es un mecanismo e instrumento que se utiliza para reunir y medir información de forma organizada y con un objetivo específico. Usualmente estas metodologías se utilizan en investigación científica y empresarial, estadística y marketing.


    .row.cajon.tema13.mt-5
      .col-lg-12
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/icon1_tema2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Información de calidad
                  p.text-small Para introducirse en lo relacionado con las características de una información de alta calidad, explore el documento que aquí se propone. Haga estudio consciente del mismo y continúe con las temáticas del componente formativo.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/CF1_ANEXO1_información_de_calidad.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .row.cajon.tema13
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1_tema2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A continuación, se describen los métodos más comunes que se aplican, frecuentemente, en entornos laborales y científicos, con los cuales se obtiene información.

    .row.mt-5
      h3 Observación  
    
    .row
      .col-lg-12
        p La observación es, tal vez, el proceso más común e intuitivo con cual se puede obtener información, a través del planteamiento de interrogantes iniciales o, en otros casos, encontrando pistas claves sobre el objeto, aspecto o situación de la que se requiere información. 

        p A continuación, algunas pautas sobre cómo aplicar el método de la observación:

    .tarjeta.tarjeta--gris.p-4.mt-5
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.mt-3 Según Bermúdez (2017), la observación no encaja en el término de percibir, ya que, para llevarla a cabalidad, debe ser sinónimo de pensar; el proceso de observación debe ir más allá de simplemente ver y hacer un registro de lo visto; exige una revisión más rigurosa y capaz de abarcar puntos relevantes, que no suelen ser tomados en cuenta a simple vista.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2_tema2.svg', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p En el proceso de #[b observar] intervienen tres elementos: el ‘observador’, el ‘objeto’ y el ‘instrumento’; mediante la observación deberá tener definidos los otros dos aspectos, primero deberá tener claridad sobre lo que observará o por lo menos qué desea encontrar (objeto) y la manera o recurso (instrumento) que utilizará para registrar y almacenar la información recolectada.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img5_tema2.svg', alt='Texto que describa la imagen')
           
        
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p Observación directa: cuando el observador está en contacto y/o presencia del objeto de observación.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img4_tema2.svg', alt='Texto que describa la imagen')
       
        
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.mt-3 Observación indirecta: cuando el observador conocerá el objeto de observación a través de datos de otras fuentes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img3_tema2.svg', alt='Texto que describa la imagen')
        
    
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
                  p.text-small Aprópiese de los aspectos clave de la recolección de información a través de la observación; explore el documento que aquí se propone
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/CF1_Anexo2_pasos_de_la_observación.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .row
      .col-lg-12
        p <b>Encuestas y entrevistas</b>
        p.mt-5 Las entrevistas y las encuestas son dos métodos a través de los cuales se puede obtener información de un público objetivo. La diferencia entre ambas radica en la manera como se registraron las respuestas del encuestado o entrevistado. 
        p La encuesta suele contener preguntas cerradas con opciones de respuesta cortas tipo si/no u opciones; mientras que, en una entrevista, las respuestas suelen ser de un carácter más abierto y la valoración de estas dependerá, en cierta medida, del criterio de quien realiza la entrevista. 
        p Para preparar una entrevista o encuesta tenga en cuenta:

    .row
      .col-lg-12.bg-3
        .tarjeta.tarjeta--azul.p-4.mt-5
          SlyderA(tipo="b")
            .row
              .col-md-8
                p.color-intro <b>Determinar los objetivos de la Entrevista/ Encuesta.</b>
                p.mt-3 Definir el o los objetivos: ¿qué información concreta se desea obtener al realizar la encuesta /entrevista?

              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img6_tema2.svg', alt='Texto que describa la imagen')
              
            .row
              .col-md-8
                p.color-intro <b>Formulación previa de preguntas y respuestas (encuesta) o solo las preguntas (entrevista).</b>
                p.mt-3 La calidad de las respuestas que se obtengan dependerá, en gran parte, de las preguntas que se formulen. 
                p Estas deben ser directas, cortas y fáciles de comprender para el entrevistado/encuestado; deben ayudar a responder los objetivos planteados y el qué, cómo, cuándo y quién.

              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img7_tema2.svg', alt='Texto que describa la imagen')
              
            .row
              .col-md-8
                p.color-intro <b>Selección de público objetivo, medio, momento y lugar, adecuados.</b>
                p.mt-3 Es importante saber a quién o quiénes se entrevistará, su disponibilidad y relación con la temática a desarrollar. 
                p Poco sirven las preguntas bien elaboradas, si se realizan a personas que carecen de conocimiento sobre el tema.

              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img8_tema2.svg', alt='Texto que describa la imagen')
              
            .row
              .col-md-8
                p.color-intro <b>Seguimiento de protocolos y normas básicas de comunicación.</b>
                p.mt-3 Presentarse, explicar el propósito, precisar instrucciones antes de iniciar, verificar o solicitar datos del encuestado/entrevistado y si está de acuerdo con realizar dicha actividad.
                p Mostrar actitud adecuada para la situación, ofrecer buena presentación, lenguaje justo, confianza, profesionalismo y respeto a la otra persona. 
                p Usar palabras motivadoras para responder la encuesta con honestidad y claridad; disposición para resolver dudas y hacer aclaraciones.

              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img9_tema2.svg', alt='Texto que describa la imagen')

            .row
              .col-md-8
                p.color-intro <b>Análisis de la información recolectada.</b>
                p.mt-3 Organizarla y analizarla, apoyándose en herramientas informáticas para realizar un estudio estadístico, creación de diagramas o registrar las apreciaciones del proceso según sea el caso.

              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img10_tema2.svg', alt='Texto que describa la imagen')  

            .row
              .col-md-8
                p.color-intro <b>Elaborar conclusiones finales e informe del proceso.</b>
                p.mt-3 Con la información obtenida y producto del análisis se deben realizar las correspondientes conclusiones, enfocadas en responder a los objetivos planteados y a enunciar qué puntos han quedado pendientes o las nuevas preguntas que han surgido como resultado del proceso de investigar. 
                p Es necesario plantearlas dentro de un informe que siga los estándares de la organización, donde además se pueda documentar y contar el proceso que se realizó para llegar a las mencionadas conclusiones.

              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img11_tema2.svg', alt='Texto que describa la imagen') 
    
    .row.mt-5
      .col-lg-12
        p <b>Metodología JAD</b>
        p.mt-5 Esta metodología se implementa, principalmente, para el desarrollo de software, pero su procedimiento es aplicable al proceso de obtención de información.

    .row.cajon.tema13.mt-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img12_tema2.svg', alt='Texto que describa la imagen') 
    
      .col-lg-8
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-small.bloque-texto-f__texto.color-cajon-t1 JAD es una metodología estructurada para la definición de objetivos, requerimientos y diseño externo que expande el rol de los usuarios, característica que la destaca de las otras técnicas de análisis y diseño de sistemas.
          p.text-small.bloque-texto-f__texto.color-cajon-t1.txt-cj2  <b>Según Balda y Vicenzi (1997):</b>
    
    .row.mt-3
      .col-lg-12
        p Tenga presentes las generalidades y aspectos clave que, sobre la metodología JAD, se muestran a continuación:

    .row.mt-5
      .col-lg-12
        SlyderB.mb-5(:datos="datosSlyder")
    
    .row.mt-5
      .col-lg-12
        p <b>Pruebas y Cuestionarios</b>
        p.mt-5 La formulación de preguntas es una herramienta básica para la recolección de información; el éxito de este método dependerá, principalmente, de cómo se formulan los diferentes cuestionamientos.
        p.mt-5 Las siguientes son algunas pautas y datos útiles para pruebas y cuestionarios:
   
    .row.mt-5
      .col-lg-7.bg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta--azul")
          .row(titulo="Preguntas Cerradas: ")
            .col-md-12.mb-4.mb-md-0
              p Son determinadas por el diseñador del cuestionario y se asocian respuestas que usan dinámicas tipo: si/no, verdadero y falso, selección múltiple (A, B, C, D) y con una sola respuesta, entre otros. Este tipo de preguntas facilita la automatización para el análisis estadístico y calificación de la prueba.

          .row(titulo="Preguntas abiertas: ")
            .col-md-12.mb-4.mb-md-0
              p La respuesta del usuario dependerá de su conocimiento del tema y su capacidad argumentativa; requiere de un revisor que las valide y realice el análisis de los datos, haciendo su automatización más compleja.

          .row(titulo="Preguntas interactivas:  ")
            .col-md-12.mb-4.mb-md-0
              p Involucran el uso de tecnologías para implementar cuestionarios interactivos con material multimedia, uso de micrófono y reconocimiento de voz; dinámicas como asociación de términos, apareamiento, movimiento de bloques didácticos, búsqueda de diferencias, entre otras. 

      .col-lg-5
         figure
          img(src='@/assets/curso/temas/tema2/img18_tema2.svg', alt='Texto que describa la imagen') 

    .row.mt-5
      p Sobre el procedimiento para implementación de pruebas y cuestionarios, tenga en cuenta el orden de los pasos que, por demás, son muy similares a los expuestos en métodos anteriores:
    
    .row.cajon.tema13.mt-5 
      .cajon.color-t2.p-4
        .row
          .col-lg-10 
            p <b>Procedimiento para implementación:</b> los pasos son bastante similares a los expuestos en métodos anteriores, se recomienda que el orden sea:


    .row.mt-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-fondo-anexo.p-4
          .row.justify-content-center.mb-5
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema2/imgT1_tema2.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mt-5 
                  p.mb-0 Identificar el(los) objetivo(s) que justifiquen la formulación y desarrollo de la prueba para obtener la información deseada.

        .tarjeta.color-fondo-anexo.p-4
          .row.justify-content-center.mb-5
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema2/imgT2_tema2.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mt-5  
                  p.mb-0 Reconocer la población o grupo de personas que desarrollarán la prueba y los recursos técnicos disponibles para su realización.

        .tarjeta.color-fondo-anexo.p-4
          .row.justify-content-center.mb-5
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema2/imgT3_tema2.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mt-5  
                  p.mb-0 Definir qué tipo de preguntas y bajo qué dinámicas o recursos se desarrollará el cuestionario.

        .tarjeta.color-fondo-anexo.p-4
          .row.justify-content-center.mb-5
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema2/imgT4_tema2.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mt-5
                  p.mb-0 Formular preguntas que ayuden a responder los objetivos establecidos y que sean compatibles con las dinámicas utilizadas.

        .tarjeta.color-fondo-anexo.p-4
          .row.justify-content-center.mb-5
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema2/imgT5_tema2.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mt-5 
                  p.mb-0 Realizar la prueba.

        .tarjeta.color-fondo-anexo.p-4
          .row.justify-content-center.mb-5
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema2/imgT6_tema2.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mt-5  
                  p.mb-0 Recolectar, organizar y analizar los resultados.

        .tarjeta.color-fondo-anexo.p-4
          .row.justify-content-center.mb-5
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema2/imgT7_tema2.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mt-5  
                  p.mb-0 Concluir a partir de los resultados obtenidos.

        .tarjeta.color-fondo-anexo.p-4
          .row.justify-content-center.mb-5
            .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema2/imgT8_tema2.svg", alt="alt")
                .crd_hover_txt--body
                  h4.mt-5
                  p.mb-0 Realizar informe de la prueba.
            
    //tarjeta-fin
    .row.mt-5
      .col-lg-12
        h4 Búsqueda en registros y bases de datos    
   
   
    .row.cajon.tema13.mt-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img19_tema2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A través de redes e internet puede acceder de manera remota a fuentes de información de calidad, que considere necesarias para las consultas académicas y de carácter técnico.
    
    .row.mt-5
      .col-lg-12
          p Las siguientes, son algunas opciones de búsqueda de información que se encuentran en la web.

    //beto   
    .row.justify-content-center.mb-5
      .col-lg-10.position-relative
        h3.mb-4.text-center.txt--purpura  
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-lg-auto.col-xs-8
              figure
                img(src="@/assets/curso/temas/tema2/img20_tema2.svg", alt="alt").img100
            .col-lg-9.col-xs-4
              h5 Las bases de datos
              p.txt-t2 Son grandes plataformas donde se puede acceder a información como artículos, revistas, libros de fuentes indexadas y algunas sobre temas específicos. Es importante tener algo de dominio del tema sobre el que se consulta.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-lg-auto.col-xs-12
              figure
                img(src="@/assets/curso/temas/tema2/img21_tema2.svg", alt="alt").img100
            .col-lg-9.col-xs-4
              p.txt-t22 <b><em>Google scholar</em></b>
              p.mt-3 Buscador de Google especializado en publicaciones de carácter académico sobre cualquier tema que se requiera.
              p.mt-3 <a href="https://scholar.google.com/" target="_blank"><b>https://scholar.google.com/</b></a>
        
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-lg-auto.col-xs-12
              figure
                img(src="@/assets/curso/temas/tema2/img24_tema2.svg", alt="alt").img100
            .col-lg-9.col-xs-4
              h5 #[i Mendeley]
              p.txt-t2.mt-3 Plataforma donde se accede a información de alto nivel académico sobre diversos temas. Se pueden encontrar libros, artículos y publicaciones científicas.
              p.txt-t2.mt-3 <a href="https://www.mendeley.com/?interaction_required=true" target="_blank"><b style="color:white">https://www.mendeley.com/?interaction_required=true</b></a>

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-lg-auto.col-xs-12
              figure
                img(src="@/assets/curso/temas/tema2/img23_tema2.svg", alt="alt").img100
            .col-lg-9.col-xs-4
              p.txt-t22 <b>Bases de datos públicas</b>
              p.mt-3 Las universidades e instituciones públicas poseen plataformas de consulta y bibliotecas virtuales de libre acceso con el fin de buscar todo tipo de información. Por ejemplo, sistema de bibliotecas Universidad Nacional de Colombia.
              p.mt-3 <a href="https://bibliotecas.unal.edu.co" target="_blank"><b>https://bibliotecas.unal.edu.co</b></a>
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-lg-auto.col-xs-12
              figure
                img(src="@/assets/curso/temas/tema2/img24_tema2.svg", alt="alt").img100
            .col-lg-9.col-xs-4
              h5 Biblioteca SENA
              p.txt-t2 Esta herramienta de búsqueda da acceso a libros, revistas, guías y producción académica, enfocada en la especialidad de la institución y la formación para el trabajo. Como aprendiz SENA podrá ingresar con el usuario y acceder desde allí a bases de datos de diferentes temáticas y editoriales, mundialmente reconocidas.
              p.txt-t2.mt-3 <a href="https://biblioteca.sena.edu.co/" target="_blank"><b style="color:white">https://biblioteca.sena.edu.co/</b></a>
    //beto-fin
    .row.mt-5
      .col-lg-l12
        h5 Otros métodos

    .row.cajon.tema13.mt-5 
      .cajon.color-t2.p-4
        .row
          .col-lg-10 
            p Algunas recomendaciones sobre las fuentes de información, presentes en la web, que no tienen un carácter tan formal y científico como las mencionadas con anterioridad, se listan a continuación. 
            p Importante considerar que, al ser usadas correctamente, pueden dar información valiosa.
            ul.mt-3
                  li 
                    i.fas.fa-check.lista-ul--color_t1
                    |  Verifique que los artículos citan referencias e incluya una bibliografía verificable.
                  li  
                    i.fas.fa-check.lista-ul--color_t1  
                    | Compare la información sobre un mismo tema entre 2 o más fuentes para verificar que no existan contradicciones.
                  li  
                    i.fas.fa-check.lista-ul--color_t1
                    |  Revise fechas de publicación, procure no usar información muy antigua.
                  li  
                    i.fas.fa-check.lista-ul--color_t1
                    | Cualquier dato que vaya en contra de algún procedimiento o concepto técnico, científico o de seguridad, no es confiable.

    .row.mt-5
      .col-lg-12
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/icon3_tema2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Fuentes en la red
                  p.text-small Amplíe su conocimiento de los aspectos más importantes sobre los métodos de recolección de información, explorando el documento que aquí se propone.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/CF1_anaexo3_fuentes_en_la_red.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download          
    
    .row.mt-5
      .col-lg-12
        h5 Buenas prácticas para la comunicación oral y escrita.  
        p.mt-3 Para que en la organización la comunicación sea asertiva, es necesario crear en el personal hábitos de buenas prácticas para comunicarse.  
    
    .row.mt-5
      .col-lg-4 
        img(src="@/assets/curso/temas/tema2/img25_tema2.svg", alt="alt")           
      .col-lg-8
         p.mb-0 La comunicación asertiva es fundamental para los buenos procesos dentro de la organización, sobre todo en lo relativo a recolección y manejo de la información. Por tanto, es necesario crear en el personal, hábitos de buenas prácticas para comunicarse. 

    .row.mt-5
      p Para garantizar una comunicación asertiva en la organización, es necesario crear en el personal hábitos de buenas prácticas para expresarse.

      p Hacer clic en cada uno de los puntos para conocer la descripción de las buenas prácticas.
      
    .row.titulo-T3-9.mt-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1
          p <em>Buenas prácticas para la comunicación oral y escrita</em> 
    
    ImagenInfografica.color-primario.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img26_tema2.svg', alt='Texto que describa la imagen')
          

      .tarjeta.color-acento-botones-puntos.p-3(x="55%" y="11%" numero="")
        p Comunicación según Da Silva (2020), es un mensaje que se comparte, recibe y comprende sin alterar su objetivo final. Es decir, el emisor y el receptor interpretan el mismo significado. De esta manera, se evitan dudas y confusiones, mientras que se cumplen las expectativas sobre lo que se ha transmitido.

      .tarjeta.color-acento-botones-puntos.p-3(x="72%" y="35%" numero="")
        p #[b Usar los formatos y protocolos establecidos por la empresa]
        p Cada empresa debe tener ya diseñados sus instrumentos para la comunicación y recolección de información, procurar el uso de material oficial de la empresa, si este no existe, proponer un diseño e implementación.

      .tarjeta.color-acento-botones-puntos.p-3(x="65%" y="71%" numero="")
        p #[b Se debe ser formal]
        p Usar buenos modales al dirigirse a otros, llevar control y concretar los tiempos, usar el correo institucional o los medios dispuestos por la empresa, explicar los motivos de su búsqueda a quienes solicite algún tipo de colaboración. Todo esto, evitará malos entendidos y afectar otros procesos.

      .tarjeta.color-acento-botones-puntos.p-3(x="36%" y="68%" numero="")
        p #[b Cuidar la redacción y ortografía]
        p Antes de enviar un documento o correo, verificar lo escrito, leer atentamente y pensar si será entendido fácilmente por la otra persona.

      .tarjeta.color-acento-botones-puntos.p-3(x="28%" y="32%" numero="")
        p #[b Usar los canales de comunicación adecuado]
        p Se debe evitar el abuso de las llamadas, WhatsApp y líneas personales de otros. Sí implementar el uso de los canales oficiales establecidos por la empresa.

      .tarjeta.color-acento-botones-puntos.p-3(x="45%" y="43%" numero="")
        p #[b Disposición]
        p La comunicación incluye actitud, nivel y tono de voz, vocabulario, postura, gestos, calidad.

    .row.mt-5
      h3 Instrumentos para la recolección de información 
    
    .row.cajon.tema13 
      .cajon.color-t11.p-4
        .row
          .col-lg-10 
            p Habiendo definido y asimilado los instrumentos, herramientas y formatos establecidos para la recolección de información, amplíe el concepto y conozca nuevas pautas sobre las buenas prácticas relacionadas a su diseño e implementación.

    .row.mt-5
      .col-lg-12
     
    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        p #[b Tipos de instrumentos:]z para facilitar el análisis y la apropiación de los instrumentos es importante estos se clasifiquen según:
        figure
          img(src="@/assets/curso/temas/tema2/img27_tema2.svg", alt="alt")
      .col-lg-8
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="El área de uso: ") 
            ul
              li 
                i.fas.fa-check.lista-ul--color_t1
                |  Administrativos.
              li  
                i.fas.fa-check.lista-ul--color_t1  
                | Para adquirir información o para fines de investigación.
              li  
                i.fas.fa-check.lista-ul--color_t1
                |  De control: formatos y recursos para el control de procesos.

          p(numero="2" titulo="El medio de implementación: ")
            ul
              li 
                i.fas.fa-check.lista-ul--color_t1
                |  <b>Físicos: </b>su uso y almacenamiento es normalmente físico, es decir, sobre papel y puede ser digitalizable o no.
              li  
                i.fas.fa-check.lista-ul--color_t1  
                | <b>Digitales: </b>se usan y almacenan de manera digital a través de un computador o dispositivo similar.
         
          p(numero="3" titulo="El nivel de asociación: ") 
            ul
              li 
                i.fas.fa-check.lista-ul--color_t1
                |  <b> Agrupados: </b>Hace parte de un sistema más complejo, es parte de una serie de instrumentos para realizar una tarea.
              li  
                i.fas.fa-check.lista-ul--color_t1  
                | <b>Aislados: </b>por sí solo es concluyente no necesita ser complementado por otros.
    .row.mt-5
      .col-lg-12
        p.mt-3 Para el diseño de instrumentos se requieren algunas consideraciones similares a las aplicadas en las técnicas para recolección de información. El punto, ahora, es plasmar todo esto en un documento o una estructura lista para ser implementada.

        p.mt-5 Para la generación de instrumentos pertinentes y de fácil manejo, tenga en cuenta:

    TabsC.color-acento-contenido.mt-5
      .py-3.py-md-4(titulo="Planeación y diseño")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img28_tema2.svg', alt='Texto que describa la imagen')
            
          .col-md-6.mb-4.mb-md-0
            h4 Planeación y diseño
            p Idear o seleccionar el instrumento adecuado para cada situación, teniendo en cuenta aspectos como recursos, disponibilidad, tiempo, confidencialidad, agilidad y nivel de complejidad. 

      .py-3.py-md-4(titulo="Normativa, compatibilidad e imagen institucional")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img29_tema2.svg', alt='Texto que describa la imagen')

          .col-md-6
            h4 Normativa, compatibilidad e imagen institucional
            p Diseñar instrumentos que sean compatibles con las normas y procesos de la empresa y donde se use correctamente su imagen.
            
      .py-3.py-md-4(titulo="Eficiencia")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img30_tema2.svg', alt='Texto que describa la imagen')
          .col-md-6
            h4 Eficiencia
            p Al diseñar un instrumento o aplicar alguna técnica ya establecida, considere que esta debe ser clara y su implementación no deberá requerir ni más tiempo, ni recursos adicionales, ni trabajo más allá del necesario.

      .py-3.py-md-4(titulo="Eficacia")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img31_tema2.svg', alt='Texto que describa la imagen')
             
          .col-md-6
            h4 Eficacia
            p El instrumento debe cumplir el objeto de su implementación, en el caso de conseguir información, presentar la mayor cantidad y calidad de información posible, de manera que permita cumplir con los objetivos de su búsqueda.
            
      .py-3.py-md-4(titulo="Elementos esenciales")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img32_tema2.svg', alt='Texto que describa la imagen')
            
          .col-md-6
            h4 Elementos esenciales
            p Es importante incluir en él, campos que permitan establecer datos como fechas, ubicaciones, persona que ejecuta, personas implicadas en el uso del instrumento, objetivo o propósito y resultados, estos puntos permitirán hacer seguimiento y servir como soporte e insumo de su trabajo.
    .row.mt-5
      .col-lg-12
        p.mt-3 Para la generación, aplicación e implementación de instrumentos, es clave contar con herramientas suficientes y actualizadas. Algunas de las más usadas y comunes, se enuncian a continuación:

    .row.mt-5
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img33_tema2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla-1.p-4
            h2.text-center.txt-t2.mt-5 <em>Suite Microsoft Office:</em>
            p.text-center.txt-t2 La más conocida de la lista la <em>Suite de office</em> incluye los programas usados en las empresas para procesar textos <em>(Word),</em> elaborar diapositivas <em>(Power Point),</em> realizar piezas gráficas <em>(Publisher),</em> entre otras; pero se destaca el uso de <em>Excel</em> para la creación de tablas, formatos y procesamiento estadístico.  También incluye Teams para videoconferencias, además <em>OneDrive</em> para almacenamiento en la nube y trabajo en documentos en línea.

      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img34_tema2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla-1.p-4
            h2.text-center.txt-t2.mt-5 <em>Google Apps: </em>
            p.text-center.txt-t2 Para hacer uso de las <em>Apps de Google,</em> basta con poseer una cuenta de correo electrónico, aunque algunas funcionalidades requieren de licencia, se destaca <em>Google Drive</em> como una herramienta para almacenamiento en la nube, su integración con <em>Google docs</em> es útil en trabajo cooperativo en tiempo real, la creación de formularios, siendo necesarios en la realización de encuestas, cuestionarios, formularios y alimentar información estadística.
        
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img35_tema2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla-1.p-4
            h2.text-center.txt-t2.mt-5 <em>Herramientas para diseño de piezas gráficas y material visual: </em>
            p.text-center.txt-t2 Se destacan herramientas con versión gratuita y en línea como <em>‘Canva y Piktochart’</em> las cuales son opciones interesantes para la creación de infografías, material visual de instrumentos e informes diferentes a las tradicionales de <em>Office</em> y similares. 
            p.text-venter.txt-t2.mt-3 En versiones con licencia se encuentran las aplicaciones de <em>Adobe,</em> las cuales se ubican entre las más eficientes para el desarrollo de instrumentos con alto contenido visual. 

   



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          '<em>Joint Application Development</em> o, en español, desarrollo conjunto de aplicación, es un método centrado en el trabajo en equipo para definir los requerimientos de un sistema de información y, a partir de esto, realizar el diseño y desarrollo del mismo. En el proceso deben intervenir expertos y los clientes o usuarios del futuro sistema.',
        imagen: require('@/assets/curso/temas/tema2/img13_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sus características son:',
        texto:
          '<ul><li> <i class= "fas fa-check lista-ul--color_t1"> </i> Grupos de trabajo con roles definidos, conformados inicialmente por expertos en el tema.  </li> <li><i class= "fas fa-check lista-ul--color_t1"> </i> Se trabaja mediante sesiones o talleres con una agenda y objetivos especificados previamente y un calendario del proceso.</li> <li><i class= "fas fa-check lista-ul--color_t1"> </i>La comunicación y el trabajo en equipo son fundamentales para llegar a resultados.</li></ul>',
        imagen: require('@/assets/curso/temas/tema2/img14_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Los objetivos del método JAD son:',
        texto:
          '<ul><li> <i class= "fas fa-check lista-ul--color_t1"> </i>Acelerar los tiempos en la fase de diseño.</li> <li><i class= "fas fa-check lista-ul--color_t1"> </i> Tener un resultado final más aproximado a lo deseado por el usuario al incluirlo en el equipo de trabajo. </li> <li><i class= "fas fa-check lista-ul--color_t1"> </i>Desarrollo incremental: la aplicación o resultado se va puliendo progresivamente hasta cumplir completamente con las necesidades del usuario.</li></ul>',
        imagen: require('@/assets/curso/temas/tema2/img15_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ventajas del Modelo JAD',
        texto:
          '<ul><li> <i class= "fas fa-check lista-ul--color_t1"> </i> Levantamiento de los requerimientos del usuario. </li> <li><i class= "fas fa-check lista-ul--color_t1"> </i> Mejoras progresivas y productos preliminares más rápidos. </li> <li><i class= "fas fa-check lista-ul--color_t1"> </i> Análisis y diseño continuo, al requerir de un equipo de trabajo más amplio. </li></ul>',
        imagen: require('@/assets/curso/temas/tema2/img16_tema2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Desventajas del modelo JAD',
        texto:
          '<ul><li> <i class= "fas fa-check lista-ul--color_t1"> </i> Todos los participantes del equipo deben invertir una cantidad de tiempo considerable y, difícilmente, podrán realizar otras labores diferentes a las del método. </li> <li><i class= "fas fa-check lista-ul--color_t1"> </i> Requiere de un alto nivel de compromiso, cuando un miembro falla en su preparación y responsabilidades retrasa a todo el grupo. </li> <li><i class= "fas fa-check lista-ul--color_t1"> </i> El equipo requiere de un alto nivel de sincronización y trabajo en equipo; esto puede ocasionar dificultades cuando se está iniciando en la implementación de este método. </li></ul>',
        imagen: require('@/assets/curso/temas/tema2/img17_tema2.svg'),
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
