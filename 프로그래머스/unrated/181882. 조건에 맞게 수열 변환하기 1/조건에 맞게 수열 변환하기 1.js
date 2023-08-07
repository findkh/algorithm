function solution(arr) {
    const result = arr.map(data => {
        if (data >= 50 && data % 2 === 0) {
            return data / 2;
        } else if (data < 50 && data % 2 !== 0) {
            return data * 2;
        } else {
            return data;
        }
    });
    return result;
}