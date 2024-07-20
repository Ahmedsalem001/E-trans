"use strict";

let ovarlay = document.getElementById("overlay");
let hideOverlay = setTimeout(() => {
  ovarlay.style.opacity = 0;
  ovarlay.style.display = "none";
  console.log("ovarlay");
}, 3000)



// set active

// let sidebarlinks = document.querySelectorAll('div.sidebarlinks > ul > li > a')
// sidebarlinks.forEach((item) => {
//   item.addEventListener(`click`, () => {
//     document.querySelector("div.sidebarlinks > ul > li > a.active").classList.remove("active");
//     item.classList.add("active");
//   });
// });


// sidebar toggle button
const sidebarbtn = document.getElementById('sidebarbtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
sidebarbtn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
  console.log("p")
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');

});

// add class active -----------
let navlinks = document.querySelectorAll(".header .list li a");

navlinks.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".header .list li a.active").classList.remove("active");
    item.classList.add("active");
  });
});

// carousel ---------

$(`document`).ready(() => {
  // partners
  $(".our-partners .owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    nav: true,
    navText: [
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  //  customer
  $(".customer .owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    rtl: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    dots: true,
    nav: true,
    navText: [
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
});





