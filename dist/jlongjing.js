!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("longjing",[],e):"object"==typeof exports?exports.longjing=e():n.longjing=e()}(window,function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(n,e){var t,o,r;window.ljTsEventAction={},window.onTsEvent=function(){var n;switch(arguments.length){case 1:n="string"==typeof arguments[0]?JSON.parse(arguments[0]):arguments[0],"function"==typeof ljTsEventAction[n.fn]&&ljTsEventAction[n.fn](n.data);break;case 2:"function"==typeof ljTsEventAction[arguments[0]]&&ljTsEventAction[arguments[0]](arguments[1])}},n.exports=(t=function(n,e){return e?JSON.stringify({fn:n,data:e}):JSON.stringify({fn:n})},o=function(){var n=arguments[0],e="object"==typeof arguments[1]?arguments[1]:null,o=null;if("object"==typeof arguments[1]?!0===arguments[2]:!0===arguments[1])try{return void 0!==(o=JSON.parse(window.tianshan.invokeApp(t(n,e)))).code&&0==o.code?o.data||{}:o}catch(r){return console.log(t(n,e),window.tianshan.invokeApp(t(n,e)),"tianshan return data is not json format",r),o}else try{window.tianshan.invokeApp(t(n,e))}catch(o){console.log("app run function has error",t(n,e),o)}},r={test:function(){return"driver is ok"},getAppID:function(){return o("getAppId",!0)},getPageType:function(){return o("getPageType",!0)},restart:function(){o("restart")},upgrade:function(n){o("upgrade",n)},open:function(n){o("open",n)},quit:function(n){o("quit",n)},readFile:function(n){return o("readFile",n,!0)},readConfig:function(){return o("readConfig",!0)},writeConfig:function(n){o("writeConfig",n)},setQuitTime:function(n){o("setQuitTime",n)},notifyMainPage:function(){o("notifyMainPage")},ttsSpeak:function(n){o("ttsSpeak",n)},loadSuccess:function(n){o("loadSuccess",n)},loaded:function(){o("loaded")}},function(n,e){return r[n]?"function"==typeof r[n]?r[n](e):r[n]:e?(e.callback&&e.callback(e),e.callbackFn&&e.callbackFn(e),void(e.fn&&e.fn(e))):null})},function(n,e,t){var o=t(0),r={getDeviceNumber:function(){return this.get().clientNumber||null},getSellerId:function(){return this.get().sellerId||null},getPointNo:function(){return this.get().pointNo||null},get:function(){var n=o("readFile",{path:"sys/client.json"})||{},e={};try{e=JSON.parse(n.content)}catch(t){e=n.content||{}}return e}},i=o("getAppID"),c={test:function(){return"hello world"},config:function(){var n=function(){var n=e(),t=arguments[0];if("object"==typeof t)for(var r in t)n[r]=t[r];else n[t]=arguments[1];o("writeConfig",{content:JSON.stringify(n)})},e=function(n){var e=o("readConfig")||{},t={};try{t="string"==typeof e.content?function(n){return"object"==typeof n?n:arguments.callee(JSON.parse(n))}(JSON.parse(e.content)||{}):e.content||{}}catch(n){t=e.content||{},console.log("读取配置时，数据处理异常")}if(n)switch(n){case"deviceNumber":return r.getDeviceNumber();case"sellerId":return r.getSellerId();case"pointNo":return r.getPointNo();case"appid":case"appId":case"appID":return"object"==typeof i?i.appId:i;default:return t[n]||null}return t};switch(arguments.length){case 2:n(arguments[0],arguments[1]);break;case 1:if("object"==typeof arguments[0]&&n(arguments[0]),"string"==typeof arguments[0])return e(arguments[0]);break;case 0:return e()}},openChildWindow:function(n){o("open",{type:n.type||"offline",url:n.path})},closeChildWindow:function(n){n?o("quit",{url:n}):o("quit")},refresh:function(n){o("refresh",{path:n})},upgrade:function(n){o("upgrade",{url:n.url}),this.ts("upgradeResult",function(){o("restart")})},setChildWindowAutoCloseSecond:function(n){o("setQuitTime",{time:n.time||n})},refreshMainWindow:function(){o("notifyMainPage")},getPageType:function(){return o("getPageType")},voice:function(n){o("ttsSpeak",n)},loadSuccess:function(n){o("loadSuccess",n)},loaded:function(n){o("loaded",n)},notify:function(n,e,t){switch(n){case"ENTER_SCREENSAVERS":n="inScreensaver";break;case"APP_CMD":n="NOTIFY_APP";break;case"TTS_SPEAK":n="TTS_SPEAK";break;case"APP_SHOW":case"show":n="APP_SHOW"}ljTsEventAction[n]=function(n){e&&e(n,t)}},ready:function(n){n()}};n.exports=c}])});