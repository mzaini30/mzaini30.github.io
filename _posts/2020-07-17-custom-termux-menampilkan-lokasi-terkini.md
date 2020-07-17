--- 
title: "Custom Termux (menampilkan lokasi terkini)"
tag: script
gambar: https://image.freepik.com/free-photo/close-up-male-traveler-holding-map-hand-standing-city-street_23-2148148630.jpg
--- 

```bash
cd 
cd ../usr/etc 
nano bash.bashrc
```

Lalu, tambahkan ini di akhir baris:

```bash 
PS1="\w: "
```

Maka, hasilnya seperti ini:

![Tampilan terminal Termux](https://i.ibb.co/RbVsJqL/IMG-20200717-154624.jpg)
