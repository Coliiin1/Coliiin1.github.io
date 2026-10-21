(function (P) {
    'use strict';
    const { escapeHTML } = P.utils;
    const { t } = P.i18n;

    /* =====================================================
       DEV-AST-01 · Marcadores gráficos 16:9 (SVG ligero)
       Se reemplazan automáticamente por capturas reales si el
       proyecto define el arreglo `images`.
       ===================================================== */
    function projectImage(p, variant = 0) {
        if (Array.isArray(p.images) && p.images[variant]) return p.images[variant];
        const caption = p.shots[variant] || '';
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const ink = isDark ? '230,237,243' : '18,44,79';
        const inkA = (alpha) => 'rgba(' + ink + ',' + alpha + ')';
        const canvas = isDark ? '#101A26' : '#F1F5F9';
        const titleColor = isDark ? '#E6EDF3' : '#122C4F';

        const decor = [
            // 0 · ventana de interfaz
            '<rect x="40" y="34" width="560" height="196" rx="12" fill="' + inkA('.05') + '" stroke="' + inkA('.3') + '" stroke-width="2"/>' +
            '<line x1="40" y1="62" x2="600" y2="62" stroke="' + inkA('.18') + '" stroke-width="2"/>' +
            '<circle cx="62" cy="48" r="4" fill="' + inkA('.22') + '"/><circle cx="78" cy="48" r="4" fill="' + inkA('.15') + '"/><circle cx="94" cy="48" r="4" fill="' + inkA('.1') + '"/>' +
            '<rect x="62" y="80" width="150" height="130" rx="8" fill="' + inkA('.05') + '" stroke="' + inkA('.18') + '"/>' +
            '<rect x="232" y="84" width="330" height="14" rx="7" fill="' + inkA('.16') + '"/>' +
            '<rect x="232" y="112" width="270" height="14" rx="7" fill="' + inkA('.1') + '"/>' +
            '<rect x="232" y="140" width="300" height="14" rx="7" fill="' + inkA('.1') + '"/>' +
            '<rect x="232" y="176" width="120" height="30" rx="8" fill="' + inkA('.14') + '" stroke="' + inkA('.3') + '"/>',
            // 1 · diagrama de bloques
            '<g fill="' + inkA('.05') + '" stroke="' + inkA('.35') + '" stroke-width="2">' +
            '<rect x="60" y="50" width="150" height="80" rx="10"/><rect x="430" y="50" width="150" height="80" rx="10"/>' +
            '<rect x="245" y="150" width="150" height="80" rx="10"/></g>' +
            '<g stroke="' + inkA('.28') + '" stroke-width="3" fill="none"><path d="M210 90h220"/><path d="M135 130v60h110"/><path d="M505 130v60H395"/></g>',
            // 2 · código
            '<rect x="40" y="34" width="560" height="196" rx="12" fill="' + inkA('.04') + '" stroke="' + inkA('.3') + '" stroke-width="2"/>' +
            '<g fill="' + inkA('.18') + '">' +
            '<rect x="64" y="58" width="120" height="10" rx="5"/><rect x="196" y="58" width="200" height="10" rx="5" opacity=".6"/>' +
            '<rect x="88" y="84" width="240" height="10" rx="5" opacity=".8"/><rect x="88" y="110" width="320" height="10" rx="5" opacity=".6"/>' +
            '<rect x="112" y="136" width="180" height="10" rx="5" opacity=".8"/><rect x="112" y="162" width="260" height="10" rx="5" opacity=".6"/>' +
            '<rect x="88" y="188" width="140" height="10" rx="5" opacity=".8"/><rect x="64" y="210" width="60" height="10" rx="5"/></g>'
        ][variant % 3];

        const svg =
            '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">' +
            '<rect width="640" height="360" fill="' + canvas + '"/>' + decor +
            '<text x="600" y="320" text-anchor="end" font-family="Consolas,monospace" font-size="56" font-weight="700" fill="' + inkA('.1') + '">' + escapeHTML(p.glyph) + '</text>' +
            '<text x="40" y="290" font-family="Segoe UI,Arial,sans-serif" font-size="30" font-weight="700" fill="' + titleColor + '">' + escapeHTML(p.title) + '</text>' +
            '<text x="40" y="322" font-family="Segoe UI,Arial,sans-serif" font-size="18" fill="' + inkA('.65') + '">' + escapeHTML(caption) + '</text>' +
            '</svg>';
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    const imgTag = (src, alt, cls = 'media-16x9') =>
        '<img class="' + cls + '" src="' + src + '" alt="' + escapeHTML(alt) + '" width="640" height="360" loading="lazy" decoding="async">';

    const catBadges = (p) => p.category.map((c) => '<span class="badge">' + escapeHTML(t('filter.' + c)) + '</span>').join('');
    const stackBadges = (list) => list.map((s) => '<span class="badge">' + escapeHTML(s) + '</span>').join('');
    P.media = { projectImage, imgTag, catBadges, stackBadges };
})(window.Portfolio = window.Portfolio || {});
