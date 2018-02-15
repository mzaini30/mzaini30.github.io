---
layout: post
title: Skrip Java untuk Webview Android
date: 2018-02-04 17:54:49
categories: pemrograman
tags: [skrip, android, java]
gambar: https://img1.liveinternet.ru/images/attach/d/1/133/354/133354845_caramembuatflatanime.jpg
---

Layout:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical" >

    <WebView
       android:id="@+id/webview01"
       android:layout_height="wrap_content"
       android:layout_width="fill_parent"
       android:layout_weight="1">
   </WebView>

</LinearLayout>
```

Skrip Java:

```java
package com.mzaini30.puasa2018;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.Window;
//import android.view.WindowManager;
import android.webkit.WebView;
import android.webkit.WebViewClient;
 
/*
 * Demo of creating an application to open any URL inside the application and clicking on any link from that URl
should not open Native browser but  that URL should open in the same screen.
 */
public class Puasa2018Activity extends Activity {
    /** Called when the activity is first created. */
 
    WebView web;
 
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.requestWindowFeature(Window.FEATURE_NO_TITLE);
//        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.main);
        
        web = (WebView) findViewById(R.id.webview01);
        web.setWebViewClient(new myWebClient());
        web.getSettings().setJavaScriptEnabled(true);
        web.loadUrl("file:///android_asset/index.html");
    }
 
    public class myWebClient extends WebViewClient
    {
        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {
            // TODO Auto-generated method stub
            super.onPageStarted(view, url, favicon);
        }
 
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
    }
 
    // To handle "Back" key press event for WebView to go back to previous screen.
   @Override
   public boolean onKeyDown(int keyCode, KeyEvent event)
  {
    if ((keyCode == KeyEvent.KEYCODE_BACK) && web.canGoBack()) {
        web.goBack();
        return true;
    }
    return super.onKeyDown(keyCode, event);
   }
}
```