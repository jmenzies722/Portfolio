function initTypingAnimation() {
    const typedElements = document.getElementsByClassName("animated-text");
    Array.from(typedElements).forEach(function(element) {
      const typed = new Typed(element, {
        strings: [element.innerText],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: "|",
        smartBackspace: false
      });
    });
  }
  
  // Check if the Typed.js library is loaded
  if (typeof Typed !== "undefined") {
    // If loaded, initialize the typing animation
    initTypingAnimation();
  } else {
    // If not loaded, wait for the library to load
    document.addEventListener("DOMContentLoaded", initTypingAnimation);
  }
  