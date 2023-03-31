function solution(quiz) {
  return quiz.map(equation => {
    const [x, operator, y, _, z] = equation.split(' ');
    return parseInt(x) + (operator === '+' ? parseInt(y) : -parseInt(y)) == parseInt(z) ? 'O' : 'X';
  });
}