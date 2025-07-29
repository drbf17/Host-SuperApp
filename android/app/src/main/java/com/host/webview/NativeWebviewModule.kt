package com.host.webview

import android.content.Intent
import android.os.Bundle
import com.nativeWebview.NativeWebviewSpec
import com.facebook.react.bridge.ReactApplicationContext
import com.host.MainWebviewActivity

class NativeWebviewModule(reactContext: ReactApplicationContext) : NativeWebviewSpec(reactContext) {

    override fun getName() = NAME

    override fun open(url: String) {
        val intent = Intent(reactApplicationContext, MainWebviewActivity::class.java)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        
        // Adicionar a URL ao bundle
        val bundle = Bundle()
        bundle.putString("url", url)
        intent.putExtras(bundle)
        
        reactApplicationContext.startActivity(intent)
    }

    companion object {
        const val NAME = "NativeWebview"
    }
}