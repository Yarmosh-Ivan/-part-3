
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");

    while(numberOfFilms ==''|| numberOfFilms == null || isNaN (numberOfFilms) ){ // если пользователь ввел пустую строку ИЛИ  отменит ввод ИЛИ введет не цйфры
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");//вопрос будет повторятся пока не выполнится условие.
    }
}

start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?',''),
                b = prompt('На сколько оцените его?','');
        if (a != null && b != null && a != '' && b != ''  && a.length < 20) {
            personalMovieDB.movies[a] = b; // если условие верно данные записать в переменную
            console.log('done');
        } else{
            console.log('error');
            i--; // если условее не верно задать вопрос повторно.
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
       console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30){
        console.log("Вы класный зритель");
    } else if (personalMovieDB.count >= 30 ){
        console.log("Вы киноман");
    } else {
        console.log ('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidder) { //эта функция с параметром. она выведит в консоль базу данных если она не скрыта
    if (!hidder) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt (`Выш любимый жанр под номером ${i}?`);
           personalMovieDB.genres[i - 1] = genre;// сместить на одну позицыю запись в моссиве
        }
    }
writeYourGenres();