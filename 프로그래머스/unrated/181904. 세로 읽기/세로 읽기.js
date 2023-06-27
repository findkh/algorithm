function solution(my_string, m, c) {
    let strArr = [... my_string];
    let arr = [];
    let result = '';
    
    for(let i = 0; i < Math.floor(strArr.length / m); i++) {
        arr.push(strArr.slice(i*m, (i+1) * m));
    }
    
    arr.forEach(a => {
        result += a[c-1];
    })
    
    return result;
}