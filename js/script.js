/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)+

2) Изменить жанр фильма, поменять "комедия" на "драма"+

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS+

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту +

5) Добавить нумерацию выведенных фильмов+ */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let aplphaDB = movieDB.movies.sort();

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";
document.querySelectorAll('.promo__interactive-item').forEach((e,k) => {
    e.childNodes[0].nodeValue = 1+k + '.' +  aplphaDB[k]+'\n';
});