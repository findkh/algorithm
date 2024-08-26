def solution(arr):
    answer = []
    
    for idx in range(len(arr)):
        if len(answer) == 0 or answer[-1] != arr[idx]:
            answer.append(arr[idx])
    
    return answer