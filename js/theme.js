(function (P) {
    'use strict';

    /* =====================================================
       MODO OSCURO · PREFERENCIA DE TEMA
       La preferencia se guarda en localStorage y se aplica
       antes del primer pintado desde index.html.
       ===================================================== */
    const STORAGE_KEY = 'portfolio.theme';
    const THEME_COLORS = { light: '#FBF9E4', dark: '#0B1220' };
    const root = document.documentElement;
    const metaTheme = document.querySelector('meta[name="theme-color"]');

    function readStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function apply(theme, { persist = true, notify = true } = {}) {
        if (theme !== 'light' && theme !== 'dark') return;
        root.setAttribute('data-theme', theme);
        if (metaTheme) metaTheme.setAttribute('content', THEME_COLORS[theme]);
        if (persist) {
            try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* almacenamiento no disponible */ }
        }
        if (notify) {
            document.dispatchEvent(new CustomEvent('theme:change', { detail: { theme } }));
        }
    }

    const Theme = {
        init() {
            const stored = readStored();
            apply(stored === 'dark' ? 'dark' : 'light', { persist: false, notify: false });
        },
        set(theme) { apply(theme); },
        toggle() { apply(this.current === 'dark' ? 'light' : 'dark'); },
        get current() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; },
        get isDark() { return this.current === 'dark'; }
    };

    Theme.init();
    P.theme = { Theme, THEME_COLORS };
})(window.Portfolio = window.Portfolio || {});
