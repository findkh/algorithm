import sys

remainders = set()

for line in sys.stdin.readlines():
    number = int(line.strip())  # 개행 문자를 제거 숫자로 변환
    remainder = number % 42
    remainders.add(remainder)

result = len(remainders)
print(result)