//theme  dark-mode light-mode----------------

// const elThemeBtn = document.querySelector(".theme-btn")
// const elBody = document.querySelector(".site-body")

// let theme = localStorage.getItem("theme") || ""
// if (theme === "body--dark") {
//   elBody.classList.toggle("body--dark")
// }

// elThemeBtn.addEventListener("click", () => {
//   elBody.classList.toggle("body--dark")
//   if (theme === "body--dark") {
//     localStorage.setItem("theme", "")
//   } else {
//     localStorage.setItem("theme", "body--dark")
//   }
// })


// menu header----------------------------------

// const elMenuBtn = document.querySelector(".menu-btn")
// const elHeader = document.querySelector(".header")
// const elBtnClose = document.querySelector(".btn-close")

// elMenuBtn.addEventListener("click", () => {
//   elHeader.classList.add("header--active")
// })
// elBtnClose.addEventListener("click", () => {
//   elHeader.classList.remove("header--active")
// })


// modal login----------------------------------

// const elLoginBtn = document.querySelector(".login-btn")
// const elLogin = document.querySelector(".modal")
// const elCloseBtn = document.querySelector(".close-btn")

// elLoginBtn.addEventListener("click", () => {
//   elLogin.classList.add("modal--active")
// })
// elCloseBtn.addEventListener("click", () => {
//   elLogin.classList.remove("modal--active")
// })


// Tablink group---------------------------------

// const elTabItems = document.querySelectorAll(".choose__filter-item");
// const elTabLinks = document.querySelectorAll(".choose__filter-link");
// const elPanelItems = document.querySelectorAll(".panel__list");

// elTabLinks.forEach(function(link){
//   link.addEventListener("click" , function(evt){
//     evt.preventDefault();

//     elTabItems.forEach(function(item){
//       item.classList.remove("choose__filter-item--active");
//     })

//     link.parentElement.classList.add("choose__filter-item--active");

//     elPanelItems.forEach(function(panel){
//       panel.classList.remove("panel__list--active");
//     })

//     document.querySelector(link.getAttribute("href")).classList.add("panel__list--active");
//   })

// })


// hero carousel --------------------------------

// $('.hero-owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   responsiveClass: true,
//   autoplay:true,
// autoplayTimeout:4000,
//   autoplayHoverPause: true,
//   loop:true,
//   responsive:{
//       0:{
//           items:1,
//           nav:true
//       },
//       600:{
//           items:1,
//           nav:false
//       },
//       1000:{
//           items:1,
//           nav:true,
         
//       }
//   }
// })


// all carousel------------------------------

// $('.community-owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   responsiveClass: true,
//   // autoplay:true,
// // autoplayTimeout:4000,
//   // autoplayHoverPause: true,
//   loop:true,
//   responsive:{
//       0:{
//           items:1,
//           nav:true
//       },
//       600:{
//           items:1.5,
//           nav:false
//       },
//       1000:{
//           items:1.5,
//           nav:true,
         
//       }
//   }
// })

