import { escapeHTML } from './utils.js';
import { t } from './i18n.js';

/* =====================================================
   DEV-AST-01 · Marcadores gráficos 16:9 (SVG ligero)
   Se reemplazan automáticamente por WebP si el proyecto
   define el arreglo `images`.
   ===================================================== */
export function projectImage(p, variant = 0) {
    if (Array.isArray(p.images) && p.images[variant]) return p.images[variant];
    const [c1, c2] = p.palette;
    const caption = p.shots[variant] || '';
    const decor = [
        // 0 · ventana de interfaz
        '<rect x="40" y="34" width="560" height="196" rx="12" fill="rgba(255,255,255,.14)"/>' +
        '<rect x="40" y="34" width="560" height="28" rx="12" fill="rgba(255,255,255,.22)"/>' +
        '<circle cx="62" cy="48" r="5" fill="#fff" opacity=".75"/><circle cx="80" cy="48" r="5" fill="#fff" opacity=".55"/><circle cx="98" cy="48" r="5" fill="#fff" opacity=".35"/>' +
        '<rect x="62" y="80" width="150" height="130" rx="8" fill="rgba(255,255,255,.18)"/>' +
        '<rect x="232" y="84" width="330" height="14" rx="7" fill="rgba(255,255,255,.35)"/>' +
        '<rect x="232" y="112" width="270" height="14" rx="7" fill="rgba(255,255,255,.25)"/>' +
        '<rect x="232" y="140" width="300" height="14" rx="7" fill="rgba(255,255,255,.25)"/>' +
        '<rect x="232" y="176" width="120" height="30" rx="8" fill="rgba(255,255,255,.4)"/>',
        // 1 · diagrama de bloques
        '<g fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.55)" stroke-width="2">' +
        '<rect x="60" y="50" width="150" height="80" rx="10"/><rect x="430" y="50" width="150" height="80" rx="10"/>' +
        '<rect x="245" y="150" width="150" height="80" rx="10"/></g>' +
        '<g stroke="rgba(255,255,255,.7)" stroke-width="3" fill="none"><path d="M210 90h220"/><path d="M135 130v60h110"/><path d="M505 130v60H395"/></g>',
        // 2 · código
        '<rect x="40" y="34" width="560" height="196" rx="12" fill="rgba(0,0,0,.22)"/>' +
        '<g fill="rgba(255,255,255,.45)">' +
        '<rect x="64" y="58" width="120" height="10" rx="5"/><rect x="196" y="58" width="200" height="10" rx="5" opacity=".6"/>' +
        '<rect x="88" y="84" width="240" height="10" rx="5" opacity=".8"/><rect x="88" y="110" width="320" height="10" rx="5" opacity=".6"/>' +
        '<rect x="112" y="136" width="180" height="10" rx="5" opacity=".8"/><rect x="112" y="162" width="260" height="10" rx="5" opacity=".6"/>' +
        '<rect x="88" y="188" width="140" height="10" rx="5" opacity=".8"/><rect x="64" y="210" width="60" height="10" rx="5"/></g>'
    ][variant % 3];

    const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient></defs>' +
        '<rect width="640" height="360" fill="url(#g)"/>' + decor +
        '<text x="600" y="320" text-anchor="end" font-family="Consolas,monospace" font-size="56" font-weight="700" fill="rgba(255,255,255,.22)">' + escapeHTML(p.glyph) + '</text>' +
        '<text x="40" y="290" font-family="Segoe UI,Arial,sans-serif" font-size="30" font-weight="700" fill="#fff">' + escapeHTML(p.title) + '</text>' +
        '<text x="40" y="322" font-family="Segoe UI,Arial,sans-serif" font-size="18" fill="rgba(255,255,255,.88)">' + escapeHTML(caption) + '</text>' +
        '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

export const imgTag = (src, alt, cls = 'media-16x9') =>
    '<img class="' + cls + '" src="' + src + '" alt="' + escapeHTML(alt) + '" width="640" height="360" loading="lazy" decoding="async">';

export const catBadges = (p) => p.category.map((c) => '<span class="badge badge--cat">' + escapeHTML(t('filter.' + c)) + '</span>').join('');
export const stackBadges = (list) => list.map((s) => '<span class="badge">' + escapeHTML(s) + '</span>').join('');