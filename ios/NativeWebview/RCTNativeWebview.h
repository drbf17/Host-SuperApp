//
//  RCTNativeWebview.h
//  Host
//
//  Created by Dalmo Braga on 30/07/25.
//

#import <Foundation/Foundation.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <NativeWebviewSpec/NativeWebviewSpec.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCTNativeWebview : NSObject <NativeWebviewSpec>
#else
#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCTNativeWebview : NSObject <RCTBridgeModule>
#endif

@end

NS_ASSUME_NONNULL_END
