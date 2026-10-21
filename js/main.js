(function (P) {
    'use strict';
    const { $ } = P.utils;
    const { DICTIONARIES, I18n, t } = P.i18n;
    const { Carousel } = P.carousel;
    const { Projects } = P.projects;
    const { Tech } = P.technologies;
    const { Modal } = P.modal;
    const { Nav } = P.nav;
    const { Theme } = P.theme;

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

    const langToggle = $('#lang-toggle');
    const langLabel = $('.lang-toggle__label', langToggle);
    const themeToggle = $('#theme-toggle');

    function syncControls() {
        const isEnglish = I18n.lang === 'en';
        const nextLangLabel = t(isEnglish ? 'lang.switchToEs' : 'lang.switchToEn');
        langLabel.textContent = isEnglish ? 'ES' : 'EN';
        langToggle.setAttribute('aria-label', nextLangLabel);
        langToggle.setAttribute('title', nextLangLabel);

        const dark = Theme.isDark;
        const nextThemeLabel = t(dark ? 'theme.toLight' : 'theme.toDark');
        themeToggle.setAttribute('aria-label', nextThemeLabel);
        themeToggle.setAttribute('title', nextThemeLabel);
        themeToggle.setAttribute('aria-pressed', String(dark));
    }

    function setLanguage(lang) {
        if (!DICTIONARIES[lang] || lang === I18n.lang) return;
        I18n.apply(lang);
        try {
            const url = new URL(location.href);
            if (lang === 'es') url.searchParams.delete('lang');
            else url.searchParams.set('lang', lang);
            history.replaceState(history.state, '', url.href);
        } catch (e) { /* URL no modificable (p. ej. file://) */ }
    }

    function initialLang() {
        const requested = new URLSearchParams(location.search).get('lang');
        if (requested && DICTIONARIES[requested]) return requested;
        try {
            const saved = localStorage.getItem('portfolio.lang');
            if (saved && DICTIONARIES[saved]) return saved;
        } catch (e) { /* almacenamiento no disponible */ }
        return 'es';
    }

    function refreshPageContent() {
        renderDynamic();
        if (Modal.isOpen) Projects.refreshOpen();
    }

    document.addEventListener('i18n:change', () => {
        refreshPageContent();
        syncControls();
    });
    document.addEventListener('theme:change', () => {
        refreshPageContent();
        syncControls();
    });

    langToggle.addEventListener('click', () => {
        setLanguage(I18n.lang === 'es' ? 'en' : 'es');
    });
    themeToggle.addEventListener('click', () => Theme.toggle());

    I18n.apply(initialLang()); // dispara i18n:change → renderDynamic()
    Nav.init();

    // API pública mínima para integraciones externas
    window.PortfolioI18n = Object.freeze({
        setLang: (lang) => setLanguage(lang),
        get lang() { return I18n.lang; }
    });
})(window.Portfolio = window.Portfolio || {});
