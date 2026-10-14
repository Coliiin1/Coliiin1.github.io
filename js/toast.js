(function (P) {
    'use strict';
    const { $, escapeHTML, ICONS, reducedMotion } = P.utils;
    const { t } = P.i18n;

    /* =====================================================
       RF-12 · TOAST
       ===================================================== */
    const Toast = (() => {
        const region = $('#toast-region');
        function dismiss(el) {
            if (!el.isConnected || el.classList.contains('is-leaving')) return;
            el.classList.add('is-leaving');
            setTimeout(() => el.remove(), reducedMotion ? 0 : 200);
        }
        function show({ type = 'success', title, message, duration = 4000 }) {
            const el = document.createElement('div');
            el.className = 'toast' + (type === 'error' ? ' toast--error' : '');
            el.innerHTML =
                '<span class="toast__icon">' + (type === 'error' ? ICONS.alert : ICONS.check) + '</span>' +
                '<div class="toast__body"><strong>' + escapeHTML(title) + '</strong><p>' + escapeHTML(message) + '</p></div>' +
                '<button type="button" class="icon-btn" aria-label="' + escapeHTML(t('toast.close')) + '">' + ICONS.close + '</button>';
            el.querySelector('button').addEventListener('click', () => dismiss(el));
            region.appendChild(el);
            setTimeout(() => dismiss(el), duration);
        }
        return { show };
    })();
    P.toast = { Toast };
})(window.Portfolio = window.Portfolio || {});
