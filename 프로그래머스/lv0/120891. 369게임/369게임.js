function solution(order) {
    let count = 0;
    let orderArr = String(order).split('');
    
    for (let i = 0; i < orderArr.length; i++) {
        if (orderArr[i] === '3' || orderArr[i] === '6' || orderArr[i] === '9') {
          count++;
        }
    }
    return count;
}

