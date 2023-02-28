function solution(my_string, letter) {
    var answer = '';
    
    //my_string을 배열로
    tmpArr = my_string.split('');
    tmpIdx = [];
    
    //배열 for문 돌면서 letter와 같다면 인덱스 저장
    for(let i = 0; i < tmpArr.length; i++) {
        if(tmpArr[i] == letter) {
            tmpIdx.push(i);
        }
    }
    
    //배열에서 인덱스 삭제 후 문자열로 변환
    tmpIdx.forEach(function(t) {
        delete tmpArr[t];
    })
    
    return tmpArr.join('');
}