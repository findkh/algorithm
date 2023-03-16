function solution(array, n) {
    array.sort();
    
    let arr = array.map((num) => {
        return Math.abs(n-num);
    })
    
    return array[arr.indexOf(Math.min(...arr))];
}