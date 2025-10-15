document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("dark-toggle");
  const icon = darkToggle?.querySelector("i");

  // Load theme từ localStorage hoặc OS preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (icon) icon.className = "fas fa-sun";
  } else if (savedTheme === "light") {
    document.body.classList.remove("dark-mode");
    if (icon) icon.className = "fas fa-moon";
  } else {
    // Nếu chưa set thì dùng OS preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark-mode");
      if (icon) icon.className = "fas fa-sun";
      localStorage.setItem("theme", "dark");
    } else {
      if (icon) icon.className = "fas fa-moon";
    }
  }

  // Khi click toggle
  darkToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      if (icon) icon.className = "fas fa-sun";
    } else {
      localStorage.setItem("theme", "light");
      if (icon) icon.className = "fas fa-moon";
    }
  });
});
