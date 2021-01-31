import { SodexoModule, FazerModule } from "./Modules/index";

let sodMod = new SodexoModule();
console.log("sodexo data --> ", sodMod.getData());

let fazMod = new FazerModule();
console.log("fazer data --> ", fazMod.getData("en"));

const coursesEn = [
  "Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries",
];
const coursesFi = [
  "Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset",
];

document.getElementById("myTextarea").value = coursesEn;

let app = document.querySelector("#menu");

app.innerHTML =
  "<ul>" +
  coursesEn
    .map(function (course) {
      return "<li>" + course + "</li>";
    })
    .join("") +
  "</ul>";

function myFunc() {
  alert();
} //

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
