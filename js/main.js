// Section Changer
let links = document.querySelectorAll(".link"),
  portfolioSections = document.querySelectorAll(".portfolio-section");
links.forEach(function (link) {
  link.addEventListener("click", () => {
    document
      .querySelector(".leftPart ul li.checked")
      .classList.remove("checked");
    link.classList.add("checked");
    document
      .querySelector(".rightPart .rightPart-inner .portfolio-section.active")
      .classList.remove("active");
    let target = link.dataset.filter;
    portfolioSections.forEach(function (portfolioSection) {
      if (portfolioSection.classList.contains(target)) {
        portfolioSection.classList.add("active");
      }
    });
  });
});

// Mobile Navbar Section Changer
let linksIcons = document.querySelectorAll(".mobile-navbar ul li");
linksIcons.forEach(function (linkIcon) {
  linkIcon.addEventListener("click", () => {
    document
      .querySelector(".rightPart .rightPart-inner .portfolio-section.active")
      .classList.remove("active");
    let target = linkIcon.dataset.filter;
    portfolioSections.forEach(function (portfolioSection) {
      if (portfolioSection.classList.contains(target)) {
        portfolioSection.classList.add("active");
      }
    });
  });
});

// Switch between themes
let toggleIcons = document.querySelectorAll(".toggle");
toggleIcons.forEach(function (toggleIcon) {
  toggleIcon.addEventListener("click", () => {
    let body = document.querySelector("body"),
      themeText = document.querySelector(".toggle p span");
    icons = document.querySelectorAll(".toggle i");
    body.classList.toggle("dark-mode");

    icons.forEach(function (icon) {
      if (body.classList.contains("dark-mode")) {
        icon.className = "fas fa-sun";
        themeText.innerText = "Light Mode";
      } else {
        icon.className = "fas fa-moon";
        themeText.innerText = "Dark Mode";
      }
    });
  });
});

// cursor
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 400);
});

window.onload = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".portfolio-container").style.display = "block";
  }, 6000);
};

document.querySelectorAll("li").forEach(function (li) {
  li.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
  });
  li.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
  });
});

document.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
  });
  a.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
  });
});
document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
  });
  img.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
  });
});

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
