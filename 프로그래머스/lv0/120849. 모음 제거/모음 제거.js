function solution(my_string) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let strArr = [... my_string];
    let tmpIdxArr = [];
    
    // 모음인 단어의 인덱스를 배열에 저장
    for(let i = 0; i < strArr.length; i++) {
        vowel.forEach(function(v) {
            if(strArr[i] == v) {
                tmpIdxArr.push(i);
            }
        })
    }

    // 내림차순 정렬
    let sortArr = tmpIdxArr.sort(((a, b) => b - a));

    //배열에서 삭제
    for(let i = sortArr.length-1; i >= 0; i--) {
        delete strArr[sortArr[i]];
    }
        
    return strArr.join('');
}