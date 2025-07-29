package com.host

import android.app.Activity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.LinearLayout

class MainWebviewActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Recuperar a URL do bundle
        val url = intent.extras?.getString("url") ?: "https://re-pack.dev/"
        
        val layout = LinearLayout(this)
        val webView = WebView(this)
        
        // Configurar a WebView
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.webViewClient = WebViewClient()
        
        layout.addView(webView, LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.MATCH_PARENT,
            LinearLayout.LayoutParams.MATCH_PARENT
        ))
        setContentView(layout)
        
        // Carregar a URL recebida
        webView.loadUrl(url)
    }
}

