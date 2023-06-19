function solution(arr, queries) {
    queries.forEach(i => {
        let tmp = arr[i[0]];
        arr[i[0]] = arr[i[1]];
        arr[i[1]] = tmp;
    })
    return arr;
}
