function solution(arr, k) {
    const uniqueNumbers = new Set();
    const result = [];

    for (const num of arr) {
        if (!uniqueNumbers.has(num)) {
            uniqueNumbers.add(num);
            result.push(num);

            if (result.length === k) {
                return result;
            }
        }
    }

    for (let i = result.length; i < k; i++) {
        result.push(-1);
    }

    return result;
}