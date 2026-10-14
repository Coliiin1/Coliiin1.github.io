(function (P) {
    'use strict';
    const { $$ } = P.utils;

    /* =====================================================
       DEV-FE-12 · ARQUITECTURA i18n BASE (RNF-14)
       Textos desacoplados del marcado mediante data-i18n,
       data-i18n-placeholder y data-i18n-aria.
       V2.0: diccionarios embebidos (es/en). En V2.1 se moverán
       a i18n/es.json e i18n/en.json y se añadirá el conmutador.
       Prueba rápida: abrir el archivo con ?lang=en
       ===================================================== */
    const DICTIONARIES = {
        es: {
            'skip': 'Saltar al contenido principal',
            'profile.role': 'Ingeniería en Software',
            'nav.menu': 'Abrir menú de navegación',
            'nav.menuClose': 'Cerrar menú de navegación',
            'nav.label': 'Navegación principal',
            'nav.home': 'Inicio', 'nav.about': 'Mi información', 'nav.projects': 'Mis proyectos',
            'nav.tech': 'Tecnologías', 'nav.contact': 'Contacto',
            'social.github': 'Perfil de GitHub (se abre en una pestaña nueva)',
            'social.linkedin': 'Perfil de LinkedIn (se abre en una pestaña nueva)',
            'hero.kicker': 'Estudiante de Ingeniería en Software · UAEMex Tianguistenco',
            'hero.title': 'Hola, soy Daniel Colin',
            'hero.text': 'Desarrollo soluciones tecnológicas que van desde aplicaciones de escritorio robustas y bases de datos relacionales hasta sistemas embebidos de bajo nivel.',
            'hero.ctaProjects': 'Explorar proyectos', 'hero.ctaCv': 'Descargar CV',
            'featured.title': 'Proyectos destacados',
            'featured.lead': 'Una selección de mis desarrollos más representativos. Haz clic o toca una tarjeta para abrir una vista rápida.',
            'carousel.label': 'Carrusel de proyectos destacados',
            'carousel.prev': 'Proyecto anterior', 'carousel.next': 'Proyecto siguiente',
            'carousel.goto': 'Ir al proyecto {n}: {title}', 'carousel.slide': '{n} de {total}',
            'carousel.quick': 'Vista rápida',
            'about.title': 'Mi información',
            'about.lead': 'Conoce mi trayectoria, mi formación académica y las competencias que he desarrollado como futuro Ingeniero en Software.',
            'about.bioTitle': 'Biografía', 'about.eduTitle': 'Formación académica',
            'about.skillsTitle': 'Competencias profesionales',
            'about.cv': 'Descargar CV (PDF)', 'about.cvHint': 'Archivo PDF · descarga directa',
            'skills.dev': 'Desarrollo de software', 'skills.db': 'Bases de datos',
            'skills.req': 'Requisitos y modelado UML', 'skills.emb': 'Sistemas embebidos',
            'projects.title': 'Mis proyectos',
            'projects.lead': 'Catálogo de desarrollos realizados durante mi formación. Filtra por tecnología y abre cada ficha para ver capturas, arquitectura, dependencias y el repositorio.',
            'projects.count': 'Mostrando {n} de {total} proyectos',
            'projects.details': 'Ver detalles',
            'projects.empty': 'No hay proyectos en esta categoría todavía.',
            'filters.label': 'Filtrar proyectos por tecnología',
            'filter.todos': 'Todos', 'filter.web': 'Web', 'filter.escritorio': 'Escritorio',
            'filter.microcontroladores': 'Microcontroladores', 'filter.bd': 'Bases de Datos',
            'img.preview': 'Vista previa de {title}',
            'quick.stack': 'Stack tecnológico', 'quick.full': 'Ver proyecto completo',
            'detail.close': 'Cerrar', 'detail.gallery': 'Galería de capturas',
            'detail.shot': 'Captura {n}: {caption}',
            'detail.about': 'Descripción', 'detail.features': 'Funcionalidades clave',
            'detail.spec': 'Ficha técnica', 'detail.arch': 'Arquitectura', 'detail.langs': 'Lenguajes',
            'detail.category': 'Categoría', 'detail.stack': 'Stack',
            'detail.deps': 'Dependencias y versiones', 'detail.dep': 'Dependencia', 'detail.version': 'Versión',
            'detail.repo': 'Ver repositorio en GitHub',
            'tech.title': 'Tecnologías',
            'tech.lead': 'Herramientas, bases de datos y entornos con los que trabajo. Pasa el cursor, enfoca con el teclado o toca una tarjeta para ver mi nivel de dominio.',
            'tech.group.db': 'Bases de datos', 'tech.group.env': 'Sistemas operativos y entornos',
            'tech.group.lang': 'Lenguajes y herramientas', 'tech.level': 'Nivel de dominio',
            'level.basico': 'Básico', 'level.medio': 'Medio', 'level.avanzado': 'Avanzado',
            'contact.title': 'Contacto',
            'contact.lead': '¿Tienes una propuesta, una vacante o quieres colaborar en un proyecto? Escríbeme directamente desde este formulario.',
            'contact.asideTitle': 'Hablemos',
            'contact.asideText': 'Estoy abierto a prácticas profesionales, proyectos de desarrollo y colaboraciones académicas.',
            'contact.location': 'Tianguistenco, Estado de México',
            'contact.response': 'Tiempo de respuesta estimado: 24–48 h',
            'form.required': 'Campos obligatorios',
            'form.name': 'Nombre', 'form.email': 'Correo electrónico', 'form.subject': 'Asunto', 'form.message': 'Mensaje',
            'form.namePh': 'Tu nombre completo', 'form.emailPh': 'tucorreo@ejemplo.com',
            'form.subjectPh': 'Motivo del mensaje', 'form.messagePh': 'Cuéntame sobre tu propuesta…',
            'form.privacyTitle': 'Aviso de privacidad:',
            'form.privacy': 'los datos que proporciones (nombre, correo, asunto y mensaje) se utilizarán exclusivamente para establecer comunicación profesional contigo. No se almacenan en bases de datos ni se comparten con terceros. Al enviar este formulario aceptas dicho uso.',
            'form.submit': 'Enviar Mensaje', 'form.sending': 'Enviando…',
            'err.required': 'Este campo es obligatorio.',
            'err.min': 'Debe contener al menos {n} caracteres.',
            'err.max': 'Excede el máximo de {n} caracteres.',
            'err.email': 'Introduce un correo electrónico válido (ej. nombre@dominio.com).',
            'err.html': 'Por seguridad, no se permiten etiquetas HTML ni scripts.',
            'toast.okTitle': '¡Mensaje enviado!',
            'toast.okText': 'Gracias por escribir. Te responderé a la brevedad.',
            'toast.demo': 'Modo demostración: el formulario es válido, pero aún no se ha configurado el servicio de envío.',
            'toast.errTitle': 'No se pudo enviar el mensaje',
            'toast.errText': 'Ocurrió un problema de conexión. Inténtalo de nuevo en unos minutos.',
            'toast.invalidTitle': 'Revisa el formulario',
            'toast.invalidText': 'Hay campos marcados en rojo que necesitan tu atención.',
            'toast.close': 'Cerrar notificación',
            'footer.rights': '© 2026 Daniel Colin. Todos los derechos reservados.',
            'footer.version': 'Portafolio Web Profesional · Versión 2.0'
        },
        en: {
            'skip': 'Skip to main content',
            'profile.role': 'Software Engineering',
            'nav.menu': 'Open navigation menu',
            'nav.menuClose': 'Close navigation menu',
            'nav.label': 'Main navigation',
            'nav.home': 'Home', 'nav.about': 'About me', 'nav.projects': 'My projects',
            'nav.tech': 'Technologies', 'nav.contact': 'Contact',
            'social.github': 'GitHub profile (opens in a new tab)',
            'social.linkedin': 'LinkedIn profile (opens in a new tab)',
            'hero.kicker': 'Software Engineering Student · UAEMex Tianguistenco',
            'hero.title': "Hi, I'm Daniel Colin",
            'hero.text': 'I build technology solutions ranging from robust desktop applications and relational databases to low-level embedded systems.',
            'hero.ctaProjects': 'Explore projects', 'hero.ctaCv': 'Download CV',
            'featured.title': 'Featured projects',
            'featured.lead': 'A selection of my most representative work. Click or tap a card to open a quick view.',
            'carousel.label': 'Featured projects carousel',
            'carousel.prev': 'Previous project', 'carousel.next': 'Next project',
            'carousel.goto': 'Go to project {n}: {title}', 'carousel.slide': '{n} of {total}',
            'carousel.quick': 'Quick view',
            'about.title': 'About me',
            'about.lead': 'Learn about my background, academic education and the skills I have developed as a future Software Engineer.',
            'about.bioTitle': 'Biography', 'about.eduTitle': 'Education',
            'about.skillsTitle': 'Professional skills',
            'about.cv': 'Download CV (PDF)', 'about.cvHint': 'PDF file · direct download',
            'skills.dev': 'Software development', 'skills.db': 'Databases',
            'skills.req': 'Requirements & UML modeling', 'skills.emb': 'Embedded systems',
            'projects.title': 'My projects',
            'projects.lead': 'Catalog of projects built during my studies. Filter by technology and open each card to see screenshots, architecture, dependencies and the repository.',
            'projects.count': 'Showing {n} of {total} projects',
            'projects.details': 'View details',
            'projects.empty': 'There are no projects in this category yet.',
            'filters.label': 'Filter projects by technology',
            'filter.todos': 'All', 'filter.web': 'Web', 'filter.escritorio': 'Desktop',
            'filter.microcontroladores': 'Microcontrollers', 'filter.bd': 'Databases',
            'img.preview': 'Preview of {title}',
            'quick.stack': 'Tech stack', 'quick.full': 'View full project',
            'detail.close': 'Close', 'detail.gallery': 'Screenshot gallery',
            'detail.shot': 'Screenshot {n}: {caption}',
            'detail.about': 'Description', 'detail.features': 'Key features',
            'detail.spec': 'Technical sheet', 'detail.arch': 'Architecture', 'detail.langs': 'Languages',
            'detail.category': 'Category', 'detail.stack': 'Stack',
            'detail.deps': 'Dependencies & versions', 'detail.dep': 'Dependency', 'detail.version': 'Version',
            'detail.repo': 'View repository on GitHub',
            'tech.title': 'Technologies',
            'tech.lead': 'Tools, databases and environments I work with. Hover, focus with the keyboard or tap a card to see my proficiency level.',
            'tech.group.db': 'Databases', 'tech.group.env': 'Operating systems & environments',
            'tech.group.lang': 'Languages & tools', 'tech.level': 'Proficiency level',
            'level.basico': 'Basic', 'level.medio': 'Intermediate', 'level.avanzado': 'Advanced',
            'contact.title': 'Contact',
            'contact.lead': 'Do you have a proposal, a job opening or want to collaborate on a project? Write to me directly using this form.',
            'contact.asideTitle': "Let's talk",
            'contact.asideText': 'I am open to internships, development projects and academic collaborations.',
            'contact.location': 'Tianguistenco, State of Mexico',
            'contact.response': 'Estimated response time: 24–48 h',
            'form.required': 'Required fields',
            'form.name': 'Name', 'form.email': 'Email', 'form.subject': 'Subject', 'form.message': 'Message',
            'form.namePh': 'Your full name', 'form.emailPh': 'you@example.com',
            'form.subjectPh': 'Reason for your message', 'form.messagePh': 'Tell me about your proposal…',
            'form.privacyTitle': 'Privacy notice:',
            'form.privacy': 'the data you provide (name, email, subject and message) will be used exclusively to establish professional communication with you. It is not stored in databases or shared with third parties. By submitting this form you accept this use.',
            'form.submit': 'Send Message', 'form.sending': 'Sending…',
            'err.required': 'This field is required.',
            'err.min': 'Must contain at least {n} characters.',
            'err.max': 'Exceeds the maximum of {n} characters.',
            'err.email': 'Enter a valid email address (e.g. name@domain.com).',
            'err.html': 'For security reasons, HTML tags and scripts are not allowed.',
            'toast.okTitle': 'Message sent!',
            'toast.okText': 'Thanks for reaching out. I will reply shortly.',
            'toast.demo': 'Demo mode: the form is valid, but the sending service has not been configured yet.',
            'toast.errTitle': 'The message could not be sent',
            'toast.errText': 'A connection problem occurred. Please try again in a few minutes.',
            'toast.invalidTitle': 'Check the form',
            'toast.invalidText': 'Some fields highlighted in red need your attention.',
            'toast.close': 'Close notification',
            'footer.rights': '© 2026 Daniel Colin. All rights reserved.',
            'footer.version': 'Professional Web Portfolio · Version 2.0'
        }
    };

    const I18n = {
        lang: 'es',
        t(key, vars = {}) {
            const dict = DICTIONARIES[this.lang] || DICTIONARIES.es;
            let str = dict[key] ?? DICTIONARIES.es[key] ?? key;
            Object.keys(vars).forEach((k) => { str = str.split('{' + k + '}').join(vars[k]); });
            return str;
        },
        apply(lang) {
            if (!DICTIONARIES[lang]) return;
            this.lang = lang;
            document.documentElement.lang = lang;
            $$('[data-i18n]').forEach((el) => { el.textContent = this.t(el.dataset.i18n); });
            $$('[data-i18n-placeholder]').forEach((el) => { el.placeholder = this.t(el.dataset.i18nPlaceholder); });
            $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', this.t(el.dataset.i18nAria)); });
            document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
        }
    };
    const t = (key, vars) => I18n.t(key, vars);
    P.i18n = { DICTIONARIES, I18n, t };
})(window.Portfolio = window.Portfolio || {});
