'use strict';

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('How many movies do you see?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('How many movies do you see?', '');
    }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
    
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Too little");
  } else if (personalMovieDB.count >= 20 && personalMovieDB.count < 30) {
    console.log("You're classic viewer");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are cinemaman!");
  } else {
    console.log("Error");
  }
}

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre with number ${1}`);
  }
}