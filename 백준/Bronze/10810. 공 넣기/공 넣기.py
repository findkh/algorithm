N, M = map(int, input().split())

baskets = [0] * N  # 초기 바구니 설정

for _ in range(M):
    i, j, k = map(int, input().split())
    # print(f"i, j, k: {i, j, k}")

    for idx in range(i-1, j):
        baskets[idx] = k

    # print(f"After: {baskets}")

print(*baskets)

