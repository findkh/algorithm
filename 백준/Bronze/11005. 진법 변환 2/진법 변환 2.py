N, B = map(int, input().split())
result = ''
while N > 0:
    remainder = N % B
    result = str(remainder if remainder < 10 else chr(remainder - 10 + ord('A'))) + result
    N //= B
print(result if result else '0')