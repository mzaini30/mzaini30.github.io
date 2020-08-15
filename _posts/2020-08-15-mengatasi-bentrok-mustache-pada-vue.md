--- 
layout: post
title: Mengatasi bentrok mustache pada Vue
--- 

Di Vue, kita biasanya menggunakan mustache untuk binding data. Misalnya seperti ini:

```liquid
{% raw %}{{ data }}{% endraw %}
```

Tapi, yang jadi masalah adalah, mustache tersebut juga digunakan oleh Jekyll untuk binding data. Lalu, gimana solusinya?

Pakai `delimiters`. Contoh:

```
<< data >>
```

Terus di Javascript:

```javascript 
delimiters: ["<<", ">>"]
```