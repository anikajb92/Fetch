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
  
