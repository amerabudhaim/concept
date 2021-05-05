"use strict";

//alert('hello');
let query = new URLSearchParams(window.location.search);
let themeLink = document.getElementById("theme");

let theme = query.get("theme");
if (theme) {
  themeLink.href = "css/theme-" + +".css";
}
