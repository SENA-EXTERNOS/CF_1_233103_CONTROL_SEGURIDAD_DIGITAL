export default {
  global: {
    componenteFormativo: 'Recolección de información para la seguridad digital',
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
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodología para la recolección de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodologías para la planificación de actividades.',
        desarrolloContenidos: true,
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
      tema: 'Fundamentos metodología JAD',
      referencia:
        'Balda, M. V., & Vicenzi, A. L. (1997). JAD-CASE: Administrador de flujo de tareas y documentos para la especificación de requerimientos.',
      tipo: 'Articulo web',
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
    {
      tema: 'Metodología para la recolección de información',
      referencia:
        'Canal USB. (2015). <i>Instrumentos para recolectar la información</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=P2jt6nrJBMM',
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
        'Chiavenato, I. (2007). <em>Introducción a la teoría general de la administración</em> 7ª edición. McGraw Hill.',
      link:
        'https://esmirnasite.files.wordpress.com/2017/07/i-admon-chiavenato.pdf',
    },
    {
      referencia:
        'Czinkota, M., Kotabe, M. (2001). <em>Administración de Mercadotecnia Segunda Edición</em>. International Thomson Editores.',
      link: '',
    },
    {
      referencia:
        'Díaz, L. (2011). <em>La observación</em>. Facultada de Psicología UNAM.',
      link:
        'http://www.psicologia.unam.mx/documentos/pdf/publicaciones/La_observacion_Lidia_Diaz_Sanjuan_Texto_Apoyo_Didactico_Metodo_Clinico_3_Sem.pdf',
    },
    {
      referencia:
        'Digital Guide IONOS. (2019) <em>El modelo en cascada: desarrollo secuencial de software</em>.',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/el-modelo-en-cascada/',
    },
    {
      referencia:
        'Ferrell O. y Hirt G. (2004). <em>Introducción a los Negocios en un Mundo Cambiante</em>. Cuarta Edición. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Thompson, I. (2014). <i>Conozca cuál es la definición de información desde distintos puntos de vista</i>. Promonegocios.net.',
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
