function solution(a, b) {
    // a와 b의 최대공약수를 구하는 함수
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    
    // a와 b의 최대공약수를 구하고 분모인 b를 약분
    const divisor = gcd(a, b);
    a /= divisor;
    b /= divisor;
    
    // b가 2와 5로만 이루어진 소인수를 갖는지 확인
    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }
    
    return b === 1 ? 1 : 2;
}