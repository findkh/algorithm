function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share));
}
    
function factorial(n) {
    let num = BigInt(1);

    for (let i = 2; i <= n; i++) {
        num *= BigInt(i);
    }
    
    return num;
}