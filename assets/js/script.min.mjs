//import { createToken } from "./jwtHandler";
const { createToken } = require("./jwtHandler.mjs");

if (window.innerWidth < 768) {
    const elements = Array.from(document.querySelectorAll("[data-bss-disabled-mobile]"));
    elements.forEach((element) => {
      element.classList.remove("animated");
      element.removeAttribute("data-bss-hover-animate");
      element.removeAttribute("data-aos");
      element.removeAttribute("data-bss-parallax-bg");
      element.removeAttribute("data-bss-scroll-zoom");
    });
}
  
document.addEventListener("DOMContentLoaded", () => {
const hoverAnimateElements = Array.from(document.querySelectorAll("[data-bss-hover-animate]"));
hoverAnimateElements.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
    const target = event.target;
    target.classList.add("animated", target.dataset.bssHoverAnimate);
    });

    element.addEventListener("mouseleave", (event) => {
    const target = event.target;
    target.classList.remove("animated", target.dataset.bssHoverAnimate);
    });
});
//Authenticate the User for Zendesk Widget Purposes
const token = createToken(); // Call the createToken function from jwtHandler.js
console.log(token);
// Login User ()
zE("messenger", "loginUser", function (callback) {
    callback(token);
    console.log("authenticating user")
});
});