function solution(arr) {
    let x = 0;
    let prevStr = arr.join();

    while (true) {
        arr = arr.map((num) =>
            num >= 50 && num % 2 === 0 ? num / 2 : num < 50 && num % 2 === 1 ? num * 2 + 1 : num
        );

        const currentStr = arr.join();

        if (currentStr === prevStr) {
            break;
        }

        prevStr = currentStr;
        x++;
    }

    return x;
}