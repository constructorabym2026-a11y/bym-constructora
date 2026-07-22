/* ============================================
   BYM CONSTRUCTORA - PROYECTOS DINÁMICOS
   Sistema de Ver Más / Ver Menos - SOLUCIÓN AGRESIVA
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOMContentLoaded - Iniciando');
    
    injectCSS();
    renderProjects();
});

/**
 * Inyectar CSS AGRESIVO
 */
function injectCSS() {
    const style = document.createElement('style');
    style.id = 'projects-hide-show-css';
    style.textContent = `
        /* OCULTAR PROYECTOS 7-12 */
        .project__card[data-project-index="6"],
        .project__card[data-project-index="7"],
        .project__card[data-project-index="8"],
        .project__card[data-project-index="9"],
        .project__card[data-project-index="10"],
        .project__card[data-project-index="11"] {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            border: 0 !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }

        /* MOSTRAR CUANDO SE EXPANDE */
        .projects__grid.expanded .project__card[data-project-index="6"],
        .projects__grid.expanded .project__card[data-project-index="7"],
        .projects__grid.expanded .project__card[data-project-index="8"],
        .projects__grid.expanded .project__card[data-project-index="9"],
        .projects__grid.expanded .project__card[data-project-index="10"],
        .projects__grid.expanded .project__card[data-project-index="11"] {
            display: block !important;
            visibility: visible !important;
            height: auto !important;
            width: auto !important;
            margin: inherit !important;
            padding: inherit !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            animation: fadeIn 0.4s ease;
        }
    `;
    document.head.appendChild(style);
    console.log('✅ CSS AGRESIVO inyectado');
}

/**
 * FUNCIÓN PRINCIPAL: Renderizar proyectos
 */
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsFooter = document.getElementById('projectsFooter');
    const btnVerMas = document.getElementById('btnVerMas');

    console.log('📍 renderProjects iniciada');

    if (!projectsGrid || !CONFIG || !CONFIG.projects || CONFIG.projects.length === 0) {
        console.error('❌ Error: elementos o CONFIG no encontrados');
        return;
    }

    projectsGrid.innerHTML = '';
    console.log(`📊 Renderizando ${CONFIG.projects.length} proyectos`);

    // Renderizar cada proyecto
    CONFIG.projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });

    console.log('✅ Proyectos rendidos');

    // Verificar después de renderizar
    setTimeout(() => {
        console.log('\n🔍 VERIFICACIÓN DE VISIBILIDAD:');
        console.log('Proyectos 0-5 (DEBEN estar visibles):');
        for (let i = 0; i < 6; i++) {
            const card = document.querySelector(`[data-project-index="${i}"]`);
            const display = card ? window.getComputedStyle(card).display : 'NO EXISTE';
            console.log(`  ${i}: ${display}`);
        }
        console.log('Proyectos 6-11 (DEBEN estar OCULTOS):');
        for (let i = 6; i < 12; i++) {
            const card = document.querySelector(`[data-project-index="${i}"]`);
            const display = card ? window.getComputedStyle(card).display : 'NO EXISTE';
            console.log(`  ${i}: ${display}`);
        }
    }, 100);

    // Mostrar botón
    if (CONFIG.projects.length > 6) {
        projectsFooter.style.display = 'block';
        if (btnVerMas) {
            btnVerMas.addEventListener('click', toggleExpandProjects);
            console.log('✅ Evento click agregado');
        }
    }

    console.log('✅ renderProjects completada\n');
}

/**
 * FUNCIÓN: Expandir/Contraer proyectos
 */
function toggleExpandProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const btnVerMas = document.getElementById('btnVerMas');
    
    const isExpanded = projectsGrid.classList.contains('expanded');
    
    console.log('\n🔄 TOGGLE CLICK');
    console.log('Estado actual:', isExpanded ? 'EXPANDIDO' : 'CONTRAÍDO');

    if (isExpanded) {
        // Contraer
        projectsGrid.classList.remove('expanded');
        btnVerMas.textContent = 'Ver Más Proyectos';
        console.log('✅ Acción: CONTRAER (removiendo clase expanded)');
    } else {
        // Expandir
        projectsGrid.classList.add('expanded');
        btnVerMas.textContent = 'Ver Menos Proyectos';
        console.log('✅ Acción: EXPANDIR (agregando clase expanded)');
    }
    
    // Verificar después
    setTimeout(() => {
        console.log('Estado nuevo:', projectsGrid.classList.contains('expanded') ? 'EXPANDIDO' : 'CONTRAÍDO');
        console.log('\n🔍 Verificación después del toggle:');
        for (let i = 6; i < 12; i++) {
            const card = document.querySelector(`[data-project-index="${i}"]`);
            if (card) {
                const display = window.getComputedStyle(card).display;
                console.log(`  Proyecto ${i}: display="${display}"`);
            }
        }
        console.log('');
    }, 100);
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

console.log('✅ projects.js cargado - Sistema listo');
