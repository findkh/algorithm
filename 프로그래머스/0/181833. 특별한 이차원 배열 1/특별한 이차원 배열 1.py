def solution(n):
    # n x n 배열을 0으로 초기화
    arr = [[0] * n for _ in range(n)]
    
    # 대각선에 해당하는 위치에 1을 할당
    for i in range(n):
        arr[i][i] = 1
    
    return arr