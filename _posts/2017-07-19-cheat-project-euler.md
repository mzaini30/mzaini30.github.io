---
layout: post
title: "Cheat Project Euler"
date: 2017-07-19 11:34:46
gambar: "http://www.imgbase.info/images/safe-wallpapers/anime/hyouka/21290_hyouka.jpg"
categories: pemrograman
tags: [cheat, python]
---

# Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

```python
angka = []
for n in range(1, 1000):
    if n % 3 == 0 or n % 5 == 0:
        angka.append(n)
print sum(angka)
```

# Problem 3

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

# Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

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

# Problem 10

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