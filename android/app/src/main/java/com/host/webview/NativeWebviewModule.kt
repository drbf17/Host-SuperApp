package com.host.webview

import android.content.Intent
import com.nativeWebview.NativeWebviewSpec
import com.facebook.react.bridge.ReactApplicationContext
import com.host.MainWebviewActivity

class NativeWebviewModule(reactContext: ReactApplicationContext) : NativeWebviewSpec(reactContext) {

    override fun getName() = NAME

    override fun open() {
        val intent = Intent(reactApplicationContext, MainWebviewActivity::class.java)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        reactApplicationContext.startActivity(intent)
    }

    companion object {
        const val NAME = "NativeWebview"
    }
}