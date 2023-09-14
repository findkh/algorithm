function solution(strArr) {
    const filteredArr = strArr.filter(str => !str.includes('ad'));
    return filteredArr;
}