/* =============================================================================
   Johnson Technology Services — main.js
   Responsibilities:
     1. Sticky nav shadow on scroll
     2. Hamburger menu toggle (with body scroll lock)
     3. Close mobile menu on nav link click or Escape key
     4. Active nav link highlighting via IntersectionObserver
     5. Copyright year auto-update
   ============================================================================= */

(function () {
  'use strict';

  /* ---- 1. STICKY NAV SHADOW -------------------------------------------- */

  var header = document.getElementById('site-header');

  function handleHeaderScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  // Run once on load in case the page is pre-scrolled (e.g. after a refresh)
  handleHeaderScroll();


  /* ---- 2. HAMBURGER MENU ------------------------------------------------ */

  var hamburgerBtn = document.getElementById('hamburger-btn');
  var navLinks     = document.getElementById('nav-links');

  /**
   * Open or close the mobile navigation menu.
   * @param {boolean} [forceClose=false] - When true, always closes the menu.
   */
  function toggleMenu(forceClose) {
    var isOpen   = navLinks.classList.contains('open');
    var shouldOpen = forceClose ? false : !isOpen;

    navLinks.classList.toggle('open', shouldOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(shouldOpen));

    // Prevent background scroll while the full-screen menu is open
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', function () {
    toggleMenu(false);
  });


  /* ---- 3. CLOSE MENU ON LINK CLICK / ESCAPE ----------------------------- */

  // Close when any nav link is clicked (smooth scroll to section, then close)
  navLinks.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(true);
    });
  });

  // Close on Escape key and return focus to the hamburger button
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      toggleMenu(true);
      hamburgerBtn.focus();
    }
  });


  /* ---- 4. ACTIVE NAV LINK (IntersectionObserver) ------------------------ */

  var sections = document.querySelectorAll('section[id]');
  var navItems = document.querySelectorAll('.nav__link');

  // rootMargin: offset top by nav height so the active state fires when
  // the section is genuinely visible below the sticky nav bar, not before.
  var navHeight = getComputedStyle(document.documentElement)
                    .getPropertyValue('--nav-height').trim() || '72px';

  var observerOptions = {
    rootMargin: '-' + navHeight + ' 0px -55% 0px',
    threshold: 0
  };

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navItems.forEach(function (link) {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });


  /* ---- 5. COPYRIGHT YEAR ------------------------------------------------ */

  var yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

})();
