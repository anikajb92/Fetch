Table of Contents
About The Project
Built With
Getting Started
Prerequisites
Installation
Contributing
Contact
Acknowledgements
Pseudocode

About the Project:
Our website is a spin on the name game that the Hackstreet {boiz} cohort played on day 1. Each person in the Hackstreet {boiz} cohort has a profile card. The front of their profile card displays a picture of a dog or animal, their favorite activity, their favorite treat, and a 'Who am I?' button. Once the user clicks the 'Who am I?' button, the back of their card is revealed. The back of the card has all the details as the front of the card plus the person's name and a 'Need to make an update?' button. If the user clicks the 'Need to make an update?' button a form pops up in the middle of the screen. Here their card information is automatically  generated and they can change any of that information and complete the update by clicking the 'Complete update' button. In the edit profile form there is a close button which will make this form invisible. The user can also add a new dog profile by clicking the 'Add your dog profile' button. Once the user clicks that button, a new dog profile form will appear. In the add dog profile form there is a close button which will make this form invisible. Once the user completes the add dog profile form, the new profile will POST to the db.json and render on the page upon refresh.

Built With:

HTML
CSS/SASS
Javascript

Getting Started

Prerequisites
In your terminal please start run `json-server --watch db.json`
In a new tab in your terminal run 'lite-server'

Contributing to project:

Fork the Project
Create your Feature Branch (git checkout -b development/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

Contact
Anika Bernstein - anikajb92@gmail.com
Paige Kelly - pckelly.co@gmail.com

Project Link: https://github.com/anikajb92/Fetch/

Acknowledgements
Thank you:
Blake Runyon
Allen Richard Lea
Chris Follen
Emiley Palmquist
Dane Dawson
Ahmed Gaber
Damon Chivers
Marc Majcher

w3schools
codepen.io


Pseudocode for project

# Dog_generator
Hackstreet {boiz} as four-legged pups

# Storyboard (Deliverables): 
- Home page will have all dog-ID cards listed (with just name and picture)
  - Cards should be clickable to go into the more detailed listing/page (expandable OR new page if expanding is too tricky)
  - Functionality to delete or edit image cards
  - 3 Cards across, 4 rows to start for all Hackstreet {boiz} then new profile cards will be added on the 5th row and so on... 
- Create Option: 
  - If user does not find their name on the list, they can add their dog profile: 
    - image URL
    - nickname
    - full name
    - favorite treats
    - favorite activity
  - Click "Add Your Profile" to drop-down the form 
- Home page search bar: user should be able to find their name on the list, or SEARCH for their name 
  - When they search: their own dog identity card should show up with additional info (like favorite treat)

# Advanced Deliverables:
- Home page search bar: If a user does NOT find their name, they can create a new card
- A user can delete or edit their card's info
  
# Pseudo-code:
- Create HTML file for Home Page: 
  - Create a header and a main section
    - Header: 
      - Welcome section 
    - Main: 
      - "Add Your Profile" form
        - inputs and labels for nickname, name, favorite treat, and favorite activity
        - input submit 
      - 1 'allDogProfiles' container (to hold ALL characters) to push into from JS file
- Create a JSON file: 
  - Create fields: 
    - image URL
    - nickname
    - name
    - favorite treats
    - favorite activity
  - Create profiles for Paige and Anika
    - then create the rest of the profiles via the form
- Create form functionality: 
  - JS file: 
    - use FETCH to get data
    - add eventlistener for form submit
      - prevent default
      - create variables for each entry key:value pair/ create HTML elements for each profile/card
        - h1 for the nickname
        - h2 for the name
        - p for favorite treats and favorite activity
        - DELETE button
      - get the input values from those elements, set those to innerHTML/innerTXT/src to equal the values from the input fields
      - append profile to 'allDogProfiles' container
      - get those elements to display on the cards (pushing to the 'allDogProfiles' container in the HTML file) by POSTing to db.json file
        - FETCH
        - set the Options
          - method: POST
          - headers: same
          - body: json.stringify (set the key values to the input variables)
            "nickname": ,
            "name": ,
            "image": ,
            "favorite-treat": ,
            "favorite-activity": 
- Style the home page and cards
  - CSS:
    - Find a stylesheet or watch Ahmed's video
- Identify what the input value should be and then match that to the profile ID card
  - POST will automatically set up an ID
A user can delete or edit their card's info
  - create editDogForm in HTML
  - append editDogForm div to the dogCard
  - create editButton with the same functionality to expand upon click
  - add an event listener to the submitButton 
      - add editDogForm values and point them to the DogProfile values
      - default values for the editDogForm should be set to the existing values from db.json (so the user knows they're editing the right card)
    - Reset key values to new input values from the form
      - clear AND hide form upon submit
    - PATCH
- Create elements in JS (new div)
  - picture, favorite treat, favorite activity, and button (whoAmI)
  - dogCard-front, dogCard-back
  - transform: rotateY (180deg)
  - change visibility 

