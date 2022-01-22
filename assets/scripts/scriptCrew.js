import { fetchAPI, menuFunctionality, clearUI } from "./helper.js";

const crew = document.querySelectorAll(".fa-circle");
const crewCommanderEl = document.getElementById("crew1");
const crewSpecialistEl = document.getElementById("crew2");
const crewPilotEl = document.getElementById("crew3");
const crewEngineerEl = document.getElementById("crew4");
const crewImgEl = document.querySelector(".crew_img");
const crewRoleEl = document.getElementById("role");
const crewNameEl = document.getElementById("name");
const crewBioEl = document.getElementById("bio");

const data = await fetchAPI();

class Crew {
  constructor(name, images, role, bio) {
    this.name = name;
    this.image = images;
    this.role = role;
    this.bio = bio;
  }
}

let crewArr = [];

function getCrew() {
  data.crew.forEach((member) =>
    crewArr.push(new Crew(member.name, member.images, member.role, member.bio))
  );
}

function displayCrew(member) {
  crewImgEl.src = member.image.png;
  crewNameEl.textContent = member.name;
  crewRoleEl.textContent = member.role;
  crewBioEl.textContent = member.bio;
}

function changeCrew() {
  crewCommanderEl.addEventListener("click", function () {
    clearUI(crew, crewCommanderEl, "active_tab");
    displayCrew(crewArr[0]);
  });
  crewSpecialistEl.addEventListener("click", function () {
    clearUI(crew, crewSpecialistEl, "active_tab");
    displayCrew(crewArr[1]);
  });
  crewPilotEl.addEventListener("click", function () {
    clearUI(crew, crewPilotEl, "active_tab");
    displayCrew(crewArr[2]);
  });
  crewEngineerEl.addEventListener("click", function () {
    clearUI(crew, crewEngineerEl, "active_tab");
    displayCrew(crewArr[3]);
  });
}

function init() {
  menuFunctionality();
  getCrew();
  displayCrew(crewArr[0]);
  changeCrew();
}
init();
