"use strict";

/**
 * Created by Vetal_Haman on 26.05.2017.
 */

function applyForVisa(document) {
    console.log("Обработка заявления...");
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("В визе отказано: нехватка документов");
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info("Виза получена");
    return new Promise(function (resolve, reject) {});
}

function bookHotel(visa) {
    console.log("Ожидаем ответа от отеля...");
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("отель переполнен");
        }, 2000);
    });
    return promise;
}

function buyTickets() {
    console.log("Билеты куплены");
}

applyForVisa({}).then(function (visa) {
    console.info("Виза получена");
    return visa;
}).then(bookHotel).then(function (hotel) {
    return console.info("Отель забронирован");
}).then(buyTickets).catch(function (error) {
    return console.error(error);
});

//////////////////////////////////////////////////////////////////////////////


// Практическое применение promise

var moveList = document.getElementById('movies');

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    moveList.appendChild(img);
}

function getData(url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var json = JSON.parse(xhr.response);
            console.log(json);
            done(json.search);
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function (error) {
        console.log(error);
    };

    xhr.send();
}

var search = 'spider man';

getData("http://www.omdbapi.com/?s=" + search, function (movies) {
    movies.forEach(function (movie) {
        addMovieToList(movie);
    });
});