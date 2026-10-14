(function (P) {
    'use strict';

    /* =====================================================
       CONFIGURACIÓN DEL SITIO (DEV-BE-01)
       -----------------------------------------------------
       Formulario de contacto (Formspree):
         1. Crea un formulario gratuito en https://formspree.io
         2. Copia tu endpoint (formato https://formspree.io/f/xxxxxxxx)
         3. Pégalo en CONTACT_ENDPOINT y vuelve a publicar.
       Si se deja vacío, el formulario funciona en modo demostración:
       valida los campos y notifica, pero no envía correos.
       ===================================================== */
    const CONTACT_ENDPOINT = '';
    P.config = { CONTACT_ENDPOINT };
})(window.Portfolio = window.Portfolio || {});
