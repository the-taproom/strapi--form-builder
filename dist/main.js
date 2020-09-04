!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.StrapiFormBuilder=t():e.StrapiFormBuilder=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=35)}([function(e,t,r){"use strict";var n=r(3),o=r(14),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(17),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t)&&(a=r(4)),a),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){u.headers[e]=n.merge(i)})),e.exports=u}).call(this,r(16))},function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:s,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],s=i.obj[i.prop],a=Object.keys(s),u=0;u<a.length;++u){var c=a[u],f=s[c];"object"==typeof f&&null!==f&&-1===r.indexOf(f)&&(t.push({obj:s,prop:c}),r.push(f))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)void 0!==r[i]&&n.push(r[i]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",s=0;s<n.length;++s){var a=n.charCodeAt(s);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?o+=n.charAt(s):a<128?o+=i[a]:a<2048?o+=i[192|a>>6]+i[128|63&a]:a<55296||a>=57344?o+=i[224|a>>12]+i[128|a>>6&63]+i[128|63&a]:(s+=1,a=65536+((1023&a)<<10|1023&n.charCodeAt(s)),o+=i[240|a>>18]+i[128|a>>12&63]+i[128|a>>6&63]+i[128|63&a])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,i){if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return o(t)&&!o(r)&&(a=s(t,i)),o(t)&&o(r)?(r.forEach((function(r,o){if(n.call(t,o)){var s=t[o];s&&"object"==typeof s&&r&&"object"==typeof r?t[o]=e(s,r,i):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var s=r[o];return n.call(t,o)?t[o]=e(t[o],s,i):t[o]=s,t}),a)}}},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0),o=r(18),i=r(20),s=r(21),a=r(22),u=r(5);e.exports=function(e){return new Promise((function(t,c){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,c,n),p=null}},p.onerror=function(){c(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var y=r(23),m=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;m&&(l[e.xsrfHeaderName]=m)}if("setRequestHeader"in p&&n.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),c(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},function(e,t,r){"use strict";var n=r(19);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i=r(2),s={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:s.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},s)},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(10));t.default=o.default},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(11));t.default=function(e,t,r){return new o.default(e,t,r)}},function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(r(12)),u=i(r(31)),c=i(r(32));t.default=class{constructor(e,t,r,n){if(this.domainSettings=t,this.axios=a.default.create(Object.assign({baseURL:e,paramsSerializer:c.stringify},n)),this.storeConfig=Object.assign({cookie:{key:"jwt",options:{path:"/"}},localStorage:{key:"jwt"}},r),this.isBrowser()){let e;this.storeConfig.cookie?e=u.get(this.storeConfig.cookie.key):this.storeConfig.localStorage&&(e=JSON.parse(window.localStorage.getItem(this.storeConfig.localStorage.key))),e&&this.setToken(e,!0)}}async request(e,t,r){try{(this.isBrowser()&&void 0===typeof this.getToken()||null===typeof this.getToken()&&this.domainSettings&&void 0!==this.domainSettings.token)&&await this.login(this.domainSettings.domain,this.domainSettings.token);return(await this.axios.request(Object.assign({method:e,url:t},r))).data}catch(e){throw e.response?new Error(e.response.data.message):e}}async register(e,t,r){this.clearToken();const n=await this.request("post","/auth/local/register",{data:{email:t,password:r,username:e}});return this.setToken(n.jwt),n}async login(e,t){if(this.clearToken(),!t)throw new Error("Could not log back in. password/token not set.");const r=await this.request("post","/auth/local",{data:{identifier:e,password:t}});return this.setToken(r.jwt),r}async forgotPassword(e,t){this.clearToken(),await this.request("post","/auth/forgot-password",{data:{email:e,url:t}})}async resetPassword(e,t,r){this.clearToken(),await this.request("post","/auth/reset-password",{data:{code:e,password:t,passwordConfirmation:r}})}getProviderAuthenticationUrl(e){return`${this.axios.defaults.baseURL}/connect/${e}`}async authenticateProvider(e,t){this.clearToken(),this.isBrowser()&&(t=c.parse(window.location.search,{ignoreQueryPrefix:!0}));const r=await this.request("get",`/auth/${e}/callback`,{params:t});return this.setToken(r.jwt),r}getEntries(e,t){return this.request("get","/"+e,{params:t})}getEntryCount(e,t){return this.request("get",`/${e}/count`,{params:t})}getEntry(e,t){return this.request("get",`/${e}/${t}`)}createEntry(e,t){return this.request("post","/"+e,{data:t})}updateEntry(e,t,r){return this.request("put",`/${e}/${t}`,{data:r})}deleteEntry(e,t){return this.request("delete",`/${e}/${t}`)}searchFiles(e){return this.request("get","/upload/search/"+decodeURIComponent(e))}getFiles(e){return this.request("get","/upload/files",{params:e})}getFile(e){return this.request("get","/upload/files/"+e)}upload(e,t){return this.request("post","/upload",Object.assign({data:e},t))}setToken(e,t){this.axios.defaults.headers.common.Authorization="Bearer "+e,this.isBrowser()&&!t&&(this.storeConfig.localStorage&&window.localStorage.setItem(this.storeConfig.localStorage.key,JSON.stringify(e)),this.storeConfig.cookie&&u.set(this.storeConfig.cookie.key,e,this.storeConfig.cookie.options))}getToken(){if(this.isBrowser()){if(this.storeConfig.localStorage)return window.localStorage.getItem(this.storeConfig.localStorage.key);if(this.storeConfig.cookie)return u.get(this.storeConfig.cookie.key)}}clearToken(){delete this.axios.defaults.headers.common.Authorization,this.isBrowser()&&(this.storeConfig.localStorage&&window.localStorage.removeItem(this.storeConfig.localStorage.key),this.storeConfig.cookie&&u.remove(this.storeConfig.cookie.key,this.storeConfig.cookie.options))}isBrowser(){return"undefined"!=typeof window}}},function(e,t,r){e.exports=r(13)},function(e,t,r){"use strict";var n=r(0),o=r(3),i=r(15),s=r(1);function a(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=a(s);u.Axios=i,u.create=function(e){return a(n.merge(s,e))},u.Cancel=r(7),u.CancelToken=r(29),u.isCancel=r(6),u.all=function(e){return Promise.all(e)},u.spread=r(30),e.exports=u,e.exports.default=u},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,r){"use strict";var n=r(1),o=r(0),i=r(24),s=r(25);function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],(function(e){a.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}})),o.forEach(["post","put","patch"],(function(e){a.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}})),e.exports=a},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],f=!1,l=-1;function p(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=a(p);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||f||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(5);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(26),i=r(6),s=r(1),a=r(27),u=r(28);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(7);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){var n,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(o="function"==typeof(n=i)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=i(),!!0){var s=window.Cookies,a=window.Cookies=i();a.noConflict=function(){return window.Cookies=s,a}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function i(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var s=JSON.stringify(r);/^[\{\[]/.test(s)&&(r=s)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var u in i)i[u]&&(a+="; "+u,!0!==i[u]&&(a+="="+i[u].split(";")[0]));return document.cookie=t+"="+r+a}}function s(e,r){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],s=0;s<i.length;s++){var a=i[s].split("="),u=a.slice(1).join("=");r||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var c=t(a[0]);if(u=(n.read||n)(u,c)||t(u),r)try{u=JSON.parse(u)}catch(e){}if(o[c]=u,e===c)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return s(e,!1)},o.getJSON=function(e){return s(e,!0)},o.remove=function(t,r){i(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},function(e,t,r){"use strict";var n=r(33),o=r(34),i=r(8);e.exports={formats:i,parse:o,stringify:n}},function(e,t,r){"use strict";var n=r(2),o=r(8),i=Object.prototype.hasOwnProperty,s={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Array.isArray,u=Array.prototype.push,c=function(e,t){u.apply(e,a(t)?t:[t])},f=Date.prototype.toISOString,l=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:l,formatter:o.formatters[l],indices:!1,serializeDate:function(e){return f.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,o,i,s,u,f,l,d,h,y,m,g){var v,b=t;if("function"==typeof f?b=f(r,b):b instanceof Date?b=h(b):"comma"===o&&a(b)&&(b=n.maybeMap(b,(function(e){return e instanceof Date?h(e):e})).join(",")),null===b){if(i)return u&&!m?u(r,p.encoder,g,"key"):r;b=""}if("string"==typeof(v=b)||"number"==typeof v||"boolean"==typeof v||"symbol"==typeof v||"bigint"==typeof v||n.isBuffer(b))return u?[y(m?r:u(r,p.encoder,g,"key"))+"="+y(u(b,p.encoder,g,"value"))]:[y(r)+"="+y(String(b))];var w,x=[];if(void 0===b)return x;if(a(f))w=f;else{var j=Object.keys(b);w=l?j.sort(l):j}for(var S=0;S<w.length;++S){var O=w[S],C=b[O];if(!s||null!==C){var k=a(b)?"function"==typeof o?o(r,O):r:r+(d?"."+O:"["+O+"]");c(x,e(C,k,o,i,s,u,f,l,d,h,y,m,g))}}return x};e.exports=function(e,t){var r,n=e,u=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],s=p.filter;return("function"==typeof e.filter||a(e.filter))&&(s=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:s,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof u.filter?n=(0,u.filter)("",n):a(u.filter)&&(r=u.filter);var f,l=[];if("object"!=typeof n||null===n)return"";f=t&&t.arrayFormat in s?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var h=s[f];r||(r=Object.keys(n)),u.sort&&r.sort(u.sort);for(var y=0;y<r.length;++y){var m=r[y];u.skipNulls&&null===n[m]||c(l,d(n[m],m,h,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.formatter,u.encodeValuesOnly,u.charset))}var g=l.join(u.delimiter),v=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),g.length>0?v+g:""}},function(e,t,r){"use strict";var n=r(2),o=Object.prototype.hasOwnProperty,i=Array.isArray,s={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},u=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},c=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,s=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(i),c=a?i.slice(0,a.index):i,f=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;f.push(c)}for(var l=0;r.depth>0&&null!==(a=s.exec(i))&&l<r.depth;){if(l+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(a[1])}return a&&f.push("["+i.slice(a.index)+"]"),function(e,t,r,n){for(var o=n?t:u(t,r),i=e.length-1;i>=0;--i){var s,a=e[i];if("[]"===a&&r.parseArrays)s=[].concat(o);else{s=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,f=parseInt(c,10);r.parseArrays||""!==c?!isNaN(f)&&a!==c&&String(f)===c&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(s=[])[f]=o:s[c]=o:s={0:o}}o=s}return o}(f,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return s;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?s.charset:e.charset;return{allowDots:void 0===e.allowDots?s.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:s.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:s.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:s.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:s.comma,decoder:"function"==typeof e.decoder?e.decoder:s.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:s.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:s.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:s.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:s.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:s.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:s.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var f="string"==typeof e?function(e,t){var r,c={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,p=f.split(t.delimiter,l),d=-1,h=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?h="utf-8":"utf8=%26%2310003%3B"===p[r]&&(h="iso-8859-1"),d=r,r=p.length);for(r=0;r<p.length;++r)if(r!==d){var y,m,g=p[r],v=g.indexOf("]="),b=-1===v?g.indexOf("="):v+1;-1===b?(y=t.decoder(g,s.decoder,h,"key"),m=t.strictNullHandling?null:""):(y=t.decoder(g.slice(0,b),s.decoder,h,"key"),m=n.maybeMap(u(g.slice(b+1),t),(function(e){return t.decoder(e,s.decoder,h,"value")}))),m&&t.interpretNumericEntities&&"iso-8859-1"===h&&(m=a(m)),g.indexOf("[]=")>-1&&(m=i(m)?[m]:m),o.call(c,y)?c[y]=n.combine(c[y],m):c[y]=m}return c}(e,r):e,l=r.plainObjects?Object.create(null):{},p=Object.keys(f),d=0;d<p.length;++d){var h=p[d],y=c(h,f[h],r,"string"==typeof e);l=n.merge(l,y,r)}return n.compact(l)}},function(e,t,r){"use strict";r.r(t),r.d(t,"BuildForm",(function(){return c}));var n=r(9),o=r.n(n),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((n=n.apply(e,t||[])).next())}))},a=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},u=function(){function e(e,t,r,n){this.acceptedTypes=["text","integer","media","component","boolean","enumeration","label"],this.blacklistedProps=["id","users"],this.whitelistKeys=["__component","__label"],this.apiContentType={},this.fields={},this.request={},this.apiID="",this.strapiSDK=r,this.existingModel=n,this.baseURL=e,this.url=this.baseURL+"/content-manager/content-types/"+t}return Object.defineProperty(e.prototype,"appUrl",{get:function(){return this.baseURL+"/"+this.apiID},enumerable:!1,configurable:!0}),e.prototype.getContentType=function(){return s(this,void 0,void 0,(function(){var e;return a(this,(function(t){switch(t.label){case 0:return[4,fetch(this.url)];case 1:return[4,t.sent().json()];case 2:return"object"!=typeof(e=t.sent())&&e.data?[2,{}]:(this.apiContentType=e.data,this.apiID=this.apiContentType.contentType.apiID,[2])}}))}))},e.prototype.create=function(e){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.strapiSDK.createEntry(this.apiID,e)];case 1:return[2,t.sent()]}}))}))},e.prototype.update=function(e,t){return s(this,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,this.strapiSDK.updateEntry(this.apiID,e,t)];case 1:return[2,r.sent()]}}))}))},e.prototype.search=function(e){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.strapiSDK.getEntries(this.apiID,e)];case 1:return[2,t.sent()]}}))}))},e.prototype.delete=function(e){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.strapiSDK.deleteEntry(this.apiID,e)];case 1:return[2,t.sent()]}}))}))},e.prototype.isBuildable=function(e){return e&&e.type&&this.acceptedTypes.includes(e.type)},e.prototype.isComponent=function(e){return"component"===e.type},e.prototype.isValidType=function(e,t){return t&&this.isBuildable(t)&&!this.isComponent(t)&&!1!==this.acceptedTypes.includes(t.type)&&!this.blacklistedProps.includes(e)},e.prototype.gatherSchema=function(e){var t=this;e=e||this.apiContentType.contentType.schema.attributes,Object.keys(e).map((function(r){if((!t.isComponent(e[r])&&t.isValidType(r,e[r])||t.whitelistKeys.includes(r))&&(t.fields[r]=e[r]),t.isComponent(e[r])){var n=e[r].component,o=t.apiContentType.components[n].schema.attributes;o.__component=n,o.__label=r,t.fields.content.push(o),t.gatherSchema(o)}}))},e.prototype.getFormSchema=function(){return s(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this.getContentType()];case 1:return e.sent(),this.gatherSchema(),this.request=i({},this.fields),[2,this.fields]}}))}))},e}(),c=function(e,t,r){return new u(e,t,o()(e,r))}}])}));