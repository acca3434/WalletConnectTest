(self.webpackChunkcompanytest=self.webpackChunkcompanytest||[]).push([[540],{1044:function(n,t,r){"use strict";r.d(t,{aesCbcDecrypt:function(){return B},aesCbcEncrypt:function(){return C},hmacSha256Sign:function(){return U},randomBytes:function(){return u}});var e=r(5503);function u(n){return e.getBrowerCrypto().getRandomValues(new Uint8Array(n))}var o=r(4165),i=r(5861),a=256,c=256,f="AES-CBC",s="SHA-".concat(a),y="HMAC",p=("aes-".concat(a,"-cbc"),"sha".concat(c),"encrypt"),l="decrypt",d="sign",g="verify";function m(n){return n===f?{length:a,name:f}:{hash:{name:s},name:y}}function b(n){return n===f?[p,l]:[d,g]}function h(n){return v.apply(this,arguments)}function v(){return v=(0,i.Z)((0,o.Z)().mark((function n(t){var r,u=arguments;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:f,n.abrupt("return",e.getSubtleCrypto().importKey("raw",t,m(r),!0,b(r)));case 2:case"end":return n.stop()}}),n)}))),v.apply(this,arguments)}function x(){return(x=(0,i.Z)((0,o.Z)().mark((function n(t,r,u){var i,a,c;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.getSubtleCrypto(),n.next=3,h(r,f);case 3:return a=n.sent,n.next=6,i.encrypt({iv:t,name:f},a,u);case 6:return c=n.sent,n.abrupt("return",new Uint8Array(c));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function A(){return(A=(0,i.Z)((0,o.Z)().mark((function n(t,r,u){var i,a,c;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.getSubtleCrypto(),n.next=3,h(r,f);case 3:return a=n.sent,n.next=6,i.decrypt({iv:t,name:f},a,u);case 6:return c=n.sent,n.abrupt("return",new Uint8Array(c));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)((0,o.Z)().mark((function n(t,r){var u,i,a;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=e.getSubtleCrypto(),n.next=3,h(t,y);case 3:return i=n.sent,n.next=6,u.sign({length:c,name:y},i,r);case 6:return a=n.sent,n.abrupt("return",new Uint8Array(a));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(n,t,r){return function(n,t,r){return x.apply(this,arguments)}(n,t,r)}function B(n,t,r){return function(n,t,r){return A.apply(this,arguments)}(n,t,r)}function U(n,t){return S.apply(this,arguments)}function S(){return(S=(0,i.Z)((0,o.Z)().mark((function n(t,r){var e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w(t,r);case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7055:function(n,t,r){"use strict";r.r(t),r.d(t,{addHexPrefix:function(){return pn},arrayToBinary:function(){return B},arrayToBuffer:function(){return A},arrayToHex:function(){return w},arrayToNumber:function(){return C},arrayToUtf8:function(){return T},binaryToArray:function(){return W},binaryToBuffer:function(){return O},binaryToHex:function(){return M},binaryToNumber:function(){return K},binaryToUtf8:function(){return $},bufferToArray:function(){return m},bufferToBinary:function(){return x},bufferToHex:function(){return b},bufferToNumber:function(){return v},bufferToUtf8:function(){return h},calcByteLength:function(){return en},concatArrays:function(){return nn},concatBuffers:function(){return _},getEncoding:function(){return Y},getType:function(){return Q},hexToArray:function(){return S},hexToBinary:function(){return Z},hexToBuffer:function(){return U},hexToNumber:function(){return E},hexToUtf8:function(){return D},isArrayBuffer:function(){return J},isBinaryString:function(){return V},isBuffer:function(){return q},isHexString:function(){return X},isTypedArray:function(){return G},numberToArray:function(){return N},numberToBinary:function(){return z},numberToBuffer:function(){return L},numberToHex:function(){return F},numberToUtf8:function(){return P},padLeft:function(){return fn},padRight:function(){return sn},removeHexLeadingZeros:function(){return dn},removeHexPrefix:function(){return yn},sanitizeBytes:function(){return cn},sanitizeHex:function(){return ln},splitBytes:function(){return un},swapBytes:function(){return on},swapHex:function(){return an},trimLeft:function(){return tn},trimRight:function(){return rn},utf8ToArray:function(){return k},utf8ToBinary:function(){return I},utf8ToBuffer:function(){return R},utf8ToHex:function(){return H},utf8ToNumber:function(){return j}});var e=r(3433),u=r(6170),o=r.n(u),i=r(4122),a=r.n(i),c="hex",f="utf8",s="binary",y="buffer",p="array",l="typed-array",d="array-buffer",g="0";function m(n){return new Uint8Array(n)}function b(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=n.toString(c);return t?pn(r):r}function h(n){return n.toString(f)}function v(n){return n.readUIntBE(0,n.length)}function x(n){return B(m(n))}function A(n){return a()(n)}function w(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return b(A(n),t)}function T(n){return h(A(n))}function C(n){return v(A(n))}function B(n){return Array.from(n).map(z).join("")}function U(n){return Buffer.from(yn(n),c)}function S(n){return m(U(n))}function D(n){return h(U(n))}function E(n){return C(S(n))}function Z(n){return B(S(n))}function R(n){return Buffer.from(n,f)}function k(n){return m(R(n))}function H(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return b(R(n),t)}function j(n){var t=parseInt(n,10);return function(n,t){if(!n)throw new Error(t)}(!function(n){return"undefined"===typeof n}(t),"Number can only safely store up to 53 bits"),t}function I(n){return B(k(n))}function L(n){return O(z(n))}function N(n){return W(z(n))}function F(n,t){return M(z(n),t)}function P(n){return"".concat(n)}function z(n){return cn((n>>>0).toString(2))}function O(n){return A(W(n))}function W(n){return new Uint8Array(un(n).map((function(n){return parseInt(n,2)})))}function M(n,t){return w(W(n),t)}function $(n){return T(W(n))}function K(n){return C(W(n))}function V(n){return!("string"!==typeof n||!new RegExp(/^[01]+$/).test(n))&&n.length%8===0}function X(n,t){return!("string"!==typeof n||!n.match(/^0x[0-9A-Fa-f]*$/))&&(!t||n.length===2+2*t)}function q(n){return Buffer.isBuffer(n)}function G(n){return o().strict(n)&&!q(n)}function J(n){return!G(n)&&!q(n)&&"undefined"!==typeof n.byteLength}function Q(n){return q(n)?y:G(n)?l:J(n)?d:Array.isArray(n)?p:typeof n}function Y(n){return V(n)?s:X(n)?c:f}function _(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return Buffer.concat(t)}function nn(){for(var n=[],t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];return r.forEach((function(t){return n=n.concat(Array.from(t))})),new Uint8Array((0,e.Z)(n))}function tn(n,t){var r=n.length-t;return r>0&&(n=n.slice(r)),n}function rn(n,t){return n.slice(0,t)}function en(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=n%t;return r?(n-r)/t*t+t:n}function un(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=cn(n).match(new RegExp(".{".concat(t,"}"),"gi"));return Array.from(r||[])}function on(n){return un(n).map(gn).join("")}function an(n){return M(on(Z(n)))}function cn(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;return fn(n,en(n.length,t),r)}function fn(n,t){return mn(n,t,!0,arguments.length>2&&void 0!==arguments[2]?arguments[2]:g)}function sn(n,t){return mn(n,t,!1,arguments.length>2&&void 0!==arguments[2]?arguments[2]:g)}function yn(n){return n.replace(/^0x/,"")}function pn(n){return n.startsWith("0x")?n:"0x".concat(n)}function ln(n){return(n=cn(n=yn(n),2))&&(n=pn(n)),n}function dn(n){var t=n.startsWith("0x");return n=(n=yn(n)).startsWith(g)?n.substring(1):n,t?pn(n):n}function gn(n){return n.split("").reverse().join("")}function mn(n,t,r){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g,u=t-n.length,o=n;if(u>0){var i=e.repeat(u);o=r?i+n:n+i}return o}},2229:function(n,t,r){"use strict";var e=r(3071),u={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";n.exports=function(n,t){var r,i,a,c,f,s,y=!1;t||(t={}),r=t.debug||!1;try{if(a=e(),c=document.createRange(),f=document.getSelection(),(s=document.createElement("span")).textContent=n,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(e){if(e.stopPropagation(),t.format)if(e.preventDefault(),"undefined"===typeof e.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=u[t.format]||u.default;window.clipboardData.setData(o,n)}else e.clipboardData.clearData(),e.clipboardData.setData(t.format,n);t.onCopy&&(e.preventDefault(),t.onCopy(e.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),f.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");y=!0}catch(p){r&&console.error("unable to copy using execCommand: ",p),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",n),t.onCopy&&t.onCopy(window.clipboardData),y=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),i=function(n){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return n.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:o),window.prompt(i,n)}}finally{f&&("function"==typeof f.removeRange?f.removeRange(c):f.removeAllRanges()),s&&document.body.removeChild(s),a()}return y}},6170:function(n){n.exports=e,e.strict=u,e.loose=o;var t=Object.prototype.toString,r={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function e(n){return u(n)||o(n)}function u(n){return n instanceof Int8Array||n instanceof Int16Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Uint16Array||n instanceof Uint32Array||n instanceof Float32Array||n instanceof Float64Array}function o(n){return r[t.call(n)]}},3071:function(n){n.exports=function(){var n=document.getSelection();if(!n.rangeCount)return function(){};for(var t=document.activeElement,r=[],e=0;e<n.rangeCount;e++)r.push(n.getRangeAt(e));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return n.removeAllRanges(),function(){"Caret"===n.type&&n.removeAllRanges(),n.rangeCount||r.forEach((function(t){n.addRange(t)})),t&&t.focus()}}},4122:function(n,t,r){var e=r(6170).strict;n.exports=function(n){if(e(n)){var t=Buffer.from(n.buffer);return n.byteLength!==n.buffer.byteLength&&(t=t.slice(n.byteOffset,n.byteOffset+n.byteLength)),t}return Buffer.from(n)}}}]);