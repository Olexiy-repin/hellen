'use strict';

// BURGER
(() => {
  const burger = document.querySelector('.menu-rows');
  const headerLogo = document.querySelector('.logo-link');
  const burgerBtn = document.querySelector('.menu-link');
  const closeBtn = document.querySelector('.header__modal-close-btn');
  const headerModal = document.querySelector('.header__modal-menu');

  const openModal = e => {
    headerModal.classList.add('header__modal-menu_active');
    burgerBtn.style.display = 'none';
    headerLogo.style.display = 'none';
  };

  const closeModal = () => {
    burgerBtn.style.display = 'block';
    headerLogo.style.display = 'block';
    headerModal.classList.remove('header__modal-menu_active');
  };

  burger.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
})();

// CERTIFICATE
(() => {
  const certificateBtn = document.querySelector('.teacher-achievement__link');
  const certificateModal = document.querySelector('.certificate-modal');

  const openCertificate = e => {
    certificateModal.classList.add('certificate-modal_active');
  };

  const closeCertificate = e => {
    const target = e.target;

    if (!target.classList.contains('teacher-achievement__link')) {
      certificateModal.classList.remove('certificate-modal_active');
    }
  };

  certificateBtn.addEventListener('click', openCertificate);
  document.addEventListener('click', closeCertificate);
})();

// REVIEWS SLIDER
(() => {
  $('.slides__list').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['', ''],
    pagination: true,
    items: 1,
  });

  let btnMobile = [...document.querySelectorAll('.slides__button_mobile')];
  let btnDesctop = [...document.querySelectorAll('.slides__button_desctop')];
  let owlDot = [...document.querySelectorAll('.owl-dot')];

  const moreInfo = e => {
    let target = e.target;
    let moreText = target.previousSibling;

    if (moreText.classList.contains('slides__about_active')) {
      target.innerHTML = 'Читать дальше';
    } else {
      target.innerHTML = 'Cвернуть';
    }

    moreText.classList.toggle('slides__about_active');
  };

  const closeMoreInfo = () => {
    let allText = document.querySelectorAll('.slides__about');
    let allTextTablet = document.querySelectorAll('.slides__about-tablet');

    btnMobile.forEach(e => {
      e.innerHTML = 'Читать дальше';
    });

    btnDesctop.forEach(e => {
      e.innerHTML = 'Читать дальше';
    });

    allText.forEach(e => {
      e.classList.remove('slides__about_active');
    });

    allTextTablet.forEach(e => {
      e.classList.remove('slides__about_active');
    });
  };

  btnMobile.forEach(e => {
    e.addEventListener('click', moreInfo);
  });

  btnDesctop.forEach(e => {
    e.addEventListener('click', moreInfo);
  });

  owlDot.forEach(e => {
    e.addEventListener('click', closeMoreInfo);
  });
})();
