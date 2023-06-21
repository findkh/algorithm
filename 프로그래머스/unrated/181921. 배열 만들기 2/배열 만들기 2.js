function solution(l, r) {
    const answer = [];

    for (let i = l; i <= r; i++) {
        let str = String(i);
        let flag = true;

        for (let j = 0; j < str.length; j++) {
            if (str[j] !== '0' && str[j] !== '5') {
                flag = false;
            break;
        }
    }

        if (flag) {
            answer.push(i);
        }
  }

  return answer.length > 0 ? answer : [-1];
}