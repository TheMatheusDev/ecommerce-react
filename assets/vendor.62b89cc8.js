var Io=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O={exports:{}},H={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Kd=Object.getOwnPropertySymbols,J1=Object.prototype.hasOwnProperty,Z1=Object.prototype.propertyIsEnumerable;function eE(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function tE(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Gd=tE()?Object.assign:function(t,e){for(var n,r=eE(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)J1.call(n,o)&&(r[o]=n[o]);if(Kd){i=Kd(n);for(var a=0;a<i.length;a++)Z1.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu=Gd,ur=60103,Qd=60106;H.Fragment=60107;H.StrictMode=60108;H.Profiler=60114;var Yd=60109,Xd=60110,Jd=60112;H.Suspense=60113;var Zd=60115,ep=60116;if(typeof Symbol=="function"&&Symbol.for){var dt=Symbol.for;ur=dt("react.element"),Qd=dt("react.portal"),H.Fragment=dt("react.fragment"),H.StrictMode=dt("react.strict_mode"),H.Profiler=dt("react.profiler"),Yd=dt("react.provider"),Xd=dt("react.context"),Jd=dt("react.forward_ref"),H.Suspense=dt("react.suspense"),Zd=dt("react.memo"),ep=dt("react.lazy")}var tp=typeof Symbol=="function"&&Symbol.iterator;function nE(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}function yi(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rp={};function cr(t,e,n){this.props=t,this.context=e,this.refs=rp,this.updater=n||np}cr.prototype.isReactComponent={};cr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(yi(85));this.updater.enqueueSetState(this,t,e,"setState")};cr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ip(){}ip.prototype=cr.prototype;function vu(t,e,n){this.props=t,this.context=e,this.refs=rp,this.updater=n||np}var wu=vu.prototype=new ip;wu.constructor=vu;yu(wu,cr.prototype);wu.isPureReactComponent=!0;var Eu={current:null},sp=Object.prototype.hasOwnProperty,op={key:!0,ref:!0,__self:!0,__source:!0};function ap(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sp.call(e,r)&&!op.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ur,type:t,key:s,ref:o,props:i,_owner:Eu.current}}function rE(t,e){return{$$typeof:ur,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Su(t){return typeof t=="object"&&t!==null&&t.$$typeof===ur}function iE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lp=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iE(""+t.key):e.toString(36)}function ko(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ur:case Qd:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_u(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(lp,"$&/")+"/"),ko(i,e,n,"",function(u){return u})):i!=null&&(Su(i)&&(i=rE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_u(s,a);o+=ko(s,e,n,l,i)}else if(l=nE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_u(s,a++),o+=ko(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(yi(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Co(t,e,n){if(t==null)return t;var r=[],i=0;return ko(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sE(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var up={current:null};function Nt(){var t=up.current;if(t===null)throw Error(yi(321));return t}var oE={ReactCurrentDispatcher:up,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Eu,IsSomeRendererActing:{current:!1},assign:yu};H.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!Su(t))throw Error(yi(143));return t}};H.Component=cr;H.PureComponent=vu;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE;H.cloneElement=function(t,e,n){if(t==null)throw Error(yi(267,t));var r=yu({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Eu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sp.call(e,l)&&!op.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ur,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Xd,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Yd,_context:t},t.Consumer=t};H.createElement=ap;H.createFactory=function(t){var e=ap.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Jd,render:t}};H.isValidElement=Su;H.lazy=function(t){return{$$typeof:ep,_payload:{_status:-1,_result:t},_init:sE}};H.memo=function(t,e){return{$$typeof:Zd,type:t,compare:e===void 0?null:e}};H.useCallback=function(t,e){return Nt().useCallback(t,e)};H.useContext=function(t,e){return Nt().useContext(t,e)};H.useDebugValue=function(){};H.useEffect=function(t,e){return Nt().useEffect(t,e)};H.useImperativeHandle=function(t,e,n){return Nt().useImperativeHandle(t,e,n)};H.useLayoutEffect=function(t,e){return Nt().useLayoutEffect(t,e)};H.useMemo=function(t,e){return Nt().useMemo(t,e)};H.useReducer=function(t,e,n){return Nt().useReducer(t,e,n)};H.useRef=function(t){return Nt().useRef(t)};H.useState=function(t){return Nt().useState(t)};H.version="17.0.2";O.exports=H;var aE=O.exports,Tu={exports:{}},st={},cp={exports:{}},hp={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var k=t.unstable_now();l(!0,k),l=null}catch(b){throw setTimeout(c,0),b}};e=function(k){l!==null?setTimeout(e,0,k):(l=k,setTimeout(c,0))},n=function(k,b){u=setTimeout(k,b)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,f=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var E=!1,w=null,p=-1,d=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):d=0<k?Math.floor(1e3/k):5};var v=new MessageChannel,y=v.port2;v.port1.onmessage=function(){if(w!==null){var k=t.unstable_now();m=k+d;try{w(!0,k)?y.postMessage(null):(E=!1,w=null)}catch(b){throw y.postMessage(null),b}}else E=!1},e=function(k){w=k,E||(E=!0,y.postMessage(null))},n=function(k,b){p=h(function(){k(t.unstable_now())},b)},r=function(){f(p),p=-1}}function I(k,b){var B=k.length;k.push(b);e:for(;;){var oe=B-1>>>1,Ee=k[oe];if(Ee!==void 0&&0<x(Ee,b))k[oe]=b,k[B]=Ee,B=oe;else break e}}function S(k){return k=k[0],k===void 0?null:k}function P(k){var b=k[0];if(b!==void 0){var B=k.pop();if(B!==b){k[0]=B;e:for(var oe=0,Ee=k.length;oe<Ee;){var In=2*(oe+1)-1,kn=k[In],gi=In+1,lr=k[gi];if(kn!==void 0&&0>x(kn,B))lr!==void 0&&0>x(lr,kn)?(k[oe]=lr,k[gi]=B,oe=gi):(k[oe]=kn,k[In]=B,oe=In);else if(lr!==void 0&&0>x(lr,B))k[oe]=lr,k[gi]=B,oe=gi;else break e}}return b}return null}function x(k,b){var B=k.sortIndex-b.sortIndex;return B!==0?B:k.id-b.id}var N=[],ue=[],du=1,it=null,Oe=3,To=!1,Tn=!1,mi=!1;function pu(k){for(var b=S(ue);b!==null;){if(b.callback===null)P(ue);else if(b.startTime<=k)P(ue),b.sortIndex=b.expirationTime,I(N,b);else break;b=S(ue)}}function mu(k){if(mi=!1,pu(k),!Tn)if(S(N)!==null)Tn=!0,e(gu);else{var b=S(ue);b!==null&&n(mu,b.startTime-k)}}function gu(k,b){Tn=!1,mi&&(mi=!1,r()),To=!0;var B=Oe;try{for(pu(b),it=S(N);it!==null&&(!(it.expirationTime>b)||k&&!t.unstable_shouldYield());){var oe=it.callback;if(typeof oe=="function"){it.callback=null,Oe=it.priorityLevel;var Ee=oe(it.expirationTime<=b);b=t.unstable_now(),typeof Ee=="function"?it.callback=Ee:it===S(N)&&P(N),pu(b)}else P(N);it=S(N)}if(it!==null)var In=!0;else{var kn=S(ue);kn!==null&&n(mu,kn.startTime-b),In=!1}return In}finally{it=null,Oe=B,To=!1}}var X1=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){Tn||To||(Tn=!0,e(gu))},t.unstable_getCurrentPriorityLevel=function(){return Oe},t.unstable_getFirstCallbackNode=function(){return S(N)},t.unstable_next=function(k){switch(Oe){case 1:case 2:case 3:var b=3;break;default:b=Oe}var B=Oe;Oe=b;try{return k()}finally{Oe=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=X1,t.unstable_runWithPriority=function(k,b){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var B=Oe;Oe=k;try{return b()}finally{Oe=B}},t.unstable_scheduleCallback=function(k,b,B){var oe=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?oe+B:oe):B=oe,k){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=B+Ee,k={id:du++,callback:b,priorityLevel:k,startTime:B,expirationTime:Ee,sortIndex:-1},B>oe?(k.sortIndex=B,I(ue,k),S(N)===null&&k===S(ue)&&(mi?r():mi=!0,n(mu,B-oe))):(k.sortIndex=Ee,I(N,k),Tn||To||(Tn=!0,e(gu))),k},t.unstable_wrapCallback=function(k){var b=Oe;return function(){var B=Oe;Oe=b;try{return k.apply(this,arguments)}finally{Oe=B}}}})(hp);cp.exports=hp;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=O.exports,ne=Gd,pe=cp.exports;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Ro)throw Error(T(227));var fp=new Set,vi={};function Cn(t,e){hr(t,e),hr(t+"Capture",e)}function hr(t,e){for(vi[t]=e,t=0;t<e.length;t++)fp.add(e[t])}var At=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),lE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp=Object.prototype.hasOwnProperty,pp={},mp={};function uE(t){return dp.call(mp,t)?!0:dp.call(pp,t)?!1:lE.test(t)?mp[t]=!0:(pp[t]=!0,!1)}function cE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hE(t,e,n,r){if(e===null||typeof e=="undefined"||cE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function ku(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Iu,ku);Se[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Iu,ku);Se[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Iu,ku);Se[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cu(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(hE(e,n,i,r)&&(n=null),r||i===null?uE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=Ro.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=60103,Nn=60106,Bt=60107,Ru=60108,Ei=60114,Nu=60109,Au=60110,No=60112,Si=60113,Ao=60120,Po=60115,Pu=60116,Ou=60121,Du=60128,gp=60129,xu=60130,Lu=60131;if(typeof Symbol=="function"&&Symbol.for){var me=Symbol.for;wi=me("react.element"),Nn=me("react.portal"),Bt=me("react.fragment"),Ru=me("react.strict_mode"),Ei=me("react.profiler"),Nu=me("react.provider"),Au=me("react.context"),No=me("react.forward_ref"),Si=me("react.suspense"),Ao=me("react.suspense_list"),Po=me("react.memo"),Pu=me("react.lazy"),Ou=me("react.block"),me("react.scope"),Du=me("react.opaque.id"),gp=me("react.debug_trace_mode"),xu=me("react.offscreen"),Lu=me("react.legacy_hidden")}var yp=typeof Symbol=="function"&&Symbol.iterator;function _i(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var Mu;function Ti(t){if(Mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mu=e&&e[1]||""}return`
`+Mu+t}var bu=!1;function Oo(t,e){if(!t||bu)return"";bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ti(t):""}function fE(t){switch(t.tag){case 5:return Ti(t.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return t=Oo(t.type,!1),t;case 11:return t=Oo(t.type.render,!1),t;case 22:return t=Oo(t.type._render,!1),t;case 1:return t=Oo(t.type,!0),t;default:return""}}function fr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bt:return"Fragment";case Nn:return"Portal";case Ei:return"Profiler";case Ru:return"StrictMode";case Si:return"Suspense";case Ao:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Au:return(t.displayName||"Context")+".Consumer";case Nu:return(t._context.displayName||"Context")+".Provider";case No:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Po:return fr(t.type);case Ou:return fr(t._render);case Pu:e=t._payload,t=t._init;try{return fr(t(e))}catch{}}return null}function zt(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function vp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dE(t){var e=vp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=dE(t))}function wp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xo(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function $u(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sp(t,e){e=e.checked,e!=null&&Cu(t,"checked",e,!1)}function Uu(t,e){Sp(t,e);var n=zt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fu(t,e.type,zt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fu(t,e,n){(e!=="number"||xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function pE(t){var e="";return Ro.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Vu(t,e){return t=ne({children:void 0},e),(e=pE(e.children))&&(t.children=e),t}function dr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zt(n)}}function Ip(t,e){var n=zt(e.value),r=zt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Bu={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Cp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,Rp=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Bu.svg||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ii(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ki={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mE=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(t){mE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ki[e]=ki[t]})});function Np(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ki.hasOwnProperty(t)&&ki[t]?(""+e).trim():e+"px"}function Ap(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Np(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gE=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(gE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ku=null,pr=null,mr=null;function Pp(t){if(t=Hi(t)){if(typeof Ku!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Jo(e),Ku(t.stateNode,t.type,e))}}function Op(t){pr?mr?mr.push(t):mr=[t]:pr=t}function Dp(){if(pr){var t=pr,e=mr;if(mr=pr=null,Pp(t),e)for(t=0;t<e.length;t++)Pp(e[t])}}function Gu(t,e){return t(e)}function xp(t,e,n,r,i){return t(e,n,r,i)}function Qu(){}var Lp=Gu,An=!1,Yu=!1;function Xu(){(pr!==null||mr!==null)&&(Qu(),Dp())}function yE(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return Lp(t,e,n)}finally{Yu=!1,Xu()}}function Ci(t,e){var n=t.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Ju=!1;if(At)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{Ju=!1}function vE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ni=!1,Mo=null,bo=!1,Zu=null,wE={onError:function(t){Ni=!0,Mo=t}};function EE(t,e,n,r,i,s,o,a,l){Ni=!1,Mo=null,vE.apply(wE,arguments)}function SE(t,e,n,r,i,s,o,a,l){if(EE.apply(this,arguments),Ni){if(Ni){var u=Mo;Ni=!1,Mo=null}else throw Error(T(198));bo||(bo=!0,Zu=u)}}function Pn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bp(t){if(Pn(t)!==t)throw Error(T(188))}function _E(t){var e=t.alternate;if(!e){if(e=Pn(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bp(i),t;if(s===r)return bp(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function $p(t){if(t=_E(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Up(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Fp,ec,Vp,jp,tc=!1,wt=[],Ht=null,Wt=null,qt=null,Ai=new Map,Pi=new Map,Oi=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nc(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function zp(t,e){switch(t){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Ai.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(e.pointerId)}}function Di(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=nc(e,n,r,i,s),e!==null&&(e=Hi(e),e!==null&&ec(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TE(t,e,n,r,i){switch(e){case"focusin":return Ht=Di(Ht,t,e,n,r,i),!0;case"dragenter":return Wt=Di(Wt,t,e,n,r,i),!0;case"mouseover":return qt=Di(qt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ai.set(s,Di(Ai.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pi.set(s,Di(Pi.get(s)||null,t,e,n,r,i)),!0}return!1}function IE(t){var e=On(t.target);if(e!==null){var n=Pn(e);if(n!==null){if(e=n.tag,e===13){if(e=Mp(n),e!==null){t.blockedOn=e,jp(t.lanePriority,function(){pe.unstable_runWithPriority(t.priority,function(){Vp(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Hi(n),e!==null&&ec(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){$o(t)&&n.delete(e)}function kE(){for(tc=!1;0<wt.length;){var t=wt[0];if(t.blockedOn!==null){t=Hi(t.blockedOn),t!==null&&Fp(t);break}for(var e=t.targetContainers;0<e.length;){var n=lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&wt.shift()}Ht!==null&&$o(Ht)&&(Ht=null),Wt!==null&&$o(Wt)&&(Wt=null),qt!==null&&$o(qt)&&(qt=null),Ai.forEach(Hp),Pi.forEach(Hp)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,tc||(tc=!0,pe.unstable_scheduleCallback(pe.unstable_NormalPriority,kE)))}function Wp(t){function e(i){return xi(i,t)}if(0<wt.length){xi(wt[0],t);for(var n=1;n<wt.length;n++){var r=wt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ht!==null&&xi(Ht,t),Wt!==null&&xi(Wt,t),qt!==null&&xi(qt,t),Ai.forEach(e),Pi.forEach(e),n=0;n<Oi.length;n++)r=Oi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)IE(n),n.blockedOn===null&&Oi.shift()}function Uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gr={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},rc={},qp={};At&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Fo(t){if(rc[t])return rc[t];if(!gr[t])return t;var e=gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qp)return rc[t]=e[n];return t}var Kp=Fo("animationend"),Gp=Fo("animationiteration"),Qp=Fo("animationstart"),Yp=Fo("transitionend"),Xp=new Map,ic=new Map,CE=["abort","abort",Kp,"animationEnd",Gp,"animationIteration",Qp,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Yp,"transitionEnd","waiting","waiting"];function sc(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),ic.set(r,e),Xp.set(r,i),Cn(i,[r])}}var RE=pe.unstable_now;RE();var Y=8;function yr(t){if((1&t)!=0)return Y=15,1;if((2&t)!=0)return Y=14,2;if((4&t)!=0)return Y=13,4;var e=24&t;return e!==0?(Y=12,e):(t&32)!=0?(Y=11,32):(e=192&t,e!==0?(Y=10,e):(t&256)!=0?(Y=9,256):(e=3584&t,e!==0?(Y=8,e):(t&4096)!=0?(Y=7,4096):(e=4186112&t,e!==0?(Y=6,e):(e=62914560&t,e!==0?(Y=5,e):t&67108864?(Y=4,67108864):(t&134217728)!=0?(Y=3,134217728):(e=805306368&t,e!==0?(Y=2,e):(1073741824&t)!=0?(Y=1,1073741824):(Y=8,t))))))}function NE(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function AE(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(T(358,t))}}function Li(t,e){var n=t.pendingLanes;if(n===0)return Y=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=Y=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=yr(l),i=Y):(a&=s,a!==0&&(r=yr(a),i=Y))}else s=n&~o,s!==0?(r=yr(s),i=Y):a!==0&&(r=yr(a),i=Y);if(r===0)return 0;if(r=31-Kt(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(yr(e),i<=Y)return e;Y=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function Jp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vo(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=vr(24&~e),t===0?Vo(10,e):t;case 10:return t=vr(192&~e),t===0?Vo(8,e):t;case 8:return t=vr(3584&~e),t===0&&(t=vr(4186112&~e),t===0&&(t=512)),t;case 2:return e=vr(805306368&~e),e===0&&(e=268435456),e}throw Error(T(358,t))}function vr(t){return t&-t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Kt(e),t[e]=n}var Kt=Math.clz32?Math.clz32:DE,PE=Math.log,OE=Math.LN2;function DE(t){return t===0?32:31-(PE(t)/OE|0)|0}var xE=pe.unstable_UserBlockingPriority,LE=pe.unstable_runWithPriority,Bo=!0;function ME(t,e,n,r){An||Qu();var i=ac,s=An;An=!0;try{xp(i,t,e,n,r)}finally{(An=s)||Xu()}}function bE(t,e,n,r){LE(xE,ac.bind(null,t,e,n,r))}function ac(t,e,n,r){if(Bo){var i;if((i=(e&4)==0)&&0<wt.length&&-1<Bp.indexOf(t))t=nc(null,t,e,n,r),wt.push(t);else{var s=lc(t,e,n,r);if(s===null)i&&zp(t,r);else{if(i){if(-1<Bp.indexOf(t)){t=nc(s,t,e,n,r),wt.push(t);return}if(TE(s,t,e,n,r))return;zp(t,r)}Nm(t,e,r,null,n)}}}}function lc(t,e,n,r){var i=qu(r);if(i=On(i),i!==null){var s=Pn(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Mp(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Nm(t,e,r,i,n),null}var Gt=null,uc=null,zo=null;function Zp(){if(zo)return zo;var t,e=uc,n=e.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zo=i.slice(t,1<r?1-r:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function em(){return!1}function Je(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wo:em,this.isPropagationStopped=em,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=Je(wr),Mi=ne({},wr,{view:0,detail:0}),$E=Je(Mi),hc,fc,bi,qo=ne({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(hc=t.screenX-bi.screenX,fc=t.screenY-bi.screenY):fc=hc=0,bi=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),tm=Je(qo),UE=ne({},qo,{dataTransfer:0}),FE=Je(UE),VE=ne({},Mi,{relatedTarget:0}),dc=Je(VE),jE=ne({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),BE=Je(jE),zE=ne({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HE=Je(zE),WE=ne({},wr,{data:0}),nm=Je(WE),qE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GE[t])?!!e[t]:!1}function pc(){return QE}var YE=ne({},Mi,{key:function(t){if(t.key){var e=qE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XE=Je(YE),JE=ne({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Je(JE),ZE=ne({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),eS=Je(ZE),tS=ne({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=Je(tS),rS=ne({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iS=Je(rS),sS=[9,13,27,32],mc=At&&"CompositionEvent"in window,$i=null;At&&"documentMode"in document&&($i=document.documentMode);var oS=At&&"TextEvent"in window&&!$i,im=At&&(!mc||$i&&8<$i&&11>=$i),sm=String.fromCharCode(32),om=!1;function am(t,e){switch(t){case"keyup":return sS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function aS(t,e){switch(t){case"compositionend":return lm(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return t=e.data,t===sm&&om?null:t;default:return null}}function lS(t,e){if(Er)return t==="compositionend"||!mc&&am(t,e)?(t=Zp(),zo=uc=Gt=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return im&&e.locale!=="ko"?null:e.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uS[t.type]:e==="textarea"}function cm(t,e,n,r){Op(r),e=Go(e,"onChange"),0<e.length&&(n=new cc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ui=null,Fi=null;function cS(t){Tm(t,0)}function Ko(t){var e=kr(t);if(wp(e))return t}function hS(t,e){if(t==="change")return e}var hm=!1;if(At){var gc;if(At){var yc="oninput"in document;if(!yc){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),yc=typeof fm.oninput=="function"}gc=yc}else gc=!1;hm=gc&&(!document.documentMode||9<document.documentMode)}function dm(){Ui&&(Ui.detachEvent("onpropertychange",pm),Fi=Ui=null)}function pm(t){if(t.propertyName==="value"&&Ko(Fi)){var e=[];if(cm(e,Fi,t,qu(t)),t=cS,An)t(e);else{An=!0;try{Gu(t,e)}finally{An=!1,Xu()}}}}function fS(t,e,n){t==="focusin"?(dm(),Ui=e,Fi=n,Ui.attachEvent("onpropertychange",pm)):t==="focusout"&&dm()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Fi)}function pS(t,e){if(t==="click")return Ko(e)}function mS(t,e){if(t==="input"||t==="change")return Ko(e)}function gS(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var ot=typeof Object.is=="function"?Object.is:gS,yS=Object.prototype.hasOwnProperty;function Vi(t,e){if(ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!yS.call(e,n[r])||!ot(t[n[r]],e[n[r]]))return!1;return!0}function mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,e){var n=mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mm(n)}}function ym(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ym(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vm(){for(var t=window,e=xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xo(t.document)}return e}function vc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var vS=At&&"documentMode"in document&&11>=document.documentMode,Sr=null,wc=null,ji=null,Ec=!1;function wm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ec||Sr==null||Sr!==xo(r)||(r=Sr,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&Vi(ji,r)||(ji=r,r=Go(wc,"onSelect"),0<r.length&&(e=new cc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Sr)))}sc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);sc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);sc(CE,2);for(var Em="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Sc=0;Sc<Em.length;Sc++)ic.set(Em[Sc],0);hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function _m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SE(r,e,void 0,t),t.currentTarget=null}function Tm(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_m(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_m(i,a,u),s=l}}}if(bo)throw t=Zu,bo=!1,Zu=null,t}function Z(t,e){var n=Lm(e),r=t+"__bubble";n.has(r)||(Rm(e,t,2,!1),n.add(r))}var Im="_reactListening"+Math.random().toString(36).slice(2);function km(t){t[Im]||(t[Im]=!0,fp.forEach(function(e){Sm.has(e)||Cm(e,!1,t,null),Cm(e,!0,t,null)}))}function Cm(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&Sm.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Lm(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),Rm(s,t,i,e),o.add(a))}function Rm(t,e,n,r){var i=ic.get(e);switch(i===void 0?2:i){case 0:i=ME;break;case 1:i=bE;break;default:i=ac}n=i.bind(null,e,n,t),i=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Nm(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=On(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}yE(function(){var u=s,c=qu(n),h=[];e:{var f=Xp.get(t);if(f!==void 0){var g=cc,E=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":g=XE;break;case"focusin":E="focus",g=dc;break;case"focusout":E="blur",g=dc;break;case"beforeblur":case"afterblur":g=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=FE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=eS;break;case Kp:case Gp:case Qp:g=BE;break;case Yp:g=nS;break;case"scroll":g=$E;break;case"wheel":g=iS;break;case"copy":case"cut":case"paste":g=HE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rm}var w=(e&4)!=0,p=!w&&t==="scroll",d=w?f!==null?f+"Capture":null:f;w=[];for(var m=u,v;m!==null;){v=m;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=Ci(m,d),y!=null&&w.push(zi(m,y,v)))),p)break;m=m.return}0<w.length&&(f=new g(f,E,null,n,c),h.push({event:f,listeners:w}))}}if((e&7)==0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&(e&16)==0&&(E=n.relatedTarget||n.fromElement)&&(On(E)||E[Ir]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(E=n.relatedTarget||n.toElement,g=u,E=E?On(E):null,E!==null&&(p=Pn(E),E!==p||E.tag!==5&&E.tag!==6)&&(E=null)):(g=null,E=u),g!==E)){if(w=tm,y="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=rm,y="onPointerLeave",d="onPointerEnter",m="pointer"),p=g==null?f:kr(g),v=E==null?f:kr(E),f=new w(y,m+"leave",g,n,c),f.target=p,f.relatedTarget=v,y=null,On(c)===u&&(w=new w(d,m+"enter",E,n,c),w.target=v,w.relatedTarget=p,y=w),p=y,g&&E)t:{for(w=g,d=E,m=0,v=w;v;v=_r(v))m++;for(v=0,y=d;y;y=_r(y))v++;for(;0<m-v;)w=_r(w),m--;for(;0<v-m;)d=_r(d),v--;for(;m--;){if(w===d||d!==null&&w===d.alternate)break t;w=_r(w),d=_r(d)}w=null}else w=null;g!==null&&Am(h,f,g,w,!1),E!==null&&p!==null&&Am(h,p,E,w,!0)}}e:{if(f=u?kr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var I=hS;else if(um(f))if(hm)I=mS;else{I=dS;var S=fS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=pS);if(I&&(I=I(t,u))){cm(h,I,n,c);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Fu(f,"number",f.value)}switch(S=u?kr(u):window,t){case"focusin":(um(S)||S.contentEditable==="true")&&(Sr=S,wc=u,ji=null);break;case"focusout":ji=wc=Sr=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,wm(h,n,c);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":wm(h,n,c)}var P;if(mc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Er?am(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(im&&n.locale!=="ko"&&(Er||x!=="onCompositionStart"?x==="onCompositionEnd"&&Er&&(P=Zp()):(Gt=c,uc="value"in Gt?Gt.value:Gt.textContent,Er=!0)),S=Go(u,x),0<S.length&&(x=new nm(x,t,null,n,c),h.push({event:x,listeners:S}),P?x.data=P:(P=lm(n),P!==null&&(x.data=P)))),(P=oS?aS(t,n):lS(t,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(c=new nm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}Tm(h,e)})}function zi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Go(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ci(t,n),s!=null&&r.unshift(zi(t,s,i)),s=Ci(t,e),s!=null&&r.push(zi(t,s,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Am(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ci(n,s),l!=null&&o.unshift(zi(n,l,a))):i||(l=Ci(n,s),l!=null&&o.push(zi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Qo(){}var _c=null,Tc=null;function Pm(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Ic(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Om=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0;function kc(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cc=0;function ES(t){return{$$typeof:Du,toString:t,valueOf:t}}var Yo=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Yo,Xo="__reactProps$"+Yo,Ir="__reactContainer$"+Yo,xm="__reactEvents$"+Yo;function On(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[Qt])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Hi(t){return t=t[Qt]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Jo(t){return t[Xo]||null}function Lm(t){var e=t[xm];return e===void 0&&(e=t[xm]=new Set),e}var Rc=[],Cr=-1;function Yt(t){return{current:t}}function ee(t){0>Cr||(t.current=Rc[Cr],Rc[Cr]=null,Cr--)}function ie(t,e){Cr++,Rc[Cr]=t.current,t.current=e}var Xt={},De=Yt(Xt),We=Yt(!1),Dn=Xt;function Rr(t,e){var n=t.type.contextTypes;if(!n)return Xt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function Zo(){ee(We),ee(De)}function Mm(t,e,n){if(De.current!==Xt)throw Error(T(168));ie(De,e),ie(We,n)}function bm(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,fr(e)||"Unknown",i));return ne({},n,r)}function ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xt,Dn=De.current,ie(De,t),ie(We,We.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=bm(t,e,Dn),r.__reactInternalMemoizedMergedChildContext=t,ee(We),ee(De),ie(De,t)):ee(We),ie(We,n)}var Nc=null,xn=null,SS=pe.unstable_runWithPriority,Ac=pe.unstable_scheduleCallback,Pc=pe.unstable_cancelCallback,_S=pe.unstable_shouldYield,Um=pe.unstable_requestPaint,Oc=pe.unstable_now,TS=pe.unstable_getCurrentPriorityLevel,ta=pe.unstable_ImmediatePriority,Fm=pe.unstable_UserBlockingPriority,Vm=pe.unstable_NormalPriority,jm=pe.unstable_LowPriority,Bm=pe.unstable_IdlePriority,Dc={},IS=Um!==void 0?Um:function(){},Pt=null,na=null,xc=!1,zm=Oc(),xe=1e4>zm?Oc:function(){return Oc()-zm};function Nr(){switch(TS()){case ta:return 99;case Fm:return 98;case Vm:return 97;case jm:return 96;case Bm:return 95;default:throw Error(T(332))}}function Hm(t){switch(t){case 99:return ta;case 98:return Fm;case 97:return Vm;case 96:return jm;case 95:return Bm;default:throw Error(T(332))}}function Ln(t,e){return t=Hm(t),SS(t,e)}function Wi(t,e,n){return t=Hm(t),Ac(t,e,n)}function Et(){if(na!==null){var t=na;na=null,Pc(t)}Wm()}function Wm(){if(!xc&&Pt!==null){xc=!0;var t=0;try{var e=Pt;Ln(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Pt=null}catch(n){throw Pt!==null&&(Pt=Pt.slice(t+1)),Ac(ta,Et),n}finally{xc=!1}}}var kS=Rn.ReactCurrentBatchConfig;function pt(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ra=Yt(null),ia=null,Ar=null,sa=null;function Lc(){sa=Ar=ia=null}function Mc(t){var e=ra.current;ee(ra),t.type._context._currentValue=e}function qm(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Pr(t,e){ia=t,sa=Ar=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(mt=!0),t.firstContext=null)}function at(t,e){if(sa!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(sa=t,e=1073741823),e={context:t,observedBits:e,next:null},Ar===null){if(ia===null)throw Error(T(308));Ar=e,ia.dependencies={lanes:0,firstContext:e,responders:null}}else Ar=Ar.next=e;return t._currentValue}var Jt=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Km(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qi(t,e,n,r){var i=t.updateQueue;Jt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=u:h.next=u,c.lastBaseUpdate=l)}}if(s!==null){h=i.baseState,o=0,c=u=l=null;do{a=s.lane;var f=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,E=s;switch(a=e,f=n,E.tag){case 1:if(g=E.payload,typeof g=="function"){h=g.call(f,h,a);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=E.payload,a=typeof g=="function"?g.call(f,h,a):g,a==null)break e;h=ne({},h,a);break e;case 2:Jt=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else f={eventTime:f,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,is|=o,t.lanes=o,t.memoizedState=h}}function Qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Ym=new Ro.Component().refs;function oa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var aa={isMounted:function(t){return(t=t._reactInternals)?Pn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=rn(t),s=Zt(r,i);s.payload=e,n!=null&&(s.callback=n),en(t,s),sn(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=rn(t),s=Zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),en(t,s),sn(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ze(),r=rn(t),i=Zt(n,r);i.tag=2,e!=null&&(i.callback=e),en(t,i),sn(t,r,n)}};function Xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,s):!0}function Jm(t,e,n){var r=!1,i=Xt,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=qe(e)?Dn:De.current,r=e.contextTypes,s=(r=r!=null)?Rr(t,i):Xt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=aa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&aa.enqueueReplaceState(e,e.state,null)}function $c(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ym,bc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=qe(e)?Dn:De.current,i.context=Rr(t,s)),qi(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(oa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&aa.enqueueReplaceState(i,i.state,null),qi(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var la=Array.isArray;function Ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Ym&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ua(t,e){if(t.type!=="textarea")throw Error(T(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function eg(t){function e(p,d){if(t){var m=p.lastEffect;m!==null?(m.nextEffect=d,p.lastEffect=d):p.firstEffect=p.lastEffect=d,d.nextEffect=null,d.flags=8}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=ln(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags=2,d):m):(p.flags=2,d)):d}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,d,m,v){return d===null||d.tag!==6?(d=wh(m,p.mode,v),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,v){return d!==null&&d.elementType===m.type?(v=i(d,m.props),v.ref=Ki(p,d,m),v.return=p,v):(v=Ra(m.type,m.key,m.props,null,p.mode,v),v.ref=Ki(p,d,m),v.return=p,v)}function u(p,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Eh(m,p.mode,v),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,v,y){return d===null||d.tag!==7?(d=Ur(m,p.mode,v,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"||typeof d=="number")return d=wh(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wi:return m=Ra(d.type,d.key,d.props,null,p.mode,m),m.ref=Ki(p,null,d),m.return=p,m;case Nn:return d=Eh(d,p.mode,m),d.return=p,d}if(la(d)||_i(d))return d=Ur(d,p.mode,m,null),d.return=p,d;ua(p,d)}return null}function f(p,d,m,v){var y=d!==null?d.key:null;if(typeof m=="string"||typeof m=="number")return y!==null?null:a(p,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wi:return m.key===y?m.type===Bt?c(p,d,m.props.children,v,y):l(p,d,m,v):null;case Nn:return m.key===y?u(p,d,m,v):null}if(la(m)||_i(m))return y!==null?null:c(p,d,m,v,null);ua(p,m)}return null}function g(p,d,m,v,y){if(typeof v=="string"||typeof v=="number")return p=p.get(m)||null,a(d,p,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wi:return p=p.get(v.key===null?m:v.key)||null,v.type===Bt?c(d,p,v.props.children,y,v.key):l(d,p,v,y);case Nn:return p=p.get(v.key===null?m:v.key)||null,u(d,p,v,y)}if(la(v)||_i(v))return p=p.get(m)||null,c(d,p,v,y,null);ua(d,v)}return null}function E(p,d,m,v){for(var y=null,I=null,S=d,P=d=0,x=null;S!==null&&P<m.length;P++){S.index>P?(x=S,S=null):x=S.sibling;var N=f(p,S,m[P],v);if(N===null){S===null&&(S=x);break}t&&S&&N.alternate===null&&e(p,S),d=s(N,d,P),I===null?y=N:I.sibling=N,I=N,S=x}if(P===m.length)return n(p,S),y;if(S===null){for(;P<m.length;P++)S=h(p,m[P],v),S!==null&&(d=s(S,d,P),I===null?y=S:I.sibling=S,I=S);return y}for(S=r(p,S);P<m.length;P++)x=g(S,p,P,m[P],v),x!==null&&(t&&x.alternate!==null&&S.delete(x.key===null?P:x.key),d=s(x,d,P),I===null?y=x:I.sibling=x,I=x);return t&&S.forEach(function(ue){return e(p,ue)}),y}function w(p,d,m,v){var y=_i(m);if(typeof y!="function")throw Error(T(150));if(m=y.call(m),m==null)throw Error(T(151));for(var I=y=null,S=d,P=d=0,x=null,N=m.next();S!==null&&!N.done;P++,N=m.next()){S.index>P?(x=S,S=null):x=S.sibling;var ue=f(p,S,N.value,v);if(ue===null){S===null&&(S=x);break}t&&S&&ue.alternate===null&&e(p,S),d=s(ue,d,P),I===null?y=ue:I.sibling=ue,I=ue,S=x}if(N.done)return n(p,S),y;if(S===null){for(;!N.done;P++,N=m.next())N=h(p,N.value,v),N!==null&&(d=s(N,d,P),I===null?y=N:I.sibling=N,I=N);return y}for(S=r(p,S);!N.done;P++,N=m.next())N=g(S,p,P,N.value,v),N!==null&&(t&&N.alternate!==null&&S.delete(N.key===null?P:N.key),d=s(N,d,P),I===null?y=N:I.sibling=N,I=N);return t&&S.forEach(function(du){return e(p,du)}),y}return function(p,d,m,v){var y=typeof m=="object"&&m!==null&&m.type===Bt&&m.key===null;y&&(m=m.props.children);var I=typeof m=="object"&&m!==null;if(I)switch(m.$$typeof){case wi:e:{for(I=m.key,y=d;y!==null;){if(y.key===I){switch(y.tag){case 7:if(m.type===Bt){n(p,y.sibling),d=i(y,m.props.children),d.return=p,p=d;break e}break;default:if(y.elementType===m.type){n(p,y.sibling),d=i(y,m.props),d.ref=Ki(p,y,m),d.return=p,p=d;break e}}n(p,y);break}else e(p,y);y=y.sibling}m.type===Bt?(d=Ur(m.props.children,p.mode,v,m.key),d.return=p,p=d):(v=Ra(m.type,m.key,m.props,null,p.mode,v),v.ref=Ki(p,d,m),v.return=p,p=v)}return o(p);case Nn:e:{for(y=m.key;d!==null;){if(d.key===y)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Eh(m,p.mode,v),d.return=p,p=d}return o(p)}if(typeof m=="string"||typeof m=="number")return m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=wh(m,p.mode,v),d.return=p,p=d),o(p);if(la(m))return E(p,d,m,v);if(_i(m))return w(p,d,m,v);if(I&&ua(p,m),typeof m=="undefined"&&!y)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(T(152,fr(p.type)||"Component"))}return n(p,d)}}var ca=eg(!0),tg=eg(!1),Gi={},St=Yt(Gi),Qi=Yt(Gi),Yi=Yt(Gi);function Mn(t){if(t===Gi)throw Error(T(174));return t}function Uc(t,e){switch(ie(Yi,e),ie(Qi,t),ie(St,Gi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zu(e,t)}ee(St),ie(St,e)}function Or(){ee(St),ee(Qi),ee(Yi)}function ng(t){Mn(Yi.current);var e=Mn(St.current),n=zu(e,t.type);e!==n&&(ie(Qi,t),ie(St,n))}function Fc(t){Qi.current===t&&(ee(St),ee(Qi))}var se=Yt(0);function ha(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ot=null,tn=null,_t=!1;function rg(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Vc(t){if(_t){var e=tn;if(e){var n=e;if(!ig(t,e)){if(e=Tr(n.nextSibling),!e||!ig(t,e)){t.flags=t.flags&-1025|2,_t=!1,Ot=t;return}rg(Ot,n)}Ot=t,tn=Tr(e.firstChild)}else t.flags=t.flags&-1025|2,_t=!1,Ot=t}}function sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function fa(t){if(t!==Ot)return!1;if(!_t)return sg(t),_t=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Ic(e,t.memoizedProps))for(e=tn;e;)rg(t,e),e=Tr(e.nextSibling);if(sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=Ot?Tr(t.stateNode.nextSibling):null;return!0}function jc(){tn=Ot=null,_t=!1}var Dr=[];function Bc(){for(var t=0;t<Dr.length;t++)Dr[t]._workInProgressVersionPrimary=null;Dr.length=0}var Xi=Rn.ReactCurrentDispatcher,lt=Rn.ReactCurrentBatchConfig,Ji=0,ae=null,Le=null,_e=null,da=!1,Zi=!1;function Ke(){throw Error(T(321))}function zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ot(t[n],e[n]))return!1;return!0}function Hc(t,e,n,r,i,s){if(Ji=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xi.current=t===null||t.memoizedState===null?RS:NS,t=n(r,i),Zi){s=0;do{if(Zi=!1,!(25>s))throw Error(T(301));s+=1,_e=Le=null,e.updateQueue=null,Xi.current=AS,t=n(r,i)}while(Zi)}if(Xi.current=ya,e=Le!==null&&Le.next!==null,Ji=0,_e=Le=ae=null,da=!1,e)throw Error(T(300));return t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ae.memoizedState=_e=t:_e=_e.next=t,_e}function $n(){if(Le===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=_e===null?ae.memoizedState:_e.next;if(e!==null)_e=e,Le=t;else{if(t===null)throw Error(T(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},_e===null?ae.memoizedState=_e=t:_e=_e.next=t}return _e}function Tt(t,e){return typeof e=="function"?e(t):e}function es(t){var e=$n(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((Ji&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,ae.lanes|=u,is|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,ot(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function ts(t){var e=$n(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ot(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function og(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Ji&t)===t)&&(e._workInProgressVersionPrimary=r,Dr.push(e))),t)return n(e._source);throw Dr.push(e),Error(T(350))}function ag(t,e,n,r){var i=Ve;if(i===null)throw Error(T(349));var s=e._getVersion,o=s(e._source),a=Xi.current,l=a.useState(function(){return og(i,e,n)}),u=l[1],c=l[0];l=_e;var h=t.memoizedState,f=h.refs,g=f.getSnapshot,E=h.source;h=h.subscribe;var w=ae;return t.memoizedState={refs:f,source:e,subscribe:r},a.useEffect(function(){f.getSnapshot=n,f.setSnapshot=u;var p=s(e._source);if(!ot(o,p)){p=n(e._source),ot(c,p)||(u(p),p=rn(w),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var d=i.entanglements,m=p;0<m;){var v=31-Kt(m),y=1<<v;d[v]|=p,m&=~y}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=f.getSnapshot,d=f.setSnapshot;try{d(p(e._source));var m=rn(w);i.mutableReadLanes|=m&i.pendingLanes}catch(v){d(function(){throw v})}})},[e,r]),ot(g,n)&&ot(E,e)&&ot(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:c},t.dispatch=u=Gc.bind(null,ae,t),l.queue=t,l.baseQueue=null,c=og(i,e,n),l.memoizedState=l.baseState=c),c}function lg(t,e,n){var r=$n();return ag(r,t,e,n)}function ns(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:t},t=t.dispatch=Gc.bind(null,ae,t),[e.memoizedState,t]}function pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ug(t){var e=bn();return t={current:t},e.memoizedState=t}function ma(){return $n().memoizedState}function Wc(t,e,n,r){var i=bn();ae.flags|=t,i.memoizedState=pa(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var i=$n();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&zc(r,o.deps)){pa(e,n,s,r);return}}ae.flags|=t,i.memoizedState=pa(1|e,n,s,r)}function cg(t,e){return Wc(516,4,t,e)}function ga(t,e){return qc(516,4,t,e)}function hg(t,e){return qc(4,2,t,e)}function fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dg(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,2,fg.bind(null,e,t),n)}function Kc(){}function pg(t,e){var n=$n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mg(t,e){var n=$n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function CS(t,e){var n=Nr();Ln(98>n?98:n,function(){t(!0)}),Ln(97<n?97:n,function(){var r=lt.transition;lt.transition=1;try{t(!1),e()}finally{lt.transition=r}})}function Gc(t,e,n){var r=Ze(),i=rn(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===ae||o!==null&&o===ae)Zi=da=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,ot(l,a))return}catch{}finally{}sn(t,i,r)}}var ya={readContext:at,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useOpaqueIdentifier:Ke,unstable_isNewReconciler:!1},RS={readContext:at,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,2,fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wc(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Gc.bind(null,ae,t),[r.memoizedState,t]},useRef:ug,useState:ns,useDebugValue:Kc,useDeferredValue:function(t){var e=ns(t),n=e[0],r=e[1];return cg(function(){var i=lt.transition;lt.transition=1;try{r(t)}finally{lt.transition=i}},[t]),n},useTransition:function(){var t=ns(!1),e=t[0];return t=CS.bind(null,t[1]),ug(t),[t,e]},useMutableSource:function(t,e,n){var r=bn();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},ag(r,t,e,n)},useOpaqueIdentifier:function(){if(_t){var t=!1,e=ES(function(){throw t||(t=!0,n("r:"+(Cc++).toString(36))),Error(T(355))}),n=ns(e)[1];return(ae.mode&2)==0&&(ae.flags|=516,pa(5,function(){n("r:"+(Cc++).toString(36))},void 0,null)),e}return e="r:"+(Cc++).toString(36),ns(e),e},unstable_isNewReconciler:!1},NS={readContext:at,useCallback:pg,useContext:at,useEffect:ga,useImperativeHandle:dg,useLayoutEffect:hg,useMemo:mg,useReducer:es,useRef:ma,useState:function(){return es(Tt)},useDebugValue:Kc,useDeferredValue:function(t){var e=es(Tt),n=e[0],r=e[1];return ga(function(){var i=lt.transition;lt.transition=1;try{r(t)}finally{lt.transition=i}},[t]),n},useTransition:function(){var t=es(Tt)[0];return[ma().current,t]},useMutableSource:lg,useOpaqueIdentifier:function(){return es(Tt)[0]},unstable_isNewReconciler:!1},AS={readContext:at,useCallback:pg,useContext:at,useEffect:ga,useImperativeHandle:dg,useLayoutEffect:hg,useMemo:mg,useReducer:ts,useRef:ma,useState:function(){return ts(Tt)},useDebugValue:Kc,useDeferredValue:function(t){var e=ts(Tt),n=e[0],r=e[1];return ga(function(){var i=lt.transition;lt.transition=1;try{r(t)}finally{lt.transition=i}},[t]),n},useTransition:function(){var t=ts(Tt)[0];return[ma().current,t]},useMutableSource:lg,useOpaqueIdentifier:function(){return ts(Tt)[0]},unstable_isNewReconciler:!1},PS=Rn.ReactCurrentOwner,mt=!1;function Ge(t,e,n,r){e.child=t===null?tg(e,null,n,r):ca(e,t.child,n,r)}function gg(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=Hc(t,e,n,r,s,i),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Dt(t,e,i)):(e.flags|=1,Ge(t,e,r,i),e.child)}function yg(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!yh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,vg(t,e,o,r,i,s)):(t=Ra(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Vi,n(i,r)&&t.ref===e.ref)?Dt(t,e,s):(e.flags|=1,t=ln(o,r),t.ref=e.ref,t.return=e,e.child=t)}function vg(t,e,n,r,i,s){if(t!==null&&Vi(t.memoizedProps,r)&&t.ref===e.ref)if(mt=!1,(s&i)!=0)(t.flags&16384)!=0&&(mt=!0);else return e.lanes=t.lanes,Dt(t,e,s);return Yc(t,e,n,r,s)}function Qc(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},Ca(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},Ca(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Ca(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ca(e,r);return Ge(t,e,i,n),e.child}function wg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Yc(t,e,n,r,i){var s=qe(n)?Dn:De.current;return s=Rr(e,s),Pr(e,i),n=Hc(t,e,n,r,s,i),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Dt(t,e,i)):(e.flags|=1,Ge(t,e,n,i),e.child)}function Eg(t,e,n,r,i){if(qe(n)){var s=!0;ea(e)}else s=!1;if(Pr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Jm(e,n,r),$c(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=qe(n)?Dn:De.current,u=Rr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zm(e,o,r,u),Jt=!1;var f=e.memoizedState;o.state=f,qi(e,r,o,i),l=e.memoizedState,a!==r||f!==l||We.current||Jt?(typeof c=="function"&&(oa(e,n,c,r),l=e.memoizedState),(a=Jt||Xm(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,Km(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:pt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=at(l):(l=qe(n)?Dn:De.current,l=Rr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Zm(e,o,r,l),Jt=!1,f=e.memoizedState,o.state=f,qi(e,r,o,i);var E=e.memoizedState;a!==h||f!==E||We.current||Jt?(typeof g=="function"&&(oa(e,n,g,r),E=e.memoizedState),(u=Jt||Xm(e,n,u,r,f,E,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=256),r=!1)}return Xc(t,e,n,r,s,i)}function Xc(t,e,n,r,i,s){wg(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&$m(e,n,!1),Dt(t,e,s);r=e.stateNode,PS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ca(e,t.child,null,s),e.child=ca(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function Sg(t){var e=t.stateNode;e.pendingContext?Mm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mm(t,e.context,!1),Uc(t,e.containerInfo)}var va={dehydrated:null,retryLane:0};function _g(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ie(se,i&1),t===null?(r.fallback!==void 0&&Vc(e),t=r.children,i=r.fallback,s?(t=Tg(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=va,t):typeof r.unstable_expectedLoadTime=="number"?(t=Tg(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=va,e.lanes=33554432,t):(n=vh({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=kg(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=va,r):(n=Ig(t,e,r.children,n),e.memoizedState=null,n):s?(r=kg(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=va,r):(n=Ig(t,e,r.children,n),e.memoizedState=null,n)}function Tg(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=vh(e,i,0,null),n=Ur(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Ig(t,e,n,r){var i=t.child;return t=i.sibling,n=ln(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function kg(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=ln(o,a),t!==null?r=ln(t,r):(r=Ur(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function Cg(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),qm(t.return,e)}function Jc(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function Rg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=se.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,n);else if(t.tag===19)Cg(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(se,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ha(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jc(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ha(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jc(e,!0,n,null,s,e.lastEffect);break;case"together":Jc(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var Ng,Zc,Ag,Pg;Ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zc=function(){};Ag=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mn(St.current);var s=null;switch(n){case"input":i=$u(t,i),r=$u(t,r),s=[];break;case"option":i=Vu(t,i),r=Vu(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=ju(t,i),r=ju(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qo)}Hu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Du?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pg=function(t,e,n,r){n!==r&&(e.flags|=4)};function rs(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function OS(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return qe(e.type)&&Zo(),null;case 3:return Or(),ee(We),ee(De),Bc(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Zc(e),null;case 5:Fc(e);var i=Mn(Yi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ag(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(T(166));return null}if(t=Mn(St.current),fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[Xo]=s,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(t=0;t<Bi.length;t++)Z(Bi[t],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Ep(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Tp(r,s),Z("invalid",r)}Hu(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):vi.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Z("scroll",r));switch(n){case"input":Do(r),_p(r,s,!0);break;case"textarea":Do(r),kp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qo)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===Bu.html&&(t=Cp(n)),t===Bu.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[Xo]=r,Ng(t,e,!1,!1),e.stateNode=t,o=Wu(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bi.length;i++)Z(Bi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":Ep(t,r),i=$u(t,r),Z("invalid",t);break;case"option":i=Vu(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Tp(t,r),i=ju(t,r),Z("invalid",t);break;default:i=r}Hu(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ap(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ii(t,l):typeof l=="number"&&Ii(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&Cu(t,s,l,o))}switch(n){case"input":Do(t),_p(t,r,!1);break;case"textarea":Do(t),kp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?dr(t,!!r.multiple,s,!1):r.defaultValue!=null&&dr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qo)}Pm(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)Pg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));n=Mn(Yi.current),Mn(St.current),fa(e)?(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r)}return null;case 13:return ee(se),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&fa(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(se.current&1)!=0?Te===0&&(Te=3):((Te===0||Te===3)&&(Te=4),Ve===null||(is&134217727)==0&&(Lr&134217727)==0||br(Ve,Me))),(r||n)&&(e.flags|=4),null);case 4:return Or(),Zc(e),t===null&&km(e.stateNode.containerInfo),null;case 10:return Mc(e),null;case 17:return qe(e.type)&&Zo(),null;case 19:if(ee(se),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)rs(r,!1);else{if(Te!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=ha(t),o!==null){for(e.flags|=64,rs(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(se,se.current&1|2),e.child}t=t.sibling}r.tail!==null&&xe()>ch&&(e.flags|=64,s=!0,rs(r,!1),e.lanes=33554432)}else{if(!s)if(t=ha(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rs(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!_t)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*xe()-r.renderingStartTime>ch&&n!==1073741824&&(e.flags|=64,s=!0,rs(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=xe(),n.sibling=null,e=se.current,ie(se,s?e&1|2:e&1),n):null;case 23:case 24:return gh(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(T(156,e.tag))}function DS(t){switch(t.tag){case 1:qe(t.type)&&Zo();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Or(),ee(We),ee(De),Bc(),e=t.flags,(e&64)!=0)throw Error(T(285));return t.flags=e&-4097|64,t;case 5:return Fc(t),null;case 13:return ee(se),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ee(se),null;case 4:return Or(),null;case 10:return Mc(t),null;case 23:case 24:return gh(),null;default:return null}}function eh(t,e){try{var n="",r=e;do n+=fE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function Og(t,e,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sa||(Sa=!0,hh=r),th(t,e)},n}function Dg(t,e,n){n=Zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return th(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(It===null?It=new Set([this]):It.add(this),th(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var LS=typeof WeakSet=="function"?WeakSet:Set;function xg(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){an(t,n)}else e.current=null}function MS(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:pt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&kc(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(T(163))}function bS(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(Gg(n,t),HS(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:pt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Qm(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Qm(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Pm(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Wp(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(T(163))}function Lg(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Np("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Mg(t,e){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Nc,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)Gg(e,n);else{r=e;try{i()}catch(s){an(r,s)}}n=n.next}while(n!==t)}break;case 1:if(xg(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){an(e,s)}break;case 5:xg(e);break;case 4:Fg(t,e)}}function bg(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function $g(t){return t.tag===5||t.tag===3||t.tag===4}function Ug(t){e:{for(var e=t.return;e!==null;){if($g(e))break e;e=e.return}throw Error(T(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(T(161))}n.flags&16&&(Ii(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||$g(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?nh(t,n,e):rh(t,n,e)}function nh(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qo));else if(r!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}function rh(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}function Fg(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(T(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(Mg(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(Mg(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function ih(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Xo]=r,t==="input"&&r.type==="radio"&&r.name!=null&&Sp(n,r),Wu(t,i),e=Wu(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Ap(n,a):o==="dangerouslySetInnerHTML"?Rp(n,a):o==="children"?Ii(n,a):Cu(n,o,a,e)}switch(t){case"input":Uu(n,r);break;case"textarea":Ip(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?dr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?dr(n,!!r.multiple,r.defaultValue,!0):dr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(T(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Wp(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(uh=xe(),Lg(e.child,!0)),Vg(e);return;case 19:Vg(e);return;case 17:return;case 23:case 24:Lg(e,e.memoizedState!==null);return}throw Error(T(163))}function Vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(r){var i=KS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $S(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var US=Math.ceil,wa=Rn.ReactCurrentDispatcher,sh=Rn.ReactCurrentOwner,M=0,Ve=null,de=null,Me=0,Un=0,oh=Yt(0),Te=0,Ea=null,xr=0,is=0,Lr=0,ah=0,lh=null,uh=0,ch=1/0;function Mr(){ch=xe()+500}var A=null,Sa=!1,hh=null,It=null,nn=!1,ss=null,os=90,fh=[],dh=[],xt=null,as=0,ph=null,_a=-1,Lt=0,Ta=0,ls=null,Ia=!1;function Ze(){return(M&48)!=0?xe():_a!==-1?_a:_a=xe()}function rn(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return Nr()===99?1:2;if(Lt===0&&(Lt=xr),kS.transition!==0){Ta!==0&&(Ta=lh!==null?lh.pendingLanes:0),t=Lt;var e=4186112&~Ta;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Nr(),(M&4)!=0&&t===98?t=Vo(12,Lt):(t=NE(t),t=Vo(t,Lt)),t}function sn(t,e,n){if(50<as)throw as=0,ph=null,Error(T(185));if(t=ka(t,e),t===null)return null;jo(t,e,n),t===Ve&&(Lr|=e,Te===4&&br(t,Me));var r=Nr();e===1?(M&8)!=0&&(M&48)==0?mh(t):(ut(t,n),M===0&&(Mr(),Et())):((M&4)==0||r!==98&&r!==99||(xt===null?xt=new Set([t]):xt.add(t)),ut(t,n)),lh=t}function ka(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function ut(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Kt(o),l=1<<a,u=s[a];if(u===-1){if((l&r)==0||(l&i)!=0){u=e,yr(l);var c=Y;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=Li(t,t===Ve?Me:0),e=Y,r===0)n!==null&&(n!==Dc&&Pc(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Dc&&Pc(n)}e===15?(n=mh.bind(null,t),Pt===null?(Pt=[n],na=Ac(ta,Wm)):Pt.push(n),n=Dc):e===14?n=Wi(99,mh.bind(null,t)):(n=AE(e),n=Wi(n,jg.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function jg(t){if(_a=-1,Ta=Lt=0,(M&48)!=0)throw Error(T(327));var e=t.callbackNode;if(on()&&t.callbackNode!==e)return null;var n=Li(t,t===Ve?Me:0);if(n===0)return null;var r=n,i=M;M|=16;var s=Wg();(Ve!==t||Me!==r)&&(Mr(),$r(t,r));do try{jS();break}catch(a){Hg(t,a)}while(1);if(Lc(),wa.current=s,M=i,de!==null?r=0:(Ve=null,Me=0,r=Te),(xr&Lr)!=0)$r(t,0);else if(r!==0){if(r===2&&(M|=64,t.hydrate&&(t.hydrate=!1,kc(t.containerInfo)),n=Jp(t),n!==0&&(r=us(t,n))),r===1)throw e=Ea,$r(t,0),br(t,n),ut(t,xe()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(T(345));case 2:Fn(t);break;case 3:if(br(t,n),(n&62914560)===n&&(r=uh+500-xe(),10<r)){if(Li(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Om(Fn.bind(null,t),r);break}Fn(t);break;case 4:if(br(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Kt(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=xe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*US(n/1960))-n,10<n){t.timeoutHandle=Om(Fn.bind(null,t),n);break}Fn(t);break;case 5:Fn(t);break;default:throw Error(T(329))}}return ut(t,xe()),t.callbackNode===e?jg.bind(null,t):null}function br(t,e){for(e&=~ah,e&=~Lr,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function mh(t){if((M&48)!=0)throw Error(T(327));if(on(),t===Ve&&(t.expiredLanes&Me)!=0){var e=Me,n=us(t,e);(xr&Lr)!=0&&(e=Li(t,e),n=us(t,e))}else e=Li(t,0),n=us(t,e);if(t.tag!==0&&n===2&&(M|=64,t.hydrate&&(t.hydrate=!1,kc(t.containerInfo)),e=Jp(t),e!==0&&(n=us(t,e))),n===1)throw n=Ea,$r(t,0),br(t,e),ut(t,xe()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fn(t),ut(t,xe()),null}function FS(){if(xt!==null){var t=xt;xt=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,ut(e,xe())})}Et()}function Bg(t,e){var n=M;M|=1;try{return t(e)}finally{M=n,M===0&&(Mr(),Et())}}function zg(t,e){var n=M;M&=-2,M|=8;try{return t(e)}finally{M=n,M===0&&(Mr(),Et())}}function Ca(t,e){ie(oh,Un),Un|=e,xr|=e}function gh(){Un=oh.current,ee(oh)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wS(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:Or(),ee(We),ee(De),Bc();break;case 5:Fc(r);break;case 4:Or();break;case 13:ee(se);break;case 19:ee(se);break;case 10:Mc(r);break;case 23:case 24:gh()}n=n.return}Ve=t,de=ln(t.current,null),Me=Un=xr=e,Te=0,Ea=null,ah=Lr=is=0}function Hg(t,e){do{var n=de;try{if(Lc(),Xi.current=ya,da){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}da=!1}if(Ji=0,_e=Le=ae=null,Zi=!1,sh.current=null,n===null||n.return===null){Te=1,Ea=e,de=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Me,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(se.current&1)!=0,f=o;do{var g;if(g=f.tag===13){var E=f.memoizedState;if(E!==null)g=E.dehydrated!==null;else{var w=f.memoizedProps;g=w.fallback===void 0?!1:w.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var p=f.updateQueue;if(p===null){var d=new Set;d.add(u),f.updateQueue=d}else p.add(u);if((f.mode&2)==0){if(f.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=Zt(-1,1);m.tag=2,en(a,m)}a.lanes|=1;break e}l=void 0,a=e;var v=s.pingCache;if(v===null?(v=s.pingCache=new xS,l=new Set,v.set(u,l)):(l=v.get(u),l===void 0&&(l=new Set,v.set(u,l))),!l.has(a)){l.add(a);var y=qS.bind(null,s,u,a);u.then(y,y)}f.flags|=4096,f.lanes=e;break e}f=f.return}while(f!==null);l=Error((fr(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Te!==5&&(Te=2),l=eh(l,a),f=o;do{switch(f.tag){case 3:s=l,f.flags|=4096,e&=-e,f.lanes|=e;var I=Og(f,s,e);Gm(f,I);break e;case 1:s=l;var S=f.type,P=f.stateNode;if((f.flags&64)==0&&(typeof S.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(It===null||!It.has(P)))){f.flags|=4096,e&=-e,f.lanes|=e;var x=Dg(f,s,e);Gm(f,x);break e}}f=f.return}while(f!==null)}Kg(n)}catch(N){e=N,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function Wg(){var t=wa.current;return wa.current=ya,t===null?ya:t}function us(t,e){var n=M;M|=16;var r=Wg();Ve===t&&Me===e||$r(t,e);do try{VS();break}catch(i){Hg(t,i)}while(1);if(Lc(),M=n,wa.current=r,de!==null)throw Error(T(261));return Ve=null,Me=0,Te}function VS(){for(;de!==null;)qg(de)}function jS(){for(;de!==null&&!_S();)qg(de)}function qg(t){var e=Yg(t.alternate,t,Un);t.memoizedProps=t.pendingProps,e===null?Kg(t):de=e,sh.current=null}function Kg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=OS(n,e,Un),n!==null){de=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Un&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=DS(e),n!==null){n.flags&=2047,de=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);Te===0&&(Te=5)}function Fn(t){var e=Nr();return Ln(99,BS.bind(null,t,e)),null}function BS(t,e){do on();while(ss!==null);if((M&48)!=0)throw Error(T(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-Kt(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(xt!==null&&(r&24)==0&&xt.has(t)&&xt.delete(t),t===Ve&&(de=Ve=null,Me=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=M,M|=32,sh.current=null,_c=Bo,o=vm(),vc(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,h=-1,f=-1,g=0,E=0,w=o,p=null;t:for(;;){for(var d;w!==a||s!==0&&w.nodeType!==3||(h=c+s),w!==l||u!==0&&w.nodeType!==3||(f=c+u),w.nodeType===3&&(c+=w.nodeValue.length),(d=w.firstChild)!==null;)p=w,w=d;for(;;){if(w===o)break t;if(p===a&&++g===s&&(h=c),p===l&&++E===u&&(f=c),(d=w.nextSibling)!==null)break;w=p,p=w.parentNode}w=d}a=h===-1||f===-1?null:{start:h,end:f}}else a=null;a=a||{start:0,end:0}}else a=null;Tc={focusedElem:o,selectionRange:a},Bo=!1,ls=null,Ia=!1,A=r;do try{zS()}catch(N){if(A===null)throw Error(T(330));an(A,N),A=A.nextEffect}while(A!==null);ls=null,A=r;do try{for(o=t;A!==null;){var m=A.flags;if(m&16&&Ii(A.stateNode,""),m&128){var v=A.alternate;if(v!==null){var y=v.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(m&1038){case 2:Ug(A),A.flags&=-3;break;case 6:Ug(A),A.flags&=-3,ih(A.alternate,A);break;case 1024:A.flags&=-1025;break;case 1028:A.flags&=-1025,ih(A.alternate,A);break;case 4:ih(A.alternate,A);break;case 8:a=A,Fg(o,a);var I=a.alternate;bg(a),I!==null&&bg(I)}A=A.nextEffect}}catch(N){if(A===null)throw Error(T(330));an(A,N),A=A.nextEffect}while(A!==null);if(y=Tc,v=vm(),m=y.focusedElem,o=y.selectionRange,v!==m&&m&&m.ownerDocument&&ym(m.ownerDocument.documentElement,m)){for(o!==null&&vc(m)&&(v=o.start,y=o.end,y===void 0&&(y=v),"selectionStart"in m?(m.selectionStart=v,m.selectionEnd=Math.min(y,m.value.length)):(y=(v=m.ownerDocument||document)&&v.defaultView||window,y.getSelection&&(y=y.getSelection(),a=m.textContent.length,I=Math.min(o.start,a),o=o.end===void 0?I:Math.min(o.end,a),!y.extend&&I>o&&(a=o,o=I,I=a),a=gm(m,I),s=gm(m,o),a&&s&&(y.rangeCount!==1||y.anchorNode!==a.node||y.anchorOffset!==a.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),y.removeAllRanges(),I>o?(y.addRange(v),y.extend(s.node,s.offset)):(v.setEnd(s.node,s.offset),y.addRange(v)))))),v=[],y=m;y=y.parentNode;)y.nodeType===1&&v.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<v.length;m++)y=v[m],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}Bo=!!_c,Tc=_c=null,t.current=n,A=r;do try{for(m=t;A!==null;){var S=A.flags;if(S&36&&bS(m,A.alternate,A),S&128){v=void 0;var P=A.ref;if(P!==null){var x=A.stateNode;switch(A.tag){case 5:v=x;break;default:v=x}typeof P=="function"?P(v):P.current=v}}A=A.nextEffect}}catch(N){if(A===null)throw Error(T(330));an(A,N),A=A.nextEffect}while(A!==null);A=null,IS(),M=i}else t.current=n;if(nn)nn=!1,ss=t,os=e;else for(A=r;A!==null;)e=A.nextEffect,A.nextEffect=null,A.flags&8&&(S=A,S.sibling=null,S.stateNode=null),A=e;if(r=t.pendingLanes,r===0&&(It=null),r===1?t===ph?as++:(as=0,ph=t):as=0,n=n.stateNode,xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Nc,n,void 0,(n.current.flags&64)==64)}catch{}if(ut(t,xe()),Sa)throw Sa=!1,t=hh,hh=null,t;return(M&8)!=0||Et(),null}function zS(){for(;A!==null;){var t=A.alternate;Ia||ls===null||((A.flags&8)!=0?Up(A,ls)&&(Ia=!0):A.tag===13&&$S(t,A)&&Up(A,ls)&&(Ia=!0));var e=A.flags;(e&256)!=0&&MS(t,A),(e&512)==0||nn||(nn=!0,Wi(97,function(){return on(),null})),A=A.nextEffect}}function on(){if(os!==90){var t=97<os?97:os;return os=90,Ln(t,WS)}return!1}function HS(t,e){fh.push(e,t),nn||(nn=!0,Wi(97,function(){return on(),null}))}function Gg(t,e){dh.push(e,t),nn||(nn=!0,Wi(97,function(){return on(),null}))}function WS(){if(ss===null)return!1;var t=ss;if(ss=null,(M&48)!=0)throw Error(T(331));var e=M;M|=32;var n=dh;dh=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(T(330));an(s,l)}}for(n=fh,fh=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(T(330));an(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return M=e,Et(),!0}function Qg(t,e,n){e=eh(n,e),e=Og(t,e,1),en(t,e),e=Ze(),t=ka(t,1),t!==null&&(jo(t,1,e),ut(t,e))}function an(t,e){if(t.tag===3)Qg(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Qg(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){t=eh(e,t);var i=Dg(n,t,1);if(en(n,i),i=Ze(),n=ka(n,1),n!==null)jo(n,1,i),ut(n,i);else if(typeof r.componentDidCatch=="function"&&(It===null||!It.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function qS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ze(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Me&n)===n&&(Te===4||Te===3&&(Me&62914560)===Me&&500>xe()-uh?$r(t,0):ah|=n),ut(t,e)}function KS(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=Nr()===99?1:2:(Lt===0&&(Lt=xr),e=vr(62914560&~Lt),e===0&&(e=4194304))),n=Ze(),t=ka(t,e),t!==null&&(jo(t,e,n),ut(t,n))}var Yg;Yg=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)mt=!0;else if((n&r)!=0)mt=(t.flags&16384)!=0;else{switch(mt=!1,e.tag){case 3:Sg(e),jc();break;case 5:ng(e);break;case 1:qe(e.type)&&ea(e);break;case 4:Uc(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ie(ra,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?_g(t,e,n):(ie(se,se.current&1),e=Dt(t,e,n),e!==null?e.sibling:null);ie(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return Rg(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(se,se.current),r)break;return null;case 23:case 24:return e.lanes=0,Qc(t,e,n)}return Dt(t,e,n)}else mt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Rr(e,De.current),Pr(e,n),i=Hc(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)){var s=!0;ea(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bc(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&oa(e,r,o,t),i.updater=aa,e.stateNode=i,i._reactInternals=e,$c(e,r,t,n),e=Xc(null,e,r,!0,s,n)}else e.tag=0,Ge(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=QS(i),t=pt(i,t),s){case 0:e=Yc(null,e,i,t,n);break e;case 1:e=Eg(null,e,i,t,n);break e;case 11:e=gg(null,e,i,t,n);break e;case 14:e=yg(null,e,i,pt(i.type,t),r,n);break e}throw Error(T(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Eg(t,e,r,i,n);case 3:if(Sg(e),r=e.updateQueue,t===null||r===null)throw Error(T(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,Km(t,e),qi(e,r,null,n),r=e.memoizedState.element,r===i)jc(),e=Dt(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(tn=Tr(e.stateNode.containerInfo.firstChild),Ot=e,s=_t=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Dr.push(s);for(n=tg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Ge(t,e,r,n),jc();e=e.child}return e;case 5:return ng(e),t===null&&Vc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ic(r,i)?o=null:s!==null&&Ic(r,s)&&(e.flags|=16),wg(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&Vc(e),null;case 13:return _g(t,e,n);case 4:return Uc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ca(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),gg(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ie(ra,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=ot(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!We.current){e=Dt(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!=0){a.tag===1&&(u=Zt(-1,n&-n),u.tag=2,en(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),qm(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Pr(e,n),i=at(i,s.unstable_observedBits),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return i=e.type,s=pt(i,e.pendingProps),s=pt(i.type,s),yg(t,e,i,s,r,n);case 15:return vg(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,qe(r)?(t=!0,ea(e)):t=!1,Pr(e,n),Jm(e,r,i),$c(e,r,i,n),Xc(null,e,r,!0,t,n);case 19:return Rg(t,e,n);case 23:return Qc(t,e,n);case 24:return Qc(t,e,n)}throw Error(T(156,e.tag))};function GS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new GS(t,e,n,r)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QS(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===No)return 11;if(t===Po)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ra(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bt:return Ur(n.children,i,s,e);case gp:o=8,i|=16;break;case Ru:o=8,i|=1;break;case Ei:return t=ct(12,n,e,i|8),t.elementType=Ei,t.type=Ei,t.lanes=s,t;case Si:return t=ct(13,n,e,i),t.type=Si,t.elementType=Si,t.lanes=s,t;case Ao:return t=ct(19,n,e,i),t.elementType=Ao,t.lanes=s,t;case xu:return vh(n,i,s,e);case Lu:return t=ct(24,n,e,i),t.elementType=Lu,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nu:o=10;break e;case Au:o=9;break e;case No:o=11;break e;case Po:o=14;break e;case Pu:o=16,r=null;break e;case Ou:o=22;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function vh(t,e,n,r){return t=ct(23,t,r,e),t.elementType=xu,t.lanes=n,t}function wh(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function Eh(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YS(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.mutableSourceEagerHydrationData=null}function XS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Na(t,e,n,r){var i=e.current,s=Ze(),o=rn(i);e:if(n){n=n._reactInternals;t:{if(Pn(n)!==n||n.tag!==1)throw Error(T(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(qe(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(T(171))}if(n.tag===1){var l=n.type;if(qe(l)){n=bm(n,l,a);break e}}n=a}else n=Xt;return e.context===null?e.context=n:e.pendingContext=n,e=Zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),en(i,e),sn(i,o,s),o}function Sh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _h(t,e){Xg(t,e),(t=t.alternate)&&Xg(t,e)}function JS(){return null}function Th(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new YS(t,e,n!=null&&n.hydrate===!0),e=ct(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,bc(e),t[Ir]=n.current,km(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Th.prototype.render=function(t){Na(t,this._internalRoot,null,null)};Th.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Na(null,t,null,function(){e[Ir]=null})};function cs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ZS(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Th(t,0,e?{hydrate:!0}:void 0)}function Aa(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Sh(o);a.call(u)}}Na(e,o,t,i)}else{if(s=n._reactRootContainer=ZS(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Sh(o);l.call(u)}}zg(function(){Na(e,o,t,i)})}return Sh(o)}Fp=function(t){if(t.tag===13){var e=Ze();sn(t,4,e),_h(t,4)}};ec=function(t){if(t.tag===13){var e=Ze();sn(t,67108864,e),_h(t,67108864)}};Vp=function(t){if(t.tag===13){var e=Ze(),n=rn(t);sn(t,n,e),_h(t,n)}};jp=function(t,e){return e()};Ku=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jo(r);if(!i)throw Error(T(90));wp(r),Uu(r,i)}}}break;case"textarea":Ip(t,n);break;case"select":e=n.value,e!=null&&dr(t,!!n.multiple,e,!1)}};Gu=Bg;xp=function(t,e,n,r,i){var s=M;M|=4;try{return Ln(98,t.bind(null,e,n,r,i))}finally{M=s,M===0&&(Mr(),Et())}};Qu=function(){(M&49)==0&&(FS(),on())};Lp=function(t,e){var n=M;M|=2;try{return t(e)}finally{M=n,M===0&&(Mr(),Et())}};function Jg(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cs(e))throw Error(T(200));return XS(t,e,null,n)}var e_={Events:[Hi,kr,Jo,Op,Dp,on,{current:!1}]},hs={findFiberByHostInstance:On,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},t_={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$p(t),t===null?null:t.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Nc=Pa.inject(t_),xn=Pa}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_;st.createPortal=Jg;st.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):Error(T(268,Object.keys(t)));return t=$p(e),t=t===null?null:t.stateNode,t};st.flushSync=function(t,e){var n=M;if((n&48)!=0)return t(e);M|=1;try{if(t)return Ln(99,t.bind(null,e))}finally{M=n,Et()}};st.hydrate=function(t,e,n){if(!cs(e))throw Error(T(200));return Aa(null,t,e,!0,n)};st.render=function(t,e,n){if(!cs(e))throw Error(T(200));return Aa(null,t,e,!1,n)};st.unmountComponentAtNode=function(t){if(!cs(t))throw Error(T(40));return t._reactRootContainer?(zg(function(){Aa(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};st.unstable_batchedUpdates=Bg;st.unstable_createPortal=function(t,e){return Jg(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};st.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cs(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Aa(t,e,n,!1,r)};st.version="17.0.2";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(t){console.error(t)}}Zg(),Tu.exports=st;var UO=Tu.exports,ey={exports:{}},n_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r_=n_,i_=r_;function ty(){}function ny(){}ny.resetWarningCache=ty;var s_=function(){function t(r,i,s,o,a,l){if(l!==i_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ny,resetWarningCache:ty};return n.PropTypes=n,n};ey.exports=s_();var un=aE.createContext(null);function o_(t){t()}var ry=o_,a_=function(e){return ry=e},l_=function(){return ry};function u_(){var t=l_(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],s=e;s;)i.push(s),s=s.next;return i},subscribe:function(i){var s=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!s||e===null||(s=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var iy={notify:function(){},get:function(){return[]}};function sy(t,e){var n,r=iy;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=u_())}function u(){n&&(n(),n=void 0,r.clear(),r=iy)}var c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:function(){return r}};return c}var Ih=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?O.exports.useLayoutEffect:O.exports.useEffect,Oa={exports:{}},fs={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_=O.exports,oy=60103;fs.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var ay=Symbol.for;oy=ay("react.element"),fs.Fragment=ay("react.fragment")}var h_=c_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f_=Object.prototype.hasOwnProperty,d_={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)f_.call(e,r)&&!d_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oy,type:t,key:s,ref:o,props:i,_owner:h_.current}}fs.jsx=ly;fs.jsxs=ly;Oa.exports=fs;const p_=Oa.exports.jsx,FO=Oa.exports.jsxs,VO=Oa.exports.Fragment;function jO(t){var e=t.store,n=t.context,r=t.children,i=O.exports.useMemo(function(){var a=sy(e);return a.onStateChange=a.notifyNestedSubs,{store:e,subscription:a}},[e]),s=O.exports.useMemo(function(){return e.getState()},[e]);Ih(function(){var a=i.subscription;return a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,s]);var o=n||un;return p_(o.Provider,{value:i,children:r})}function Da(){return Da=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Da.apply(this,arguments)}var uy={exports:{}},G={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=typeof Symbol=="function"&&Symbol.for,kh=ge?Symbol.for("react.element"):60103,Ch=ge?Symbol.for("react.portal"):60106,xa=ge?Symbol.for("react.fragment"):60107,La=ge?Symbol.for("react.strict_mode"):60108,Ma=ge?Symbol.for("react.profiler"):60114,ba=ge?Symbol.for("react.provider"):60109,$a=ge?Symbol.for("react.context"):60110,Rh=ge?Symbol.for("react.async_mode"):60111,Ua=ge?Symbol.for("react.concurrent_mode"):60111,Fa=ge?Symbol.for("react.forward_ref"):60112,Va=ge?Symbol.for("react.suspense"):60113,m_=ge?Symbol.for("react.suspense_list"):60120,ja=ge?Symbol.for("react.memo"):60115,Ba=ge?Symbol.for("react.lazy"):60116,g_=ge?Symbol.for("react.block"):60121,y_=ge?Symbol.for("react.fundamental"):60117,v_=ge?Symbol.for("react.responder"):60118,w_=ge?Symbol.for("react.scope"):60119;function et(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case kh:switch(t=t.type,t){case Rh:case Ua:case xa:case Ma:case La:case Va:return t;default:switch(t=t&&t.$$typeof,t){case $a:case Fa:case Ba:case ja:case ba:return t;default:return e}}case Ch:return e}}}function cy(t){return et(t)===Ua}G.AsyncMode=Rh;G.ConcurrentMode=Ua;G.ContextConsumer=$a;G.ContextProvider=ba;G.Element=kh;G.ForwardRef=Fa;G.Fragment=xa;G.Lazy=Ba;G.Memo=ja;G.Portal=Ch;G.Profiler=Ma;G.StrictMode=La;G.Suspense=Va;G.isAsyncMode=function(t){return cy(t)||et(t)===Rh};G.isConcurrentMode=cy;G.isContextConsumer=function(t){return et(t)===$a};G.isContextProvider=function(t){return et(t)===ba};G.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===kh};G.isForwardRef=function(t){return et(t)===Fa};G.isFragment=function(t){return et(t)===xa};G.isLazy=function(t){return et(t)===Ba};G.isMemo=function(t){return et(t)===ja};G.isPortal=function(t){return et(t)===Ch};G.isProfiler=function(t){return et(t)===Ma};G.isStrictMode=function(t){return et(t)===La};G.isSuspense=function(t){return et(t)===Va};G.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===xa||t===Ua||t===Ma||t===La||t===Va||t===m_||typeof t=="object"&&t!==null&&(t.$$typeof===Ba||t.$$typeof===ja||t.$$typeof===ba||t.$$typeof===$a||t.$$typeof===Fa||t.$$typeof===y_||t.$$typeof===v_||t.$$typeof===w_||t.$$typeof===g_)};G.typeOf=et;uy.exports=G;var hy=uy.exports,E_={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},S_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fy={};fy[hy.ForwardRef]=E_;fy[hy.Memo]=S_;var X={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=60103,Ha=60106,ds=60107,ps=60108,ms=60114,gs=60109,ys=60110,vs=60112,ws=60113,Nh=60120,Es=60115,Ss=60116,dy=60121,py=60122,my=60117,gy=60129,yy=60131;if(typeof Symbol=="function"&&Symbol.for){var Ie=Symbol.for;za=Ie("react.element"),Ha=Ie("react.portal"),ds=Ie("react.fragment"),ps=Ie("react.strict_mode"),ms=Ie("react.profiler"),gs=Ie("react.provider"),ys=Ie("react.context"),vs=Ie("react.forward_ref"),ws=Ie("react.suspense"),Nh=Ie("react.suspense_list"),Es=Ie("react.memo"),Ss=Ie("react.lazy"),dy=Ie("react.block"),py=Ie("react.server.block"),my=Ie("react.fundamental"),gy=Ie("react.debug_trace_mode"),yy=Ie("react.legacy_hidden")}function gt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case za:switch(t=t.type,t){case ds:case ms:case ps:case ws:case Nh:return t;default:switch(t=t&&t.$$typeof,t){case ys:case vs:case Ss:case Es:case gs:return t;default:return e}}case Ha:return e}}}var __=gs,T_=za,I_=vs,k_=ds,C_=Ss,R_=Es,N_=Ha,A_=ms,P_=ps,O_=ws;X.ContextConsumer=ys;X.ContextProvider=__;X.Element=T_;X.ForwardRef=I_;X.Fragment=k_;X.Lazy=C_;X.Memo=R_;X.Portal=N_;X.Profiler=A_;X.StrictMode=P_;X.Suspense=O_;X.isAsyncMode=function(){return!1};X.isConcurrentMode=function(){return!1};X.isContextConsumer=function(t){return gt(t)===ys};X.isContextProvider=function(t){return gt(t)===gs};X.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===za};X.isForwardRef=function(t){return gt(t)===vs};X.isFragment=function(t){return gt(t)===ds};X.isLazy=function(t){return gt(t)===Ss};X.isMemo=function(t){return gt(t)===Es};X.isPortal=function(t){return gt(t)===Ha};X.isProfiler=function(t){return gt(t)===ms};X.isStrictMode=function(t){return gt(t)===ps};X.isSuspense=function(t){return gt(t)===ws};X.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ds||t===ms||t===gy||t===ps||t===ws||t===Nh||t===yy||typeof t=="object"&&t!==null&&(t.$$typeof===Ss||t.$$typeof===Es||t.$$typeof===gs||t.$$typeof===ys||t.$$typeof===vs||t.$$typeof===my||t.$$typeof===dy||t[0]===py)};X.typeOf=gt;function vy(){var t=O.exports.useContext(un);return t}function wy(t){t===void 0&&(t=un);var e=t===un?vy:function(){return O.exports.useContext(t)};return function(){var r=e(),i=r.store;return i}}var D_=wy();function x_(t){t===void 0&&(t=un);var e=t===un?D_:wy(t);return function(){var r=e();return r.dispatch}}var BO=x_(),L_=function(e,n){return e===n};function M_(t,e,n,r){var i=O.exports.useReducer(function(E){return E+1},0),s=i[1],o=O.exports.useMemo(function(){return sy(n,r)},[n,r]),a=O.exports.useRef(),l=O.exports.useRef(),u=O.exports.useRef(),c=O.exports.useRef(),h=n.getState(),f;try{if(t!==l.current||h!==u.current||a.current){var g=t(h);c.current===void 0||!e(g,c.current)?f=g:f=c.current}else f=c.current}catch(E){throw a.current&&(E.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),E}return Ih(function(){l.current=t,u.current=h,c.current=f,a.current=void 0}),Ih(function(){function E(){try{var w=n.getState();if(w===u.current)return;var p=l.current(w);if(e(p,c.current))return;c.current=p,u.current=w}catch(d){a.current=d}s()}return o.onStateChange=E,o.trySubscribe(),E(),function(){return o.tryUnsubscribe()}},[n,o]),f}function b_(t){t===void 0&&(t=un);var e=t===un?vy:function(){return O.exports.useContext(t)};return function(r,i){i===void 0&&(i=L_);var s=e(),o=s.store,a=s.subscription,l=M_(r,i,o,a);return O.exports.useDebugValue(l),l}}var zO=b_();a_(Tu.exports.unstable_batchedUpdates);var Vn,Ah=Vn||(Vn={});Ah.Pop="POP";Ah.Push="PUSH";Ah.Replace="REPLACE";var Ey=function(t){return t};function Sy(t){t.preventDefault(),t.returnValue=""}function _y(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter(function(n){return n!==e})}},call:function(e){t.forEach(function(n){return n&&n(e)})}}}function $_(){return Math.random().toString(36).substr(2,8)}function Ph(t){var e=t.pathname;e=e===void 0?"/":e;var n=t.search;return n=n===void 0?"":n,t=t.hash,t=t===void 0?"":t,n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function jn(t){var e={};if(t){var n=t.indexOf("#");0<=n&&(e.hash=t.substr(n),t=t.substr(0,n)),n=t.indexOf("?"),0<=n&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function U_(t){function e(){var p=l.location,d=u.state||{};return[d.idx,Ey({pathname:p.pathname,search:p.search,hash:p.hash,state:d.usr||null,key:d.key||"default"})]}function n(p){return typeof p=="string"?p:Ph(p)}function r(p,d){return d===void 0&&(d=null),Ey(Da({pathname:g.pathname,hash:"",search:""},typeof p=="string"?jn(p):p,{state:d,key:$_()}))}function i(p){h=p,p=e(),f=p[0],g=p[1],E.call({action:h,location:g})}function s(p,d){function m(){s(p,d)}var v=Vn.Push,y=r(p,d);if(!w.length||(w.call({action:v,location:y,retry:m}),!1)){var I=[{usr:y.state,key:y.key,idx:f+1},n(y)];y=I[0],I=I[1];try{u.pushState(y,"",I)}catch{l.location.assign(I)}i(v)}}function o(p,d){function m(){o(p,d)}var v=Vn.Replace,y=r(p,d);w.length&&(w.call({action:v,location:y,retry:m}),1)||(y=[{usr:y.state,key:y.key,idx:f},n(y)],u.replaceState(y[0],"",y[1]),i(v))}function a(p){u.go(p)}t===void 0&&(t={}),t=t.window;var l=t===void 0?document.defaultView:t,u=l.history,c=null;l.addEventListener("popstate",function(){if(c)w.call(c),c=null;else{var p=Vn.Pop,d=e(),m=d[0];if(d=d[1],w.length){if(m!=null){var v=f-m;v&&(c={action:p,location:d,retry:function(){a(-1*v)}},a(v))}}else i(p)}});var h=Vn.Pop;t=e();var f=t[0],g=t[1],E=_y(),w=_y();return f==null&&(f=0,u.replaceState(Da({},u.state,{idx:f}),"")),{get action(){return h},get location(){return g},createHref:n,push:s,replace:o,go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(p){return E.push(p)},block:function(p){var d=w.push(p);return w.length===1&&l.addEventListener("beforeunload",Sy),function(){d(),w.length||l.removeEventListener("beforeunload",Sy)}}}}/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yt(t,e){if(!t)throw new Error(e)}const Oh=O.exports.createContext(null),Dh=O.exports.createContext(null),Fr=O.exports.createContext({outlet:null,matches:[]});function HO(t){let{to:e,replace:n,state:r}=t;Vr()||yt(!1);let i=Ty();return O.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function F_(t){return H_(t.context)}function V_(t){yt(!1)}function j_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vn.Pop,navigator:s,static:o=!1}=t;Vr()&&yt(!1);let a=cT(e),l=O.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=jn(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:g="default"}=r,E=O.exports.useMemo(()=>{let w=Ny(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:f,key:g}},[a,u,c,h,f,g]);return E==null?null:O.exports.createElement(Oh.Provider,{value:l},O.exports.createElement(Dh.Provider,{children:n,value:{location:E,navigationType:i}}))}function WO(t){let{children:e,location:n}=t;return W_(xh(e),n)}function B_(t){Vr()||yt(!1);let{basename:e,navigator:n}=O.exports.useContext(Oh),{hash:r,pathname:i,search:s}=Iy(t),o=i;if(e!=="/"){let a=uT(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):cn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Vr(){return O.exports.useContext(Dh)!=null}function Wa(){return Vr()||yt(!1),O.exports.useContext(Dh).location}function Ty(){Vr()||yt(!1);let{basename:t,navigator:e}=O.exports.useContext(Oh),{matches:n}=O.exports.useContext(Fr),{pathname:r}=Wa(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=O.exports.useRef(!1);return O.exports.useEffect(()=>{s.current=!0}),O.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Ry(a,JSON.parse(i),r);t!=="/"&&(u.pathname=cn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const z_=O.exports.createContext(null);function H_(t){let e=O.exports.useContext(Fr).outlet;return e&&O.exports.createElement(z_.Provider,{value:t},e)}function qO(){let{matches:t}=O.exports.useContext(Fr),e=t[t.length-1];return e?e.params:{}}function Iy(t){let{matches:e}=O.exports.useContext(Fr),{pathname:n}=Wa(),r=JSON.stringify(e.map(i=>i.pathnameBase));return O.exports.useMemo(()=>Ry(t,JSON.parse(r),n),[t,r,n])}function W_(t,e){Vr()||yt(!1);let{matches:n}=O.exports.useContext(Fr),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Wa(),a;if(e){var l;let f=typeof e=="string"?jn(e):e;s==="/"||((l=f.pathname)==null?void 0:l.startsWith(s))||yt(!1),a=f}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",h=q_(t,{pathname:c});return rT(h&&h.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:cn([s,f.pathname]),pathnameBase:f.pathnameBase==="/"?s:cn([s,f.pathnameBase])})),n)}function xh(t){let e=[];return O.exports.Children.forEach(t,n=>{if(!O.exports.isValidElement(n))return;if(n.type===O.exports.Fragment){e.push.apply(e,xh(n.props.children));return}n.type!==V_&&yt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=xh(n.props.children)),e.push(r)}),e}function q_(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?jn(e):e,i=Ny(r.pathname||"/",n);if(i==null)return null;let s=ky(t);K_(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=nT(s[a],i);return o}function ky(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||yt(!1),o.relativePath=o.relativePath.slice(r.length));let a=cn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&yt(!1),ky(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:eT(a,i.index),routesMeta:l})}),e}function K_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const G_=/^:\w+$/,Q_=3,Y_=2,X_=1,J_=10,Z_=-2,Cy=t=>t==="*";function eT(t,e){let n=t.split("/"),r=n.length;return n.some(Cy)&&(r+=Z_),e&&(r+=Y_),n.filter(i=>!Cy(i)).reduce((i,s)=>i+(G_.test(s)?Q_:s===""?X_:J_),r)}function tT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=iT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:cn([i,c.pathname]),pathnameBase:cn([i,c.pathnameBase]),route:h}),c.pathnameBase!=="/"&&(i=cn([i,c.pathnameBase]))}return s}function rT(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>O.exports.createElement(Fr.Provider,{children:r.route.element!==void 0?r.route.element:O.exports.createElement(F_,null),value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function iT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=oT(a[h]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function sT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function oT(t,e){try{return decodeURIComponent(t)}catch{return t}}function aT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?jn(t):t;return{pathname:n?n.startsWith("/")?n:lT(n,e):e,search:hT(r),hash:fT(i)}}function lT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ry(t,e,n){let r=typeof t=="string"?jn(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=aT(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function uT(t){return t===""||t.pathname===""?"/":typeof t=="string"?jn(t).pathname:t.pathname}function Ny(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const cn=t=>t.join("/").replace(/\/\/+/g,"/"),cT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lh(){return Lh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lh.apply(this,arguments)}function dT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const pT=["onClick","reloadDocument","replace","state","target","to"];function KO(t){let{basename:e,children:n,window:r}=t,i=O.exports.useRef();i.current==null&&(i.current=U_({window:r}));let s=i.current,[o,a]=O.exports.useState({action:s.action,location:s.location});return O.exports.useLayoutEffect(()=>s.listen(a),[s]),O.exports.createElement(j_,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function mT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const GO=O.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=dT(e,pT),c=B_(l),h=gT(l,{replace:s,state:o,target:a});function f(g){r&&r(g),!g.defaultPrevented&&!i&&h(g)}return O.exports.createElement("a",Lh({},u,{href:c,onClick:f,ref:n,target:a}))});function gT(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=Ty(),o=Wa(),a=Iy(t);return O.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!mT(l)){l.preventDefault();let u=!!r||Ph(o)===Ph(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}function qa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qa=function(n){return typeof n}:qa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qa(t)}function yT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ay(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function vT(t,e,n){return e&&Ay(t.prototype,e),n&&Ay(t,n),t}function wT(t,e){return e&&(qa(e)==="object"||typeof e=="function")?e:Ka(t)}function Mh(t){return Mh=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Mh(t)}function Ka(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ET(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bh(t,e)}function bh(t,e){return bh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},bh(t,e)}function Ga(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ST=function(t){ET(e,t);function e(){var n,r;yT(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=wT(this,(n=Mh(e)).call.apply(n,[this].concat(s))),Ga(Ka(r),"state",{bootstrapped:!1}),Ga(Ka(r),"_unsubscribe",void 0),Ga(Ka(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return vT(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(O.exports.PureComponent);Ga(ST,"defaultProps",{children:null,loading:null});function je(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Py=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),$h=function(){return Math.random().toString(36).substring(7).split("").join(".")},Qa={INIT:"@@redux/INIT"+$h(),REPLACE:"@@redux/REPLACE"+$h(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+$h()}};function _T(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Oy(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(je(0));if(typeof e=="function"&&typeof n=="undefined"&&(n=e,e=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(je(1));return n(Oy)(t,e)}if(typeof t!="function")throw new Error(je(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(je(3));return s}function h(w){if(typeof w!="function")throw new Error(je(4));if(l)throw new Error(je(5));var p=!0;return u(),a.push(w),function(){if(!!p){if(l)throw new Error(je(6));p=!1,u();var m=a.indexOf(w);a.splice(m,1),o=null}}}function f(w){if(!_T(w))throw new Error(je(7));if(typeof w.type=="undefined")throw new Error(je(8));if(l)throw new Error(je(9));try{l=!0,s=i(s,w)}finally{l=!1}for(var p=o=a,d=0;d<p.length;d++){var m=p[d];m()}return w}function g(w){if(typeof w!="function")throw new Error(je(10));i=w,f({type:Qa.REPLACE})}function E(){var w,p=h;return w={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(je(11));function v(){m.next&&m.next(c())}v();var y=p(v);return{unsubscribe:y}}},w[Py]=function(){return this},w}return f({type:Qa.INIT}),r={dispatch:f,subscribe:h,getState:c,replaceReducer:g},r[Py]=E,r}function TT(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Qa.INIT});if(typeof r=="undefined")throw new Error(je(12));if(typeof n(void 0,{type:Qa.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(je(13))})}function QO(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{TT(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},f=0;f<s.length;f++){var g=s[f],E=n[g],w=l[g],p=E(w,u);if(typeof p=="undefined")throw u&&u.type,new Error(je(14));h[g]=p,c=c||p!==w}return c=c||s.length!==Object.keys(l).length,c?h:l}}var Uh="persist:",Dy="persist/FLUSH",Fh="persist/REHYDRATE",xy="persist/PAUSE",Ly="persist/PERSIST",My="persist/PURGE",by="persist/REGISTER",IT=-1;function Ya(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ya=function(n){return typeof n}:Ya=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ya(t)}function $y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kT(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$y(n,!0).forEach(function(r){CT(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$y(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function CT(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function RT(t,e,n,r){r.debug;var i=kT({},n);return t&&Ya(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function NT(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:Uh).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(I){return I}:typeof t.serialize=="function"?a=t.serialize:a=AT;var l=t.writeFailHandler||null,u={},c={},h=[],f=null,g=null,E=function(I){Object.keys(I).forEach(function(S){!d(S)||u[S]!==I[S]&&h.indexOf(S)===-1&&h.push(S)}),Object.keys(u).forEach(function(S){I[S]===void 0&&d(S)&&h.indexOf(S)===-1&&u[S]!==void 0&&h.push(S)}),f===null&&(f=setInterval(w,i)),u=I};function w(){if(h.length===0){f&&clearInterval(f),f=null;return}var y=h.shift(),I=r.reduce(function(S,P){return P.in(S,y,u)},u[y]);if(I!==void 0)try{c[y]=a(I)}catch(S){console.error("redux-persist/createPersistoid: error serializing state",S)}else delete c[y];h.length===0&&p()}function p(){Object.keys(c).forEach(function(y){u[y]===void 0&&delete c[y]}),g=o.setItem(s,a(c)).catch(m)}function d(y){return!(n&&n.indexOf(y)===-1&&y!=="_persist"||e&&e.indexOf(y)!==-1)}function m(y){l&&l(y)}var v=function(){for(;h.length!==0;)w();return g||Promise.resolve()};return{update:E,flush:v}}function AT(t){return JSON.stringify(t)}function PT(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Uh).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=OT,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function OT(t){return JSON.parse(t)}function DT(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Uh).concat(t.key);return e.removeItem(n,xT)}function xT(t){}function Uy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Mt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Uy(n,!0).forEach(function(r){LT(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Uy(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function LT(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function MT(t,e){if(t==null)return{};var n=bT(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function bT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var $T=5e3;function YO(t,e){var n=t.version!==void 0?t.version:IT;t.debug;var r=t.stateReconciler===void 0?RT:t.stateReconciler,i=t.getStoredState||PT,s=t.timeout!==void 0?t.timeout:$T,o=null,a=!1,l=!0,u=function(h){return h._persist.rehydrated&&o&&!l&&o.update(h),h};return function(c,h){var f=c||{},g=f._persist,E=MT(f,["_persist"]),w=E;if(h.type===Ly){var p=!1,d=function(x,N){p||(h.rehydrate(t.key,x,N),p=!0)};if(s&&setTimeout(function(){!p&&d(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=NT(t)),g)return Mt({},e(w,h),{_persist:g});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(t.key),i(t).then(function(P){var x=t.migrate||function(N,ue){return Promise.resolve(N)};x(P,n).then(function(N){d(N)},function(N){d(void 0,N)})},function(P){d(void 0,P)}),Mt({},e(w,h),{_persist:{version:n,rehydrated:!1}})}else{if(h.type===My)return a=!0,h.result(DT(t)),Mt({},e(w,h),{_persist:g});if(h.type===Dy)return h.result(o&&o.flush()),Mt({},e(w,h),{_persist:g});if(h.type===xy)l=!0;else if(h.type===Fh){if(a)return Mt({},w,{_persist:Mt({},g,{rehydrated:!0})});if(h.key===t.key){var m=e(w,h),v=h.payload,y=r!==!1&&v!==void 0?r(v,c,m,t):m,I=Mt({},y,{_persist:Mt({},g,{rehydrated:!0})});return u(I)}}}if(!g)return e(c,h);var S=e(w,h);return S===w?c:u(Mt({},S,{_persist:g}))}}function Fy(t){return VT(t)||FT(t)||UT()}function UT(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function FT(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function VT(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function Vy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Vh(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vy(n,!0).forEach(function(r){jT(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vy(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jT(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var jy={registry:[],bootstrapped:!1},BT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jy,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case by:return Vh({},e,{registry:[].concat(Fy(e.registry),[n.key])});case Fh:var r=e.registry.indexOf(n.key),i=Fy(e.registry);return i.splice(r,1),Vh({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function XO(t,e,n){var r=n||!1,i=Oy(BT,jy,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:by,key:u})},o=function(u,c,h){var f={type:Fh,payload:c,err:h,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Vh({},i,{purge:function(){var u=[];return t.dispatch({type:My,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:Dy,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:xy})},persist:function(){t.dispatch({type:Ly,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var jh={},Bh={};Bh.__esModule=!0;Bh.default=WT;function Xa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xa=function(n){return typeof n}:Xa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xa(t)}function zh(){}var zT={getItem:zh,setItem:zh,removeItem:zh};function HT(t){if((typeof self=="undefined"?"undefined":Xa(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function WT(t){var e="".concat(t,"Storage");return HT(e)?self[e]:zT}jh.__esModule=!0;jh.default=GT;var qT=KT(Bh);function KT(t){return t&&t.__esModule?t:{default:t}}function GT(t){var e=(0,qT.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var QT=void 0,YT=XT(jh);function XT(t){return t&&t.__esModule?t:{default:t}}var JT=(0,YT.default)("local");QT=JT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ZT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const E=u<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},nI=function(t){try{return tI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function By(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function zy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){return ye().indexOf("Electron/")>=0}function Wy(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sI(){return ye().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=oI,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,a,r)}}function aI(t,e){return t.replace(lI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lI=/\{\$([^}]+)}/g;function uI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ja(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qy(s)&&qy(o)){if(!Ja(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cI(t,e){const n=new hI(t,e);return n.subscribe.bind(n)}class hI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hh),i.error===void 0&&(i.error=Hh),i.complete===void 0&&(i.complete=Hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mI(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pI(t){return t===zn?void 0:t}function mI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const yI={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},vI=q.INFO,wI={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},EI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wh{constructor(e){this.name=e,this._logLevel=vI,this._logHandler=EI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_I(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _I(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qh="@firebase/app",Ky="0.7.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new Wh("@firebase/app"),TI="@firebase/app-compat",II="@firebase/analytics-compat",kI="@firebase/analytics",CI="@firebase/app-check-compat",RI="@firebase/app-check",NI="@firebase/auth",AI="@firebase/auth-compat",PI="@firebase/database",OI="@firebase/database-compat",DI="@firebase/functions",xI="@firebase/functions-compat",LI="@firebase/installations",MI="@firebase/installations-compat",bI="@firebase/messaging",$I="@firebase/messaging-compat",UI="@firebase/performance",FI="@firebase/performance-compat",VI="@firebase/remote-config",jI="@firebase/remote-config-compat",BI="@firebase/storage",zI="@firebase/storage-compat",HI="@firebase/firestore",WI="@firebase/firestore-compat",qI="firebase",KI="9.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="[DEFAULT]",GI={[qh]:"fire-core",[TI]:"fire-core-compat",[kI]:"fire-analytics",[II]:"fire-analytics-compat",[RI]:"fire-app-check",[CI]:"fire-app-check-compat",[NI]:"fire-auth",[AI]:"fire-auth-compat",[PI]:"fire-rtdb",[OI]:"fire-rtdb-compat",[DI]:"fire-fn",[xI]:"fire-fn-compat",[LI]:"fire-iid",[MI]:"fire-iid-compat",[bI]:"fire-fcm",[$I]:"fire-fcm-compat",[UI]:"fire-perf",[FI]:"fire-perf-compat",[VI]:"fire-rc",[jI]:"fire-rc-compat",[BI]:"fire-gcs",[zI]:"fire-gcs-compat",[HI]:"fire-fst",[WI]:"fire-fst-compat","fire-js":"fire-js",[qI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Map,Gh=new Map;function QI(t,e){try{t.container.addComponent(e)}catch(n){Kh.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cs(t){const e=t.name;if(Gh.has(e))return Kh.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of Za.values())QI(n,t);return!0}function Qh(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},el=new _s("app","Firebase",YI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw el.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=KI;function JO(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Gy,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw el.create("bad-app-name",{appName:String(r)});const i=Za.get(r);if(i){if(Ja(t,i.options)&&Ja(n,i.config))return i;throw el.create("duplicate-app",{appName:r})}const s=new gI(r);for(const a of Gh.values())s.addComponent(a);const o=new XI(t,n,s);return Za.set(r,o),o}function Qy(t=Gy){const e=Za.get(t);if(!e)throw el.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let i=(r=GI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kh.warn(a.join(" "));return}Cs(new jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){Cs(new jr("platform-logger",e=>new SI(e),"PRIVATE")),hn(qh,Ky,t),hn(qh,Ky,"esm2017"),hn("fire-js","")}JI("");var ZI="firebase",ek="9.6.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(ZI,ek,"app");var tk=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},R,Yh=Yh||{},$=tk||self;function tl(){}function Xh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ns(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nk(t){return Object.prototype.hasOwnProperty.call(t,Jh)&&t[Jh]||(t[Jh]=++rk)}var Jh="closure_uid_"+(1e9*Math.random()>>>0),rk=0;function ik(t,e,n){return t.call.apply(t.bind,arguments)}function sk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=ik:ke=sk,ke.apply(null,arguments)}function nl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function fn(){this.s=this.s,this.o=this.o}var ok=0,ak={};fn.prototype.s=!1;fn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),ok!=0)){var t=nk(this);delete ak[t]}};fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Xy=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function lk(t){e:{var e=Zk;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Jy(t){return Array.prototype.concat.apply([],arguments)}function Zh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function rl(t){return/^[\s\xa0]*$/.test(t)}var Zy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Be(t,e){return t.indexOf(e)!=-1}function ef(t,e){return t<e?-1:t>e?1:0}var ze;e:{var ev=$.navigator;if(ev){var tv=ev.userAgent;if(tv){ze=tv;break e}}ze=""}function tf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nv(t){const e={};for(const n in t)e[n]=t[n];return e}var rv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function iv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<rv.length;s++)n=rv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function nf(t){return nf[" "](t),t}nf[" "]=tl;function uk(t){var e=fk;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ck=Be(ze,"Opera"),Br=Be(ze,"Trident")||Be(ze,"MSIE"),sv=Be(ze,"Edge"),rf=sv||Br,ov=Be(ze,"Gecko")&&!(Be(ze.toLowerCase(),"webkit")&&!Be(ze,"Edge"))&&!(Be(ze,"Trident")||Be(ze,"MSIE"))&&!Be(ze,"Edge"),hk=Be(ze.toLowerCase(),"webkit")&&!Be(ze,"Edge");function av(){var t=$.document;return t?t.documentMode:void 0}var il;e:{var sf="",of=function(){var t=ze;if(ov)return/rv:([^\);]+)(\)|;)/.exec(t);if(sv)return/Edge\/([\d\.]+)/.exec(t);if(Br)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hk)return/WebKit\/(\S+)/.exec(t);if(ck)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(of&&(sf=of?of[1]:""),Br){var af=av();if(af!=null&&af>parseFloat(sf)){il=String(af);break e}}il=sf}var fk={};function dk(){return uk(function(){let t=0;const e=Zy(String(il)).split("."),n=Zy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=ef(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ef(i[2].length==0,s[2].length==0)||ef(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var lf;if($.document&&Br){var lv=av();lf=lv||parseInt(il,10)||void 0}else lf=void 0;var pk=lf,mk=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",tl,e),$.removeEventListener("test",tl,e)}catch{}return t}();function be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};function As(t,e){if(be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ov){e:{try{nf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&As.Z.h.call(this)}}Ce(As,be);var gk={2:"touch",3:"pen",4:"mouse"};As.prototype.h=function(){As.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ps="closure_listenable_"+(1e6*Math.random()|0),yk=0;function vk(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++yk,this.ca=this.fa=!1}function sl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ol(t){this.src=t,this.g={},this.h=0}ol.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cf(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new vk(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function uf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Yy(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(sl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var hf="closure_lm_"+(1e6*Math.random()|0),ff={};function uv(t,e,n,r,i){if(r&&r.once)return hv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)uv(t,e[s],n,r,i);return null}return n=gf(n),t&&t[Ps]?t.N(e,n,Ns(r)?!!r.capture:!!r,i):cv(t,e,n,!1,r,i)}function cv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ns(i)?!!i.capture:!!i,a=pf(t);if(a||(t[hf]=a=new ol(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)mk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(dv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wk(){function t(n){return e.call(t.src,t.listener,n)}var e=Ek;return t}function hv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)hv(t,e[s],n,r,i);return null}return n=gf(n),t&&t[Ps]?t.O(e,n,Ns(r)?!!r.capture:!!r,i):cv(t,e,n,!0,r,i)}function fv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)fv(t,e[s],n,r,i);else r=Ns(r)?!!r.capture:!!r,n=gf(n),t&&t[Ps]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cf(s,n,r,i),-1<n&&(sl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=pf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cf(e,n,r,i)),(n=-1<t?e[t]:null)&&df(n))}function df(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ps])uf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(dv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pf(e))?(uf(n,t),n.h==0&&(n.src=null,e[hf]=null)):sl(t)}}}function dv(t){return t in ff?ff[t]:ff[t]="on"+t}function Ek(t,e){if(t.ca)t=!0;else{e=new As(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&df(t),t=n.call(r,e)}return t}function pf(t){return t=t[hf],t instanceof ol?t:null}var mf="__closure_events_fn_"+(1e9*Math.random()>>>0);function gf(t){return typeof t=="function"?t:(t[mf]||(t[mf]=function(e){return t.handleEvent(e)}),t[mf])}function ve(){fn.call(this),this.i=new ol(this),this.P=this,this.I=null}Ce(ve,fn);ve.prototype[Ps]=!0;ve.prototype.removeEventListener=function(t,e,n,r){fv(this,t,e,n,r)};function Re(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new be(e,t);else if(e instanceof be)e.target=e.target||t;else{var i=e;e=new be(r,t),iv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=al(o,r,!0,e)&&i}if(o=e.g=t,i=al(o,r,!0,e)&&i,i=al(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=al(o,r,!1,e)&&i}ve.prototype.M=function(){if(ve.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)sl(n[r]);delete t.g[e],t.h--}}this.I=null};ve.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ve.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function al(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&uf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var yf=$.JSON.stringify;function Sk(){var t=mv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _k{constructor(){this.h=this.g=null}add(e,n){const r=pv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tk,t=>t.reset());class Tk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ik(t){$.setTimeout(()=>{throw t},0)}function vf(t,e){wf||kk(),Ef||(wf(),Ef=!0),mv.add(t,e)}var wf;function kk(){var t=$.Promise.resolve(void 0);wf=function(){t.then(Ck)}}var Ef=!1,mv=new _k;function Ck(){for(var t;t=Sk();){try{t.h.call(t.g)}catch(n){Ik(n)}var e=pv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ef=!1}function ll(t,e){ve.call(this),this.h=t||1,this.g=e||$,this.j=ke(this.kb,this),this.l=Date.now()}Ce(ll,ve);R=ll.prototype;R.da=!1;R.S=null;R.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Re(this,"tick"),this.da&&(Sf(this),this.start()))}};R.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sf(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}R.M=function(){ll.Z.M.call(this),Sf(this),delete this.g};function _f(t,e,n){if(typeof t=="function")n&&(t=ke(t,n));else if(t&&typeof t.handleEvent=="function")t=ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function gv(t){t.g=_f(()=>{t.g=null,t.i&&(t.i=!1,gv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Rk extends fn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gv(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(t){fn.call(this),this.h=t,this.g={}}Ce(Os,fn);var yv=[];function vv(t,e,n,r){Array.isArray(n)||(n&&(yv[0]=n.toString()),n=yv);for(var i=0;i<n.length;i++){var s=uv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function wv(t){tf(t.g,function(e,n){this.g.hasOwnProperty(n)&&df(e)},t),t.g={}}Os.prototype.M=function(){Os.Z.M.call(this),wv(this)};Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ul(){this.g=!0}ul.prototype.Aa=function(){this.g=!1};function Nk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Ak(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function zr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ok(t,n)+(r?" "+r:"")})}function Pk(t,e){t.info(function(){return"TIMEOUT: "+e})}ul.prototype.info=function(){};function Ok(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return yf(n)}catch{return e}}var Hn={},Ev=null;function cl(){return Ev=Ev||new ve}Hn.Ma="serverreachability";function Sv(t){be.call(this,Hn.Ma,t)}Ce(Sv,be);function Ds(t){const e=cl();Re(e,new Sv(e,t))}Hn.STAT_EVENT="statevent";function _v(t,e){be.call(this,Hn.STAT_EVENT,t),this.stat=e}Ce(_v,be);function He(t){const e=cl();Re(e,new _v(e,t))}Hn.Na="timingevent";function Tv(t,e){be.call(this,Hn.Na,t),this.size=e}Ce(Tv,be);function xs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var hl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Iv={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tf(){}Tf.prototype.h=null;function kv(t){return t.h||(t.h=t.i())}function Cv(){}var Ls={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function If(){be.call(this,"d")}Ce(If,be);function kf(){be.call(this,"c")}Ce(kf,be);var Cf;function fl(){}Ce(fl,Tf);fl.prototype.g=function(){return new XMLHttpRequest};fl.prototype.i=function(){return{}};Cf=new fl;function Ms(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Os(this),this.P=Dk,t=rf?125:void 0,this.W=new ll(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Rv}function Rv(){this.i=null,this.g="",this.h=!1}var Dk=45e3,Rf={},dl={};R=Ms.prototype;R.setTimeout=function(t){this.P=t};function Nf(t,e,n){t.K=1,t.v=vl(bt(e)),t.s=n,t.U=!0,Nv(t,null)}function Nv(t,e){t.F=Date.now(),bs(t),t.A=bt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),$v(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Rv,t.g=o0(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Rk(ke(t.Ia,t,t.g),t.O)),vv(t.V,t.g,"readystatechange",t.gb),e=t.H?nv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ds(1),Nk(t.j,t.u,t.A,t.m,t.X,t.s)}R.gb=function(t){t=t.target;const e=this.L;e&&$t(t)==3?e.l():this.Ia(t)};R.Ia=function(t){try{if(t==this.g)e:{const c=$t(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||rf||this.g&&(this.h.h||this.g.ga()||Qv(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ds(3):Ds(2)),pl(this);var n=this.g.ba();this.N=n;t:if(Av(this)){var r=Qv(this.g);t="";var i=r.length,s=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Wn(this),$s(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Ak(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rl(a)){var u=a;break t}}u=null}if(n=u)zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Af(this,n);else{this.i=!1,this.o=3,He(12),Wn(this),$s(this);break e}}this.U?(Pv(this,c,o),rf&&this.i&&c==3&&(vv(this.V,this.W,"tick",this.fb),this.W.start())):(zr(this.j,this.m,o,null),Af(this,o)),c==4&&Wn(this),this.i&&!this.I&&(c==4?n0(this.l,this):(this.i=!1,bs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),Wn(this),$s(this)}}}catch{}finally{}};function Av(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Pv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=xk(t,n),i==dl){e==4&&(t.o=4,He(14),r=!1),zr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Rf){t.o=4,He(15),zr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else zr(t.j,t.m,i,null),Af(t,i);Av(t)&&i!=dl&&i!=Rf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vf(e),e.L=!0,He(11))):(zr(t.j,t.m,n,"[Invalid Chunked Response]"),Wn(t),$s(t))}R.fb=function(){if(this.g){var t=$t(this.g),e=this.g.ga();this.C<e.length&&(pl(this),Pv(this,t,e),this.i&&t!=4&&bs(this))}};function xk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?dl:(n=Number(e.substring(n,r)),isNaN(n)?Rf:(r+=1,r+n>e.length?dl:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,Wn(this)};function bs(t){t.Y=Date.now()+t.P,Ov(t,t.P)}function Ov(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xs(ke(t.eb,t),e)}function pl(t){t.B&&($.clearTimeout(t.B),t.B=null)}R.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Pk(this.j,this.A),this.K!=2&&(Ds(3),He(17)),Wn(this),this.o=2,$s(this)):Ov(this,this.Y-t)};function $s(t){t.l.G==0||t.I||n0(t.l,t)}function Wn(t){pl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Sf(t.W),wv(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Af(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Df(n.i,t))){if(n.I=t.N,!t.J&&Df(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Il(n),_l(n);else break e;Ff(n),He(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=xs(ke(n.ab,n),6e3));if(1>=Vv(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Gn(n,11)}else if((t.J||n.g==t)&&Il(n),!rl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;!s.g&&(Be(E,"spdy")||Be(E,"quic")||Be(E,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xf(s,s.h),s.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,re(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=s0(r,r.H?r.la:null,r.W),o.J){jv(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(pl(a),bs(a)),r.g=o}else e0(r);0<n.l.length&&Tl(n)}else u[0]!="stop"&&u[0]!="close"||Gn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Gn(n,7):$f(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ds(4)}catch{}}function Lk(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Xh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Pf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xh(t)||typeof t=="string")Xy(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Xh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Lk(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Hr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Hr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}R=Hr.prototype;R.R=function(){Of(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};R.T=function(){return Of(this),this.g.concat()};function Of(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];qn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],qn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}R.get=function(t,e){return qn(this.h,t)?this.h[t]:e};R.set=function(t,e){qn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};R.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Dv=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Mk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Kn){this.g=e!==void 0?e:t.g,ml(this,t.j),this.s=t.s,gl(this,t.i),yl(this,t.m),this.l=t.l,e=t.h;var n=new Vs;n.i=e.i,e.g&&(n.g=new Hr(e.g),n.h=e.h),xv(this,n),this.o=t.o}else t&&(n=String(t).match(Dv))?(this.g=!!e,ml(this,n[1]||"",!0),this.s=Us(n[2]||""),gl(this,n[3]||"",!0),yl(this,n[4]),this.l=Us(n[5]||"",!0),xv(this,n[6]||"",!0),this.o=Us(n[7]||"")):(this.g=!!e,this.h=new Vs(null,this.g))}Kn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fs(e,Lv,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fs(e,Lv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Fs(n,n.charAt(0)=="/"?Vk:Fk,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fs(n,Bk)),t.join("")};function bt(t){return new Kn(t)}function ml(t,e,n){t.j=n?Us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gl(t,e,n){t.i=n?Us(e,!0):e}function yl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xv(t,e,n){e instanceof Vs?(t.h=e,zk(t.h,t.g)):(n||(e=Fs(e,jk)),t.h=new Vs(e,t.g))}function re(t,e,n){t.h.set(e,n)}function vl(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bk(t){return t instanceof Kn?bt(t):new Kn(t,void 0)}function $k(t,e,n,r){var i=new Kn(null,void 0);return t&&ml(i,t),e&&gl(i,e),n&&yl(i,n),r&&(i.l=r),i}function Us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Uk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Uk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Lv=/[#\/\?@]/g,Fk=/[#\?:]/g,Vk=/[#\?]/g,jk=/[#\?@]/g,Bk=/#/g;function Vs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function dn(t){t.g||(t.g=new Hr,t.h=0,t.i&&Mk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Vs.prototype;R.add=function(t,e){dn(this),this.i=null,t=Wr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Mv(t,e){dn(t),e=Wr(t,e),qn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Of(t)))}function bv(t,e){return dn(t),e=Wr(t,e),qn(t.g.h,e)}R.forEach=function(t,e){dn(this),this.g.forEach(function(n,r){Xy(n,function(i){t.call(e,i,r,this)},this)},this)};R.T=function(){dn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};R.R=function(t){dn(this);var e=[];if(typeof t=="string")bv(this,t)&&(e=Jy(e,this.g.get(Wr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Jy(e,t[n])}return e};R.set=function(t,e){return dn(this),this.i=null,t=Wr(this,t),bv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function $v(t,e,n){Mv(t,e),0<n.length&&(t.i=null,t.g.set(Wr(t,e),Zh(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Wr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zk(t,e){e&&!t.j&&(dn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Mv(this,r),$v(this,i,n))},t)),t.j=e}var Hk=class{constructor(t,e){this.h=t,this.g=e}};function Uv(t){this.l=t||Wk,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wk=10;function Fv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vv(t){return t.h?1:t.g?t.g.size:0}function Df(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xf(t,e){t.g?t.g.add(e):t.h=e}function jv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Uv.prototype.cancel=function(){if(this.i=Bv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zh(t.i)}function Lf(){}Lf.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Lf.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function qk(){this.g=new Lf}function Kk(t,e,n){const r=n||"";try{Pf(t,function(i,s){let o=i;Ns(i)&&(o=yf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Gk(t,e){const n=new ul;if($.Image){const r=new Image;r.onload=nl(wl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=nl(wl,n,r,"TestLoadImage: error",!1,e),r.onabort=nl(wl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=nl(wl,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function js(t){this.l=t.$b||null,this.j=t.ib||!1}Ce(js,Tf);js.prototype.g=function(){return new El(this.l,this.j)};js.prototype.i=function(t){return function(){return t}}({});function El(t,e){ve.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(El,ve);var Mf=0;R=El.prototype;R.open=function(t,e){if(this.readyState!=Mf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zs(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=Mf};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zv(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function zv(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bs(this):zs(this),this.readyState==3&&zv(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,Bs(this))};R.Ta=function(t){this.g&&(this.response=t,Bs(this))};R.ha=function(){this.g&&Bs(this)};function Bs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zs(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(El.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Qk=$.JSON.parse;function ce(t){ve.call(this),this.headers=new Hr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hv,this.K=this.L=!1}Ce(ce,ve);var Hv="",Yk=/^https?$/i,Xk=["POST","PUT"];R=ce.prototype;R.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cf.g(),this.C=this.u?kv(this.u):kv(Cf),this.g.onreadystatechange=ke(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Wv(this,s);return}t=n||"";const i=new Hr(this.headers);r&&Pf(r,function(s,o){i.set(o,s)}),r=lk(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=Yy(Xk,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gv(this),0<this.B&&((this.K=Jk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.pa,this)):this.A=_f(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Wv(this,s)}};function Jk(t){return Br&&dk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Zk(t){return t.toLowerCase()=="content-type"}R.pa=function(){typeof Yh!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function Wv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qv(t),Sl(t)}function qv(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),Sl(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sl(this,!0)),ce.Z.M.call(this)};R.Fa=function(){this.s||(this.F||this.v||this.l?Kv(this):this.cb())};R.cb=function(){Kv(this)};function Kv(t){if(t.h&&typeof Yh!="undefined"&&(!t.C[1]||$t(t)!=4||t.ba()!=2)){if(t.v&&$t(t)==4)_f(t.Fa,0,t);else if(Re(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Dv)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!Yk.test(i?i.toLowerCase():"")}n=r}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<$t(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",qv(t)}}finally{Sl(t)}}}}function Sl(t,e){if(t.g){Gv(t);const n=t.g,r=t.C[0]?tl:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=r}catch{}}}function Gv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function $t(t){return t.g?t.g.readyState:0}R.ba=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};R.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Qk(e)}};function Qv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Da=function(){return this.m};R.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function eC(t){let e="";return tf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=eC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Hs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Yv(t){this.za=0,this.l=[],this.h=new ul,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Hs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Hs("baseRetryDelayMs",5e3,t),this.$a=Hs("retryDelaySeedMs",1e4,t),this.Ya=Hs("forwardChannelMaxRetries",2,t),this.ra=Hs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Uv(t&&t.concurrentRequestLimit),this.Ca=new qk,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}R=Yv.prototype;R.ma=8;R.G=1;function $f(t){if(Xv(t),t.G==3){var e=t.V++,n=bt(t.F);re(n,"SID",t.J),re(n,"RID",e),re(n,"TYPE","terminate"),Ws(t,n),e=new Ms(t,t.h,e,void 0),e.K=2,e.v=vl(bt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=o0(e.l,null),e.g.ea(e.v)),e.F=Date.now(),bs(e)}i0(t)}R.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function _l(t){t.g&&(Vf(t),t.g.cancel(),t.g=null)}function Xv(t){_l(t),t.u&&($.clearTimeout(t.u),t.u=null),Il(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Uf(t,e){t.l.push(new Hk(t.Za++,e)),t.G==3&&Tl(t)}function Tl(t){Fv(t.i)||t.m||(t.m=!0,vf(t.Ha,t),t.C=0)}function tC(t,e){return Vv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=xs(ke(t.Ha,t,e),r0(t,t.C)),t.C++,!0)}R.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ms(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=nv(s),iv(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zv(this,i,e),n=bt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),Ws(this,n),this.o&&s&&bf(n,this.o,s),xf(this.i,i),this.Ra&&re(n,"TYPE","init"),this.ja?(re(n,"$req",e),re(n,"SID","null"),i.$=!0,Nf(i,n,null)):Nf(i,n,e),this.G=2}}else this.G==3&&(t?Jv(this,t):this.l.length==0||Fv(this.i)||Jv(this))};function Jv(t,e){var n;e?n=e.m:n=t.V++;const r=bt(t.F);re(r,"SID",t.J),re(r,"RID",n),re(r,"AID",t.U),Ws(t,r),t.o&&t.s&&bf(r,t.o,t.s),n=new Ms(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Zv(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xf(t.i,n),Nf(n,r,e)}function Ws(t,e){t.j&&Pf({},function(n,r){re(e,r,n)})}function Zv(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ke(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{Kk(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function e0(t){t.g||t.u||(t.Y=1,vf(t.Ga,t),t.A=0)}function Ff(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=xs(ke(t.Ga,t),r0(t,t.A)),t.A++,!0)}R.Ga=function(){if(this.u=null,t0(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=xs(ke(this.bb,this),t)}};R.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,He(10),_l(this),t0(this))};function Vf(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function t0(t){t.g=new Ms(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=bt(t.oa);re(e,"RID","rpc"),re(e,"SID",t.J),re(e,"CI",t.N?"0":"1"),re(e,"AID",t.U),Ws(t,e),re(e,"TYPE","xmlhttp"),t.o&&t.s&&bf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=vl(bt(e)),n.s=null,n.U=!0,Nv(n,t)}R.ab=function(){this.v!=null&&(this.v=null,_l(this),Ff(this),He(19))};function Il(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function n0(t,e){var n=null;if(t.g==e){Il(t),Vf(t),t.g=null;var r=2}else if(Df(t.i,e))n=e.D,jv(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=cl(),Re(r,new Tv(r,n,e,i)),Tl(t)}else e0(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&tC(t,e)||r==2&&Ff(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Gn(t,5);break;case 4:Gn(t,10);break;case 3:Gn(t,6);break;default:Gn(t,2)}}}function r0(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Gn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=ke(t.jb,t);n||(n=new Kn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||ml(n,"https"),vl(n)),Gk(n.toString(),r)}else He(2);t.G=0,t.j&&t.j.va(e),i0(t),Xv(t)}R.jb=function(t){t?(this.h.info("Successfully pinged google.com"),He(2)):(this.h.info("Failed to ping google.com"),He(1))};function i0(t){t.G=0,t.I=-1,t.j&&((Bv(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Zh(t.l),t.l.length=0),t.j.ua())}function s0(t,e,n){let r=bk(n);if(r.i!="")e&&gl(r,e+"."+r.i),yl(r,r.m);else{const i=$.location;r=$k(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&tf(t.aa,function(i,s){re(r,s,i)}),e=t.D,n=t.sa,e&&n&&re(r,e,n),re(r,"VER",t.ma),Ws(t,r),r}function o0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ce(new js({ib:!0})):new ce(t.qa),e.L=t.H,e}function a0(){}R=a0.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Oa=function(){};function kl(){if(Br&&!(10<=Number(pk)))throw Error("Environmental error: no available transport.")}kl.prototype.g=function(t,e){return new tt(t,e)};function tt(t,e){ve.call(this),this.g=new Yv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!rl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qr(this)}Ce(tt,ve);tt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),vf(ke(t.hb,t,e))),He(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=s0(t,null,t.W),Tl(t)};tt.prototype.close=function(){$f(this.g)};tt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Uf(this.g,e)}else this.v?(e={},e.__data__=yf(t),Uf(this.g,e)):Uf(this.g,t)};tt.prototype.M=function(){this.g.j=null,delete this.j,$f(this.g),delete this.g,tt.Z.M.call(this)};function l0(t){If.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(l0,If);function u0(){kf.call(this),this.status=1}Ce(u0,kf);function qr(t){this.g=t}Ce(qr,a0);qr.prototype.xa=function(){Re(this.g,"a")};qr.prototype.wa=function(t){Re(this.g,new l0(t))};qr.prototype.va=function(t){Re(this.g,new u0(t))};qr.prototype.ua=function(){Re(this.g,"b")};kl.prototype.createWebChannel=kl.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;hl.NO_ERROR=0;hl.TIMEOUT=8;hl.HTTP_ERROR=6;Iv.COMPLETE="complete";Cv.EventType=Ls;Ls.OPEN="a";Ls.CLOSE="b";Ls.ERROR="c";Ls.MESSAGE="d";ve.prototype.listen=ve.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.La;ce.prototype.getLastErrorCode=ce.prototype.Da;ce.prototype.getStatus=ce.prototype.ba;ce.prototype.getResponseJson=ce.prototype.Qa;ce.prototype.getResponseText=ce.prototype.ga;ce.prototype.send=ce.prototype.ea;var nC=function(){return new kl},rC=function(){return cl()},jf=hl,iC=Iv,sC=Hn,c0={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},oC=js,Cl=Cv,aC=ce;const h0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr="9.6.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Wh("@firebase/firestore");function f0(){return Qn.logLevel}function D(t,...e){if(Qn.logLevel<=q.DEBUG){const n=e.map(Bf);Qn.debug(`Firestore (${Kr}): ${t}`,...n)}}function pn(t,...e){if(Qn.logLevel<=q.ERROR){const n=e.map(Bf);Qn.error(`Firestore (${Kr}): ${t}`,...n)}}function d0(t,...e){if(Qn.logLevel<=q.WARN){const n=e.map(Bf);Qn.warn(`Firestore (${Kr}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function J(t,e){t||V()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class cC{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new lC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Qe(e)}}class hC{constructor(e,n,r){this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class fC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new hC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),new dC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zf.I=-1;class p0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function Gr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new nt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function g0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends qs{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const gC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends qs{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return gC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.fields=e,e.sort(Ye.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ne(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ne(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const yC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(t){if(J(!!t),typeof t=="string"){let e=0;const n=yC.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(t.seconds),nanos:he(t.nanos)}}function he(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?Ne.fromBase64String(t):Ne.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function v0(t){const e=t.mapValue.fields.__previous_value__;return y0(e)?v0(e):e}function Ks(t){const e=gn(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){return t==null}function Rl(t){return t===0&&1/t==-1/0}function vC(t){return typeof t=="number"&&Number.isInteger(t)&&!Rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(le.fromString(e))}static fromName(e){return new F(le.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new le(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?y0(t)?4:10:V()}function kt(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ks(t).isEqual(Ks(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=gn(r.timestampValue),o=gn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Yr(r.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return he(r.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(r.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return he(r.integerValue)===he(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=he(r.doubleValue),o=he(i.doubleValue);return s===o?Rl(s)===Rl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Gr(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(m0(s)!==m0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!kt(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function Gs(t,e){return(t.values||[]).find(n=>kt(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=Yn(t),r=Yn(e);if(n!==r)return Q(n,r);switch(n){case 0:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=he(i.integerValue||i.doubleValue),a=he(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return w0(t.timestampValue,e.timestampValue);case 4:return w0(Ks(t),Ks(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Yr(i),a=Yr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(he(i.latitude),he(s.latitude));return o!==0?o:Q(he(i.longitude),he(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Jr(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const f=Jr(o[a[c]],l[u[c]]);if(f!==0)return f}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw V()}}function w0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=gn(t),r=gn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Wf(t){return qf(t)}function qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=gn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Yr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=qf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${qf(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function Kf(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function E0(t){return!!t&&"nullValue"in t}function S0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Qs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(Qs(this.value))}}function _0(t){const e=[];return Qr(t.fields,(n,r)=>{const i=new Ye([n]);if(Nl(r)){const s=_0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Hf(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new $e(e,0,W.min(),vt.empty(),0)}static newFoundDocument(e,n,r){return new $e(e,1,n,r,0)}static newNoDocument(e,n){return new $e(e,2,n,vt.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,vt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function T0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wC(t,e,n,r,i,s,o)}function Qf(t){const e=j(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>SC(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Al(e.startAt)),e.endAt&&(n+="|ub:",n+=Al(e.endAt)),e.R=n}return e.R}function EC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Wf(r.value)}`;var r}).join(", ")}]`),Xr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Al(t.startAt)),t.endAt&&(e+=", endAt: "+Al(t.endAt)),`Target(${e})`}function Yf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!AC(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!kt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!C0(t.startAt,e.startAt)&&C0(t.endAt,e.endAt)}function Xf(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Xe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new _C(e,n,r):n==="array-contains"?new kC(e,r):n==="in"?new CC(e,r):n==="not-in"?new RC(e,r):n==="array-contains-any"?new NC(e,r):new Xe(e,n,r)}static P(e,n,r){return n==="in"?new TC(e,r):new IC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Jr(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.v(Jr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function SC(t){return t.field.canonicalString()+t.op.toString()+Wf(t.value)}class _C extends Xe{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.v(n)}}class TC extends Xe{constructor(e,n){super(e,"in",n),this.keys=I0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IC extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=I0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function I0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class kC extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&Gs(n.arrayValue,this.value)}}class CC extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gs(this.value.arrayValue,n)}}class RC extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gs(this.value.arrayValue,n)}}class NC extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gs(this.value.arrayValue,r))}}class Jf{constructor(e,n){this.position=e,this.before=n}}function Al(t){return`${t.before?"b":"a"}:${t.position.map(e=>Wf(e)).join(",")}`}class Ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function AC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function k0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=Jr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function C0(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.D=null,this.startAt,this.endAt}}function PC(t,e,n,r,i,s,o,a){return new Pl(t,e,n,r,i,s,o,a)}function Ol(t){return new Pl(t)}function Dl(t){return!Xr(t.limit)&&t.limitType==="F"}function xl(t){return!Xr(t.limit)&&t.limitType==="L"}function OC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function DC(t){for(const e of t.filters)if(e.V())return e.field;return null}function xC(t){return t.collectionGroup!==null}function Xs(t){const e=j(t);if(e.S===null){e.S=[];const n=DC(e),r=OC(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new Ys(n)),e.S.push(new Ys(Ye.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Ys(Ye.keyField(),s))}}}return e.S}function Xn(t){const e=j(t);if(!e.D)if(e.limitType==="F")e.D=T0(e.path,e.collectionGroup,Xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Xs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ys(s.field,o))}const r=e.endAt?new Jf(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Jf(e.startAt.position,!e.startAt.before):null;e.D=T0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function LC(t,e,n){return new Pl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ll(t,e){return Yf(Xn(t),Xn(e))&&t.limitType===e.limitType}function R0(t){return`${Qf(Xn(t))}|lt:${t.limitType}`}function Zf(t){return`Query(target=${EC(Xn(t))}; limitType=${t.limitType})`}function Ml(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!k0(n.startAt,Xs(n),r)||n.endAt&&k0(n.endAt,Xs(n),r))}(t,e)}function N0(t){return(e,n)=>{let r=!1;for(const i of Xs(t)){const s=MC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MC(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Jr(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rl(e)?"-0":e}}function P0(t){return{integerValue:""+t}}function bC(t,e){return vC(e)?P0(e):A0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this._=void 0}}function $C(t,e,n){return t instanceof $l?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Js?D0(t,e):t instanceof Zs?x0(t,e):function(r,i){const s=O0(r,i),o=L0(s)+L0(r.N);return Kf(s)&&Kf(r.N)?P0(o):A0(r.k,o)}(t,e)}function UC(t,e,n){return t instanceof Js?D0(t,e):t instanceof Zs?x0(t,e):n}function O0(t,e){return t instanceof Ul?Kf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class $l extends bl{}class Js extends bl{constructor(e){super(),this.elements=e}}function D0(t,e){const n=M0(e);for(const r of t.elements)n.some(i=>kt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zs extends bl{constructor(e){super(),this.elements=e}}function x0(t,e){let n=M0(e);for(const r of t.elements)n=n.filter(i=>!kt(i,r));return{arrayValue:{values:n}}}class Ul extends bl{constructor(e,n){super(),this.k=e,this.N=n}}function L0(t){return he(t.integerValue||t.doubleValue)}function M0(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function FC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Js&&r instanceof Js||n instanceof Zs&&r instanceof Zs?Gr(n.elements,r.elements,kt):n instanceof Ul&&r instanceof Ul?kt(n.N,r.N):n instanceof $l&&r instanceof $l}(t.transform,e.transform)}class VC{constructor(e,n){this.version=e,this.transformResults=n}}class Zr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zr}static exists(e){return new Zr(void 0,e)}static updateTime(e){return new Zr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vl{}function jC(t,e,n){t instanceof jl?function(r,i,s){const o=r.value.clone(),a=F0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(r,i,s){if(!Fl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=F0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(U0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ed(t,e,n){t instanceof jl?function(r,i,s){if(!Fl(r.precondition,i))return;const o=r.value.clone(),a=V0(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument($0(i),o).setHasLocalMutations()}(t,e,n):t instanceof ei?function(r,i,s){if(!Fl(r.precondition,i))return;const o=V0(r.fieldTransforms,s,i),a=i.data;a.setAll(U0(r)),a.setAll(o),i.convertToFoundDocument($0(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Fl(r.precondition,i)&&i.convertToNoDocument(W.min())}(t,e)}function BC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=O0(r.transform,i||null);s!=null&&(n==null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function b0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Gr(n,r,(i,s)=>FC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function $0(t){return t.isFoundDocument()?t.version:W.min()}class jl extends Vl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class ei extends Vl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function U0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function F0(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,UC(o,a,n[i]))}return r}function V0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$C(s,o,e))}return r}class zC extends Vl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class HC extends Vl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,z;function qC(t){switch(t){default:return V();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function j0(t){if(t===void 0)return pn("GRPC error has no .code"),_.UNKNOWN;switch(t){case fe.OK:return _.OK;case fe.CANCELLED:return _.CANCELLED;case fe.UNKNOWN:return _.UNKNOWN;case fe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case fe.INTERNAL:return _.INTERNAL;case fe.UNAVAILABLE:return _.UNAVAILABLE;case fe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case fe.NOT_FOUND:return _.NOT_FOUND;case fe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case fe.ABORTED:return _.ABORTED;case fe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case fe.DATA_LOSS:return _.DATA_LOSS;default:return V()}}(z=fe||(fe={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bl(this.root,e,this.comparator,!0)}}class Bl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ae.RED,this.left=i!=null?i:Ae.EMPTY,this.right=s!=null?s:Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new B0(this.data.getIterator())}getIteratorFrom(e){return new B0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class B0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new Ue(F.comparator);function Jn(){return KC}const GC=new Ue(F.comparator);function td(){return GC}const QC=new Ue(F.comparator);function YC(){return QC}const XC=new Pe(F.comparator);function te(...t){let e=XC;for(const n of t)e=e.add(n);return e}const JC=new Pe(Q);function z0(){return JC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n)),new zl(W.min(),r,z0(),Jn(),te())}}class eo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new eo(Ne.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.O=i}}class H0{constructor(e,n){this.targetId=e,this.M=n}}class W0{constructor(e,n,r=Ne.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class q0{constructor(){this.F=0,this.L=G0(),this.B=Ne.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=te(),n=te(),r=te();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new eo(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=G0()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class ZC{constructor(e){this.et=e,this.nt=new Map,this.st=Jn(),this.it=K0(),this.rt=new Pe(Q)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.M.count,i=this.wt(n);if(i){const s=i.target;if(Xf(s))if(r===0){const o=new F(s.path);this.at(n,o,$e.newNoDocument(o,W.min()))}else J(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Xf(a.target)){const l=new F(a.target.path);this.st.get(l)!==null||this.yt(o,l)||this.at(o,l,$e.newNoDocument(l,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=te();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new zl(e,n,this.rt,this.st,r);return this.st=Jn(),this.it=K0(),this.rt=new Pe(Q),i}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new q0,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new Pe(Q),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new q0),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function K0(){return new Ue(F.comparator)}function G0(){return new Ue(F.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class nR{constructor(e,n){this.databaseId=e,this.C=n}}function Wl(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Q0(t,e){return t.C?e.toBase64():e.toUint8Array()}function rR(t,e){return Wl(t,e.toTimestamp())}function Ut(t){return J(!!t),W.fromTimestamp(function(e){const n=gn(e);return new nt(n.seconds,n.nanos)}(t))}function nd(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Y0(t){const e=le.fromString(t);return J(nw(e)),e}function rd(t,e){return nd(t.databaseId,e.path)}function id(t,e){const n=Y0(e);if(n.get(1)!==t.databaseId.projectId)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(X0(n))}function sd(t,e){return nd(t.databaseId,e)}function iR(t){const e=Y0(t);return e.length===4?le.emptyPath():X0(e)}function od(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function X0(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function J0(t,e,n){return{name:rd(t,e),fields:n.value.mapValue.fields}}function sR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.C?(J(u===void 0||typeof u=="string"),Ne.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),Ne.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:j0(l.code);return new L(u,l.message||"")}(o);n=new W0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=id(t,r.document.name),s=Ut(r.document.updateTime),o=new vt({mapValue:{fields:r.document.fields}}),a=$e.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Hl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=id(t,r.document),s=r.readTime?Ut(r.readTime):W.min(),o=$e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=id(t,r.document),s=r.removedTargetIds||[];n=new Hl([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new WC(i),o=r.targetId;n=new H0(o,s)}}return n}function oR(t,e){let n;if(e instanceof jl)n={update:J0(t,e.key,e.value)};else if(e instanceof zC)n={delete:rd(t,e.key)};else if(e instanceof ei)n={update:J0(t,e.key,e.data),updateMask:gR(e.fieldMask)};else{if(!(e instanceof HC))return V();n={verify:rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof $l)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Js)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Zs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ul)return{fieldPath:s.field.canonicalString(),increment:o.N};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:rR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function aR(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ut(r.updateTime):Ut(i);return s.isEqual(W.min())&&(s=Ut(i)),new VC(s,r.transformResults||[])}(n,e))):[]}function lR(t,e){return{documents:[sd(t,e.path)]}}function uR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=sd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const l=a.map(u=>function(c){if(c.op==="=="){if(S0(c.value))return{unaryFilter:{field:ti(c.field),op:"IS_NAN"}};if(E0(c.value))return{unaryFilter:{field:ti(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(S0(c.value))return{unaryFilter:{field:ti(c.field),op:"IS_NOT_NAN"}};if(E0(c.value))return{unaryFilter:{field:ti(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(c.field),op:dR(c.op),value:c.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(l=>function(u){return{field:ti(u.field),direction:fR(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,l){return a.C||Xr(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=ew(e.startAt)),e.endAt&&(n.structuredQuery.endAt=ew(e.endAt)),n}function cR(t){let e=iR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Z0(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ys(ni(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Xr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=tw(n.startAt));let u=null;return n.endAt&&(u=tw(n.endAt)),PC(e,i,o,s,a,"F",l,u)}function hR(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Z0(t){return t?t.unaryFilter!==void 0?[mR(t)]:t.fieldFilter!==void 0?[pR(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Z0(e)).reduce((e,n)=>e.concat(n)):V():[]}function ew(t){return{before:t.before,values:t.position}}function tw(t){const e=!!t.before,n=t.values||[];return new Jf(n,e)}function fR(t){return eR[t]}function dR(t){return tR[t]}function ti(t){return{fieldPath:t.canonicalString()}}function ni(t){return Ye.fromServerFormat(t.fieldPath)}function pR(t){return Xe.create(ni(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function mR(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ni(t.unaryFilter.field);return Xe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ni(t.unaryFilter.field);return Xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ni(t.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ni(t.unaryFilter.field);return Xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function gR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function to(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&jC(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&ed(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&ed(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(W.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,(n,r)=>b0(n,r))&&Gr(this.baseMutations,e.baseMutations,(n,r)=>b0(n,r))}}class ad{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=YC();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ad(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,i,s=W.min(),o=W.min(),a=Ne.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.Gt=e}}function SR(t){const e=cR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?LC(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.zt=new TR}addToCollectionParentIndex(e,n){return this.zt.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.zt.getEntries(n))}}class TR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pe(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new ri(0)}static re(){return new ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==yR)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return g0(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.changes=new ro(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:W.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:$e.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Pn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):xC(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new F(n)).next(r=>{let i=td();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=td();return this.Jt.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new Pl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.Cn(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const l of s)for(const u of l.mutations){const c=u.key;let h=i.get(c);h==null&&(h=$e.newInvalidDocument(c),i=i.insert(c,h)),ed(u,h,l.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Ml(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=te();for(const o of n)for(const a of o.mutations)a instanceof ei&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(s=s.insert(a,l))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ld(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(W.min())?this.Fn(e,n):this.Mn.vn(e,i).next(s=>{const o=this.Ln(n,s);return(Dl(n)||xl(n))&&this.Bn(n.limitType,o,i,r)?this.Fn(e,n):(f0()<=q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zf(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Ln(e,n){let r=new Pe(N0(e));return n.forEach((i,s)=>{Ml(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return f0()<=q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Zf(n)),this.Mn.getDocumentsMatchingQuery(e,n,W.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new Ue(Q),this.Kn=new ro(s=>Qf(s),Yf),this.jn=W.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new rw(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function RR(t,e,n,r){return new CR(t,e,n,r)}async function iw(t,e){const n=j(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(l=>(a=l,r=n.persistence.getMutationQueue(e),i=new rw(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(l=>{const u=[],c=[];let h=te();for(const f of a){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of l){c.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return i.vn(o,h).next(f=>({Gn:f,removedBatchIds:u,addedBatchIds:c}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function NR(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=C.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(E=>{const w=l.docVersions.get(g);J(w!==null),E.version.compareTo(w)<0&&(c.applyToRemoteDocument(E,l),E.isValidDocument()&&u.addEntry(E,l.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function sw(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function AR(t,e){const n=j(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((u,c)=>{const h=i.get(c);if(!h)return;a.push(n.He.removeMatchingKeys(s,u.removedDocuments,c).next(()=>n.He.addMatchingKeys(s,u.addedDocuments,c)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?f=f.withResumeToken(Ne.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(c,f),function(g,E,w){return g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,f,u)&&a.push(n.He.updateTargetData(s,f))});let l=Jn();if(e.documentUpdates.forEach((u,c)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(PR(s,o,e.documentUpdates,r,void 0).next(u=>{l=u})),!r.isEqual(W.min())){const u=n.He.getLastRemoteSnapshotVersion(s).next(c=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,l)).next(()=>l)}).then(s=>(n.qn=i,s))}function PR(t,e,n,r,i){let s=te();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=Jn();return n.forEach((l,u)=>{const c=o.get(l),h=(i==null?void 0:i.get(l))||r;u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,h),a=a.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u,h),a=a.insert(l,u)):D("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),a})}function OR(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function DR(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new Zn(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function ud(t,e,n){const r=j(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!to(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function ow(t,e,n){const r=j(t);let i=W.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=j(a),h=c.Kn.get(u);return h!==void 0?C.resolve(c.qn.get(h)):c.He.getTargetData(l,u)}(r,o,Xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:te())).next(a=>({documents:a,zn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return C.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ut(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:SR(r.bundledQuery),readTime:Ut(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.ts=new Pe(we.es),this.ns=new Pe(we.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new we(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new we(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new F(new le([])),r=new we(n,e),i=new we(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new F(new le([])),r=new we(n,e),i=new we(n,e+1);let s=te();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new we(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return F.comparator(e.key,n.key)||Q(e.fs,n.fs)}static ss(e,n){return Q(e.fs,n.fs)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Pe(we.es)}checkEmpty(e){return C.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new wR(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new we(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return C.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return C.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new we(n,0),i=new we(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pe(Q);return n.forEach(i=>{const s=new we(i,0),o=new we(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),C.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new we(new F(s),0);let a=new Pe(Q);return this.ws.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.fs)),!0)},o),C.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return C.forEach(n.mutations,i=>{const s=new we(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new we(n,0),i=this.ws.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,C.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Ue(F.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$e.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=Jn();const s=new F(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(r)<=0||Ml(n,l)&&(i=i.insert(l.key,l.mutableCopy()))}return C.resolve(i)}Es(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bR(this)}getSize(e){return C.resolve(this.size)}}class bR extends IR{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.persistence=e,this.Is=new ro(n=>Qf(n),Yf),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.As=0,this.Rs=new cd,this.targetCount=0,this.bs=ri.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),C.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.ae(n),C.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.Ps={},this.Be=new zf(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new $R(this),this.Jt=new _R,this.Je=function(r,i){return new MR(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new ER(n),this.Ye=new xR(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new LR(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new FR(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return C.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class FR extends vR{constructor(e){super(),this.currentSequenceNumber=e}}class hd{constructor(e){this.persistence=e,this.Cs=new cd,this.Ns=null}static ks(e){return new hd(e)}get xs(){if(this.Ns)return this.Ns;throw V()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),C.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.xs,r=>{const i=F.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return C.or([()=>C.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class aw{constructor(){this.activeTargetIds=z0()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VR{constructor(){this.pi=new aw,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new aw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);D("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw d0("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Kr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=BR[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new aC;a.listenOnce(iC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case jf.NO_ERROR:const u=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(u)),s(u);break;case jf.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new L(_.DEADLINE_EXCEEDED,"Request time out"));break;case jf.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const E=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(E)>=0?E:_.UNKNOWN}(h.status);o(new L(f,h.message))}else o(new L(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(_.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}Qi(e,n,r){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nC(),o=rC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new oC({})),this.qi(a.initMessageHeaders,n,r),By()||Hy()||iI()||Wy()||sI()||zy()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const f=new zR({Vi:E=>{h?D("Connection","Not sending because WebChannel is closed:",E):(c||(D("Connection","Opening WebChannel transport."),u.open(),c=!0),D("Connection","WebChannel sending:",E),u.send(E))},Si:()=>u.close()}),g=(E,w,p)=>{E.listen(w,d=>{try{p(d)}catch(m){setTimeout(()=>{throw m},0)}})};return g(u,Cl.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),g(u,Cl.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),f.Oi())}),g(u,Cl.EventType.ERROR,E=>{h||(h=!0,d0("Connection","WebChannel transport errored:",E),f.Oi(new L(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,Cl.EventType.MESSAGE,E=>{var w;if(!h){const p=E.data[0];J(!!p);const d=p,m=d.error||((w=d[0])===null||w===void 0?void 0:w.error);if(m){D("Connection","WebChannel received error:",m);const v=m.status;let y=function(S){const P=fe[S];if(P!==void 0)return j0(P)}(v),I=m.message;y===void 0&&(y=_.INTERNAL,I="Unknown error status: "+v+" with message "+m.message),h=!0,f.Oi(new L(y,I)),u.close()}else D("Connection","WebChannel received:",p),f.Mi(p)}}),g(o,sC.STAT_EVENT,E=>{E.stat===c0.PROXY?D("Connection","Detected buffering proxy"):E.stat===c0.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function fd(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return new nR(t,!0)}class uw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,r,i,s,o,a,l){this.Me=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new uw(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new L(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WR extends cw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=sR(this.k,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?Ut(s.readTime):W.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=od(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=Xf(a)?{documents:lR(i,a)}:{query:uR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Q0(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=Wl(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=hR(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=od(this.k),n.removeTarget=e,this.gr(n)}}class qR extends cw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=aR(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.Cr(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=od(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oR(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Or(){if(this.$r)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(_.UNKNOWN,i.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(_.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class GR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(pn(n),this.Lr=!1):D("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{er(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l.Gr.add(4),await io(l),l.Jr.set("Unknown"),l.Gr.delete(4),await Kl(l)}(this))})}),this.Jr=new GR(r,i)}}async function Kl(t){if(er(t))for(const e of t.zr)await e(!0)}async function io(t){for(const e of t.zr)await e(!1)}function hw(t,e){const n=j(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),md(n)?pd(n):ii(n).lr()&&dd(n,e))}function fw(t,e){const n=j(t),r=ii(n);n.Wr.delete(e),r.lr()&&dw(n,e),n.Wr.size===0&&(r.lr()?r._r():er(n)&&n.Jr.set("Unknown"))}function dd(t,e){t.Yr.X(e.targetId),ii(t).Pr(e)}function dw(t,e){t.Yr.X(e),ii(t).vr(e)}function pd(t){t.Yr=new ZC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),ii(t).start(),t.Jr.Br()}function md(t){return er(t)&&!ii(t).hr()&&t.Wr.size>0}function er(t){return j(t).Gr.size===0}function pw(t){t.Yr=void 0}async function YR(t){t.Wr.forEach((e,n)=>{dd(t,e)})}async function XR(t,e){pw(t),md(t)?(t.Jr.Kr(e),pd(t)):t.Jr.set("Unknown")}async function JR(t,e,n){if(t.Jr.set("Online"),e instanceof W0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gl(t,r)}else if(e instanceof Hl?t.Yr.ot(e):e instanceof H0?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(W.min()))try{const r=await sw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Wr.get(l);u&&i.Wr.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.Wr.get(a);if(!l)return;i.Wr.set(a,l.withResumeToken(Ne.EMPTY_BYTE_STRING,l.snapshotVersion)),dw(i,a);const u=new Zn(l.target,a,1,l.sequenceNumber);dd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Gl(t,r)}}async function Gl(t,e,n){if(!to(e))throw e;t.Gr.add(1),await io(t),t.Jr.set("Offline"),n||(n=()=>sw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Kl(t)})}function mw(t,e){return e().catch(n=>Gl(t,n,e))}async function Ql(t){const e=j(t),n=yn(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;ZR(e);)try{const i=await OR(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,eN(e,i)}catch(i){await Gl(e,i)}gw(e)&&yw(e)}function ZR(t){return er(t)&&t.Qr.length<10}function eN(t,e){t.Qr.push(e);const n=yn(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function gw(t){return er(t)&&!yn(t).hr()&&t.Qr.length>0}function yw(t){yn(t).start()}async function tN(t){yn(t).kr()}async function nN(t){const e=yn(t);for(const n of t.Qr)e.Dr(n.mutations)}async function rN(t,e,n){const r=t.Qr.shift(),i=ad.from(r,e,n);await mw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ql(t)}async function iN(t,e){e&&yn(t).Sr&&await async function(n,r){if(i=r.code,qC(i)&&i!==_.ABORTED){const s=n.Qr.shift();yn(n).wr(),await mw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ql(n)}var i}(t,e),gw(t)&&yw(t)}async function sN(t,e){const n=j(t);e?(n.Gr.delete(2),await Kl(n)):e||(n.Gr.add(2),await io(n),n.Jr.set("Unknown"))}function ii(t){return t.Xr||(t.Xr=function(e,n,r){const i=j(e);return i.Or(),new WR(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:YR.bind(null,t),Ni:XR.bind(null,t),br:JR.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),md(t)?pd(t):t.Jr.set("Unknown")):(await t.Xr.stop(),pw(t))})),t.Xr}function yn(t){return t.Zr||(t.Zr=function(e,n,r){const i=j(e);return i.Or(),new qR(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:tN.bind(null,t),Ni:iN.bind(null,t),Nr:nN.bind(null,t),Cr:rN.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Ql(t)):(await t.Zr.stop(),t.Qr.length>0&&(D("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yd(t,e){if(pn("AsyncQueue",`${e}: ${t}`),to(t))return new L(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=td(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new si(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.eo=new Ue(F.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):V():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class oi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new oi(e,n,si.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.so=void 0,this.listeners=[]}}class aN{constructor(){this.queries=new ro(e=>R0(e),Ll),this.onlineState="Unknown",this.io=new Set}}async function ww(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new oN),i)try{s.so=await n.onListen(r)}catch(o){const a=yd(o,`Initialization of query '${Zf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&vd(n)}async function Ew(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lN(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&vd(n)}function uN(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vd(t){t.io.forEach(e=>{e.next()})}class Sw{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.key=e}}class Tw{constructor(e){this.key=e}}class cN{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=te(),this.mutatedKeys=te(),this.Ao=N0(e),this.Ro=new si(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new vw,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=Dl(this.query)&&i.size===this.query.limit?i.last():null,u=xl(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=Ml(this.query,h)?h:null,E=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let p=!1;f&&g?f.data.isEqual(g.data)?E!==w&&(r.track({type:3,doc:g}),p=!0):this.Vo(f,g)||(r.track({type:2,doc:g}),p=!0,(l&&this.Ao(g,l)>0||u&&this.Ao(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),p=!0):f&&!g&&(r.track({type:1,doc:f}),p=!0,(l||u)&&(a=!0)),p&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),Dl(this.query)||xl(this.query))for(;o.size>this.query.limit;){const c=Dl(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((u,c)=>function(h,f){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return g(h)-g(f)}(u.type,c.type)||this.Ao(u.doc,c.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,l=a!==this.Eo;return this.Eo=a,s.length!==0||l?{snapshot:new oi(this.query,e.Ro,i,s,e.mutatedKeys,a===0,l,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new vw,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=te(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new Tw(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new _w(r))}),n}ko(e){this.To=e.zn,this.Io=te();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return oi.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class hN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fN{constructor(e){this.key=e,this.$o=!1}}class dN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new ro(a=>R0(a),Ll),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ue(F.comparator),this.Uo=new Map,this.qo=new cd,this.Ko={},this.jo=new Map,this.Qo=ri.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function pN(t,e){const n=IN(t);let r,i;const s=n.Mo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await DR(n.localStore,Xn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await mN(n,e,r,a==="current"),n.isPrimaryClient&&hw(n.remoteStore,o)}return i}async function mN(t,e,n,r){t.Go=(c,h,f)=>async function(g,E,w,p){let d=E.view.Po(w);d.Bn&&(d=await ow(g.localStore,E.query,!1).then(({documents:y})=>E.view.Po(y,d)));const m=p&&p.targetChanges.get(E.targetId),v=E.view.applyChanges(d,g.isPrimaryClient,m);return Aw(g,E.targetId,v.Co),v.snapshot}(t,c,h,f);const i=await ow(t.localStore,e,!0),s=new cN(e,i.zn),o=s.Po(i.documents),a=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Aw(t,n,l.Co);const u=new hN(e,n,s);return t.Mo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function gN(t,e){const n=j(t),r=n.Mo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(s=>!Ll(s,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ud(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fw(n.remoteStore,r.targetId),wd(n,r.targetId)}).catch(no)):(wd(n,r.targetId),await ud(n.localStore,r.targetId,!0))}async function yN(t,e,n){const r=kN(t);try{const i=await function(s,o){const a=j(s),l=nt.now(),u=o.reduce((h,f)=>h.add(f.key),te());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,u).next(f=>{c=f;const g=[];for(const E of o){const w=BC(E,c.get(E.key));w!=null&&g.push(new ei(E.key,w,_0(w.value.mapValue),Zr.exists(!0)))}return a.An.addMutationBatch(h,l,g,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ko[s.currentUser.toKey()];l||(l=new Ue(Q)),l=l.insert(o,a),s.Ko[s.currentUser.toKey()]=l}(r,i.batchId,n),await so(r,i.changes),await Ql(r.remoteStore)}catch(i){const s=yd(i,"Failed to persist write");n.reject(s)}}async function Iw(t,e){const n=j(t);try{const r=await AR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?J(o.$o):i.removedDocuments.size>0&&(J(o.$o),o.$o=!1))}),await so(n,r,e)}catch(r){await no(r)}}function kw(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Mo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=j(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ro(o)&&(l=!0)}),l&&vd(a)}(r.eventManager,e),i.length&&r.Oo.br(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vN(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new Ue(F.comparator);o=o.insert(s,$e.newNoDocument(s,W.min()));const a=te().add(s),l=new zl(W.min(),new Map,new Pe(Q),o,a);await Iw(r,l),r.Bo=r.Bo.remove(s),r.Uo.delete(e),Ed(r)}else await ud(r.localStore,e,!1).then(()=>wd(r,e,n)).catch(no)}async function wN(t,e){const n=j(t),r=e.batch.batchId;try{const i=await NR(n.localStore,e);Rw(n,r,null),Cw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await so(n,i)}catch(i){await no(i)}}async function EN(t,e,n){const r=j(t);try{const i=await function(s,o){const a=j(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.An.lookupMutationBatch(l,o).next(c=>(J(c!==null),u=c.keys(),a.An.removeMutationBatch(l,c))).next(()=>a.An.performConsistencyCheck(l)).next(()=>a.Wn.vn(l,u))})}(r.localStore,e);Rw(r,e,n),Cw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await so(r,i)}catch(i){await no(i)}}function Cw(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Rw(t,e,n){const r=j(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function wd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||Nw(t,r)})}function Nw(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(fw(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Ed(t))}function Aw(t,e,n){for(const r of n)r instanceof _w?(t.qo.addReference(r.key,e),SN(t,r)):r instanceof Tw?(D("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Nw(t,r.key)):V()}function SN(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(D("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Ed(t))}function Ed(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new F(le.fromString(e)),r=t.Qo.next();t.Uo.set(r,new fN(n)),t.Bo=t.Bo.insert(n,r),hw(t.remoteStore,new Zn(Xn(Ol(n.path)),r,2,zf.I))}}async function so(t,e,n){const r=j(t),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,l)=>{o.push(r.Go(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=ld.$n(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Oo.br(i),await async function(a,l){const u=j(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.kn,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>C.forEach(h.xn,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!to(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.qn.get(h),g=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(g);u.qn=u.qn.insert(h,E)}}}(r.localStore,s))}async function _N(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await iw(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new L(_.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await so(n,r.Gn)}}function TN(t,e){const n=j(t),r=n.Uo.get(e);if(r&&r.$o)return te().add(r.key);{let i=te();const s=n.Fo.get(e);if(!s)return i;for(const o of s){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}function IN(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vN.bind(null,e),e.Oo.br=lN.bind(null,e.eventManager),e.Oo.zo=uN.bind(null,e.eventManager),e}function kN(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EN.bind(null,e),e}class CN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=ql(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return RR(this.persistence,new kR,e.initialUser,this.k)}Yo(e){return new UR(hd.ks,this.k)}Jo(e){return new VR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_N.bind(null,this.syncEngine),await sN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aN}createDatastore(e){const n=ql(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new HR(i));var i;return function(s,o,a,l){return new KR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>kw(this.syncEngine,a,0),o=lw.Pt()?new lw:new jR,new QR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new dN(r,i,s,o,a,l);return u&&(c.Wo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);D("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await io(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=p0.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function AN(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function PN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ON(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=j(s);a.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const l=er(a);a.Gr.add(3),await io(a),l&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Kl(a)}(e.remoteStore,i)),t.onlineComponents=e}async function ON(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await AN(t,new CN)),t.offlineComponents}async function Ow(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await PN(t,new RN)),t.onlineComponents}function DN(t){return Ow(t).then(e=>e.syncEngine)}async function Sd(t){const e=await Ow(t),n=e.eventManager;return n.onListen=pN.bind(null,e.syncEngine),n.onUnlisten=gN.bind(null,e.syncEngine),n}function xN(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Pw({next:h=>{s.enqueueAndForget(()=>Ew(i,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new L(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new L(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Sw(Ol(o.path),u,{includeMetadataChanges:!0,wo:!0});return ww(i,c)}(await Sd(t),t.asyncQueue,e,n,r)),r.promise}class LN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class oo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t,e,n){if(!n)throw new L(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bN(t,e,n,r){if(e===!0&&r===!0)throw new L(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xw(t){if(!F.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _d(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_d(t);throw new L(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lw({}),this._settingsFrozen=!1,e instanceof oo?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new L(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(i.options.projectId)}(e))}get app(){if(!this._app)throw new L(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uC;switch(n.type){case"gapi":const r=n.client;return J(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new fC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new L(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Dw.get(e);n&&(D("ComponentProvider","Removing Datastore"),Dw.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class Yl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yl(this.firestore,e,this._query)}}class ao extends Yl{constructor(e,n,r){super(e,n,Ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new F(e))}withConverter(e){return new ao(this.firestore,e,this._path)}}function ZO(t,e,...n){if(t=ht(t),arguments.length===1&&(e=p0.A()),MN("doc","path",e),t instanceof Mw){const r=le.fromString(e,...n);return xw(r),new rt(t,null,new F(r))}{if(!(t instanceof rt||t instanceof ao))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return xw(r),new rt(t.firestore,t instanceof ao?t.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new uw(this,"async_queue_retry"),this.bc=()=>{const n=fd();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=fd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new mn;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!to(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const i=gd.createAndSchedule(this,e,n,r,s=>this.Sc(s));return this.Tc.push(i),i}Pc(){this.Ec&&V()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function bw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class lo extends Mw{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new $N,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||$w(this),this._firestoreClient.terminate()}}function eD(t=Qy()){return Qh(t,"firestore").getImmediate()}function Td(t){return t._firestoreClient||$w(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $w(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new LN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new NN(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ai(Ne.fromBase64String(e))}catch(n){throw new L(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ai(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=/^__.*__$/;class FN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new jl(e,this.data,n,this.fieldTransforms)}}function Fw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class Cd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new Cd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.Lc(e),i}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.xc(),i}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return Xl(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(Fw(this.$c)&&UN.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class VN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||ql(e)}Qc(e,n,r,i=!1){return new Cd({$c:e,methodName:n,jc:r,path:Ye.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function jN(t){const e=t._freezeSettings(),n=ql(t._databaseId);return new VN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BN(t,e,n,r,i,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,n,i);zw("Data must be an object, but it was:",o,r);const a=jw(r,o);let l,u;if(s.merge)l=new Hf(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=zN(e,h,n);if(!o.contains(f))throw new L(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);WN(c,f)||c.push(f)}l=new Hf(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new FN(new vt(a),l,u)}function Vw(t,e){if(Bw(t=ht(t)))return zw("Unsupported field value:",e,t),jw(t,e);if(t instanceof Uw)return function(n,r){if(!Fw(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Vw(o,r.Uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bC(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:Wl(r.k,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wl(r.k,i)}}if(n instanceof kd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ai)return{bytesValue:Q0(r.k,n._byteString)};if(n instanceof rt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nd(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${_d(n)}`)}(t,e)}function jw(t,e){const n={};return g0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,i)=>{const s=Vw(i,e.Mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Bw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof kd||t instanceof ai||t instanceof rt||t instanceof Uw)}function zw(t,e,n){if(!Bw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=_d(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function zN(t,e,n){if((e=ht(e))instanceof Id)return e._internalPath;if(typeof e=="string")return Hw(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const HN=new RegExp("[~\\*/\\[\\]]");function Hw(t,e,n){if(e.search(HN)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Id(...e.split("."))._internalPath}catch{throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(_.INVALID_ARGUMENT,a+t+l)}function WN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qN extends Ww{data(){return super.data()}}function qw(t,e){return typeof e=="string"?Hw(t,e):e instanceof Id?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kw extends Ww{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jl extends Kw{data(e={}){return super.data(e)}}class KN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jl(this._firestore,this._userDataWriter,r.key,r,new uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Jl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Jl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:GN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){if(xl(t)&&t.explicitOrderBy.length===0)throw new L(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return Qr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new kd(he(e.latitude),he(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=v0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const n=gn(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);J(nw(r));const i=new oo(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){t=tr(t,rt);const e=tr(t.firestore,lo);return xN(Td(e),t._key).then(n=>Qw(e,t,n))}class Gw extends YN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ai(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function nD(t,e,n){t=tr(t,rt);const r=tr(t.firestore,lo),i=XN(t.converter,e,n);return JN(r,[BN(jN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zr.none())])}function rD(t,...e){var n,r,i;t=ht(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(bw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof rt)u=tr(t.firestore,lo),c=Ol(t._key.path),l={next:h=>{e[o]&&e[o](Qw(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=tr(t,Yl);u=tr(h.firestore,lo),c=h._query;const f=new Gw(u);l={next:g=>{e[o]&&e[o](new KN(u,f,h,g))},error:e[o+1],complete:e[o+2]},QN(t._query)}return function(h,f,g,E){const w=new Pw(E),p=new Sw(f,w,g);return h.asyncQueue.enqueueAndForget(async()=>ww(await Sd(h),p)),()=>{w.nc(),h.asyncQueue.enqueueAndForget(async()=>Ew(await Sd(h),p))}}(Td(u),c,a,l)}function JN(t,e){return function(n,r){const i=new mn;return n.asyncQueue.enqueueAndForget(async()=>yN(await DN(n),r,i)),i.promise}(Td(t),e)}function Qw(t,e,n){const r=n.docs.get(e._key),i=new Gw(t);return new Kw(t,i,e._key,r,new uo(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Kr=n})(Rs),Cs(new jr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new lo(i,new cC(n.getProvider("auth-internal")),new pC(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),hn(h0,"3.4.3",t),hn(h0,"3.4.3","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Yw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZN=Yw,Xw=new _s("auth","Firebase",Yw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=new Wh("@firebase/auth");function Zl(t,...e){Jw.logLevel<=q.ERROR&&Jw.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,...e){throw Nd(t,...e)}function Ct(t,...e){return Nd(t,...e)}function Zw(t,e,n){const r=Object.assign(Object.assign({},ZN()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function eA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(t,"argument-error"),Zw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xw.create(t,...e)}function U(t,e,...n){if(!t)throw Nd(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function Vt(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new Map;function jt(t){Vt(t instanceof Function,"Expected a class definition");let e=e1.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e1.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e){const n=Qh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ja(s,e!=null?e:{}))return i;ft(i,"already-initialized")}return n.initialize({options:e})}function nA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rA(){return t1()==="http:"||t1()==="https:"}function t1(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rA()||zy()||"connection"in navigator)?navigator.onLine:!0}function sA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=By()||Hy()}get(){return iA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new co(3e4,6e4);function ho(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function li(t,e,n,r,i={}){return r1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ts(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),n1.fetch()(i1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function r1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oA),e);try{const i=new lA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Od(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Od(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Od(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zw(t,c,u);ft(t,c)}}catch(i){if(i instanceof Bn)throw i;ft(t,"network-request-failed")}}async function fo(t,e,n,r,i={}){const s=await li(t,e,n,r,i);return"mfaPendingCredential"in s&&ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function i1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pd(t.config,i):`${t.config.apiScheme}://${i}`}class lA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"timeout")),aA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Od(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){return li(t,"POST","/v1/accounts:delete",e)}async function cA(t,e){return li(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hA(t,e=!1){const n=ht(t),r=await n.getIdToken(e),i=xd(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:po(Dd(i.auth_time)),issuedAtTime:po(Dd(i.iat)),expirationTime:po(Dd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dd(t){return Number(t)*1e3}function xd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=nI(n);return i?JSON.parse(i):(Zl("Failed to decode base64 JWT payload"),null)}catch(i){return Zl("Caught error parsing JWT payload as JSON",i),null}}function fA(t){const e=xd(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&dA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ui(t,cA(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?yA(s.providerUserInfo):[],a=gA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new s1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function mA(t){const e=ht(t);await eu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yA(t){return t.map(e=>{var{providerId:n}=e,r=Rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){const n=await r1(t,{},async()=>{const r=Ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=i1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):fA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mo;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new pA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new s1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hA(this,e)}reload(){return mA(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await eu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ui(this,uA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:y,isAnonymous:I,providerData:S,stsTokenManager:P}=n;U(v&&P,e,"internal-error");const x=mo.fromJSON(this.name,P);U(typeof v=="string",e,"internal-error"),vn(h,e.name),vn(f,e.name),U(typeof y=="boolean",e,"internal-error"),U(typeof I=="boolean",e,"internal-error"),vn(g,e.name),vn(E,e.name),vn(w,e.name),vn(p,e.name),vn(d,e.name),vn(m,e.name);const N=new nr({uid:v,auth:e,email:f,emailVerified:y,displayName:h,isAnonymous:I,photoURL:E,phoneNumber:g,tenantId:w,stsTokenManager:x,createdAt:d,lastLoginAt:m});return S&&Array.isArray(S)&&(N.providerData=S.map(ue=>Object.assign({},ue))),p&&(N._redirectEventId=p),N}static async _fromIdTokenResponse(e,n,r=!1){const i=new mo;i.updateFromServerResponse(n);const s=new nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await eu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o1.type="NONE";const a1=o1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tu(this.userKey,i.apiKey,s),this.fullPersistenceKey=tu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ci(jt(a1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||jt(a1);const o=tu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=nr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ci(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ci(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d1(e))return"Blackberry";if(p1(e))return"Webos";if(Ld(e))return"Safari";if((e.includes("chrome/")||c1(e))&&!e.includes("edge/"))return"Chrome";if(f1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u1(t=ye()){return/firefox\//i.test(t)}function Ld(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c1(t=ye()){return/crios\//i.test(t)}function h1(t=ye()){return/iemobile/i.test(t)}function f1(t=ye()){return/android/i.test(t)}function d1(t=ye()){return/blackberry/i.test(t)}function p1(t=ye()){return/webos/i.test(t)}function nu(t=ye()){return/iphone|ipad|ipod/i.test(t)}function wA(t=ye()){var e;return nu(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function EA(){return Wy()&&document.documentMode===10}function m1(t=ye()){return nu(t)||f1(t)||p1(t)||d1(t)||/windows phone/i.test(t)||h1(t)}function SA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t,e=[]){let n;switch(t){case"Browser":n=l1(ye());break;case"Worker":n=`${l1(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new y1(this),this.idTokenSubscription=new y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eu(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ht(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function go(t){return ht(t)}class y1{constructor(e){this.auth=e,this.observer=null,this.addObserver=cI(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function TA(t,e){return li(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",ho(t,e))}async function CA(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Md{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return IA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kA(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return TA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CA(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="http://localhost";class rr extends Md{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:RA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ts(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AA(t){const e=Is(ks(t)).link,n=e?Is(ks(e)).deep_link_id:null,r=Is(ks(t)).deep_link_id;return(r?Is(ks(r)).link:null)||r||n||e||t}class bd{constructor(e){var n,r,i,s,o,a;const l=Is(ks(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=NA((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AA(e);try{return new bd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(e,n){return yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bd.parseLink(n);return U(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends $d{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends vo{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends vo{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends vo{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends vo{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e){return fo(t,"POST","/v1/accounts:signUp",ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await nr._fromIdTokenResponse(e,r,i),o=v1(r);return new ir({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=v1(r);return new ir({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function v1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends Bn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,ru.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ru(e,n,r,i)}}function w1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ru._fromErrorAndOperation(t,s,e,r):s})}async function OA(t,e,n=!1){const r=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ir._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ui(t,w1(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=xd(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),ir._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e,n=!1){const r="signIn",i=await w1(t,r,e),s=await ir._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xA(t,e){return E1(go(t),e)}async function iD(t,e,n){const r=go(t),i=await PA(r,{returnSecureToken:!0,email:e,password:n}),s=await ir._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function sD(t,e,n){return xA(ht(t),fi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e){return li(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ht(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ui(r,LA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aD(t){return ht(t).signOut()}const iu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(iu,"1"),this.storage.removeItem(iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){const t=ye();return Ld(t)||nu(t)}const bA=1e3,$A=10;class _1 extends S1{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MA()&&SA(),this.fallbackToPolling=m1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$A):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_1.type="LOCAL";const UA=_1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1 extends S1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T1.type="SESSION";const I1=T1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await FA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ud("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function jA(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){return typeof Rt().WorkerGlobalScope!="undefined"&&typeof Rt().importScripts=="function"}async function BA(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HA(){return k1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="firebaseLocalStorageDb",WA=1,ou="firebaseLocalStorage",R1="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function au(t,e){return t.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function qA(){const t=indexedDB.deleteDatabase(C1);return new wo(t).toPromise()}function Fd(){const t=indexedDB.open(C1,WA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ou,{keyPath:R1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await qA(),e(await Fd()))})})}async function N1(t,e,n){const r=au(t,!0).put({[R1]:e,value:n});return new wo(r).toPromise()}async function KA(t,e){const n=au(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function A1(t,e){const n=au(t,!0).delete(e);return new wo(n).toPromise()}const GA=800,QA=3;class P1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(HA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BA(),!this.activeServiceWorker)return;this.sender=new VA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fd();return await N1(e,iu,"1"),await A1(e,iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>N1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=au(i,!1).getAll();return new wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P1.type="LOCAL";const YA=P1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function JA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XA().appendChild(r)})}function ZA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new co(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t,e){return e?jt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends Md{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eP(t){return E1(t.auth,new Vd(t),t.bypassAuthState)}function tP(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),DA(n,new Vd(t),t.bypassAuthState)}async function nP(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),OA(n,new Vd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eP;case"linkViaPopup":case"linkViaRedirect":return nP;case"reauthViaPopup":case"reauthViaRedirect":return tP;default:ft(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new co(2e3,1e4);async function lD(t,e,n){const r=go(t);eA(t,e,$d);const i=O1(r,n);return new sr(r,"signInViaPopup",e,i).executeNotNull()}class sr extends D1{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rP.get())};e()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="pendingRedirect",jd=new Map;class sP extends D1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=jd.get(this.auth._key());if(!e){try{const r=await oP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jd.set(this.auth._key(),e)}return this.bypassAuthState||jd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oP(t,e){const n=lP(e),r=aP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aP(t){return jt(t._redirectPersistence)}function lP(t){return tu(iP,t.config.apiKey,t.name)}async function uP(t,e,n=!1){const r=go(t),i=O1(r,e),o=await new sP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=10*60*1e3;class hP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!L1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cP&&this.cachedEventUids.clear(),this.cachedEventUids.has(x1(e))}saveEventToCache(e){this.cachedEventUids.add(x1(e)),this.lastProcessedEventTime=Date.now()}}function x1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function L1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e={}){return li(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mP=/^https?/;async function gP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dP(t);for(const n of e)try{if(yP(n))return}catch{}ft(t,"unauthorized-domain")}function yP(t){const e=Ad(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mP.test(n))return!1;if(pP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new co(3e4,6e4);function M1(){const t=Rt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wP(t){return new Promise((e,n)=>{var r,i,s;function o(){M1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{M1(),n(Ct(t,"network-request-failed"))},timeout:vP.get()})}if((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Rt().gapi)===null||s===void 0?void 0:s.load)o();else{const a=ZA("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},JA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lu=null,e})}let lu=null;function EP(t){return lu=lu||wP(t),lu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=new co(5e3,15e3),_P="__/auth/iframe",TP="emulator/auth/iframe",IP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CP(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pd(e,TP):`https://${t.config.authDomain}/${_P}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=kP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ts(r).slice(1)}`}async function RP(t){const e=await EP(t),n=Rt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:CP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=Rt().setTimeout(()=>{s(o)},SP.get());function l(){Rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AP=500,PP=600,OP="_blank",DP="http://localhost";class b1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xP(t,e,n,r=AP,i=PP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ye().toLowerCase();n&&(a=c1(u)?OP:n),u1(u)&&(e=e||DP,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,E])=>`${f}${g}=${E},`,"");if(wA(u)&&a!=="_self")return LP(e||"",a),new b1(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new b1(h)}function LP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="__/auth/handler",bP="emulator/auth/handler";function $1(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof $d){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof vo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${$P(t)}?${Ts(a).slice(1)}`}function $P({config:t}){return t.emulator?Pd(t,bP):`https://${t.authDomain}/${MP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="webStorageSupport";class UP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I1,this._completeRedirectFn=uP}async _openPopup(e,n,r,i){var s;Vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=$1(e,n,r,Ad(),i);return xP(e,o,Ud())}async _openRedirect(e,n,r,i){return await this._originValidation(e),jA($1(e,n,r,Ad(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RP(e),r=new hP(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bd,{type:Bd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bd];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m1()||Ld()||nu()}}const FP=UP;var U1="@firebase/auth",F1="0.19.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BP(t){Cs(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),U(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g1(t)},l=new _A(o,a);return nA(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cs(new jr("auth-internal",e=>{const n=go(e.getProvider("auth").getImmediate());return(r=>new VP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(U1,F1,jP(t)),hn(U1,F1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t=Qy()){const e=Qh(t,"auth");return e.isInitialized()?e.getImmediate():tA(t,{popupRedirectResolver:FP,persistence:[YA,UA,I1]})}BP("Browser");var uu="NOT_FOUND";function zP(t){var e;return{get:function(r){return e&&t(e.key,r)?e.value:uu},put:function(r,i){e={key:r,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function HP(t,e){var n=[];function r(a){var l=n.findIndex(function(c){return e(a,c.key)});if(l>-1){var u=n[l];return l>0&&(n.splice(l,1),n.unshift(u)),u.value}return uu}function i(a,l){r(a)===uu&&(n.unshift({key:a,value:l}),n.length>t&&n.pop())}function s(){return n}function o(){n=[]}return{get:r,put:i,getEntries:s,clear:o}}var WP=function(e,n){return e===n};function qP(t){return function(n,r){if(n===null||r===null||n.length!==r.length)return!1;for(var i=n.length,s=0;s<i;s++)if(!t(n[s],r[s]))return!1;return!0}}function KP(t,e){var n=typeof e=="object"?e:{equalityCheck:e},r=n.equalityCheck,i=r===void 0?WP:r,s=n.maxSize,o=s===void 0?1:s,a=n.resultEqualityCheck,l=qP(i),u=o===1?zP(l):HP(o,l);function c(){var h=u.get(arguments);if(h===uu){if(h=t.apply(null,arguments),a){var f=u.getEntries(),g=f.find(function(E){return a(E.value,h)});g&&(h=g.value)}u.put(arguments,h)}return h}return c.clearCache=function(){return u.clear()},c}function GP(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(r){return typeof r=="function"})){var n=e.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function QP(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];var u=0,c,h={memoizeOptions:void 0},f=a.pop();if(typeof f=="object"&&(h=f,f=a.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var g=h,E=g.memoizeOptions,w=E===void 0?n:E,p=Array.isArray(w)?w:[w],d=GP(a),m=t.apply(void 0,[function(){return u++,f.apply(null,arguments)}].concat(p)),v=t(function(){for(var y=[],I=d.length,S=0;S<I;S++)y.push(d[S].apply(null,arguments));return c=m.apply(null,y),c});return Object.assign(v,{resultFunc:f,memoizedResultFunc:m,dependencies:d,lastResult:function(){return c},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return i}var cD=QP(KP),YP="Expected a function",V1="__lodash_hash_undefined__",XP="[object Function]",JP="[object GeneratorFunction]",ZP=/[\\^$.*+?()[\]{}|]/g,eO=/^\[object .+?Constructor\]$/,tO=typeof Io=="object"&&Io&&Io.Object===Object&&Io,nO=typeof self=="object"&&self&&self.Object===Object&&self,j1=tO||nO||Function("return this")();function rO(t,e){return t==null?void 0:t[e]}function iO(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}var sO=Array.prototype,oO=Function.prototype,B1=Object.prototype,zd=j1["__core-js_shared__"],z1=function(){var t=/[^.]+$/.exec(zd&&zd.keys&&zd.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),H1=oO.toString,Hd=B1.hasOwnProperty,aO=B1.toString,lO=RegExp("^"+H1.call(Hd).replace(ZP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),uO=sO.splice,cO=W1(j1,"Map"),Eo=W1(Object,"create");function or(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function hO(){this.__data__=Eo?Eo(null):{}}function fO(t){return this.has(t)&&delete this.__data__[t]}function dO(t){var e=this.__data__;if(Eo){var n=e[t];return n===V1?void 0:n}return Hd.call(e,t)?e[t]:void 0}function pO(t){var e=this.__data__;return Eo?e[t]!==void 0:Hd.call(e,t)}function mO(t,e){var n=this.__data__;return n[t]=Eo&&e===void 0?V1:e,this}or.prototype.clear=hO;or.prototype.delete=fO;or.prototype.get=dO;or.prototype.has=pO;or.prototype.set=mO;function di(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function gO(){this.__data__=[]}function yO(t){var e=this.__data__,n=cu(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():uO.call(e,n,1),!0}function vO(t){var e=this.__data__,n=cu(e,t);return n<0?void 0:e[n][1]}function wO(t){return cu(this.__data__,t)>-1}function EO(t,e){var n=this.__data__,r=cu(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}di.prototype.clear=gO;di.prototype.delete=yO;di.prototype.get=vO;di.prototype.has=wO;di.prototype.set=EO;function ar(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function SO(){this.__data__={hash:new or,map:new(cO||di),string:new or}}function _O(t){return hu(this,t).delete(t)}function TO(t){return hu(this,t).get(t)}function IO(t){return hu(this,t).has(t)}function kO(t,e){return hu(this,t).set(t,e),this}ar.prototype.clear=SO;ar.prototype.delete=_O;ar.prototype.get=TO;ar.prototype.has=IO;ar.prototype.set=kO;function cu(t,e){for(var n=t.length;n--;)if(PO(t[n][0],e))return n;return-1}function CO(t){if(!q1(t)||NO(t))return!1;var e=OO(t)||iO(t)?lO:eO;return e.test(AO(t))}function hu(t,e){var n=t.__data__;return RO(e)?n[typeof e=="string"?"string":"hash"]:n.map}function W1(t,e){var n=rO(t,e);return CO(n)?n:void 0}function RO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function NO(t){return!!z1&&z1 in t}function AO(t){if(t!=null){try{return H1.call(t)}catch{}try{return t+""}catch{}}return""}function Wd(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(YP);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o),o};return n.cache=new(Wd.Cache||ar),n}Wd.Cache=ar;function PO(t,e){return t===e||t!==t&&e!==e}function OO(t){var e=q1(t)?aO.call(t):"";return e==XP||e==JP}function q1(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}var hD=Wd,K1={};Object.defineProperty(K1,"__esModule",{value:!0});var So=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},DO=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),xO=O.exports,pi=G1(xO),LO=ey.exports,K=G1(LO);function G1(t){return t&&t.__esModule?t:{default:t}}function qd(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function MO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bO(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function $O(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _o=!1,Q1=!1,Y1=!1,fu=function(t){$O(e,t);function e(n){MO(this,e);var r=bO(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.onScriptLoaded=function(){e.stripeHandler||(e.stripeHandler=StripeCheckout.configure({key:r.props.stripeKey}),r.hasPendingClick&&r.showStripeDialog())},r.onScriptError=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r.hideLoadingDialog(),r.props.onScriptError&&r.props.onScriptError.apply(r,s)},r.onClosed=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r._isMounted&&r.setState({open:!1}),r.props.closed&&r.props.closed.apply(r,s)},r.onOpened=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r.setState({open:!0}),r.props.opened&&r.props.opened.apply(r,s)},r.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(i,s){return So({},i,r.props.hasOwnProperty(s)&&qd({},s,r.props[s]))},{opened:r.onOpened,closed:r.onClosed})},r.onClick=function(){if(!r.props.disabled)if(Y1)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch{}else e.stripeHandler?r.showStripeDialog():(r.showLoadingDialog(),r.hasPendingClick=!0)},r.handleOnMouseDown=function(){r.setState({buttonActive:!0})},r.handleOnMouseUp=function(){r.setState({buttonActive:!1})},r.state={open:!1,buttonActive:!1},r}return DO(e,[{key:"componentDidMount",value:function(){var r=this;if(this._isMounted=!0,!Q1&&!_o){_o=!0;var i=document.createElement("script");typeof this.props.onScriptTagCreated=="function"&&this.props.onScriptTagCreated(i),i.src="https://checkout.stripe.com/checkout.js",i.async=1,this.loadPromise=function(){var s=!1,o=new Promise(function(l,u){i.onload=function(){Q1=!0,_o=!1,l(),r.onScriptLoaded()},i.onerror=function(c){Y1=!0,_o=!1,u(c),r.onScriptError(c)}}),a=new Promise(function(l,u){o.then(function(){return s?u({isCanceled:!0}):l()}),o.catch(function(c){return u(s?{isCanceled:!0}:c)})});return{promise:a,cancel:function(){s=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(i)}}},{key:"componentDidUpdate",value:function(){_o||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),e.stripeHandler&&this.state.open&&e.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){(!e.stripeHandler||this.props.reconfigureOnUpdate)&&(e.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];this.props.showLoadingDialog.apply(this,i)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];this.props.hideLoadingDialog.apply(this,i)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),e.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return pi.default.createElement("button",So({},qd({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:So({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),pi.default.createElement("span",{style:So({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return pi.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},pi.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){this.props.desktopShowModal===!0&&!this.state.open?this.onClick():this.props.desktopShowModal===!1&&this.state.open&&e.stripeHandler.close();var r=this.props.ComponentClass;return this.props.children?pi.default.createElement(r,So({},qd({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),e}(pi.default.Component);fu.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"};fu.propTypes={desktopShowModal:K.default.bool,triggerEvent:K.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:K.default.string,style:K.default.object,textStyle:K.default.object,disabled:K.default.bool,ComponentClass:K.default.string,showLoadingDialog:K.default.func,hideLoadingDialog:K.default.func,onScriptError:K.default.func,onScriptTagCreated:K.default.func,reconfigureOnUpdate:K.default.bool,stripeKey:K.default.string.isRequired,token:K.default.func.isRequired,name:K.default.string,description:K.default.string,image:K.default.string,amount:K.default.number,locale:K.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:K.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:K.default.string,zipCode:K.default.bool,billingAddress:K.default.bool,shippingAddress:K.default.bool,email:K.default.string,allowRememberMe:K.default.bool,bitcoin:K.default.bool,alipay:K.default.oneOf(["auto",!0,!1]),alipayReusable:K.default.bool,opened:K.default.func,closed:K.default.func};fu._isMounted=!1;var fD=K1.default=fu;export{aE as A,eD as B,ZO as C,KO as D,ST as E,Bn as F,En as G,rD as I,GO as L,HO as N,jO as P,WO as R,fD as _,Oy as a,XO as b,QO as c,QT as d,cD as e,p_ as f,uD as g,zO as h,JO as i,FO as j,hD as k,tD as l,BO as m,qO as n,V_ as o,YO as p,aD as q,O as r,lD as s,sD as t,Ty as u,iD as v,oD as w,VO as x,nD as y,UO as z};
