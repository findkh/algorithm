function solution(board) {
  const n = board.length;

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }

  let safeAreaCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        const isSafe = ![...Array(8)].some((_, k) => {
          const nx = i + [-1, -1, -1, 0, 0, 1, 1, 1][k];
          const ny = j + [-1, 0, 1, -1, 1, -1, 0, 1][k];
          return isValid(nx, ny) && board[nx][ny] === 1;
        });

        if (isSafe) {
          safeAreaCount++;
        }
      }
    }
  }

  return safeAreaCount;
}