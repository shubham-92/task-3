import { readFileSync, writeFileSync } from "node:fs";

const source = readFileSync("source.html", "utf8");

const replacements = [
  [/="\/_next\//g, '="https://imarticus.org/_next/'],
  [/'\/_next\//g, "'https://imarticus.org/_next/"],
  [/:\s*"\/_next\//g, ': "https://imarticus.org/_next/'],
  [/\("\/_next\//g, '("https://imarticus.org/_next/'],
  [/="\/school-of-finance-and-business\//g, '="https://imarticus.org/school-of-finance-and-business/'],
  [/'\/school-of-finance-and-business\//g, "'https://imarticus.org/school-of-finance-and-business/"],
];

let html = source;

for (const [pattern, replacement] of replacements) {
  html = html.replace(pattern, replacement);
}

html = html.replace(
  'lib: "/_next/static/~partytown/"',
  'lib: "https://imarticus.org/_next/static/~partytown/"',
);

writeFileSync("index.html", html);
