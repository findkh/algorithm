function solution(my_string, alp) {
    let strArr = my_string.split('');
    strArr.forEach((str,idx) => {
        if(str == alp){
            strArr[idx] = str.toUpperCase();
        }
    })
    return strArr.join('');
}