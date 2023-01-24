let pcNav = document.querySelector("nav");
let mobileNavIcon = document.getElementById("mobile-nav-icon");
let navDescription = Array.from(
  document.getElementsByClassName("nav-description")
);

handleNavbar();

window.addEventListener("resize", () => {
  handleNavbar();
});

pcNav.addEventListener("mouseenter", () => {
  pcNav.classList.add("active");
  navDescription.forEach((item) => {
    item.classList.add("active");
  });
});

pcNav.addEventListener("mouseleave", () => {
  pcNav.classList.remove("active");
  navDescription.forEach((item) => {
    item.classList.remove("active");
  });
});

mobileNavIcon.addEventListener("click", () => {
  pcNav.classList.toggle("show");
});

function handleNavbar() {
  if (window.innerWidth < 960) {
    pcNav.classList.remove("pc-navigation");
    pcNav.classList.add("mobile-nav");

    mobileNavIcon.classList.remove("disabled");
  } else {
    pcNav.classList.remove("mobile-nav");
    pcNav.classList.add("pc-navigation");

    mobileNavIcon.classList.add("disabled");
  }
}
