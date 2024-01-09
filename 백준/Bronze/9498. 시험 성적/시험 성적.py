# 시험 점수 입력 받기
score = int(input())

# 점수에 따른 성적 사전 정의
grade_dict = {range(90, 101): 'A', range(80, 90): 'B', range(70, 80): 'C', range(60, 70): 'D', range(0, 60): 'F'}

# 입력된 점수에 대응하는 성적 찾기
for score_range, grade in grade_dict.items():
    if score in score_range:
        result_grade = grade
        break

# 결과 출력
print(result_grade)