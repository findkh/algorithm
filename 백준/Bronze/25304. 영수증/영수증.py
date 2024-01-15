# 총 금액 입력
X = int(input())

# 물건의 종류 수 입력
N = int(input())

# 총 금액 계산을 위한 변수 초기화
total_cost = 0

# 물건의 가격과 개수를 입력받아 총 금액 계산
for _ in range(N):
    a, b = map(int, input().split())
    total_cost += a * b

# 결과 출력
if total_cost == X:
    print("Yes")
else:
    print("No")