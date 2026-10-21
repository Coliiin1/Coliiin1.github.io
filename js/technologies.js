(function (P) {
    'use strict';
    const { $, $$, escapeHTML } = P.utils;
    const { t } = P.i18n;
    const { getTech, LEVEL_WIDTH } = P.data;

    /* =====================================================
       RF-15 · TECNOLOGÍAS
       ===================================================== */
    const Tech = (() => {
        const wrap = $('#tech-groups');
        const groups = ['db', 'env', 'lang', 'ai'];

        const icon = (tch) => {
            const slugs = Array.isArray(tch.icons) ? tch.icons : [];
            const modifier = slugs.length > 2 ? ' is-trio' : slugs.length === 2 ? ' is-duo' : '';
            const imgs = slugs.map((slug) =>
                '<img src="assets/icons/tech/' + escapeHTML(slug) + '.svg" alt="" width="32" height="32" loading="lazy" decoding="async">'
            ).join('');
            return '<span class="tech-card__icon' + modifier + '" style="--tech-bg:' + escapeHTML(tch.bg) + '" aria-hidden="true">' +
                '<span class="tech-card__icon-plate">' + imgs + '</span></span>';
        };

        function render() {
            let uid = 0;
            const tech = getTech();
            wrap.innerHTML = groups.map((g) =>
                '<div class="tech-group"><h3>' + escapeHTML(t('tech.group.' + g)) + '</h3><div class="tech-grid">' +
                tech.filter((x) => x.group === g).map((x) => {
                    const tipId = 'tip-' + (uid++);
                    return '<button type="button" class="tech-card surface" aria-describedby="' + tipId + '">' +
                        icon(x) +
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
