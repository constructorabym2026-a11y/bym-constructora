/* ============================================
   BYM CONSTRUCTORA - PROYECTOS DINÁMICOS
   Sistema de Ver Más / Ver Menos
   ============================================ */

document.addEventListener('DOMContentLoaded', renderProjects);

/**
 * FUNCIÓN PRINCIPAL: Renderizar proyectos
 */
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsFooter = document.getElementById('projectsFooter');
    const btnVerMas = document.getElementById('btnVerMas');

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

    // Mostrar botón "Ver Más" si hay más de 6 proyectos
    if (CONFIG.projects.length > 6) {
        projectsFooter.style.display = 'block';
        
        // Agregar evento al botón
        if (btnVerMas) {
            btnVerMas.addEventListener('click', toggleExpandProjects);
        }
    }

    console.log(`✓ ${CONFIG.projects.length} proyectos cargados correctamente`);
}

/**
 * NUEVA FUNCIÓN: Expandir/Contraer proyectos
 */
function toggleExpandProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const btnVerMas = document.getElementById('btnVerMas');
    const isExpanded = projectsGrid.classList.contains('expanded');

    if (isExpanded) {
        // Contraer - volver a mostrar solo los primeros 6
        projectsGrid.classList.remove('expanded');
        btnVerMas.textContent = 'Ver Más Proyectos';
    } else {
        // Expandir - mostrar todos
        projectsGrid.classList.add('expanded');
        btnVerMas.textContent = 'Ver Menos Proyectos';
    }
}

/**
 * Crear tarjeta de proyecto
 */
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project__card';
    card.setAttribute('data-project-index', index);
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
            <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <span class="project__tag">${project.rubro}</span>
                ${project.cui ? `<span style="font-size: 12px; color: #999;">CUI: ${project.cui}</span>` : ''}
            </div>
        </div>
    `;

    return card;
}

console.log('✅ Sistema de proyectos inicializado');
// Mostrar estadísticas
const stats = getProjectsStats();
console.log('📊 Estadísticas de Proyectos:', stats);
