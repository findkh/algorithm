for _ in range(100):
    try:
        line = input()
        if not line:
            break
        print(line)
    except EOFError:
        break