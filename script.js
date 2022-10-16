"use strict";

import { animate, scroll, ScrollOffset, stagger, inView } from "https://cdn.skypack.dev/motion";

////////web ANimations API animation on hover//////

const demoButton = document.querySelector(".dark_button");
const demoText = document.querySelector(".btn_txt");

const runProperty = {
  duration: 800,
  iteration: 1,
  fill: "forwards",
  easing: "ease-in-out",
};

const runKeyframe = [
  {
    transform: "translateX(0)",
  },
  {
    transform: "translateX(80%)",
  },
];

const runKeyframe2 = [
  {
    transform: "translateX(-81%)",
  },
  {
    transform: "translateX(0)",
  },
];

demoButton.addEventListener("mouseover", buttonHovered);

function buttonHovered() {
  const running = demoText.animate(runKeyframe, runProperty);
  running.addEventListener("finish", (event) => {
    console.log("runningfinished");
    const running2 = demoText.animate(runKeyframe2, runProperty);
  });
}

////////Dark Mode //////

let theme = localStorage.getItem("data-theme");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};

const checkbox = document.querySelector("#switch");
// Apply retrived them to the website
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

///Motion One animations////

//animate("body", { opacity: [0, 1] }, { duration: 5 });

// scroll(animate(".nav-wrapper .toggle-container, nav ul, nav button, nav .logo", { scaleY: [0.5, 1], y: ["0", "0"] }));
// scroll(animate("header", { y: ["50vh", "0"] }));

const secondItem = document.querySelector("main .here");

const scrollOptions = {
  target: secondItem,
  offset: ["start end", "end end"],
};

scroll(animate("nav", { scaleY: [2, 1] }), scrollOptions);
scroll(animate("nav", { y: ["7vw", "0"] }), scrollOptions);

scroll(animate("nav ul, nav button", { scaleY: [0.5, 1], y: ["2vw", "0"] }), scrollOptions);
scroll(animate(".logo ", { scaleX: [3, 1], scaleY: [1.5, 1] }), scrollOptions);
scroll(animate(".logo ", { x: ["14vw", "0"], y: ["1vw", "0"] }), scrollOptions);
scroll(animate(".header_text", { y: ["22vw", "20vw"] }), scrollOptions);
scroll(animate(".header_graphics", { y: ["22vw", "20vw"] }), scrollOptions);
