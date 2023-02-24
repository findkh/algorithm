function solution(array) {
    //배열의 중복을 제거
    let newSet = [...new Set(array)];
    let cntArr = [];
    
    //for문 돌면서 count
    for(let i = 0; i < newSet.length; i++) {
        tempCnt = 0;
        for(let j = 0; j < array.length; j++) {
            if(newSet[i] == array[j]) {
                tempCnt++;
            }
        }
        cntArr.push(tempCnt);
    }

    //cntArr의 중복값 확인
    let checkCnt = 0;
    for(let k = 0; k < cntArr.length; k++) {
        if(cntArr[k] == Math.max(...cntArr)) {
            checkCnt++;
        }
    }

    if(checkCnt > 1) {
        return -1
    } else {
        return newSet[cntArr.indexOf(Math.max(...cntArr))]
    }   
}