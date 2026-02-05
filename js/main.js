(function () {
  'use strict';

  // Smooth scroll for in-page anchors (e.g. #how-it-works)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    var target = document.querySelector(targetId);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  // Optional: mark current page in nav
  var path = window.location.pathname.replace(/^\//, '') || 'index.html';
  document.querySelectorAll('.site-nav a, .site-footer nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Hero gallery: cute card + thumbnails + click to open lightbox
  var heroImg = document.getElementById('hero-gallery-img');
  var heroThumbs = document.getElementById('hero-gallery-thumbs');
  var heroPrev = document.querySelector('.hero-gallery-prev');
  var heroNext = document.querySelector('.hero-gallery-next');
  var heroMainBtn = document.getElementById('hero-gallery-main-btn');
  var lightbox = document.getElementById('hero-lightbox');
  var lightboxImg = document.getElementById('hero-lightbox-img');
  var lightboxCurrent = document.getElementById('hero-lightbox-current');
  var lightboxClose = document.querySelector('.hero-lightbox-close');
  var lightboxBackdrop = document.querySelector('.hero-lightbox-backdrop');
  var lightboxPrev = document.querySelector('.hero-lightbox-prev');
  var lightboxNext = document.querySelector('.hero-lightbox-next');

  var heroSlides = [
    'images/1.jpg',
    'images/hero.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg'
  ];
  var heroIndex = 0;

  if (heroImg && heroThumbs && heroPrev && heroNext) {
    heroSlides.forEach(function (src, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'hero-gallery-thumb' + (i === 0 ? ' is-active' : '');
      btn.setAttribute('aria-label', 'View picture ' + (i + 1));
      var thumbImg = document.createElement('img');
      thumbImg.src = src;
      thumbImg.alt = '';
      btn.appendChild(thumbImg);
      btn.addEventListener('click', function (e) {
        heroShowSlide(i);
        heroOpenLightbox();
      });
      heroThumbs.appendChild(btn);
    });
    var thumbEls = heroThumbs.querySelectorAll('.hero-gallery-thumb');

    function heroShowSlide(index) {
      heroIndex = (index + heroSlides.length) % heroSlides.length;
      heroImg.src = heroSlides[heroIndex];
      thumbEls.forEach(function (el, i) {
        el.classList.toggle('is-active', i === heroIndex);
      });
      var activeThumb = thumbEls[heroIndex];
      if (activeThumb) activeThumb.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }

    function heroOpenLightbox() {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = heroSlides[heroIndex];
      if (lightboxCurrent) lightboxCurrent.textContent = heroIndex + 1;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function heroCloseLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function heroLightboxShowSlide(index) {
      heroIndex = (index + heroSlides.length) % heroSlides.length;
      lightboxImg.src = heroSlides[heroIndex];
      heroImg.src = heroSlides[heroIndex];
      if (lightboxCurrent) lightboxCurrent.textContent = heroIndex + 1;
      thumbEls.forEach(function (el, i) {
        el.classList.toggle('is-active', i === heroIndex);
      });
    }

    heroPrev.addEventListener('click', function (e) { e.stopPropagation(); heroShowSlide(heroIndex - 1); });
    heroNext.addEventListener('click', function (e) { e.stopPropagation(); heroShowSlide(heroIndex + 1); });

    if (heroMainBtn) {
      heroMainBtn.addEventListener('click', function () { heroOpenLightbox(); });
    }

    if (lightbox) {
      if (lightboxClose) lightboxClose.addEventListener('click', heroCloseLightbox);
      if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', heroCloseLightbox);
      if (lightboxPrev) lightboxPrev.addEventListener('click', function () { heroLightboxShowSlide(heroIndex - 1); });
      if (lightboxNext) lightboxNext.addEventListener('click', function () { heroLightboxShowSlide(heroIndex + 1); });
      document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('is-open')) return;
        if (e.key === 'Escape') heroCloseLightbox();
        if (e.key === 'ArrowLeft') heroLightboxShowSlide(heroIndex - 1);
        if (e.key === 'ArrowRight') heroLightboxShowSlide(heroIndex + 1);
      });
    }
  }
})();
