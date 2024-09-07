def solution(rank, attendance):
    # 참석 가능한 학생들의 (등수, 번호) 리스트를 필터링
    available_students = []
    for i in range(len(rank)):
        if attendance[i]:  # 참석 가능한 학생인 경우에만
            available_students.append((rank[i], i))  # (등수, 학생 번호) 형태로 리스트에 추가
    
    # 등수(rank)를 기준으로 오름차순 정렬
    available_students.sort()
    
    print(available_students)
    
    # 상위 3명의 학생 번호 추출
    a = available_students[0][1]
    b = available_students[1][1]
    c = available_students[2][1]
    
    # 결과 계산
    return 10000 * a + 100 * b + c