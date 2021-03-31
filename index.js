// const baseUrl = "/db.json";
const dogProfilesUrl = "http://localhost:3000/dogProfiles";
let allDogsArray = [];
let addDog = false;

fetch(dogProfilesUrl)
    .then((response) => response.json())
    .then((dogData) => {
        const allDogProfiles = document.querySelector('#allDogProfiles');
        allDogsArray = dogData;
        dogData.forEach(dogProfile => {
            const dogImage = document.createElement('img');
            const dogCard = document.createElement('div');
            const dogName = document.createElement('h1');
            const dogFavoriteTreat = document.createElement('p');
            const dogFavoriteActivity = document.createElement('p');

            dogName.textContent = `${dogProfile.nickname} ${dogProfile.name}`;
            dogImage.src = dogProfile.image;
            dogFavoriteTreat.textContent = dogProfile.favoriteTreat;
            dogFavoriteActivity.textContent = dogProfile.favoriteActivity;

            dogCard.append(dogImage, dogName, dogFavoriteTreat, dogFavoriteActivity)
            allDogProfiles.append(dogCard)
        });
    })

document.addEventListener("DOMContentLoaded", () => {
    const dogFormContainer = document.getElementById("dogFormContainer");
    const addDogButton = document.getElementById("addDogButton");
    const newDogProfileForm = document.getElementById("newDogProfileForm");
    dogFormContainer.style.display = "none";

    addDogButton.addEventListener('click', () => {
    addDog = !addDog;
    if (addDog) {
        dogFormContainer.style.display = "none";
    } else {
        dogFormContainer.style.display = "block";
    }
    })

    newDogProfileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nickname = event.target.nickname.value;
    const name = event.target.name.value;
    const image = event.target.dogImage.value;
    const favoriteTreat = event.target.favoriteTreat.value;
    const favoriteActivity = event.target.favoriteActivity.value;
    const dogImage = document.createElement('img');
    const dogCard = document.createElement('div');
    const dogName = document.createElement('h1');
    const dogFavoriteTreat = document.createElement('p');
    const dogFavoriteActivity = document.createElement('p');

    dogName.textContent = `${nickname} ${name}`;
    dogImage.src = image;
    dogFavoriteTreat.textContent = favoriteTreat;
    dogFavoriteActivity.textContent = favoriteActivity;

    dogCard.append(dogImage, dogName, dogFavoriteTreat, dogFavoriteActivity);
    allDogProfiles.append(dogCard)
    console.log(allDogsArray);

    postNewDogProfile();
    newDogProfileForm.reset()

    function postNewDogProfile() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                nickname: nickname,
                name:name,
                image:image,
                favoriteTreat:favoriteTreat,
                favoriteActivity: favoriteActivity
            })
        }
        fetch(dogProfilesUrl, options)
        console.log(dogProfilesUrl)
    }
    })
})  

