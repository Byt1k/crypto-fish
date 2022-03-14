$('.roadmap__carousel').owlCarousel({
  // loop:true,
  margin: 42,
  dots: true,
  responsive: {
    0: {
      items: 2,
      dots: false
    },
    768: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
  // autoWidth: true
})



// Заглушка куков

let cookiesOk = document.getElementById('cookies-ok');
let cookiesDecline = document.getElementById('cookies-decline');
let cookiesBlock = document.querySelector('.cookies');

let hideCookiesBlock = () => {
  cookiesBlock.classList.remove('active');
}

if (cookiesOk) {
  cookiesOk.addEventListener('click', hideCookiesBlock);
}
if (cookiesDecline) {
  cookiesDecline.addEventListener('click', hideCookiesBlock);
}
//


// Мобильное меню

let mobileMenuOpen = document.querySelector('.head-string__burger');
let mobileMenuClose = document.querySelector('.mobile-menu__close');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuList = document.querySelector('.mobile-menu__list');

mobileMenuOpen.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

[].forEach.call(mobileMenuList.children, function (item) {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  })
});
