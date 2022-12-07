'use strict';

const numberOfFilms = +prompt('How many movies have you already watched?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies you watched?', ''),
    b = +prompt('Scale it', '');

    if (a != null && b != null && a!= '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        i--;
        console.log('error!');
    }
}

if (personalMovieDB.count < 10) {
    console.log ('You watched very few movies :(');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are classic viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('YOU ARE MOVIE MANIAC');
} else {
    console.log('Something happend wrong!');
}

console.log(personalMovieDB);
