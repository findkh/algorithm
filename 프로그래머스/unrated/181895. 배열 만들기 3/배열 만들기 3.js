function solution(arr, intervals) {
    var result = [];
    intervals.forEach(data => {
        result = result.concat(arr.slice(data[0], data[1] + 1));
    })
    return result;
}