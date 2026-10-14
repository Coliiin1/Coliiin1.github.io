import { $, $$, desktopMQ } from './utils.js';
import { t } from './i18n.js';
import { Tech } from './technologies.js';
import { bus } from './bus.js';

/* =====================================================
   DEV-FE-09 · NAVEGACIÓN SPA (RF-10 · RNF-02 · RNF-03)
   Vistas en memoria, estado activo reactivo, historial
   con hash y bloqueo (150 ms) ante clics repetidos.
   ===================================================== */
export const Nav = (() => {
    const VIEWS = ['inicio', 'mi-informacion', 'mis-proyectos', 'tecnologias', 'contacto'];
    const LOCK_MS = 150;
    const sidebar = $('#sidebar');
    const overlay = $('#nav-overlay');
    const toggle = $('#menu-toggle');
    let current = null;
    let locked = false;
    let pending = null;

    /* --- Menú móvil (off-canvas) --- */
    function isMobile() { return !desktopMQ.matches; }

    function syncSidebarA11y() {
        const hidden = isMobile() && !sidebar.classList.contains('is-open');
        sidebar.inert = hidden;
        if (hidden) sidebar.setAttribute('aria-hidden', 'true');
        else sidebar.removeAttribute('aria-hidden');
    }

    function setMobileMenu(open, { focusToggle = false } = {}) {
        sidebar.classList.toggle('is-open', open);
        overlay.classList.toggle('is-visible', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', t(open ? 'nav.menuClose' : 'nav.menu'));
        document.body.classList.toggle('nav-open', open && isMobile());
        syncSidebarA11y();
        if (open) { const a = $('.nav-item-active', sidebar) || $('.nav-item', sidebar); a.focus(); }
        else if (focusToggle) toggle.focus();
    }
    const isMenuOpen = () => sidebar.classList.contains('is-open');

    /* --- Cambio de vista --- */
    function show(id, { push = true, focus = true } = {}) {
        if (!VIEWS.includes(id)) id = 'inicio';
        if (isMenuOpen()) setMobileMenu(false);
        if (id === current) return;
        if (locked) { pending = { id, push, focus }; return; }
        locked = true;

        const next = document.getElementById(id);
        if (current) {
            const prev = document.getElementById(current);
            prev.classList.remove('is-active');
            prev.hidden = true;
        }
        next.hidden = false;
        void next.offsetWidth; // reflow → transición de opacidad
        next.classList.add('is-active');

        $$('.nav-item').forEach((a) => {
            const active = a.dataset.nav === id;
            a.classList.toggle('nav-item-active', active);
            if (active) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
        });

        if (push && location.hash !== '#' + id) history.pushState({ view: id }, '', '#' + id);
        window.scrollTo(0, 0);
        if (focus) {
            const heading = $('[tabindex="-1"]', next);
            if (heading) heading.focus({ preventScroll: true });
        }

        bus.emit('view:change', { id });
        if (id !== 'tecnologias') Tech.closeAll();
        current = id;

        setTimeout(() => {
            locked = false;
            if (pending) { const p = pending; pending = null; show(p.id, p); }
        }, LOCK_MS);
    }

    const idFromHash = () => decodeURIComponent(location.hash.replace('#', ''));

    // Delegación: cualquier enlace interno hacia una vista
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const id = link.getAttribute('href').slice(1);
        if (!VIEWS.includes(id)) return;
        e.preventDefault();
        show(id);
    });

    window.addEventListener('popstate', () => show(idFromHash(), { push: false }));
    window.addEventListener('hashchange', () => show(idFromHash(), { push: false }));

    toggle.addEventListener('click', () => setMobileMenu(!isMenuOpen()));
    overlay.addEventListener('click', () => setMobileMenu(false, { focusToggle: true }));
    desktopMQ.addEventListener('change', () => setMobileMenu(false));

    function init() {
        syncSidebarA11y();
        const initial = idFromHash();
        show(VIEWS.includes(initial) ? initial : 'inicio', { push: false, focus: false });
        if (!VIEWS.includes(initial) && location.hash) history.replaceState(null, '', '#inicio');
    }

    return { show, init, isMenuOpen, setMobileMenu };
})();