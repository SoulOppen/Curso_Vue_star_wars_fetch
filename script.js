const $mainCharactersCard = document.getElementById("mainCharacters");
const $secondaryCharactersCard = document.getElementById("secondaryCharacters");
const $otherCharactersCard = document.getElementById("otherCharacters");

$mainCharactersCard.addEventListener("mouseenter", () => window.alert("main"));
$secondaryCharactersCard.addEventListener("mouseenter", () =>
  window.alert("secondary")
);
$otherCharactersCard.addEventListener("mouseenter", () =>
  window.alert("other")
);
