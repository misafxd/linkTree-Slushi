import { links } from "./utils/links.js";
import "./components/link.js";

const container = document.querySelector(".content_socialMedia");

links.forEach(({ titulo, link, src }) => {
  const el = document.createElement("social-link");
  el.setAttribute("titulo", titulo);
  el.setAttribute("link", link);
  el.setAttribute("src", src);
  container.appendChild(el);
});
