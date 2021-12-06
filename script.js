const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false

}

const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmRanked = prompt('На сколько оцените его?', '');
const lastFilmName2 = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmRanked2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilmName] = lastFilmRanked;
personalMovieDB.movies[lastFilmName2] = lastFilmRanked2;
console.log(personalMovieDB);

console.log(personalMovieDB.movies);

