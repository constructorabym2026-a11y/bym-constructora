/* ============================================
   BYM CONSTRUCTORA - PROYECTOS DINÁMICOS
   Sistema de Ver Más / Ver Menos - VERSIÓN CORREGIDA
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOMContentLoaded - Iniciando renderProjects');
    
    // Inyectar CSS directamente
    injectCSS();
    
    renderProjects();
});

/**
 * Inyectar CSS directamente en el documento
 */
function injectCSS() {
    const style = document.createElement('style');
    style.textContent = `
        /* Ocultar proyectos 7-12 por defecto */
        .project__card[data-project-index="6"],
        .project__card[data-project-index="7"],
        .project__card[data-project-index="8"],
        .project__card[data-project-index="9"],
        .project__card[data-project-index="10"],
        .project__card[data-project-index="11"] {
            display: none !important;
        }

        /* Mostrar cuando se expande */
        .projects__grid.expanded .project__card[data-project-index="6"],
        .projects__grid.expanded .project__card[data-project-index="7"],
        .projects__grid.expanded .project__card[data-project-index="8"],
        .projects__grid.expanded .project__card[data-project-index="9"],
        .projects__grid.expanded .project__card[data-project-index="10"],
        .projects__grid.expanded .project__card[data-project-index="11"] {
            display: block !important;
            animation: fadeIn 0.4s ease;
        }
    `;
    document.head.appendChild(style);
    console.log('✅ CSS inyectado directamente en el documento');
}

/**
 * FUNCIÓN PRINCIPAL: Renderizar proyectos
 */
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsFooter = document.getElementById('projectsFooter');
    const btnVerMas = document.getElementById('btnVerMas');

    console.log('📍 renderProjects iniciada');
    console.log('✓ projectsGrid:', projectsGrid ? 'encontrado' : 'NO ENCONTRADO');
    console.log('✓ projectsFooter:', projectsFooter ? 'encontrado' : 'NO ENCONTRADO');
    console.log('✓ btnVerMas:', btnVerMas ? 'encontrado' : 'NO ENCONTRADO');

    if (!projectsGrid) {
        console.error('❌ Contenedor de proyectos NO ENCONTRADO');
        return;
    }

    if (!CONFIG || !CONFIG.projects || CONFIG.projects.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">No hay proyectos disponibles.</p>';
        console.warn('⚠️ No hay proyectos en CONFIG');
        return;
    }

    // Limpiar
    projectsGrid.innerHTML = '';
    console.log(`📊 Total de proyectos: ${CONFIG.projects.length}`);

    // Renderizar cada proyecto
    CONFIG.projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
        console.log(`✓ Proyecto ${index}: data-project-index="${index}" creado`);
    });

    // Verificar visibilidad de elementos
    console.log('🔍 Verificando visibilidad de proyectos:');
    for (let i = 0; i < CONFIG.projects.length; i++) {
        const card = document.querySelector(`[data-project-index="${i}"]`);
        const computed = window.getComputedStyle(card);
        console.log(`  Proyecto ${i}: display="${computed.display}"`);
    }

    // Mostrar botón "Ver Más" si hay más de 6 proyectos
    if (CONFIG.projects.length > 6) {
        console.log('✅ Más de 6 proyectos - Mostrando botón "Ver Más"');
        projectsFooter.style.display = 'block';
        
        // Agregar evento al botón
        if (btnVerMas) {
            btnVerMas.addEventListener('click', toggleExpandProjects);
            console.log('✅ Evento click agregado a btnVerMas');
        } else {
            console.error('❌ btnVerMas NO ENCONTRADO - No se pudo agregar evento');
        }
    } else {
        console.log('⚠️ 6 o menos proyectos - Botón NO visible');
        projectsFooter.style.display = 'none';
    }

    console.log('✅ renderProjects completada');
}

/**
 * FUNCIÓN: Expandir/Contraer proyectos
 */
function toggleExpandProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const btnVerMas = document.getElementById('btnVerMas');
    
    const isExpanded = projectsGrid.classList.contains('expanded');
    
    console.log('🔄 toggleExpandProjects iniciada');
    console.log('Estado actual expanded:', isExpanded);

    if (isExpanded) {
        // Contraer
        console.log('📦 Acción: CONTRAER (remover clase expanded)');
        projectsGrid.classList.remove('expanded');
        btnVerMas.textContent = 'Ver Más Proyectos';
        console.log('✅ Clase "expanded" removida');
    } else {
        // Expandir
        console.log('📂 Acción: EXPANDIR (agregar clase expanded)');
        projectsGrid.classList.add('expanded');
        btnVerMas.textContent = 'Ver Menos Proyectos';
        console.log('✅ Clase "expanded" agregada');
    }
    
    console.log('Estado nuevo expanded:', projectsGrid.classList.contains('expanded'));
    
    // Verificar nuevamente
    console.log('🔍 Verificando visibilidad de proyectos:');
    for (let i = 6; i < CONFIG.projects.length; i++) {
        const card = document.querySelector(`[data-project-index="${i}"]`);
        const computed = window.getComputedStyle(card);
        console.log(`  Proyecto ${i}: display="${computed.display}"`);
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

console.log('✅ Sistema de proyectos cargado (Ver consola F12 para debug)');
