function solution(code) {
    let codeArr = [... code];
    let mode = 0;
    let ret = [];
    for(let i = 0; i < codeArr.length; i++) {
        if(mode == 0) {
            if(codeArr[i] != 1 && (i % 2 == 0)) {
                ret.push(codeArr[i]);
            }

            if(codeArr[i] == '1') {
                mode += 1;
            }
        } else {
            if(codeArr[i] != 1 && (i % 2 != 0)) {
                ret.push(codeArr[i]);
            }
            
            if(codeArr[i] == '1') {
                mode -= 1;
            }
        }
    } 
    
    return ret.length != 0 ? ret.join('') : 'EMPTY';
}