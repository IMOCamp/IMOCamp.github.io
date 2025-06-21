import random

a = []

for _ in range(48):
    b = input()
    c = b.split('td')[3]
    d = random.random()
    a.append((c, d, b))

a.sort()

for c, d, b in a:
    print(b)