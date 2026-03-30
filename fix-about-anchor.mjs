import { readFileSync, writeFileSync } from "node:fs";

let html = readFileSync("index.html", "utf8");

const aboutAnchor = '<div id="about-us" class="anchor-helper" aria-hidden="true"></div>';
const aboutSection = `${aboutAnchor}<section class="about"><div class="about__inner"><p class="about__eyebrow">About Us</p><h2 class="about__title">Committed to learner success and real career outcomes</h2><div class="about__body"><div class="about__copy"><p>Imarticus Learning describes itself as an industry-focused education company that delivers expert-led training, technology-enabled learning, and career support across finance, data science, analytics, technology, management, and related domains.</p><p>Its official About page highlights job-assured postgraduate and certification courses, global accounting and finance programs, senior leadership programs, and degrees in emerging industries. Google Play&apos;s current app listing also describes Imarticus as a technology-driven institute focused on transforming careers across financial services, analytics, AI, business analysis, and core technology.</p><p>Based on those current sources, this section presents Imarticus as a long-running career-education brand with a strong employer network, a broad learner base, and a focus on practical outcomes rather than classroom-only theory.</p></div><div class="about__stats"><div class="about__stat"><strong>12+</strong><span>Years legacy on the official Imarticus About page.</span></div><div class="about__stat"><strong>1,25,000+</strong><span>Career transitions highlighted on the official site.</span></div><div class="about__stat"><strong>3500+</strong><span>Hiring partners listed on the official About page.</span></div><div class="about__stat"><strong>600+</strong><span>Employees strong, as currently shown by Imarticus.</span></div></div></div></section>`;

html = html.replace(
  /<div id="about-us" class="anchor-helper" aria-hidden="true"><\/div><section class="about">[\s\S]*?<\/section>/g,
  "",
);

html = html.replace("</main>", `${aboutSection}</main>`);

writeFileSync("index.html", html);
