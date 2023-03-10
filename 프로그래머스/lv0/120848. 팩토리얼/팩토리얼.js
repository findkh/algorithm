function solution(n) {
    let result = 0;
    for(let i = 1; i <= 10; i++) {
        if(n >= factorial(i)) {
            result = i;
            continue;
        } else {
            break;
        }
    }
    return result;
}

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : n;
}