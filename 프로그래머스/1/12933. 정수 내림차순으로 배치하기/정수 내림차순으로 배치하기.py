def solution(n):
    sorted_list = sorted(list(str(n)), reverse=True)
    return int(''.join(sorted_list))