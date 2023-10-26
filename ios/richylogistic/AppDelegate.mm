#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

// #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // [GMSServices provideAPIKey:[[NSBundle mainBundle] objectForInfoDictionaryKey:@"AIzaSyBtsGzcNXOOYxuzW3mVpk6pTecej0anqJQ"]];
  // [GMSServices provideAPIKey:@"AIzaSyBtsGzcNXOOYxuzW3mVpk6pTecej0anqJQ"];
  self.moduleName = @"richylogistic";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
