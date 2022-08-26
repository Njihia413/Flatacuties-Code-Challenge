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

    updateVoteCount(character);
}

//Form Submission and Updating Votes
document.getElementById("votes-form").addEventListener("submit", (event) => {
    event.preventDefault(); 
    const votesForm = event.target;
    const votes = document.getElementById("vote-count")
    votes.innerText = parseInt(votesForm.votes.value) + parseInt(votes.innerText);
    votesForm.reset();
})

//Update Votes to the DOM and backend
// function updateVoteCount (id) {
//     return fetch(baseUrl + `/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(id)
//     })
//     .then(response => response.json())
//     .then(character => console.log(character))
// }



//Reset Button Functionality
document.getElementById("reset-btn").addEventListener("click", () => {
    document.getElementById("vote-count").innerText = 0;
})

document.addEventListener("DOMContentLoaded", function () {
    fetchCharacterNames();
    fetchCharacterDetails();
})