/* ==========================================================================
   SMART Engineering — theme switching + image reveal animations
   ========================================================================== */
(function () {
  'use strict';

  var STORAGE_KEY = 'se-theme';
  var root = document.documentElement;
  var mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  /* ---------- theme ------------------------------------------------------ */

  function stored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function systemTheme() {
    return mql && mql.matches ? 'dark' : 'light';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      var next = theme === 'dark' ? 'light' : 'dark';
      btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      btn.setAttribute('title', 'Switch to ' + next + ' theme');
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
  }

  // The inline head script already set the initial value; re-assert it here in
  // case that script was blocked.
  apply(stored() || systemTheme());

  // Follow the operating system while the visitor has not chosen manually.
  if (mql) {
    var onSystemChange = function () { if (!stored()) apply(systemTheme()); };
    if (mql.addEventListener) mql.addEventListener('change', onSystemChange);
    else if (mql.addListener) mql.addListener(onSystemChange);
  }

  function init() {
    var btn = document.getElementById('themeToggle');
    if (btn) {
      apply(root.getAttribute('data-theme') || systemTheme());
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        apply(next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      });
    }

    revealOnScroll();
  }

  /* ---------- reveal images as they scroll into view ---------------------- */

  function revealOnScroll() {
    if (window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var selector = [
      '.split-media',
      '.about-media',
      '.service-media',
      '.brand-grid figure',
      '.product-card',
      '.gallery-tile',
      '.map-frame',
      '.help-card',
      '.mv-card',
      '.service-card',
      '.value-item'
    ].join(',');

    var nodes = Array.prototype.slice.call(document.querySelectorAll(selector));
    if (!nodes.length) return;

    // Never animate anything that lives inside the header or a slider track.
    nodes = nodes.filter(function (el) {
      return !el.closest('header.main, .hero-track, .gallery-track, .lightbox');
    });

    if (!('IntersectionObserver' in window)) return; // old browser: leave visible

    nodes.forEach(function (el) {
      el.classList.add('se-reveal');
      // stagger siblings so grids cascade instead of popping in together
      var siblings = el.parentNode ? Array.prototype.indexOf.call(el.parentNode.children, el) : 0;
      el.style.transitionDelay = Math.min(siblings, 6) * 80 + 'ms';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('se-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    nodes.forEach(function (el) { io.observe(el); });

    // Anything already on screen at load should show immediately.
    requestAnimationFrame(function () {
      nodes.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('se-in');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
