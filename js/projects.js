/* ============================================
   BYM CONSTRUCTORA - PROYECTOS DINÁMICOS
   Renderiza proyectos desde array JSON
   Fácil de agregar más proyectos
   ============================================ */

/**
 * CÓMO AGREGAR UN NUEVO PROYECTO:
 * 
 * 1. Abre config.js
 * 2. Ve a la sección "projects" (búsqueda: // PROYECTOS)
 * 3. Copia un proyecto existente y actualiza:
 * 
 * {
 *     nombre: 'Nombre del Proyecto',
 *     cliente: 'Nombre Cliente',
 *     ubicacion: 'Ubicación exacta',
 *     ano: 2024,
 *     descripcion: 'Descripción breve 2-3 líneas',
 *     rubro: 'Tipo de obra (Infraestructura Vial, Habilitaciones Urbanas, etc)',
 *     monto: 'S/ X,XXX.XX',
 *     image: 'images/foto.jpg'  // O '[AGREGAR FOTO]' si no tienes foto aún
 * },
 * 
 * 4. Guarda config.js
 * 5. El proyecto aparecerá automáticamente en la web
 * 
 * ============================================
 */

document.addEventListener('DOMContentLoaded', renderProjects);

/**
 * FUNCIÓN PRINCIPAL: Renderizar proyectos
 */
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (!projectsGrid) {
        console.warn('Contenedor de proyectos no encontrado');
        return;
    }

    if (!CONFIG || !CONFIG.projects || CONFIG.projects.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">No hay proyectos disponibles.</p>';
        return;
    }

    // Limpiar
    projectsGrid.innerHTML = '';

    // Renderizar cada proyecto
    CONFIG.projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });

    console.log(`✓ ${CONFIG.projects.length} proyectos cargados`);
}

/**
 * Crear tarjeta de proyecto
 */
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project__card';
    card.style.animationDelay = `${index * 0.1}s`;

    const imageHtml = project.image && !project.image.includes('AGREGAR')
        ? `<img src="${project.image}" alt="${project.nombre}" loading="lazy">`
        : `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #999; font-style: italic;">${project.image || '[AGREGAR FOTO]'}</div>`;

    card.innerHTML = `
        <div class="project__image">
            ${imageHtml}
        </div>
        <div class="project__content">
            <div class="project__title">${project.nombre}</div>
            <div class="project__meta">
                <strong>Cliente:</strong> ${project.cliente}<br>
                <strong>Ubicación:</strong> ${project.ubicacion}<br>
                <strong>Año:</strong> ${project.ano}
            </div>
            <div class="project__description">
                ${project.descripcion}
            </div>
            <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                <span class="project__tag">${project.rubro}</span>
                <span style="font-weight: 600; color: var(--primary);">${project.monto}</span>
            </div>
        </div>
    `;

    return card;
}

/**
 * FILTRAR PROYECTOS POR RUBRO (Opcional - para agregar después)
 */
function filterProjectsByCategory(category) {
    if (!CONFIG || !CONFIG.projects) return [];
    return CONFIG.projects.filter(p => p.rubro.toLowerCase().includes(category.toLowerCase()));
}

/**
 * BUSCAR PROYECTOS (Opcional - para agregar después)
 */
function searchProjects(keyword) {
    if (!CONFIG || !CONFIG.projects) return [];
    const term = keyword.toLowerCase();
    return CONFIG.projects.filter(p =>
        p.nombre.toLowerCase().includes(term) ||
        p.cliente.toLowerCase().includes(term) ||
        p.ubicacion.toLowerCase().includes(term) ||
        p.descripcion.toLowerCase().includes(term)
    );
}

/**
 * CONTAR PROYECTOS POR RUBRO
 */
function getProjectsByRubroStats() {
    if (!CONFIG || !CONFIG.projects) return {};

    const stats = {};
    CONFIG.projects.forEach(project => {
        const rubro = project.rubro;
        stats[rubro] = (stats[rubro] || 0) + 1;
    });

    return stats;
}

/**
 * OBTENER PROYECTO POR NOMBRE
 */
function getProjectByName(name) {
    if (!CONFIG || !CONFIG.projects) return null;
    return CONFIG.projects.find(p => p.nombre.toLowerCase() === name.toLowerCase());
}

/**
 * UTILIDADES - ESTADÍSTICAS DE PROYECTOS
 */
function getProjectsStats() {
    if (!CONFIG || !CONFIG.projects) {
        return {
            total: 0,
            montoTotal: 0,
            promedioMonto: 0,
            rubros: {}
        };
    }

    const projects = CONFIG.projects;
    const total = projects.length;

    // Parsear montos
    const montos = projects
        .map(p => parseFloat(p.monto.replace(/[^\d.]/g, '')))
        .filter(m => !isNaN(m));

    const montoTotal = montos.reduce((sum, m) => sum + m, 0);
    const promedioMonto = montoTotal / montos.length;

    // Contar por rubro
    const rubros = getProjectsByRubroStats();

    return {
        total,
        montoTotal: `S/ ${montoTotal.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        promedioMonto: `S/ ${promedioMonto.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        rubros
    };
}

// Log de utilidades disponibles
console.log(`
╔════════════════════════════════════════════════════════════╗
║  BYM CONSTRUCTORA - PROYECTOS DINÁMICOS CARGADOS          ║
╠════════════════════════════════════════════════════════════╣
║  Funciones disponibles en consola:                         ║
║                                                            ║
║  • filterProjectsByCategory('Infraestructura Vial')       ║
║  • searchProjects('pistas')                               ║
║  • getProjectsStats()                                     ║
║  • getProjectByName('Nombre Proyecto')                    ║
║  • getProjectsByRubroStats()                              ║
║                                                            ║
║  Para AGREGAR proyectos:                                   ║
║  1. Abre config.js                                         ║
║  2. Ve a sección "projects"                                ║
║  3. Copia un proyecto existente                            ║
║  4. Actualiza los datos                                    ║
║  5. Guarda - ¡Aparecerá automáticamente!                  ║
╚════════════════════════════════════════════════════════════╝
`);

// Mostrar estadísticas
const stats = getProjectsStats();
console.log('📊 Estadísticas de Proyectos:', stats);
