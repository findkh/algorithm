function solution(arr, delete_list) {
    const result = arr.filter(element => !delete_list.includes(element));
    
    return result;
}