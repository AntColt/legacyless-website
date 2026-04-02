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
