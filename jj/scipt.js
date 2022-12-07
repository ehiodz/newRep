'use strict';

const numberOfFilms = +prompt('How many movies have you already watched?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last movies you watched?', ''),
    b = +prompt('Scale it', ''),
    c = prompt('One of the last movies you watched?', ''),
    d = +prompt('Scale it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
