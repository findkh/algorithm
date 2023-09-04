function solution(my_string) {
    var answer = my_string.split(" ").filter(function(word) {
        return word != "";
    });
    
    return answer;
}