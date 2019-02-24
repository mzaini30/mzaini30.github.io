---
layout: post
---

Berikut ini adalah cara yang biasa dan _selalu_ aku gunakan untuk membuat aplikasi Android. So, kalau ada yang kurang paham, langsung komentar aja di bawah ya. Siapa tau nanti bisa kuperbaiki lagi artikelnya.

# Persiapan

1. Membuat akun Play Store (sebagai marketplace aplikasi Android)
2. Membuat akun Admob (untuk pasang iklan)
3. Aplikasi yang perlu disiapkan
4. Skill yang perlu disiapkan
	1. Paham HTML dasar. Kalau bisa sih HTML5 juga
	2. Paham Javascript
	3. Paham CSS

		{% include more.html link='/2019/02/15/cara-menambahkan-custom-css-di-blogspot.html' %}

5. Library yang kita perlukan

	Berikut ini adalah beberapa library yang biasa kugunakan untuk membuat aplikasi Android berbasis web app ini. Library-library di bawah ini recommended. Karena selain kemudahan dan bisa dipakai, library selain library di bawah ini biasanya nggak bisa dipakai seperti Vue JS.

	1. Bootstrap CSS
	2. jQuery

# Membuat Aplikasi Website

Karena aplikasi Android yang akan kita buat ini adalah berbentuk webview app, maka kita buat dulu bentuk aplikasi websitenya. Contohnya aja di bawah ini ya:

1. Buat file bernama `index.html` dan `style.css`
2. Isi `index.html` dengan:

	```html
	<!DOCTYPE html>
	<html>
	<head>
		<title>Hello World</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<h1>Hello World</h1>
	</body>
	</html>
	```

3. Isi `style.css` dengan:

	```css
	body {
		width: 80%;
	}
	```

# Menyiapkan Kode Iklan

# Bundle ke dalam Android Studio

1. Persiapan

	1. Download dulu repositori project Android Studio di <https://github.com/mzaini30/nulis-aja-apk>
	2. Rename project tersebut menjadi `Hello World APK`

2. Edit-edit skrip

	1. Masukkan semua web app yang kamu buat ke folder `app/src/main/assets`
	2. Kemudian buka `app/src/main/res/values/strings.xml`. Maka akan tampil skrip berikut:

		```xml
		<resources>
		    <string name="app_name">Nulis Aja</string>
		</resources>
		```

		Ubah menjadi:

		```xml
		<resources>
		    <string name="app_name">Hello World</string>
		</resources>
		```

	3. Buka `app/src/main/res/layout/activity_main.xml`. Maka akan tampil:

		```xml
		<?xml version="1.0" encoding="utf-8"?>
		<RelativeLayout
		    xmlns:android="http://schemas.android.com/apk/res/android"
		    android:id="@+id/content_layout"
		    android:layout_width="match_parent"
		    android:layout_height="match_parent"
		    android:orientation="vertical" >
		    <WebView  xmlns:android="http://schemas.android.com/apk/res/android"
		        android:id="@+id/webview"
		        android:layout_width="match_parent"
		        android:layout_height="wrap_content"
		        android:layout_alignParentTop="true"
		        android:layout_alignParentLeft="true"
		        android:layout_above="@+id/adView" />
		    <com.google.android.gms.ads.AdView
		        xmlns:ads="http://schemas.android.com/apk/res-auto"
		        android:id="@+id/adView"
		        android:layout_width="match_parent"
		        android:layout_height="50dp"
		        android:layout_alignParentBottom="true"
		        android:layout_alignParentLeft="true"
		        android:layout_centerHorizontal="true"
		        android:layout_alignParentStart="true" ads:adSize="BANNER"
		        ads:adUnitId="ca-app-pub-2238217504982060/4420139664">
		    </com.google.android.gms.ads.AdView>
		</RelativeLayout>
		```

		Ubah di bagian `ca-app-pub-2238217504982060/4420139664` dengan kode iklan yang sudah kamu siapkan

	4. Kemudian perhatikan folder `app/src/main/java/com/mzaini30/nulisaja`. Nah, kalau dari folder itu, bisa diartikan bahwa nama paket APK-nya adalah `com.mzaini30.nulisaja`. Anggap aja nama APK-mu adalah `com.mzaini30.helloworld`, maka rename folder tersebut menjadi `app/src/main/java/com/mzaini30/helloworld`
	5. Buka `app/src/main/java/com/mzaini30/helloworld/MainActivity.java`. Maka akan tampil:

		```java
		package com.mzaini30.nulisaja;
		import android.content.Intent;
		import android.net.Uri;
		import android.os.Bundle;
		import android.content.Context;
		import android.view.KeyEvent;
		// import android.view.View;
		import android.webkit.URLUtil;
		// import android.webkit.WebChromeClient;
		import android.webkit.WebSettings;
		import android.webkit.WebView;
		import android.webkit.WebViewClient;
		import androidx.appcompat.app.AppCompatActivity;
		import com.google.android.gms.ads.AdRequest;
		import com.google.android.gms.ads.AdView;
		import com.google.android.gms.ads.MobileAds;
		public class MainActivity extends AppCompatActivity {
		    private AdView mAdView;
		    @Override
		    protected void onCreate(Bundle savedInstanceState) {
		        super.onCreate(savedInstanceState);
		        setContentView(R.layout.activity_main);
		        // AdMob banner ad test id: ca-app-pub-3940256099942544/6300978111
		        // my banner ad id: ca-app-pub-2878374163061282/6615438108
		        // change to your own ad id
		        // Change in MainActivity.java and activity_main.xml
		        MobileAds.initialize(this, "ca-app-pub-2238217504982060/4420139664");
		        mAdView = (AdView)findViewById(R.id.adView);
		        AdRequest adRequest = new AdRequest.Builder().build();
		        mAdView.loadAd(adRequest);
		        WebView webview = (WebView) findViewById(R.id.webview);
		        // webview.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
		        WebSettings webSettings = webview.getSettings();
		        webSettings.setJavaScriptEnabled(true);
		        webSettings.setDatabaseEnabled(true);
		        // settings.setJavaScriptEnabled(true);
		        // settings.setDomStorageEnabled(true);
		        // webSettings.setAllowUniversalAccessFromFileURLs(true);
		        // webSettings.setAllowFileAccessFromFileURLs(true);
		        // webSettings.setCacheMode(WebSettings.LOAD_NO_CACHE);
		        String databasePath = this.getApplicationContext().getDir("database", Context.MODE_PRIVATE).getPath();
		        webSettings.setDatabasePath(databasePath);
		        webSettings.setDomStorageEnabled(true);
		        webSettings.setSupportMultipleWindows(true); // enable chrome client?
		//        setContentView(webview);
		        // webview.setWebChromeClient(new WebChromeClient());
		        webview.setWebViewClient(new WebViewClient() {
		            @Override
		            public boolean shouldOverrideUrlLoading(WebView view, String url) {
		                // TODO Auto-generated method stub
		                if (url.contains("http://") || url.contains("https://")){
		                    Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
		                    startActivity(i);
		                } else {
		                    view.loadUrl(url);
		                }
		                return true;
		            }
		        });
		        // replace this with your own link/web app address
		        if (savedInstanceState == null) {
		            webview.loadUrl("file:///android_asset/index.html");
		        }
		    }
		    @Override
		    public boolean onKeyDown(int keyCode, KeyEvent event) {
		        WebView webview = (WebView) findViewById(R.id.webview);
		        if (event.getAction() == KeyEvent.ACTION_DOWN) {
		            switch (keyCode) {
		                case KeyEvent.KEYCODE_BACK:
		                    if (webview.canGoBack()) {
		                        webview.goBack();
		                    } else {
		                        finish();
		                    }
		                    return true;
		            }
		        }
		        return super.onKeyDown(keyCode, event);
		    }
		    @Override
		    protected void onSaveInstanceState(Bundle outState )
		    {
		        WebView webview = (WebView) findViewById(R.id.webview);
		        super.onSaveInstanceState(outState);
		        webview.saveState(outState);
		    }
		    @Override
		    protected void onRestoreInstanceState(Bundle savedInstanceState)
		    {
		        WebView webview = (WebView) findViewById(R.id.webview);
		        super.onRestoreInstanceState(savedInstanceState);
		        webview.restoreState(savedInstanceState);
		    }
		}
		```

		Nah, coba perhatikan pada `package com.mzaini30.nulisaja;`. Ubah menjadi `package com.mzaini30.helloworld;`

		Pada bagian `MobileAds.initialize(this, "ca-app-pub-2238217504982060/4420139664");` ubah pada bagian `ca-app-pub-2238217504982060/4420139664` dengan kode iklan yang sudah kamu dapatkan

	6. Buka `app/src/main/AndroidManifest.xml`. Maka akan tampil:

		```xml
		<?xml version="1.0" encoding="utf-8"?>
		<manifest xmlns:android="http://schemas.android.com/apk/res/android"
		    package="com.mzaini30.nulisaja">
		    <uses-permission android:name="android.permission.INTERNET" />
		    <application
		        android:allowBackup="true"
		        android:icon="@mipmap/ic_launcher"
		        android:label="@string/app_name"
		        android:roundIcon="@mipmap/ic_launcher_round"
		        android:supportsRtl="true"
		        android:theme="@style/AppTheme">
		        <activity android:name=".MainActivity" android:configChanges="orientation|screenSize">
		            <intent-filter>
		                <action android:name="android.intent.action.MAIN" />
		                <category android:name="android.intent.category.LAUNCHER" />
		            </intent-filter>
		        </activity>
		    </application>
		</manifest>
		```

		Perhatikan pada bagian `com.mzaini30.nulisaja`. Ubah menjadi `com.mzaini30.helloworld`

	7. Buka `app/build.gradle`. Maka akan tampil:

		```plaintext
		apply plugin: 'com.android.application'
		android {
		    compileSdkVersion 28
		    defaultConfig {
		        applicationId "com.mzaini30.nulisaja"
		        minSdkVersion 15
		        targetSdkVersion 28
		        versionCode 4
		        versionName "4"
		        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
		    }
		    buildTypes {
		        release {
		            minifyEnabled false
		            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
		        }
		    }
		}
		dependencies {
		    implementation fileTree(dir: 'libs', include: ['*.jar'])
		    implementation 'androidx.appcompat:appcompat:1.0.0-alpha1'
		    implementation 'androidx.constraintlayout:constraintlayout:1.1.0'
		    testImplementation 'junit:junit:4.12'
		    androidTestImplementation 'androidx.test:runner:1.1.0-alpha3'
		    androidTestImplementation 'androidx.test.espresso:espresso-core:3.1.0-alpha3'
		//    implementation 'com.android.support:appcompat-v7:28.0.0-alpha1'
		    implementation ('com.google.android.gms:play-services-ads:15.0.1') {
		        exclude module: 'support-v4'
		        exclude module: 'customtabs'
		    }
		//    implementation 'com.android.support:customtabs:28.0.0-alpha1'
		//    implementation 'com.android.support:support-v4:28.0.0-alpha1'
		}
		```

		Pada bagian `applicationId "com.mzaini30.nulisaja"` ubah menjadi `applicationId "com.mzaini30.helloworld"`

		Pada bagian `versionCode 4` ubah menjadi `versionCode 1` karena ini APK versi 1

		Pada bagian `versionName "4"` ubah menjadi `versionName "1"` dengan alasan yang sama dengan yang di atas

# Upload ke Play Store