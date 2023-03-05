const obj = {
    0 : "5",
    2 : "0",
    5 : "2"
}

function solution(rsp) {
    let str = '';
    for(let i = 0; i < rsp.length; i++) {
        str += obj[rsp[i]];
    }

    return str;
}