T = int(input())

for _ in range(T):
    R, S = input().split()
    P_list = [char * int(R) for char in S]
    P = ''.join(P_list)
    print(P)