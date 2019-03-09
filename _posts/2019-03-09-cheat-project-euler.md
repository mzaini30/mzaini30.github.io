---
tag: pemrograman
layout: post
---

# 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

```python
angka = []
for n in range(1, 1000):
    if n % 3 == 0 or n % 5 == 0:
        angka.append(n)
print sum(angka)
```

# 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

```python
n = 600851475143
i = 2
while i * i < n:
    while n % i == 0:
        n /= i
    i += 1
print n
```

# 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.

Find the largest palindrome made from the product of two 3-digit numbers.

```python
satu = dua = range(100, 1000)[::-1]
hasil_kali = []
hasil_kali_palindrom = []
 
for x in satu:
    for y in dua:
        kali = x * y
        hasil_kali.append(kali)
for x in hasil_kali:
    if str(x) == str(x)[::-1]:
        hasil_kali_palindrom.append(x)
hasil_kali_palindrom.sort(reverse = True)
print hasil_kali_palindrom[0]
```

# 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

```python
n = 0
while True:
    n += 1
    print n
    if n % 1 == 0 and n % 2 == 0 and n % 3 == 0 and n % 4 == 0 and n % 5 == 0 and n % 6 == 0 and n % 7 == 0 and n % 8 == 0 and n % 9 == 0 and n % 10 == 0 and n % 11 == 0 and n % 12 == 0 and n % 13 == 0 and n % 14 == 0 and n % 15 == 0 and n % 16 == 0 and n % 17 == 0 and n % 18 == 0 and n % 19 == 0 and n % 20 == 0:
        break
```

# 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

```python
hi = 2000000
 
numbers = set(xrange(3, hi + 1, 2))
 
for number in xrange(3, int(hi ** 0.5) + 1):
    if number not in numbers:
        continue
 
    num = number
    while num < hi:
        num += number
        if num in numbers:
            numbers.remove(num)

print 2 + sum(numbers)
```