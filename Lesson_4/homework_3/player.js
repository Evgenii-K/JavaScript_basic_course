'use strict';

const player = {
    questionNumber: 0,
    rightAnswer: 0,

    move(nextQuestion) {
        this.questionNumber = nextQuestion.question;
        this.rightAnswer = nextQuestion.answer;
    }
};