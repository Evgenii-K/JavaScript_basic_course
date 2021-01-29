'use strict';

let mover = {
    getDirection() {
        // Добавляем возможность ходить по диагонали
        const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = +prompt('Введите число, куда вы хотите переместиться. "Отмена" для выхода', '');
            if (isNaN(direction)) {
                return null;
            } else if (!availableDirection.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            } else {
                return direction;
            }
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };

        // Добавляем проверку не будет ли следующий ход в стенку

        if ( (player.y === 0 && [7, 8, 9].includes(direction)) || 
        ((player.y === (config.rowsCount - 1)) && [1, 2, 3].includes(direction)) ||
        (player.x === 0 && [1, 4, 7].includes(direction)) ||
        ((player.x === (config.colsCount - 1)) && [3, 6, 9].includes(direction)) ) {
            return nextPosition;
        } else {
            switch (direction) {
                case 1:
                    nextPosition.x--;
                    nextPosition.y++;
                    break;
                case 2:
                    nextPosition.y++;
                    break;
                case 3:
                    nextPosition.x++;
                    nextPosition.y++;
                    break;
                case 4:
                    nextPosition.x--;
                    break;
                case 6:
                    nextPosition.x++;
                    break;
                case 7:
                    nextPosition.x--;
                    nextPosition.y--;
                    break;
                case 8:
                    nextPosition.y--;
                    break;
                case 9:
                    nextPosition.x++;
                    nextPosition.y--;
                    break;
            }
            return nextPosition;
        }
    }
};