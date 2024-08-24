def solution(n):
    strList = list(str(n))[::-1]
    answer = [int(c) for c in strList]
    return answer