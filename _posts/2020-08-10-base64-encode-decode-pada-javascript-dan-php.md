---
layout: post
title: Base64 Encode Decode pada Javascript dan PHP
category: javascript
---

## Javascript

### Encode

```javascript
btoa('kucing/garong')
```

### Decode

```javascript
atob('a3VjaW5nL2dhcm9uZw==')
```
## PHP

### Encode

```php
base64_encode('kucing/garong')
```

### Decode

```php
base64_decode('Kw==')
```
