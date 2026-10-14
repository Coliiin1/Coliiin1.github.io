import { DICTIONARIES, I18n } from './i18n.js';
import { Carousel } from './carousel.js';
import { Projects } from './projects.js';
import { Tech } from './technologies.js';
import { Modal } from './modal.js';
import { Nav } from './nav.js';
import './contact.js';

/* =====================================================
   TECLADO GLOBAL · Escape (keyCode 27)
   ===================================================== */
document.addEventListener('keydown', (e) => {
    const isEscape = e.key === 'Escape' || e.keyCode === 27;
    if (Modal.isOpen) {
        if (isEscape) { e.preventDefault(); Modal.close(); }
        else if (e.key === 'Tab') Modal.trapFocus(e);
        return;
    }
    if (isEscape && Nav.isMenuOpen()) Nav.setMobileMenu(false, { focusToggle: true });
    if (isEscape) Tech.closeAll();
});

/* =====================================================
   ARRANQUE
   ===================================================== */
function renderDynamic() {
    Carousel.render();
    Projects.render();
    Tech.render();
}
document.addEventListener('i18n:change', renderDynamic);

const requestedLang = new URLSearchParams(location.search).get('lang');
if (requestedLang && requestedLang !== 'es' && DICTIONARIES[requestedLang]) {
    I18n.apply(requestedLang); // dispara renderDynamic()
} else {
    renderDynamic();
}
Nav.init();

// API pública mínima para la futura V2.1 (conmutador de idioma)
window.PortfolioI18n = Object.freeze({
    setLang: (lang) => I18n.apply(lang),
    get lang() { return I18n.lang; }
});