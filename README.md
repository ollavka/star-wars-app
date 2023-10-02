# 🚀 Star Wars App
Welcome to the documentation for our Star Wars mobile application. This app is designed with three main screens: the Home Screen, Movie Screen, and Actor Screen. Below, you'll find detailed information about the functionality of each screen, including tabs, navigation, and specific features.

# 🌐 Functionality
* [Home Screen](#home-screen) 
* [Movie Screen](#movie-screen)
* [Character Screen](#character-screen)
* [How to get started](#start)

<span id="home-screen"></span>

## 🏠 Home Screen
The Home Screen is the initial screen users see when they open the app. It consists of two tabs:

* **Movies Tab**:
Displays a list of movies, in the form of movie title, release date and short description.. Users can click on a movie to navigate to the Movie Screen for detailed information. There is also a button to sort movies by release date above the list of movies:<br />
![Sort Movies](https://img001.prntscr.com/file/img001/A2qQQMcjTC-rpoCRNT36mA.png)
<br />

* **Favorite Characters Tab**:
Shows a list of favorite actors. Clicking on an actor navigates the user to the Character Screen. Also on the button to switch the tab with the list of favorite actors there is a badge that shows the number of actors added to the favorites:<br />
![Badge](https://img001.prntscr.com/file/img001/gBu9SGKVRFOEkAC8HpS-vQ.png)
<br />

<span id="movie-screen"></span>

## 🎬 Movie Screen
The Movie Screen provides detailed information about a specific movie. It includes two tabs:

* **Movie Details Tab**:
Displays comprehensive details about the selected movie.

* **Characters Tab**
Shows a list of actors who starred in the movie. Clicking on an actor navigates the user to the Character Screen.


<span id="character-screen"></span>

## 🎭 Character Screen
The Actor Screen contains information about a specific actor and has two tabs:

* **Character Details Tab**:
Provides in-depth details about the selected actor.

There are also 2 buttons:<br />
**"Back to Home"**: Takes the user back to the Home Screen.<br />
**"Like/Dislike"**: Allows the user to add/remove the actor to favorites.<br />
![Buttons](https://img001.prntscr.com/file/img001/PW9NcdJ1SseHduE0eYfiAQ.png)

* **Movies Tab**:
Displays a list of movies in which the actor has participated. Clicking on a movie navigates the user to the Movie Screen.

## 💫 Technologies
* TypeScript
* React
* React Native
* Redux Toolkit
* React-navigation
* Apollo
* GraphQL
* Gluestack UI

<span id="start"></span>

🏃 How to get started
To run this application locally, follow these rules, navigate to the project directory in your terminal:

* Clone repo: https://github.com/ollavka/star-wars-app.git<br />
* Install dependencies: ``npm install`` or ``yarn add``<br />
* Run the app (in development mode): ``npm run dev`` or ``yarn dev``<br />
* Run the app: ``npm start`` or ``yarn start``<br />

User interactions are designed to be intuitive, providing a seamless experience.
Feel free to explore the app, and enjoy discovering movies and actors effortlessly!
