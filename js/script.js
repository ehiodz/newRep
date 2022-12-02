"use strict";

const numberOfFilms = +prompt('how much movies user already watched?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt('One of the last watched movies?', ' '),
    scaleLastMovie = +prompt('Give scale for it from 1 to 10', ' ');

// personalMovieDb.movies = `${lastMovie}: ${scaleLastMovie}`;
personalMovieDb.movies[lastMovie] = scaleLastMovie;
console.log(personalMovieDb);

