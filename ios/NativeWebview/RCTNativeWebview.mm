//
//  RCTNativeWebview.mm
//  Host
//
//  Created by Dalmo Braga on 30/07/25.
//

#import "RCTNativeWebview.h"
#import <React/RCTLog.h>
#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>
#import <objc/runtime.h>

@implementation RCTNativeWebview

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(open:(NSString *)url)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    // Get the root view controller
    UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
    
    // Create WebView controller
    UIViewController *webViewController = [[UIViewController alloc] init];
    webViewController.view.backgroundColor = [UIColor whiteColor];
    
    // Create WKWebView
    WKWebView *webView = [[WKWebView alloc] initWithFrame:webViewController.view.bounds];
    webView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    
    // Load URL
    NSURL *nsUrl = [NSURL URLWithString:url];
    NSURLRequest *request = [NSURLRequest requestWithURL:nsUrl];
    [webView loadRequest:request];
    
    // Add close button
    UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:webViewController];
    webViewController.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] 
                                                         initWithBarButtonSystemItem:UIBarButtonSystemItemDone
                                                         target:self
                                                         action:@selector(closeWebView:)];
    
    // Store reference for closing
    objc_setAssociatedObject(webViewController.navigationItem.leftBarButtonItem, "navController", navController, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
    
    // Add WebView to controller
    [webViewController.view addSubview:webView];
    
    // Present modally
    [rootViewController presentViewController:navController animated:YES completion:nil];
  });
}

- (void)closeWebView:(UIBarButtonItem *)sender {
  UINavigationController *navController = objc_getAssociatedObject(sender, "navController");
  [navController dismissViewControllerAnimated:YES completion:nil];
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeWebviewSpecJSI>(params);
}
#endif

@end
