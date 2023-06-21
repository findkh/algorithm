function solution(n) {
    const answer = [];
    let x = n;
    answer.push(n);
    
    while (x > 0) {
        if(x % 2 == 0) {
            x = x / 2;
        } else {
            x = 3 * x + 1;
        }
        
        answer.push(x);

        if (x === 1) {
            break;
        }
    }
  
  return answer;
}