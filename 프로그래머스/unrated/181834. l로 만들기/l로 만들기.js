function solution(myString) {
  const characters = myString.split('');

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] < 'l') {
      characters[i] = 'l';
    }
  }
  return characters.join('');
}