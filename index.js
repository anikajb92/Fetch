// const baseUrl = "/db.json";
const dogProfilesUrl = "http://localhost:3000/dogProfiles/";
let allDogsArray = [];
let addDog = false;
const editDogForm = document.getElementById('editDogProfileForm');
// editDogForm.style.display = "none";

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
            const editProfileButton = document.createElement('button');
            dogCard.setAttribute('class', 'dogCard')
            editProfileButton.setAttribute('class', 'editCardButton')

            dogName.textContent = `${dogProfile.nickname} ${dogProfile.name}`;
            dogImage.src = dogProfile.image;
            dogFavoriteTreat.textContent = `My favorite treat: ${dogProfile.favoriteTreat}`;
            dogFavoriteActivity.textContent = `My favorite activity: ${dogProfile.favoriteActivity}`;
            editProfileButton.innerText = "Need to make an update?";
            dogCard.dataset.id = dogProfile.id;
            
            const closeButton = document.getElementById('closeEditForm');
            closeButton.addEventListener('click', () => {
                editDogForm.parentElement.classList.remove("isVisible");
                editDogForm.parentElement.classList.add("isNotVisible");
            })
            

            editProfileButton.addEventListener('click', () => {
                editDogForm.nickname.value = dogProfile.nickname;
                editDogForm.name.value = dogProfile.name;
                editDogForm.dogImage.value = dogProfile.image;
                editDogForm.favoriteTreat.value = dogProfile.favoriteTreat;
                editDogForm.favoriteActivity.value = dogProfile.favoriteActivity;
                editDogForm.parentElement.classList.add("isVisible");
                editDogForm.parentElement.classList.remove("isNotVisible");

                editDogForm.addEventListener('submit', (event) => {
                   event.preventDefault();
                   patch(editDogForm, dogProfile);
                   alert('Remember to refresh the page to see your changes!');
                    editDogForm.reset();
                    editDogForm.parentElement.classList.add("isNotVisible")
                    editDogForm.parentElement.classList.remove("isVisible")
                })
            })

            dogCard.append(dogImage, dogName, dogFavoriteTreat, dogFavoriteActivity, editProfileButton)
            allDogProfiles.append(dogCard)
           
        });
    })

document.addEventListener("DOMContentLoaded", () => {
    const dogFormContainer = document.getElementById("dogFormContainer");
    const addDogButton = document.getElementById("addDogButton");
    const newDogProfileForm = document.getElementById("newDogProfileForm");
    const closeAddButton = document.getElementById('closeAddForm');
    
    closeAddButton.addEventListener('click', () => {
        newDogProfileForm.parentElement.classList.remove("isVisible");
        newDogProfileForm.parentElement.classList.add("isNotVisible");
    })

    addDogButton.addEventListener('click', () => {
        newDogProfileForm.parentElement.classList.add("isVisible");
        newDogProfileForm.parentElement.classList.remove("isNotVisible");
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

function patch(editDogForm, dogProfile) {
    const identifier = dogProfile.id;
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            nickname: editDogForm.updateNickname.value,
            name: editDogForm.updateName.value,
            image: editDogForm.updateDogImage.value,
            favoriteTreat: editDogForm.updateFavoriteTreat.value,
            favoriteActivity: editDogForm.updateFavoriteActivity.value
        })
    }

    fetch(`${dogProfilesUrl}${identifier}`, options)
    .then((response) => response.json())
    //.then((data) => updateDogOnDom(data))
}

// function updateDogOnDom(dogData){
//     //const id = document.querySelectorAll(`[data-id=${dogData.id}]`) // Need to get proper syntax
//     console.log(id); // once we capture dogCard, then we can access/edit innerText
// }

