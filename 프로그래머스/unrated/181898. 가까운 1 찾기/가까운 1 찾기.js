function solution(arr, idx) {
    var answer = [];
    for(let i=idx; i<arr.length; i++) {
        if(arr[i]==1){
            answer.push(i);
            break;
        }
    }
    return answer.length>0?Number(answer.join('')):-1;
}