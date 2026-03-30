import { readFileSync, writeFileSync } from "node:fs";

let html = readFileSync("index.html", "utf8");

html = html.replace(
  /\.clone-topbar\s*\{[\s\S]*?\}/,
  `.clone-topbar {
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  z-index: 20;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(14, 57, 58, 0.14);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}`
);

html = html.replace(
  /\.clone-topbar__inner\s*\{[\s\S]*?\}/,
  `.clone-topbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}`
);

html = html.replace(
  /#home,\s*#form-section,\s*#about-us\s*\{[\s\S]*?\}/,
  `#home,
#form-section,
#about-us {
  scroll-margin-top: 24px;
}`
);

html = html.replace(
  '<div class="ugPageOlder_headerChild__nrXQA __className_2b7d24" style="padding-top:88px">',
  '<div class="ugPageOlder_headerChild__nrXQA __className_2b7d24">'
);

html = html.replace(/<script[\s\S]*?<\/script>/g, "");

html = html.replace(
  "</body>",
  `<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".clone-hero-form form");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const submitButton = form.querySelector(".clone-hero-form__submit");
      if (!submitButton) return;
      const originalText = submitButton.textContent;
      submitButton.textContent = "SUBMITTED";
      submitButton.disabled = true;
      setTimeout(function () {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1800);
    });
  });
  </script></body>`
);

writeFileSync("index.html", html);
