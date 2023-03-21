function solution(my_string) {
  const numArr = my_string.match(/\d+/g);
  if (!numArr) return 0;
  const sum = numArr.reduce((acc, cur) => acc + parseInt(cur), 0);
  return sum;
}