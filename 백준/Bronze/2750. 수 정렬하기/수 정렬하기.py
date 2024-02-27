N = int(input())
numbers = []

for _ in range(N):
    numbers.append(int(input()))

for num in sorted(numbers):
    print(num)
