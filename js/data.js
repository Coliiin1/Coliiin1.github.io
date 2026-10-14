/* =====================================================
   DATOS · PROYECTOS (DEV-FE-05 / DEV-FE-06)
   Para usar capturas reales en WebP, añade a cada proyecto:
   images: ['assets/img/<id>-1.webp', ...]  (mismo orden que shots)
   ===================================================== */
const GITHUB = 'https://github.com/Coliiin1';

export const PROJECTS = [
    {
        id: 'gestor-citas', title: 'Gestor de Citas Médicas', category: ['escritorio', 'bd'], featured: true,
        short: 'Sistema de escritorio para administrar pacientes, médicos y agenda de citas, con persistencia en bases de datos relacionales.',
        description: 'Análisis y diseño de un sistema de gestión médica con una arquitectura sólida. Incluye la formulación de requerimientos, el diseño de esquemas de bases de datos y el desarrollo de interfaces gráficas (GUI) en JavaFX, con soporte para PostgreSQL.',
        stack: ['Java', 'JavaFX', 'PostgreSQL', 'JDBC'], langs: ['Java', 'SQL'],
        arch: 'MVC en capas (Vista FXML · Controlador · Servicio · DAO)',
        features: ['Registro y búsqueda de pacientes y médicos', 'Agenda de citas con validación de horarios', 'Esquema relacional normalizado (3FN)', 'Especificación de requisitos funcionales y no funcionales'],
        deps: [['Java SE', '17 LTS'], ['OpenJFX', '17'], ['PostgreSQL JDBC Driver', '42']],
        repo: GITHUB, palette: ['#1f4e79', '#2a9d8f'], glyph: '+',
        shots: ['Interfaz principal', 'Modelo entidad-relación', 'Controlador JavaFX']
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
        shots: ['Panel de administración', 'Diagrama de clases', 'Capa de acceso a datos']
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
        shots: ['Simulación del circuito', 'Máquina de estados', 'Rutina de interrupción']
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
        shots: ['Ejecución en terminal', 'Estructura de módulos', 'Fragmento de código']
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
        shots: ['Diagrama entidad-relación', 'Esquema físico', 'Consultas SQL']
    },
    {
        id: 'portafolio-web', title: 'Portafolio Web Profesional V2.0', category: ['web'], featured: true,
        short: 'Este mismo sitio: SPA estática a la medida con HTML5 semántico, CSS Mobile-First y JavaScript vanilla.',
        description: 'Reingeniería integral del portafolio publicado originalmente en Google Sites. SPA estática sin dependencias externas, con menú lateral fijo, carrusel, modales, filtrado dinámico, formulario de contacto nativo con backend SMTP, accesibilidad WCAG 2.1 AA y arquitectura i18n.',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP'], langs: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        arch: 'SPA estática modular (vistas en memoria) + endpoint PHP SMTP sin persistencia',
        features: ['Navegación SPA con transiciones < 300 ms', 'Carrusel con pausa al hover y soporte táctil', 'Formulario con validación en cliente y notificación toast', 'Diseño Mobile-First y contraste WCAG 2.1 AA'],
        deps: [['JavaScript vanilla (ES2020)', '—'], ['PHP', '8.x'], ['Hosting NVMe + SSL', '—']],
        repo: 'https://github.com/Coliiin1/PortafolioWebPersonal', palette: ['#2c3e50', '#1f6fb2'], glyph: '</>',
        shots: ['Vista de inicio', 'Arquitectura de vistas', 'Módulo de navegación']
    }
];
export const projectById = (id) => PROJECTS.find((p) => p.id === id);

/* =====================================================
   DATOS · TECNOLOGÍAS (RF-15)
   Nivel: 'basico' | 'medio' | 'avanzado'
   ===================================================== */
export const TECH = [
    { group: 'db', name: 'PostgreSQL', abbr: 'PG', bg: '#336791', level: 'medio', note: 'Modelado relacional, consultas SQL, vistas y restricciones de integridad.' },
    { group: 'db', name: 'MariaDB', abbr: 'MDB', bg: '#003545', level: 'medio', note: 'Creación de esquemas, consultas e integración con Java vía JDBC.' },
    { group: 'db', name: 'SQL', abbr: 'SQL', bg: '#4a5868', level: 'medio', note: 'DDL/DML, JOIN, subconsultas y normalización.' },
    { group: 'env', name: 'Fedora Linux', abbr: 'FED', bg: '#294172', level: 'avanzado', note: 'Entorno de trabajo principal: terminal, paquetes y configuración de servicios.' },
    { group: 'env', name: 'Git y GitHub', abbr: 'GIT', bg: '#b8401f', level: 'medio', note: 'Ramas feature/, pull requests y control de versiones.' },
    { group: 'env', name: 'MPLAB X', abbr: 'MPX', bg: '#a50e26', level: 'medio', note: 'Compilación, depuración y simulación de firmware para PIC.' },
    { group: 'env', name: 'Proteus', abbr: 'PRO', bg: '#1d3557', level: 'medio', note: 'Simulación de circuitos con microcontroladores y periféricos.' },
    { group: 'lang', name: 'Java', abbr: 'JV', bg: '#8a5a12', level: 'avanzado', note: 'POO, Swing, JavaFX, JDBC y arquitectura en capas / MVC.' },
    { group: 'lang', name: 'C', abbr: 'C', bg: '#3d4a57', level: 'medio', note: 'Programación estructurada y firmware para microcontroladores.' },
    { group: 'lang', name: 'Ensamblador PIC', abbr: 'ASM', bg: '#0b6e4f', level: 'medio', note: 'Manejo de registros, puertos y rutinas de retardo.' },
    { group: 'lang', name: 'Python', abbr: 'PY', bg: '#306998', level: 'medio', note: 'Scripts de automatización y procesamiento de datos.' },
    { group: 'lang', name: 'HTML, CSS y JS', abbr: 'WEB', bg: '#b5381a', level: 'medio', note: 'Maquetación semántica, CSS responsivo y JavaScript vanilla.' },
    { group: 'lang', name: 'UML', abbr: 'UML', bg: '#2c3e50', level: 'medio', note: 'Casos de uso, diagramas de clases y de secuencia.' }
];
export const LEVEL_WIDTH = { basico: '33%', medio: '66%', avanzado: '100%' };