---
title: "10 Perbedaan Antara Java dan Javascript (Eh Salah Ding, 3 Aja)"
layout: post
bahasa: Java
---

Terkadang nama yang sama membuat kita pangling. Seperti kata jamal dan jamaal, itu kan artinya beda. Kalau jamal itu artinya unta, kalau jamaal itu artinya ganteng. Ya, begitu pula dengan bahasa pemrograman. Java dan Javascript. Memang sekilas sepertinya sama aja. Padahal beda banget loh. Mau tau apa aja bedanya? Let's check out!

1. Kalau Java harus pakai titik koma (;), kalau Javascript nggak harus

	Contohnya kalau Java:

	```java
	public class MainActivity extends AppCompatActivity {
	    private AdView mAdView;
	    @Override
	    protected void onCreate(Bundle savedInstanceState) {
	        super.onCreate(savedInstanceState);
	        setContentView(R.layout.activity_main);
		}
	}
	```

	Kalau Javascript:

	```javascript
	nama = prompt('Sebutkan namamu: ')
	console.log('Halo, ' + nama + '!')
	```

	Ya bisa juga sih di Javascript pakai titik koma:

	```javascript
	nama = prompt('Sebutkan namamu: ')
	console.log('Halo, ' + nama + '!')
	```

2. Java itu untuk membuat berbagai bentuk aplikasi; seperti aplikasi bank (macam mesin ATM), desktop, Android, pertambangan, dan lain-lain. Sedangkan Javascript awalnya hanya untuk browser

	Walaupun memang saat ini Javascript merupakan bahasa yang populer digunakan untuk berbagai bentuk aplikasi seperti aplikasi server dengan kehadiran Node JS. Terus untuk static site generator dengan Gatsby. Terus bisa juga untuk maintenance dengan menggunakan Phantom JS. 

	Cuma memang kalau Java itu lebih dulu digunakan untuk memprogram berbagai alat manufaktur karena memang awalnya Java dibuat untuk tujuan itu.

3. Di Java harus dideklarasikan dulu modul apa aja yang diimport. Kalau Javascript nggak

	Contoh di Java:

	```java
	package com.mzaini30.nulisaja;

	import android.content.Intent;
	import android.net.Uri;
	import android.os.Bundle;
	import android.content.Context;
	import android.view.KeyEvent;
	import android.webkit.URLUtil;
	import android.webkit.WebSettings;
	import android.webkit.WebView;
	import android.webkit.WebViewClient;
	import androidx.appcompat.app.AppCompatActivity;
	
	import com.google.android.gms.ads.AdRequest;
	import com.google.android.gms.ads.AdView;
	import com.google.android.gms.ads.MobileAds;
	```

	Itu dipakai untuk meng-import berbagai modul yang kupakai untuk membuat aplikasi Android bernama Nulis Aja.

	Kalau di Javascript mah langsung aja. Misalnya mau menggunakan fungsi matematika, waktu, pengolahan string, dan lain sebagainya, langsung pakai aja. Kecuali memang ada beberapa fungsi yang itu nggak tersedia di Javascript, maka kita meng-import-nya dari Javascript eksternal dengan sintaks: `<script src=""></script>`.