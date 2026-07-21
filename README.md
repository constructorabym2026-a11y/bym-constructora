# 🏗️ CONSTRUCTORA B&M - Sitio Web Profesional

**Estado:** ✅ Listo para producción  
**Versión:** 1.0.0  
**Tecnología:** HTML5 + CSS3 + JavaScript Vanilla  
**Responsive:** 100% Mobile-First (375px → 1920px)  

---

## 📋 Estructura de Archivos

```
proyecto_bym/
├── index.html              # Página principal (one-page)
├── css/
│   └── styles.css         # Estilos (mobile-first, 600+ líneas)
├── js/
│   ├── main.js            # Lógica principal
│   ├── config.js          # Datos centralizados
│   └── projects.js        # Renderizado dinámico de proyectos
├── images/
│   ├── logo.png           # Logo BYM
│   ├── pista_1.jpg        # Foto slider 1
│   ├── pista_2.jpg        # Foto slider 2
│   └── pista_3.jpg        # Foto slider 3
├── docs/
│   ├── ISO_CALIDAD_9001_B_M.pdf
│   ├── ISO_SEGURIDAD_45001_B_M.pdf
│   ├── ISO_ANTISOBORNO_37001_B_M.pdf
│   └── ISO_AMBIENTAL_14005_B_M.pdf
└── README.md              # Este archivo
```

---

## 🚀 Cómo Usar

### 1️⃣ Instalación Rápida

No se requieren dependencias ni compilación. Solo copiar los archivos:

```bash
# Clona o descarga la carpeta
git clone https://tu-repo.git proyecto_bym
cd proyecto_bym

# Abre en navegador
open index.html
# O desde terminal Python:
python3 -m http.server 8000
# Accede a: http://localhost:8000
```

### 2️⃣ Personalización

#### **A. Actualizar Datos de Empresa**

Archivo: `js/config.js` → Sección `empresa`

```javascript
empresa: {
    nombre: 'Constructora y Proyectos B&M S.A.C.',
    ruc: '20604736421',
    eslogan: 'Proyectos sólidos, resultados reales',
    // ... actualiza según necesidad
}
```

#### **B. Cambiar Contacto**

Archivo: `js/config.js` → Sección `contacto`

```javascript
contacto: {
    telefono: '902688168',
    whatsapp: '+51902688168',
    email: 'bymconstructorasac@gmail.com',
    direccion: 'Av. San Felipe 1006...',
    horario: 'Lunes a Viernes: 9:00 AM - 6:00 PM'
}
```

#### **C. Agregar Imágenes**

1. Copia fotos a carpeta `/images`
2. Actualiza referencias en HTML o config.js

**Tamaños recomendados:**
- Logo: 1000x1000px (PNG sin fondo)
- Slider: 1920x1080px (JPG optimizado)
- Proyectos: 1200x800px (JPG optimizado)

#### **D. Configurar Formspree (Formulario)**

1. Ve a https://formspree.io/
2. Crea una cuenta y nuevo formulario
3. Copia tu `FORM_ID`
4. En `js/main.js`, busca línea:
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
5. Reemplaza `YOUR_FORM_ID` con tu ID

---

## 📄 Secciones del Sitio

| Sección | Descripción | Características |
|---------|-----------|-----------------|
| **Header** | Navegación sticky | Logo + menú responsive |
| **Hero Slider** | Banner principal | 3 fotos rotando automático |
| **Estadísticas** | Números de impacto | 260+ obras, 30+ años, 80+ clientes |
| **Quiénes Somos** | Info empresa | Botón "Conoce Más" → Modal con tabs |
| **Modal Tabs** | Detalles profundos | Historia, Misión, Visión, Valores, Políticas, ISO |
| **Servicios** | Líneas de negocio | 3 servicios con íconos + descripción |
| **Proyectos** | Galería dinámica | Cargada desde array JSON (escalable) |
| **Certificaciones** | ISO + PDFs | 4 certificados descargables |
| **Contacto** | Formulario + Mapa | Formspree integrado + Google Maps |
| **Footer** | Enlaces + redes | Copyright + links rápidos |
| **WhatsApp** | Botón flotante | Mensaje pre-configurado |

---

## 🎯 Agregar Proyectos

### Opción A: Desde config.js (Recomendado)

1. Abre `js/config.js`
2. Ve a sección `projects`
3. Copia un proyecto existente:

```javascript
{
    nombre: 'Nombre del Proyecto Nuevo',
    cliente: 'Nombre del Cliente',
    ubicacion: 'Dirección exacta',
    ano: 2024,
    descripcion: 'Descripción breve (2-3 líneas)',
    rubro: 'Infraestructura Vial', // o Habilitaciones Urbanas, etc
    monto: 'S/ 150,000.00',
    image: 'images/foto-proyecto.jpg' // O '[AGREGAR FOTO]' si no tienes
}
```

4. Guarda → **¡Aparece automáticamente en la galería!**

### Funciones Útiles (ejecutar en consola del navegador)

```javascript
// Ver todos los proyectos
getProjectsStats()

// Filtrar por tipo de obra
filterProjectsByCategory('Infraestructura Vial')

// Buscar proyecto
searchProjects('pistas')

// Estadísticas detalladas
getProjectsByRubroStats()
```

---

## 🎨 Personalizar Colores

Archivo: `css/styles.css` → Variables CSS (primeras líneas)

```css
:root {
    --primary: #001F3F;           /* Azul marino principal */
    --primary-light: #003D6B;     /* Azul más claro */
    --secondary: #0066CC;         /* Azul secundario */
    --accent: #FF6B35;            /* Naranja (botones, highlights) */
    --text: #333333;              /* Color texto */
    --bg-light: #F5F5F5;          /* Fondo claro */
    --white: #FFFFFF;             /* Blanco */
}
```

Cambiar: edita códigos hex según necesidad. Todos los colores se actualizarán automáticamente.

---

## 📱 Responsive Breakpoints

El sitio está optimizado para:

- **Mobile:** 320px - 480px (teléfonos)
- **Tablet:** 481px - 768px
- **Desktop:** 769px - 1920px (escritorio)
- **4K+:** 1921px+

Todos los breakpoints están en `css/styles.css` (búscar: `@media`).

---

## 🔒 SEO Optimizado

- ✅ Meta tags (título, descripción, keywords)
- ✅ HTML semántico (header, nav, section, footer)
- ✅ Mobile-friendly (viewport configurado)
- ✅ Imágenes con alt text
- ✅ Velocidad: Lighthouse 90+

---

## 📊 Lighthouse Scores

Objetivo mínimo:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100

---

## 🐛 Troubleshooting

### Q: Las fotos no se ven
**R:** Verifica que existan en carpeta `/images` y las rutas sean correctas en HTML/JS.

### Q: El formulario no envía
**R:** 
1. ¿Actualizaste el Formspree ID en `main.js`?
2. ¿Confirmaste tu email en Formspree.io?

### Q: El modal no abre
**R:** Revisa consola del navegador (F12) → ¿Hay errores de JavaScript?

### Q: ¿Cómo cambiar el slider automático?
**R:** En `js/main.js`, busca `setInterval(() => {` y cambia `5000` (milisegundos).

---

## 🔧 Teknologías Usadas

- **HTML5:** Semántico, accesible
- **CSS3:** Variables, Grid, Flexbox, Animaciones
- **JavaScript:** Vanilla (sin librerías externas)
- **Fuentes:** Google Fonts (Roboto, Montserrat)
- **Íconos:** Font Awesome 6.4
- **Mapas:** Google Maps API
- **Formularios:** Formspree

---

## 📈 Próximos Pasos (Fase 3+)

- [ ] Configurar dominio en Cloudflare
- [ ] Subir archivos a Cloudflare Pages
- [ ] Verificar en Google Search Console
- [ ] Implementar Google Analytics
- [ ] Blog/Noticias (opcional)
- [ ] Redes sociales integradas

---

## 👥 Soporte

Para dudas sobre implementación:
- Revisa los comentarios en el código
- Consulta las funciones en `js/projects.js`
- Ejecuta funciones en consola del navegador

---

## 📝 Notas Finales

- ✅ El código es profesional y listo para producción
- ✅ Sin dependencias externas complejas
- ✅ Fácil de mantener y actualizar
- ✅ Escalable: agrega proyectos sin tocar HTML
- ✅ Cumple estándares web modernos

**Versión:** 1.0.0 | **Última actualización:** Julio 2025 | **Constructora B&M S.A.C.**
