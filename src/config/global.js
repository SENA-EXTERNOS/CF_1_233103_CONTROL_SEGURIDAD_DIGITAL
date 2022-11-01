export default {
  global: {
    componenteFormativo:
      'Recolección de información para la seguridad digital.',
    descripcionCurso:
      'En los procesos corporativos, incluidos los relacionados con la seguridad digital, la gestión de la información se convierte en un aspecto crítico, para garantizar la eficiencia e integridad en los procesos digitales, por ese motivo es fundamental desarrollar habilidades relacionadas con la obtención y manejo de la información acorde a las necesidades y normativas aplicadas en la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos y teoría de la información.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Definiciones básicas: información, datos, metodología, instrumentos, comunicación.',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de la información.',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Manejo y preservación de la información',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodología para la recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas para la recolección de información',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Instrumentos para la recolección de información',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodologías para la planificación de actividades.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Metodología Ágil',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Metodología en cascada',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Metodología de ruta crítica',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos metodología JAP',
      referencia:
        'Balda, M. V., & Vicenzi, A. L. (1997). JAD-CASE: Administrador de flujo de tareas y documentos para la especificación de requerimientos.',
      tipo: 'articulo web',
      link:
        'https://repositoriosdigitales.mincyt.gob.ar/vufind/Record/SEDICI_f725367834a083e25a5b484028c6a294#:~:text=JAD%20es%20una%20metodolog%C3%ADa%20estructurada,an%C3%A1lisis%20y%20dise%C3%B1o%20de%20sistemas',
    },
    {
      tema: 'Manejo de formularios Google',
      referencia:
        'Saber programas. [Sabser programas] (12 de agosto 2020). <em>Cómo usar GOOGLE FORMS [ formularios paso a paso] [Video]. Youtube.</em>',
      tipo: 'Video web',
      link:
        'https://www.youtube.com/watch?v=PrnH8qLuf1Y&ab_channel=SaberProgramas',
    },
    {
      tema: 'Técnicas para una comunicación efectiva',
      referencia:
        'Da Silva, D. (3 diciembre 2020). Comunicación efectiva: qué es y cómo usarla para mejorar tus ventas. Blog de Zendesk.',
      tipo: 'Articulo web',
      link:
        'https://www.zendesk.com.mx/blog/comunicacion-efectiva-que-es/#:~:text=La%20comunicaci%C3%B3n%20efectiva%20se%20define,lo%20que%20se%20ha%20transmitido',
    },
  ],
  glosario: [
    {
      termino: 'Confidencial',
      significado:
        'Son aquellos elementos que por su contenido e importancia deben ser de conocimiento y manejo de un grupo limitado de personas.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Proceso por el cual se transfiere la información desde un transmisor hacia un receptor, que en ambos casos puede ser humano o máquina.',
    },
    {
      termino: 'Desglose',
      significado:
        'Acción de descomponer un elemento, en partes más pequeñas para facilitar su entendimiento y análisis.',
    },
    {
      termino: 'Digital',
      significado:
        'Concepto que abarca toda la información que es obtenible, observable y modificable a través de dispositivos tecnológicos.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Procedimiento para recopilar información de otras personas, mediante una serie de preguntas formuladas para obtener datos relativos a una o más temáticas en específico.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Útil para obtener información mediante comunicación oral entre dos partes, un entrevistador (hace las preguntas) y una parte entrevistada (las responde).',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto de datos organizados que según el contexto, adquieren un sentido y transmiten algo a quien la recibe.',
    },
    {
      termino: 'Instrumento',
      significado:
        'Es una herramienta o recurso, que puede ser tanto físico como digital para recolectar información.',
    },
    {
      termino: 'Metodología',
      significado:
        'Es el conjunto de pasos y actividades preestablecidas para llevar a cabo una tarea siguiendo una serie de parámetros.',
    },
    {
      termino: 'Seguridad',
      significado:
        'Es el conjunto de normas y prácticas encaminadas a proteger la información, de manera que sea bien conservada, accesible y modificada por quienes tengan los permisos para hacerlo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balda, M. V., & Vicenzi, A. L. (1997). JAD-CASE: Administrador de flujo de tareas y documentos para la especificación de requerimientos. ARG-UNLP-TDG-0000000075. Tesis de grado. Universidad Nacional de La Plata. SEDICI.',
      link: 'http://sedici.unlp.edu.ar/handle/10915/2158',
    },
    {
      referencia:
        'Bermúdez, R. (2017). ¿Cómo utilizar el método de observación? Sistema de Guías para la observación del desempeño profesional docente. GRIN.',
      link: 'https://www.grin.com/document/365349',
    },
    {
      referencia:
        'Chiavenato, I. (2007). Introducción a la teoría general de la administración 7ª edición. McGraw Hill.',
      link:
        'https://esmirnasite.files.wordpress.com/2017/07/i-admon-chiavenato.pdf',
    },
    {
      referencia:
        'Czinkota, M., Kotabe, M. (2001). Administración de Mercadotecnia Segunda Edición. International Thomson Editores.',
      link: '',
    },
    {
      referencia:
        'Díaz, L. (2011). La observación. Facultada de Psicología UNAM.',
      link:
        'http://www.psicologia.unam.mx/documentos/pdf/publicaciones/La_observacion_Lidia_Diaz_Sanjuan_Texto_Apoyo_Didactico_Metodo_Clinico_3_Sem.pdf',
    },
    {
      referencia:
        'El modelo en cascada: desarrollo secuencial de software. (2019). El modelo en cascada: desarrollo secuencial de software. Digital Guide IONOS.',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/el-modelo-en-cascada/',
    },
    {
      referencia:
        'Ferrell O. y Hirt G. (2004). Introducción a los Negocios en un Mundo Cambiante. Cuarta Edición. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Características necesarias para una buena calidad de la información. (2016).PowerData',
      link:
        'https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/caracteristicas-necesarias-para-una-buena-calidad-de-la-informacion#:~:text=Tanto%20en%20nuestro%20mundo%20tecnol%C3%B3gico,%2C%20oportunidad%2C%20relevancia%20y%20comprensibilidad.',
    },
    {
      referencia:
        'ISO 27001 ¿Cómo se debe realizar la clasificación de la información? (2017, septiembre 14). Seguridad de la información.',
      link:
        'https://www.pmg-ssi.com/2017/09/iso-27001-clasificacion-de-la-informacion-2/',
    },
    {
      referencia:
        'Thompson, I. (2014). Conozca cuál es la definición de información desde distintos puntos de vista. Promonegocios.net.',
      link:
        'https://www.promonegocios.net/mercadotecnia/definicion-informacion.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
