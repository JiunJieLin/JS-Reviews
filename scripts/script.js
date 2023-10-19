// local reviews data
import { reviews } from "./data.js";

const name = document.getElementById("name");
const job = document.getElementById("job");
const img = document.getElementById("img");
const info = document.getElementById("text");
const buttonPrev = document.querySelector(".prev-btn");
const buttonNext = document.querySelector(".next-btn");
const buttonRadom = document.querySelector(".radom-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  job.textContent = item.job;
  name.textContent = item.name;
  img.src = item.img;
  info.textContent = item.text;
});

const showPerson = function (person) {
  const item = reviews[person];
  job.textContent = item.job;
  name.textContent = item.name;
  img.src = item.img;
  info.textContent = item.text;
};
buttonNext.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
buttonPrev.addEventListener("click", function () {
  currentItem--;
  if (currentItem < reviews.length - 1) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
buttonRadom.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});
