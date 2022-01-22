const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav");

export async function fetchAPI() {
  const getData = await fetch("../../data.json");
  const data = await getData.json();
  return data;
}

export function menuFunctionality() {
  menuBtn.addEventListener("click", function (e) {
    navMenu.classList.toggle("non-active-menu");
    if (menuBtn.classList.contains("fa-bars")) {
      menuBtn.classList.remove("fa-bars");
      menuBtn.classList.add("fa-times");
    } else if (menuBtn.classList.contains("fa-times")) {
      menuBtn.classList.remove("fa-times");
      menuBtn.classList.add("fa-bars");
    }
  });
}

export function clearUI(collection, element, intendedClass) {
  collection.forEach((destination) =>
    destination.classList.remove(intendedClass)
  );
  element.classList.add(intendedClass);
}
