# Portafolio Web Profesional — Carlos Daniel Ávila Colin

SPA estática (HTML5 + CSS Mobile-First + JavaScript vanilla en módulos ES) construida como
reingeniería de la V1.0 publicada en Google Sites. Sin dependencias externas ni paso de compilación.

- **Sitio publicado:** https://coliiin1.github.io/PortafolioWebPersonal/
- **Plan de iteraciones y QA:** [Iteraciones.md](Iteraciones.md)

## Estructura del proyecto

```
.
├── index.html              # Marcado semántico (DEV-FE-01/04/05/08/10)
├── css/
│   └── styles.css          # Hoja de estilos global (DEV-FE-02)
├── js/
│   ├── config.js           # Endpoint del formulario (DEV-BE-01)
│   ├── main.js             # Arranque, teclado global y API i18n
│   ├── utils.js            # Utilidades DOM, escapeHTML, iconos
│   ├── bus.js              # Bus de eventos interno (desacople de módulos)
│   ├── i18n.js             # Diccionarios ES/EN (DEV-FE-12)
│   ├── data.js             # Datos de proyectos y tecnologías
│   ├── media.js            # Marcadores 16:9 + badges (DEV-AST-01)
│   ├── toast.js            # Notificaciones (RF-12)
│   ├── modal.js            # Ventanas modales (RF-02 / RF-05)
│   ├── carousel.js         # Carrusel de destacados (DEV-FE-03)
│   ├── projects.js         # Catálogo, fichas y filtros (DEV-FE-06)
│   ├── technologies.js     # Vista de tecnologías (DEV-FE-11)
│   ├── contact.js          # Formulario de contacto (DEV-FE-07)
│   └── nav.js              # Navegación SPA (DEV-FE-09)
├── assets/
│   ├── docs/               # CV_Carlos_Daniel_Avila.pdf (DEV-DOC-01)
│   └── img/                # Capturas WebP de proyectos (DEV-AST-01)
├── legacy/
│   ├── v1-google-sites.html    # Línea base V1.0
│   └── v2.0-standalone.html    # Entregable V2.0 en un solo archivo
├── .nojekyll               # Desactiva el procesamiento Jekyll en GitHub Pages
└── Iteraciones.md          # Plan de desarrollo iterativo y espacios QA
```

## Previsualización local

Los módulos ES requieren un servidor HTTP (no funciona abriendo el archivo con doble clic):

```bash
py -m http.server 8000
# o
npx serve .
```

Luego abre http://localhost:8000/

## Formulario de contacto (Formspree)

GitHub Pages es hosting estático y no ejecuta PHP. El envío usa un endpoint externo configurable:

1. Crea un formulario gratuito en https://formspree.io
2. Copia tu endpoint (`https://formspree.io/f/xxxxxxxx`)
3. Pégalo en `js/config.js` → `CONTACT_ENDPOINT`

Mientras `CONTACT_ENDPOINT` esté vacío, el formulario funciona en **modo demostración**:
valida los campos y muestra una notificación, pero no envía correos.

## CV en PDF

Coloca tu currículum en `assets/docs/CV_Carlos_Daniel_Avila.pdf` (los botones de descarga del
sitio apuntan a esa ruta). Hasta que el archivo exista, esos enlaces devolverán 404.

## Publicación en GitHub Pages

1. Sube los cambios a la rama `main`.
2. En GitHub: **Settings → Pages → Source:** `Deploy from a branch`.
3. **Branch:** `main` y carpeta `/ (root)` → **Save**.
4. El sitio queda en https://coliiin1.github.io/PortafolioWebPersonal/

## Datos y contenido

- Proyectos y tecnologías: `js/data.js`
- Textos y traducciones: `js/i18n.js` (se puede forzar inglés con `?lang=en` para pruebas)
- Capturas reales: agrega `images: ['assets/img/<id>-1.webp', ...]` a cada proyecto en `js/data.js`
