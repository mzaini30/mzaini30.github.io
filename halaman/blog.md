---
layout: post
title: Blog
date: 2018-03-03 15:21:00
---

<style type="text/css">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.tab section {
  display: none;
  padding: 20px 0 0;
  border-top: 1px solid #ddd;
}

.tab input {
  display: none;
}

.tab label {
  display: inline-block;
  margin: 0 0 -1px;
  padding: 15px 25px;
  font-weight: 600;
  text-align: center;
  color: #bbb;
  border: 1px solid transparent;
}

.tab label:before {
  font-family: fontawesome;
  font-weight: normal;
  margin-right: 10px;
}

.tab label[for*='1']:before {
  content: '\f17c';
}

.tab label[for*='2']:before {
  content: '\f21c';
}

.tab label[for*='3']:before {
  content: '\f21c';
}

.tab label:hover {
  color: #888;
  cursor: pointer;
}

.tab input:checked + label {
  color: #555;
  border: 1px solid #ddd;
  border-top: 2px solid orange;
  border-bottom: 1px solid #fff;
}

.tab #tab1:checked ~ #content1,
.tab #tab2:checked ~ #content2,
.tab #tab3:checked ~ #content3 {
  display: block;
}

@media screen and (max-width: 650px) {
  .tab label {
    font-size: 0;
  }

  .tab label:before {
    margin: 0;
    font-size: 18px;
  }
}
@media screen and (max-width: 400px) {
  .tab label {
    padding: 15px;
  }
}
</style>

<div class='tab'>
  
  <input id="tab1" type="radio" name="tabs" checked>
  <label for="tab1">My Blog</label>
    
  <input id="tab2" type="radio" name="tabs">
  <label for="tab2">Blogwalking</label>
    
  <input id="tab3" type="radio" name="tabs">
  <label for="tab3">Goodreads</label>
    
  <section id="content1" markdown='1'>

![](https://s25.postimg.org/vj0wybaf3/Screenshot_from_2018-03-03_16_09_42.png)

[Samudra Impian](http://samudraimpian76.blogspot.com)

Berisi puisi.

---

![](https://s25.postimg.org/vj0wyb2pb/Screenshot_from_2018-03-03_16_08_25.png)
	
[Zen Programming](/programming)

Tutorial programming.

  </section>
    
  <section id="content2" markdown='1'>

|-|-|
| Blog | Deskripsi |
|-|-|
| [Dewi](https://www.wattpad.com/user/dewisampurnaw) | Story of Dewi |
| [Dewie Dean](http://dewieajaa.blogspot.co.id/) | Ada kekuatan di balik kesederhanaan |
| [Heni Puspita](http://www.henipuspita.net/) | Catatan mama Rayyaan Razqa |
| [Hipwee](https://www.hipwee.com/) | Portal remaja kekinian |
| [IDN Times](https://www.idntimes.com/?gclid=CjwKCAiA8vPUBRAyEiwA8F1oDE2h5Vn6K73vk3mLqjperH5X3sj1qBuSzpEBSG0BoZEo3Y3jkiLzkBoC2mUQAvD_BwE) | The Voice of Millenials |
| [Info Astronomy](http://www.infoastronomy.org/) | Pelajari langit, lindungi bumi |
| [Japanese Station](https://japanesestation.com/) | Portal berita Jepang |
| [Kompi Teknologi Indonesia](http://www.kompitech.me/) | Menginspirasi, memotivasi, membuka wawasan masyarakat |
| [Konsultasi Syariah](https://konsultasisyariah.com/) | Konsultasi kesehatan dan tanya jawab pendidikan Islam |
| [Mahad Isy Karima](https://www.youtube.com/channel/UCXX1KQrPS2tFsKkvPcHcTUw) | Youtube Mahad Isy Karima |
| [My Satnite](https://www.mysatnite.com/) | Your story is our story |
| [Syufia](http://syufiayaumma.blogspot.co.id/) | Life |

  </section>
    
  <section id="content3">



  </section>
    
</div>