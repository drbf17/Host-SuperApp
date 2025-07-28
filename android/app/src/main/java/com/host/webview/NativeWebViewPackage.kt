package com.host.webview

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeWebviewPackage : BaseReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
        if (name == NativeWebviewModule.NAME) {
            NativeWebviewModule(reactContext)
        } else {
            null
        }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            NativeWebviewModule.NAME to ReactModuleInfo(
                name = NativeWebviewModule.NAME,
                className = NativeWebviewModule.NAME,
                canOverrideExistingModule = false,
                needsEagerInit = false,
                isCxxModule = false,
                isTurboModule = true
            )
        )
    }
}