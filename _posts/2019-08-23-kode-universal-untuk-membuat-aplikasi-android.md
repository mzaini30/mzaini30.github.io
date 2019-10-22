---
layout: post
category: pemrograman
---

```java
package com.example.sanggarbacacaraka;

import android.annotation.TargetApi;
import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import android.net.Uri;
import android.content.Intent;

public class MainActivity extends Activity {

   

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        setContentView(R.layout.activity_main);



        WebView webView = (WebView)findViewById(R.id.web);

         
         webView.getSettings().setJavaScriptEnabled(true);
         webView.getSettings().setDomStorageEnabled(true);


        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                

            if (url.contains("http://") || url.contains("https://")){ 
                    Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url)); 
                    startActivity(i); 
            } else {
                     view.loadUrl(url);
            } 
            return true; 




            }

				/*
            @TargetApi(Build.VERSION_CODES.N)
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return false;
            }
				*/
        });

        if (savedInstanceState != null) {
          webView.restoreState(savedInstanceState);
         } else {
            webView.loadUrl("file:///android_asset/index.html");
        }
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {


        WebView webView = (WebView)findViewById(R.id.web);



        if (event.getAction() == KeyEvent.ACTION_DOWN) {
            switch (keyCode) {
                case KeyEvent.KEYCODE_BACK:
                    if (webView.canGoBack()) {
                        webView.goBack();
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
        WebView webview = (WebView)findViewById(R.id.web);

      super.onSaveInstanceState(outState);
        webview.saveState(outState);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState)
    {
        WebView webview = (WebView)findViewById(R.id.web);

        super.onRestoreInstanceState(savedInstanceState);
        webview.restoreState(savedInstanceState);
    }

}
```
