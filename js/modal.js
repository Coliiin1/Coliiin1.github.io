import { $, $$, reducedMotion } from './utils.js';
import { bus } from './bus.js';

/* =====================================================
   RF-02 / RF-05 · MODALES
   Backdrop blur(8px), cierre con Escape (keyCode 27) o
   clic en backdrop, bloqueo de scroll y foco atrapado.
   ===================================================== */
export const Modal = (() => {
    let current = null;
    let returnFocus = null;
    const hideTimers = new WeakMap();
    const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])';

    function open(modal, opener) {
        if (current && current !== modal) close({ restoreFocus: false });
        if (!current) returnFocus = opener || document.activeElement;
        clearTimeout(hideTimers.get(modal));
        modal.hidden = false;
        void modal.offsetWidth; // reflow para disparar la transición
        modal.classList.add('is-open');
        document.body.classList.add('modal-open');
        current = modal;
        const dialog = $('.modal__dialog', modal);
        dialog.scrollTop = 0;
        const closeBtn = $('.modal__close', modal);
        if (closeBtn) closeBtn.focus({ preventScroll: true });
        bus.emit('modal:open');
    }

    function close({ restoreFocus = true } = {}) {
        if (!current) return;
        const modal = current;
        current = null;
        modal.classList.remove('is-open');
        hideTimers.set(modal, setTimeout(() => { modal.hidden = true; }, reducedMotion ? 0 : 250));
        if (restoreFocus) {
            document.body.classList.remove('modal-open');
            bus.emit('modal:close');
            if (returnFocus && document.contains(returnFocus)) returnFocus.focus({ preventScroll: true });
            returnFocus = null;
        }
    }

    function trapFocus(e) {
        const items = $$(FOCUSABLE, current).filter((el) => el.offsetParent !== null);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    $$('.modal').forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target.closest('[data-close]')) close();
        });
    });

    return {
        open, close, trapFocus,
        get isOpen() { return current !== null; }
    };
})();