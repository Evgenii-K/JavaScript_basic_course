'use strict';

/*1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
 units: 5, //это единицы
 tens: 4, //это десятки
 hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

let userNumber,
    objDischarge = {};

function question() {
    userNumber = +prompt('Введите целое число от 0 до 999', '');

    if (Number.isInteger(userNumber) && userNumber >= 0 && userNumber <=999) {
        objDischarge.units = userNumber % 10;
        objDischarge.tens = ((userNumber % 100) - (userNumber % 10)) / 10;
        objDischarge.hundereds = Math.floor(userNumber / 100);
        return objDischarge;
    } else {
        console.log('Вы ввели неверное число');
        question();
    }
}

question();

console.log('Во введённом числе:');
console.log(`${objDischarge.units} едениц`);
console.log(`${objDischarge.tens} десяток`);
console.log(`${objDischarge.hundereds} сотен`);