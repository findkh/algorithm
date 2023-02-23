function solution(numer1, denom1, numer2, denom2) {
    let answer = [];

    //1. 분자에 각 상대 분모 값 곱해서 분자값을 만들고, 분모끼리 곱해서 분모값 만든다.
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom =  denom1 * denom2;
    let gcd = 1;

    //2. 분자값과 분모값의 최대 공약수 구하기
    for(let i = 2; i <= Math.min(numer, denom); i++) {
        if(numer % i == 0 && denom % i == 0) {
            gcd = i;
        }
    }

    //3. 분자와 분모를 최대 공약수로 나눈다.
    answer.push(numer / gcd, denom / gcd)
    return answer;
}