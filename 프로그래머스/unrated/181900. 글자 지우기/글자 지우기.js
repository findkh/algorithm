function solution(my_string, indices) {
    let result = "";
    indices.sort((a, b) => a - b);
    
    let lastIndex = 0;
    for (let i = 0; i < indices.length; i++) {
        const currentIndex = indices[i];
        result += my_string.substring(lastIndex, currentIndex);
        lastIndex = currentIndex + 1;
    }
    result += my_string.substring(lastIndex);
    
    return result;
}