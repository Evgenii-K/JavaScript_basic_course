'use strict';

let questionAnswer = {
    // Метод для получения ответа от пользователя
    getAnswer() {
        // Возможные варианты ответов
        const availableAnswer = [1, 2, 3, 4];
        while (true) {
            let num = +prompt('Введите номер ответа.    ("Отмена" для выхода)', ''); // Присваиваем к num число которое ввёл пользователь
            // Проверяем ответ пользователя
            if (isNaN(num) || num == 0) {
                // Если ввёл не число, спрашиваем повторно действительно ли он хочет выйти
                // let conf = confirm("Вы действительно хотите выйти из игры?");
                if (confirm("Вы действительно хотите выйти из игры?")) {
                    return null;
                } else {
                    continue;
                }
            } else if (!availableAnswer.includes(num)) {
                console.log(num);
                alert('Введите число с номером ответа в диапазоне от 1 до 4.');
                continue;
            } else {
                return (num - 1);   // Отнимаем 1 для сравнения ответа пользователя с номером ответа в массиве 
            }
        }
    },

    getNextQuestion(userAnswer) {
        // Объявляем объект nextQuestion и присваиваем текущий номер вопроса и количество правильных ответов
        const nextQuestion = {
            question: player.questionNumber,
            answer: player.rightAnswer
        };

        nextQuestion.question++;

        // Если ответ был правильным, увеличиваем количество правильных ответов

        if (userAnswer === questions[player.questionNumber].answer) {
            nextQuestion.answer++;
        }

        return nextQuestion;
    }
};