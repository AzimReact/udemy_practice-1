const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '')
// console.log(numberOfFilms);

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('Какой последний фильм ты посмотрел?', ''),
      b = +prompt('На сколько ты его оценишь?', ''),
      c = prompt('Какой последний фильм ты посмотрел?', ''),
      d = +prompt('На сколько ты его оценишь?', '')

PersonalMovieDB.movies[a] = b
PersonalMovieDB.movies[c] = d

console.log(PersonalMovieDB);

