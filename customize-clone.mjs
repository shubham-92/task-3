import { readFileSync, writeFileSync } from "node:fs";

let html = readFileSync("index.html", "utf8");

const customStyles = `
<style>
html {
  scroll-behavior: smooth;
}
body {
  background: #ffffff;
}
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(14, 57, 58, 0.14);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}
.topbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.topbar__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #0e393a;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
}
.topbar__mark {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0e393a 0%, #156b5a 100%);
  color: #fff;
  font-size: 15px;
}
.topbar__nav {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.topbar__nav a {
  color: #143b3c;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 999px;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.topbar__nav a:hover {
  background: rgba(14, 57, 58, 0.08);
}
.topbar__nav .is-cta {
  background: #0d6b57;
  color: #fff;
}
.topbar__nav .is-cta:hover {
  background: #0b5b4a;
  color: #fff;
}
#home,
#form-section,
#about-us {
  scroll-margin-top: 110px;
}
.hero-form {
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(10, 36, 36, 0.12);
  border-radius: 26px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.10);
  padding: 28px;
}
.hero-form__heading {
  color: #111;
  font-size: 28px;
  line-height: 1.15;
  font-weight: 700;
  margin: 0 0 12px;
}
.hero-form__heading span {
  color: #0e5b52;
  font-style: italic;
  display: block;
}
.hero-form__lead {
  color: #303030;
  font-size: 18px;
  line-height: 1.4;
  margin: 0 0 22px;
}
.hero-form__login {
  color: #202020;
  font-size: 16px;
  margin: 0 0 18px;
}
.hero-form__login a,
.hero-form__terms a {
  color: #0e5b52;
  text-decoration: underline;
}
.hero-form__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.hero-form__field,
.hero-form__split,
.hero-form__select {
  width: 100%;
  min-height: 52px;
  border: 1.5px solid #273235;
  border-radius: 8px;
  background: #fff;
  color: #1f2933;
  font-size: 16px;
  padding: 0 16px;
}
.hero-form__field::placeholder {
  color: #31414a;
}
.hero-form__field--full,
.hero-form__select--full {
  grid-column: 1 / -1;
}
.hero-form__phone {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 0;
}
.hero-form__phone select {
  border-right: 0;
  border-radius: 8px 0 0 8px;
}
.hero-form__phone input {
  border-radius: 0 8px 8px 0;
}
.hero-form__actions {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.hero-form__submit {
  border: 0;
  border-radius: 999px;
  background: #0d6b57;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
  width: min(100%, 420px);
  min-height: 46px;
  cursor: pointer;
}
.hero-form__terms {
  color: #222;
  text-align: center;
  font-size: 15px;
  margin: 22px 0 0;
}
.about {
  background: linear-gradient(180deg, #f7fbf7 0%, #eef7ee 100%);
  padding: 72px 24px;
}
.about__inner {
  max-width: 1240px;
  margin: 0 auto;
}
.about__eyebrow {
  color: #0d6b57;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 12px;
}
.about__title {
  color: #0e393a;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.05;
  margin: 0 0 18px;
}
.about__body {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.9fr);
  gap: 28px;
  align-items: start;
}
.about__copy {
  background: #fff;
  border-radius: 28px;
  padding: 30px;
  box-shadow: 0 18px 50px rgba(14, 57, 58, 0.08);
}
.about__copy p {
  margin: 0 0 16px;
  color: #2b2b2b;
  font-size: 18px;
  line-height: 1.65;
}
.about__stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.about__stat {
  background: #0e393a;
  color: #fff;
  border-radius: 24px;
  padding: 24px 22px;
  min-height: 140px;
}
.about__stat strong {
  display: block;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 10px;
}
.about__stat span {
  display: block;
  color: rgba(255, 255, 255, 0.84);
  font-size: 15px;
  line-height: 1.45;
}
.anchor-helper {
  display: block;
  width: 100%;
  height: 1px;
}
@media (max-width: 991px) {
  .topbar__inner {
    padding: 12px 16px;
  }
  .topbar__nav {
    justify-content: flex-end;
    gap: 8px;
  }
  .topbar__nav a {
    padding: 8px 12px;
    font-size: 14px;
  }
  .hero-form {
    padding: 24px 18px;
    border-radius: 24px;
  }
  .about {
    padding: 56px 16px;
  }
  .about__body {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 767px) {
  .topbar__inner {
    flex-direction: column;
    align-items: stretch;
  }
  .topbar__brand {
    justify-content: center;
  }
  .topbar__nav {
    justify-content: center;
  }
  .hero-form__grid {
    grid-template-columns: 1fr;
  }
  .hero-form__phone {
    grid-template-columns: 86px 1fr;
  }
  .about__copy {
    padding: 24px 18px;
  }
  .about__stats {
    grid-template-columns: 1fr;
  }
}
</style>`;

const headerMarkup = `
<div class="topbar">
  <div class="topbar__inner">
    <a class="topbar__brand" href="#home">
      <span class="topbar__mark">IS</span>
      <span>ISFB Clone</span>
    </a>
    <nav class="topbar__nav" aria-label="Primary">
      <a href="#home">Home</a>
      <a href="#about-us">About Us</a>
      <a href="#form-section">Login</a>
      <a class="is-cta" href="#form-section">Register</a>
    </nav>
  </div>
</div>`;

const formMarkup = `
<div id="form-section" class="anchor-helper" aria-hidden="true"></div>
<div class="hero-form">
  <h3 class="hero-form__heading">Start Your Journey in <span>Finance &amp; Business</span></h3>
  <p class="hero-form__lead">Fill in your details below and our admissions team will guide you through the next steps.</p>
  <p class="hero-form__login">Already Registered? <a href="#form-section">Login here</a></p>
  <form class="hero-form__grid">
    <input class="hero-form__field" type="text" name="firstName" placeholder="Enter First Name *" />
    <input class="hero-form__field" type="text" name="lastName" placeholder="Enter Last Name *" />
    <input class="hero-form__field hero-form__field--full" type="email" name="email" placeholder="Enter Email Address *" />
    <div class="hero-form__phone">
      <select class="hero-form__split" name="countryCode" aria-label="Country code">
        <option selected>+91</option>
      </select>
      <input class="hero-form__field" type="tel" name="mobile" placeholder="Enter Mobile Number *" />
    </div>
    <input class="hero-form__field hero-form__field--full" type="text" name="otp" placeholder="Enter OTP" />
    <select class="hero-form__select" name="state" aria-label="Select State">
      <option selected>Select State</option>
      <option>Maharashtra</option>
      <option>Karnataka</option>
      <option>Delhi</option>
      <option>Gujarat</option>
    </select>
    <select class="hero-form__select" name="city" aria-label="Select City">
      <option selected>Select City</option>
      <option>Mumbai</option>
      <option>Pune</option>
      <option>Bengaluru</option>
      <option>Delhi</option>
    </select>
    <select class="hero-form__select hero-form__select--full" name="academicStatus" aria-label="Select Academic Status">
      <option selected>Select Academic Status *</option>
      <option>Class 12 Appearing</option>
      <option>Class 12 Passed</option>
      <option>Undergraduate Student</option>
      <option>Graduate</option>
    </select>
    <div class="hero-form__actions" style="grid-column:1 / -1;">
      <button class="hero-form__submit" type="submit">SUBMIT</button>
    </div>
  </form>
  <p class="hero-form__terms">By submitting the form I have read and agree to the <a href="https://imarticus.org/terms-and-conditions/" target="_blank" rel="noreferrer">Terms</a></p>
</div>`;

const aboutMarkup = `
<section id="about-us" class="about">
  <div class="about__inner">
    <p class="about__eyebrow">About Us</p>
    <h2 class="about__title">Committed to learner success and real career outcomes</h2>
    <div class="about__body">
      <div class="about__copy">
        <p>Imarticus Learning describes itself as an industry-focused education company that delivers expert-led training, technology-enabled learning, and career support across finance, data science, analytics, technology, management, and related domains.</p>
        <p>Its official About page highlights job-assured postgraduate and certification courses, global accounting and finance programs, senior leadership programs, and degrees in emerging industries. Google Play’s current app listing also describes Imarticus as a technology-driven institute focused on transforming careers across financial services, analytics, AI, business analysis, and core technology.</p>
        <p>Based on those current sources, this section presents Imarticus as a long-running career-education brand with a strong employer network, a broad learner base, and a focus on practical outcomes rather than classroom-only theory.</p>
      </div>
      <div class="about__stats">
        <div class="about__stat">
          <strong>12+</strong>
          <span>Years legacy on the official Imarticus About page.</span>
        </div>
        <div class="about__stat">
          <strong>1,25,000+</strong>
          <span>Career transitions highlighted on the official site.</span>
        </div>
        <div class="about__stat">
          <strong>3500+</strong>
          <span>Hiring partners listed on the official About page.</span>
        </div>
        <div class="about__stat">
          <strong>600+</strong>
          <span>Employees strong, as currently shown by Imarticus.</span>
        </div>
      </div>
    </div>
  </div>
</section>`;

html = html.replace("</head>", `${customStyles}</head>`);
html = html.replace("<body>", `<body>${headerMarkup}`);
html = html.replace('<main class="__className_58d470"', '<main id="home" class="__className_58d470"');
html = html.replace(
  '<p class="ugPageOlder_text__toMlZ">Already Registered?<!-- --> <a style="text-decoration:underline" target="_blank" href="https://apply-isfb.imarticus.org/">Login here</a></p>',
  '<p class="ugPageOlder_text__toMlZ">Already Registered? <a style="text-decoration:underline" href="#form-section">Login here</a></p>',
);
html = html.replace(
  '<div style="width:100%" class="npf_wgts" data-height="390px" data-w="3e281b249e09c6859f67a1e33a571064"></div>',
  formMarkup,
);
html = html.replace(
  '<div class="ugPageOlder_headerChild__nrXQA __className_2b7d24">',
  '<div class="ugPageOlder_headerChild__nrXQA __className_2b7d24" style="padding-top:88px">',
);
html = html.replace("</main></div></div></body>", `${aboutMarkup}</main></div></div></body>`);
html = html.replace(
  "</body>",
  `<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".hero-form form");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const submitButton = form.querySelector(".hero-form__submit");
      if (submitButton) {
        const originalText = submitButton.textContent;
        submitButton.textContent = "SUBMITTED";
        submitButton.disabled = true;
        setTimeout(function () {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 1800);
      }
    });
  });
  </script></body>`,
);

writeFileSync("index.html", html);
