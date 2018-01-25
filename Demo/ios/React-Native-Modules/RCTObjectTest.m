//
//  RCTObjectTest.m
//  Demo
//
//  Created by Evergrande on 2017/12/4.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTObjectTest.h"

@implementation RCTObjectTest

RCT_EXPORT_MODULE(RCTObjectTest);

// 对外提供调用方法 一个参数
RCT_EXPORT_METHOD(sendMessage:(NSString *)msg)
{
  NSLog(@"收到来自React-Native的消息:%@",msg);
}

// 对外提供调用方法 两个参数
RCT_EXPORT_METHOD(testNormalEvent:(NSString *)arg withMsg:(NSString *)msg)
{
  NSLog(@"收到来自React-Native的消息:%@,%@",arg,msg);
}

//  对外提供调用方法,演示Callback
RCT_EXPORT_METHOD(testCallbackEvent:(NSDictionary *)dictionary callback:(RCTResponseSenderBlock)callback)
{
  NSLog(@"当前名字为：%@",dictionary);
  NSArray *events=@[@"callback ", @"test ", @" array"];
  callback(@[[NSNull null],events]);
}



//  对外提供调用方法,演示Promise使用
RCT_REMAP_METHOD(testPromiseEvent,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events =@[@"Promise ",@"test ",@" array"];
  if (events) {
    resolve(events);
  } else {
    NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events", @"There were no events", error);
  }
}

@end
