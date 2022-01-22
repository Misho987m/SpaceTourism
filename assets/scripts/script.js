import { fetchAPI, menuFunctionality, clearUI } from "./helper.js";

const destinationImageEl = document.querySelector(".dest_img");
const destinationNameEl = document.querySelector(".dest_name");
const destinationDescriptionEl = document.getElementById("dest_desc");
const destinatinDistanceEl = document.getElementById("distance");
const destinationTimeEl = document.getElementById("time");
const moonEl = document.getElementById("moon");
const marsEl = document.getElementById("mars");
const europaEl = document.getElementById("europa");
const titanEl = document.getElementById("titan");
const destinations = document.querySelectorAll(".destinations li");

const data = await fetchAPI();

class Destination {
  constructor(name, images, description, distance, travel) {
    this.name = name;
    this.image = images;
    this.description = description;
    this.distance = distance;
    this.travel = travel;
  }
}

let destinationsArr = [];

function getDestinations() {
  data.destinations.forEach((dest) =>
    destinationsArr.push(
      new Destination(
        dest.name,
        dest.images,
        dest.description,
        dest.distance,
        dest.travel
      )
    )
  );
}

function displayDestination(destination) {
  destinationImageEl.src = destination.image.png;
  destinationNameEl.textContent = destination.name;
  destinationDescriptionEl.textContent = destination.description;
  destinatinDistanceEl.textContent = destination.distance;
  destinationTimeEl.textContent = destination.travel;
}

function changeDestination() {
  moonEl.addEventListener("click", function () {
    clearUI(destinations, moonEl, "active_dest");
    displayDestination(destinationsArr[0]);
  });
  marsEl.addEventListener("click", function () {
    clearUI(destinations, marsEl, "active_dest");
    displayDestination(destinationsArr[1]);
  });
  europaEl.addEventListener("click", function () {
    clearUI(destinations, europaEl, "active_dest");
    displayDestination(destinationsArr[2]);
  });
  titanEl.addEventListener("click", function () {
    clearUI(destinations, titanEl, "active_dest");
    displayDestination(destinationsArr[3]);
  });
}

function init() {
  menuFunctionality();
  getDestinations();
  displayDestination(destinationsArr[0]);
  changeDestination();
}
init();
