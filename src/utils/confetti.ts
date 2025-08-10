export function burst(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    for (let i = 0; i < 18; i++) {
      const s = document.createElement("span");
      s.className = "sf-confetti";
      s.style.left = rect.left + rect.width / 2 + "px";
      s.style.top = rect.top + rect.height / 2 + "px";
      s.style.setProperty("--tx", (Math.random() - 0.5) * 240 + "px");
      s.style.setProperty("--ty", (Math.random() - 0.5) * 160 + "px");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 700);
    }
  }
  