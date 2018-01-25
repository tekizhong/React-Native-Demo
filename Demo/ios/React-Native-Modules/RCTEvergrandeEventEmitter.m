//
//  RCTEvergrandeEventEmitter.m
//  Demo
//
//  Created by Evergrande on 2017/12/4.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTEvergrandeEventEmitter.h"

@implementation RCTEvergrandeEventEmitter
RCT_EXPORT_MODULE();


- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];  // 这里注意要和 [self sendAppEventWithName:@"EventReminder" body:@{@"name": events}]; 里面发送的事件名字一致，不然JS 端不会识别
}



RCT_EXPORT_METHOD(testBridgeEvent)
{
  NSArray *events=@[@"callback ", @"test ", @" array"];
  [self sendEventWithName:@"EventReminder"
                     body:@{@"name": events}];
}

@end
