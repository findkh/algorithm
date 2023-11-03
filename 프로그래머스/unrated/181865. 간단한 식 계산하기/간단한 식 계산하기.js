function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    const numA = parseInt(a);
    const numB = parseInt(b);

    let result = 0;
    if (op === '+') {
        result = numA + numB;
    } else if (op === '-') {
        result = numA - numB;
    } else if (op === '*') {
        result = numA * numB;
    }

    return result;
}