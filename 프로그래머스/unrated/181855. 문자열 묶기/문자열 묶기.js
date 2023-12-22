function solution(strArr) {
    const groups = {};

    let maxCount = 0;

    for (const str of strArr) {
        const length = str.length;

        if (!groups[length]) {
            groups[length] = [];
        }
        groups[length].push(str);

        const count = groups[length].length;
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}