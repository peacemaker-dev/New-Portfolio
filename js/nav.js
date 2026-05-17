document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("site-nav");

  menuToggle.addEventListener("click", () => {
      siteNav.classList.toggle("active");
  });

  document.getElementById('current-year').textContent = new Date().getFullYear();

});