package com.host

import android.app.Activity
import android.os.Bundle
import android.webkit.WebView
import android.widget.LinearLayout

class MainWebviewActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val layout = LinearLayout(this)
        val webView = WebView(this)
        layout.addView(webView, LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.MATCH_PARENT,
            LinearLayout.LayoutParams.MATCH_PARENT
        ))
        setContentView(layout)
        webView.loadData("<html><body><h1>Hello World - TurboModule WebView</h1></body></html>", "text/html", "UTF-8")
    }
}

