const tabRoots = document.querySelectorAll("[data-tabs]");

tabRoots.forEach((root) => {
  const buttons = root.querySelectorAll("[data-tab-target]");
  const panels = root.querySelectorAll("[data-tab-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab-target");

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.getAttribute("data-tab-panel") === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
});

(function () {
  const terminal = document.querySelector('.hero-terminal');
  if (!terminal) return;

  const slides = Array.from(terminal.querySelectorAll('.terminal-slide'));
  const dots = Array.from(terminal.querySelectorAll('.terminal-dot'));

  if (slides.length === 0 || dots.length === 0) return;

  let activeIndex = 0;
  let intervalId = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });

    activeIndex = index;
  }

  function nextSlide() {
    const nextIndex = (activeIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startRotation() {
    stopRotation();
    intervalId = window.setInterval(nextSlide, 4500);
  }

  function stopRotation() {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startRotation();
    });
  });

  terminal.addEventListener('mouseenter', stopRotation);
  terminal.addEventListener('mouseleave', startRotation);

  showSlide(0);
  startRotation();
})();