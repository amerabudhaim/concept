"use strict";

const themes = ["turquoise", "#f9a828", "rgb(10, 65, 148)"];
//alert('hello');
let query = new URLSearchParams(window.location.search);
let themeLink = document.getElementById("theme");
let themePicker = document.getElementById("themePicker");

let theme = query.get("theme");

if (theme) {
  theme = parseInt(theme);
  //test if theme exist
  if (theme - 1 < themes.length) {  //for  user we are starting at 1 not 0
    themeLink.href = "css/theme-" + theme + ".css";

    for (let i = 0; i < themes.length; i++) {
      let div = document.createElement("div");
      div.style.backgroundColor = themes[i];
      div.id =  (i + 1);
      themePicker.appendChild(div);
    }

    themePicker.addEventListener('click',handleClick);

  } else {
    themePicker.style.display = "none";
  }

}

function handleClick(event) {
  const regex = /theme=\d/;
  window.location = window.location.href.replace(regex, "theme="+event.target.id);
  
}
