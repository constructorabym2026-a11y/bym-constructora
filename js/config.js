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
    projects: [
        {
            nombre: 'Mejoramiento del Servicio de Movilidad Urbana en Jiron Chasquitambo',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Jiron Chasquitambo, Cuadra 5 y 6, Comas, Lima',
            ano: 2024,
            descripcion: 'Mejoramiento del servicio de movilidad urbana mediante infraestructura peatonal integral: pistas pavimentadas, veredas accesibles, sardineles y áreas verdes.',
            rubro: 'Habilitaciones Urbanas',
            image: 'images/pista_1.jpg'
        },
        {
            nombre: 'Construcción de Pistas en Av. Principal - Fase 1',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Avenida Principal, Los Olivos, Lima',
            ano: 2024,
            descripcion: 'Construcción de 2.5 km de pistas con pavimento flexible, base granular compactada y señalización vial completa. Proyecto completado dentro de plazo.',
            rubro: 'Infraestructura Vial',
            image: 'images/pista_2.jpg'
        },
        {
            nombre: 'Rehabilitación de Veredas y Sardineles - Zona Centro',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Centro de Comas, Lima',
            ano: 2024,
            descripcion: 'Rehabilitación y construcción de 1.2 km de veredas con accesibilidad ADA, sistemas de drenaje integrado y áreas verdes complementarias.',
            rubro: 'Infraestructura Peatonal',
            image: 'images/pista_3.jpg'
        },
        {
            nombre: 'Creación de Servicios de Movilidad Urbana - Proyecto Integral',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Sector Sur, Los Olivos, Lima',
            ano: 2024,
            descripcion: 'Proyecto integral de movilidad: pistas, veredas, drenaje pluvial, iluminación LED y espacios verdes. Transformación total de la zona urbana.',
            rubro: 'Proyectos Integrales',
            image: 'images/pista_5.jpg'
        },
        {
            nombre: 'Construcción de Espacio de Circulación Peatonal y Muro de Contención',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Calle Los Rosales y Los Girasoles, AA.HH. Mercurio Alto, Los Olivos, Lima',
            ano: 2024,
            descripcion: 'Construcción de espacios de circulación peatonal horizontal y vertical, con muro de contención en zona residencial. Mejora de accesibilidad y seguridad estructural en el asentamiento.',
            rubro: 'Habilitaciones Urbanas',
            image: 'images/vereda_3.jpg',
            cui: '2672765'
        },
        {
            nombre: 'Mejoramiento de Espacios Públicos Urbanos - Parque Justicia',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Parque N° 02 "Justicia", AA.HH. Los Jazmines del Naranjal, Los Olivos, Lima',
            ano: 2026,
            descripcion: 'Mejoramiento integral de espacios públicos urbanos incluyendo áreas verdes, mobiliario urbano, iluminación y accesibilidad. Revitalización del parque para la comunidad local.',
            rubro: 'Proyectos Integrales',
            image: 'images/parque_1.jpg'
        },
        {
            nombre: 'Renovación de Pavimento y Señales de Tráfico - Sector Múltiple',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Sector Múltiple, Distrito de Los Olivos, Lima',
            ano: 2024,
            descripcion: 'Renovación integral de pavimento y señales de tráfico en múltiples calles y jirones del distrito de Los Olivos. Mejora de la señalización vial y recarpeteo de pistas para mayor seguridad vehicular.',
            rubro: 'Renovación de Infraestructura Vial',
            image: 'images/pista_renovacion_1.jpg'
        },
        {
            nombre: 'Construcción de Espacio Peatonal y Muro de Contención - Mercurio Alto',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'AA.HH. Mercurio Alto, Los Olivos, Lima',
            ano: 2025,
            descripcion: 'Construcción de espacios de circulación peatonal horizontal y vertical, incluyendo muro de contención en AA.HH. Mercurio Alto. Proyecto que mejora la accesibilidad y seguridad estructural de la zona residencial.',
            rubro: 'Habilitaciones Urbanas',
            image: 'images/vereda_mercurio_1.jpg',
            cui: '2672765'
        },
        {
            nombre: 'Mejoramiento de Movilidad Urbana - Avenida 17 de Noviembre',
            cliente: 'Municipalidad Distrital de Independencia',
            ubicacion: 'Avenida 17 de Noviembre, Independencia, Lima',
            ano: 2026,
            descripcion: 'Proyecto integral de mejoramiento de movilidad urbana en la Avenida 17 de Noviembre. Infraestructura peatonal, vial y servicios complementarios para mejorar la conectividad en el Eje Zonal Independencia.',
            rubro: 'Mejoramiento de Movilidad Urbana',
            image: 'images/movilidad_av17_1.jpg'
        },
        {
            nombre: 'Construcción de Infraestructura de Almacenamiento - Parque Perú Japón',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Parque Perú Japón, Los Olivos, Lima',
            ano: 2026,
            descripcion: 'Construcción de infraestructura de almacenamiento en el Parque Perú Japón. Proyecto que complementa los espacios públicos urbanos con soluciones de equipamiento para la comunidad.',
            rubro: 'Proyectos Integrales',
            image: 'images/parque_almacenamiento_1.jpg',
            cui: '2686001'
        },
        {
            nombre: 'Renovación de Escalera y Espacio Peatonal - San Antonio de Padua',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'Asoc. San Antonio de Padua, Los Olivos, Lima',
            ano: 2026,
            descripcion: 'Renovación de escalera de acceso y espacio de circulación peatonal horizontal y vertical en la Asociación de Vivienda San Antonio de Padua. Mejora de accesibilidad y seguridad en áreas comunes.',
            rubro: 'Habilitaciones Urbanas',
            image: 'images/escalera_sanantonio_1.jpg',
            cui: '2654742'
        },
        {
            nombre: 'Renovación de Pavimento y Vereda - Nueva Amistad (Etapa 1)',
            cliente: 'Municipalidad Distrital de Los Olivos',
            ubicacion: 'AA.HH. Nueva Amistad, Los Olivos, Lima',
            ano: 2026,
            descripcion: 'Renovación de pavimento y vereda, construcción de obras exteriores en el AA.HH. Nueva Amistad - Etapa 1. Intervención integral que mejora la calidad del espacio público y la circulación en múltiples manzanas residenciales.',
            rubro: 'Infraestructura Peatonal',
            image: 'images/nueva_amistad_1.jpg'
        }
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
