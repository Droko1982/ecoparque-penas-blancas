/* ==========================================================
   Ecoparque Peñas Blancas — Interactions
   ========================================================== */

(() => {
    'use strict';

    const $  = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isES = document.documentElement.lang.startsWith('es');

    const T = isES ? {
        openClosesAt:   (h) => `Abierto · cierra ${h}`,
        closedOpensAt:  (label) => `Cerrado · ${label}`,
        opensTodayAt:   (h) => `abre hoy ${h}`,
        opensTomorrow:  (h) => `mañana ${h}`,
        opensWednesday: (h) => `mié ${h}`,
        tipLabel:       'Consejo del día'
    } : {
        openClosesAt:   (h) => `Open · closes ${h}`,
        closedOpensAt:  (label) => `Closed · ${label}`,
        opensTodayAt:   (h) => `opens ${h}`,
        opensTomorrow:  (h) => `tomorrow ${h}`,
        opensWednesday: (h) => `wed ${h}`,
        tipLabel:       "Today's tip"
    };

    /* ----- Theme toggle ----- */
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            const next = isLight ? 'dark' : 'light';
            if (next === 'light') document.documentElement.setAttribute('data-theme', 'light');
            else document.documentElement.removeAttribute('data-theme');
            try { localStorage.setItem('ecoparque-theme', next); } catch (e) {}
            const meta = document.querySelector('meta[name="theme-color"]:not([media])');
            if (meta) meta.setAttribute('content', next === 'light' ? '#FBFAF6' : '#0B1612');
        });
    }

    /* ----- Mobile menu ----- */
    const navToggle = $('#navToggle');
    const navMenu   = $('#navMenu');
    const nav       = $('#nav');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const open = navToggle.classList.toggle('open');
            navMenu.classList.toggle('open', open);
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            document.body.style.overflow = open ? 'hidden' : '';
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    /* ----- Footer year ----- */
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ----- Counter animation ----- */
    const animateCounter = (el) => {
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || '';
        if (Number.isNaN(target)) return;
        if (reduceMotion) {
            el.textContent = target + suffix;
            return;
        }
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
        };
        requestAnimationFrame(tick);
    };

    /* ----- Reveal-on-scroll ----- */
    const revealTargets = $$('.section__head, .section__text, .section__visual, .activity, .pricing__card, .schedule, .location, .cta, .step, .stay, .faq__item, .hero__content, .hero__visual, .fact, .legend__inner');
    revealTargets.forEach(el => el.classList.add('reveal'));
    const counterTargets = $$('[data-counter]');

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealTargets.forEach(el => io.observe(el));

        const counterIO = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterIO.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        counterTargets.forEach(el => counterIO.observe(el));
    } else {
        revealTargets.forEach(el => el.classList.add('in'));
        counterTargets.forEach(el => animateCounter(el));
    }

    /* ----- Subtle parallax for hero glows ----- */
    const glows = $$('.hero__glow');
    if (glows.length && window.matchMedia('(min-width: 960px)').matches && !reduceMotion) {
        let ticking = false;
        window.addEventListener('mousemove', (e) => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth) - .5;
                const y = (e.clientY / window.innerHeight) - .5;
                glows.forEach((glow, i) => {
                    const factor = (i + 1) * 12;
                    glow.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
                });
                ticking = false;
            });
        }, { passive: true });
    }

    /* ----- Active nav link on scroll ----- */
    const sections = $$('main section[id]');
    const navLinks = $$('.nav__menu a[href^="#"]');
    if ('IntersectionObserver' in window && sections.length) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        link.style.color = link.getAttribute('href') === `#${id}`
                            ? 'var(--text)' : '';
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });
        sections.forEach(s => spy.observe(s));
    }

    /* ----- FAQ accordion ----- */
    const faqItems = $$('.faq__item');
    faqItems.forEach(item => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                faqItems.forEach(other => { if (other !== item) other.open = false; });
            }
        });
    });

    /* ----- Scroll-aware nav + floating CTA ----- */
    const floatCta  = $('.float-cta');
    const bottomBar = $('#bottomBar');
    const footer    = $('.footer');

    const onScroll = () => {
        const y = window.scrollY;
        if (nav) nav.classList.toggle('scrolled', y > 30);
        const nearFooter = footer && (window.innerHeight + y) > (footer.offsetTop - 60);
        if (floatCta)  floatCta.classList.toggle('show', y > 500 && !nearFooter);
        if (bottomBar) bottomBar.classList.toggle('show', y > 400 && !nearFooter);
    };
    let scrollTicking = false;
    const scheduleScroll = () => {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(() => { onScroll(); scrollTicking = false; });
    };
    window.addEventListener('scroll', scheduleScroll, { passive: true });
    window.addEventListener('resize', scheduleScroll, { passive: true });
    onScroll();

    /* ----- Open-now status -----
       Schedule: Wed–Mon 9AM–3PM, closed Tuesdays
       (per Rural Adventure tour info; ecoparque itself opens daily,
        but we mirror the tour operator's stricter hours for safety) */
    const computeStatus = () => {
        const now = new Date();
        const day = now.getDay();           // 0=Sun ... 6=Sat
        const minutes = now.getHours() * 60 + now.getMinutes();
        const fmt = (m) => {
            const h12 = ((Math.floor(m / 60) + 11) % 12) + 1;
            const am  = m < 12 * 60;
            return `${h12}${am ? 'AM' : 'PM'}`;
        };
        const OPEN = 9 * 60, CLOSE = 15 * 60;
        // Tuesday = closed
        if (day === 2) {
            return { open: false, text: T.closedOpensAt(T.opensTomorrow(fmt(OPEN))) };
        }
        // Other days
        if (minutes >= OPEN && minutes < CLOSE) {
            return { open: true, text: T.openClosesAt(fmt(CLOSE)) };
        }
        if (minutes < OPEN) {
            return { open: false, text: T.closedOpensAt(T.opensTodayAt(fmt(OPEN))) };
        }
        // After close — next opening:
        if (day === 1) return { open: false, text: T.closedOpensAt(T.opensWednesday(fmt(OPEN))) }; // Mon → Wed
        return { open: false, text: T.closedOpensAt(T.opensTomorrow(fmt(OPEN))) };
    };
    const renderStatus = () => {
        const status = computeStatus();
        $$('[data-status-pill]').forEach(el => {
            el.dataset.state = status.open ? 'open' : 'closed';
            const txt = el.querySelector('.status-text');
            if (txt) txt.textContent = status.text;
        });
    };
    renderStatus();
    setInterval(renderStatus, 60 * 1000);

})();
