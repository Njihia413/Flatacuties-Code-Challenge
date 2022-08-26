// Your code here
const baseUrl = " http://localhost:3000/characters";
//Fetch Character Names
function fetchCharacterNames () {
    return fetch(baseUrl)
    .then(response => response.json())
}

function renderCharacterNames(character) {
    const characterBar = document.getElementById("character-bar");
    const span = document.createElement("span");
    span.innerHTML = character.name;
    characterBar.appendChild(span);
    span.dataset.id = character.id;
    span.addEventListener("click", onSpanCharacterClick);
};

fetchCharacterNames().then(characters => {
    characters.forEach(character => {
        renderCharacterNames(character);
    })
})



//Fetching character details
function fetchCharacterDetails (id) {
    return fetch(baseUrl + `/${id}`)
    .then(response => response.json())
}


function onSpanCharacterClick (event) {
    fetchCharacterDetails(event.target.dataset.id)
    .then(renderCharacterDetails);
}

function renderCharacterDetails(character) {
    const characterInfo = document.getElementById("detailed-info");
    const charName = document.getElementById("name");
    charName.innerText = character.name

    const charImg = document.getElementById("image");
    charImg.src = character.image

    const charVotes = document.getElementById("vote-count");
    charVotes.innerText = character.votes

    //characterInfo.appendChild(charName, charImg, charVotes);
}




document.addEventListener("DOMContentLoaded", function () {
    fetchCharacterNames();
    fetchCharacterDetails();
})