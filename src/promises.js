/**
 * Created by Vetal_Haman on 26.05.2017.
 */
/*

 function applyForVisa(document) {
 console.log("Обработка заявления...");
 let promise = new Promise(function (resolve, reject) {
 setTimeout(function () {
 Math.random() > .5 ? resolve({}) : reject("В визе отказано: нехватка документов")
 }, 2000);
 });
 return promise;
 }

 function getVisa(visa) {
 console.info("Виза получена");
 return new Promise(function (resolve, reject) {

 })
 }

 function bookHotel(visa) {
 console.log("Ожидаем ответа от отеля...");
 let promise = new Promise(function (resolve, reject) {
 setTimeout(function () {
 Math.random() > .5 ? resolve({}) : reject("отель переполнен")
 }, 2000);
 });
 return promise;
 }

 function buyTickets() {
 console.log("Билеты куплены");
 }

 applyForVisa({})
 .then(visa => {
 console.info("Виза получена");
 return visa
 })
 .then(bookHotel)
 .then(hotel => console.info("Отель забронирован"))
 .then(buyTickets)
 .catch(error => console.error(error));
 */



//////////////////////////////////////////////////////////////////////////////


// Практическое применение promise

let moveList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    moveList.appendChild(img);
}

function getData(url, done) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                console.log(json);
                resolve(json.search)
            } else {
                reject(xhr.statusText);
            }

        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    })


}

let search = 'spider man';

getData(`http://www.omdbapi.com/?s=${search}`)
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.error(error));




















