function solution(a, b, c) {
    let sum = a + b + c;
    let sumOf2Squares = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    let sumOf3Squares = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);

    if (a == b && b == c) {
        return sum * sumOf2Squares * sumOf3Squares;
    } else if (a == b || a == c || b == c) {
        return sum * sumOf2Squares;
    } else {
        return sum;
    }
}