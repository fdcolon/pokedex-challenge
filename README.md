# Pokedex Challenge

## Objective.
Create a React.js app that fetches data from an open source JSON (based on the **Pokemon Go** game).

## Goals.
- Display the list of Pokemon however you like, making sure their **name**, **num**, **type**, and **weaknesses** are displayed.
- Make this list searchable via a **search box**. External NPM libraries for search are equally as good to use, here, as custom search implementations. Determine what works best for you.
- For simplicity, just search through the names of the Pokemon, only.
- Also, make this list filterable via the **type** and **weaknesses** fields.
- Multiple filters should be able to be applied, and the should narrow the search, instead of expand it. This means that if I choose to filter for type **Grass** and type **Poison**, I should only get Pokemon with both the **Grass** and the **Poison** types. This also means that if I choose to filter for the type **Fire** and weakness **Ice**, I should only get Pokemon who are both **Fire** type and who have weakness for **Ice**.
    - **NOTE:** Any solution to achive selecting multiple filters is fine. Checkboxes would work. Two dropdown selects would also work, as long as multiple options can be selected within. Or any other solution you can think of pre-made React component from a library should be fine. You don't need to win any gold medals in usability or design, here. The main thing I want to see is how you implement the filtering functionality, rather than how well you make it all look or feel.

## Bonus
If you have time for it, it’d be nice to see the following implementations. You won’t be negatively assessed if you do not have the next portions. It’s just a chance for us to see more of your code and get a more accurate gauge of your abilities.

- Create a generic **Details Page** component for Pokemon, showing a Pokemon’s:
    - **Name**.
    - **Num**.
    - **Image** (rendered).
    - **Type**.
    - **Weaknesses**.
    - **Height**.
    - **Weight**.
    - **Prev Evolution** (if any).
        - **BONUS** Provide a link to the **Details Page** of the other Pokemon being referenced.
    - **Next Evolution** (if any).
        - **BONUS** Provide a link to the **Details Page** of the other Pokemon being referenced.
    - Provide a link or button to a Pokemon’s **Details Page** from their listing in your master list. Also provide a **Back** button from the **Details Page** to return to the list.

## Steps to clone and run the app.
- Clone the repository and move into the app folder.
- Install the node modules.
```javascript
yarn install
```
- Run **dev** to execute the app in dev mode.
```javascript
yarn run dev
```
- Once the app is running, try to make a search by placing the full name of the Pokemon you are looking for, eg: **Charmander**.
- If you want, you can also search pokemons that match with some starting string, such as: **cha**.
- Don't worry if you type the name of the Pokemon in lowercase, uppercase or capital, the app will make the search for you.
- You can filter also the list of Pokemons by using the **Types** / **Weaknesses** dropdowns. You can select one ore more properties in one or both.
- If you would like to see the details or evolutions of a Pokemon, just click on it and you will be redirected to a details page. If the selected Pokemon has previous evolutions and or next evolutions, you will see it at the bottom of the details. The faded ones are the previous or next evolution of the Pokemon and you can click on any of them to see its details.
- On the details page, you will see three navigation buttons:
    - **View Previous:** To see the previous Pokemon details.
    - **Home:** To return to the list of all Pokemons.
    - **View Next:** To see the next Pokemon details.

## Extras.
- The app is responsive, so you can enjoy it in a desktop or also in your mobile device. You can test it by clicking on the following link <a href="https://dcolon-pokedex-challenge.herokuapp.com/" target="_blank">Pokedex Challenge</a>.

## Final Comments.
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).