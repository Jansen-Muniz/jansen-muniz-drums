const reveals = document.querySelectorAll(".reveal, .reveal-quote")
const backToTop = document.querySelector(".back-to-top")

function revealOnScroll() {
  const windowHeight = window.innerHeight
  const revealPoint = 100

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active")
    }
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show")
  } else {
    backToTop.classList.remove("show")
  }
});

window.addEventListener("scroll", revealOnScroll)
window.addEventListener("load", revealOnScroll)