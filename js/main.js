document.addEventListener("DOMContentLoaded", () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  document.querySelectorAll("nav li").forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent.trim().toLowerCase();
      if (text === "work") scrollToSection("#projects");
      if (text === "services") scrollToSection("#expertise");
      if (text === "my story") scrollToSection("#about-preview");
      if (text === "work with me") scrollToSection("#cta");
    });
  });
});
