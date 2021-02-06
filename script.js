const numberOfFilms = +prompt('How many movies do you see?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('One of the last seeing films?', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('One of the last seeing films?', ''),
      d = prompt('How would you rate it?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);