var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Web Developer", "Coder", "Holder ..."],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);
