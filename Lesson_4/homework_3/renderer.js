'use strict';

let renderer = {

    map: '',
    
    render() {
        this.map += questions[player.questionNumber].question;
        this.map += '\n \n';
        let i = 0;
        for(let row = 0; row <= 1; row++) {
            for(let col = 0; col <= 1; col++) {
                this.map += `${i+1}: ${questions[player.questionNumber].options[i]}   `;
                i++;                
            }
            this.map += '\n';
        }
        console.log(this.map);
    }, 

    clear() {
        console.clear();
        this.map = '';
    }
}; 