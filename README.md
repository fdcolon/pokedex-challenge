# Pokedex Challenge

**Pokedex Challenge** is a project for a job interview that fetches data from an open source JSON (based on the **Pokemon Go** game). It is focused in develop a reponsive app, using **React.js**, that allows the user display the **Kanto Pokedex** in order to find a Pokemon by name, or to filter the pokemon list by type and/or by weaknesses.

## Goals.
- Display the list of Pokemon however you like, making sure their **name**, **num**, **type**, and **weaknesses** are displayed.
- Make this list searchable via a **search box**. External NPM libraries for search are equally as good to use, here, as custom search implementations. Determine what works best for you.
- For simplicity, just search through the names of the Pokemon, only.
- Also, make this list filterable via the **type** and **weaknesses** fields.
- Multiple filters should be able to be applied, and the should narrow the search, instead of expand it. This means that if I choose to filter for type **Grass** and type **Poison**, I should only get Pokemon with both the **Grass** and the **Poison** types. This also means that if I choose to filter for the type **Fire** and weakness **Ice**, I should only get Pokemon who are both **Fire** type and who have weakness for **Ice**.

> :warning: **NOTE:** Any solution to achive selecting multiple filters is fine. Checkboxes would work. Two dropdown selects would also work, as long as multiple options can be selected within. Or any other solution you can think of pre-made React component from a library should be fine. You don't need to win any gold medals in usability or design, here. The main thing I want to see is how you implement the filtering functionality, rather than how well you make it all look or feel.

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

## Installation

> :warning: If you don't have `yarn` installed in your computer, please type the following in your terminal:

```
> npm install --global yarn
```

Clone the GitHub repository, use `yarn` to install the dependencies.

```
> git clone https://github.com/fdcolon/pokedex-challenge.git
> cd pokedex-challenge
> yarn install
```

## Usage

To run the **Pokedex Challenge** app, just type the following into your terminal:

```
> yarn run dev
```

## Home Page

Once the app is running, the first view you will see, will be the **Home** page where you will see the filter section and below, the list of **Pokemon** from **Kanto**.

<span style="width: 100%; display: flex; justify-content: space-between;" markdown="1">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/home-web-01.png" height="400">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/home-mobile-01.png" height="400">
</span>

### Filtering by Name

If you would like to find a **Pokemon** (or a set of pokemon) that matches with the initial search name, you need to type the desired name into the `Pokemon Name` field, eg: **Mach**, and then click/tap on the button with the **magnifying glass** icon. If you try this one, you will see three Pokemon that matches with that initial name which are: **Machop**, **Machoke** and **Machamp**.

<span style="width: 100%; display: flex; justify-content: space-between;" markdown="1">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/search-web-01.png" height="400">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/search-mobile-01.png" height="400">
</span>

> :warning: Don't worry if you type the name in lowercase, uppercase or capital, the app will make the search for you.

> :warning: If you empty/clear the `Pokemon Name` field, you will see all the list of Pokemon that matches with the other filtering options or the whole list if no filtering option is selected.

### Filtering by Type

If you would like to find a **Pokemon** (or a set of pokemon) that matches with one or more types, you need to select the type or types into the `Choose Types` field selector, eg: **Fire**. If you try this one, you will see a set of Pokemon that matches with the **Fire** type.

<span style="width: 100%; display: flex; justify-content: space-between;" markdown="1">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/search-web-02.png" height="400">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/search-mobile-02.png" height="400">
</span>

### Filtering by Weaknesses

If you would like to find a **Pokemon** (or a set of pokemon) that matches with one or more weaknesses, you need to select the weakness or weaknesses into the `Choose Weaknesses` dropdown, eg: **Electric**. Also, you can filter by using both **Types** / **Weaknesses** dropdowns at the same time. For instance, we can use the previous selection of **Type: Fire** and add to **Weaknesses** such as **Electric** and **Rock**. If you try these filters, you will see two Pokemon that matches with them: **Charizard** and **Moltres**.

<span style="width: 100%; display: flex; justify-content: space-between;" markdown="1">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/search-web-03.png" height="400">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/search-mobile-03.png" height="400">
</span>

### Pokemon Details
If you would like to see the details or evolutions of a Pokemon, just click on it and you will be redirected to a details page.

<span style="width: 100%; display: flex; justify-content: space-between;" markdown="1">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/details-web-01.png" height="400">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/details-mobile-01.png" height="400">
</span>

If the selected Pokemon has previous evolutions and or next evolutions, you will see it at the bottom of the details. The faded ones are the previous and/or the next evolution of the Pokemon and you can click on any of them to see its details.

<span style="width: 100%; display: flex; justify-content: space-between;" markdown="1">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/details-web-02.png" height="400">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/details-mobile-02.png" height="400">
</span>

Also, on this window, you will see three navigation buttons:
  - **View Previous:** To see the previous Pokemon details.
  - **Home:** To return to the list of all Pokemons.
  - **View Next:** To see the next Pokemon details.

For instance, if you are watching **Charmander's** details and you click/tap on the **View Previous** button, you will see the **Venusaur** details page because it is the previous one of the full list of the **Kanto Pokedex**.

<span style="width: 100%; display: flex; justify-content: space-between;" markdown="1">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/details-web-03.png" height="400">
  <img src="https://github.com/fdcolon/pokedex-challenge/blob/main/public/screenshots/details-mobile-03.png" height="400">
</span>

## Notes

- The app is responsive, so you can enjoy it in a desktop or also in your mobile device. You can test a previous version by clicking on the following link [Pokedex Challenge](https://dcolon-pokedex-challenge.herokuapp.com/).

## License

This App is Copyright © 2021 Fernando Daniel Colon Gonzalez and thoughtbot. It is free software, and may be redistributed under the terms specified in the [LICENSE](https://github.com/fdcolon/pokedex-challenge/blob/main/LICENSE) file.