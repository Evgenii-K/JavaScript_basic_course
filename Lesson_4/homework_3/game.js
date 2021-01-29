'use strict';

let game = {
    run() {
        renderer.clear();   // Очищаем консоль 
        renderer.render();  // Рендерим в консоли вопрос и варианты ответов
        const userAnswer = questionAnswer.getAnswer();   // К константе userAnswer присваиваем номер ответа пользователя 
        // Выход из игры если пришёл ответ null 
        if (userAnswer === null) {
            renderer.clear();
            console.log('Игра окончена');
            return;
        }
        // Сравниваем номер ответа пользователя с номером правильного ответа  
        if (userAnswer === questions[player.questionNumber].answer) {
            alert('Поздравляю, это правильный ответ!');
        } else {
            alert(`Увы, правильный ответ - ${questions[player.questionNumber].options[questions[player.questionNumber].answer]}`);
        }
        /* Отправляем номер ответа пользователя в метод getNextQuestion для получения 
           номера следующего вопроса и подсчёта правильных ответов */
        const nextQuestion = questionAnswer.getNextQuestion(userAnswer);
        // Отправляем в объект player номер следующего вопроса и количество правильных ответов
        player.move(nextQuestion);
        // Если номер следующего вопроса больше числа вопросов в игре останавливаем игру и выводим результат
        if (player.questionNumber >= questions.length) {
            // Сообщаем результат и спрашиваем не хочет ли пользователь сыграть ещё раз
            // Если Да, обнуляем результат и запускаем игру
            if (confirm(`Количество правильных ответов ${player.rightAnswer}. Хотите сыграть еще раз?`)) {
                player.questionNumber = 0;
                player.rightAnswer = 0;
                game.run();
            } else {
                player.questionNumber = 0;
                renderer.clear();
                console.log('Спасибо за игру!');
                return;
            }
        }
        // Продолжаем игру запустив метод заново
        game.run();
    },

    init() {
        renderer.clear();
        console.log('Приветствуем вас в игре "Кто хочет стать миллионером?".');
        console.log('Чтобы начать игру наберите start() и нажмите Enter.');
    }
};

// Функция для начала игры
function start() {
    game.run();
}

game.init();