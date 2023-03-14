function solution(n) {
  let result = [];
  let startN = 2;
  
  while (n >= 2) {
    if (n % startN === 0) {
      result.push(startN)
      n = n / startN;
    } else {
        startN ++;
    }
  }
  
  return [...new Set(result)];
}