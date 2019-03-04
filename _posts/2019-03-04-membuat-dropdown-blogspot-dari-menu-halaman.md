---
tag: pemrograman
layout: post
---

Bagaimana cara membuat menu dropdown di Blogspot?

Kalau cara biasa kan yang sudah beredar di internet kan susah ya, harus pakai HTML untuk ngeditnya. Nah, kali ini kita cuma pakai gadget Halaman saja.

Di gadget Halaman (list halaman), buat seperti di bawah ini:

```markdown
Menu 1
Menu 2
- Submenu 1
- Submenu 2
```

Nah, di bawah ini adalah skrip untuk meng-compile yang berawalan `- ` menjadi submenu:

```javascript
$("#PageList500 .widget-content").each(function(){
  var e="<ul id='nav' class='dropdown dropit'><li><ul id='sub-menu'>";
  $("#PageList500 .widget-content li").each(function(){
    var t=$(this).text(),n=t.substr(0,2),r=t.substr(2);
    "- "==n?(n=$(this).find("a").attr("href"),e+='<li><a href="'+n+'">'+r+"</a></li>"):(n=$(this).find("a").attr("href"),e+='</ul></li><li><a href="'+n+'">'+t+"</a><ul id='sub-menu'>")
  });
  e+="</ul></li></ul>";
  $(this).html(e);
  $("#PageList500 .widget-content ul").each(function(){
    var e=$(this);if(e.html().replace(/\s|&nbsp;/g,"").length==0)e.remove()
  });
  $("#PageList500 .widget-content li").each(function(){
    var e=$(this);
    if(e.html().replace(/\s|&nbsp;/g,"").length==0)e.remove()
  })
});
```