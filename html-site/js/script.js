/* ══════════════════════════════════════════════════════════════
   RENTAL BOAT CALA MANGIAVOLPE - JavaScript
   Menu mobile, accordion FAQ, navbar scroll
   ══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
  
  // ══════════ NAVBAR SCROLL EFFECT ══════════
  const navbar = document.querySelector('.navbar');
  const isHomePage = document.body.classList.contains('page-home');
  
  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      if (isHomePage) {
        navbar.classList.add('transparent');
      }
    }
  }
  
  // Initialize navbar state
  if (isHomePage && window.scrollY <= 60) {
    navbar.classList.add('transparent');
  } else {
    navbar.classList.add('scrolled');
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // ══════════ MOBILE MENU ══════════
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
  }
  
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }
  
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // ══════════ FAQ ACCORDION ══════════
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', function() {
        // Close other items
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item && otherItem.classList.contains('open')) {
            otherItem.classList.remove('open');
          }
        });
        
        // Toggle current item
        item.classList.toggle('open');
      });
    }
  });
  
  // ══════════ SMOOTH SCROLL FOR ANCHOR LINKS ══════════
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          const navHeight = navbar.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ══════════ ACTIVE NAV LINK ══════════
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // ══════════ LANGUAGE SELECTOR (placeholder) ══════════
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Remove active from all
      langButtons.forEach(function(b) {
        b.classList.remove('active');
      });
      // Add active to clicked
      this.classList.add('active');
      
      // Here you would implement actual language switching
      // For now it's just visual
      console.log('Language selected:', this.textContent);
    });
  });
  
  // ══════════ INTERSECTION OBSERVER FOR ANIMATIONS ══════════
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const animateOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        animateOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(function(el) {
    el.style.opacity = '0';
    animateOnScroll.observe(el);
  });
  
});
