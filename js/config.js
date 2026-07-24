/* ============================================
   BYM CONSTRUCTORA - CONFIGURACIÓN CENTRALIZADA
   Datos de contacto, empresa, proyectos
   ============================================ */

const CONFIG = {
    // DATOS DE EMPRESA
    empresa: {
        nombre: 'Constructora y Proyectos B&M S.A.C.',
        ruc: '20604736421',
        eslogan: 'Proyectos sólidos, resultados reales',
        fundacion: 2022,
        gerente: 'Edwin Gonzalo Terrones Ramos',
        grupo: 'Grupo Zaragoza'
    },

    // CONTACTO
    contacto: {
        telefono: '902688168',
        whatsapp: '+51902688168',
        email: 'bymconstructorasac@gmail.com',
        direccion: '6237 San Ernesto, Lima, Provincia de Lima, San Ernesto, Los Olivos, Lima',
        horario: 'Lunes a Viernes: 9:00 AM - 6:00 PM'
    },

    // GPS UBICACIÓN
    ubicacion: {
        latitud: -11.8993898,
        longitud: -77.0434278,
        googleMapsUrl: 'https://maps.app.goo.gl/WXNKPWQeapTRAuaJ8'
    },

    // CERTIFICACIONES ISO
    certificaciones: {
        iso9001: {
            titulo: 'ISO 9001:2015',
            descripcion: 'Sistema de Gestión de Calidad',
            numero: 'SCC/INT/2512CR/22139',
            vigencia: '04.12.2026',
            pdf: 'docs/ISO_CALIDAD_9001_B_M.pdf'
        },
        iso45001: {
            titulo: 'ISO 45001:2018',
            descripcion: 'Seguridad y Salud en el Trabajo',
            numero: 'SCC/INT/2512CR/22141',
            vigencia: '04.12.2026',
            pdf: 'docs/ISO_SEGURIDAD_45001_B_M.pdf'
        },
        iso37001: {
            titulo: 'ISO 37001:2016',
            descripcion: 'Sistema Antisoborno',
            numero: 'SCC/INT/2512CR/22142',
            vigencia: '04.12.2026',
            pdf: 'docs/ISO_ANTISOBORNO_37001_B_M.pdf'
        },
        iso14001: {
            titulo: 'ISO 14001:2015',
            descripcion: 'Gestión Ambiental',
            numero: 'SCC/INT/2512CR/2512CR/22140',
            vigencia: '04.12.2026',
            pdf: 'docs/ISO_AMBIENTAL_14005_B_M.pdf'
        }
    },

    // PROYECTOS - ARRAY EDITABLE PARA AGREGAR MÁS
    // Estructura: {nombre, cliente, ubicacion, ano, descripcion, rubro, monto, image}
    // 
    projects: [   
       // BYM // EN TOTAL : 9
          {
             nombre: "Creación del Servicio de Movilidad Urbana - San Antonio de Padua",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Pasaje de la Asoc. de Vivienda San Antonio de Padua, Los Olivos, Lima",
             ano: 2024,
             descripcion: "Creación del servicio de movilidad urbana mediante infraestructura vial y peatonal en el pasaje de la Asociación de Vivienda San Antonio de Padua.",
             rubro: "Infraestructura Vial",
             image: "images/pista_2.jpg"
           },
           {
             nombre: "Mejoramiento de Movilidad Urbana - Jirón Chasquitambo",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Jirón Chasquitambo, cuadra 5 y 6, Los Olivos, Lima",
             ano: 2024,
             descripcion: "Mejoramiento del servicio de movilidad urbana mediante infraestructura peatonal integral: pistas, veredas accesibles, sardineles y áreas verdes.",
             rubro: "Infraestructura Peatonal",
             image: "images/pista_1.jpg"
           },

           {
             nombre: "Construcción de Veredas, Sardinel y Área Verde - Los Tulipanes y Los Jazmines",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Calle Los Tulipanes y Calle Los Jazmines, AA.HH Los Olivos de Pro, Los Olivos, Lima",
             ano: 2024,
             descripcion: "Construcción de veredas, sardineles y áreas verdes en calles Los Tulipanes y Los Jazmines, mejorando la accesibilidad y el entorno urbano.",
             rubro: "Infraestructura Peatonal",
             image: "images/vereda_3.jpg"
           },
           {
             nombre: "Mejoramiento de Espacios Públicos Urbanos - Parque Justicia",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Parque N° 02 'Justicia', AA.HH Los Jazmines del Naranjal, Los Olivos, Lima",
             ano: 2026,
             descripcion: "Mejoramiento integral de espacios públicos urbanos incluyendo áreas verdes, mobiliario urbano, iluminación y accesibilidad en el Parque Justicia.",
             rubro: "Proyectos Integrales",
             image: "images/parque_1.jpg"
           },
            
           {
             nombre: "Mejoramiento de Movilidad Urbana - AA.HH Municipal Chillón",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Calles internas del AA.HH Municipal Chillón, Los Olivos, Lima",
             ano: 2026,
             descripcion: "Mejoramiento de la movilidad urbana en calles internas del asentamiento humano Municipal Chillón, incluyendo pavimentación y señalización.",
             rubro: "Infraestructura Vial",
             image: "images/chillon_1.jpg"
           },
           {
             nombre: "Renovación de Pavimento y Señales de Tráfico - Calle Los Jazmines",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Calle Los Jazmines, desde Calle Aquia hasta Av. Universitaria, AA.HH Los Jazmines del Naranjal Sector 1, Los Olivos, Lima",
             ano: 2026,
             descripcion: "Renovación de pavimento y señales de tráfico en la Calle Los Jazmines, mejorando la seguridad vial y la movilidad en el sector.",
             rubro: "Renovación de Infraestructura Vial",
             image: "images/jazmines.jpg"
           },
           {
             nombre: "Renovación de Calzada y Señales de Tráfico - Av. Central",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Av. Central, desde Av. Canta Callao hasta Av. Alfredo Mendiola, Los Olivos, Lima",
             ano: 2026,
             descripcion: "Renovación integral de calzada y señales de tráfico en la Avenida Central, mejorando la movilidad y seguridad vial en una de las principales vías del distrito.",
             rubro: "Renovación de Infraestructura Vial",
             image: "images/central.jpg"
           },
           {
             nombre: "Renovación de Pavimento, Vereda y Sardinel - Calle 17",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Calle 17, A.H. Chillón y Urb. Prolima, Los Olivos, Lima",
             ano: 2026,
             descripcion: "Renovación de pavimento, vereda y sardinel, construcción de rampa y otros activos en la Calle 17, mejorando la accesibilidad y el espacio público.",
             rubro: "Infraestructura Peatonal",
             image: "images/calle17_1.jpg"
           },
           {
             nombre: "Mejoramiento Integral de Movilidad Urbana - Av. Betancourt",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Av. Betancourt, desde Av. Canta Callao hasta Av. Central, Los Olivos, Lima",
             ano: 2026,
             descripcion: "Mejoramiento integral de la movilidad urbana en la Avenida Betancourt, incluyendo infraestructura vial, peatonal y señalización para mejorar la conectividad.",
             rubro: "Mejoramiento de Movilidad Urbana",
             image: "images/betancourt.jpg"
           },
         
        // VALDIVIESO // EN TOTAL : 7
           {
             nombre: "Renovación de Pavimento y Señales de Tráfico - Sector Múltiple",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Calles 54,55,58, jirones La Amistad, Veracidad, Prolongación Aquia, Los Olivos, Los Claveles, Malvas, José Santos Chocano, Amarantos, El Amargón, Santa Cruz de Pachacutec, Manuel Gonzales Prada, Venus, Carlos Augusto Salaverry, Los Olivos, Lima",
             ano: 2024,
             descripcion: "Renovación integral de pavimento y señales de tráfico en múltiples vías del distrito de Los Olivos, mejorando la seguridad vial y la movilidad.",
             rubro: "Renovación de Infraestructura Vial",
             image: "images/pista_14.jpg"
           },
           {
             nombre: "Construcción de Espacio Peatonal y Muro de Contención - Mercurio Alto",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Calle Los Rosales y Los Girasoles, AA.HH Mercurio Alto, Los Olivos, Lima",
             ano: 2024,
             descripcion: "Construcción de espacios de circulación peatonal horizontal y vertical, con muro de contención en el asentamiento humano Mercurio Alto, mejorando accesibilidad y seguridad estructural.",
             rubro: "Habilitaciones Urbanas",
             image: "images/muro_1.jpg"
           },
           {
             nombre: "Construcción de Pavimento, Vereda y Muro de Contención - Pasaje Venus",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Pasaje A, B y C, AA.HH Moradores del Pasaje Venus, Centro Poblado Las Palmeras, Los Olivos, Lima",
             ano: 2025,
             descripcion: "Construcción de pavimento, vereda, espacio de circulación peatonal y muro de contención, además de otros activos, en el pasaje Venus, primera etapa.",
             rubro: "Habilitaciones Urbanas",
             image: "images/pista_3.jpg"
           },
           {
             nombre: "Mejoramiento de Movilidad Urbana - Avenida 17 de Noviembre",
             cliente: "Municipalidad Distrital de Independencia",
             ubicacion: "Avenida 17 de Noviembre, Eje Zonal Independencia, Independencia, Lima",
             ano: 2025,
             descripcion: "Proyecto integral de mejoramiento de movilidad urbana en la Avenida 17 de Noviembre, con infraestructura peatonal, vial y servicios complementarios para mejorar la conectividad.",
             rubro: "Mejoramiento de Movilidad Urbana",
             image: "images/vereda_5.jpg"
           },
           {
             nombre: "Construcción de Infraestructura de Almacenamiento - Parque Perú Japón",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Parque Perú Japón, Urb. Parque Naranjal I Etapa, Los Olivos, Lima",
             ano: 2025,
             descripcion: "Construcción de infraestructura de almacenamiento en el Parque Perú Japón, complementando los espacios públicos con equipamiento para la comunidad.",
             rubro: "Proyectos Integrales",
             image: "images/veredas_2.jpg"
           },
           {
             nombre: "Renovación de Escalera de Acceso y Espacio Peatonal - San Antonio de Padua",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Pasaje A, D y H, Asoc. de Vivienda San Antonio de Padua, Los Olivos, Lima",
             ano: 2025,
             descripcion: "Renovación de escalera de acceso y espacio de circulación peatonal horizontal y vertical en la Asociación de Vivienda San Antonio de Padua, mejorando la accesibilidad y seguridad.",
             rubro: "Habilitaciones Urbanas",
             image: "images/escalera_1.jpg"
             mostrarGaleria: true,
             galeria: [
                 'images/proyecto1_foto1.jpg',
                 'images/proyecto1_foto2.jpg',
                 'images/proyecto1_foto3.jpg'
             ]
              
           },
           {
             nombre: "Renovación de Pavimento y Vereda - Nueva Amistad (Etapa 1)",
             cliente: "Municipalidad Distrital de Los Olivos",
             ubicacion: "Manzanas A, B, B1, C y D, AA.HH Nueva Amistad, Los Olivos, Lima",
             ano: 2025,
             descripcion: "Renovación de pavimento y vereda, construcción de obras exteriores en el AA.HH Nueva Amistad, primera etapa, mejorando el espacio público en múltiples manzanas residenciales.",
             rubro: "Infraestructura Peatonal",
             image: "images/vereda_4.jpg"
           }
            mostrarGaleria: false,
            galeria: []
    ],

    // SERVICIOS
    servicios: [
        {
            id: 1,
            nombre: 'Mejoramiento de Movilidad Urbana',
            descripcion: 'Infraestructura peatonal y vial de calidad. Diseño integral de pistas, veredas, sardineles y espacios públicos seguros.',
            icono: 'fas fa-road'
        },
        {
            id: 2,
            nombre: 'Construcción de Pistas',
            descripcion: 'Pavimentación flexible y rígida. Base compactada, acabados profesionales, señalización completa y durabilidad garantizada.',
            icono: 'fas fa-layer-group'
        },
        {
            id: 3,
            nombre: 'Veredas y Sardineles',
            descripcion: 'Espacios seguros para peatones. Concreto pulido, sistemas de drenaje integrado, accesibilidad ADA y áreas verdes.',
            icono: 'fas fa-person-walking'
        }
    ],

    // ESTADÍSTICAS
    stats: {
        obrasEntregadas: 12,
        anosExperiencia: 4,
        clientesSatisfechos: 2
    }
};

/* ============================================
   FUNCIÓN AUXILIAR - GUARDAR CONTACTO
   ============================================ */

function saveContactForm(data) {
    console.log('Datos del formulario:', data);
    // Aquí se conectaría con la API/backend
}

console.log('Configuración BYM cargada:', CONFIG);
