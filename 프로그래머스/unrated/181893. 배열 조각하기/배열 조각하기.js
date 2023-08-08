function solution(arr, query) {
    for(let i = 0 ; i < query.length ; i ++) {
        const val = query[i]
        
        if(i%2 == 0) {
            arr.splice(val+1, arr.length -(val+1));
        } else {
            arr.splice(0, val);
        }
    }
    return arr;
}