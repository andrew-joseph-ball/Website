document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navMenu");
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        bsCollapse.hide(); // this triggers Bootstrap’s collapse close animation
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});
