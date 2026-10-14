# Plan de Desarrollo de Nuevas Versiones e Iteraciones del Portafolio Web Profesional

## Documento Guía de Implementación, Metodología de Ingeniería Evolutiva y Control de Calidad (QA)

> **Institución:** Universidad Autónoma del Estado de México (UAEMex) — Centro Universitario UAEMex Tianguistenco  
> **Programa Académico:** Licenciatura en Ingeniería en Software  
> **Unidad de Aprendizaje:** Métodos y Modelos de Desarrollo de Software  
> **Alumno:** Carlos Daniel Ávila Colin (Grupo: SG)  
> **Profesor Titular:** M. en C. José Rafael Cruz Reyes  
> **Fecha de Emisión:** Octubre de 2026 | **Versión del Plan:** 2.0.0  
> **Repositorio Oficial de Control de Versiones:** [GitHub \- Coliiin1/PWebPersonal](https://github.com/Coliiin1/PWebPersonal) (Rama principal: `main`) | **Sitio publicado (GitHub Pages):** [coliiin1.github.io/PWebPersonal](https://coliiin1.github.io/PWebPersonal/)  
> **Entorno de Publicación de Referencia (V1.0):** [Google Sites \- Portafolio Daniel Colin](https://sites.google.com/view/portafolio-web-daniel-colin/inicio)

---

## 1\. Introducción y Contexto del Proyecto

El presente documento, denominado formalmente **`Iteraciones.md`**, establece la estrategia metodológica, la planificación incremental y el marco operativo de aseguramiento de calidad (QA) para el desarrollo y evolución del **Portafolio Web Profesional** de Carlos Daniel Ávila Colin. Este proyecto surge como respuesta a la necesidad de contar con una plataforma web de alto impacto que consolide y exhiba de manera rigurosa las competencias, proyectos de software y trayectoria académica adquirida en la Licenciatura en Ingeniería en Software del Centro Universitario UAEMex Tianguistenco.

### 1.1 Diagnóstico de la Versión Actual (Versión 1.0 en Google Sites)

De acuerdo con el análisis de sistemas y diagnóstico situacional documentado en el reporte de la organización (`T9AVILA.pdf`), la versión preliminar del portafolio (V1.0) fue implementada sobre la plataforma Google Sites. Aunque dicho prototipo permitió una presencia inicial en la web, el diagnóstico técnico identificó las siguientes fallas críticas y áreas de oportunidad sustantivas:

1. **Carencia de Profundidad Técnica en Proyectos:** La sección de proyectos exhibe información escasa y superficial, omitiendo los desarrollos medulares generados durante la formación universitaria en áreas como Programación Orientada a Objetos en Java, scripts de automatización en Python, microcontroladores PIC en bajo nivel (ensamblador/C) y sistemas de gestión de bases de datos relacionales (PostgreSQL, MariaDB).  
2. **Falla Crítica de Integración en el Canal de Contacto:** El uso de un formulario externo incrustado mediante un `<iframe>` de Google Forms rompe la identidad visual del sitio, carece de validación en tiempo real en el cliente, introduce fricción cognitiva y transmite una percepción de informalidad incompatible con el sector tecnológico corporativo.  
3. **Rigidez de Plantillas y Limitada Mantenibilidad:** La dependencia de Google Sites restringe la personalización ergonómica de la interfaz de usuario (UI), impide optimizaciones avanzadas de rendimiento y limita la actualización dinámica de proyectos y tecnologías.  
4. **Barreras de Infraestructura y Posicionamiento:** La plataforma previa depende de URLs extensas no corporativas y carece de un servidor de hosting con tecnología NVMe, soporte para configuraciones avanzadas de servidor (`.htaccess`, compresión gzip, directivas de caché inmutable) y certificado SSL gestionado con clave criptográfica propia.

### 1.2 Estrategia de Ingeniería de Software Evolutiva e Incremental

En lugar de descartar el esfuerzo invertido, se adopta un **modelo de ingeniería evolutiva e incremental**. Se toma como punto de partida la estructura conceptual válida de la V1.0 (sus 5 áreas nodales: Inicio, Mi información, Mis proyectos, Tecnologías y Contacto) y se emprende una reingeniería integral para construir la **Versión 2.0 (V2.0)** como un desarrollo propio a la medida.

El análisis de factibilidad económica y técnica (`T9AVILA.pdf`) determinó que un desarrollo propio a la medida representa la mejor alternativa, pues mientras agencias comerciales cotizan portales equivalentes entre **\$9,900 MXN** y más de **\$80,000 MXN**, el desarrollo propio capitaliza el perfil técnico del estudiante, logrando independencia tecnológica, máxima optimización de rendimiento (Core Web Vitals) y costos de infraestructura acotados a hosting NVMe y dominio propio (\~\$1,500–\$2,500 MXN anuales).

---

## 2\. Marco Metodológico del Proceso Iterativo e Incremental

Para asegurar un avance controlado, predecible y verificable, cada iteración de desarrollo se concibe como un ciclo completo de ingeniería de software estructurado en seis fases estándar:

\+------------------------------------------------------------------------------------------------+

|                               CICLO DE VIDA DE CADA ITERACIÓN                                  |

\+-------------------+----------------------------------------------------------------------------+

| 1\. Planificación  | Selección de requerimientos del backlog (RF / RNF), priorización y alcance.|

| 2\. Especificación | Refinamiento de preguntas técnicas, criterios de aceptación y mockups.     |

| 3\. Diseño Técnico | Modelado de arquitectura, definición de selectores CSS y lógica de scripts. |

| 4\. Implementación | Codificación en componentes DEV en ramas Git específicas (\`feature/DEV-xx\`).|

| 5\. Fase de Pruebas| Ejecución formal del caso de prueba (TC-xxx), validación y dictamen QA.   |

| 6\. Liberación/DoD | Revisión de código, merge a rama principal (\`main\`) y cierre de iteración. |

\+-------------------+----------------------------------------------------------------------------+

### 2.1 Protocolo de Flujo de Trabajo en Git y Control de Versiones

- **Repositorio Central:** `https://github.com/Coliiin1/PWebPersonal`  
- **Rama Principal (`main`):** Aloja el código estable y probado listo para despliegue en producción. Toda incorporación a `main` requiere la aprobación satisfactoria de la fase de pruebas.  
- **Ramas de Característica (`feature/DEV-xx-nombre`):** Cada requerimiento o componente DEV se implementa en una rama aislada (ej. `feature/DEV-FE-03-carousel`, `feature/DEV-BE-01-smtp`).  
- **Ramas de Verificación QA (`qa/TC-xxx-testing`):** Utilizadas para pruebas de regresión, auditorías automatizadas (Lighthouse, axe) o scripts de carga.  
- **Política de Pull Requests (PR):** Ninguna rama puede fusionarse a `main` sin haber superado los criterios de aceptación y contar con el dictamen de `APROBADO (PASS)` en su correspondiente espacio de pruebas.

### 2.2 Criterios de Aceptación Globales ("Definition of Done" \- DoD)

Un requerimiento se considera formalmente terminado ("Done") únicamente si cumple de forma copulativa con las siguientes condiciones:

1. **Código Fuente Conforme:** El componente DEV cumple estrictamente la especificación técnica definida en la matriz de trazabilidad y utiliza marcado semántico HTML5, estilos CSS Mobile-First y JavaScript vanilla modular sin dependencias externas pesadas.  
2. **Fase de Pruebas Superada:** El caso de prueba asignado (TC-xxx) ha sido ejecutado en su totalidad, registrando evidencia objetiva y obteniendo dictamen `APROBADO (PASS)`.  
3. **Sin Regresión:** La nueva funcionalidad no degrada el rendimiento de vistas previamente construidas ni altera el layout responsivo.  
4. **Trazabilidad Verificada:** Se encuentra vinculado a su objetivo de negocio (OBJ-xx) y referencia visual (Wireframe/Mockup).

---

## 3\. Hoja de Ruta General de Versiones (Version Roadmap)

La transición tecnológica y evolución del portal se proyecta a través de tres versiones estratégicas:

\+-------------------------------------------------------------------------------------------------+

|                                HOJA DE RUTA DE VERSIONES (ROADMAP)                              |

\+----------------+--------------------+-----------------------------------------------------------+

| Versión        | Estado / Periodo   | Descripción y Alcance General                             |

\+----------------+--------------------+-----------------------------------------------------------+

| Versión 1.0    | Concluida (Legacy) | Prototipo inicial publicado en Google Sites. Servidor     |

| (Línea base)   |                    | compartido, formulario externo Google Forms, contenido    |

|                |                    | superficial y catálogo básico de proyectos.               |

\+----------------+--------------------+-----------------------------------------------------------+

| Versión 2.0    | En Desarrollo      | Reingeniería integral a la medida: SPA estática nativa    |

| (Core Release) | (8 Iteraciones)    | alojada en hosting GoDaddy con NVMe, menú lateral fijo,   |

|                |                    | carrusel dinámico, modales rápidos, grid de 4 columnas,   |

|                |                    | fichas técnicas detalladas con enlaces a GitHub, filtrado |

|                |                    | dinámico, formulario nativo con backend SMTP TLS privado, |

|                |                    | optimización WebP, WCAG 2.1 AA y arquitectura i18n base.  |

\+----------------+--------------------+-----------------------------------------------------------+

| Versión 2.1    | Futura Proyección  | Internacionalización Completa: Conmutador de idioma en    |

| (Minor Update) | (Iteración 9\)      | tiempo real (Español / Inglés), traducción íntegra de     |

|                |                    | fichas técnicas, bio y diccionarios JSON automatizados.   |

\+----------------+--------------------+-----------------------------------------------------------+

| Versión 3.0    | Futura Proyección  | Automatización y Escalabilidad Avanzada: Pipeline de      |

| (Major Update) | (Iteración 10\)     | Integración Continua (CI/CD) con GitHub Actions, micro-   |

|                |                    | CMS headless para gestión desacoplada de proyectos y      |

|                |                    | panel de analítica web orientada a la privacidad.         |

\+----------------+--------------------+-----------------------------------------------------------+

---

## 4\. Desarrollo Detallado por Iteración y Espacio de Pruebas

A continuación se presenta el desglose exhaustivo de las **8 Iteraciones de Desarrollo** que componen la **Versión 2.0**. Cada requerimiento funcional (RF) y no funcional (RNF) cuenta con su espacio de implementación técnica y su **espacio formal para la fase de pruebas (QA)**, dotado de listas de verificación ejecutables, criterios de aceptación específicos y casillas de marcado para registrar si las pruebas se van pasando satisfactoriamente.

### Iteración 1: Arquitectura Base, Maquetación Global y Navegación Mobile-First

**Periodo sugerido:** Semana 1 | **Componentes DEV involucrados:** `DEV-FE-01, DEV-FE-02, DEV-FE-09` **Objetivo de la Iteración:** Establecer la estructura HTML5 semántica principal, el layout responsivo Mobile-First y el panel de navegación lateral persistente desacoplado del área de contenido principal para evitar solapamientos en cualquier resolución.

#### Requerimientos a Implementar en esta Iteración:

##### \[RF-10\] El sistema debe implementar un menú lateral fijo de navegación ubicado a la izquierda de la interfaz, el cual permanecerá estático y accesible en todas las vistas de la página web.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-05` — *Navegación fluida e intuitiva*  
- **Referencia de Diseño (Mockup):** Figura 1, elementos 1 y 2  
- **Componente(s) de Desarrollo:** `DEV-FE-02 (css/styles.css) | DEV-FE-09 (js/nav.js)`  
- **Rama Git Asignada:** `feature/rf-10-dev-fe-02`

**Especificaciones Técnicas de Implementación:**

- Panel de navegación lateral con position: fixed, left: 0, top: 0, height: 100vh.  
- Lista vertical de navegación () con ancho fijo de 240px en pantallas de escritorio.  
- Manejo reactivo de estado activo en enlaces de menú mediante JavaScript al disparar el cambio de vista.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-010` | **Tipo de Prueba:** Funcional / Navegación | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 1, elementos 1 y 2  
>   
> **Precondición:** Sitio en ejecución en resolución de escritorio.  
>   
> **Criterios de Aceptación a Verificar:** • Panel lateral fijo de navegación (position: fixed, left: 0, top: 0, height: 100vh, width: 240px). • Contiene avatar, 5 enlaces de navegación (Inicio, Mi información, Mis proyectos, Tecnologías, Contacto) y redes. • Manejo reactivo de estado activo con clase CSS (.nav-item-active) con resalte visual de fondo.  
>   
> **Método de Verificación Sugerido:** Prueba de navegación lateral y verificación de clase activa  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-11\] El sistema debe estructurar sus márgenes para que los rótulos y contenedores principales de la página no se superpongan ni oculten detrás del menú lateral en ninguna resolución.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-05` — *Navegación fluida e intuitiva*  
- **Referencia de Diseño (Mockup):** Figura 1, elemento 4  
- **Componente(s) de Desarrollo:** `DEV-FE-02 (css/styles.css)`  
- **Rama Git Asignada:** `feature/rf-11-dev-fe-02`

**Especificaciones Técnicas de Implementación:**

- Reglas de espaciado y márgenes de contenedor desacopladas de la barra fija.  
- Propiedad margin-left: 260px en media query desktop; layout no superpuesto verificado por CSS box-model.  
- Regla media query: @media (max-width: 767px) { main { margin-left: 0; padding: 1rem; } }.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-011` | **Tipo de Prueba:** Responsivo / CSS | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 1, elemento 4  
>   
> **Precondición:** Navegación en diferentes anchos de pantalla.  
>   
> **Criterios de Aceptación a Verificar:** • Contenedor principal con margen compensatorio (margin-left: 260px) en escritorio evitando superposición. • Verificación de CSS box-model sin contenido tapado detrás de la barra lateral. • En viewports móviles (\< 768px), margen restablecido a 0 con padding de 16px y menú adaptado superior/colapsable.  
>   
> **Método de Verificación Sugerido:** Inspección de box-model en DevTools en escritorio, tablet y móvil  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-07\] El sistema debe estar estructurado bajo una arquitectura "Mobile-First", garantizando un diseño responsivo que opere sin defectos visuales en smartphones y tabletas.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-07` — *Acceso desde cualquier dispositivo*  
- **Referencia de Diseño (Mockup):** Transversal (adaptabilidad de wireframes)  
- **Componente(s) de Desarrollo:** `DEV-FE-02 (css/styles.css)`  
- **Rama Git Asignada:** `feature/rnf-07-dev-fe-02`

**Especificaciones Técnicas de Implementación:**

- Estrategia de diseño y estilización Mobile-First en hojas de estilo CSS.  
- Uso exclusivo de media queries min-width para carga progresiva de layout en pantallas grandes.  
- Cumplimiento de auditoría de usabilidad móvil de Google: 'Mobile-Friendly' con 100% de aprobación.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-023` | **Tipo de Prueba:** Responsivo | **Prioridad:** Alta **Referencia de Interfaz (UI):** Transversal (adaptabilidad de wireframes)  
>   
> **Precondición:** Visualización en dispositivos móviles y tabletas.  
>   
> **Criterios de Aceptación a Verificar:** • Estructuración CSS Mobile-First utilizando reglas @media (min-width). • Cero desbordamiento horizontal en el eje X (sin scroll horizontal no deseado) en ninguna resolución. • Áreas de toque mínimas de 48x48px en botones e iconos y aprobación 100% Mobile-Friendly.  
>   
> **Método de Verificación Sugerido:** Auditoría Mobile-Friendly de Google y prueba en emulador responsive  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

#### Cierre y Verificación de la Iteración 1

- [ ] Todos los requerimientos de la Iteración 1 implementados en sus componentes DEV correspondientes.  
- [ ] Todos los Casos de Prueba asociados (TC-010, TC-011, TC-023) con dictamen `APROBADO (PASS)`.  
- [ ] Revisión de código (Code Review) completada y Pull Requests aprobados hacia la rama `main`.  
- [ ] Despliegue preliminar en entorno local/staging certificado para proceder a la siguiente iteración.

---

### Iteración 2: Identidad Profesional, Sección 'Mi Información' y Descarga de CV

**Periodo sugerido:** Semana 2 | **Componentes DEV involucrados:** `DEV-FE-01, DEV-FE-02, DEV-FE-04, DEV-DOC-01` **Objetivo de la Iteración:** Materializar la sección de presentación Hero, semblanza biográfica, trayectoria académica en UAEMex Tianguistenco, competencias estructuradas, hipervínculos vectoriales a perfiles profesionales y el botón principal CTA para descarga directa del CV en formato PDF.

#### Requerimientos a Implementar en esta Iteración:

##### \[RF-01\] El sistema debe contar con una página principal que muestre la información general y perfil como estudiante de Ingeniería en Software, incluyendo un carrusel dinámico de proyectos destacados en la vista de inicio.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-04` — *Identidad inmediata al entrar*  
- **Referencia de Diseño (Mockup):** Figura 2, elemento 1 y elemento 2  
- **Componente(s) de Desarrollo:** `DEV-FE-01 (index.html#inicio) | DEV-FE-03 (js/carousel.js)`  
- **Rama Git Asignada:** `feature/rf-01-dev-fe-01`

**Especificaciones Técnicas de Implementación:**

- Sección Hero con título profesional, resumen de perfil institucional y componente carrusel interactivo en el home.  
- Rotación cíclica cada 5000 ms, evento mouseenter/mouseleave para pausa y reanudación, soporte táctil (touch-swipe) en móviles.  
- Límite de 3 a 5 tarjetas destacadas con renderizado optimizado de miniaturas y disparador de modal individual.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-001` | **Tipo de Prueba:** Funcional / UI | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 2, elemento 1 y elemento 2  
>   
> **Precondición:** Sitio publicado en entorno local o hosting de pruebas GoDaddy.  
>   
> **Criterios de Aceptación a Verificar:** • Sección Hero con título profesional, resumen de perfil institucional y carrusel interactivo en home. • Rotación cíclica cada 5000 ms, evento mouseenter/mouseleave para pausa y soporte touch-swipe en móvil. • Límite de 3 a 5 tarjetas destacadas con renderizado WebP y disparador de modal individual.  
>   
> **Método de Verificación Sugerido:** Inspección visual en navegador y prueba interactiva del carrusel  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-03\] El sistema debe contar con una sección de "Mi información" que contenga la biografía profesional, la formación académica en el Centro Universitario UAEMex Tianguistenco y las competencias adquiridas.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-02` — *Posicionamiento como ingeniero competente*  
- **Referencia de Diseño (Mockup):** Figura 4, elementos 1, 2 y 3  
- **Componente(s) de Desarrollo:** `DEV-FE-04 (index.html#mi-informacion)`  
- **Rama Git Asignada:** `feature/rf-03-dev-fe-04`

**Especificaciones Técnicas de Implementación:**

- Estructura modular en 3 bloques independientes: Biografía, Formación académica y Competencias profesionales.  
- Alineación visual en bloques con títulos claros H2/H3 y diseño tipo currículum interactivo estructurado.  
- Listas de viñetas o tags estructurados sin mezclar áreas conceptuales con herramientas operativas.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-003` | **Tipo de Prueba:** Funcional / Contenido | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 4, elementos 1, 2 y 3  
>   
> **Precondición:** Sitio en ejecución; acceso a la sección Mi información.  
>   
> **Criterios de Aceptación a Verificar:** • Estructura modular en 3 bloques independientes: Biografía, Formación académica y Competencias. • Alineación visual clara en tarjetas con encabezados H2/H3 tipo currículum estructurado. • Competencias categorizadas en: Desarrollo, Bases de datos, Req/UML y Sistemas embebidos.  
>   
> **Método de Verificación Sugerido:** Revisión de contenidos contra perfil profesional y trayectoria  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-13\] El sistema debe incluir un botón de acción principal y visible en la sección de "Mi información" que dispare la descarga directa del Currículum Vitae en formato PDF alojado en el servidor.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-08` — *Atracción de reclutadores y vinculación*  
- **Referencia de Diseño (Mockup):** Figura 4, elemento 4  
- **Componente(s) de Desarrollo:** `DEV-FE-04 (index.html#mi-informacion) | DEV-DOC-01 (assets/docs/CV_Carlos_Daniel_Avila.pdf)`  
- **Rama Git Asignada:** `feature/rf-13-dev-fe-04`

**Especificaciones Técnicas de Implementación:**

- Botón de llamada a la acción (CTA) de primer orden visual en la sección de biografía.  
- Estilizado con clase CSS .btn-primary-cta con padding amplio (12px 24px) y microinteracción :hover.  
- Atributo download con nomenclatura estandarizada forzando descarga de archivo PDF estático.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-013` | **Tipo de Prueba:** Funcional / Descarga | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 4, elemento 4  
>   
> **Precondición:** Sección Mi información en pantalla.  
>   
> **Criterios de Aceptación a Verificar:** • Botón primario de llamada a la acción (CTA) destacado con estilo .btn-primary-cta e icono de PDF. • Enlace con atributo download forzando la descarga directa del documento binario. • Archivo PDF 'CV\_Carlos\_Daniel\_Avila.pdf' entregado íntegramente sin abrir pestañas vacías.  
>   
> **Método de Verificación Sugerido:** Clic en botón de descarga y verificación de integridad del PDF  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-14\] El sistema debe incluir hipervínculos con iconografía vectorizada en la parte inferior del menú lateral, apuntando directamente a los perfiles profesionales de GitHub y LinkedIn.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-01` — *Visibilidad profesional pública*  
- **Referencia de Diseño (Mockup):** Figura 1, elemento 3  
- **Componente(s) de Desarrollo:** `DEV-FE-02 (css/styles.css) | DEV-FE-01 (index.html)`  
- **Rama Git Asignada:** `feature/rf-14-dev-fe-02`

**Especificaciones Técnicas de Implementación:**

- Bloque inferior de enlaces de redes profesionales fijado al pie del menú lateral.  
- Etiquetas vectoriales con viewBox='0 0 24 24', dimensiones de 24x24px y color adaptable con fill: currentColor.  
- Hipervínculos seguros con verificación de atributos noopener noreferrer y transiciones CSS de color.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-014` | **Tipo de Prueba:** Integración / Redes | **Prioridad:** Media **Referencia de Interfaz (UI):** Figura 1, elemento 3  
>   
> **Precondición:** Menú lateral visible en pantalla.  
>   
> **Criterios de Aceptación a Verificar:** • Iconos vectoriales SVG inline optimizados (\< 2 KB cada uno) de GitHub y LinkedIn al pie del menú lateral. • Nitidez absoluta en pantallas de alta densidad (Retina/DPI) con dimensiones 24x24px y fill adaptable. • Hipervínculos seguros con target='\_blank' y rel='noopener noreferrer' apuntando a perfiles válidos.  
>   
> **Método de Verificación Sugerido:** Inspección de marcado SVG y verificación de apertura segura  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-15\] La interfaz debe poseer una arquitectura de información lo suficientemente clara para que un usuario final (reclutador) logre ubicar proyectos, filtrar herramientas y descargar el CV en menos de un minuto.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-05` — *Navegación fluida e intuitiva*  
- **Referencia de Diseño (Mockup):** Disposición en Figuras 1, 4 y 5  
- **Componente(s) de Desarrollo:** `DEV-FE-01 (index.html) | DEV-FE-02 (css/styles.css)`  
- **Rama Git Asignada:** `feature/rnf-15-dev-fe-01`

**Especificaciones Técnicas de Implementación:**

- Métrica de usabilidad: localización de información clave y descarga de CV en tiempo \< 60 segundos.  
- Ruta de usuario optimizada con profundidad máxima de navegación de 2 niveles (\<= 2 clics).  
- Pruebas de usabilidad con métrica Time on Task \<= 35 s promedio verificada empíricamente.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-031` | **Tipo de Prueba:** Usabilidad | **Prioridad:** Alta **Referencia de Interfaz (UI):** Disposición en Figuras 1, 4 y 5  
>   
> **Precondición:** Recorrido de reclutadores para tareas clave.  
>   
> **Criterios de Aceptación a Verificar:** • Ubicación de proyectos, filtrado por herramientas y descarga de CV alcanzable en menos de 1 minuto. • Profundidad de navegación óptima de máximo 2 clics para cualquier acción prioritaria. • Tiempo medio en tarea (Time on Task) inferior a 35 segundos verificado en pruebas de usabilidad.  
>   
> **Método de Verificación Sugerido:** Prueba cronometrada de usabilidad con usuarios representativos  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

#### Cierre y Verificación de la Iteración 2

- [ ] Todos los requerimientos de la Iteración 2 implementados en sus componentes DEV correspondientes.  
- [ ] Todos los Casos de Prueba asociados (TC-001, TC-003, TC-013, TC-014, TC-031) con dictamen `APROBADO (PASS)`.  
- [ ] Revisión de código (Code Review) completada y Pull Requests aprobados hacia la rama `main`.  
- [ ] Despliegue preliminar en entorno local/staging certificado para proceder a la siguiente iteración.

---

### Iteración 3: Carrusel Interactivo y Ventanas Modales de Proyectos Destacados

**Periodo sugerido:** Semana 3 | **Componentes DEV involucrados:** `DEV-FE-02, DEV-FE-03, DEV-AST-01` **Objetivo de la Iteración:** Integrar el componente dinámico de carrusel en la página de inicio con temporizador de 5 segundos, pausa al hover, soporte táctil (touch-swipe) y ventanas emergentes modales (pop-ups) no invasivas con backdrop difuminado y escape por teclado.

#### Requerimientos a Implementar en esta Iteración:

##### \[RF-02\] El sistema debe implementar el uso de ventanas modales (pop-ups) en el carrusel de proyectos, desplegando la imagen en miniatura, el stack tecnológico y una descripción rápida del software sin abandonar la página actual.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-02` — *Posicionamiento como ingeniero competente*  
- **Referencia de Diseño (Mockup):** Figura 3, elementos 1, 2, 3 y 4  
- **Componente(s) de Desarrollo:** `DEV-FE-03 (js/carousel.js) | DEV-FE-02 (css/styles.css)`  
- **Rama Git Asignada:** `feature/rf-02-dev-fe-03`

**Especificaciones Técnicas de Implementación:**

- Componente modal emergente no invasivo sobrepuesto al viewport actual.  
- Backdrop con backdrop-filter: blur(8px), listener global de tecla Escape (keyCode 27\) y bloqueo del scroll con overflow: hidden en body.  
- Contenedor modal centrado con ancho máx de 600px, badges CSS estilizados y botón de navegación secundaria con anchor.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-002` | **Tipo de Prueba:** Funcional | **Prioridad:** Media **Referencia de Interfaz (UI):** Figura 3, elementos 1, 2, 3 y 4  
>   
> **Precondición:** Sitio en ejecución; carrusel cargado con proyectos destacados.  
>   
> **Criterios de Aceptación a Verificar:** • Componente modal emergente sobrepuesto al viewport actual sin recargar la página. • Backdrop difuminado con backdrop-filter: blur(8px), listener tecla Escape (27) y bloqueo de scroll en body. • Contenedor modal con ancho máx 600px, badges CSS de stack tecnológico y botón 'Ver proyecto completo'.  
>   
> **Método de Verificación Sugerido:** Prueba manual de apertura, cierre por Escape/backdrop y navegación  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-09\] El sistema debe optimizar la entrega de medios multimedia convirtiendo todas las capturas de pantalla de los proyectos al formato WebP e implementando carga diferida (Lazy Loading).

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-03` — *Disponibilidad permanente y rendimiento*  
- **Referencia de Diseño (Mockup):** Figuras 2, 3, 5 y 6 (imágenes)  
- **Componente(s) de Desarrollo:** `DEV-AST-01 (assets/img/ WebP) | DEV-FE-01 (index.html)`  
- **Rama Git Asignada:** `feature/rnf-09-dev-ast-01`

**Especificaciones Técnicas de Implementación:**

- Optimización de recursos gráficos mediante formato WebP de última generación y carga bajo demanda.  
- Atributos nativos loading="lazy" y decoding="async" en etiquetas  del DOM.  
- Índice Cumulative Layout Shift (CLS) \<= 0.05 certificado mediante reserva de espacio de aspecto.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-025` | **Tipo de Prueba:** Optimización | **Prioridad:** Media **Referencia de Interfaz (UI):** Figuras 2, 3, 5 y 6 (imágenes)  
>   
> **Precondición:** Carga de proyectos y galería de imágenes.  
>   
> **Criterios de Aceptación a Verificar:** • Todas las capturas de pantalla convertidas a formato WebP moderno con compresión con pérdida 80-85%. • Etiquetas  con atributos nativos loading='lazy' y decoding='async' para carga diferida. • Dimensiones width/height y aspect-ratio 16:9 explícitos certificando índice CLS \<= 0.05.  
>   
> **Método de Verificación Sugerido:** Inspección de elementos en DOM y auditoría CLS en Lighthouse  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-13\] El sistema debe incorporar transiciones CSS pre-renderizadas por el navegador para desplegar modales, filtros y secciones mediante animaciones suaves menores a 300 milisegundos.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Baja  
- **Objetivo de Negocio Vinculado:** `OBJ-05` — *Navegación fluida e intuitiva*  
- **Referencia de Diseño (Mockup):** Interacciones en Figuras 1, 3, 5 y 8  
- **Componente(s) de Desarrollo:** `DEV-FE-02 (css/styles.css)`  
- **Rama Git Asignada:** `feature/rnf-13-dev-fe-02`

**Especificaciones Técnicas de Implementación:**

- Animaciones fluidas con duración estrictamente acotada a \< 300 ms.  
- Aceleración por GPU mediante uso exclusivo de transform y opacity.  
- Curva de aceleración cubic-bezier con duración máxima de 250 ms implementada en estilos globales.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-029` | **Tipo de Prueba:** UI / Rendimiento | **Prioridad:** Baja **Referencia de Interfaz (UI):** Interacciones en Figuras 1, 3, 5 y 8  
>   
> **Precondición:** Animaciones de modales, menú y transiciones.  
>   
> **Criterios de Aceptación a Verificar:** • Animaciones fluidas ejecutadas en tiempo inferior a 300 milisegundos (200 ms \- 250 ms). • Aceleración directa por GPU mediante uso exclusivo de transform y opacity (cero reflows de layout). • Curva de aceleración cubic-bezier suave implementada en estilos globales.  
>   
> **Método de Verificación Sugerido:** Profiling de renderizado GPU y tiempos de animación en DevTools  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

#### Cierre y Verificación de la Iteración 3

- [ ] Todos los requerimientos de la Iteración 3 implementados en sus componentes DEV correspondientes.  
- [ ] Todos los Casos de Prueba asociados (TC-002, TC-025, TC-029) con dictamen `APROBADO (PASS)`.  
- [ ] Revisión de código (Code Review) completada y Pull Requests aprobados hacia la rama `main`.  
- [ ] Despliegue preliminar en entorno local/staging certificado para proceder a la siguiente iteración.

---

### Iteración 4: Catálogo General 'Mis Proyectos', Fichas Técnicas y Sistema de Filtrado Dinámico

**Periodo sugerido:** Semana 4 | **Componentes DEV involucrados:** `DEV-FE-05, DEV-FE-06` **Objetivo de la Iteración:** Construir la pantalla principal de proyectos organizada en CSS Grid de 4 columnas en escritorio, la vista detallada por proyecto con enlaces seguros a repositorios públicos de GitHub y la barra de filtros en tiempo real sin recarga de página.

#### Requerimientos a Implementar en esta Iteración:

##### \[RF-04\] El sistema debe tener una pantalla de "Mis proyectos" con una cuadrícula (grid) dinámica que organice los proyectos en 4 columnas por fila en pantallas de escritorio, reajustándose automáticamente según el tamaño del dispositivo.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-02` — *Posicionamiento como ingeniero competente*  
- **Referencia de Diseño (Mockup):** Figura 5, elemento 2  
- **Componente(s) de Desarrollo:** `DEV-FE-05 (index.html#mis-proyectos) | DEV-FE-06 (js/projects.js)`  
- **Rama Git Asignada:** `feature/rf-04-dev-fe-05`

**Especificaciones Técnicas de Implementación:**

- Layout CSS Grid nativo con 4 columnas en viewports amplios de escritorio.  
- Breakpoints: \>=1024px: repeat(4, 1fr); 768px-1023px: repeat(2, 1fr); \<768px: 1fr. Gap horizontal y vertical de 24px.  
- Estilizado display: flex en cada card con margin-top: auto en los botones de acción inferior para simetría visual.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-004` | **Tipo de Prueba:** Responsivo / Layout | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 5, elemento 2  
>   
> **Precondición:** Sitio en ejecución; acceso a la sección Mis proyectos.  
>   
> **Criterios de Aceptación a Verificar:** • Cuadrícula dinámica CSS Grid nativa de 4 columnas en escritorios (\>= 1024px). • Breakpoints responsivos: 2 columnas en tabletas (768px-1023px) y 1 columna en móviles (\< 768px) con gap de 24px. • Altura uniforme de tarjetas mediante Flexbox y botón inferior alineado con margin-top: auto.  
>   
> **Método de Verificación Sugerido:** Prueba de redimensionamiento de viewport en Chrome DevTools  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-05\] El sistema debe mostrar una vista detallada por cada proyecto publicado que incluya múltiples imágenes, la ficha técnica, lenguajes aplicados (como Java, C, Python o JavaScript) y enlaces directos a los repositorios de código.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-02` — *Posicionamiento como ingeniero competente*  
- **Referencia de Diseño (Mockup):** Figura 6, elementos 1, 2, 3 y 4  
- **Componente(s) de Desarrollo:** `DEV-FE-05 (index.html#mis-proyectos) | DEV-FE-06 (js/projects.js)`  
- **Rama Git Asignada:** `feature/rf-05-dev-fe-05`

**Especificaciones Técnicas de Implementación:**

- Página o panel extendido con desglose minucioso de cada proyecto del portafolio.  
- Imágenes en formato WebP con zoom/lightbox opcional; tabla o lista técnica estructurada para especificaciones de arquitectura.  
- Hipervínculo externo con rel="noopener noreferrer" y target="\_blank", testeado para respuesta HTTP 200\.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-005` | **Tipo de Prueba:** Funcional | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 6, elementos 1, 2, 3 y 4  
>   
> **Precondición:** Sitio en ejecución; selección de proyecto para ver detalle.  
>   
> **Criterios de Aceptación a Verificar:** • Panel extendido con desglose minucioso: galería de capturas, ficha técnica y arquitectura (ej. MVC). • Imágenes WebP con visualizador y lista técnica estructurada de dependencias y versiones. • Enlaces a GitHub configurados con target='\_blank' y rel='noopener noreferrer' con respuesta HTTP 200\.  
>   
> **Método de Verificación Sugerido:** Verificación de fichas técnicas y validación de enlaces externos  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-16\] El sistema debe incorporar un sistema de filtrado en el frontend para que el usuario pueda ordenar y visualizar los proyectos en la sección "Mis proyectos" según la tecnología específica (Web, Escritorio, Microcontroladores, etc.).

- **Categoría:** Requerimiento Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-05` — *Navegación fluida e intuitiva*  
- **Referencia de Diseño (Mockup):** Figura 5, elemento 1  
- **Componente(s) de Desarrollo:** `DEV-FE-06 (js/projects.js)`  
- **Rama Git Asignada:** `feature/rf-16-dev-fe-06`

**Especificaciones Técnicas de Implementación:**

- Barra de controles de filtro horizontal situada al inicio de la sección 'Mis proyectos'.  
- Botones tipo pill con atributo data-filter que coinciden con los atributos data-category de cada tarjeta.  
- Algoritmo en cliente: cards.forEach(card \=\> card.style.display \= matches ? 'block' : 'none') con transiciones suaves.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-016` | **Tipo de Prueba:** Funcional / Filtros | **Prioridad:** Media **Referencia de Interfaz (UI):** Figura 5, elemento 1  
>   
> **Precondición:** Sección Mis proyectos en pantalla.  
>   
> **Criterios de Aceptación a Verificar:** • Barra de controles de filtrado horizontal con botones: 'Todos', 'Web', 'Escritorio', 'Microcontroladores' y 'Bases de Datos'. • Atributos data-filter que coinciden con data-category de las tarjetas de proyecto. • Filtrado instantáneo en cliente en \< 150 ms ocultando/mostrando tarjetas con transiciones suaves sin recarga.  
>   
> **Método de Verificación Sugerido:** Clic en cada filtro y verificación de tarjetas mostradas  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

#### Cierre y Verificación de la Iteración 4

- [ ] Todos los requerimientos de la Iteración 4 implementados en sus componentes DEV correspondientes.  
- [ ] Todos los Casos de Prueba asociados (TC-004, TC-005, TC-016) con dictamen `APROBADO (PASS)`.  
- [ ] Revisión de código (Code Review) completada y Pull Requests aprobados hacia la rama `main`.  
- [ ] Despliegue preliminar en entorno local/staging certificado para proceder a la siguiente iteración.

---

### Iteración 5: Sección Especializada de Tecnologías y Microinteracciones de Dominio

**Periodo sugerido:** Semana 5 | **Componentes DEV involucrados:** `DEV-FE-10, DEV-FE-11` **Objetivo de la Iteración:** Desarrollar la vista estructurada de Tecnologías categorizada en Bases de Datos, Entornos/SO y Lenguajes/Herramientas, incorporando microinteracciones hover/touch para consultar competencias específicas y nivel de dominio.

#### Requerimientos a Implementar en esta Iteración:

##### \[RF-15\] El sistema debe contar con una página o sección de "Tecnologías" que liste herramientas, bases de datos (ej. PostgreSQL, MariaDB) y entornos (ej. Linux Fedora), utilizando interacciones hover o pop-ups para indicar el nivel de dominio.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-02` — *Posicionamiento como ingeniero competente*  
- **Referencia de Diseño (Mockup):** Figura 7, elemento 1  
- **Componente(s) de Desarrollo:** `DEV-FE-10 (index.html#tecnologias) | DEV-FE-11 (js/technologies.js)`  
- **Rama Git Asignada:** `feature/rf-15-dev-fe-10`

**Especificaciones Técnicas de Implementación:**

- Sección exclusiva 'Tecnologías' agrupada por categorías técnicas especializadas.  
- Grid categorizado con tarjetas visuales por tecnología con logo SVG y nombre representativo.  
- Microinteracción CSS :hover / :focus con tooltip flotante posicionado con transform: translateY(-5px).

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-015` | **Tipo de Prueba:** Funcional / UI | **Prioridad:** Media **Referencia de Interfaz (UI):** Figura 7, elemento 1  
>   
> **Precondición:** Sección Tecnologías visible en pantalla.  
>   
> **Criterios de Aceptación a Verificar:** • Listado categorizado en 3 grupos: Bases de Datos, SO/Entornos y Lenguajes/Herramientas. • Grid con tarjetas visuales con logo SVG y nombre representativo de cada tecnología. • Microinteracción hover/touch con pop-up tooltip flotante indicando nivel de dominio (Básico, Medio, Avanzado) y competencias.  
>   
> **Método de Verificación Sugerido:** Prueba de hover en mouse y touch en dispositivo móvil  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

#### Cierre y Verificación de la Iteración 5

- [ ] Todos los requerimientos de la Iteración 5 implementados en sus componentes DEV correspondientes.  
- [ ] Todos los Casos de Prueba asociados (TC-015) con dictamen `APROBADO (PASS)`.  
- [ ] Revisión de código (Code Review) completada y Pull Requests aprobados hacia la rama `main`.  
- [ ] Despliegue preliminar en entorno local/staging certificado para proceder a la siguiente iteración.

---

### Iteración 6: Canal de Contacto Nativo, Backend Seguro SMTP y Notificación Toast

**Periodo sugerido:** Semana 6 | **Componentes DEV involucrados:** `DEV-FE-07, DEV-FE-08, DEV-BE-01` **Objetivo de la Iteración:** Sustituir integralmente el formulario embebido de terceros por un formulario nativo HTML5/JS con validación RFC 5322 en cliente, aviso de privacidad legal, ruteador PHP con transporte SMTP TLS sin almacenamiento en BD, sanitización estricta contra inyecciones XSS y componente toast de retroalimentación.

#### Requerimientos a Implementar en esta Iteración:

##### \[RF-06\] El sistema debe sustituir herramientas genéricas externas mediante la implementación de un formulario de contacto nativo (HTML/JS) directamente integrado en la interfaz del portafolio web.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-06` — *Contacto directo y profesional*  
- **Referencia de Diseño (Mockup):** Figura 8, elemento 1  
- **Componente(s) de Desarrollo:** `DEV-FE-07 (js/contact.js) | DEV-FE-08 (index.html#contacto)`  
- **Rama Git Asignada:** `feature/rf-06-dev-fe-07`

**Especificaciones Técnicas de Implementación:**

- Formulario nativo HTML5/JS integrado en el DOM, prescindiendo de iframes externos, Google Forms o Formspree.  
- Método HTTP POST con payload JSON / FormData procesado de forma asíncrona mediante fetch() con captura de errores try/catch.  
- Control del estado de botón (disabled \= true/false) para evitar dobles envíos por clics repetidos del usuario.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-006` | **Tipo de Prueba:** Funcional / Integración | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 8, elemento 1  
>   
> **Precondición:** Servidor web activo con ruteador PHP configurado.  
>   
> **Criterios de Aceptación a Verificar:** • Formulario nativo HTML5/JS integrado en el DOM, prescindiendo de iframes o servicios externos de terceros. • Petición asíncrona Fetch API / AJAX método HTTP POST hacia script de ruteo estático propio. • Bloqueo de envío múltiple: preventDefault(), botón deshabilitado (disabled=true) durante tránsito.  
>   
> **Método de Verificación Sugerido:** Envío de prueba y monitoreo de petición de red en pestaña Network  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-07\] El sistema debe requerir en el formulario de contacto los campos obligatorios de: Nombre, Correo electrónico, Asunto y Mensaje, integrando un botón para la ejecución del envío.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-06` — *Contacto directo y profesional*  
- **Referencia de Diseño (Mockup):** Figura 8, elementos 2, 3, 4, 5 y 7  
- **Componente(s) de Desarrollo:** `DEV-FE-07 (js/contact.js) | DEV-FE-08 (index.html#contacto)`  
- **Rama Git Asignada:** `feature/rf-07-dev-fe-07`

**Especificaciones Técnicas de Implementación:**

- Estructuración de 4 campos requeridos con sus respectivas etiquetas accesibles () y botón de envío.  
- Atributos maxlength, minlength='2', required y name unívocos en cada control del formulario.  
- Elemento con estilos :hover y :focus-visible claramente perceptibles.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-007` | **Tipo de Prueba:** Funcional / Accesibilidad | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 8, elementos 2, 3, 4, 5 y 7  
>   
> **Precondición:** Formulario visible en la sección de Contacto.  
>   
> **Criterios de Aceptación a Verificar:** • Formulario con 4 campos requeridos: Nombre (máx 100), Correo (máx 150), Asunto (máx 120), Mensaje (máx 1000). • Etiquetas semánticas asociadas, atributos required, minlength='2' y name unívocos. • Botón submit () con texto 'Enviar Mensaje', contraste alto y foco accesible por teclado.  
>   
> **Método de Verificación Sugerido:** Inspección de elementos HTML y prueba de accesibilidad por teclado  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-08\] El sistema debe validar mediante programación en el lado del cliente (JavaScript) que ningún campo del formulario esté vacío y que el correo electrónico introducido posea una sintaxis estructuralmente válida.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-06` — *Contacto directo y profesional*  
- **Referencia de Diseño (Mockup):** Figura 8, elementos 2, 3 y 7  
- **Componente(s) de Desarrollo:** `DEV-FE-07 (js/contact.js)`  
- **Rama Git Asignada:** `feature/rf-08-dev-fe-07`

**Especificaciones Técnicas de Implementación:**

- Validación frontend en JavaScript antes de permitir la emisión del formulario.  
- Expresión regular /^\[^\\s@\]+@\[^\\s@\]+.\[^\\s@\]+\$/ combinada con verificación de longitudes mínimas en cliente.  
- Mensajes de alerta inline en el DOM mediante manipulación de clases CSS (.input-error, .error-message) y focus().

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-008` | **Tipo de Prueba:** Funcional / Validación | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 8, elementos 2, 3 y 7  
>   
> **Precondición:** Formulario de contacto cargado en navegador.  
>   
> **Criterios de Aceptación a Verificar:** • Validación en JavaScript en cliente antes de emitir la petición HTTP. • Expresión regular RFC 5322 para formato de correo y verificación .trim().length \> 0 en campos requeridos. • Alerta visual en DOM con clase de borde rojo, mensaje textual explicativo y focus() en primer campo defectuoso.  
>   
> **Método de Verificación Sugerido:** Prueba de entradas inválidas (vacías, correo sin @, sin dominio)  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-09\] El sistema debe mostrar, adjunto al formulario, un texto legal o aviso de privacidad indicando que los datos proporcionados por reclutadores o clientes se usarán exclusivamente para comunicación profesional.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-09` — *Confianza, seguridad, privacidad y accesibilidad*  
- **Referencia de Diseño (Mockup):** Figura 8, elemento 6  
- **Componente(s) de Desarrollo:** `DEV-FE-08 (index.html#contacto)`  
- **Rama Git Asignada:** `feature/rf-09-dev-fe-08`

**Especificaciones Técnicas de Implementación:**

- Leyenda o texto legal visible integrado en la estructura del formulario de contacto.  
- Bloque textual con tipografía regular legible (11px-12px) de tono neutro y contraste adecuado según WCAG.  
- Texto de consentimiento implícito con valor informativo vinculante sin bloqueo de interactividad.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-009` | **Tipo de Prueba:** Legal / Privacidad | **Prioridad:** Media **Referencia de Interfaz (UI):** Figura 8, elemento 6  
>   
> **Precondición:** Formulario de contacto visible en pantalla.  
>   
> **Criterios de Aceptación a Verificar:** • Leyenda legal o aviso de privacidad visible integrado inmediatamente antes del botón de envío. • Texto explícito indicando que los datos se usarán exclusivamente para comunicación profesional. • Consentimiento implícito informado sin fricción de casilla de verificación (checkbox).  
>   
> **Método de Verificación Sugerido:** Inspección visual del texto legal y redacción de privacidad  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RF-12\] El sistema deberá mostrar un mensaje visual de confirmación (tipo alerta o toast) inmediatamente después del procesamiento y envío exitoso del formulario de contacto.

- **Categoría:** Requerimiento Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-06` — *Contacto directo y profesional*  
- **Referencia de Diseño (Mockup):** Figura 8, elemento 8  
- **Componente(s) de Desarrollo:** `DEV-FE-07 (js/contact.js) | DEV-FE-02 (css/styles.css)`  
- **Rama Git Asignada:** `feature/rf-12-dev-fe-07`

**Especificaciones Técnicas de Implementación:**

- Componente toast de retroalimentación visual emergente tras código HTTP 200 de éxito.  
- Contenedor flotante con posición fixed, z-index: 1000, animación CSS keyframes slideInFromRight.  
- Temporizador setTimeout de 4000 ms para desvanecimiento y ejecución de form.reset() tras confirmación.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-012` | **Tipo de Prueba:** UI / Feedback | **Prioridad:** Media **Referencia de Interfaz (UI):** Figura 8, elemento 8  
>   
> **Precondición:** Envío exitoso ejecutado en el formulario de contacto.  
>   
> **Criterios de Aceptación a Verificar:** • Componente flotante toast emergente con icono verde de verificación tras respuesta exitosa HTTP 200\. • Animación deslizante suave (slideInFromRight \< 300 ms), posición fixed y z-index elevado. • Temporizador automático de cierre a los 4000 ms y ejecución simultánea de form.reset().  
>   
> **Método de Verificación Sugerido:** Prueba de envío real y cronometraje de persistencia del toast  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-06\] El sistema debe sanitizar estrictamente las cadenas de texto ingresadas en el formulario de contacto para proteger la plataforma contra ataques de inyección de código (Cross-Site Scripting).

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-09` — *Confianza, seguridad, privacidad y accesibilidad*  
- **Referencia de Diseño (Mockup):** Figura 8, elementos 2 a 5  
- **Componente(s) de Desarrollo:** `DEV-FE-07 (js/contact.js) | DEV-BE-01 (server/contact.php)`  
- **Rama Git Asignada:** `feature/rnf-06-dev-fe-07`

**Especificaciones Técnicas de Implementación:**

- Filtro de sanitización y escape de código en entradas del formulario de contacto.  
- Conversión obligatoria a entidades HTML seguras tanto en frontend como en script backend.  
- Principio de defensa en profundidad: saneamiento redundante en cliente y servidor.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-022` | **Tipo de Prueba:** Seguridad | **Prioridad:** Alta **Referencia de Interfaz (UI):** Figura 8, elementos 2 a 5  
>   
> **Precondición:** Formulario de contacto con cadenas maliciosas de prueba.  
>   
> **Criterios de Aceptación a Verificar:** • Sanitización y escape estricto de caracteres peligrosos (\<, \>, &, ", ') neutralizando inyecciones XSS. • Doble capa de defensa en profundidad: validación preventiva en navegador y escape obligatorio en servidor PHP. • Bloqueo absoluto de ejecución de scripts inyectados en el cuerpo del correo generado.  
>   
> **Método de Verificación Sugerido:** Pruebas de penetración manual con payloads   
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-08\] El sistema debe proteger la privacidad del visitante procesando el formulario a través de un ruteador de correos estático (ej. PHP script o API SMTP), sin almacenar datos personales en bases de datos vulnerables.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-09` — *Confianza, seguridad, privacidad y accesibilidad*  
- **Referencia de Diseño (Mockup):** Arquitectura backend / servidor  
- **Componente(s) de Desarrollo:** `DEV-BE-01 (server/contact.php SMTP TLS)`  
- **Rama Git Asignada:** `feature/rnf-08-dev-be-01`

**Especificaciones Técnicas de Implementación:**

- Diseño sin persistencia de base de datos para eliminación de superficie de ataque.  
- Prohibición de consultas INSERT INTO en bases de datos corporativas con datos del visitante.  
- Conexión segura SMTP sobre puerto 587 con autenticación TLS y descarte de variables en memoria.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-024` | **Tipo de Prueba:** Seguridad / Privacidad | **Prioridad:** Alta **Referencia de Interfaz (UI):** Arquitectura backend / servidor  
>   
> **Precondición:** Revisión de arquitectura del backend de contacto.  
>   
> **Criterios de Aceptación a Verificar:** • Servidor procesa el formulario mediante script PHP estático sin persistencia en bases de datos SQL/NoSQL. • Ausencia de consultas INSERT INTO o almacenamiento de nombres y correos en archivos planos del hosting. • Envío seguro SMTP autenticado sobre TLS (puerto 587\) con descarte inmediato de variables en memoria.  
>   
> **Método de Verificación Sugerido:** Revisión estática de código backend y auditoría de almacenamiento  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

#### Cierre y Verificación de la Iteración 6

- [ ] Todos los requerimientos de la Iteración 6 implementados en sus componentes DEV correspondientes.  
- [ ] Todos los Casos de Prueba asociados (TC-006, TC-007, TC-008, TC-009, TC-012, TC-022, TC-024) con dictamen `APROBADO (PASS)`.  
- [ ] Revisión de código (Code Review) completada y Pull Requests aprobados hacia la rama `main`.  
- [ ] Despliegue preliminar en entorno local/staging certificado para proceder a la siguiente iteración.

---

### Iteración 7: Infraestructura de Servidor, Seguridad SSL/HTTPS, Rendimiento y Accesibilidad WCAG

**Periodo sugerido:** Semana 7 | **Componentes DEV involucrados:** `DEV-SRV-01, DEV-BLD-01, DEV-FE-02, DEV-FE-09` **Objetivo de la Iteración:** Asegurar el cumplimiento riguroso de los requerimientos de calidad no funcionales: renderizado inicial \<= 3s en NVMe, transiciones SPA \< 1s, estabilidad del DOM a 60 FPS, cifrado HTTPS forzado con HSTS, minificación de activos, contraste de color WCAG 2.1 AA, concurrencia para 1,000 usuarios y disponibilidad del 99.9%.

#### Requerimientos a Implementar en esta Iteración:

##### \[RNF-01\] El sistema web estático debe realizar el renderizado inicial de su contenido en un tiempo máximo de 3 segundos, aprovechando la tecnología NVMe del alojamiento seleccionado.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-03` — *Disponibilidad permanente y rendimiento*  
- **Referencia de Diseño (Mockup):** Todos los wireframes (Carga inicial)  
- **Componente(s) de Desarrollo:** `DEV-SRV-01 (.htaccess, servidor GoDaddy NVMe)`  
- **Rama Git Asignada:** `feature/rnf-01-dev-srv-01`

**Especificaciones Técnicas de Implementación:**

- Tiempo de carga inicial global \<= 3.0 s en condiciones de red 4G estándar.  
- Auditoría Lighthouse con puntaje de Performance \>= 90 en entorno de producción.  
- TTFB verificado \< 200 ms gracias a discos NVMe PCIe de alta velocidad en el hosting.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-017` | **Tipo de Prueba:** Rendimiento | **Prioridad:** Alta **Referencia de Interfaz (UI):** Todos los wireframes (Carga inicial)  
>   
> **Precondición:** Conexión a red 4G estándar hacia hosting en GoDaddy.  
>   
> **Criterios de Aceptación a Verificar:** • Renderizado inicial completo en tiempo \<= 3.0 segundos. • Métricas Core Web Vitals: FCP \<= 1.5 s, LCP \<= 2.2 s, TTI \<= 2.8 s en auditoría Lighthouse. • Tiempo de primer byte (TTFB) \< 200 ms aprovechando almacenamiento de estado sólido NVMe.  
>   
> **Método de Verificación Sugerido:** Auditoría automatizada con Google Lighthouse y WebPageTest  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-02\] El sistema debe ejecutar las transiciones de contenido al cambiar entre secciones del menú en un tiempo inferior a 1 segundo para brindar una percepción de inmediatez.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-05` — *Navegación fluida e intuitiva*  
- **Referencia de Diseño (Mockup):** Figura 1, elemento 2  
- **Componente(s) de Desarrollo:** `DEV-FE-02 (css/styles.css) | DEV-FE-09 (js/nav.js)`  
- **Rama Git Asignada:** `feature/rnf-02-dev-fe-02`

**Especificaciones Técnicas de Implementación:**

- Latencia de alternancia entre vistas \< 1000 ms garantizada por diseño SPA estático.  
- Alternancia de vistas en memoria del navegador sin peticiones HTTP adicionales.  
- Duración de transición CSS fijada en 250 ms con aceleración ease-in-out.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-018` | **Tipo de Prueba:** Rendimiento / UI | **Prioridad:** Media **Referencia de Interfaz (UI):** Figura 1, elemento 2  
>   
> **Precondición:** Navegación activa entre secciones del portafolio.  
>   
> **Criterios de Aceptación a Verificar:** • Alternancia de secciones en tiempo \< 1000 ms garantizada por arquitectura SPA en memoria. • Todas las vistas cargadas en documento único sin peticiones HTTP adicionales al cambiar de sección. • Transición CSS de opacidad configurada en 250 ms con aceleración ease-in-out.  
>   
> **Método de Verificación Sugerido:** Medición de tiempos de cambio de vista en pestaña Performance  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-03\] El sistema debe mantener la estabilidad del DOM y soportar múltiples cambios de sección rápidos ejecutados por el usuario sin generar cuellos de botella ni bloqueos de interfaz.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-09` — *Confianza, seguridad, privacidad y accesibilidad*  
- **Referencia de Diseño (Mockup):** Figura 1, elemento 2  
- **Componente(s) de Desarrollo:** `DEV-FE-09 (js/nav.js)`  
- **Rama Git Asignada:** `feature/rnf-03-dev-fe-09`

**Especificaciones Técnicas de Implementación:**

- Protección de estabilidad del árbol DOM frente a eventos ráfaga de usuario.  
- Control de ejecución con requestAnimationFrame() y bloqueo de eventos concurrentes.  
- Rendimiento gráfico a 60 FPS verificado en pestaña Performance de Chrome DevTools.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-019` | **Tipo de Prueba:** Rendimiento / DOM | **Prioridad:** Media **Referencia de Interfaz (UI):** Figura 1, elemento 2  
>   
> **Precondición:** Interacción rápida y concurrente en la interfaz.  
>   
> **Criterios de Aceptación a Verificar:** • Interfaz mantiene 60 FPS estables sin caída de cuadros (jank) ante clics repetidos en el menú. • Mecanismo de debouncing (150 ms) o flag booleano prevents saturación del hilo principal de JavaScript. • Consumo de memoria estable inferior a 50 MB en el administrador de tareas del navegador.  
>   
> **Método de Verificación Sugerido:** Prueba de clics en ráfaga (stress-click) y profiling de FPS  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-04\] El sistema debe forzar el cifrado de todas las comunicaciones entre el navegador del visitante y el servidor de GoDaddy mediante la implementación de un certificado SSL (protocolo HTTPS).

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-09` — *Confianza, seguridad, privacidad y accesibilidad*  
- **Referencia de Diseño (Mockup):** Transversal a todas las vistas  
- **Componente(s) de Desarrollo:** `DEV-SRV-01 (.htaccess, certificado SSL GoDaddy)`  
- **Rama Git Asignada:** `feature/rnf-04-dev-srv-01`

**Especificaciones Técnicas de Implementación:**

- Obligatoriedad de protocolo seguro HTTPS en toda la navegación del portal.  
- Regla .htaccess con RewriteEngine On, RewriteCond %{HTTPS} off, RewriteRule ^(.\*)\$ https\://%{HTTP\_HOST}%{REQUEST\_URI} \[L,R=301\].  
- Configuración TLS 1.3 con calificación mínima 'A' en SSL Labs y directiva HSTS activada.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-020` | **Tipo de Prueba:** Seguridad | **Prioridad:** Alta **Referencia de Interfaz (UI):** Transversal a todas las vistas  
>   
> **Precondición:** Petición HTTP y HTTPS al dominio del portafolio.  
>   
> **Criterios de Aceptación a Verificar:** • Redirección permanente HTTP 301 transparente forzada hacia protocolo HTTPS seguro. • Certificado SSL activo con soporte TLS 1.2 y TLS 1.3, cifrado robusto RSA 2048 / ECC 256 bits. • Encabezado de seguridad HSTS (Strict-Transport-Security) activo con calificación 'A' en SSL Labs.  
>   
> **Método de Verificación Sugerido:** Prueba con cURL (curl \-I http\://...) y escaneo en SSL Labs  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-05\] El código fuente (HTML, CSS, JS) del portafolio estático deberá ser minificado antes de su despliegue en el entorno de producción para optimizar el consumo de ancho de banda.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-10` — *Mantenibilidad, optimización y escalabilidad*  
- **Referencia de Diseño (Mockup):** Código fuente y distribución  
- **Componente(s) de Desarrollo:** `DEV-BLD-01 (pipeline build minificación HTML/CSS/JS)`  
- **Rama Git Asignada:** `feature/rnf-05-dev-bld-01`

**Especificaciones Técnicas de Implementación:**

- Proceso de compilación/empaquetado para minificación de activos estáticos.  
- Herramientas estándar (ej. Terser, CSSNano, HTMLMinifier) aplicadas previo a la publicación.  
- Reducción métrica comprobada \>= 30% en tamaño bruto de scripts y hojas de estilo.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-021` | **Tipo de Prueba:** Optimización | **Prioridad:** Media **Referencia de Interfaz (UI):** Código fuente y distribución  
>   
> **Precondición:** Inspección de archivos distribuidos en entorno productivo.  
>   
> **Criterios de Aceptación a Verificar:** • Archivos HTML, CSS y JS minificados (.min.css, .min.js) sin comentarios ni espacios superfluos. • Reducción comprobada de peso entre 30% y 45% respecto al código fuente original en desarrollo. • Peso total de assets base en primera carga inferior o igual a 80 KB.  
>   
> **Método de Verificación Sugerido:** Comparación de tamaño de archivos en disco y en red  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-10\] El esquema de colores y la tipografía de la interfaz deben mantener un ratio de contraste adecuado que cumpla con las normativas de accesibilidad web (WCAG) vigentes.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-09` — *Confianza, seguridad, privacidad y accesibilidad*  
- **Referencia de Diseño (Mockup):** Paleta de colores global y tipografía  
- **Componente(s) de Desarrollo:** `DEV-FE-02 (css/styles.css)`  
- **Rama Git Asignada:** `feature/rnf-10-dev-fe-02`

**Especificaciones Técnicas de Implementación:**

- Cumplimiento formal de los criterios de contraste de color de las WCAG 2.1 nivel AA.  
- Ratios verificados \>= 4.5:1 para cuerpo de texto y \>= 3.0:1 para elementos gráficos y títulos.  
- Certificación sin errores de contraste mediante auditoría de accesibilidad WCAG 2.1 AA.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-026` | **Tipo de Prueba:** Accesibilidad | **Prioridad:** Media **Referencia de Interfaz (UI):** Paleta de colores global y tipografía  
>   
> **Precondición:** Análisis de paleta de colores y tipografía.  
>   
> **Criterios de Aceptación a Verificar:** • Ratios de contraste verificados superiores a 4.5:1 para texto normal sobre fondo. • Ratios superiores a 3.0:1 para encabezados grandes (\> 24px), bordes de componentes y botones. • Cero errores de contraste en auditoría de accesibilidad WCAG 2.1 nivel AA.  
>   
> **Método de Verificación Sugerido:** Auditoría automatizada con axe DevTools y Colour Contrast Analyser  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-11\] El sistema debe operar con un nivel de disponibilidad técnica mínima del 99.9% del tiempo, apoyándose en el Acuerdo de Nivel de Servicio (SLA) del proveedor de hosting corporativo.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Alta  
- **Objetivo de Negocio Vinculado:** `OBJ-03` — *Disponibilidad permanente y rendimiento*  
- **Referencia de Diseño (Mockup):** Infraestructura de hosting  
- **Componente(s) de Desarrollo:** `DEV-SRV-01 (Infraestructura GoDaddy SLA 99.9%)`  
- **Rama Git Asignada:** `feature/rnf-11-dev-srv-01`

**Especificaciones Técnicas de Implementación:**

- Disponibilidad técnica garantizada por contrato de hosting corporativo \>= 99.9%.  
- Downtime no planificado acumulado inferior a 8.76 horas anuales según métricas de SLA.  
- Resiliencia de archivos estáticos HTML/CSS/JS frente a fallos de servicios de backend.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-027` | **Tipo de Prueba:** Disponibilidad | **Prioridad:** Alta **Referencia de Interfaz (UI):** Infraestructura de hosting  
>   
> **Precondición:** Monitoreo del servicio de hosting corporativo GoDaddy.  
>   
> **Criterios de Aceptación a Verificar:** • Disponibilidad técnica garantizada por SLA del proveedor de hosting \>= 99.9% anual. • Downtime imprevisto tolerable inferior a 8.76 horas anuales (menos de 43.8 minutos al mes). • Arquitectura estática resistente a caídas de bases de datos o fallos de procesos en servidor.  
>   
> **Método de Verificación Sugerido:** Revisión de métricas de SLA del hosting y monitor UptimeRobot  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

##### \[RNF-12\] El sistema no debe requerir dependencias pesadas que impidan la carga concurrente, permitiendo que la plataforma soporte al menos 1000 accesos simultáneos sin degradación de velocidad.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Media  
- **Objetivo de Negocio Vinculado:** `OBJ-03` — *Disponibilidad permanente y rendimiento*  
- **Referencia de Diseño (Mockup):** Infraestructura de servidor  
- **Componente(s) de Desarrollo:** `DEV-SRV-01 (.htaccess, compresión gzip y caché)`  
- **Rama Git Asignada:** `feature/rnf-12-dev-srv-01`

**Especificaciones Técnicas de Implementación:**

- Capacidad de atención concurrente para al menos 1,000 usuarios en simultáneo sin latencia añadida.  
- Atención de peticiones HTTP estáticas sin consumo de hilos pesados de cómputo en servidor.  
- Configuración mod\_deflate y mod\_expires en .htaccess para cacheo masivo de activos.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-028` | **Tipo de Prueba:** Rendimiento / Concurrencia | **Prioridad:** Media **Referencia de Interfaz (UI):** Infraestructura de servidor  
>   
> **Precondición:** Simulación de carga concurrente de usuarios.  
>   
> **Criterios de Aceptación a Verificar:** • Plataforma soporta al menos 1,000 accesos simultáneos sin degradación de velocidad de respuesta. • Servidor web despacha archivos estáticos precompilados directamente desde memoria caché. • Compresión gzip activa (mod\_deflate) y encabezados Cache-Control (mod\_expires) en .htaccess.  
>   
> **Método de Verificación Sugerido:** Prueba de carga con Apache Benchmark / k6 simulando 1,000 usuarios  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

#### Cierre y Verificación de la Iteración 7

- [ ] Todos los requerimientos de la Iteración 7 implementados en sus componentes DEV correspondientes.  
- [ ] Todos los Casos de Prueba asociados (TC-017, TC-018, TC-019, TC-020, TC-021, TC-026, TC-027, TC-028) con dictamen `APROBADO (PASS)`.  
- [ ] Revisión de código (Code Review) completada y Pull Requests aprobados hacia la rama `main`.  
- [ ] Despliegue preliminar en entorno local/staging certificado para proceder a la siguiente iteración.

---

### Iteración 8: Arquitectura Modular de Internacionalización (i18n) y Release Gate Versión 2.0

**Periodo sugerido:** Semana 8 | **Componentes DEV involucrados:** `DEV-FE-01, DEV-FE-12` **Objetivo de la Iteración:** Preparar la arquitectura de textos y clases desacopladas mediante diccionarios JSON y contenedores elásticos resistentes a variaciones de texto de \+/- 35%, culminando con la auditoría general de aceptación y liberación formal de la Versión 2.0.

#### Requerimientos a Implementar en esta Iteración:

##### \[RNF-14\] El sistema web debe estructurar sus clases y textos de forma modular (i18n) para asegurar la escalabilidad hacia una versión completa del portafolio en idioma inglés en el futuro.

- **Categoría:** Requerimiento No Funcional | **Prioridad:** Baja  
- **Objetivo de Negocio Vinculado:** `OBJ-10` — *Mantenibilidad, optimización y escalabilidad*  
- **Referencia de Diseño (Mockup):** Estructura de código / contenido  
- **Componente(s) de Desarrollo:** `DEV-FE-12 (i18n/es.json, i18n/en.json) | DEV-FE-01 (index.html)`  
- **Rama Git Asignada:** `feature/rnf-14-dev-fe-12`

**Especificaciones Técnicas de Implementación:**

- Modularidad y desacoplamiento de cadenas de texto para internacionalización (i18n).  
- Estructuración de diccionarios de claves semánticas (es.json / en.json) listas para conmutación.  
- Contenedores flexibles resistentes a expansiones textuales multilenguaje de hasta 35%.

> ### 📋 ESPACIO PARA FASE DE PRUEBAS — CONTROL DE CALIDAD (QA)

> **Identificador de Prueba:** `TC-030` | **Tipo de Prueba:** Arquitectura / i18n | **Prioridad:** Baja **Referencia de Interfaz (UI):** Estructura de código / contenido  
>   
> **Precondición:** Estructura de cadenas de texto y hojas de estilo.  
>   
> **Criterios de Aceptación a Verificar:** • Cadenas de texto desacopladas del marcado mediante atributos data-i18n y módulos JSON (es/en). • Contenedores flexibles (Flexbox/Grid) sin anchos rígidos tolerando expansiones de texto de \+/- 35%. • Preparación de arquitectura lista para traducción completa al idioma inglés sin romper el layout.  
>   
> **Método de Verificación Sugerido:** Revisión de arquitectura modular y prueba de expansión textual  
>   
> **Lista de Control de Ejecución (Checklist de Validación):**  
> 

> - [ ] **Verificación de Precondiciones:** Entorno, datos de prueba y dependencias validadas.  
> - [ ] **Ejecución Técnica:** Procedimiento de prueba reproducido paso a paso según el método sugerido.  
> - [ ] **Conformidad de Criterios:** El 100% de los criterios de aceptación fueron satisfechos sin excepciones.  
> - [ ] **Ausencia de Regresiones:** El módulo opera fluidamente sin impactar componentes previamente aprobados.

>   
> **Dictamen y Estado de la Prueba:**  
>   
> \[ \] APROBADO (PASS)    \[ \] RECHAZADO (FAIL)    \[ \] EN PROGRESO    \[X\] PENDIENTE  
>   
> **Bitácora de Observaciones y Registro de Evidencia:**  
> 

> - *Fecha de Ejecución:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  |  *Evaluador / QA Tester:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Resultado / Hallazgos:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Enlace / Captura de Evidencia:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
> - *Firma de Aprobación QA:* \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

---

#### Cierre y Verificación de la Iteración 8

- [ ] Todos los requerimientos de la Iteración 8 implementados en sus componentes DEV correspondientes.  
- [ ] Todos los Casos de Prueba asociados (TC-030) con dictamen `APROBADO (PASS)`.  
- [ ] Revisión de código (Code Review) completada y Pull Requests aprobados hacia la rama `main`.  
- [ ] Despliegue preliminar en entorno local/staging certificado para proceder a la siguiente iteración.

---

## 5\. Matriz Consolidada de Trazabilidad, Iteraciones y Estado QA

La siguiente tabla condensa la relación unívoca entre cada Requerimiento, su Iteración correspondiente, los componentes DEV responsables, el Caso de Prueba asignado y los campos de control para el seguimiento de la ejecución:

| Iteración | ID REQ | Prioridad | Componente DEV Principal | ID Caso de Prueba (TC) | Tipo de Prueba | Estado DEV | Estado QA |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Iteración 1** | `RF-10` | Alta | `DEV-FE-02` | `TC-010` | Funcional / Navegación | Sin iniciar | Pendiente |
| **Iteración 1** | `RF-11` | Alta | `DEV-FE-02` | `TC-011` | Responsivo / CSS | Sin iniciar | Pendiente |
| **Iteración 1** | `RNF-07` | Alta | `DEV-FE-02` | `TC-023` | Responsivo | Sin iniciar | Pendiente |
| **Iteración 2** | `RF-01` | Alta | `DEV-FE-01` | `TC-001` | Funcional / UI | Sin iniciar | Pendiente |
| **Iteración 2** | `RF-03` | Alta | `DEV-FE-04` | `TC-003` | Funcional / Contenido | Sin iniciar | Pendiente |
| **Iteración 2** | `RF-13` | Alta | `DEV-FE-04` | `TC-013` | Funcional / Descarga | Sin iniciar | Pendiente |
| **Iteración 2** | `RF-14` | Media | `DEV-FE-02` | `TC-014` | Integración / Redes | Sin iniciar | Pendiente |
| **Iteración 2** | `RNF-15` | Alta | `DEV-FE-01` | `TC-031` | Usabilidad | Sin iniciar | Pendiente |
| **Iteración 3** | `RF-02` | Media | `DEV-FE-03` | `TC-002` | Funcional | Sin iniciar | Pendiente |
| **Iteración 3** | `RNF-09` | Media | `DEV-AST-01` | `TC-025` | Optimización | Sin iniciar | Pendiente |
| **Iteración 3** | `RNF-13` | Baja | `DEV-FE-02` | `TC-029` | UI / Rendimiento | Sin iniciar | Pendiente |
| **Iteración 4** | `RF-04` | Alta | `DEV-FE-05` | `TC-004` | Responsivo / Layout | Sin iniciar | Pendiente |
| **Iteración 4** | `RF-05` | Alta | `DEV-FE-05` | `TC-005` | Funcional | Sin iniciar | Pendiente |
| **Iteración 4** | `RF-16` | Media | `DEV-FE-06` | `TC-016` | Funcional / Filtros | Sin iniciar | Pendiente |
| **Iteración 5** | `RF-15` | Media | `DEV-FE-10` | `TC-015` | Funcional / UI | Sin iniciar | Pendiente |
| **Iteración 6** | `RF-06` | Alta | `DEV-FE-07` | `TC-006` | Funcional / Integración | Sin iniciar | Pendiente |
| **Iteración 6** | `RF-07` | Alta | `DEV-FE-07` | `TC-007` | Funcional / Accesibilidad | Sin iniciar | Pendiente |
| **Iteración 6** | `RF-08` | Alta | `DEV-FE-07` | `TC-008` | Funcional / Validación | Sin iniciar | Pendiente |
| **Iteración 6** | `RF-09` | Media | `DEV-FE-08` | `TC-009` | Legal / Privacidad | Sin iniciar | Pendiente |
| **Iteración 6** | `RF-12` | Media | `DEV-FE-07` | `TC-012` | UI / Feedback | Sin iniciar | Pendiente |
| **Iteración 6** | `RNF-06` | Alta | `DEV-FE-07` | `TC-022` | Seguridad | Sin iniciar | Pendiente |
| **Iteración 6** | `RNF-08` | Alta | `DEV-BE-01` | `TC-024` | Seguridad / Privacidad | Sin iniciar | Pendiente |
| **Iteración 7** | `RNF-01` | Alta | `DEV-SRV-01` | `TC-017` | Rendimiento | Sin iniciar | Pendiente |
| **Iteración 7** | `RNF-02` | Media | `DEV-FE-02` | `TC-018` | Rendimiento / UI | Sin iniciar | Pendiente |
| **Iteración 7** | `RNF-03` | Media | `DEV-FE-09` | `TC-019` | Rendimiento / DOM | Sin iniciar | Pendiente |
| **Iteración 7** | `RNF-04` | Alta | `DEV-SRV-01` | `TC-020` | Seguridad | Sin iniciar | Pendiente |
| **Iteración 7** | `RNF-05` | Media | `DEV-BLD-01` | `TC-021` | Optimización | Sin iniciar | Pendiente |
| **Iteración 7** | `RNF-10` | Media | `DEV-FE-02` | `TC-026` | Accesibilidad | Sin iniciar | Pendiente |
| **Iteración 7** | `RNF-11` | Alta | `DEV-SRV-01` | `TC-027` | Disponibilidad | Sin iniciar | Pendiente |
| **Iteración 7** | `RNF-12` | Media | `DEV-SRV-01` | `TC-028` | Rendimiento / Concurrencia | Sin iniciar | Pendiente |
| **Iteración 8** | `RNF-14` | Baja | `DEV-FE-12` | `TC-030` | Arquitectura / i18n | Sin iniciar | Pendiente |

---

## 6\. Proyección de Futuras Iteraciones y Nuevas Versiones

Siguiendo el principio de arquitectura abierta e ingeniería de software evolutiva, la finalización exitosa de las 8 iteraciones de la Versión 2.0 habilitará el despliegue de las siguientes versiones mayores y menores:

### 6.1 Versión 2.1 — Iteración 9: Internacionalización Integral (Español / Inglés)

- **Objetivo:** Activar la experiencia bilingüe completa para reclutadores de empresas multinacionales de tecnología.  
- **Alcance Técnico:**  
  - Implementación del componente visual conmutador de idioma en el panel lateral superior (`DEV-FE-02`, `DEV-FE-09`).  
  - Carga asíncrona de cadenas traducidas desde `i18n/en.json` y `i18n/es.json` aprovechando los atributos `data-i18n` introducidos en la Iteración 8 (`DEV-FE-12`).  
  - Traducción al 100% de la biografía profesional, descripciones de proyectos destacados, fichas técnicas y textos de validación del formulario de contacto.  
  - Persistencia de la preferencia de idioma en el navegador mediante `localStorage.getItem('lang')`.  
- **Criterio de Validación QA:**  
  - Conmutación instantánea (\< 100 ms) sin recarga completa de página.  
  - Cero desbordamiento visual en botones, modales o tarjetas derivado de la longitud lingüística del idioma inglés.

### 6.2 Versión 3.0 — Iteración 10: Automatización CI/CD, Micro-CMS y Métricas Privadas

- **Objetivo:** Industrializar el ciclo de mantenimiento continuo del portafolio mediante integración continua y desacoplamiento de datos.  
- **Alcance Técnico:**  
  - **Pipeline CI/CD con GitHub Actions:** Creación de un workflow en `.github/workflows/deploy.yml` que ejecute linters (HTMLHint, Stylelint, ESLint), verifique que no existan enlaces rotos y despliegue automáticamente por SSH/SFTP al hosting GoDaddy tras cada merge en `main`.  
  - **Desacoplamiento a Micro-CMS / Catálogo JSON (`data/projects.json`):** Los proyectos dejarán de estar cableados directamente en el marcado HTML, pasando a renderizarse dinámicamente mediante plantillas de JavaScript (`projects.render()`), facilitando la adición de nuevos desarrollos en menos de 5 minutos mediante la simple edición de un archivo de datos.  
  - **Métricas de Analítica con Privacidad:** Integración de un script ligero autoalojado o telemetría respetuosa de privacidad (ej. Umami o Plausible sin cookies) para monitorear visitas de reclutadores sin infringir normativas de privacidad de datos.  
- **Criterio de Validación QA:**  
  - Pipeline de GitHub Actions ejecutado en tiempo \< 90 segundos con tasa de éxito del 100%.  
  - Renderizado dinámico de proyectos manteniendo el puntaje de Performance de Google Lighthouse \>= 90\.

---

## 7\. Protocolo de Gestión de Incidentes, Defectos y Criterios de Liberación

### 7.1 Procedimiento de Clasificación y Corrección de Defectos en QA

Si durante la fase de pruebas de cualquier requerimiento el resultado obtenido es `RECHAZADO (FAIL)`, se aplicará el siguiente procedimiento formal:

1. **Severidad Bloqueante (Crítica):** Afecta la navegación global, el envío del formulario, la visualización responsiva o introduce vulnerabilidades (ej. fallo en TC-006, TC-010, TC-020, TC-022). Se detiene de inmediato el avance de la iteración, se genera una rama `fix/hotfix-TC-xxx` y se bloquea el merge a `main` hasta obtener `APROBADO` en una reevaluación completa.  
2. **Severidad Mayor:** Comportamiento anómalo en animaciones, tiempos de transición mayores a 1s o retraso de carga que no bloquea la interacción (ej. TC-018, TC-029). Se programa la corrección prioritaria dentro de la misma iteración antes del cierre formal.  
3. **Severidad Menor / Cosmética:** Ajustes tipográficos leves o refinamiento de espaciados sin afectación funcional. Se registra en la bitácora de observaciones y se atiende en la fase de pulido de la iteración.

### 7.2 Lista de Chequeo Final para Liberación a Producción (Release Gate V2.0)

Antes de publicar la Versión 2.0 en el dominio definitivo con hosting GoDaddy NVMe, se deberá certificar el cumplimiento de la siguiente lista de chequeo integral:

- [ ] **31 de 31 Requerimientos Formales Aprobados:** El 100% de los RF (16) y RNF (15) cuentan con su espacio de pruebas firmado con dictamen `APROBADO (PASS)`.  
- [ ] **Auditoría Google Lighthouse:** Rendimiento \>= 90, Accesibilidad \>= 95, Mejores Prácticas \>= 95 y SEO \>= 95\.  
- [ ] **Auditoría de Accesibilidad WCAG 2.1 AA:** Cero errores de contraste de color verificados con axe DevTools.  
- [ ] **Auditoría de Seguridad SSL/TLS:** Calificación 'A' o 'A+' en SSL Labs y directiva HSTS activa.  
- [ ] **Prueba de Carga y Concurrencia:** Verificación de despacho estático de 1,000 conexiones concurrentes sin caídas.  
- [ ] **Validación de Usabilidad Reclutador:** Métrica de localización de proyectos y descarga de CV certificada en \< 60 segundos.  
- [ ] **Aprobación de la Rama Main:** Repositorio en GitHub sincronizado, con tags de versión `v2.0.0` y documentación actualizada.

---

*Documento técnico elaborado conforme a los estándares de Ingeniería en Software de la UAEMex Tianguistenco.*