(function (P) {
    'use strict';
    const { $, $$, escapeHTML } = P.utils;
    const { t } = P.i18n;
    const { TECH, LEVEL_WIDTH } = P.data;

    /* =====================================================
       RF-15 · TECNOLOGÍAS
       ===================================================== */
    const Tech = (() => {
        const wrap = $('#tech-groups');
        const groups = ['db', 'env', 'lang'];

        const icon = (tch) =>
            '<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
            '<rect width="48" height="48" rx="12" fill="' + tch.bg + '"/>' +
            '<text x="24" y="' + (tch.abbr.length > 2 ? 29 : 31) + '" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="700" font-size="' +
            (tch.abbr.length > 2 ? 14 : 18) + '" fill="#fff">' + escapeHTML(tch.abbr) + '</text></svg>';

        function render() {
            let uid = 0;
            wrap.innerHTML = groups.map((g) =>
                '<div class="tech-group"><h3>' + escapeHTML(t('tech.group.' + g)) + '</h3><div class="tech-grid">' +
                TECH.filter((x) => x.group === g).map((x) => {
                    const tipId = 'tip-' + (uid++);
                    return '<button type="button" class="tech-card surface" aria-describedby="' + tipId + '">' +
                        '<span class="tech-card__icon">' + icon(x) + '</span>' +
                        '<span class="tech-card__name">' + escapeHTML(x.name) + '</span>' +
                        '<span class="tooltip" role="tooltip" id="' + tipId + '">' +
                        '<span class="tooltip__level"><span>' + escapeHTML(t('tech.level')) + '</span><span>' + escapeHTML(t('level.' + x.level)) + '</span></span>' +
                        '<span class="meter" aria-hidden="true"><span style="--lvl:' + LEVEL_WIDTH[x.level] + '"></span></span>' +
                        '<span>' + escapeHTML(x.note) + '</span>' +
                        '</span></button>';
                }).join('') +
                '</div></div>'
            ).join('');
        }

        function closeAll(except) {
            $$('.tech-card.is-open', wrap).forEach((c) => { if (c !== except) c.classList.remove('is-open'); });
        }

        // Soporte táctil / clic: alterna el tooltip
        wrap.addEventListener('click', (e) => {
            const card = e.target.closest('.tech-card');
            if (!card) return;
            closeAll(card);
            card.classList.toggle('is-open');
        });
        document.addEventListener('click', (e) => { if (!e.target.closest('.tech-card')) closeAll(); });
        wrap.addEventListener('focusout', (e) => { if (!wrap.contains(e.relatedTarget)) closeAll(); });

        return { render, closeAll };
    })();
    P.technologies = { Tech };
})(window.Portfolio = window.Portfolio || {});
