import { $, $$, escapeHTML, ICONS } from './utils.js';
import { t } from './i18n.js';
import { PROJECTS, projectById } from './data.js';
import { projectImage, imgTag, catBadges, stackBadges } from './media.js';
import { Modal } from './modal.js';
import { Nav } from './nav.js';

/* =====================================================
   RF-04 / RF-05 / RF-16 · PROYECTOS
   ===================================================== */
export const Projects = (() => {
    const grid = $('#projects-grid');
    const countEl = $('#results-count');
    const emptyEl = $('#projects-empty');
    const quickModal = $('#quick-modal');
    const detailModal = $('#detail-modal');
    const detailDialog = $('#detail-dialog');
    let currentFilter = 'todos';

    function render() {
        grid.innerHTML = PROJECTS.map((p) =>
            '<article class="project-card surface" data-category="' + p.category.join(' ') + '" data-id="' + p.id + '">' +
            imgTag(projectImage(p, 0), t('img.preview', { title: p.title })) +
            '<div class="project-card__body">' +
            '<div class="badges">' + catBadges(p) + '</div>' +
            '<h3 class="project-card__title">' + escapeHTML(p.title) + '</h3>' +
            '<p class="project-card__desc">' + escapeHTML(p.short) + '</p>' +
            '<div class="badges">' + stackBadges(p.stack.slice(0, 3)) + '</div>' +
            '<button type="button" class="btn btn-outline" data-detail="' + p.id + '">' + escapeHTML(t('projects.details')) + '</button>' +
            '</div></article>'
        ).join('');
        applyFilter(currentFilter, false);
    }

    /** RF-16 · Filtrado instantáneo en cliente (data-filter ↔ data-category). */
    function applyFilter(filter, animate = true) {
        currentFilter = filter;
        $$('.filter-btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
        let visible = 0;
        $$('.project-card', grid).forEach((card) => {
            const match = filter === 'todos' || card.dataset.category.split(' ').includes(filter);
            if (match) {
                visible++;
                if (card.hidden || animate) {
                    card.hidden = false;
                    card.classList.remove('is-entering');
                    if (animate) { void card.offsetWidth; card.classList.add('is-entering'); }
                }
            } else {
                card.hidden = true;
            }
        });
        countEl.textContent = t('projects.count', { n: visible, total: PROJECTS.length });
        emptyEl.hidden = visible > 0;
    }

    function openQuick(id, opener) {
        const p = projectById(id);
        if (!p) return;
        const img = $('#quick-img');
        img.src = projectImage(p, 0);
        img.alt = t('img.preview', { title: p.title });
        $('#quick-cats').innerHTML = catBadges(p);
        $('#quick-title').textContent = p.title;
        $('#quick-desc').textContent = p.short;
        $('#quick-stack').innerHTML = stackBadges(p.stack);
        $('#quick-full').dataset.project = p.id;
        Modal.open(quickModal, opener);
    }

    function openDetail(id, opener) {
        const p = projectById(id);
        if (!p) return;
        detailDialog.dataset.project = p.id;
        const thumbs = p.shots.map((caption, i) =>
            '<button type="button" class="gallery__thumb" data-shot="' + i + '" aria-current="' + (i === 0) + '" aria-label="' +
            escapeHTML(t('detail.shot', { n: i + 1, caption })) + '">' +
            '<img src="' + projectImage(p, i) + '" alt="" width="640" height="360" loading="lazy" decoding="async"></button>'
        ).join('');

        detailDialog.innerHTML =
            '<button class="modal__close" type="button" data-close aria-label="' + escapeHTML(t('detail.close')) + '">' + ICONS.close + '</button>' +
            '<div class="gallery" aria-label="' + escapeHTML(t('detail.gallery')) + '" role="group">' +
            '<img class="media-16x9" id="gallery-main" src="' + projectImage(p, 0) + '" alt="' +
            escapeHTML(t('detail.shot', { n: 1, caption: p.shots[0] })) + '" width="640" height="360" loading="lazy" decoding="async">' +
            '<p class="gallery__caption" id="gallery-caption">' + escapeHTML(p.shots[0]) + '</p>' +
            '<div class="gallery__thumbs">' + thumbs + '</div>' +
            '</div>' +
            '<div class="modal__content">' +
            '<div class="badges">' + catBadges(p) + '</div>' +
            '<h2 id="detail-title">' + escapeHTML(p.title) + '</h2>' +
            '<div class="detail-grid">' +
            '<div>' +
            '<h3>' + escapeHTML(t('detail.about')) + '</h3>' +
            '<p>' + escapeHTML(p.description) + '</p>' +
            '<h3 style="margin-top:20px">' + escapeHTML(t('detail.features')) + '</h3>' +
            '<ul>' + p.features.map((f) => '<li>' + escapeHTML(f) + '</li>').join('') + '</ul>' +
            '</div>' +
            '<div>' +
            '<h3>' + escapeHTML(t('detail.spec')) + '</h3>' +
            '<dl class="spec-list">' +
            '<dt>' + escapeHTML(t('detail.arch')) + '</dt><dd>' + escapeHTML(p.arch) + '</dd>' +
            '<dt>' + escapeHTML(t('detail.langs')) + '</dt><dd>' + escapeHTML(p.langs.join(', ')) + '</dd>' +
            '<dt>' + escapeHTML(t('detail.category')) + '</dt><dd>' + escapeHTML(p.category.map((c) => t('filter.' + c)).join(', ')) + '</dd>' +
            '<dt>' + escapeHTML(t('detail.stack')) + '</dt><dd>' + escapeHTML(p.stack.join(', ')) + '</dd>' +
            '</dl>' +
            '<h3 style="margin-top:20px">' + escapeHTML(t('detail.deps')) + '</h3>' +
            '<table class="deps-table"><thead><tr><th scope="col">' + escapeHTML(t('detail.dep')) + '</th><th scope="col">' +
            escapeHTML(t('detail.version')) + '</th></tr></thead><tbody>' +
            p.deps.map(([n, v]) => '<tr><td>' + escapeHTML(n) + '</td><td>' + escapeHTML(v) + '</td></tr>').join('') +
            '</tbody></table>' +
            '</div>' +
            '</div>' +
            '<div class="modal__actions">' +
            '<a class="btn btn-primary" href="' + escapeHTML(p.repo) + '" target="_blank" rel="noopener noreferrer">' +
            ICONS.github + '<span>' + escapeHTML(t('detail.repo')) + '</span></a>' +
            '</div>' +
            '</div>';

        Modal.open(detailModal, opener);
    }

    // Visor de galería
    detailDialog.addEventListener('click', (e) => {
        const thumb = e.target.closest('.gallery__thumb');
        if (!thumb) return;
        const p = projectById(detailDialog.dataset.project);
        const i = Number(thumb.dataset.shot);
        if (!p) return;
        const main = $('#gallery-main');
        main.src = projectImage(p, i);
        main.alt = t('detail.shot', { n: i + 1, caption: p.shots[i] });
        $('#gallery-caption').textContent = p.shots[i];
        $$('.gallery__thumb', detailDialog).forEach((b) => b.setAttribute('aria-current', String(b === thumb)));
    });

    // Delegación de eventos
    $('.filters').addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (btn && btn.dataset.filter !== currentFilter) applyFilter(btn.dataset.filter);
    });
    grid.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-detail]');
        if (btn) { detailDialog.dataset.project = btn.dataset.detail; openDetail(btn.dataset.detail, btn); }
    });
    $('#quick-full').addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.project;
        Modal.close({ restoreFocus: false });
        Nav.show('mis-proyectos', { focus: false });
        const opener = $('.project-card[data-id="' + id + '"] [data-detail]', grid);
        detailDialog.dataset.project = id;
        openDetail(id, opener);
    });

    return { render, openQuick, openDetail };
})();