document.querySelector("#header .arrow-down").addEventListener('click', function() {
  window.scrollTo({
    top: document.getElementById('projects').offsetTop,
    behavior: 'smooth'
  });
});
const arrowDown = document.querySelector('#header .arrow-down');

arrowDown.addEventListener('click', () => {
  const nextSection = document.querySelector('#projects');
  nextSection.scrollIntoView({ behavior: 'smooth' });
});

const backToTopButton = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  const sidebarLinks = document.querySelectorAll("#sidebar ul li a");
  const sections = document.querySelectorAll("section");

  // Add click event listener to sidebar links
  sidebarLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetSection = document.querySelector(link.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Detect section in viewport and highlight corresponding sidebar link
  window.addEventListener("scroll", function() {
    sections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      const link = document.querySelector('a[href="#' + section.id + '"]');

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

// Get the button
let mybutton = document.getElementById("back-to-top");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// JavaScript code

document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 70, // Adjust this value as needed
      behavior: 'smooth'
    });
  });
});

