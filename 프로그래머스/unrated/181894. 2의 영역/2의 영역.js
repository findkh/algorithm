function solution(arr) {
    const indexesOf2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
          indexesOf2.push(i);
        }
    }

    if (indexesOf2.length >= 2) {
        const startIndex = indexesOf2[0];
        const endIndex = indexesOf2[indexesOf2.length - 1];
        return arr.slice(startIndex, endIndex + 1);
    } else if (indexesOf2.length == 1) {
        return [2];
    } else {
        return [-1];
    }
}