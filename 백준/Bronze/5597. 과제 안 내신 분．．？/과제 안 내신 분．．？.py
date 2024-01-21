# 1부터 30까지의 출석번호 리스트 생성
all_students = list(range(1, 31))

# 제출한 학생의 출석번호 받기
submitted_students = [int(input()) for _ in range(28)]

# 빠진 출석번호 찾기
missing_students = list(set(all_students) - set(submitted_students))

# 빠진 출석번호 정렬 후 출력
missing_students.sort()
print(missing_students[0])
print(missing_students[1])
