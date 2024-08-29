const $mainCharactersCard = document.getElementById("mainCharacters");
const $secondaryCharactersCard = document.getElementById("secondaryCharacters");
const $otherCharactersCard = document.getElementById("otherCharacters");

const url = "https://swapi.dev/api/people/";

const urlCall = (url, id) => `${url}${id}`;

async function characterSearch(id) {
  try {
    let response = await fetch(urlCall(url, id));
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
const addCard = ($node, obj, newClass = "") => {
  let { name, height, mass } = obj;
  let $card = document.createElement("div");
  $card.classList.add("section__card");

  $card.innerHTML = `
    <div class="section__circle">
      <div class="circle ${newClass}"></div>
    </div>
    <div class="section__text">
      <p class="text__bold">${name}</p>
      <p>
        Altura: ${height} cm Peso: ${mass} kg
      </p>
    </div>
  `;
  $node.parentNode.append($card);
};
function* mainGenerator() {
  for (let index = 1; index < 6; index++) {
    yield index;
  }
}
let main = mainGenerator();
let mainAux = main.next();

function* secondaryGenerator() {
  for (let index = 6; index < 11; index++) {
    yield index;
  }
}
let secondary = secondaryGenerator();
let secondaryAux = secondary.next();
function* otherGenerator() {
  for (let index = 11; index < 16; index++) {
    yield index;
  }
}
let other = otherGenerator();
let otherAux = other.next();

$mainCharactersCard.addEventListener("mouseenter", async () => {
  try {
    if (!mainAux.done) {
      let data = await characterSearch(mainAux.value);
      addCard($mainCharactersCard, data);
      mainAux = main.next();
    }
  } catch (e) {
    console.log;
  }
});

$secondaryCharactersCard.addEventListener("mouseenter", async () => {
  try {
    if (!secondaryAux.done) {
      let data = await characterSearch(secondaryAux.value);
      addCard($secondaryCharactersCard, data, "circle--limegreen");
      secondaryAux = secondary.next();
    }
  } catch (e) {
    console.log;
  }
});

$otherCharactersCard.addEventListener("mouseenter", async () => {
  try {
    if (!otherAux.done) {
      let data = await characterSearch(otherAux.value);
      addCard($otherCharactersCard, data, "circle--skyblue");
      otherAux = other.next();
    }
  } catch (e) {
    console.log;
  }
});
