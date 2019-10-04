
var addedList = function (array) {
    var arr = array.map(function (item, index, array) {
        return `<li>${item}</li> `;
    });
    var ul = document.createElement('ul');
    arr.forEach(function(ar) {
        ul.innerHTML += `${ar}`;
    });
    ul.style.color = 'red';

    // выводим список
  setTimeout(function(){
    document.body.append(ul);
}, 2000);
   };


addedList(['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);

// очищаем страницу
setTimeout(function(){
  document.body.innerHTML = 'Страница очищенна!'
}, 10000);

