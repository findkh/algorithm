function solution(arr, queries) {
    const result = [];
    
    queries.forEach(query => {
        const [start, end, k] = query; //배열 해체 할당
        
        const subArr = arr.slice(start, end + 1).filter(num => num > k);
        
        if (subArr.length === 0) {
            result.push(-1);
        } else {
            const minNum = Math.min(...subArr);
            result.push(minNum);
        }
    });
    
    return result;
}