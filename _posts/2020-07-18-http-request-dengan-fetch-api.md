--- 
layout: post
title: HTTP Request dengan Fetch API
tag: script
gambar: https://image.freepik.com/free-photo/smiling-courier-with-packages_23-2147787781.jpg
--- 

**GET**

```javascript
fetch("situs.com/api").then(x => x.json()).then(data => console.log(data))
```

**POST**

```javascript
body = new FormData
body.append("nama", document.querySelector(".nama").value)
fetch("situs.com/api", {
 method: "post",
 body
})
```
