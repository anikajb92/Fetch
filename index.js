const baseUrl = "/db.json";

fetch(baseUrl)
    .then((response) => response.json())
    .then((dogData) => {
        const allDogProfiles = document.querySelector('#allDogProfiles');
        const dogProfiles = dogData.dogProfiles
        dogProfiles.forEach(dogProfile => {
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