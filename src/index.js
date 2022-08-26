// Your code here
const baseUrl = " http://localhost:3000";
//Fetch Character Names
function fetchCharacterNames () {
    return fetch(`${baseUrl}/characters`)
    .then(response => response.json())
}

function renderCharacterNames(character) {
    const characterBar = document.getElementById("character-bar");
    const span = document.createElement("span");
    span.innerHTML = character.name;
    characterBar.appendChild(span);
    console.log(characterBar);
};

fetchCharacterNames().then(characters => {
    characters.forEach(character => {
        renderCharacterNames(character);
    })
})

document.addEventListener("DOMContentLoaded", function () {
    fetchCharacterNames();
})