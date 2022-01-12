const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?',"");
    
        while(personalMovieDB.count ==''|| personalMovieDB.count == null || isNaN (personalMovieDB.count) ){ // если пользователь ввел пустую строку ИЛИ  отменит ввод ИЛИ введет не цйфры
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?',"");//вопрос будет повторятся пока не выполнится условие.
        }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
           console.log("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30){
            console.log("Вы класный зритель");
        } else if (personalMovieDB.count >= 30 ){
            console.log("Вы киноман");
        } else {
            console.log ('Error');
        }
    },
    showMyDB: function(hidder) { //эта функция с параметром. она выведит в консоль базу данных если она не скрыта
        if (!hidder) {
            console.log(personalMovieDB);
        } 
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt (`Выш любимый жанр под номером ${i}?`);
            if (genre === "" || genre == null){
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else{
               personalMovieDB.genres[i - 1] = genre;// сместить на одну позицыю запись в моссиве
            }
       }

       personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i +1} - это ${item}`);
       });
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    }
};
