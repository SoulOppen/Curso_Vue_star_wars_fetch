const $mainCharactersCard = document.getElementById("mainCharacters");
const $secondaryCharactersCard = document.getElementById("secondaryCharacters");
const $otherCharactersCard = document.getElementById("otherCharacters");

const url = "https://swapi.dev/api/people/";

const urlCall = (url, id) => `${url}${id}`;

function characterSearch(id) {
  return fetch(urlCall(url, id))
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(
          `Error fetching data for ID ${id}: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}

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

$mainCharactersCard.addEventListener("mouseenter", () => {
  if (!mainAux.done) {
    characterSearch(mainAux.value).then((data) => console.log(data));
    mainAux = main.next();
  }
});

$secondaryCharactersCard.addEventListener("mouseenter", () => {
  if (!secondaryAux.done) {
    characterSearch(secondaryAux.value).then((data) => console.log(data));
    secondaryAux = secondary.next();
  }
});

$otherCharactersCard.addEventListener("mouseenter", () => {
  if (!otherAux.done) {
    characterSearch(otherAux.value).then((data) => console.log(data));
    otherAux = other.next();
  }
});
