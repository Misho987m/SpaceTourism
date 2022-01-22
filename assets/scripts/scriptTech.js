import { fetchAPI, menuFunctionality, clearUI } from "./helper.js";

const techImgEl = document.querySelector(".tech_img");
const techNameEl = document.getElementById("name");
const techDescEl = document.getElementById("tech_desc");
const techs = document.querySelectorAll(".tech_nav li");
const techLVehicleEL = document.getElementById("tech1");
const techSpaceportEL = document.getElementById("tech2");
const techLSpaceCapsuleEL = document.getElementById("tech3");

const data = await fetchAPI();

class Technology {
  constructor(images, name, description) {
    this.image = images;
    this.name = name;
    this.description = description;
  }
}

let techArr = [];

function getTechnology() {
  data.technology.forEach((tech) =>
    techArr.push(
      new Technology(tech.images.landscape, tech.name, tech.description)
    )
  );
}

function displayTechnology(technology) {
  techImgEl.src = technology.image;
  techNameEl.textContent = technology.name;
  techDescEl.textContent = technology.description;
}

function changeTechnology() {
  techLVehicleEL.addEventListener("click", function () {
    clearUI(techs, techLVehicleEL, "active_tech");
    displayTechnology(techArr[0]);
  });
  techSpaceportEL.addEventListener("click", function () {
    clearUI(techs, techSpaceportEL, "active_tech");
    displayTechnology(techArr[1]);
  });
  techLSpaceCapsuleEL.addEventListener("click", function () {
    clearUI(techs, techLSpaceCapsuleEL, "active_tech");
    displayTechnology(techArr[2]);
  });
}

function init() {
  menuFunctionality();
  getTechnology();
  displayTechnology(techArr[0]);
  changeTechnology();
}
init();
