function solution(keyinput, board) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < keyinput.length; i++) {
        switch (keyinput[i]) {
            case 'up':
                if (y + 1 <= Math.floor(board[1] / 2)) {
                  y += 1;
                }
            break;
            case 'down':
                if (y - 1 >= -Math.floor(board[1] / 2)) {
                  y -= 1;
                }
            break;
            case 'left':
                if (x - 1 >= -Math.floor(board[0] / 2)) {
                  x -= 1;
                }
            break;
            case 'right':
                if (x + 1 <= Math.floor(board[0] / 2)) {
                  x += 1;
                }
            break;
        }
    }

    return [x, y];
}