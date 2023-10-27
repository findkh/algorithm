function solution(myString) {
    const arr = myString.split('x').filter(str => str !== '');
    arr.sort();
    return arr;
}