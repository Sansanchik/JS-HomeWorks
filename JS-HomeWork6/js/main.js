// Опишите своими словами как работает цикл forEach.
// Реализовать функцию фильтра массива по указанному типу данных.
// Технические требования:

// Написать функцию filterBy(), которая будет принимать в себя 2 аргумента.
//  Первый аргумент - массив, который будет содержать в себе любые данные, 
//  второй аргумент - тип данных.
// Функция должна вернуть новый массив, который будет содержать в себе все данные,
//  которые были переданы в аргумент, за исключением тех, тип которых был передан 
//  вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], 
//  и вторым аргументом передать 'string', то функция вернет массив [23, null].

// Вариант с обьявлением глобальных переменных

let array = ['hello', 'world', 23, '23', null];
let argument = 'string';

var filterBy = function (array, argument) {
    var newArray = [];
    for (var i = 0; i<array.length; i++ )
    {
        if (typeof(array[i]) !== argument) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
};

filterBy (array, argument);


// Вариант с передачей аргументов в функцию

// var filterBy = function (array, argument) {
//     var newArray = [];
//     for (var i = 0; i<array.length; i++ )
//     {
//         if (typeof(array[i]) !== argument) {
//             newArray.push(array[i]);
//         }
//     }
//     console.log(newArray);
// };
// filterBy (['hello', 'world', 23, '23', null], 'string');

