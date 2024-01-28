import 'fslightbox'

const initStickyHeader = e => {
  const header = document.querySelector('.header');
  const scrollY = window.scrollY;

  header.classList.toggle('sticky', scrollY > 0);
  document.body.classList.toggle('scrolled', scrollY > 0);
}

const initMobileMenu = () => {
  const header = document.querySelector('.header');
  const burgerButton = document.querySelector('.burger');

  burgerButton.addEventListener('click', function(e) {
    header.classList.toggle('menu-open');
    document.body.classList.toggle('overflow-hidden');
  })
}

const closeMobileMenu = () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    const header = document.querySelector('.header');

    header.classList.remove('menu-open');
    document.body.classList.remove('overflow-hidden');
  }
}

const hidePreloader = () => {
  const preloaderWrapper = document.querySelector('.preloader-wrapper');

  preloaderWrapper.classList.add('hide');
}

const scrollToSection = () => {
  const menuLinks = document.querySelectorAll('.nav__link');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (!e.target.getAttribute('href').includes('#')) return;

      e.preventDefault();

      const header = document.querySelector('.header');
      const anchor = e.target.getAttribute('href').slice(1);
      const targetSection = document.querySelector(`#${anchor}`);

      targetSection.scrollIntoView({
        behavior: 'smooth'
      });

      header.classList.remove('menu-open');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

const resizeHandler = () => {
  closeMobileMenu();
}

const domContentLoadedHandler = () => {
  initMobileMenu();
  scrollToSection();

  window.addEventListener('scroll', initStickyHeader);
}

const loadHandler = () => {
  hidePreloader();
}

window.addEventListener('resize', resizeHandler);
window.addEventListener('DOMContentLoaded', domContentLoadedHandler);
window.addEventListener('load', loadHandler);