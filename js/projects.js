/* ============================================
   BYM CONSTRUCTORA - PROYECTOS DINÁMICOS
   Sistema de Ver Más / Ver Menos - DEBUG TOTAL
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOMContentLoaded - Iniciando');
    
    // Esperar a que el DOM esté completamente listo
    setTimeout(() => {
        console.log('⏱️ setTimeout 0ms ejecutado');
        
        // Inyectar CSS directamente
        injectCSS();
        
        // Renderizar proyectos
        renderProjects();
    }, 0);
});

/**
 * Inyectar CSS directamente en el documento
 */
function injectCSS() {
    const style = document.createElement('style');
    style.id = 'projects-hide-show-css';
    style.textContent = `
        .project__card[data-project-index="6"],
        .project__card[data-project-index="7"],
        .project__card[data-project-index="8"],
        .project__card[data-project-index="9"],
        .project__card[data-project-index="10"],
        .project__card[data-project-index="11"] {
            display: none !important;
        }

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
    console.log('✅ CSS inyectado en <head>');
    
    // Verificar que se inyectó
    const styleCheck = document.getElementById('projects-hide-show-css');
    console.log('🔍 Verificación CSS inyectado:', styleCheck ? 'ENCONTRADO' : 'NO ENCONTRADO');
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
    });

    console.log('✅ Todos los proyectos rendidos');

    // IMPORTANTE: Esperar a que se renderice antes de verificar
    setTimeout(() => {
        console.log('\n🔍 VERIFICACIÓN FINAL DE VISIBILIDAD:');
        for (let i = 0; i < CONFIG.projects.length; i++) {
            const card = document.querySelector(`[data-project-index="${i}"]`);
            if (card) {
                const computed = window.getComputedStyle(card);
                const display = computed.display;
                const visibility = display === 'none' ? '❌ OCULTO' : '✅ VISIBLE';
                console.log(`  Proyecto ${i}: display="${display}" ${visibility}`);
            } else {
                console.log(`  Proyecto ${i}: ⚠️ NO ENCONTRADO EN DOM`);
            }
        }
    }, 50);

    // Mostrar botón "Ver Más" si hay más de 6 proyectos
    if (CONFIG.projects.length > 6) {
        console.log('\n✅ Mostrando botón "Ver Más"');
        projectsFooter.style.display = 'block';
        
        if (btnVerMas) {
            btnVerMas.addEventListener('click', toggleExpandProjects);
            console.log('✅ Evento click agregado a btnVerMas');
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
    console.log('Estado ANTES:', isExpanded ? 'expanded' : 'contraído');

    if (isExpanded) {
        projectsGrid.classList.remove('expanded');
        btnVerMas.textContent = 'Ver Más Proyectos';
        console.log('Acción: REMOVER clase expanded');
    } else {
        projectsGrid.classList.add('expanded');
        btnVerMas.textContent = 'Ver Menos Proyectos';
        console.log('Acción: AGREGAR clase expanded');
    }
    
    setTimeout(() => {
        console.log('Estado DESPUÉS:', projectsGrid.classList.contains('expanded') ? 'expanded' : 'contraído');
        
        console.log('\n🔍 Verificación después del toggle:');
        for (let i = 6; i < 12; i++) {
            const card = document.querySelector(`[data-project-index="${i}"]`);
            if (card) {
                const computed = window.getComputedStyle(card);
                console.log(`  Proyecto ${i}: display="${computed.display}"`);
            }
        }
    }, 50);
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

console.log('✅ projects.js cargado - Esperando DOMContentLoaded');
