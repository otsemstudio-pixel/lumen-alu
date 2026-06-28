/* =====================================================================
   ANIMATIONS.JS — comportements partagés pour tout le site Lumen
   ===================================================================== */
(function () {
  // Fondu d'entrée de page — seulement si ce script s'exécute.
  // Si ce fichier ne se charge pas, body reste visible par défaut (voir animations.css).
  document.body.classList.add('fade-init');
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.body.classList.add('fade-in');
    });
  });
 
  // Révélation au scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
 
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }
 
  // En-tête : ombre + fond renforcé après un petit scroll
  var header = document.querySelector('header.navbar');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
/* =====================================================================
   ANIMATIONS.JS — comportements partagés pour tout le site Lumen
   ===================================================================== */
(function () {
  // Fondu d'entrée de page
  document.documentElement.classList.add('page-ready');

  // Révélation au scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // En-tête : ombre + fond renforcé après un petit scroll
  var header = document.querySelector('header.navbar');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
