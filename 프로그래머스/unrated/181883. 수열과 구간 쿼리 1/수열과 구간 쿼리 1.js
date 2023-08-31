function solution(arr, queries) {
    let result = [...arr];
    
    for (let query of queries) {
        let [s, e] = query;
        for (let i = s; i <= e; i++) {
            result[i] += 1;
        }
    }
    
    return result;
}