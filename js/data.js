(function (P) {
    'use strict';

    /* =====================================================
       DATOS · PROYECTOS (DEV-FE-05 / DEV-FE-06)
       Para usar capturas reales, añade a cada proyecto:
       images: ['assets/img/<proyecto>/<captura>.png', ...]  (mismo orden que shots)
       y define los textos de cada captura en shots (ES) y en.shots (EN).
       ===================================================== */
    const GITHUB = 'https://github.com/Coliiin1';

    const PROJECTS = [
        {
            id: 'gestor-citas', title: 'Gestor de Citas Médicas', category: ['escritorio', 'bd'], featured: true,
            short: 'Sistema de escritorio para administrar pacientes, médicos y agenda de citas, con persistencia en bases de datos relacionales.',
            description: 'Análisis y diseño de un sistema de gestión médica con una arquitectura sólida. Incluye la formulación de requerimientos, el diseño de esquemas de bases de datos y el desarrollo de interfaces gráficas (GUI) en JavaFX, con soporte para PostgreSQL.',
            stack: ['Java', 'JavaFX', 'PostgreSQL', 'JDBC'], langs: ['Java', 'SQL'],
            arch: 'MVC en capas (Vista FXML · Controlador · Servicio · DAO)',
            features: ['Registro y búsqueda de pacientes y médicos', 'Agenda de citas con validación de horarios', 'Esquema relacional normalizado (3FN)', 'Especificación de requisitos funcionales y no funcionales'],
            deps: [['Java SE', '17 LTS'], ['OpenJFX', '17'], ['PostgreSQL JDBC Driver', '42']],
            repo: GITHUB, palette: ['#1f4e79', '#2a9d8f'], glyph: '+',
            images: ['assets/img/Gestor%20Citas/Img.png'],
            en: {
                title: 'Medical Appointment Manager',
                short: 'Desktop system for managing patients, doctors and appointment scheduling, backed by a relational database.',
                description: 'Analysis and design of a medical management system with a solid architecture. It covers requirements specification, database schema design and graphical user interface (GUI) development in JavaFX, with PostgreSQL support.',
                arch: 'Layered MVC (FXML View · Controller · Service · DAO)',
                features: ['Patient and doctor registration and search', 'Appointment scheduling with time-slot validation', 'Normalized relational schema (3NF)', 'Functional and non-functional requirements specification'],
                shots: ['Weekly medical appointment schedule']
            },
            shots: ['Agenda semanal de citas médicas']
        },
        {
            id: 'catalogo-productos', title: 'Catálogo de Productos', category: ['escritorio', 'bd'], featured: true,
            short: 'Aplicación con arquitectura en capas y POO que gestiona niveles de acceso para administradores y usuarios.',
            description: 'Aplicación desarrollada con arquitectura en capas y principios de programación orientada a objetos (POO). Gestiona distintos niveles de acceso para administradores y usuarios, con persistencia en base de datos e interfaces construidas con Swing (JFrame, JPanel).',
            stack: ['Java', 'Swing'], langs: ['Java'],
            arch: 'Arquitectura en capas (Presentación · Lógica de negocio · Acceso a datos)',
            features: ['Inicio de sesión con roles (administrador / usuario)', 'Altas, bajas y cambios de productos y categorías', 'Búsqueda y filtrado del catálogo', 'Encapsulamiento, herencia y polimorfismo aplicados'],
            deps: [['Java SE', '17 LTS'], ['Swing (JFrame, JPanel)', 'JDK']],
            repo: GITHUB, palette: ['#5b3a8c', '#1f6fb2'], glyph: '{ }',
            images: ['assets/img/Catalogo%20de%20Productos/Captura%20de%20pantalla%202026-10-21%20124918.png'],
            en: {
                title: 'Product Catalog',
                short: 'Layered application built with OOP that manages access levels for administrators and users.',
                description: 'Application developed with a layered architecture and object-oriented programming (OOP) principles. It manages different access levels for administrators and users, with database persistence and interfaces built with Swing (JFrame, JPanel).',
                arch: 'Layered architecture (Presentation · Business logic · Data access)',
                features: ['Role-based login (administrator / user)', 'Create, update and delete products and categories', 'Catalog search and filtering', 'Applied encapsulation, inheritance and polymorphism'],
                shots: ['Product catalog with category filters']
            },
            shots: ['Catálogo con filtros por categoría']
        },

        {
            id: 'pic-c', title: 'Control Embebido con PIC18F4550 en C', category: ['microcontroladores'], featured: false,
            short: 'Firmware en C para el PIC18F4550 orientado al manejo de puertos, temporizadores e interrupciones.',
            description: 'Programas en lenguaje C para el microcontrolador PIC18F4550 enfocados en el manejo de puertos de entrada/salida, temporizadores e interrupciones, validados en simulación antes de su implementación física.',
            stack: ['C', 'PIC18F4550', 'XC8', 'MPLAB X'], langs: ['C'],
            arch: 'Firmware basado en interrupciones y máquina de estados',
            features: ['Configuración de puertos de E/S', 'Uso de temporizadores e interrupciones', 'Lectura de entradas digitales y control de salidas', 'Validación en simulación previa al montaje'],
            deps: [['MPLAB X IDE', '6.x'], ['Compilador MPLAB XC8', '2.x'], ['Proteus Design Suite', '8.x']],
            repo: GITHUB, palette: ['#264653', '#c8553d'], glyph: 'C',
            images: ['assets/img/PIC18F4550/placa-desarrollo.jpg'],
            en: {
                title: 'Embedded Control with PIC18F4550 in C',
                short: 'C firmware for the PIC18F4550 focused on port handling, timers and interrupts.',
                description: 'C programs for the PIC18F4550 microcontroller focused on input/output port handling, timers and interrupts, validated in simulation before physical implementation.',
                arch: 'Interrupt-driven firmware and state machine',
                features: ['I/O port configuration', 'Use of timers and interrupts', 'Digital input reading and output control', 'Simulation validation before assembly'],
                deps: [['MPLAB X IDE', '6.x'], ['MPLAB XC8 Compiler', '2.x'], ['Proteus Design Suite', '8.x']],
                shots: ['Circuit board with microcontroller and peripherals']
            },
            shots: ['Placa de circuito con microcontrolador y periféricos']
        },
        {
            id: 'scripts-python', title: 'Cerberus IDE', category: ['escritorio'], featured: true,
            short: 'Cerberus es un lenguaje de programación educativo, escrito en español, diseñado para facilitar el aprendizaje de programación y de programación orientada a objetos.',
            description: 'Cerberus es un lenguaje de programación educativo, escrito en español, diseñado para facilitar el aprendizaje de programación y de programación orientada a objetos.Su sintaxis toma como referencia conceptos y formas de escritura presentes en Java, pero adapta los elementos principales al español y busca una sintaxis más sencilla y comprensible para estudiantes con conocimientos básicos de programación.',
            stack: ['Java', 'JavaFX', 'Maven'], langs: ['Java'],
            arch: 'Arquitectura en capas (Presentación · Lógica de negocio · Acceso a datos)',
            features: ['Funciones y tipos de datos en español', 'Control de flujo con palabras reservadas en español (ej: si/entonces, mientras/hacer)', 'Soporte para clases(En desarrollo), métodos con sintaxis adaptada'],
            deps: [['Java', '25'], ['Biblioteca estándar (Maven)', '—']],
            repo: GITHUB, palette: ['#306998', '#b8860b'], glyph: 'IDE',
            images: ['assets/img/Cerberus/WhatsApp%20Image%202026-10-21%20at%2012.50.01%20PM.jpeg'],
            en: {
                title: 'Cerberus IDE',
                short: 'Cerberus is an educational programming language with keywords in Spanish, designed to make learning programming and object-oriented programming easier.',
                description: 'Cerberus is an educational programming language, written in Spanish, designed to make learning programming and object-oriented programming easier. Its syntax draws on concepts and writing conventions found in Java, but adapts the main elements to Spanish and aims for simpler, more understandable syntax for students with basic programming knowledge.',
                arch: 'Layered architecture (Presentation · Business logic · Data access)',
                features: ['Functions and data types in Spanish', 'Control flow with Spanish reserved words (e.g. si/entonces, mientras/hacer)', 'Support for classes (in development) and methods with adapted syntax'],
                deps: [['Java', '25'], ['Standard library (Maven)', '—']],
                shots: ['Editor with lexical and syntax analyzer']
            },
            shots: ['Editor con analizador léxico y sintáctico']
        },
        {
            id: 'modelado-bd', title: 'Diseño de Bases de Datos Relacionales', category: ['bd'], featured: false,
            short: 'Modelado, normalización e implementación de esquemas relacionales en PostgreSQL y MariaDB.',
            description: 'Proyectos de diseño de bases de datos que abarcan desde el modelo entidad-relación y la normalización hasta la implementación física en PostgreSQL y MariaDB, incluyendo restricciones de integridad, vistas y consultas complejas.',
            stack: ['PostgreSQL', 'MariaDB', 'SQL'], langs: ['SQL'],
            arch: 'Modelo relacional normalizado (3FN) con integridad referencial',
            features: ['Diagramas entidad-relación', 'Normalización hasta tercera forma normal', 'Restricciones, llaves foráneas y vistas', 'Consultas con JOIN y subconsultas'],
            deps: [['PostgreSQL', '16'], ['MariaDB', '11'], ['pgAdmin / DBeaver', '—']],
            repo: GITHUB, palette: ['#336791', '#003545'], glyph: 'SQL',
            images: ['assets/img/Modelado-BD/servidores-bd.jpg'],
            en: {
                title: 'Relational Database Design',
                short: 'Modeling, normalization and implementation of relational schemas in PostgreSQL and MariaDB.',
                description: 'Database design projects covering everything from entity-relationship modeling and normalization to physical implementation in PostgreSQL and MariaDB, including integrity constraints, views and complex queries.',
                arch: 'Normalized relational model (3NF) with referential integrity',
                features: ['Entity-relationship diagrams', 'Normalization up to third normal form', 'Constraints, foreign keys and views', 'JOIN queries and subqueries'],
                shots: ['Server infrastructure for relational databases']
            },
            shots: ['Infraestructura de servidores para bases de datos relacionales']
        },
        {
            id: 'portafolio-web', title: 'Portafolio Web Profesional', category: ['web'], featured: true,
            short: 'Este mismo sitio: SPA estática a la medida con HTML5 semántico, CSS Mobile-First y JavaScript vanilla.',
            description: 'Reingeniería integral del portafolio publicado originalmente en Google Sites. SPA estática sin dependencias externas, con menú superior fijo, carrusel, modales, filtrado dinámico, formulario de contacto nativo con backend SMTP, accesibilidad WCAG 2.1 AA y arquitectura i18n.',
            stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP'], langs: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            arch: 'SPA estática modular (vistas en memoria) + endpoint PHP SMTP sin persistencia',
            features: ['Navegación SPA con transiciones < 300 ms', 'Carrusel con pausa al hover y soporte táctil', 'Formulario con validación en cliente y notificación toast', 'Diseño Mobile-First y contraste WCAG 2.1 AA'],
            deps: [['JavaScript vanilla (ES2020)', '—'], ['PHP', '8.x'], ['Hosting NVMe + SSL', '—']],
            repo: 'https://github.com/Coliiin1/Coliiin1.github.io', palette: ['#2c3e50', '#1f6fb2'], glyph: '</>',
            images: ['assets/img/Portafolio-Web/desarrollo-web.jpg'],
            en: {
                title: 'Professional Web Portfolio',
                short: 'This very site: a tailored static SPA built with semantic HTML5, Mobile-First CSS and vanilla JavaScript.',
                description: 'Comprehensive redesign of the portfolio originally published on Google Sites. A static SPA with no external dependencies, featuring a sticky top navigation, carousel, modals, dynamic filtering, a native contact form with an SMTP backend, WCAG 2.1 AA accessibility and an i18n architecture.',
                arch: 'Modular static SPA (in-memory views) + PHP SMTP endpoint without persistence',
                features: ['SPA navigation with transitions under 300 ms', 'Carousel with pause on hover and touch support', 'Form with client-side validation and toast notifications', 'Mobile-First design and WCAG 2.1 AA contrast'],
                deps: [['Vanilla JavaScript (ES2020)', '—'], ['PHP', '8.x'], ['NVMe hosting + SSL', '—']],
                shots: ['Web development with HTML, CSS and JavaScript']
            },
            shots: ['Desarrollo web con HTML, CSS y JavaScript']
        }
    ];

    const lang = () => (P.i18n && P.i18n.I18n.lang) || 'es';
    const localize = (item) => (lang() === 'es' || !item.en ? item : Object.assign({}, item, item.en));
    const getProjects = () => PROJECTS.map(localize);
    const projectById = (id) => {
        const project = PROJECTS.find((p) => p.id === id);
        return project ? localize(project) : undefined;
    };

    /* =====================================================
       DATOS · TECNOLOGÍAS (RF-15)
       Nivel: 'basico' | 'medio' | 'avanzado'
       ===================================================== */
    const TECH = [
        { group: 'db', name: 'PostgreSQL', icons: ['postgresql'], bg: '#336791', level: 'medio', note: 'Modelado relacional, consultas SQL, vistas y restricciones de integridad.', en: { note: 'Relational modeling, SQL queries, views and integrity constraints.' } },
        { group: 'db', name: 'MariaDB', icons: ['mariadb'], bg: '#003545', level: 'medio', note: 'Creación de esquemas, consultas e integración con Java vía JDBC.', en: { note: 'Schema creation, queries and Java integration via JDBC.' } },
        { group: 'db', name: 'SQL', icons: ['sql'], bg: '#4a5868', level: 'medio', note: 'DDL/DML, JOIN, subconsultas y normalización.', en: { note: 'DDL/DML, JOINs, subqueries and normalization.' } },
        { group: 'env', name: 'Fedora Linux', icons: ['fedora'], bg: '#294172', level: 'avanzado', note: 'Entorno de trabajo principal: terminal, paquetes y configuración de servicios.', en: { note: 'Primary work environment: terminal, packages and service configuration.' } },
        { group: 'env', name: 'Git y GitHub', icons: ['git', 'github'], bg: '#b8401f', level: 'medio', note: 'Ramas feature/, pull requests y control de versiones.', en: { name: 'Git & GitHub', note: 'Feature branches, pull requests and version control.' } },
        { group: 'env', name: 'MPLAB X', icons: ['mplabx'], bg: '#a50e26', level: 'medio', note: 'Compilación, depuración y simulación de firmware para PIC.', en: { note: 'Firmware compilation, debugging and simulation for PIC.' } },
        { group: 'env', name: 'Proteus', icons: ['proteus'], bg: '#1d3557', level: 'medio', note: 'Simulación de circuitos con microcontroladores y periféricos.', en: { note: 'Circuit simulation with microcontrollers and peripherals.' } },
        { group: 'lang', name: 'Java', icons: ['java'], bg: '#8a5a12', level: 'avanzado', note: 'POO, Swing, JavaFX, JDBC y arquitectura en capas / MVC.', en: { note: 'OOP, Swing, JavaFX, JDBC and layered / MVC architecture.' } },
        { group: 'lang', name: 'C', icons: ['c'], bg: '#3d4a57', level: 'medio', note: 'Programación estructurada y firmware para microcontroladores.', en: { note: 'Structured programming and firmware for microcontrollers.' } },
        { group: 'lang', name: 'Ensamblador PIC', icons: ['assembly'], bg: '#0b6e4f', level: 'medio', note: 'Manejo de registros, puertos y rutinas de retardo.', en: { name: 'PIC Assembly', note: 'Register, port and delay routine handling.' } },
        { group: 'lang', name: 'Python', icons: ['python'], bg: '#306998', level: 'medio', note: 'Scripts de automatización y procesamiento de datos.', en: { note: 'Automation scripts and data processing.' } },
        { group: 'lang', name: 'HTML, CSS y JS', icons: ['html5', 'css3', 'javascript'], bg: '#b5381a', level: 'medio', note: 'Maquetación semántica, CSS responsivo y JavaScript vanilla.', en: { name: 'HTML, CSS & JS', note: 'Semantic markup, responsive CSS and vanilla JavaScript.' } },
        { group: 'lang', name: 'UML', icons: ['uml'], bg: '#2c3e50', level: 'medio', note: 'Casos de uso, diagramas de clases y de secuencia.', en: { note: 'Use cases, class and sequence diagrams.' } },
        { group: 'ai', name: 'opencode', icons: ['opencode'], bg: '#0E7490', level: 'medio', note: 'Agente de programación en terminal para editar, depurar y generar cambios.', en: { note: 'Terminal coding agent for editing, debugging and generating changes.' } },
        { group: 'ai', name: 'Antigravity', icons: ['antigravity'], bg: '#4285F4', level: 'medio', note: 'IDE de Google con asistencia de IA para explorar, editar y generar código.', en: { note: 'Google IDE with AI assistance to explore, edit and generate code.' } },
        { group: 'ai', name: 'Codex', icons: ['codex'], bg: '#10A37F', level: 'medio', note: 'Agente de OpenAI para generar y explicar código.', en: { note: 'OpenAI agent for generating and explaining code.' } }
    ];
    const LEVEL_WIDTH = { basico: '33%', medio: '66%', avanzado: '100%' };
    const getTech = () => TECH.map(localize);
    P.data = { PROJECTS, projectById, getProjects, TECH, getTech, LEVEL_WIDTH };
})(window.Portfolio = window.Portfolio || {});
