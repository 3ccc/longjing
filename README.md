## 介绍
### 概要
小应用调用
包括OS和外置设备(远期支持)，如读卡器
### 窗口
主窗口：软件的主窗口
子窗口：通过主窗口新开的子窗口，新窗口是全屏显示的
屏保窗口：无操作时出来的子窗口
### 方法
窗口发起的函数
#### 升级(upgrade)
升级小应用(离线小应用可以，在线小应用无需升级)，升级后重启小应用后生效。

```
var updateZipUrl = 'http://www.testUpdate.com/update.zip'; // 升级包路径
longjing.upgrade({url: updateZipUrl});
```

#### 打开新的子窗口(openChildWindow)
主窗口执行。打开新的子窗口全屏显示，一般启动在在小应用里的链接 
离线地址是相对地址 
在线地址是绝对地址 
注：该方法仅限于在主窗口内使用。
```
type == offline; // 离线包
path = 'index.html#mall'; // 单页路由
path = 'index.html#/mall'; // 单页路由
path = 'mall/index.html'; // 多页
type == online; // 在线网址
path = 'http://www.xxx.com/xx.html';
longjing.openChildWindow({
type: 'online', // online 在线，offline 离线
path: path
});
```

#### 关闭当前子窗口(closeChildWindow)
子窗口执行。关闭后回到主窗口 
注：该方法仅限于在子窗口内使用。
```
url = 'http://www.xxx.com/xxxx.html'; // 绝对路径的链接
longjing.closeChildWindow(); // 仅关闭子窗口
longjing.closeChildWindow(url); // 关闭子窗口，同时将主窗口的链接变更为url
```
#### 刷新主窗口(refreshMainWindow)
子窗口执行。部分主窗口的数据需要更新
```
longjing.refreshMainWindow();
```
#### 设置子窗口无操作的自动退出秒数(setChildWindowAutoCloseSecond)
子窗口超过秒数没有任何操作，自动退出回主窗口
```
longjing.setQuitTime({time: 60}); // 60秒
```
#### 将文字播放成语音(voice)
```
longjing.voice({id:'当前要播放的唯一标识',text:'播放成语音的文字'});
```
#### 主窗口页面加载完成通知app(loadSuccess)
```
longjing.loadSuccess();
```
#### 配置读写(config)
允许自定义配置

* 只读配置

|名称|	字段|	类型|	说明|
|--|--|--|--|
|终端号|	deviceNumber|	string|	N|
|商户号|	sellerId|	string|	N|
|网点号|	pointNo|	string|	N|
|小应用号|	appId	|string|	N|

* 获取配置

```
var config = longjing.config(); // 获取所有配置,返回json对象
var version = longjing.config('version'); // 获取指定配置
```

* 设置配置

```
longjing.config('version', 1.0); // 设置单项配置
longjing.config({'version': 1.0}); // 设置多项配置
```
### 通知
窗口接收到的事件通知，窗口进行相关业务处理
#### 格式

```
var options = {}; // 备用参数
longjing.notify('事件编码', function() {
// 处理 ...
}, options);
```

|事件编码|	事件|	说明|
|--|--|--|
|ENTER_SCREENSAVERS|	开始屏保|	主窗口在指定时间内没有操作，会进入屏保窗口|
|TTS_SPEAK|	播放语音结束|	文字转语音播放结束，返回播放时传入的唯一标识|
|APP_SHOW|	页面开始载入|	webview加载页面时，提示加载窗口，用于页面特效执行|
