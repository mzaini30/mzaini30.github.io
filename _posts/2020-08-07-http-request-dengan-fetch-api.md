--- 
layout: post
title: HTTP Request dengan Fetch API
--- 

## GET

```javascript
fetch("situs.com").then(x => x.json()).then(data => console.log(data))
```

## POST 

```javascript
body = new FormData
body.append("judul", this.judul)
body.append("isi", this.isi)
fetch("situs.com", {
 method: "post",
 body
})
```
