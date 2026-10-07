document.addEventListener('DOMContentLoaded', () => {

  // ===================== NAV SCROLL EFFECT =====================
  const nav = document.querySelector('.glass-nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ===================== HAMBURGER MENU =====================
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // ===================== RESUME MODAL =====================
  const modal           = document.getElementById('resume-modal');
  const openModalBtns   = [
    document.getElementById('open-resume-modal'),
    document.getElementById('nav-resume-btn'),
    document.getElementById('footer-resume-link'),
  ];
  const closeModalBtn   = document.getElementById('modal-close');

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus trap: focus first format button
    setTimeout(() => {
      const firstBtn = modal.querySelector('.format-btn');
      if (firstBtn) firstBtn.focus();
    }, 100);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeModalBtn.addEventListener('click', closeModal);

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // ===================== SCROLL REVEAL ANIMATION =====================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ===================== BLOB PARALLAX =====================
  const blobs = document.querySelectorAll('.blob');

  // Only run on devices that can hover (not touch)
  if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 22;
        const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
        const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
        blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });
  }

});
