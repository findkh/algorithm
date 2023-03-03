function solution(s1, s2) {
    // 교집합
    let intersectionArr = s1.filter(x => s2.includes(x));
    
    return intersectionArr.length;
}