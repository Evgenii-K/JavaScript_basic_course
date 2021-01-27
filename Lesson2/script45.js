'use strict';

/* 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return. */

function sum (a, b) {
    let c = a + b;
    return c;
}

function diff (a, b) {
    let c = a - b;
    return c;
}

function com (a, b) {
    let c = a * b;
    return c;
}

function div (a, b) {
    let c = a / b;
    return c;
}

/*5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций (использовать функции из задания 4) и вернуть полученное значение.*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
          console.log(sum(arg1, arg2));  
          break;
        case diff:
          console.log(diff(arg1, arg2));
          break;
        case com:
          console.log(com(arg1, arg2));
          break;
        case div:
          console.log(div(arg1, arg2));
          break;
        default:
          console.log("Неверный оператор");
      }
}