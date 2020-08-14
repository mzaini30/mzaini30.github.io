---
layout: post
title: Apakah masih perlu Virtual DOM?
---

Aku mencoba script di bawah ini:

```html
<div id="isi"></div>
<input type="text" id="inputan" name="" onkeyup="ubah()">
<script type="text/javascript">
 isi = document.getElementById('isi')
 inputan = document.getElementById('inputan')
 ubah = () => isi.innerText = inputan.value
</script>
```

Bisa juga tuh mirip-mirip sama Virtual DOM.

Hasilnya bisa dilihat di <https://NegativeGleefulObservation--five-nine.repl.co>.
