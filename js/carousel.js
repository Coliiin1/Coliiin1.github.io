(function (P) {
    'use strict';
    const { $, $$, escapeHTML, reducedMotion } = P.utils;
    const { t } = P.i18n;
    const { getProjects } = P.data;
    const { projectImage, imgTag, catBadges, stackBadges } = P.media;
    const bus = P.bus;
    const { Projects } = P.projects;

    /* =====================================================
       DEV-FE-03 · CARRUSEL (RF-01)
       Rotación cíclica 5000 ms, pausa en mouseenter/focus,
       reanudación en mouseleave, soporte touch-swipe.
       ===================================================== */
    const Carousel = (() => {
        const INTERVAL = 5000;
        const SWIPE_THRESHOLD = 50;
        const root = $('#featured-carousel');
        const track = $('#carousel-track');
        const dotsWrap = $('#carousel-dots');
        const pauseReasons = new Set();
        let index = 0;
        let timer = null;
        let slides = [];
        let dots = [];

        function render() {
            const featured = getProjects().filter((p) => p.featured).slice(0, 5); // 3 a 5 tarjetas
            track.innerHTML = featured.map((p, i) =>
                '<div class="carousel__slide" role="group" aria-roledescription="' +
                escapeHTML(t('carousel.role')) + '" aria-label="' +
                escapeHTML(t('carousel.slide', { n: i + 1, total: featured.length })) + '">' +
                '<button type="button" class="carousel__media" data-quick="' + p.id + '" aria-label="' +
                escapeHTML(t('carousel.quick') + ': ' + p.title) + '">' +
                imgTag(projectImage(p, 0), t('img.preview', { title: p.title }), '') + '</button>' +
                '<div class="carousel__body">' +
                '<div class="badges">' + catBadges(p) + '</div>' +
                '<h3>' + escapeHTML(p.title) + '</h3>' +
                '<p>' + escapeHTML(p.short) + '</p>' +
                '<div class="badges">' + stackBadges(p.stack.slice(0, 4)) + '</div>' +
                '<button type="button" class="btn btn-primary" data-quick="' + p.id + '">' + escapeHTML(t('carousel.quick')) + '</button>' +
                '</div></div>'
            ).join('');

            dotsWrap.innerHTML = featured.map((p, i) =>
                '<button type="button" class="carousel__dot" data-index="' + i + '" aria-label="' +
                escapeHTML(t('carousel.goto', { n: i + 1, title: p.title })) + '"></button>'
            ).join('');

            slides = $$('.carousel__slide', track);
            dots = $$('.carousel__dot', dotsWrap);
            go(index, false);
        }

        function go(i, userInitiated = true) {
            const n = slides.length;
            if (!n) return;
            index = (i + n) % n;
            track.style.transform = 'translateX(' + (-index * 100) + '%)';
            slides.forEach((s, k) => {
                const active = k === index;
                s.inert = !active;
                s.setAttribute('aria-hidden', String(!active));
            });
            dots.forEach((d, k) => d.setAttribute('aria-current', String(k === index)));
            if (userInitiated) restart();
        }

        function stop() { clearInterval(timer); timer = null; }
        function start() {
            stop();
            if (pauseReasons.size === 0 && slides.length > 1) {
                timer = setInterval(() => go(index + 1, false), INTERVAL);
            }
        }
        function restart() { start(); }
        function pause(reason) { pauseReasons.add(reason); stop(); }
        function resume(reason) { pauseReasons.delete(reason); start(); }

        // Controles
        root.addEventListener('click', (e) => {
            const arrow = e.target.closest('.carousel__arrow');
            const dot = e.target.closest('.carousel__dot');
            const quick = e.target.closest('[data-quick]');
            if (arrow) go(index + Number(arrow.dataset.dir));
            else if (dot) go(Number(dot.dataset.index));
            else if (quick) Projects.openQuick(quick.dataset.quick, quick);
        });

        root.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
        });

        // Pausa al hover / foco (WCAG 2.2.2)
        root.addEventListener('mouseenter', () => pause('hover'));
        root.addEventListener('mouseleave', () => resume('hover'));
        root.addEventListener('focusin', () => pause('focus'));
        root.addEventListener('focusout', (e) => { if (!root.contains(e.relatedTarget)) resume('focus'); });

        // Touch-swipe
        let touchX = null;
        let touchY = null;
        track.addEventListener('touchstart', (e) => {
            touchX = e.touches[0].clientX;
            touchY = e.touches[0].clientY;
            pause('touch');
        }, { passive: true });
        track.addEventListener('touchend', (e) => {
            if (touchX !== null) {
                const dx = e.changedTouches[0].clientX - touchX;
                const dy = e.changedTouches[0].clientY - touchY;
                if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1));
            }
            touchX = touchY = null;
            resume('touch');
        }, { passive: true });

        document.addEventListener('visibilitychange', () => {
            document.hidden ? pause('tab') : resume('tab');
        });

        if (reducedMotion) pauseReasons.add('reduced-motion');

        // Desacople vía bus: modales y cambio de vista pausan/reanudan el carrusel
        bus.on('modal:open', () => pause('modal'));
        bus.on('modal:close', () => resume('modal'));
        bus.on('view:change', ({ id }) => { id === 'inicio' ? resume('hidden-view') : pause('hidden-view'); });

        return { render, pause, resume };
    })();
    P.carousel = { Carousel };
})(window.Portfolio = window.Portfolio || {});
