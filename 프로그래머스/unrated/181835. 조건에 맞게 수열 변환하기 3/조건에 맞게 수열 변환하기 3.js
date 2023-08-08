function solution(arr, k) {
    const result = arr.map((val) => {
        if(k%2 == 0) {
            return val + k;
        } else {
            return val * k;
        }
    })
    return result;
}