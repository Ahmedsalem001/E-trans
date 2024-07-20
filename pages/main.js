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
