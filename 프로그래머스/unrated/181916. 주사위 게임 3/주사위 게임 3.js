function solution(a, b, c, d) {
    let answer = 0;
    const origin = [a, b, c, d];
    const arr = [...new Set(origin)];

    if (arr.length == 4) {
        answer = Math.min(...arr);
    } else if (arr.length == 3) {
        const p = origin.reduce((max, num) => (origin.filter(x => x == max).length > origin.filter(x => x == num).length) ? max : num);
        const tmp = arr.filter(num => num != p);
        answer = tmp[0] * tmp[1];
    } else if (arr.length == 2) {
        if (Math.max(...arr.map(num => origin.filter(x => x == num).length)) > 2) {
            const p = origin.reduce((max, num) => (origin.filter(x => x == max).length > origin.filter(x => x == num).length) ? max : num);
            const q = origin.reduce((min, num) => (origin.filter(x => x == min).length < origin.filter(x => x == num).length) ? min : num);
            answer = Math.pow(10 * p + q, 2);
        } else {
            answer = (arr[0] + arr[1]) * Math.abs(arr[0] - arr[1]);
        }
    } else if (arr.length == 1) {
        answer = Number(arr[0].toString().repeat(4));
    }
    return answer;
}