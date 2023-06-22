function solution(x1, x2, x3, x4) {
    if(tfCondition(x1, x2)==true && tfCondition(x3, x4)==true) {
        return true;
    } else {
        return false;
    }
}

function tfCondition(x, y) {
    if(x == true || y == true) {
        return true;
    } else {
        return false;
    }
}