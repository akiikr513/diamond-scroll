(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();var Fh={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function $S(){if(b0)return tl;b0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:l}}return tl.Fragment=e,tl.jsx=n,tl.jsxs=n,tl}var A0;function eM(){return A0||(A0=1,Fh.exports=$S()),Fh.exports}var rt=eM(),Hh={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function tM(){if(R0)return ht;R0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(L,J,he){this.props=L,this.context=J,this.refs=T,this.updater=he||x}S.prototype.isReactComponent={},S.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(L,J,he){this.props=L,this.context=J,this.refs=T,this.updater=he||x}var U=N.prototype=new y;U.constructor=N,M(U,S.prototype),U.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function B(L,J,he,ge,Ae,Be){return he=Be.ref,{$$typeof:o,type:L,key:J,ref:he!==void 0?he:null,props:Be}}function V(L,J){return B(L.type,J,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function w(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(he){return J[he]})}var H=/\/+/g;function Y(L,J){return typeof L=="object"&&L!==null&&L.key!=null?w(""+L.key):J.toString(36)}function ae(){}function re(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ae,ae):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ie(L,J,he,ge,Ae){var Be=typeof L;(Be==="undefined"||Be==="boolean")&&(L=null);var ee=!1;if(L===null)ee=!0;else switch(Be){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(L.$$typeof){case o:case e:ee=!0;break;case g:return ee=L._init,ie(ee(L._payload),J,he,ge,Ae)}}if(ee)return Ae=Ae(L),ee=ge===""?"."+Y(L,0):ge,D(Ae)?(he="",ee!=null&&(he=ee.replace(H,"$&/")+"/"),ie(Ae,J,he,"",function(Ye){return Ye})):Ae!=null&&(C(Ae)&&(Ae=V(Ae,he+(Ae.key==null||L&&L.key===Ae.key?"":(""+Ae.key).replace(H,"$&/")+"/")+ee)),J.push(Ae)),1;ee=0;var pe=ge===""?".":ge+":";if(D(L))for(var Te=0;Te<L.length;Te++)ge=L[Te],Be=pe+Y(ge,Te),ee+=ie(ge,J,he,Be,Ae);else if(Te=v(L),typeof Te=="function")for(L=Te.call(L),Te=0;!(ge=L.next()).done;)ge=ge.value,Be=pe+Y(ge,Te++),ee+=ie(ge,J,he,Be,Ae);else if(Be==="object"){if(typeof L.then=="function")return ie(re(L),J,he,ge,Ae);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ee}function O(L,J,he){if(L==null)return L;var ge=[],Ae=0;return ie(L,ge,"","",function(Be){return J.call(he,Be,Ae++)}),ge}function K(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(he){(L._status===0||L._status===-1)&&(L._status=1,L._result=he)},function(he){(L._status===0||L._status===-1)&&(L._status=2,L._result=he)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var q=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function ye(){}return ht.Children={map:O,forEach:function(L,J,he){O(L,function(){J.apply(this,arguments)},he)},count:function(L){var J=0;return O(L,function(){J++}),J},toArray:function(L){return O(L,function(J){return J})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ht.Component=S,ht.Fragment=n,ht.Profiler=r,ht.PureComponent=N,ht.StrictMode=a,ht.Suspense=p,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ht.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},ht.cache=function(L){return function(){return L.apply(null,arguments)}},ht.cloneElement=function(L,J,he){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ge=M({},L.props),Ae=L.key,Be=void 0;if(J!=null)for(ee in J.ref!==void 0&&(Be=void 0),J.key!==void 0&&(Ae=""+J.key),J)!F.call(J,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&J.ref===void 0||(ge[ee]=J[ee]);var ee=arguments.length-2;if(ee===1)ge.children=he;else if(1<ee){for(var pe=Array(ee),Te=0;Te<ee;Te++)pe[Te]=arguments[Te+2];ge.children=pe}return B(L.type,Ae,void 0,void 0,Be,ge)},ht.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},ht.createElement=function(L,J,he){var ge,Ae={},Be=null;if(J!=null)for(ge in J.key!==void 0&&(Be=""+J.key),J)F.call(J,ge)&&ge!=="key"&&ge!=="__self"&&ge!=="__source"&&(Ae[ge]=J[ge]);var ee=arguments.length-2;if(ee===1)Ae.children=he;else if(1<ee){for(var pe=Array(ee),Te=0;Te<ee;Te++)pe[Te]=arguments[Te+2];Ae.children=pe}if(L&&L.defaultProps)for(ge in ee=L.defaultProps,ee)Ae[ge]===void 0&&(Ae[ge]=ee[ge]);return B(L,Be,void 0,void 0,null,Ae)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(L){return{$$typeof:f,render:L}},ht.isValidElement=C,ht.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:K}},ht.memo=function(L,J){return{$$typeof:h,type:L,compare:J===void 0?null:J}},ht.startTransition=function(L){var J=I.T,he={};I.T=he;try{var ge=L(),Ae=I.S;Ae!==null&&Ae(he,ge),typeof ge=="object"&&ge!==null&&typeof ge.then=="function"&&ge.then(ye,q)}catch(Be){q(Be)}finally{I.T=J}},ht.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ht.use=function(L){return I.H.use(L)},ht.useActionState=function(L,J,he){return I.H.useActionState(L,J,he)},ht.useCallback=function(L,J){return I.H.useCallback(L,J)},ht.useContext=function(L){return I.H.useContext(L)},ht.useDebugValue=function(){},ht.useDeferredValue=function(L,J){return I.H.useDeferredValue(L,J)},ht.useEffect=function(L,J,he){var ge=I.H;if(typeof he=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ge.useEffect(L,J)},ht.useId=function(){return I.H.useId()},ht.useImperativeHandle=function(L,J,he){return I.H.useImperativeHandle(L,J,he)},ht.useInsertionEffect=function(L,J){return I.H.useInsertionEffect(L,J)},ht.useLayoutEffect=function(L,J){return I.H.useLayoutEffect(L,J)},ht.useMemo=function(L,J){return I.H.useMemo(L,J)},ht.useOptimistic=function(L,J){return I.H.useOptimistic(L,J)},ht.useReducer=function(L,J,he){return I.H.useReducer(L,J,he)},ht.useRef=function(L){return I.H.useRef(L)},ht.useState=function(L){return I.H.useState(L)},ht.useSyncExternalStore=function(L,J,he){return I.H.useSyncExternalStore(L,J,he)},ht.useTransition=function(){return I.H.useTransition()},ht.version="19.1.1",ht}var w0;function bp(){return w0||(w0=1,Hh.exports=tM()),Hh.exports}var bn=bp(),Vh={exports:{}},nl={},Gh={exports:{}},kh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function nM(){return C0||(C0=1,(function(o){function e(O,K){var q=O.length;O.push(K);e:for(;0<q;){var ye=q-1>>>1,L=O[ye];if(0<r(L,K))O[ye]=K,O[q]=L,q=ye;else break e}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var K=O[0],q=O.pop();if(q!==K){O[0]=q;e:for(var ye=0,L=O.length,J=L>>>1;ye<J;){var he=2*(ye+1)-1,ge=O[he],Ae=he+1,Be=O[Ae];if(0>r(ge,q))Ae<L&&0>r(Be,ge)?(O[ye]=Be,O[Ae]=q,ye=Ae):(O[ye]=ge,O[he]=q,ye=he);else if(Ae<L&&0>r(Be,q))O[ye]=Be,O[Ae]=q,ye=Ae;else break e}}return K}function r(O,K){var q=O.sortIndex-K.sortIndex;return q!==0?q:O.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,_=null,v=3,x=!1,M=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var K=n(h);K!==null;){if(K.callback===null)a(h);else if(K.startTime<=O)a(h),K.sortIndex=K.expirationTime,e(p,K);else break;K=n(h)}}function I(O){if(T=!1,D(O),!M)if(n(p)!==null)M=!0,F||(F=!0,Y());else{var K=n(h);K!==null&&ie(I,K.startTime-O)}}var F=!1,B=-1,V=5,C=-1;function w(){return S?!0:!(o.unstable_now()-C<V)}function H(){if(S=!1,F){var O=o.unstable_now();C=O;var K=!0;try{e:{M=!1,T&&(T=!1,N(B),B=-1),x=!0;var q=v;try{t:{for(D(O),_=n(p);_!==null&&!(_.expirationTime>O&&w());){var ye=_.callback;if(typeof ye=="function"){_.callback=null,v=_.priorityLevel;var L=ye(_.expirationTime<=O);if(O=o.unstable_now(),typeof L=="function"){_.callback=L,D(O),K=!0;break t}_===n(p)&&a(p),D(O)}else a(p);_=n(p)}if(_!==null)K=!0;else{var J=n(h);J!==null&&ie(I,J.startTime-O),K=!1}}break e}finally{_=null,v=q,x=!1}K=void 0}}finally{K?Y():F=!1}}}var Y;if(typeof U=="function")Y=function(){U(H)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,re=ae.port2;ae.port1.onmessage=H,Y=function(){re.postMessage(null)}}else Y=function(){y(H,0)};function ie(O,K){B=y(function(){O(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(O){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var q=v;v=K;try{return O()}finally{v=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=v;v=O;try{return K()}finally{v=q}},o.unstable_scheduleCallback=function(O,K,q){var ye=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ye+q:ye):q=ye,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=q+L,O={id:g++,callback:K,priorityLevel:O,startTime:q,expirationTime:L,sortIndex:-1},q>ye?(O.sortIndex=q,e(h,O),n(p)===null&&O===n(h)&&(T?(N(B),B=-1):T=!0,ie(I,q-ye))):(O.sortIndex=L,e(p,O),M||x||(M=!0,F||(F=!0,Y()))),O},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(O){var K=v;return function(){var q=v;v=K;try{return O.apply(this,arguments)}finally{v=q}}}})(kh)),kh}var D0;function iM(){return D0||(D0=1,Gh.exports=nM()),Gh.exports}var Xh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function aM(){if(L0)return zn;L0=1;var o=bp();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:h,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(p,h,null,g)},zn.flushSync=function(p){var h=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=h,a.p=g,a.d.f()}},zn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},zn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,_=f(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},zn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=f(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},zn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=f(g,h.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},zn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=f(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},zn.requestFormReset=function(p){a.d.r(p)},zn.unstable_batchedUpdates=function(p,h){return p(h)},zn.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.1.1",zn}var U0;function sM(){if(U0)return Xh.exports;U0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xh.exports=aM(),Xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function rM(){if(N0)return nl;N0=1;var o=iM(),e=bp(),n=sM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(l(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=l(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,c=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){s=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return f(d),t;if(m===c)return f(d),i;m=m.sibling}throw Error(a(188))}if(s.return!==c.return)s=d,c=m;else{for(var E=!1,A=d.child;A;){if(A===s){E=!0,s=d,c=m;break}if(A===c){E=!0,c=d,s=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===s){E=!0,s=m,c=d;break}if(A===c){E=!0,c=m,s=d;break}A=A.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function h(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=h(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function re(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case U:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case V:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}var ie=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ye=[],L=-1;function J(t){return{current:t}}function he(t){0>L||(t.current=ye[L],ye[L]=null,L--)}function ge(t,i){L++,ye[L]=t.current,t.current=i}var Ae=J(null),Be=J(null),ee=J(null),pe=J(null);function Te(t,i){switch(ge(ee,i),ge(Be,t),ge(Ae,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?$_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=$_(i),t=e0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}he(Ae),ge(Ae,t)}function Ye(){he(Ae),he(Be),he(ee)}function ke(t){t.memoizedState!==null&&ge(pe,t);var i=Ae.current,s=e0(i,t.type);i!==s&&(ge(Be,t),ge(Ae,s))}function ft(t){Be.current===t&&(he(Ae),he(Be)),pe.current===t&&(he(pe),Zo._currentValue=q)}var en=Object.prototype.hasOwnProperty,G=o.unstable_scheduleCallback,Ct=o.unstable_cancelCallback,Je=o.unstable_shouldYield,Ze=o.unstable_requestPaint,Oe=o.unstable_now,Wt=o.unstable_getCurrentPriorityLevel,Ve=o.unstable_ImmediatePriority,ot=o.unstable_UserBlockingPriority,Zt=o.unstable_NormalPriority,Qt=o.unstable_LowPriority,P=o.unstable_IdlePriority,b=o.log,ne=o.unstable_setDisableYieldValue,fe=null,_e=null;function ue(t){if(typeof b=="function"&&ne(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(fe,t)}catch{}}var Pe=Math.clz32?Math.clz32:qe,Re=Math.log,Xe=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(Re(t)/Xe|0)|0}var Se=256,Le=4194304;function Ke(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ge(t,i,s){var c=t.pendingLanes;if(c===0)return 0;var d=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var A=c&134217727;return A!==0?(c=A&~m,c!==0?d=Ke(c):(E&=A,E!==0?d=Ke(E):s||(s=A&~t,s!==0&&(d=Ke(s))))):(A=c&~m,A!==0?d=Ke(A):E!==0?d=Ke(E):s||(s=c&~t,s!==0&&(d=Ke(s)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:d}function Ce(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function lt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Se;return Se<<=1,(Se&4194048)===0&&(Se=256),t}function be(){var t=Le;return Le<<=1,(Le&62914560)===0&&(Le=4194304),t}function we(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ie(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Me(t,i,s,c,d,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,te=t.hiddenUpdates;for(s=E&~s;0<s;){var de=31-Pe(s),ve=1<<de;A[de]=0,z[de]=-1;var se=te[de];if(se!==null)for(te[de]=null,de=0;de<se.length;de++){var oe=se[de];oe!==null&&(oe.lane&=-536870913)}s&=~ve}c!==0&&xe(t,c,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function xe(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var c=31-Pe(i);t.entangledLanes|=i,t.entanglements[c]=t.entanglements[c]|1073741824|s&4194090}function He(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var c=31-Pe(s),d=1<<c;d&i|t[c]&i&&(t[c]|=i),s&=~d}}function st(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:y0(t.type))}function Ti(t,i){var s=K.p;try{return K.p=t,i()}finally{K.p=s}}var hn=Math.random().toString(36).slice(2),dn="__reactFiber$"+hn,tn="__reactProps$"+hn,zi="__reactContainer$"+hn,Ws="__reactEvents$"+hn,Ul="__reactListeners$"+hn,qs="__reactHandles$"+hn,oo="__reactResources$"+hn,Fi="__reactMarker$"+hn;function Ys(t){delete t[dn],delete t[tn],delete t[Ws],delete t[Ul],delete t[qs]}function na(t){var i=t[dn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[zi]||s[dn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=a0(t);t!==null;){if(s=t[dn])return s;t=a0(t)}return i}t=s,s=t.parentNode}return null}function Da(t){if(t=t[dn]||t[zi]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ds(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function La(t){var i=t[oo];return i||(i=t[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ln(t){t[Fi]=!0}var Nl=new Set,Ol={};function R(t,i){j(t,i),j(t+"Capture",i)}function j(t,i){for(Ol[t]=i,t=0;t<i.length;t++)Nl.add(i[t])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},Q={};function Ee(t){return en.call(Q,t)?!0:en.call(ce,t)?!1:le.test(t)?Q[t]=!0:(ce[t]=!0,!1)}function De(t,i,s){if(Ee(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ze(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ue(t,i,s,c){if(c===null)t.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+c)}}var $e,tt;function We(t){if($e===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$e=i&&i[1]||"",tt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+tt}var mt=!1;function Rt(t,i){if(!t||mt)return"";mt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(oe){var se=oe}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(oe){se=oe}t.call(ve.prototype)}}else{try{throw Error()}catch(oe){se=oe}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(oe){if(oe&&se&&typeof oe.stack=="string")return[oe.stack,se.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var z=E.split(`
`),te=A.split(`
`);for(d=c=0;c<z.length&&!z[c].includes("DetermineComponentFrameRoot");)c++;for(;d<te.length&&!te[d].includes("DetermineComponentFrameRoot");)d++;if(c===z.length||d===te.length)for(c=z.length-1,d=te.length-1;1<=c&&0<=d&&z[c]!==te[d];)d--;for(;1<=c&&0<=d;c--,d--)if(z[c]!==te[d]){if(c!==1||d!==1)do if(c--,d--,0>d||z[c]!==te[d]){var de=`
`+z[c].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=c&&0<=d);break}}}finally{mt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?We(s):""}function jt(t){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return Rt(t.type,!1);case 11:return Rt(t.type.render,!1);case 1:return Rt(t.type,!0);case 31:return We("Activity");default:return""}}function Bt(t){try{var i="";do i+=jt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Yt(t){var i=Qe(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function xt(t){t._valueTracker||(t._valueTracker=Yt(t))}function Pn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return t&&(c=Qe(t)?t.checked?"true":"false":t.value),t=c,t!==s?(i.setValue(t),!0):!1}function bi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kn=/[\n"\\]/g;function xn(t){return t.replace(kn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function kt(t,i,s,c,d,m,E,A){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+gt(i)):t.value!==""+gt(i)&&(t.value=""+gt(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?In(t,E,gt(i)):s!=null?In(t,E,gt(s)):c!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+gt(A):t.removeAttribute("name")}function Xn(t,i,s,c,d,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+gt(s):"",i=i!=null?""+gt(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,t.checked=A?t.checked:!!c,t.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function In(t,i,s){i==="number"&&bi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function nn(t,i,s,c){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&c&&(t[s].defaultSelected=!0)}else{for(s=""+gt(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Cn(t,i,s){if(i!=null&&(i=""+gt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+gt(s):""}function js(t,i,s,c){if(i==null){if(c!=null){if(s!=null)throw Error(a(92));if(ie(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),i=s}s=gt(i),t.defaultValue=s,c=t.textContent,c===s&&c!==""&&c!==null&&(t.value=c)}function Zn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $p(t,i,s){var c=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":c?t.setProperty(i,s):typeof s!="number"||s===0||Zy.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function em(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?t.setProperty(c,""):c==="float"?t.cssFloat="":t[c]="");for(var d in i)c=i[d],i.hasOwnProperty(d)&&s[d]!==c&&$p(t,d,c)}else for(var m in i)i.hasOwnProperty(m)&&$p(t,m,i[m])}function Bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return Jy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var zu=null;function Fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,Zs=null;function tm(t){var i=Da(t);if(i&&(t=i.stateNode)){var s=t[tn]||null;e:switch(t=i.stateNode,i.type){case"input":if(kt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+xn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==t&&c.form===t.form){var d=c[tn]||null;if(!d)throw Error(a(90));kt(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)c=s[i],c.form===t.form&&Pn(c)}break e;case"textarea":Cn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&nn(t,!!s.multiple,i,!1)}}}var Hu=!1;function nm(t,i,s){if(Hu)return t(i,s);Hu=!0;try{var c=t(i);return c}finally{if(Hu=!1,(Ks!==null||Zs!==null)&&(xc(),Ks&&(i=Ks,t=Zs,Zs=Ks=null,tm(i),t)))for(i=0;i<t.length;i++)tm(t[i])}}function lo(t,i){var s=t.stateNode;if(s===null)return null;var c=s[tn]||null;if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(ia)try{var co={};Object.defineProperty(co,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Vu=!1}var Ua=null,Gu=null,Il=null;function im(){if(Il)return Il;var t,i=Gu,s=i.length,c,d="value"in Ua?Ua.value:Ua.textContent,m=d.length;for(t=0;t<s&&i[t]===d[t];t++);var E=s-t;for(c=1;c<=E&&i[s-c]===d[m-c];c++);return Il=d.slice(t,1<c?1-c:void 0)}function Bl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function am(){return!1}function Qn(t){function i(s,c,d,m,E){this._reactName=s,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?zl:am,this.isPropagationStopped=am,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Qn(ps),uo=g({},ps,{view:0,detail:0}),$y=Qn(uo),ku,Xu,fo,Hl=g({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(ku=t.screenX-fo.screenX,Xu=t.screenY-fo.screenY):Xu=ku=0,fo=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:Xu}}),sm=Qn(Hl),ex=g({},Hl,{dataTransfer:0}),tx=Qn(ex),nx=g({},uo,{relatedTarget:0}),Wu=Qn(nx),ix=g({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=Qn(ix),sx=g({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rx=Qn(sx),ox=g({},ps,{data:0}),rm=Qn(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ux[t])?!!i[t]:!1}function qu(){return fx}var hx=g({},uo,{key:function(t){if(t.key){var i=lx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dx=Qn(hx),px=g({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Qn(px),mx=g({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),gx=Qn(mx),_x=g({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=Qn(_x),yx=g({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=Qn(yx),Sx=g({},ps,{newState:0,oldState:0}),Mx=Qn(Sx),Ex=[9,13,27,32],Yu=ia&&"CompositionEvent"in window,ho=null;ia&&"documentMode"in document&&(ho=document.documentMode);var Tx=ia&&"TextEvent"in window&&!ho,lm=ia&&(!Yu||ho&&8<ho&&11>=ho),cm=" ",um=!1;function fm(t,i){switch(t){case"keyup":return Ex.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function bx(t,i){switch(t){case"compositionend":return hm(i);case"keypress":return i.which!==32?null:(um=!0,cm);case"textInput":return t=i.data,t===cm&&um?null:t;default:return null}}function Ax(t,i){if(Qs)return t==="compositionend"||!Yu&&fm(t,i)?(t=im(),Il=Gu=Ua=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lm&&i.locale!=="ko"?null:i.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Rx[t.type]:i==="textarea"}function pm(t,i,s,c){Ks?Zs?Zs.push(c):Zs=[c]:Ks=c,i=Ac(i,"onChange"),0<i.length&&(s=new Fl("onChange","change",null,s,c),t.push({event:s,listeners:i}))}var po=null,mo=null;function wx(t){j_(t,0)}function Vl(t){var i=ds(t);if(Pn(i))return t}function mm(t,i){if(t==="change")return i}var gm=!1;if(ia){var ju;if(ia){var Ku="oninput"in document;if(!Ku){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),Ku=typeof _m.oninput=="function"}ju=Ku}else ju=!1;gm=ju&&(!document.documentMode||9<document.documentMode)}function vm(){po&&(po.detachEvent("onpropertychange",ym),mo=po=null)}function ym(t){if(t.propertyName==="value"&&Vl(mo)){var i=[];pm(i,mo,t,Fu(t)),nm(wx,i)}}function Cx(t,i,s){t==="focusin"?(vm(),po=i,mo=s,po.attachEvent("onpropertychange",ym)):t==="focusout"&&vm()}function Dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(mo)}function Lx(t,i){if(t==="click")return Vl(i)}function Ux(t,i){if(t==="input"||t==="change")return Vl(i)}function Nx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:Nx;function go(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var d=s[c];if(!en.call(i,d)||!ii(t[d],i[d]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,i){var s=xm(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=i&&c>=i)return{node:s,offset:i-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=xm(s)}}function Mm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Mm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Em(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=bi(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=bi(t.document)}return i}function Zu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Ox=ia&&"documentMode"in document&&11>=document.documentMode,Js=null,Qu=null,_o=null,Ju=!1;function Tm(t,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ju||Js==null||Js!==bi(c)||(c=Js,"selectionStart"in c&&Zu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_o&&go(_o,c)||(_o=c,c=Ac(Qu,"onSelect"),0<c.length&&(i=new Fl("onSelect","select",null,i,s),t.push({event:i,listeners:c}),i.target=Js)))}function ms(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var $s={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},$u={},bm={};ia&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function gs(t){if($u[t])return $u[t];if(!$s[t])return t;var i=$s[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in bm)return $u[t]=i[s];return t}var Am=gs("animationend"),Rm=gs("animationiteration"),wm=gs("animationstart"),Px=gs("transitionrun"),Ix=gs("transitionstart"),Bx=gs("transitioncancel"),Cm=gs("transitionend"),Dm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Ai(t,i){Dm.set(t,i),R(i,[t])}var Lm=new WeakMap;function pi(t,i){if(typeof t=="object"&&t!==null){var s=Lm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Bt(i)},Lm.set(t,i),i)}return{value:t,source:i,stack:Bt(i)}}var mi=[],er=0,tf=0;function Gl(){for(var t=er,i=tf=er=0;i<t;){var s=mi[i];mi[i++]=null;var c=mi[i];mi[i++]=null;var d=mi[i];mi[i++]=null;var m=mi[i];if(mi[i++]=null,c!==null&&d!==null){var E=c.pending;E===null?d.next=d:(d.next=E.next,E.next=d),c.pending=d}m!==0&&Um(s,d,m)}}function kl(t,i,s,c){mi[er++]=t,mi[er++]=i,mi[er++]=s,mi[er++]=c,tf|=c,t.lanes|=c,t=t.alternate,t!==null&&(t.lanes|=c)}function nf(t,i,s,c){return kl(t,i,s,c),Xl(t)}function tr(t,i){return kl(t,null,null,i),Xl(t)}function Um(t,i,s){t.lanes|=s;var c=t.alternate;c!==null&&(c.lanes|=s);for(var d=!1,m=t.return;m!==null;)m.childLanes|=s,c=m.alternate,c!==null&&(c.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&i!==null&&(d=31-Pe(s),t=m.hiddenUpdates,c=t[d],c===null?t[d]=[i]:c.push(i),i.lane=s|536870912),m):null}function Xl(t){if(50<Go)throw Go=0,ch=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var nr={};function zx(t,i,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,i,s,c){return new zx(t,i,s,c)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,i){var s=t.alternate;return s===null?(s=ai(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Nm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Wl(t,i,s,c,d,m){var E=0;if(c=t,typeof t=="function")af(t)&&(E=1);else if(typeof t=="string")E=HS(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=ai(31,s,i,d),t.elementType=C,t.lanes=m,t;case M:return _s(s.children,d,m,i);case T:E=8,d|=24;break;case S:return t=ai(12,s,i,d|2),t.elementType=S,t.lanes=m,t;case I:return t=ai(13,s,i,d),t.elementType=I,t.lanes=m,t;case F:return t=ai(19,s,i,d),t.elementType=F,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case U:E=10;break e;case N:E=9;break e;case D:E=11;break e;case B:E=14;break e;case V:E=16,c=null;break e}E=29,s=Error(a(130,t===null?"null":typeof t,"")),c=null}return i=ai(E,s,i,d),i.elementType=t,i.type=c,i.lanes=m,i}function _s(t,i,s,c){return t=ai(7,t,c,i),t.lanes=s,t}function sf(t,i,s){return t=ai(6,t,null,i),t.lanes=s,t}function rf(t,i,s){return i=ai(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ir=[],ar=0,ql=null,Yl=0,gi=[],_i=0,vs=null,sa=1,ra="";function ys(t,i){ir[ar++]=Yl,ir[ar++]=ql,ql=t,Yl=i}function Om(t,i,s){gi[_i++]=sa,gi[_i++]=ra,gi[_i++]=vs,vs=t;var c=sa;t=ra;var d=32-Pe(c)-1;c&=~(1<<d),s+=1;var m=32-Pe(i)+d;if(30<m){var E=d-d%5;m=(c&(1<<E)-1).toString(32),c>>=E,d-=E,sa=1<<32-Pe(i)+d|s<<d|c,ra=m+t}else sa=1<<m|s<<d|c,ra=t}function of(t){t.return!==null&&(ys(t,1),Om(t,1,0))}function lf(t){for(;t===ql;)ql=ir[--ar],ir[ar]=null,Yl=ir[--ar],ir[ar]=null;for(;t===vs;)vs=gi[--_i],gi[_i]=null,ra=gi[--_i],gi[_i]=null,sa=gi[--_i],gi[_i]=null}var Wn=null,an=null,Dt=!1,xs=null,Hi=!1,cf=Error(a(519));function Ss(t){var i=Error(a(418,""));throw xo(pi(i,t)),cf}function Pm(t){var i=t.stateNode,s=t.type,c=t.memoizedProps;switch(i[dn]=t,i[tn]=c,s){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(s=0;s<Xo.length;s++)Mt(Xo[s],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),Xn(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),xt(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),js(i,c.value,c.defaultValue,c.children),xt(i)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||c.suppressHydrationWarning===!0||J_(i.textContent,s)?(c.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),c.onScroll!=null&&Mt("scroll",i),c.onScrollEnd!=null&&Mt("scrollend",i),c.onClick!=null&&(i.onclick=Rc),i=!0):i=!1,i||Ss(t)}function Im(t){for(Wn=t.return;Wn;)switch(Wn.tag){case 5:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Wn=Wn.return}}function vo(t){if(t!==Wn)return!1;if(!Dt)return Im(t),Dt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||bh(t.type,t.memoizedProps)),s=!s),s&&an&&Ss(t),Im(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){an=wi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}an=null}}else i===27?(i=an,ja(t.type)?(t=Ch,Ch=null,an=t):an=i):an=Wn?wi(t.stateNode.nextSibling):null;return!0}function yo(){an=Wn=null,Dt=!1}function Bm(){var t=xs;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),xs=null),t}function xo(t){xs===null?xs=[t]:xs.push(t)}var uf=J(null),Ms=null,oa=null;function Na(t,i,s){ge(uf,i._currentValue),i._currentValue=s}function la(t){t._currentValue=uf.current,he(uf)}function ff(t,i,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===s)break;t=t.return}}function hf(t,i,s,c){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var E=d.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=d;for(var z=0;z<i.length;z++)if(A.context===i[z]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),ff(m.return,s,t),c||(E=null);break e}m=A.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),ff(E,s,t),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===t){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function So(t,i,s,c){t=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var A=d.type;ii(d.pendingProps.value,E.value)||(t!==null?t.push(A):t=[A])}}else if(d===pe.current){if(E=d.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(Zo):t=[Zo])}d=d.return}t!==null&&hf(i,t,s,c),i.flags|=262144}function jl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Es(t){Ms=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bn(t){return zm(Ms,t)}function Kl(t,i){return Ms===null&&Es(t),zm(t,i)}function zm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},oa===null){if(t===null)throw Error(a(308));oa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else oa=oa.next=i;return s}var Fx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,c){t.push(c)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Hx=o.unstable_scheduleCallback,Vx=o.unstable_NormalPriority,pn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new Fx,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&Hx(Vx,function(){t.controller.abort()})}var Eo=null,pf=0,sr=0,rr=null;function Gx(t,i){if(Eo===null){var s=Eo=[];pf=0,sr=gh(),rr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return pf++,i.then(Fm,Fm),i}function Fm(){if(--pf===0&&Eo!==null){rr!==null&&(rr.status="fulfilled");var t=Eo;Eo=null,sr=0,rr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function kx(t,i){var s=[],c={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return t.then(function(){c.status="fulfilled",c.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(c.status="rejected",c.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),c}var Hm=O.S;O.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Gx(t,i),Hm!==null&&Hm(t,i)};var Ts=J(null);function mf(){var t=Ts.current;return t!==null?t:qt.pooledCache}function Zl(t,i){i===null?ge(Ts,Ts.current):ge(Ts,i.pool)}function Vm(){var t=mf();return t===null?null:{parent:pn._currentValue,pool:t}}var To=Error(a(460)),Gm=Error(a(474)),Ql=Error(a(542)),gf={then:function(){}};function km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jl(){}function Xm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Jl,Jl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,qm(t),t;default:if(typeof i.status=="string")i.then(Jl,Jl);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(c){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=c}},function(c){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,qm(t),t}throw bo=i,To}}var bo=null;function Wm(){if(bo===null)throw Error(a(459));var t=bo;return bo=null,t}function qm(t){if(t===To||t===Ql)throw Error(a(483))}var Oa=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,i,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Nt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,i=Xl(t),Um(t,null,s),i}return kl(t,c,i,s),Xl(t)}function Ao(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var c=i.lanes;c&=t.pendingLanes,s|=c,i.lanes=s,He(t,s)}}function yf(t,i){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?d=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var xf=!1;function Ro(){if(xf){var t=rr;if(t!==null)throw t}}function wo(t,i,s,c){xf=!1;var d=t.updateQueue;Oa=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var z=A,te=z.next;z.next=null,E===null?m=te:E.next=te,E=z;var de=t.alternate;de!==null&&(de=de.updateQueue,A=de.lastBaseUpdate,A!==E&&(A===null?de.firstBaseUpdate=te:A.next=te,de.lastBaseUpdate=z))}if(m!==null){var ve=d.baseState;E=0,de=te=z=null,A=m;do{var se=A.lane&-536870913,oe=se!==A.lane;if(oe?(Tt&se)===se:(c&se)===se){se!==0&&se===sr&&(xf=!0),de!==null&&(de=de.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var it=t,et=A;se=i;var Ht=s;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){ve=it.call(Ht,ve,se);break e}ve=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,se=typeof it=="function"?it.call(Ht,ve,se):it,se==null)break e;ve=g({},ve,se);break e;case 2:Oa=!0}}se=A.callback,se!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=d.callbacks,oe===null?d.callbacks=[se]:oe.push(se))}else oe={lane:se,tag:A.tag,payload:A.payload,callback:A.callback,next:null},de===null?(te=de=oe,z=ve):de=de.next=oe,E|=se;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,d.lastBaseUpdate=oe,d.shared.pending=null}}while(!0);de===null&&(z=ve),d.baseState=z,d.firstBaseUpdate=te,d.lastBaseUpdate=de,m===null&&(d.shared.lanes=0),Xa|=E,t.lanes=E,t.memoizedState=ve}}function Ym(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function jm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Ym(s[t],i)}var or=J(null),$l=J(0);function Km(t,i){t=ma,ge($l,t),ge(or,i),ma=t|i.baseLanes}function Sf(){ge($l,ma),ge(or,or.current)}function Mf(){ma=$l.current,he(or),he($l)}var Ba=0,vt=null,zt=null,cn=null,ec=!1,lr=!1,bs=!1,tc=0,Co=0,cr=null,Xx=0;function rn(){throw Error(a(321))}function Ef(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ii(t[s],i[s]))return!1;return!0}function Tf(t,i,s,c,d,m){return Ba=m,vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=t===null||t.memoizedState===null?Ug:Ng,bs=!1,m=s(c,d),bs=!1,lr&&(m=Qm(i,s,c,d)),Zm(t),m}function Zm(t){O.H=oc;var i=zt!==null&&zt.next!==null;if(Ba=0,cn=zt=vt=null,ec=!1,Co=0,cr=null,i)throw Error(a(300));t===null||Sn||(t=t.dependencies,t!==null&&jl(t)&&(Sn=!0))}function Qm(t,i,s,c){vt=t;var d=0;do{if(lr&&(cr=null),Co=0,lr=!1,25<=d)throw Error(a(301));if(d+=1,cn=zt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=Qx,m=i(s,c)}while(lr);return m}function Wx(){var t=O.H,i=t.useState()[0];return i=typeof i.then=="function"?Do(i):i,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(vt.flags|=1024),i}function bf(){var t=tc!==0;return tc=0,t}function Af(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Rf(t){if(ec){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}ec=!1}Ba=0,cn=zt=vt=null,lr=!1,Co=tc=0,cr=null}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?vt.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(zt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var i=cn===null?vt.memoizedState:cn.next;if(i!==null)cn=i,zt=t;else{if(t===null)throw vt.alternate===null?Error(a(467)):Error(a(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},cn===null?vt.memoizedState=cn=t:cn=cn.next=t}return cn}function wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var i=Co;return Co+=1,cr===null&&(cr=[]),t=Xm(cr,t,i),i=vt,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?Ug:Ng),t}function nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===U)return Bn(t)}throw Error(a(438,String(t)))}function Cf(t){var i=null,s=vt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var c=vt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=wf(),vt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),c=0;c<t;c++)s[c]=w;return i.index++,s}function ca(t,i){return typeof i=="function"?i(t):i}function ic(t){var i=un();return Df(i,zt,t)}function Df(t,i,s){var c=t.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var d=t.baseQueue,m=c.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}i.baseQueue=d=m,c.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{i=d.next;var A=E=null,z=null,te=i,de=!1;do{var ve=te.lane&-536870913;if(ve!==te.lane?(Tt&ve)===ve:(Ba&ve)===ve){var se=te.revertLane;if(se===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ve===sr&&(de=!0);else if((Ba&se)===se){te=te.next,se===sr&&(de=!0);continue}else ve={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(A=z=ve,E=m):z=z.next=ve,vt.lanes|=se,Xa|=se;ve=te.action,bs&&s(m,ve),m=te.hasEagerState?te.eagerState:s(m,ve)}else se={lane:ve,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(A=z=se,E=m):z=z.next=se,vt.lanes|=ve,Xa|=ve;te=te.next}while(te!==null&&te!==i);if(z===null?E=m:z.next=A,!ii(m,t.memoizedState)&&(Sn=!0,de&&(s=rr,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=z,c.lastRenderedState=m}return d===null&&(c.lanes=0),[t.memoizedState,c.dispatch]}function Lf(t){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var c=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var E=d=d.next;do m=t(m,E.action),E=E.next;while(E!==d);ii(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,c]}function Jm(t,i,s){var c=vt,d=un(),m=Dt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!ii((zt||d).memoizedState,s);E&&(d.memoizedState=s,Sn=!0),d=d.queue;var A=tg.bind(null,c,d,t);if(Lo(2048,8,A,[t]),d.getSnapshot!==i||E||cn!==null&&cn.memoizedState.tag&1){if(c.flags|=2048,ur(9,ac(),eg.bind(null,c,d,s,i),null),qt===null)throw Error(a(349));m||(Ba&124)!==0||$m(c,i,s)}return s}function $m(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=vt.updateQueue,i===null?(i=wf(),vt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function eg(t,i,s,c){i.value=s,i.getSnapshot=c,ng(i)&&ig(t)}function tg(t,i,s){return s(function(){ng(i)&&ig(t)})}function ng(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ii(t,s)}catch{return!0}}function ig(t){var i=tr(t,2);i!==null&&ci(i,t,2)}function Uf(t){var i=Jn();if(typeof t=="function"){var s=t;if(t=s(),bs){ue(!0);try{s()}finally{ue(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},i}function ag(t,i,s,c){return t.baseState=s,Df(t,zt,typeof c=="function"?c:ca)}function qx(t,i,s,c,d){if(rc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};O.T!==null?s(!0):m.isTransition=!1,c(m),s=i.pending,s===null?(m.next=i.pending=m,sg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function sg(t,i){var s=i.action,c=i.payload,d=t.state;if(i.isTransition){var m=O.T,E={};O.T=E;try{var A=s(d,c),z=O.S;z!==null&&z(E,A),rg(t,i,A)}catch(te){Nf(t,i,te)}finally{O.T=m}}else try{m=s(d,c),rg(t,i,m)}catch(te){Nf(t,i,te)}}function rg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){og(t,i,c)},function(c){return Nf(t,i,c)}):og(t,i,s)}function og(t,i,s){i.status="fulfilled",i.value=s,lg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,sg(t,s)))}function Nf(t,i,s){var c=t.pending;if(t.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=s,lg(i),i=i.next;while(i!==c)}t.action=null}function lg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function cg(t,i){return i}function ug(t,i){if(Dt){var s=qt.formState;if(s!==null){e:{var c=vt;if(Dt){if(an){t:{for(var d=an,m=Hi;d.nodeType!==8;){if(!m){d=null;break t}if(d=wi(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){an=wi(d.nextSibling),c=d.data==="F!";break e}}Ss(c)}c=!1}c&&(i=s[0])}}return s=Jn(),s.memoizedState=s.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:i},s.queue=c,s=Cg.bind(null,vt,c),c.dispatch=s,c=Uf(!1),m=zf.bind(null,vt,!1,c.queue),c=Jn(),d={state:i,dispatch:null,action:t,pending:null},c.queue=d,s=qx.bind(null,vt,d,m,s),d.dispatch=s,c.memoizedState=t,[i,s,!1]}function fg(t){var i=un();return hg(i,zt,t)}function hg(t,i,s){if(i=Df(t,i,cg)[0],t=ic(ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=Do(i)}catch(E){throw E===To?Ql:E}else c=i;i=un();var d=i.queue,m=d.dispatch;return s!==i.memoizedState&&(vt.flags|=2048,ur(9,ac(),Yx.bind(null,d,s),null)),[c,m,t]}function Yx(t,i){t.action=i}function dg(t){var i=un(),s=zt;if(s!==null)return hg(i,s,t);un(),i=i.memoizedState,s=un();var c=s.queue.dispatch;return s.memoizedState=t,[i,c,!1]}function ur(t,i,s,c){return t={tag:t,create:s,deps:c,inst:i,next:null},i=vt.updateQueue,i===null&&(i=wf(),vt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,i.lastEffect=t),t}function ac(){return{destroy:void 0,resource:void 0}}function pg(){return un().memoizedState}function sc(t,i,s,c){var d=Jn();c=c===void 0?null:c,vt.flags|=t,d.memoizedState=ur(1|i,ac(),s,c)}function Lo(t,i,s,c){var d=un();c=c===void 0?null:c;var m=d.memoizedState.inst;zt!==null&&c!==null&&Ef(c,zt.memoizedState.deps)?d.memoizedState=ur(i,m,s,c):(vt.flags|=t,d.memoizedState=ur(1|i,m,s,c))}function mg(t,i){sc(8390656,8,t,i)}function gg(t,i){Lo(2048,8,t,i)}function _g(t,i){return Lo(4,2,t,i)}function vg(t,i){return Lo(4,4,t,i)}function yg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function xg(t,i,s){s=s!=null?s.concat([t]):null,Lo(4,4,yg.bind(null,i,t),s)}function Of(){}function Sg(t,i){var s=un();i=i===void 0?null:i;var c=s.memoizedState;return i!==null&&Ef(i,c[1])?c[0]:(s.memoizedState=[t,i],t)}function Mg(t,i){var s=un();i=i===void 0?null:i;var c=s.memoizedState;if(i!==null&&Ef(i,c[1]))return c[0];if(c=t(),bs){ue(!0);try{t()}finally{ue(!1)}}return s.memoizedState=[c,i],c}function Pf(t,i,s){return s===void 0||(Ba&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=b_(),vt.lanes|=t,Xa|=t,s)}function Eg(t,i,s,c){return ii(s,i)?s:or.current!==null?(t=Pf(t,s,c),ii(t,i)||(Sn=!0),t):(Ba&42)===0?(Sn=!0,t.memoizedState=s):(t=b_(),vt.lanes|=t,Xa|=t,i)}function Tg(t,i,s,c,d){var m=K.p;K.p=m!==0&&8>m?m:8;var E=O.T,A={};O.T=A,zf(t,!1,i,s);try{var z=d(),te=O.S;if(te!==null&&te(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var de=kx(z,c);Uo(t,i,de,li(t))}else Uo(t,i,c,li(t))}catch(ve){Uo(t,i,{then:function(){},status:"rejected",reason:ve},li())}finally{K.p=m,O.T=E}}function jx(){}function If(t,i,s,c){if(t.tag!==5)throw Error(a(476));var d=bg(t).queue;Tg(t,d,i,q,s===null?jx:function(){return Ag(t),s(c)})}function bg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Ag(t){var i=bg(t).next.queue;Uo(t,i,{},li())}function Bf(){return Bn(Zo)}function Rg(){return un().memoizedState}function wg(){return un().memoizedState}function Kx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=li();t=Pa(s);var c=Ia(i,t,s);c!==null&&(ci(c,i,s),Ao(c,i,s)),i={cache:df()},t.payload=i;return}i=i.return}}function Zx(t,i,s){var c=li();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},rc(t)?Dg(i,s):(s=nf(t,i,s,c),s!==null&&(ci(s,t,c),Lg(s,i,c)))}function Cg(t,i,s){var c=li();Uo(t,i,s,c)}function Uo(t,i,s,c){var d={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(rc(t))Dg(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,A=m(E,s);if(d.hasEagerState=!0,d.eagerState=A,ii(A,E))return kl(t,i,d,0),qt===null&&Gl(),!1}catch{}finally{}if(s=nf(t,i,d,c),s!==null)return ci(s,t,c),Lg(s,i,c),!0}return!1}function zf(t,i,s,c){if(c={lane:2,revertLane:gh(),action:c,hasEagerState:!1,eagerState:null,next:null},rc(t)){if(i)throw Error(a(479))}else i=nf(t,s,c,2),i!==null&&ci(i,t,2)}function rc(t){var i=t.alternate;return t===vt||i!==null&&i===vt}function Dg(t,i){lr=ec=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Lg(t,i,s){if((s&4194048)!==0){var c=i.lanes;c&=t.pendingLanes,s|=c,i.lanes=s,He(t,s)}}var oc={readContext:Bn,use:nc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},Ug={readContext:Bn,use:nc,useCallback:function(t,i){return Jn().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:mg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,sc(4194308,4,yg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return sc(4194308,4,t,i)},useInsertionEffect:function(t,i){sc(4,2,t,i)},useMemo:function(t,i){var s=Jn();i=i===void 0?null:i;var c=t();if(bs){ue(!0);try{t()}finally{ue(!1)}}return s.memoizedState=[c,i],c},useReducer:function(t,i,s){var c=Jn();if(s!==void 0){var d=s(i);if(bs){ue(!0);try{s(i)}finally{ue(!1)}}}else d=i;return c.memoizedState=c.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},c.queue=t,t=t.dispatch=Zx.bind(null,vt,t),[c.memoizedState,t]},useRef:function(t){var i=Jn();return t={current:t},i.memoizedState=t},useState:function(t){t=Uf(t);var i=t.queue,s=Cg.bind(null,vt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Of,useDeferredValue:function(t,i){var s=Jn();return Pf(s,t,i)},useTransition:function(){var t=Uf(!1);return t=Tg.bind(null,vt,t.queue,!0,!1),Jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var c=vt,d=Jn();if(Dt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qt===null)throw Error(a(349));(Tt&124)!==0||$m(c,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,mg(tg.bind(null,c,m,t),[t]),c.flags|=2048,ur(9,ac(),eg.bind(null,c,m,s,i),null),s},useId:function(){var t=Jn(),i=qt.identifierPrefix;if(Dt){var s=ra,c=sa;s=(c&~(1<<32-Pe(c)-1)).toString(32)+s,i="«"+i+"R"+s,s=tc++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Xx++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Bf,useFormState:ug,useActionState:ug,useOptimistic:function(t){var i=Jn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=zf.bind(null,vt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Cf,useCacheRefresh:function(){return Jn().memoizedState=Kx.bind(null,vt)}},Ng={readContext:Bn,use:nc,useCallback:Sg,useContext:Bn,useEffect:gg,useImperativeHandle:xg,useInsertionEffect:_g,useLayoutEffect:vg,useMemo:Mg,useReducer:ic,useRef:pg,useState:function(){return ic(ca)},useDebugValue:Of,useDeferredValue:function(t,i){var s=un();return Eg(s,zt.memoizedState,t,i)},useTransition:function(){var t=ic(ca)[0],i=un().memoizedState;return[typeof t=="boolean"?t:Do(t),i]},useSyncExternalStore:Jm,useId:Rg,useHostTransitionStatus:Bf,useFormState:fg,useActionState:fg,useOptimistic:function(t,i){var s=un();return ag(s,zt,t,i)},useMemoCache:Cf,useCacheRefresh:wg},Qx={readContext:Bn,use:nc,useCallback:Sg,useContext:Bn,useEffect:gg,useImperativeHandle:xg,useInsertionEffect:_g,useLayoutEffect:vg,useMemo:Mg,useReducer:Lf,useRef:pg,useState:function(){return Lf(ca)},useDebugValue:Of,useDeferredValue:function(t,i){var s=un();return zt===null?Pf(s,t,i):Eg(s,zt.memoizedState,t,i)},useTransition:function(){var t=Lf(ca)[0],i=un().memoizedState;return[typeof t=="boolean"?t:Do(t),i]},useSyncExternalStore:Jm,useId:Rg,useHostTransitionStatus:Bf,useFormState:dg,useActionState:dg,useOptimistic:function(t,i){var s=un();return zt!==null?ag(s,zt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:wg},fr=null,No=0;function lc(t){var i=No;return No+=1,fr===null&&(fr=[]),Xm(fr,t,i)}function Oo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function cc(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Og(t){var i=t._init;return i(t._payload)}function Pg(t){function i(Z,X){if(t){var $=Z.deletions;$===null?(Z.deletions=[X],Z.flags|=16):$.push(X)}}function s(Z,X){if(!t)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function c(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function d(Z,X){return Z=aa(Z,X),Z.index=0,Z.sibling=null,Z}function m(Z,X,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<X?(Z.flags|=67108866,X):$):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,$,me){return X===null||X.tag!==6?(X=sf($,Z.mode,me),X.return=Z,X):(X=d(X,$),X.return=Z,X)}function z(Z,X,$,me){var Fe=$.type;return Fe===M?de(Z,X,$.props.children,me,$.key):X!==null&&(X.elementType===Fe||typeof Fe=="object"&&Fe!==null&&Fe.$$typeof===V&&Og(Fe)===X.type)?(X=d(X,$.props),Oo(X,$),X.return=Z,X):(X=Wl($.type,$.key,$.props,null,Z.mode,me),Oo(X,$),X.return=Z,X)}function te(Z,X,$,me){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=rf($,Z.mode,me),X.return=Z,X):(X=d(X,$.children||[]),X.return=Z,X)}function de(Z,X,$,me,Fe){return X===null||X.tag!==7?(X=_s($,Z.mode,me,Fe),X.return=Z,X):(X=d(X,$),X.return=Z,X)}function ve(Z,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=sf(""+X,Z.mode,$),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return $=Wl(X.type,X.key,X.props,null,Z.mode,$),Oo($,X),$.return=Z,$;case x:return X=rf(X,Z.mode,$),X.return=Z,X;case V:var me=X._init;return X=me(X._payload),ve(Z,X,$)}if(ie(X)||Y(X))return X=_s(X,Z.mode,$,null),X.return=Z,X;if(typeof X.then=="function")return ve(Z,lc(X),$);if(X.$$typeof===U)return ve(Z,Kl(Z,X),$);cc(Z,X)}return null}function se(Z,X,$,me){var Fe=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Fe!==null?null:A(Z,X,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===Fe?z(Z,X,$,me):null;case x:return $.key===Fe?te(Z,X,$,me):null;case V:return Fe=$._init,$=Fe($._payload),se(Z,X,$,me)}if(ie($)||Y($))return Fe!==null?null:de(Z,X,$,me,null);if(typeof $.then=="function")return se(Z,X,lc($),me);if($.$$typeof===U)return se(Z,X,Kl(Z,$),me);cc(Z,$)}return null}function oe(Z,X,$,me,Fe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Z=Z.get($)||null,A(X,Z,""+me,Fe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case v:return Z=Z.get(me.key===null?$:me.key)||null,z(X,Z,me,Fe);case x:return Z=Z.get(me.key===null?$:me.key)||null,te(X,Z,me,Fe);case V:var yt=me._init;return me=yt(me._payload),oe(Z,X,$,me,Fe)}if(ie(me)||Y(me))return Z=Z.get($)||null,de(X,Z,me,Fe,null);if(typeof me.then=="function")return oe(Z,X,$,lc(me),Fe);if(me.$$typeof===U)return oe(Z,X,$,Kl(X,me),Fe);cc(X,me)}return null}function it(Z,X,$,me){for(var Fe=null,yt=null,je=X,nt=X=0,En=null;je!==null&&nt<$.length;nt++){je.index>nt?(En=je,je=null):En=je.sibling;var wt=se(Z,je,$[nt],me);if(wt===null){je===null&&(je=En);break}t&&je&&wt.alternate===null&&i(Z,je),X=m(wt,X,nt),yt===null?Fe=wt:yt.sibling=wt,yt=wt,je=En}if(nt===$.length)return s(Z,je),Dt&&ys(Z,nt),Fe;if(je===null){for(;nt<$.length;nt++)je=ve(Z,$[nt],me),je!==null&&(X=m(je,X,nt),yt===null?Fe=je:yt.sibling=je,yt=je);return Dt&&ys(Z,nt),Fe}for(je=c(je);nt<$.length;nt++)En=oe(je,Z,nt,$[nt],me),En!==null&&(t&&En.alternate!==null&&je.delete(En.key===null?nt:En.key),X=m(En,X,nt),yt===null?Fe=En:yt.sibling=En,yt=En);return t&&je.forEach(function($a){return i(Z,$a)}),Dt&&ys(Z,nt),Fe}function et(Z,X,$,me){if($==null)throw Error(a(151));for(var Fe=null,yt=null,je=X,nt=X=0,En=null,wt=$.next();je!==null&&!wt.done;nt++,wt=$.next()){je.index>nt?(En=je,je=null):En=je.sibling;var $a=se(Z,je,wt.value,me);if($a===null){je===null&&(je=En);break}t&&je&&$a.alternate===null&&i(Z,je),X=m($a,X,nt),yt===null?Fe=$a:yt.sibling=$a,yt=$a,je=En}if(wt.done)return s(Z,je),Dt&&ys(Z,nt),Fe;if(je===null){for(;!wt.done;nt++,wt=$.next())wt=ve(Z,wt.value,me),wt!==null&&(X=m(wt,X,nt),yt===null?Fe=wt:yt.sibling=wt,yt=wt);return Dt&&ys(Z,nt),Fe}for(je=c(je);!wt.done;nt++,wt=$.next())wt=oe(je,Z,nt,wt.value,me),wt!==null&&(t&&wt.alternate!==null&&je.delete(wt.key===null?nt:wt.key),X=m(wt,X,nt),yt===null?Fe=wt:yt.sibling=wt,yt=wt);return t&&je.forEach(function(JS){return i(Z,JS)}),Dt&&ys(Z,nt),Fe}function Ht(Z,X,$,me){if(typeof $=="object"&&$!==null&&$.type===M&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:e:{for(var Fe=$.key;X!==null;){if(X.key===Fe){if(Fe=$.type,Fe===M){if(X.tag===7){s(Z,X.sibling),me=d(X,$.props.children),me.return=Z,Z=me;break e}}else if(X.elementType===Fe||typeof Fe=="object"&&Fe!==null&&Fe.$$typeof===V&&Og(Fe)===X.type){s(Z,X.sibling),me=d(X,$.props),Oo(me,$),me.return=Z,Z=me;break e}s(Z,X);break}else i(Z,X);X=X.sibling}$.type===M?(me=_s($.props.children,Z.mode,me,$.key),me.return=Z,Z=me):(me=Wl($.type,$.key,$.props,null,Z.mode,me),Oo(me,$),me.return=Z,Z=me)}return E(Z);case x:e:{for(Fe=$.key;X!==null;){if(X.key===Fe)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){s(Z,X.sibling),me=d(X,$.children||[]),me.return=Z,Z=me;break e}else{s(Z,X);break}else i(Z,X);X=X.sibling}me=rf($,Z.mode,me),me.return=Z,Z=me}return E(Z);case V:return Fe=$._init,$=Fe($._payload),Ht(Z,X,$,me)}if(ie($))return it(Z,X,$,me);if(Y($)){if(Fe=Y($),typeof Fe!="function")throw Error(a(150));return $=Fe.call($),et(Z,X,$,me)}if(typeof $.then=="function")return Ht(Z,X,lc($),me);if($.$$typeof===U)return Ht(Z,X,Kl(Z,$),me);cc(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(s(Z,X.sibling),me=d(X,$),me.return=Z,Z=me):(s(Z,X),me=sf($,Z.mode,me),me.return=Z,Z=me),E(Z)):s(Z,X)}return function(Z,X,$,me){try{No=0;var Fe=Ht(Z,X,$,me);return fr=null,Fe}catch(je){if(je===To||je===Ql)throw je;var yt=ai(29,je,null,Z.mode);return yt.lanes=me,yt.return=Z,yt}finally{}}}var hr=Pg(!0),Ig=Pg(!1),vi=J(null),Vi=null;function za(t){var i=t.alternate;ge(mn,mn.current&1),ge(vi,t),Vi===null&&(i===null||or.current!==null||i.memoizedState!==null)&&(Vi=t)}function Bg(t){if(t.tag===22){if(ge(mn,mn.current),ge(vi,t),Vi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Vi=t)}}else Fa()}function Fa(){ge(mn,mn.current),ge(vi,vi.current)}function ua(t){he(vi),Vi===t&&(Vi=null),he(mn)}var mn=J(0);function uc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||wh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Ff(t,i,s,c){i=t.memoizedState,s=s(c,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Hf={enqueueSetState:function(t,i,s){t=t._reactInternals;var c=li(),d=Pa(c);d.payload=i,s!=null&&(d.callback=s),i=Ia(t,d,c),i!==null&&(ci(i,t,c),Ao(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var c=li(),d=Pa(c);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=Ia(t,d,c),i!==null&&(ci(i,t,c),Ao(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=li(),c=Pa(s);c.tag=2,i!=null&&(c.callback=i),i=Ia(t,c,s),i!==null&&(ci(i,t,s),Ao(i,t,s))}};function zg(t,i,s,c,d,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!go(s,c)||!go(d,m):!0}function Fg(t,i,s,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==t&&Hf.enqueueReplaceState(i,i.state,null)}function As(t,i){var s=i;if("ref"in i){s={};for(var c in i)c!=="ref"&&(s[c]=i[c])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var d in t)s[d]===void 0&&(s[d]=t[d])}return s}var fc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Hg(t){fc(t)}function Vg(t){console.error(t)}function Gg(t){fc(t)}function hc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function kg(t,i,s){try{var c=t.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Vf(t,i,s){return s=Pa(s),s.tag=3,s.payload={element:null},s.callback=function(){hc(t,i)},s}function Xg(t){return t=Pa(t),t.tag=3,t}function Wg(t,i,s,c){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;t.payload=function(){return d(m)},t.callback=function(){kg(i,s,c)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){kg(i,s,c),typeof d!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function Jx(t,i,s,c,d){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=s.alternate,i!==null&&So(i,s,d,!0),s=vi.current,s!==null){switch(s.tag){case 13:return Vi===null?fh():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,c===gf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([c]):i.add(c),dh(t,c,d)),!1;case 22:return s.flags|=65536,c===gf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([c]):s.add(c)),dh(t,c,d)),!1}throw Error(a(435,s.tag))}return dh(t,c,d),fh(),!1}if(Dt)return i=vi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,c!==cf&&(t=Error(a(422),{cause:c}),xo(pi(t,s)))):(c!==cf&&(i=Error(a(423),{cause:c}),xo(pi(i,s))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,c=pi(c,s),d=Vf(t.stateNode,c,d),yf(t,d),sn!==4&&(sn=2)),!1;var m=Error(a(520),{cause:c});if(m=pi(m,s),Vo===null?Vo=[m]:Vo.push(m),sn!==4&&(sn=2),i===null)return!0;c=pi(c,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=d&-d,s.lanes|=t,t=Vf(s.stateNode,c,t),yf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wa===null||!Wa.has(m))))return s.flags|=65536,d&=-d,s.lanes|=d,d=Xg(d),Wg(d,t,s,c),yf(s,d),!1}s=s.return}while(s!==null);return!1}var qg=Error(a(461)),Sn=!1;function Dn(t,i,s,c){i.child=t===null?Ig(i,null,s,c):hr(i,t.child,s,c)}function Yg(t,i,s,c,d){s=s.render;var m=i.ref;if("ref"in c){var E={};for(var A in c)A!=="ref"&&(E[A]=c[A])}else E=c;return Es(i),c=Tf(t,i,s,E,m,d),A=bf(),t!==null&&!Sn?(Af(t,i,d),fa(t,i,d)):(Dt&&A&&of(i),i.flags|=1,Dn(t,i,c,d),i.child)}function jg(t,i,s,c,d){if(t===null){var m=s.type;return typeof m=="function"&&!af(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Kg(t,i,m,c,d)):(t=Wl(s.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Kf(t,d)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(E,c)&&t.ref===i.ref)return fa(t,i,d)}return i.flags|=1,t=aa(m,c),t.ref=i.ref,t.return=i,i.child=t}function Kg(t,i,s,c,d){if(t!==null){var m=t.memoizedProps;if(go(m,c)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=c=m,Kf(t,d))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,fa(t,i,d)}return Gf(t,i,s,c,d)}function Zg(t,i,s){var c=i.pendingProps,d=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden"){if((i.flags&128)!==0){if(c=m!==null?m.baseLanes|s:s,t!==null){for(d=i.child=t.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;i.childLanes=m&~c}else i.childLanes=0,i.child=null;return Qg(t,i,c,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(i,m!==null?m.cachePool:null),m!==null?Km(i,m):Sf(),Bg(i);else return i.lanes=i.childLanes=536870912,Qg(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Zl(i,m.cachePool),Km(i,m),Fa(),i.memoizedState=null):(t!==null&&Zl(i,null),Sf(),Fa());return Dn(t,i,d,s),i.child}function Qg(t,i,s,c){var d=mf();return d=d===null?null:{parent:pn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&Zl(i,null),Sf(),Bg(i),t!==null&&So(t,i,c,!0),null}function dc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Gf(t,i,s,c,d){return Es(i),s=Tf(t,i,s,c,void 0,d),c=bf(),t!==null&&!Sn?(Af(t,i,d),fa(t,i,d)):(Dt&&c&&of(i),i.flags|=1,Dn(t,i,s,d),i.child)}function Jg(t,i,s,c,d,m){return Es(i),i.updateQueue=null,s=Qm(i,c,s,d),Zm(t),c=bf(),t!==null&&!Sn?(Af(t,i,m),fa(t,i,m)):(Dt&&c&&of(i),i.flags|=1,Dn(t,i,s,m),i.child)}function $g(t,i,s,c,d){if(Es(i),i.stateNode===null){var m=nr,E=s.contextType;typeof E=="object"&&E!==null&&(m=Bn(E)),m=new s(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Hf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},_f(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Bn(E):nr,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Ff(i,s,E,c),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Hf.enqueueReplaceState(m,m.state,null),wo(i,c,m,d),Ro(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(t===null){m=i.stateNode;var A=i.memoizedProps,z=As(s,A);m.props=z;var te=m.context,de=s.contextType;E=nr,typeof de=="object"&&de!==null&&(E=Bn(de));var ve=s.getDerivedStateFromProps;de=typeof ve=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,de||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||te!==E)&&Fg(i,m,c,E),Oa=!1;var se=i.memoizedState;m.state=se,wo(i,c,m,d),Ro(),te=i.memoizedState,A||se!==te||Oa?(typeof ve=="function"&&(Ff(i,s,ve,c),te=i.memoizedState),(z=Oa||zg(i,s,z,c,se,te,E))?(de||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=te),m.props=c,m.state=te,m.context=E,c=z):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,vf(t,i),E=i.memoizedProps,de=As(s,E),m.props=de,ve=i.pendingProps,se=m.context,te=s.contextType,z=nr,typeof te=="object"&&te!==null&&(z=Bn(te)),A=s.getDerivedStateFromProps,(te=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==ve||se!==z)&&Fg(i,m,c,z),Oa=!1,se=i.memoizedState,m.state=se,wo(i,c,m,d),Ro();var oe=i.memoizedState;E!==ve||se!==oe||Oa||t!==null&&t.dependencies!==null&&jl(t.dependencies)?(typeof A=="function"&&(Ff(i,s,A,c),oe=i.memoizedState),(de=Oa||zg(i,s,de,c,se,oe,z)||t!==null&&t.dependencies!==null&&jl(t.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,oe,z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,oe,z)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),m.props=c,m.state=oe,m.context=z,c=de):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),c=!1)}return m=c,dc(t,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&c?(i.child=hr(i,t.child,null,d),i.child=hr(i,null,s,d)):Dn(t,i,s,d),i.memoizedState=m.state,t=i.child):t=fa(t,i,d),t}function e_(t,i,s,c){return yo(),i.flags|=256,Dn(t,i,s,c),i.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:Vm()}}function Wf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=yi),t}function t_(t,i,s){var c=i.pendingProps,d=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),E&&(d=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Dt){if(d?za(i):Fa(),Dt){var A=an,z;if(z=A){e:{for(z=A,A=Hi;z.nodeType!==8;){if(!A){A=null;break e}if(z=wi(z.nextSibling),z===null){A=null;break e}}A=z}A!==null?(i.memoizedState={dehydrated:A,treeContext:vs!==null?{id:sa,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},z=ai(18,null,null,0),z.stateNode=A,z.return=i,i.child=z,Wn=i,an=null,z=!0):z=!1}z||Ss(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return wh(A)?i.lanes=32:i.lanes=536870912,null;ua(i)}return A=c.children,c=c.fallback,d?(Fa(),d=i.mode,A=pc({mode:"hidden",children:A},d),c=_s(c,d,s,null),A.return=i,c.return=i,A.sibling=c,i.child=A,d=i.child,d.memoizedState=Xf(s),d.childLanes=Wf(t,E,s),i.memoizedState=kf,c):(za(i),qf(i,A))}if(z=t.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(m)i.flags&256?(za(i),i.flags&=-257,i=Yf(t,i,s)):i.memoizedState!==null?(Fa(),i.child=t.child,i.flags|=128,i=null):(Fa(),d=c.fallback,A=i.mode,c=pc({mode:"visible",children:c.children},A),d=_s(d,A,s,null),d.flags|=2,c.return=i,d.return=i,c.sibling=d,i.child=c,hr(i,t.child,null,s),c=i.child,c.memoizedState=Xf(s),c.childLanes=Wf(t,E,s),i.memoizedState=kf,i=d);else if(za(i),wh(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var te=E.dgst;E=te,c=Error(a(419)),c.stack="",c.digest=E,xo({value:c,source:null,stack:null}),i=Yf(t,i,s)}else if(Sn||So(t,i,s,!1),E=(s&t.childLanes)!==0,Sn||E){if(E=qt,E!==null&&(c=s&-s,c=(c&42)!==0?1:st(c),c=(c&(E.suspendedLanes|s))!==0?0:c,c!==0&&c!==z.retryLane))throw z.retryLane=c,tr(t,c),ci(E,t,c),qg;A.data==="$?"||fh(),i=Yf(t,i,s)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=z.treeContext,an=wi(A.nextSibling),Wn=i,Dt=!0,xs=null,Hi=!1,t!==null&&(gi[_i++]=sa,gi[_i++]=ra,gi[_i++]=vs,sa=t.id,ra=t.overflow,vs=i),i=qf(i,c.children),i.flags|=4096);return i}return d?(Fa(),d=c.fallback,A=i.mode,z=t.child,te=z.sibling,c=aa(z,{mode:"hidden",children:c.children}),c.subtreeFlags=z.subtreeFlags&65011712,te!==null?d=aa(te,d):(d=_s(d,A,s,null),d.flags|=2),d.return=i,c.return=i,c.sibling=d,i.child=c,c=d,d=i.child,A=t.child.memoizedState,A===null?A=Xf(s):(z=A.cachePool,z!==null?(te=pn._currentValue,z=z.parent!==te?{parent:te,pool:te}:z):z=Vm(),A={baseLanes:A.baseLanes|s,cachePool:z}),d.memoizedState=A,d.childLanes=Wf(t,E,s),i.memoizedState=kf,c):(za(i),s=t.child,t=s.sibling,s=aa(s,{mode:"visible",children:c.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function qf(t,i){return i=pc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function pc(t,i){return t=ai(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Yf(t,i,s){return hr(i,t.child,null,s),t=qf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function n_(t,i,s){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),ff(t.return,i,s)}function jf(t,i,s,c,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=s,m.tailMode=d)}function i_(t,i,s){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Dn(t,i,c.children,s),c=mn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n_(t,s,i);else if(t.tag===19)n_(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}switch(ge(mn,c),d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&uc(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),jf(i,!1,d,s,m);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&uc(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}jf(i,!0,s,null,m);break;case"together":jf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Xa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(So(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=aa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=aa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Kf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&jl(t)))}function $x(t,i,s){switch(i.tag){case 3:Te(i,i.stateNode.containerInfo),Na(i,pn,t.memoizedState.cache),yo();break;case 27:case 5:ke(i);break;case 4:Te(i,i.stateNode.containerInfo);break;case 10:Na(i,i.type,i.memoizedProps.value);break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(za(i),i.flags|=128,null):(s&i.child.childLanes)!==0?t_(t,i,s):(za(i),t=fa(t,i,s),t!==null?t.sibling:null);za(i);break;case 19:var d=(t.flags&128)!==0;if(c=(s&i.childLanes)!==0,c||(So(t,i,s,!1),c=(s&i.childLanes)!==0),d){if(c)return i_(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ge(mn,mn.current),c)break;return null;case 22:case 23:return i.lanes=0,Zg(t,i,s);case 24:Na(i,pn,t.memoizedState.cache)}return fa(t,i,s)}function a_(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!Kf(t,s)&&(i.flags&128)===0)return Sn=!1,$x(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Dt&&(i.flags&1048576)!==0&&Om(i,Yl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var c=i.elementType,d=c._init;if(c=d(c._payload),i.type=c,typeof c=="function")af(c)?(t=As(c,t),i.tag=1,i=$g(null,i,c,t,s)):(i.tag=0,i=Gf(null,i,c,t,s));else{if(c!=null){if(d=c.$$typeof,d===D){i.tag=11,i=Yg(null,i,c,t,s);break e}else if(d===B){i.tag=14,i=jg(null,i,c,t,s);break e}}throw i=re(c)||c,Error(a(306,i,""))}}return i;case 0:return Gf(t,i,i.type,i.pendingProps,s);case 1:return c=i.type,d=As(c,i.pendingProps),$g(t,i,c,d,s);case 3:e:{if(Te(i,i.stateNode.containerInfo),t===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;d=m.element,vf(t,i),wo(i,c,null,s);var E=i.memoizedState;if(c=E.cache,Na(i,pn,c),c!==m.cache&&hf(i,[pn],s,!0),Ro(),c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=e_(t,i,c,s);break e}else if(c!==d){d=pi(Error(a(424)),i),xo(d),i=e_(t,i,c,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(an=wi(t.firstChild),Wn=i,Dt=!0,xs=null,Hi=!0,s=Ig(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(yo(),c===d){i=fa(t,i,s);break e}Dn(t,i,c,s)}i=i.child}return i;case 26:return dc(t,i),t===null?(s=l0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Dt||(s=i.type,t=i.pendingProps,c=wc(ee.current).createElement(s),c[dn]=i,c[tn]=t,Un(c,s,t),ln(c),i.stateNode=c):i.memoizedState=l0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ke(i),t===null&&Dt&&(c=i.stateNode=s0(i.type,i.pendingProps,ee.current),Wn=i,Hi=!0,d=an,ja(i.type)?(Ch=d,an=wi(c.firstChild)):an=d),Dn(t,i,i.pendingProps.children,s),dc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Dt&&((d=c=an)&&(c=RS(c,i.type,i.pendingProps,Hi),c!==null?(i.stateNode=c,Wn=i,an=wi(c.firstChild),Hi=!1,d=!0):d=!1),d||Ss(i)),ke(i),d=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,c=m.children,bh(d,m)?c=null:E!==null&&bh(d,E)&&(i.flags|=32),i.memoizedState!==null&&(d=Tf(t,i,Wx,null,null,s),Zo._currentValue=d),dc(t,i),Dn(t,i,c,s),i.child;case 6:return t===null&&Dt&&((t=s=an)&&(s=wS(s,i.pendingProps,Hi),s!==null?(i.stateNode=s,Wn=i,an=null,t=!0):t=!1),t||Ss(i)),null;case 13:return t_(t,i,s);case 4:return Te(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=hr(i,null,c,s):Dn(t,i,c,s),i.child;case 11:return Yg(t,i,i.type,i.pendingProps,s);case 7:return Dn(t,i,i.pendingProps,s),i.child;case 8:return Dn(t,i,i.pendingProps.children,s),i.child;case 12:return Dn(t,i,i.pendingProps.children,s),i.child;case 10:return c=i.pendingProps,Na(i,i.type,c.value),Dn(t,i,c.children,s),i.child;case 9:return d=i.type._context,c=i.pendingProps.children,Es(i),d=Bn(d),c=c(d),i.flags|=1,Dn(t,i,c,s),i.child;case 14:return jg(t,i,i.type,i.pendingProps,s);case 15:return Kg(t,i,i.type,i.pendingProps,s);case 19:return i_(t,i,s);case 31:return c=i.pendingProps,s=i.mode,c={mode:c.mode,children:c.children},t===null?(s=pc(c,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=aa(t.child,c),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Zg(t,i,s);case 24:return Es(i),c=Bn(pn),t===null?(d=mf(),d===null&&(d=qt,m=df(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=s),d=m),i.memoizedState={parent:c,cache:d},_f(i),Na(i,pn,d)):((t.lanes&s)!==0&&(vf(t,i),wo(i,null,null,s),Ro()),d=t.memoizedState,m=i.memoizedState,d.parent!==c?(d={parent:c,cache:c},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),Na(i,pn,c)):(c=m.cache,Na(i,pn,c),c!==d.cache&&hf(i,[pn],s,!0))),Dn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ha(t){t.flags|=4}function s_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!d0(i)){if(i=vi.current,i!==null&&((Tt&4194048)===Tt?Vi!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||i!==Vi))throw bo=gf,Gm;t.flags|=8192}}function mc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?be():536870912,t.lanes|=i,gr|=i)}function Po(t,i){if(!Dt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=s,i}function eS(t,i,s){var c=i.pendingProps;switch(lf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return s=i.stateNode,c=null,t!==null&&(c=t.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),la(pn),Ye(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(vo(i)?ha(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bm())),Jt(i),null;case 26:return s=i.memoizedState,t===null?(ha(i),s!==null?(Jt(i),s_(i,s)):(Jt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(ha(i),Jt(i),s_(i,s)):(Jt(i),i.flags&=-16777217):(t.memoizedProps!==c&&ha(i),Jt(i),i.flags&=-16777217),null;case 27:ft(i),s=ee.current;var d=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==c&&ha(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}t=Ae.current,vo(i)?Pm(i):(t=s0(d,c,s),i.stateNode=t,ha(i))}return Jt(i),null;case 5:if(ft(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==c&&ha(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}if(t=Ae.current,vo(i))Pm(i);else{switch(d=wc(ee.current),t){case 1:t=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=d.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?t.multiple=!0:c.size&&(t.size=c.size);break;default:t=typeof c.is=="string"?d.createElement(s,{is:c.is}):d.createElement(s)}}t[dn]=i,t[tn]=c;e:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)t.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break e;for(;d.sibling===null;){if(d.return===null||d.return===i)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=t;e:switch(Un(t,s,c),s){case"button":case"input":case"select":case"textarea":t=!!c.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ha(i)}}return Jt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==c&&ha(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(t=ee.current,vo(i)){if(t=i.stateNode,s=i.memoizedProps,c=null,d=Wn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}t[dn]=i,t=!!(t.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||J_(t.nodeValue,s)),t||Ss(i)}else t=wc(t).createTextNode(c),t[dn]=i,i.stateNode=t}return Jt(i),null;case 13:if(c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=vo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[dn]=i}else yo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),d=!1}else d=Bm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(ua(i),i):(ua(i),null)}if(ua(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=c!==null,t=t!==null&&t.memoizedState!==null,s){c=i.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),mc(i,i.updateQueue),Jt(i),null;case 4:return Ye(),t===null&&xh(i.stateNode.containerInfo),Jt(i),null;case 10:return la(i.type),Jt(i),null;case 19:if(he(mn),d=i.memoizedState,d===null)return Jt(i),null;if(c=(i.flags&128)!==0,m=d.rendering,m===null)if(c)Po(d,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=uc(t),m!==null){for(i.flags|=128,Po(d,!1),t=m.updateQueue,i.updateQueue=t,mc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Nm(s,t),s=s.sibling;return ge(mn,mn.current&1|2),i.child}t=t.sibling}d.tail!==null&&Oe()>vc&&(i.flags|=128,c=!0,Po(d,!1),i.lanes=4194304)}else{if(!c)if(t=uc(m),t!==null){if(i.flags|=128,c=!0,t=t.updateQueue,i.updateQueue=t,mc(i,t),Po(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Dt)return Jt(i),null}else 2*Oe()-d.renderingStartTime>vc&&s!==536870912&&(i.flags|=128,c=!0,Po(d,!1),i.lanes=4194304);d.isBackwards?(m.sibling=i.child,i.child=m):(t=d.last,t!==null?t.sibling=m:i.child=m,d.last=m)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=Oe(),i.sibling=null,t=mn.current,ge(mn,c?t&1|2:t&1),i):(Jt(i),null);case 22:case 23:return ua(i),Mf(),c=i.memoizedState!==null,t!==null?t.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(s&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),s=i.updateQueue,s!==null&&mc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048),t!==null&&he(Ts),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),la(pn),Jt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function tS(t,i){switch(lf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return la(pn),Ye(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ft(i),null;case 13:if(ua(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));yo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return he(mn),null;case 4:return Ye(),null;case 10:return la(i.type),null;case 22:case 23:return ua(i),Mf(),t!==null&&he(Ts),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return la(pn),null;case 25:return null;default:return null}}function r_(t,i){switch(lf(i),i.tag){case 3:la(pn),Ye();break;case 26:case 27:case 5:ft(i);break;case 4:Ye();break;case 13:ua(i);break;case 19:he(mn);break;case 10:la(i.type);break;case 22:case 23:ua(i),Mf(),t!==null&&he(Ts);break;case 24:la(pn)}}function Io(t,i){try{var s=i.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var d=c.next;s=d;do{if((s.tag&t)===t){c=void 0;var m=s.create,E=s.inst;c=m(),E.destroy=c}s=s.next}while(s!==d)}}catch(A){Xt(i,i.return,A)}}function Ha(t,i,s){try{var c=i.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&t)===t){var E=c.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,d=i;var z=s,te=A;try{te()}catch(de){Xt(d,z,de)}}}c=c.next}while(c!==m)}}catch(de){Xt(i,i.return,de)}}function o_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{jm(i,s)}catch(c){Xt(t,t.return,c)}}}function l_(t,i,s){s.props=As(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(c){Xt(t,i,c)}}function Bo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var c=t.stateNode;break;case 30:c=t.stateNode;break;default:c=t.stateNode}typeof s=="function"?t.refCleanup=s(c):s.current=c}}catch(d){Xt(t,i,d)}}function Gi(t,i){var s=t.ref,c=t.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(d){Xt(t,i,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){Xt(t,i,d)}else s.current=null}function c_(t){var i=t.type,s=t.memoizedProps,c=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(d){Xt(t,t.return,d)}}function Zf(t,i,s){try{var c=t.stateNode;MS(c,t.type,s,i),c[tn]=i}catch(d){Xt(t,t.return,d)}}function u_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,i,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Rc));else if(c!==4&&(c===27&&ja(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Jf(t,i,s),t=t.sibling;t!==null;)Jf(t,i,s),t=t.sibling}function gc(t,i,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(c!==4&&(c===27&&ja(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(gc(t,i,s),t=t.sibling;t!==null;)gc(t,i,s),t=t.sibling}function f_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var c=t.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Un(i,c,s),i[dn]=t,i[tn]=s}catch(m){Xt(t,t.return,m)}}var da=!1,on=!1,$f=!1,h_=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function nS(t,i){if(t=t.containerInfo,Eh=Oc,t=Em(t),Zu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,A=-1,z=-1,te=0,de=0,ve=t,se=null;t:for(;;){for(var oe;ve!==s||d!==0&&ve.nodeType!==3||(A=E+d),ve!==m||c!==0&&ve.nodeType!==3||(z=E+c),ve.nodeType===3&&(E+=ve.nodeValue.length),(oe=ve.firstChild)!==null;)se=ve,ve=oe;for(;;){if(ve===t)break t;if(se===s&&++te===d&&(A=E),se===m&&++de===c&&(z=E),(oe=ve.nextSibling)!==null)break;ve=se,se=ve.parentNode}ve=oe}s=A===-1||z===-1?null:{start:A,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Th={focusedElem:t,selectionRange:s},Oc=!1,Mn=i;Mn!==null;)if(i=Mn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Mn=t;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,d=m.memoizedProps,m=m.memoizedState,c=s.stateNode;try{var it=As(s.type,d,s.elementType===s.type);t=c.getSnapshotBeforeUpdate(it,m),c.__reactInternalSnapshotBeforeUpdate=t}catch(et){Xt(s,s.return,et)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Rh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Mn=t;break}Mn=i.return}}function d_(t,i,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Va(t,s),c&4&&Io(5,s);break;case 1:if(Va(t,s),c&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){Xt(s,s.return,E)}else{var d=As(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(d,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Xt(s,s.return,E)}}c&64&&o_(s),c&512&&Bo(s,s.return);break;case 3:if(Va(t,s),c&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{jm(t,i)}catch(E){Xt(s,s.return,E)}}break;case 27:i===null&&c&4&&f_(s);case 26:case 5:Va(t,s),i===null&&c&4&&c_(s),c&512&&Bo(s,s.return);break;case 12:Va(t,s);break;case 13:Va(t,s),c&4&&g_(t,s),c&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=fS.bind(null,s),CS(t,s))));break;case 22:if(c=s.memoizedState!==null||da,!c){i=i!==null&&i.memoizedState!==null||on,d=da;var m=on;da=c,(on=i)&&!m?Ga(t,s,(s.subtreeFlags&8772)!==0):Va(t,s),da=d,on=m}break;case 30:break;default:Va(t,s)}}function p_(t){var i=t.alternate;i!==null&&(t.alternate=null,p_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ys(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,$n=!1;function pa(t,i,s){for(s=s.child;s!==null;)m_(t,i,s),s=s.sibling}function m_(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(fe,s)}catch{}switch(s.tag){case 26:on||Gi(s,i),pa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||Gi(s,i);var c=Kt,d=$n;ja(s.type)&&(Kt=s.stateNode,$n=!1),pa(t,i,s),qo(s.stateNode),Kt=c,$n=d;break;case 5:on||Gi(s,i);case 6:if(c=Kt,d=$n,Kt=null,pa(t,i,s),Kt=c,$n=d,Kt!==null)if($n)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(s.stateNode)}catch(m){Xt(s,i,m)}else try{Kt.removeChild(s.stateNode)}catch(m){Xt(s,i,m)}break;case 18:Kt!==null&&($n?(t=Kt,i0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),el(t)):i0(Kt,s.stateNode));break;case 4:c=Kt,d=$n,Kt=s.stateNode.containerInfo,$n=!0,pa(t,i,s),Kt=c,$n=d;break;case 0:case 11:case 14:case 15:on||Ha(2,s,i),on||Ha(4,s,i),pa(t,i,s);break;case 1:on||(Gi(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"&&l_(s,i,c)),pa(t,i,s);break;case 21:pa(t,i,s);break;case 22:on=(c=on)||s.memoizedState!==null,pa(t,i,s),on=c;break;default:pa(t,i,s)}}function g_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{el(t)}catch(s){Xt(i,i.return,s)}}function iS(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new h_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new h_),i;default:throw Error(a(435,t.tag))}}function eh(t,i){var s=iS(t);i.forEach(function(c){var d=hS.bind(null,t,c);s.has(c)||(s.add(c),c.then(d,d))})}function si(t,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var d=s[c],m=t,E=i,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){Kt=A.stateNode,$n=!1;break e}break;case 5:Kt=A.stateNode,$n=!1;break e;case 3:case 4:Kt=A.stateNode.containerInfo,$n=!0;break e}A=A.return}if(Kt===null)throw Error(a(160));m_(m,E,d),Kt=null,$n=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)__(i,t),i=i.sibling}var Ri=null;function __(t,i){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:si(i,t),ri(t),c&4&&(Ha(3,t,t.return),Io(3,t),Ha(5,t,t.return));break;case 1:si(i,t),ri(t),c&512&&(on||s===null||Gi(s,s.return)),c&64&&da&&(t=t.updateQueue,t!==null&&(c=t.callbacks,c!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var d=Ri;if(si(i,t),ri(t),c&512&&(on||s===null||Gi(s,s.return)),c&4){var m=s!==null?s.memoizedState:null;if(c=t.memoizedState,s===null)if(c===null)if(t.stateNode===null){e:{c=t.type,s=t.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Fi]||m[dn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Un(m,c,s),m[dn]=t,ln(m),c=m;break e;case"link":var E=f0("link","href",d).get(c+(s.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(A,1);break t}}m=d.createElement(c),Un(m,c,s),d.head.appendChild(m);break;case"meta":if(E=f0("meta","content",d).get(c+(s.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(A,1);break t}}m=d.createElement(c),Un(m,c,s),d.head.appendChild(m);break;default:throw Error(a(468,c))}m[dn]=t,ln(m),c=m}t.stateNode=c}else h0(d,t.type,t.stateNode);else t.stateNode=u0(d,c,t.memoizedProps);else m!==c?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,c===null?h0(d,t.type,t.stateNode):u0(d,c,t.memoizedProps)):c===null&&t.stateNode!==null&&Zf(t,t.memoizedProps,s.memoizedProps)}break;case 27:si(i,t),ri(t),c&512&&(on||s===null||Gi(s,s.return)),s!==null&&c&4&&Zf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(si(i,t),ri(t),c&512&&(on||s===null||Gi(s,s.return)),t.flags&32){d=t.stateNode;try{Zn(d,"")}catch(oe){Xt(t,t.return,oe)}}c&4&&t.stateNode!=null&&(d=t.memoizedProps,Zf(t,d,s!==null?s.memoizedProps:d)),c&1024&&($f=!0);break;case 6:if(si(i,t),ri(t),c&4){if(t.stateNode===null)throw Error(a(162));c=t.memoizedProps,s=t.stateNode;try{s.nodeValue=c}catch(oe){Xt(t,t.return,oe)}}break;case 3:if(Lc=null,d=Ri,Ri=Cc(i.containerInfo),si(i,t),Ri=d,ri(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{el(i.containerInfo)}catch(oe){Xt(t,t.return,oe)}$f&&($f=!1,v_(t));break;case 4:c=Ri,Ri=Cc(t.stateNode.containerInfo),si(i,t),ri(t),Ri=c;break;case 12:si(i,t),ri(t);break;case 13:si(i,t),ri(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(rh=Oe()),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,eh(t,c)));break;case 22:d=t.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,te=da,de=on;if(da=te||d,on=de||z,si(i,t),on=de,da=te,ri(t),c&8192)e:for(i=t.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||z||da||on||Rs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(m=z.stateNode,d)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=z.stateNode;var ve=z.memoizedProps.style,se=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(oe){Xt(z,z.return,oe)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=d?"":z.memoizedProps}catch(oe){Xt(z,z.return,oe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=t.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,eh(t,s))));break;case 19:si(i,t),ri(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,eh(t,c)));break;case 30:break;case 21:break;default:si(i,t),ri(t)}}function ri(t){var i=t.flags;if(i&2){try{for(var s,c=t.return;c!==null;){if(u_(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,m=Qf(t);gc(t,m,d);break;case 5:var E=s.stateNode;s.flags&32&&(Zn(E,""),s.flags&=-33);var A=Qf(t);gc(t,A,E);break;case 3:case 4:var z=s.stateNode.containerInfo,te=Qf(t);Jf(t,te,z);break;default:throw Error(a(161))}}catch(de){Xt(t,t.return,de)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function v_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;v_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Va(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)d_(t,i.alternate,i),i=i.sibling}function Rs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Rs(i);break;case 1:Gi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&l_(i,i.return,s),Rs(i);break;case 27:qo(i.stateNode);case 26:case 5:Gi(i,i.return),Rs(i);break;case 22:i.memoizedState===null&&Rs(i);break;case 30:Rs(i);break;default:Rs(i)}t=t.sibling}}function Ga(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,d=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ga(d,m,s),Io(4,m);break;case 1:if(Ga(d,m,s),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(te){Xt(c,c.return,te)}if(c=m,d=c.updateQueue,d!==null){var A=c.stateNode;try{var z=d.shared.hiddenCallbacks;if(z!==null)for(d.shared.hiddenCallbacks=null,d=0;d<z.length;d++)Ym(z[d],A)}catch(te){Xt(c,c.return,te)}}s&&E&64&&o_(m),Bo(m,m.return);break;case 27:f_(m);case 26:case 5:Ga(d,m,s),s&&c===null&&E&4&&c_(m),Bo(m,m.return);break;case 12:Ga(d,m,s);break;case 13:Ga(d,m,s),s&&E&4&&g_(d,m);break;case 22:m.memoizedState===null&&Ga(d,m,s),Bo(m,m.return);break;case 30:break;default:Ga(d,m,s)}i=i.sibling}}function th(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Mo(s))}function nh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Mo(t))}function ki(t,i,s,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)y_(t,i,s,c),i=i.sibling}function y_(t,i,s,c){var d=i.flags;switch(i.tag){case 0:case 11:case 15:ki(t,i,s,c),d&2048&&Io(9,i);break;case 1:ki(t,i,s,c);break;case 3:ki(t,i,s,c),d&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Mo(t)));break;case 12:if(d&2048){ki(t,i,s,c),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Xt(i,i.return,z)}}else ki(t,i,s,c);break;case 13:ki(t,i,s,c);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?ki(t,i,s,c):zo(t,i):m._visibility&2?ki(t,i,s,c):(m._visibility|=2,dr(t,i,s,c,(i.subtreeFlags&10256)!==0)),d&2048&&th(E,i);break;case 24:ki(t,i,s,c),d&2048&&nh(i.alternate,i);break;default:ki(t,i,s,c)}}function dr(t,i,s,c,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,E=i,A=s,z=c,te=E.flags;switch(E.tag){case 0:case 11:case 15:dr(m,E,A,z,d),Io(8,E);break;case 23:break;case 22:var de=E.stateNode;E.memoizedState!==null?de._visibility&2?dr(m,E,A,z,d):zo(m,E):(de._visibility|=2,dr(m,E,A,z,d)),d&&te&2048&&th(E.alternate,E);break;case 24:dr(m,E,A,z,d),d&&te&2048&&nh(E.alternate,E);break;default:dr(m,E,A,z,d)}i=i.sibling}}function zo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,c=i,d=c.flags;switch(c.tag){case 22:zo(s,c),d&2048&&th(c.alternate,c);break;case 24:zo(s,c),d&2048&&nh(c.alternate,c);break;default:zo(s,c)}i=i.sibling}}var Fo=8192;function pr(t){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)x_(t),t=t.sibling}function x_(t){switch(t.tag){case 26:pr(t),t.flags&Fo&&t.memoizedState!==null&&GS(Ri,t.memoizedState,t.memoizedProps);break;case 5:pr(t);break;case 3:case 4:var i=Ri;Ri=Cc(t.stateNode.containerInfo),pr(t),Ri=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Fo,Fo=16777216,pr(t),Fo=i):pr(t));break;default:pr(t)}}function S_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ho(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Mn=c,E_(c,t)}S_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M_(t),t=t.sibling}function M_(t){switch(t.tag){case 0:case 11:case 15:Ho(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Ho(t);break;case 12:Ho(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,_c(t)):Ho(t);break;default:Ho(t)}}function _c(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Mn=c,E_(c,t)}S_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ha(8,i,i.return),_c(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,_c(i));break;default:_c(i)}t=t.sibling}}function E_(t,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Ha(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Mo(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,Mn=c;else e:for(s=t;Mn!==null;){c=Mn;var d=c.sibling,m=c.return;if(p_(c),c===s){Mn=null;break e}if(d!==null){d.return=m,Mn=d;break e}Mn=m}}}var aS={getCacheForType:function(t){var i=Bn(pn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},sS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,qt=null,St=null,Tt=0,Ot=0,oi=null,ka=!1,mr=!1,ih=!1,ma=0,sn=0,Xa=0,ws=0,ah=0,yi=0,gr=0,Vo=null,ei=null,sh=!1,rh=0,vc=1/0,yc=null,Wa=null,Ln=0,qa=null,_r=null,vr=0,oh=0,lh=null,T_=null,Go=0,ch=null;function li(){if((Nt&2)!==0&&Tt!==0)return Tt&-Tt;if(O.T!==null){var t=sr;return t!==0?t:gh()}return At()}function b_(){yi===0&&(yi=(Tt&536870912)===0||Dt?W():536870912);var t=vi.current;return t!==null&&(t.flags|=32),yi}function ci(t,i,s){(t===qt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(yr(t,0),Ya(t,Tt,yi,!1)),Ie(t,s),((Nt&2)===0||t!==qt)&&(t===qt&&((Nt&2)===0&&(ws|=s),sn===4&&Ya(t,Tt,yi,!1)),Xi(t))}function A_(t,i,s){if((Nt&6)!==0)throw Error(a(327));var c=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ce(t,i),d=c?lS(t,i):hh(t,i,!0),m=c;do{if(d===0){mr&&!c&&Ya(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!rS(s)){d=hh(t,i,!1),m=!1;continue}if(d===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var A=t;d=Vo;var z=A.current.memoizedState.isDehydrated;if(z&&(yr(A,E).flags|=256),E=hh(A,E,!1),E!==2){if(ih&&!z){A.errorRecoveryDisabledLanes|=m,ws|=m,d=4;break e}m=ei,ei=d,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}d=E}if(m=!1,d!==2)continue}}if(d===1){yr(t,0),Ya(t,i,0,!0);break}e:{switch(c=t,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ya(c,i,yi,!ka);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=rh+300-Oe(),10<d)){if(Ya(c,i,yi,!ka),Ge(c,0,!0)!==0)break e;c.timeoutHandle=t0(R_.bind(null,c,s,ei,yc,sh,i,yi,ws,gr,ka,m,2,-0,0),d);break e}R_(c,s,ei,yc,sh,i,yi,ws,gr,ka,m,0,-0,0)}}break}while(!0);Xi(t)}function R_(t,i,s,c,d,m,E,A,z,te,de,ve,se,oe){if(t.timeoutHandle=-1,ve=i.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(Ko={stylesheets:null,count:0,unsuspend:VS},x_(i),ve=kS(),ve!==null)){t.cancelPendingCommit=ve(O_.bind(null,t,i,m,s,c,d,E,A,z,de,1,se,oe)),Ya(t,m,E,!te);return}O_(t,i,m,s,c,d,E,A,z)}function rS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var d=s[c],m=d.getSnapshot;d=d.value;try{if(!ii(m(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ya(t,i,s,c){i&=~ah,i&=~ws,t.suspendedLanes|=i,t.pingedLanes&=~i,c&&(t.warmLanes|=i),c=t.expirationTimes;for(var d=i;0<d;){var m=31-Pe(d),E=1<<m;c[m]=-1,d&=~E}s!==0&&xe(t,s,i)}function xc(){return(Nt&6)===0?(ko(0),!1):!0}function uh(){if(St!==null){if(Ot===0)var t=St.return;else t=St,oa=Ms=null,Rf(t),fr=null,No=0,t=St;for(;t!==null;)r_(t.alternate,t),t=t.return;St=null}}function yr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,TS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),uh(),qt=t,St=s=aa(t.current,null),Tt=i,Ot=0,oi=null,ka=!1,mr=Ce(t,i),ih=!1,gr=yi=ah=ws=Xa=sn=0,ei=Vo=null,sh=!1,(i&8)!==0&&(i|=i&32);var c=t.entangledLanes;if(c!==0)for(t=t.entanglements,c&=i;0<c;){var d=31-Pe(c),m=1<<d;i|=t[d],c&=~m}return ma=i,Gl(),s}function w_(t,i){vt=null,O.H=oc,i===To||i===Ql?(i=Wm(),Ot=3):i===Gm?(i=Wm(),Ot=4):Ot=i===qg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,oi=i,St===null&&(sn=1,hc(t,pi(i,t.current)))}function C_(){var t=O.H;return O.H=oc,t===null?oc:t}function D_(){var t=O.A;return O.A=aS,t}function fh(){sn=4,ka||(Tt&4194048)!==Tt&&vi.current!==null||(mr=!0),(Xa&134217727)===0&&(ws&134217727)===0||qt===null||Ya(qt,Tt,yi,!1)}function hh(t,i,s){var c=Nt;Nt|=2;var d=C_(),m=D_();(qt!==t||Tt!==i)&&(yc=null,yr(t,i)),i=!1;var E=sn;e:do try{if(Ot!==0&&St!==null){var A=St,z=oi;switch(Ot){case 8:uh(),E=6;break e;case 3:case 2:case 9:case 6:vi.current===null&&(i=!0);var te=Ot;if(Ot=0,oi=null,xr(t,A,z,te),s&&mr){E=0;break e}break;default:te=Ot,Ot=0,oi=null,xr(t,A,z,te)}}oS(),E=sn;break}catch(de){w_(t,de)}while(!0);return i&&t.shellSuspendCounter++,oa=Ms=null,Nt=c,O.H=d,O.A=m,St===null&&(qt=null,Tt=0,Gl()),E}function oS(){for(;St!==null;)L_(St)}function lS(t,i){var s=Nt;Nt|=2;var c=C_(),d=D_();qt!==t||Tt!==i?(yc=null,vc=Oe()+500,yr(t,i)):mr=Ce(t,i);e:do try{if(Ot!==0&&St!==null){i=St;var m=oi;t:switch(Ot){case 1:Ot=0,oi=null,xr(t,i,m,1);break;case 2:case 9:if(km(m)){Ot=0,oi=null,U_(i);break}i=function(){Ot!==2&&Ot!==9||qt!==t||(Ot=7),Xi(t)},m.then(i,i);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:km(m)?(Ot=0,oi=null,U_(i)):(Ot=0,oi=null,xr(t,i,m,7));break;case 5:var E=null;switch(St.tag){case 26:E=St.memoizedState;case 5:case 27:var A=St;if(!E||d0(E)){Ot=0,oi=null;var z=A.sibling;if(z!==null)St=z;else{var te=A.return;te!==null?(St=te,Sc(te)):St=null}break t}}Ot=0,oi=null,xr(t,i,m,5);break;case 6:Ot=0,oi=null,xr(t,i,m,6);break;case 8:uh(),sn=6;break e;default:throw Error(a(462))}}cS();break}catch(de){w_(t,de)}while(!0);return oa=Ms=null,O.H=c,O.A=d,Nt=s,St!==null?0:(qt=null,Tt=0,Gl(),sn)}function cS(){for(;St!==null&&!Je();)L_(St)}function L_(t){var i=a_(t.alternate,t,ma);t.memoizedProps=t.pendingProps,i===null?Sc(t):St=i}function U_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Jg(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=Jg(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:Rf(i);default:r_(s,i),i=St=Nm(i,ma),i=a_(s,i,ma)}t.memoizedProps=t.pendingProps,i===null?Sc(t):St=i}function xr(t,i,s,c){oa=Ms=null,Rf(i),fr=null,No=0;var d=i.return;try{if(Jx(t,d,i,s,Tt)){sn=1,hc(t,pi(s,t.current)),St=null;return}}catch(m){if(d!==null)throw St=d,m;sn=1,hc(t,pi(s,t.current)),St=null;return}i.flags&32768?(Dt||c===1?t=!0:mr||(Tt&536870912)!==0?t=!1:(ka=t=!0,(c===2||c===9||c===3||c===6)&&(c=vi.current,c!==null&&c.tag===13&&(c.flags|=16384))),N_(i,t)):Sc(i)}function Sc(t){var i=t;do{if((i.flags&32768)!==0){N_(i,ka);return}t=i.return;var s=eS(i.alternate,i,ma);if(s!==null){St=s;return}if(i=i.sibling,i!==null){St=i;return}St=i=t}while(i!==null);sn===0&&(sn=5)}function N_(t,i){do{var s=tS(t.alternate,t);if(s!==null){s.flags&=32767,St=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){St=t;return}St=t=s}while(t!==null);sn=6,St=null}function O_(t,i,s,c,d,m,E,A,z){t.cancelPendingCommit=null;do Mc();while(Ln!==0);if((Nt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=tf,Me(t,s,m,E,A,z),t===qt&&(St=qt=null,Tt=0),_r=i,qa=t,vr=s,oh=m,lh=d,T_=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dS(Zt,function(){return F_(),null})):(t.callbackNode=null,t.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=O.T,O.T=null,d=K.p,K.p=2,E=Nt,Nt|=4;try{nS(t,i,s)}finally{Nt=E,K.p=d,O.T=c}}Ln=1,P_(),I_(),B_()}}function P_(){if(Ln===1){Ln=0;var t=qa,i=_r,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var c=K.p;K.p=2;var d=Nt;Nt|=4;try{__(i,t);var m=Th,E=Em(t.containerInfo),A=m.focusedElem,z=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&Mm(A.ownerDocument.documentElement,A)){if(z!==null&&Zu(A)){var te=z.start,de=z.end;if(de===void 0&&(de=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(de,A.value.length);else{var ve=A.ownerDocument||document,se=ve&&ve.defaultView||window;if(se.getSelection){var oe=se.getSelection(),it=A.textContent.length,et=Math.min(z.start,it),Ht=z.end===void 0?et:Math.min(z.end,it);!oe.extend&&et>Ht&&(E=Ht,Ht=et,et=E);var Z=Sm(A,et),X=Sm(A,Ht);if(Z&&X&&(oe.rangeCount!==1||oe.anchorNode!==Z.node||oe.anchorOffset!==Z.offset||oe.focusNode!==X.node||oe.focusOffset!==X.offset)){var $=ve.createRange();$.setStart(Z.node,Z.offset),oe.removeAllRanges(),et>Ht?(oe.addRange($),oe.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),oe.addRange($))}}}}for(ve=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&ve.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var me=ve[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Oc=!!Eh,Th=Eh=null}finally{Nt=d,K.p=c,O.T=s}}t.current=i,Ln=2}}function I_(){if(Ln===2){Ln=0;var t=qa,i=_r,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var c=K.p;K.p=2;var d=Nt;Nt|=4;try{d_(t,i.alternate,i)}finally{Nt=d,K.p=c,O.T=s}}Ln=3}}function B_(){if(Ln===4||Ln===3){Ln=0,Ze();var t=qa,i=_r,s=vr,c=T_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,_r=qa=null,z_(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Wa=null),Ut(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=O.T,d=K.p,K.p=2,O.T=null;try{for(var m=t.onRecoverableError,E=0;E<c.length;E++){var A=c[E];m(A.value,{componentStack:A.stack})}}finally{O.T=i,K.p=d}}(vr&3)!==0&&Mc(),Xi(t),d=t.pendingLanes,(s&4194090)!==0&&(d&42)!==0?t===ch?Go++:(Go=0,ch=t):Go=0,ko(0)}}function z_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Mo(i)))}function Mc(t){return P_(),I_(),B_(),F_()}function F_(){if(Ln!==5)return!1;var t=qa,i=oh;oh=0;var s=Ut(vr),c=O.T,d=K.p;try{K.p=32>s?32:s,O.T=null,s=lh,lh=null;var m=qa,E=vr;if(Ln=0,_r=qa=null,vr=0,(Nt&6)!==0)throw Error(a(331));var A=Nt;if(Nt|=4,M_(m.current),y_(m,m.current,E,s),Nt=A,ko(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(fe,m)}catch{}return!0}finally{K.p=d,O.T=c,z_(t,i)}}function H_(t,i,s){i=pi(s,i),i=Vf(t.stateNode,i,2),t=Ia(t,i,2),t!==null&&(Ie(t,2),Xi(t))}function Xt(t,i,s){if(t.tag===3)H_(t,t,s);else for(;i!==null;){if(i.tag===3){H_(i,t,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wa===null||!Wa.has(c))){t=pi(s,t),s=Xg(2),c=Ia(i,s,2),c!==null&&(Wg(s,c,i,t),Ie(c,2),Xi(c));break}}i=i.return}}function dh(t,i,s){var c=t.pingCache;if(c===null){c=t.pingCache=new sS;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(s)||(ih=!0,d.add(s),t=uS.bind(null,t,i,s),i.then(t,t))}function uS(t,i,s){var c=t.pingCache;c!==null&&c.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,qt===t&&(Tt&s)===s&&(sn===4||sn===3&&(Tt&62914560)===Tt&&300>Oe()-rh?(Nt&2)===0&&yr(t,0):ah|=s,gr===Tt&&(gr=0)),Xi(t)}function V_(t,i){i===0&&(i=be()),t=tr(t,i),t!==null&&(Ie(t,i),Xi(t))}function fS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),V_(t,s)}function hS(t,i){var s=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:c=t.stateNode;break;case 22:c=t.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),V_(t,s)}function dS(t,i){return G(t,i)}var Ec=null,Sr=null,ph=!1,Tc=!1,mh=!1,Cs=0;function Xi(t){t!==Sr&&t.next===null&&(Sr===null?Ec=Sr=t:Sr=Sr.next=t),Tc=!0,ph||(ph=!0,mS())}function ko(t,i){if(!mh&&Tc){mh=!0;do for(var s=!1,c=Ec;c!==null;){if(t!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var E=c.suspendedLanes,A=c.pingedLanes;m=(1<<31-Pe(42|t)+1)-1,m&=d&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,W_(c,m))}else m=Tt,m=Ge(c,c===qt?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Ce(c,m)||(s=!0,W_(c,m));c=c.next}while(s);mh=!1}}function pS(){G_()}function G_(){Tc=ph=!1;var t=0;Cs!==0&&(ES()&&(t=Cs),Cs=0);for(var i=Oe(),s=null,c=Ec;c!==null;){var d=c.next,m=k_(c,i);m===0?(c.next=null,s===null?Ec=d:s.next=d,d===null&&(Sr=s)):(s=c,(t!==0||(m&3)!==0)&&(Tc=!0)),c=d}ko(t)}function k_(t,i){for(var s=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-Pe(m),A=1<<E,z=d[E];z===-1?((A&s)===0||(A&c)!==0)&&(d[E]=lt(A,i)):z<=i&&(t.expiredLanes|=A),m&=~A}if(i=qt,s=Tt,s=Ge(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c=t.callbackNode,s===0||t===i&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return c!==null&&c!==null&&Ct(c),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ce(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(c!==null&&Ct(c),Ut(s)){case 2:case 8:s=ot;break;case 32:s=Zt;break;case 268435456:s=P;break;default:s=Zt}return c=X_.bind(null,t),s=G(s,c),t.callbackPriority=i,t.callbackNode=s,i}return c!==null&&c!==null&&Ct(c),t.callbackPriority=2,t.callbackNode=null,2}function X_(t,i){if(Ln!==0&&Ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Mc()&&t.callbackNode!==s)return null;var c=Tt;return c=Ge(t,t===qt?c:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c===0?null:(A_(t,c,i),k_(t,Oe()),t.callbackNode!=null&&t.callbackNode===s?X_.bind(null,t):null)}function W_(t,i){if(Mc())return null;A_(t,i,!0)}function mS(){bS(function(){(Nt&6)!==0?G(Ve,pS):G_()})}function gh(){return Cs===0&&(Cs=W()),Cs}function q_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(""+t)}function Y_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function gS(t,i,s,c,d){if(i==="submit"&&s&&s.stateNode===d){var m=q_((d[tn]||null).action),E=c.submitter;E&&(i=(i=E[tn]||null)?q_(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var A=new Fl("action","action",null,c,d);t.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Cs!==0){var z=E?Y_(d,E):new FormData(d);If(s,{pending:!0,data:z,method:d.method,action:m},null,z)}}else typeof m=="function"&&(A.preventDefault(),z=E?Y_(d,E):new FormData(d),If(s,{pending:!0,data:z,method:d.method,action:m},m,z))},currentTarget:d}]})}}for(var _h=0;_h<ef.length;_h++){var vh=ef[_h],_S=vh.toLowerCase(),vS=vh[0].toUpperCase()+vh.slice(1);Ai(_S,"on"+vS)}Ai(Am,"onAnimationEnd"),Ai(Rm,"onAnimationIteration"),Ai(wm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Px,"onTransitionRun"),Ai(Ix,"onTransitionStart"),Ai(Bx,"onTransitionCancel"),Ai(Cm,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function j_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var A=c[E],z=A.instance,te=A.currentTarget;if(A=A.listener,z!==m&&d.isPropagationStopped())break e;m=A,d.currentTarget=te;try{m(d)}catch(de){fc(de)}d.currentTarget=null,m=z}else for(E=0;E<c.length;E++){if(A=c[E],z=A.instance,te=A.currentTarget,A=A.listener,z!==m&&d.isPropagationStopped())break e;m=A,d.currentTarget=te;try{m(d)}catch(de){fc(de)}d.currentTarget=null,m=z}}}}function Mt(t,i){var s=i[Ws];s===void 0&&(s=i[Ws]=new Set);var c=t+"__bubble";s.has(c)||(K_(i,t,2,!1),s.add(c))}function yh(t,i,s){var c=0;i&&(c|=4),K_(s,t,c,i)}var bc="_reactListening"+Math.random().toString(36).slice(2);function xh(t){if(!t[bc]){t[bc]=!0,Nl.forEach(function(s){s!=="selectionchange"&&(yS.has(s)||yh(s,!1,t),yh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bc]||(i[bc]=!0,yh("selectionchange",!1,i))}}function K_(t,i,s,c){switch(y0(i)){case 2:var d=qS;break;case 8:d=YS;break;default:d=Oh}s=d.bind(null,i,s,t),d=void 0,!Vu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function Sh(t,i,s,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var A=c.stateNode.containerInfo;if(A===d)break;if(E===4)for(E=c.return;E!==null;){var z=E.tag;if((z===3||z===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;A!==null;){if(E=na(A),E===null)return;if(z=E.tag,z===5||z===6||z===26||z===27){c=m=E;continue e}A=A.parentNode}}c=c.return}nm(function(){var te=m,de=Fu(s),ve=[];e:{var se=Dm.get(t);if(se!==void 0){var oe=Fl,it=t;switch(t){case"keypress":if(Bl(s)===0)break e;case"keydown":case"keyup":oe=dx;break;case"focusin":it="focus",oe=Wu;break;case"focusout":it="blur",oe=Wu;break;case"beforeblur":case"afterblur":oe=Wu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=gx;break;case Am:case Rm:case wm:oe=ax;break;case Cm:oe=vx;break;case"scroll":case"scrollend":oe=$y;break;case"wheel":oe=xx;break;case"copy":case"cut":case"paste":oe=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=om;break;case"toggle":case"beforetoggle":oe=Mx}var et=(i&4)!==0,Ht=!et&&(t==="scroll"||t==="scrollend"),Z=et?se!==null?se+"Capture":null:se;et=[];for(var X=te,$;X!==null;){var me=X;if($=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||$===null||Z===null||(me=lo(X,Z),me!=null&&et.push(Wo(X,me,$))),Ht)break;X=X.return}0<et.length&&(se=new oe(se,it,null,s,de),ve.push({event:se,listeners:et}))}}if((i&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",se&&s!==zu&&(it=s.relatedTarget||s.fromElement)&&(na(it)||it[zi]))break e;if((oe||se)&&(se=de.window===de?de:(se=de.ownerDocument)?se.defaultView||se.parentWindow:window,oe?(it=s.relatedTarget||s.toElement,oe=te,it=it?na(it):null,it!==null&&(Ht=l(it),et=it.tag,it!==Ht||et!==5&&et!==27&&et!==6)&&(it=null)):(oe=null,it=te),oe!==it)){if(et=sm,me="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=om,me="onPointerLeave",Z="onPointerEnter",X="pointer"),Ht=oe==null?se:ds(oe),$=it==null?se:ds(it),se=new et(me,X+"leave",oe,s,de),se.target=Ht,se.relatedTarget=$,me=null,na(de)===te&&(et=new et(Z,X+"enter",it,s,de),et.target=$,et.relatedTarget=Ht,me=et),Ht=me,oe&&it)t:{for(et=oe,Z=it,X=0,$=et;$;$=Mr($))X++;for($=0,me=Z;me;me=Mr(me))$++;for(;0<X-$;)et=Mr(et),X--;for(;0<$-X;)Z=Mr(Z),$--;for(;X--;){if(et===Z||Z!==null&&et===Z.alternate)break t;et=Mr(et),Z=Mr(Z)}et=null}else et=null;oe!==null&&Z_(ve,se,oe,et,!1),it!==null&&Ht!==null&&Z_(ve,Ht,it,et,!0)}}e:{if(se=te?ds(te):window,oe=se.nodeName&&se.nodeName.toLowerCase(),oe==="select"||oe==="input"&&se.type==="file")var Fe=mm;else if(dm(se))if(gm)Fe=Ux;else{Fe=Dx;var yt=Cx}else oe=se.nodeName,!oe||oe.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?te&&Bu(te.elementType)&&(Fe=mm):Fe=Lx;if(Fe&&(Fe=Fe(t,te))){pm(ve,Fe,s,de);break e}yt&&yt(t,se,te),t==="focusout"&&te&&se.type==="number"&&te.memoizedProps.value!=null&&In(se,"number",se.value)}switch(yt=te?ds(te):window,t){case"focusin":(dm(yt)||yt.contentEditable==="true")&&(Js=yt,Qu=te,_o=null);break;case"focusout":_o=Qu=Js=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Tm(ve,s,de);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":Tm(ve,s,de)}var je;if(Yu)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Qs?fm(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(lm&&s.locale!=="ko"&&(Qs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Qs&&(je=im()):(Ua=de,Gu="value"in Ua?Ua.value:Ua.textContent,Qs=!0)),yt=Ac(te,nt),0<yt.length&&(nt=new rm(nt,t,null,s,de),ve.push({event:nt,listeners:yt}),je?nt.data=je:(je=hm(s),je!==null&&(nt.data=je)))),(je=Tx?bx(t,s):Ax(t,s))&&(nt=Ac(te,"onBeforeInput"),0<nt.length&&(yt=new rm("onBeforeInput","beforeinput",null,s,de),ve.push({event:yt,listeners:nt}),yt.data=je)),gS(ve,t,te,s,de)}j_(ve,i)})}function Wo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ac(t,i){for(var s=i+"Capture",c=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=lo(t,s),d!=null&&c.unshift(Wo(t,d,m)),d=lo(t,i),d!=null&&c.push(Wo(t,d,m))),t.tag===3)return c;t=t.return}return[]}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z_(t,i,s,c,d){for(var m=i._reactName,E=[];s!==null&&s!==c;){var A=s,z=A.alternate,te=A.stateNode;if(A=A.tag,z!==null&&z===c)break;A!==5&&A!==26&&A!==27||te===null||(z=te,d?(te=lo(s,m),te!=null&&E.unshift(Wo(s,te,z))):d||(te=lo(s,m),te!=null&&E.push(Wo(s,te,z)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var xS=/\r\n?/g,SS=/\u0000|\uFFFD/g;function Q_(t){return(typeof t=="string"?t:""+t).replace(xS,`
`).replace(SS,"")}function J_(t,i){return i=Q_(i),Q_(t)===i}function Rc(){}function Ft(t,i,s,c,d,m){switch(s){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Zn(t,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Zn(t,""+c);break;case"className":ze(t,"class",c);break;case"tabIndex":ze(t,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,s,c);break;case"style":em(t,c,m);break;case"data":if(i!=="object"){ze(t,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(s);break}c=Pl(""+c),t.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ft(t,i,"name",d.name,d,null),Ft(t,i,"formEncType",d.formEncType,d,null),Ft(t,i,"formMethod",d.formMethod,d,null),Ft(t,i,"formTarget",d.formTarget,d,null)):(Ft(t,i,"encType",d.encType,d,null),Ft(t,i,"method",d.method,d,null),Ft(t,i,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(s);break}c=Pl(""+c),t.setAttribute(s,c);break;case"onClick":c!=null&&(t.onclick=Rc);break;case"onScroll":c!=null&&Mt("scroll",t);break;case"onScrollEnd":c!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":t.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){t.removeAttribute("xlink:href");break}s=Pl(""+c),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,""+c):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":c===!0?t.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,c):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?t.setAttribute(s,c):t.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?t.removeAttribute(s):t.setAttribute(s,c);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),De(t,"popover",c);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":De(t,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Qy.get(s)||s,De(t,s,c))}}function Mh(t,i,s,c,d,m){switch(s){case"style":em(t,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof c=="string"?Zn(t,c):(typeof c=="number"||typeof c=="bigint")&&Zn(t,""+c);break;case"onScroll":c!=null&&Mt("scroll",t);break;case"onScrollEnd":c!=null&&Mt("scrollend",t);break;case"onClick":c!=null&&(t.onclick=Rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ol.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),m=t[tn]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,c,d);break e}s in t?t[s]=c:c===!0?t.setAttribute(s,""):De(t,s,c)}}}function Un(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var c=!1,d=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ft(t,i,m,E,s,null)}}d&&Ft(t,i,"srcSet",s.srcSet,s,null),c&&Ft(t,i,"src",s.src,s,null);return;case"input":Mt("invalid",t);var A=m=E=d=null,z=null,te=null;for(c in s)if(s.hasOwnProperty(c)){var de=s[c];if(de!=null)switch(c){case"name":d=de;break;case"type":E=de;break;case"checked":z=de;break;case"defaultChecked":te=de;break;case"value":m=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:Ft(t,i,c,de,s,null)}}Xn(t,m,A,z,te,E,d,!1),xt(t);return;case"select":Mt("invalid",t),c=E=m=null;for(d in s)if(s.hasOwnProperty(d)&&(A=s[d],A!=null))switch(d){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":c=A;default:Ft(t,i,d,A,s,null)}i=m,s=E,t.multiple=!!c,i!=null?nn(t,!!c,i,!1):s!=null&&nn(t,!!c,s,!0);return;case"textarea":Mt("invalid",t),m=d=c=null;for(E in s)if(s.hasOwnProperty(E)&&(A=s[E],A!=null))switch(E){case"value":c=A;break;case"defaultValue":d=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Ft(t,i,E,A,s,null)}js(t,c,d,m),xt(t);return;case"option":for(z in s)if(s.hasOwnProperty(z)&&(c=s[z],c!=null))switch(z){case"selected":t.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Ft(t,i,z,c,s,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(c=0;c<Xo.length;c++)Mt(Xo[c],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(c=s[te],c!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ft(t,i,te,c,s,null)}return;default:if(Bu(i)){for(de in s)s.hasOwnProperty(de)&&(c=s[de],c!==void 0&&Mh(t,i,de,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&Ft(t,i,A,c,s,null))}function MS(t,i,s,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,E=null,A=null,z=null,te=null,de=null;for(oe in s){var ve=s[oe];if(s.hasOwnProperty(oe)&&ve!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":z=ve;default:c.hasOwnProperty(oe)||Ft(t,i,oe,null,c,ve)}}for(var se in c){var oe=c[se];if(ve=s[se],c.hasOwnProperty(se)&&(oe!=null||ve!=null))switch(se){case"type":m=oe;break;case"name":d=oe;break;case"checked":te=oe;break;case"defaultChecked":de=oe;break;case"value":E=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,i));break;default:oe!==ve&&Ft(t,i,se,oe,c,ve)}}kt(t,E,A,z,te,de,m,d);return;case"select":oe=E=A=se=null;for(m in s)if(z=s[m],s.hasOwnProperty(m)&&z!=null)switch(m){case"value":break;case"multiple":oe=z;default:c.hasOwnProperty(m)||Ft(t,i,m,null,c,z)}for(d in c)if(m=c[d],z=s[d],c.hasOwnProperty(d)&&(m!=null||z!=null))switch(d){case"value":se=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==z&&Ft(t,i,d,m,c,z)}i=A,s=E,c=oe,se!=null?nn(t,!!s,se,!1):!!c!=!!s&&(i!=null?nn(t,!!s,i,!0):nn(t,!!s,s?[]:"",!1));return;case"textarea":oe=se=null;for(A in s)if(d=s[A],s.hasOwnProperty(A)&&d!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ft(t,i,A,null,c,d)}for(E in c)if(d=c[E],m=s[E],c.hasOwnProperty(E)&&(d!=null||m!=null))switch(E){case"value":se=d;break;case"defaultValue":oe=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&Ft(t,i,E,d,c,m)}Cn(t,se,oe);return;case"option":for(var it in s)if(se=s[it],s.hasOwnProperty(it)&&se!=null&&!c.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Ft(t,i,it,null,c,se)}for(z in c)if(se=c[z],oe=s[z],c.hasOwnProperty(z)&&se!==oe&&(se!=null||oe!=null))switch(z){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Ft(t,i,z,se,c,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in s)se=s[et],s.hasOwnProperty(et)&&se!=null&&!c.hasOwnProperty(et)&&Ft(t,i,et,null,c,se);for(te in c)if(se=c[te],oe=s[te],c.hasOwnProperty(te)&&se!==oe&&(se!=null||oe!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:Ft(t,i,te,se,c,oe)}return;default:if(Bu(i)){for(var Ht in s)se=s[Ht],s.hasOwnProperty(Ht)&&se!==void 0&&!c.hasOwnProperty(Ht)&&Mh(t,i,Ht,void 0,c,se);for(de in c)se=c[de],oe=s[de],!c.hasOwnProperty(de)||se===oe||se===void 0&&oe===void 0||Mh(t,i,de,se,c,oe);return}}for(var Z in s)se=s[Z],s.hasOwnProperty(Z)&&se!=null&&!c.hasOwnProperty(Z)&&Ft(t,i,Z,null,c,se);for(ve in c)se=c[ve],oe=s[ve],!c.hasOwnProperty(ve)||se===oe||se==null&&oe==null||Ft(t,i,ve,se,c,oe)}var Eh=null,Th=null;function wc(t){return t.nodeType===9?t:t.ownerDocument}function $_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function bh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ah=null;function ES(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var t0=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(AS)}:t0;function AS(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function i0(t,i){var s=i,c=0,d=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<c&&8>c){s=c;var E=t.ownerDocument;if(s&1&&qo(E.documentElement),s&2&&qo(E.body),s&4)for(s=E.head,qo(s),E=s.firstChild;E;){var A=E.nextSibling,z=E.nodeName;E[Fi]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=A}}if(d===0){t.removeChild(m),el(i);return}d--}else s==="$"||s==="$?"||s==="$!"?d++:c=s.charCodeAt(0)-48;else c=0;s=m}while(s);el(i)}function Rh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Rh(s),Ys(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function RS(t,i,s,c){for(;t.nodeType===1;){var d=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(c){if(!t[Fi])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function wS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=wi(t.nextSibling),t===null))return null;return t}function wh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function CS(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var c=function(){i(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),t._reactRetry=c}}function wi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Ch=null;function a0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function s0(t,i,s){switch(i=wc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function qo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ys(t)}var xi=new Map,r0=new Set;function Cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=K.d;K.d={f:DS,r:LS,D:US,C:NS,L:OS,m:PS,X:BS,S:IS,M:zS};function DS(){var t=ga.f(),i=xc();return t||i}function LS(t){var i=Da(t);i!==null&&i.tag===5&&i.type==="form"?Ag(i):ga.r(t)}var Er=typeof document>"u"?null:document;function o0(t,i,s){var c=Er;if(c&&typeof i=="string"&&i){var d=xn(i);d='link[rel="'+t+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),r0.has(d)||(r0.add(d),t={rel:t,crossOrigin:s,href:i},c.querySelector(d)===null&&(i=c.createElement("link"),Un(i,"link",t),ln(i),c.head.appendChild(i)))}}function US(t){ga.D(t),o0("dns-prefetch",t,null)}function NS(t,i){ga.C(t,i),o0("preconnect",t,i)}function OS(t,i,s){ga.L(t,i,s);var c=Er;if(c&&t&&i){var d='link[rel="preload"][as="'+xn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+xn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+xn(s.imageSizes)+'"]')):d+='[href="'+xn(t)+'"]';var m=d;switch(i){case"style":m=Tr(t);break;case"script":m=br(t)}xi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),xi.set(m,t),c.querySelector(d)!==null||i==="style"&&c.querySelector(Yo(m))||i==="script"&&c.querySelector(jo(m))||(i=c.createElement("link"),Un(i,"link",t),ln(i),c.head.appendChild(i)))}}function PS(t,i){ga.m(t,i);var s=Er;if(s&&t){var c=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+xn(c)+'"][href="'+xn(t)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=br(t)}if(!xi.has(m)&&(t=g({rel:"modulepreload",href:t},i),xi.set(m,t),s.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(jo(m)))return}c=s.createElement("link"),Un(c,"link",t),ln(c),s.head.appendChild(c)}}}function IS(t,i,s){ga.S(t,i,s);var c=Er;if(c&&t){var d=La(c).hoistableStyles,m=Tr(t);i=i||"default";var E=d.get(m);if(!E){var A={loading:0,preload:null};if(E=c.querySelector(Yo(m)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=xi.get(m))&&Dh(t,s);var z=E=c.createElement("link");ln(z),Un(z,"link",t),z._p=new Promise(function(te,de){z.onload=te,z.onerror=de}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Dc(E,i,c)}E={type:"stylesheet",instance:E,count:1,state:A},d.set(m,E)}}}function BS(t,i){ga.X(t,i);var s=Er;if(s&&t){var c=La(s).hoistableScripts,d=br(t),m=c.get(d);m||(m=s.querySelector(jo(d)),m||(t=g({src:t,async:!0},i),(i=xi.get(d))&&Lh(t,i),m=s.createElement("script"),ln(m),Un(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function zS(t,i){ga.M(t,i);var s=Er;if(s&&t){var c=La(s).hoistableScripts,d=br(t),m=c.get(d);m||(m=s.querySelector(jo(d)),m||(t=g({src:t,async:!0,type:"module"},i),(i=xi.get(d))&&Lh(t,i),m=s.createElement("script"),ln(m),Un(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function l0(t,i,s,c){var d=(d=ee.current)?Cc(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Tr(s.href),s=La(d).hoistableStyles,c=s.get(i),c||(c={type:"style",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Tr(s.href);var m=La(d).hoistableStyles,E=m.get(t);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=d.querySelector(Yo(t)))&&!m._p&&(E.instance=m,E.state.loading=5),xi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},xi.set(t,s),m||FS(d,t,s,E.state))),i&&c===null)throw Error(a(528,""));return E}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=br(s),s=La(d).hoistableScripts,c=s.get(i),c||(c={type:"script",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Tr(t){return'href="'+xn(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function c0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function FS(t,i,s,c){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=t.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Un(i,"link",s),ln(i),t.head.appendChild(i))}function br(t){return'[src="'+xn(t)+'"]'}function jo(t){return"script[async]"+t}function u0(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var c=t.querySelector('style[data-href~="'+xn(s.href)+'"]');if(c)return i.instance=c,ln(c),c;var d=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(t.ownerDocument||t).createElement("style"),ln(c),Un(c,"style",d),Dc(c,s.precedence,t),i.instance=c;case"stylesheet":d=Tr(s.href);var m=t.querySelector(Yo(d));if(m)return i.state.loading|=4,i.instance=m,ln(m),m;c=c0(s),(d=xi.get(d))&&Dh(c,d),m=(t.ownerDocument||t).createElement("link"),ln(m);var E=m;return E._p=new Promise(function(A,z){E.onload=A,E.onerror=z}),Un(m,"link",c),i.state.loading|=4,Dc(m,s.precedence,t),i.instance=m;case"script":return m=br(s.src),(d=t.querySelector(jo(m)))?(i.instance=d,ln(d),d):(c=s,(d=xi.get(m))&&(c=g({},s),Lh(c,d)),t=t.ownerDocument||t,d=t.createElement("script"),ln(d),Un(d,"link",c),t.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Dc(c,s.precedence,t));return i.instance}function Dc(t,i,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,E=0;E<c.length;E++){var A=c[E];if(A.dataset.precedence===i)m=A;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Dh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Lh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Lc=null;function f0(t,i,s){if(Lc===null){var c=new Map,d=Lc=new Map;d.set(s,c)}else d=Lc,c=d.get(s),c||(c=new Map,d.set(s,c));if(c.has(t))return c;for(c.set(t,null),s=s.getElementsByTagName(t),d=0;d<s.length;d++){var m=s[d];if(!(m[Fi]||m[dn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var A=c.get(E);A?A.push(m):c.set(E,[m])}}return c}function h0(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function HS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function d0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ko=null;function VS(){}function GS(t,i,s){if(Ko===null)throw Error(a(475));var c=Ko;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=Tr(s.href),m=t.querySelector(Yo(d));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(c.count++,c=Uc.bind(c),t.then(c,c)),i.state.loading|=4,i.instance=m,ln(m);return}m=t.ownerDocument||t,s=c0(s),(d=xi.get(d))&&Dh(s,d),m=m.createElement("link"),ln(m);var E=m;E._p=new Promise(function(A,z){E.onload=A,E.onerror=z}),Un(m,"link",s),i.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(c.count++,i=Uc.bind(c),t.addEventListener("load",i),t.addEventListener("error",i))}}function kS(){if(Ko===null)throw Error(a(475));var t=Ko;return t.stylesheets&&t.count===0&&Uh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Uh(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Uc(){if(this.count--,this.count===0){if(this.stylesheets)Uh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nc=null;function Uh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nc=new Map,i.forEach(XS,t),Nc=null,Uc.call(t))}function XS(t,i){if(!(i.state.loading&4)){var s=Nc.get(t);if(s)var c=s.get(null);else{s=new Map,Nc.set(t,s);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var E=d[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),c=E)}c&&s.set(null,c)}d=i.instance,E=d.getAttribute("data-precedence"),m=s.get(E)||c,m===c&&s.set(null,d),s.set(E,d),this.count++,c=Uc.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),i.state.loading|=4}}var Zo={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function WS(t,i,s,c,d,m,E,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function p0(t,i,s,c,d,m,E,A,z,te,de,ve){return t=new WS(t,i,s,E,A,z,te,ve),i=1,m===!0&&(i|=24),m=ai(3,null,null,i),t.current=m,m.stateNode=t,i=df(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:s,cache:i},_f(m),t}function m0(t){return t?(t=nr,t):nr}function g0(t,i,s,c,d,m){d=m0(d),c.context===null?c.context=d:c.pendingContext=d,c=Pa(i),c.payload={element:s},m=m===void 0?null:m,m!==null&&(c.callback=m),s=Ia(t,c,i),s!==null&&(ci(s,t,i),Ao(s,t,i))}function _0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Nh(t,i){_0(t,i),(t=t.alternate)&&_0(t,i)}function v0(t){if(t.tag===13){var i=tr(t,67108864);i!==null&&ci(i,t,67108864),Nh(t,67108864)}}var Oc=!0;function qS(t,i,s,c){var d=O.T;O.T=null;var m=K.p;try{K.p=2,Oh(t,i,s,c)}finally{K.p=m,O.T=d}}function YS(t,i,s,c){var d=O.T;O.T=null;var m=K.p;try{K.p=8,Oh(t,i,s,c)}finally{K.p=m,O.T=d}}function Oh(t,i,s,c){if(Oc){var d=Ph(c);if(d===null)Sh(t,i,c,Pc,s),x0(t,c);else if(KS(d,t,i,s,c))c.stopPropagation();else if(x0(t,c),i&4&&-1<jS.indexOf(t)){for(;d!==null;){var m=Da(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ke(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var z=1<<31-Pe(E);A.entanglements[1]|=z,E&=~z}Xi(m),(Nt&6)===0&&(vc=Oe()+500,ko(0))}}break;case 13:A=tr(m,2),A!==null&&ci(A,m,2),xc(),Nh(m,2)}if(m=Ph(c),m===null&&Sh(t,i,c,Pc,s),m===d)break;d=m}d!==null&&c.stopPropagation()}else Sh(t,i,c,null,s)}}function Ph(t){return t=Fu(t),Ih(t)}var Pc=null;function Ih(t){if(Pc=null,t=na(t),t!==null){var i=l(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Pc=t,null}function y0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wt()){case Ve:return 2;case ot:return 8;case Zt:case Qt:return 32;case P:return 268435456;default:return 32}default:return 32}}var Bh=!1,Ka=null,Za=null,Qa=null,Qo=new Map,Jo=new Map,Ja=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(t,i){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(i.pointerId)}}function $o(t,i,s,c,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Da(i),i!==null&&v0(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function KS(t,i,s,c,d){switch(i){case"focusin":return Ka=$o(Ka,t,i,s,c,d),!0;case"dragenter":return Za=$o(Za,t,i,s,c,d),!0;case"mouseover":return Qa=$o(Qa,t,i,s,c,d),!0;case"pointerover":var m=d.pointerId;return Qo.set(m,$o(Qo.get(m)||null,t,i,s,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Jo.set(m,$o(Jo.get(m)||null,t,i,s,c,d)),!0}return!1}function S0(t){var i=na(t.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Ti(t.priority,function(){if(s.tag===13){var c=li();c=st(c);var d=tr(s,c);d!==null&&ci(d,s,c),Nh(s,c)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ic(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ph(t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);zu=c,s.target.dispatchEvent(c),zu=null}else return i=Da(s),i!==null&&v0(i),t.blockedOn=s,!1;i.shift()}return!0}function M0(t,i,s){Ic(t)&&s.delete(i)}function ZS(){Bh=!1,Ka!==null&&Ic(Ka)&&(Ka=null),Za!==null&&Ic(Za)&&(Za=null),Qa!==null&&Ic(Qa)&&(Qa=null),Qo.forEach(M0),Jo.forEach(M0)}function Bc(t,i){t.blockedOn===i&&(t.blockedOn=null,Bh||(Bh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ZS)))}var zc=null;function E0(t){zc!==t&&(zc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var i=0;i<t.length;i+=3){var s=t[i],c=t[i+1],d=t[i+2];if(typeof c!="function"){if(Ih(c||s)===null)continue;break}var m=Da(s);m!==null&&(t.splice(i,3),i-=3,If(m,{pending:!0,data:d,method:s.method,action:c},c,d))}}))}function el(t){function i(z){return Bc(z,t)}Ka!==null&&Bc(Ka,t),Za!==null&&Bc(Za,t),Qa!==null&&Bc(Qa,t),Qo.forEach(i),Jo.forEach(i);for(var s=0;s<Ja.length;s++){var c=Ja[s];c.blockedOn===t&&(c.blockedOn=null)}for(;0<Ja.length&&(s=Ja[0],s.blockedOn===null);)S0(s),s.blockedOn===null&&Ja.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var d=s[c],m=s[c+1],E=d[tn]||null;if(typeof m=="function")E||E0(s);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(d=m,E=m[tn]||null)A=E.formAction;else if(Ih(d)!==null)continue}else A=E.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),E0(s)}}}function zh(t){this._internalRoot=t}Fc.prototype.render=zh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,c=li();g0(s,c,t,i,null,null)},Fc.prototype.unmount=zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;g0(t.current,2,null,t,null,null),xc(),i[zi]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var i=At();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Ja.length&&i!==0&&i<Ja[s].priority;s++);Ja.splice(s,0,t),s===0&&S0(t)}};var T0=e.version;if(T0!=="19.1.1")throw Error(a(527,T0,"19.1.1"));K.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var QS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{fe=Hc.inject(QS),_e=Hc}catch{}}return nl.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,c="",d=Hg,m=Vg,E=Gg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=p0(t,1,!1,null,null,s,c,d,m,E,A,null),t[zi]=i.current,xh(t),new zh(i)},nl.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var c=!1,d="",m=Hg,E=Vg,A=Gg,z=null,te=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(z=s.unstable_transitionCallbacks),s.formState!==void 0&&(te=s.formState)),i=p0(t,1,!0,i,s??null,c,d,m,E,A,z,te),i.context=m0(null),s=i.current,c=li(),c=st(c),d=Pa(c),d.callback=null,Ia(s,d,c),s=c,i.current.lanes=s,Ie(i,s),Xi(i),t[zi]=i.current,xh(t),new Fc(i)},nl.version="19.1.1",nl}var O0;function oM(){if(O0)return Vh.exports;O0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vh.exports=rM(),Vh.exports}var lM=oM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="180",Xr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cM=0,P0=1,uM=2,ry=1,fM=2,Ea=3,wa=0,Vn=1,Yi=2,fs=0,Hs=1,Eu=2,I0=3,B0=4,hM=5,zs=100,dM=101,pM=102,mM=103,gM=104,_M=200,vM=201,yM=202,xM=203,Nd=204,Od=205,SM=206,MM=207,EM=208,TM=209,bM=210,AM=211,RM=212,wM=213,CM=214,Pd=0,Id=1,Bd=2,Yr=3,zd=4,Fd=5,Hd=6,Vd=7,oy=0,DM=1,LM=2,hs=0,UM=1,Rp=2,NM=3,ly=4,OM=5,PM=6,IM=7,z0="attached",BM="detached",cy=300,jr=301,Kr=302,Tu=303,Gd=304,Du=306,Zr=1e3,ji=1001,bu=1002,Kn=1003,uy=1004,pl=1005,Rn=1006,_u=1007,Ki=1008,Ji=1009,fy=1010,hy=1011,yl=1012,wp=1013,Vs=1014,ni=1015,ba=1016,Cp=1017,Dp=1018,xl=1020,dy=35902,py=35899,my=1021,gy=1022,Ei=1023,Sl=1026,Ml=1027,Lp=1028,Up=1029,_y=1030,Np=1031,Op=1033,vu=33776,yu=33777,xu=33778,Su=33779,kd=35840,Xd=35841,Wd=35842,qd=35843,Yd=36196,jd=37492,Kd=37496,Zd=37808,Qd=37809,Jd=37810,$d=37811,ep=37812,tp=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,hp=36495,dp=36283,pp=36284,mp=36285,gp=36286,El=2300,Tl=2301,Wh=2302,F0=2400,H0=2401,V0=2402,zM=2500,FM=0,vy=1,_p=2,HM=3200,VM=3201,yy=0,GM=1,ls="",Nn="srgb",Gn="srgb-linear",Au="linear",Vt="srgb",Ar=7680,G0=519,kM=512,XM=513,WM=514,xy=515,qM=516,YM=517,jM=518,KM=519,vp=35044,k0="300 es",Zi=2e3,Ru=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let X0=1234567;const gl=Math.PI/180,Qr=180/Math.PI;function Oi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function ut(o,e,n){return Math.max(e,Math.min(n,o))}function Pp(o,e){return(o%e+e)%e}function ZM(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function QM(o,e,n){return o!==e?(n-o)/(e-o):0}function _l(o,e,n){return(1-n)*o+n*e}function JM(o,e,n,a){return _l(o,e,1-Math.exp(-n*a))}function $M(o,e=1){return e-Math.abs(Pp(o,e*2)-e)}function eE(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function tE(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function nE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function iE(o,e){return o+Math.random()*(e-o)}function aE(o){return o*(.5-Math.random())}function sE(o){o!==void 0&&(X0=o);let e=X0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rE(o){return o*gl}function oE(o){return o*Qr}function lE(o){return(o&o-1)===0&&o!==0}function cE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function uE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function fE(o,e,n,a,r){const l=Math.cos,u=Math.sin,f=l(n/2),p=u(n/2),h=l((e+a)/2),g=u((e+a)/2),_=l((e-a)/2),v=u((e-a)/2),x=l((a-e)/2),M=u((a-e)/2);switch(r){case"XYX":o.set(f*g,p*_,p*v,f*h);break;case"YZY":o.set(p*v,f*g,p*_,f*h);break;case"ZXZ":o.set(p*_,p*v,f*g,f*h);break;case"XZX":o.set(f*g,p*M,p*x,f*h);break;case"YXY":o.set(p*x,f*g,p*M,f*h);break;case"ZYZ":o.set(p*M,p*x,f*g,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ui(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const jn={DEG2RAD:gl,RAD2DEG:Qr,generateUUID:Oi,clamp:ut,euclideanModulo:Pp,mapLinear:ZM,inverseLerp:QM,lerp:_l,damp:JM,pingpong:$M,smoothstep:eE,smootherstep:tE,randInt:nE,randFloat:iE,randFloatSpread:aE,seededRandom:sE,degToRad:rE,radToDeg:oE,isPowerOfTwo:lE,ceilPowerOfTwo:cE,floorPowerOfTwo:uE,setQuaternionFromProperEuler:fE,normalize:Pt,denormalize:Ui};class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ut(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(ut(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*r+e.x,this.y=l*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $i{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,l,u,f){let p=a[r+0],h=a[r+1],g=a[r+2],_=a[r+3];const v=l[u+0],x=l[u+1],M=l[u+2],T=l[u+3];if(f===0){e[n+0]=p,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(f===1){e[n+0]=v,e[n+1]=x,e[n+2]=M,e[n+3]=T;return}if(_!==T||p!==v||h!==x||g!==M){let S=1-f;const y=p*v+h*x+g*M+_*T,N=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const I=Math.sqrt(U),F=Math.atan2(I,y*N);S=Math.sin(S*F)/I,f=Math.sin(f*F)/I}const D=f*N;if(p=p*S+v*D,h=h*S+x*D,g=g*S+M*D,_=_*S+T*D,S===1-f){const I=1/Math.sqrt(p*p+h*h+g*g+_*_);p*=I,h*=I,g*=I,_*=I}}e[n]=p,e[n+1]=h,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,r,l,u){const f=a[r],p=a[r+1],h=a[r+2],g=a[r+3],_=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[n]=f*M+g*_+p*x-h*v,e[n+1]=p*M+g*v+h*_-f*x,e[n+2]=h*M+g*x+f*v-p*_,e[n+3]=g*M-f*_-p*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(a/2),g=f(r/2),_=f(l/2),v=p(a/2),x=p(r/2),M=p(l/2);switch(u){case"XYZ":this._x=v*g*_+h*x*M,this._y=h*x*_-v*g*M,this._z=h*g*M+v*x*_,this._w=h*g*_-v*x*M;break;case"YXZ":this._x=v*g*_+h*x*M,this._y=h*x*_-v*g*M,this._z=h*g*M-v*x*_,this._w=h*g*_+v*x*M;break;case"ZXY":this._x=v*g*_-h*x*M,this._y=h*x*_+v*g*M,this._z=h*g*M+v*x*_,this._w=h*g*_-v*x*M;break;case"ZYX":this._x=v*g*_-h*x*M,this._y=h*x*_+v*g*M,this._z=h*g*M-v*x*_,this._w=h*g*_+v*x*M;break;case"YZX":this._x=v*g*_+h*x*M,this._y=h*x*_+v*g*M,this._z=h*g*M-v*x*_,this._w=h*g*_-v*x*M;break;case"XZY":this._x=v*g*_-h*x*M,this._y=h*x*_-v*g*M,this._z=h*g*M+v*x*_,this._w=h*g*_+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],l=n[8],u=n[1],f=n[5],p=n[9],h=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(l-h)*x,this._z=(u-r)*x}else if(a>f&&a>_){const x=2*Math.sqrt(1+a-f-_);this._w=(g-p)/x,this._x=.25*x,this._y=(r+u)/x,this._z=(l+h)/x}else if(f>_){const x=2*Math.sqrt(1+f-a-_);this._w=(l-h)/x,this._x=(r+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-f);this._w=(u-r)/x,this._x=(l+h)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,l=e._z,u=e._w,f=n._x,p=n._y,h=n._z,g=n._w;return this._x=a*g+u*f+r*h-l*p,this._y=r*g+u*p+l*f-a*h,this._z=l*g+u*h+a*p-r*f,this._w=u*g-a*f-r*p-l*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,r=this._y,l=this._z,u=this._w;let f=u*e._w+a*e._x+r*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=a,this._y=r,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*r+n*this._y,this._z=x*l+n*this._z,this.normalize(),this}const h=Math.sqrt(p),g=Math.atan2(h,f),_=Math.sin((1-n)*g)/h,v=Math.sin(n*g)/h;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,a=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(W0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(W0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,l=e.elements,u=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,l=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*r-f*a),g=2*(f*n-l*r),_=2*(l*a-u*n);return this.x=n+p*h+u*_-f*g,this.y=a+p*g+f*h-l*_,this.z=r+p*_+l*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this.z=ut(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this.z=ut(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ut(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,l=e.z,u=n.x,f=n.y,p=n.z;return this.x=r*p-l*f,this.y=l*u-a*p,this.z=a*f-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(ut(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qh=new k,W0=new $i;class dt{constructor(e,n,a,r,l,u,f,p,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,l,u,f,p,h)}set(e,n,a,r,l,u,f,p,h){const g=this.elements;return g[0]=e,g[1]=r,g[2]=f,g[3]=n,g[4]=l,g[5]=p,g[6]=a,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,l=this.elements,u=a[0],f=a[3],p=a[6],h=a[1],g=a[4],_=a[7],v=a[2],x=a[5],M=a[8],T=r[0],S=r[3],y=r[6],N=r[1],U=r[4],D=r[7],I=r[2],F=r[5],B=r[8];return l[0]=u*T+f*N+p*I,l[3]=u*S+f*U+p*F,l[6]=u*y+f*D+p*B,l[1]=h*T+g*N+_*I,l[4]=h*S+g*U+_*F,l[7]=h*y+g*D+_*B,l[2]=v*T+x*N+M*I,l[5]=v*S+x*U+M*F,l[8]=v*y+x*D+M*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8];return n*u*g-n*f*h-a*l*g+a*f*p+r*l*h-r*u*p}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8],_=g*u-f*h,v=f*p-g*l,x=h*l-u*p,M=n*_+a*v+r*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(r*h-g*a)*T,e[2]=(f*a-r*u)*T,e[3]=v*T,e[4]=(g*n-r*p)*T,e[5]=(r*l-f*n)*T,e[6]=x*T,e[7]=(a*p-h*n)*T,e[8]=(u*n-a*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(a*p,a*h,-a*(p*u+h*f)+u+e,-r*h,r*p,-r*(-h*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Yh.makeScale(e,n)),this}rotate(e){return this.premultiply(Yh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yh=new dt;function Sy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hE(){const o=bl("canvas");return o.style.display="block",o}const q0={};function Al(o){o in q0||(q0[o]=!0,console.warn(o))}function dE(o,e,n){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const Y0=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j0=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pE(){const o={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Vt&&(r.r=Ra(r.r),r.g=Ra(r.g),r.b=Ra(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Vt&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ls?Au:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return Al("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return Al("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Gn]:{primaries:e,whitePoint:a,transfer:Au,toXYZ:Y0,fromXYZ:j0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:a,transfer:Vt,toXYZ:Y0,fromXYZ:j0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),o}const bt=pE();function Ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Rr;class mE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Rr===void 0&&(Rr=bl("canvas")),Rr.width=e.width,Rr.height=e.height;const r=Rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Rr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=Ra(l[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ra(n[a]/255)*255):n[a]=Ra(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gE=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(jh(r[u].image)):l.push(jh(r[u]))}else l=jh(r);a.url=l}return n||(e.images[this.uuid]=a),a}}function jh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _E=0;const Kh=new k;class wn extends ks{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,a=ji,r=ji,l=Rn,u=Ki,f=Ei,p=Ji,h=wn.DEFAULT_ANISOTROPY,g=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Oi(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=cy;wn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,a=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,l;const p=e.elements,h=p[0],g=p[4],_=p[8],v=p[1],x=p[5],M=p[9],T=p[2],S=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(h+1)/2,D=(x+1)/2,I=(y+1)/2,F=(g+v)/4,B=(_+T)/4,V=(M+S)/4;return U>D&&U>I?U<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(U),r=F/a,l=B/a):D>I?D<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(D),a=F/r,l=V/r):I<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(I),a=B/l,r=V/l),this.set(a,r,l,n),this}let N=Math.sqrt((S-M)*(S-M)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(_-T)/N,this.z=(v-g)/N,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this.z=ut(this.z,e.z,n.z),this.w=ut(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this.z=ut(this.z,e,n),this.w=ut(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ut(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vE extends ks{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:a.depth},l=new wn(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ip(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends vE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class My extends wn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends wn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ci):Ci.fromBufferAttribute(l,u),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Vc.copy(a.boundingBox)),Vc.applyMatrix4(e.matrixWorld),this.union(Vc)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),Gc.subVectors(this.max,il),wr.subVectors(e.a,il),Cr.subVectors(e.b,il),Dr.subVectors(e.c,il),es.subVectors(Cr,wr),ts.subVectors(Dr,Cr),Ds.subVectors(wr,Dr);let n=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ds.z,Ds.y,es.z,0,-es.x,ts.z,0,-ts.x,Ds.z,0,-Ds.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ds.y,Ds.x,0];return!Zh(n,wr,Cr,Dr,Gc)||(n=[1,0,0,0,1,0,0,0,1],!Zh(n,wr,Cr,Dr,Gc))?!1:(kc.crossVectors(es,ts),n=[kc.x,kc.y,kc.z],Zh(n,wr,Cr,Dr,Gc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new k,new k,new k,new k,new k,new k,new k,new k],Ci=new k,Vc=new Ca,wr=new k,Cr=new k,Dr=new k,es=new k,ts=new k,Ds=new k,il=new k,Gc=new k,kc=new k,Ls=new k;function Zh(o,e,n,a,r){for(let l=0,u=o.length-3;l<=u;l+=3){Ls.fromArray(o,l);const f=r.x*Math.abs(Ls.x)+r.y*Math.abs(Ls.y)+r.z*Math.abs(Ls.z),p=e.dot(Ls),h=n.dot(Ls),g=a.dot(Ls);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const xE=new Ca,al=new k,Qh=new k;class ta{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):xE.setFromPoints(e).getCenter(a);let r=0;for(let l=0,u=e.length;l<u;l++)r=Math.max(r,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const n=al.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(al,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(Qh)),this.expandByPoint(al.copy(e.center).sub(Qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new k,Jh=new k,Xc=new k,ns=new k,$h=new k,Wc=new k,ed=new k;class Rl{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=va.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,n),va.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){Jh.copy(e).add(n).multiplyScalar(.5),Xc.copy(n).sub(e).normalize(),ns.copy(this.origin).sub(Jh);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Xc),f=ns.dot(this.direction),p=-ns.dot(Xc),h=ns.lengthSq(),g=Math.abs(1-u*u);let _,v,x,M;if(g>0)if(_=u*p-f,v=u*f-p,M=l*g,_>=0)if(v>=-M)if(v<=M){const T=1/g;_*=T,v*=T,x=_*(_+u*v+2*f)+v*(u*_+v+2*p)+h}else v=l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*p)+h;else v=-l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*p)+h;else v<=-M?(_=Math.max(0,-(-u*l+f)),v=_>0?-l:Math.min(Math.max(-l,-p),l),x=-_*_+v*(v+2*p)+h):v<=M?(_=0,v=Math.min(Math.max(-l,-p),l),x=v*(v+2*p)+h):(_=Math.max(0,-(u*l+f)),v=_>0?l:Math.min(Math.max(-l,-p),l),x=-_*_+v*(v+2*p)+h);else v=u>0?-l:l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Jh).addScaledVector(Xc,v),x}intersectSphere(e,n){va.subVectors(e.center,this.origin);const a=va.dot(this.direction),r=va.dot(va)-a*a,l=e.radius*e.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,l,u,f,p;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(a=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(a=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),_>=0?(f=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,n,a,r,l){$h.subVectors(n,e),Wc.subVectors(a,e),ed.crossVectors($h,Wc);let u=this.direction.dot(ed),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ns.subVectors(this.origin,e);const p=f*this.direction.dot(Wc.crossVectors(ns,Wc));if(p<0)return null;const h=f*this.direction.dot($h.cross(ns));if(h<0||p+h>u)return null;const g=-f*ns.dot(ed);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,a,r,l,u,f,p,h,g,_,v,x,M,T,S){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,l,u,f,p,h,g,_,v,x,M,T,S)}set(e,n,a,r,l,u,f,p,h,g,_,v,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=r,y[1]=l,y[5]=u,y[9]=f,y[13]=p,y[2]=h,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),l=1/Lr.setFromMatrixColumn(e,1).length(),u=1/Lr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,l=e.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(r),h=Math.sin(r),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*g,x=u*_,M=f*g,T=f*_;n[0]=p*g,n[4]=-p*_,n[8]=h,n[1]=x+M*h,n[5]=v-T*h,n[9]=-f*p,n[2]=T-v*h,n[6]=M+x*h,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,x=p*_,M=h*g,T=h*_;n[0]=v+T*f,n[4]=M*f-x,n[8]=u*h,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=x*f-M,n[6]=T+v*f,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,x=p*_,M=h*g,T=h*_;n[0]=v-T*f,n[4]=-u*_,n[8]=M+x*f,n[1]=x+M*f,n[5]=u*g,n[9]=T-v*f,n[2]=-u*h,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,x=u*_,M=f*g,T=f*_;n[0]=p*g,n[4]=M*h-x,n[8]=v*h+T,n[1]=p*_,n[5]=T*h+v,n[9]=x*h-M,n[2]=-h,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*h,M=f*p,T=f*h;n[0]=p*g,n[4]=T-v*_,n[8]=M*_+x,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-h*g,n[6]=x*_+M,n[10]=v-T*_}else if(e.order==="XZY"){const v=u*p,x=u*h,M=f*p,T=f*h;n[0]=p*g,n[4]=-_,n[8]=h*g,n[1]=v*_+T,n[5]=u*g,n[9]=x*_-M,n[2]=M*_-x,n[6]=f*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,ME)}lookAt(e,n,a){const r=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),is.crossVectors(a,ui),is.lengthSq()===0&&(Math.abs(a.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),is.crossVectors(a,ui)),is.normalize(),qc.crossVectors(ui,is),r[0]=is.x,r[4]=qc.x,r[8]=ui.x,r[1]=is.y,r[5]=qc.y,r[9]=ui.y,r[2]=is.z,r[6]=qc.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,l=this.elements,u=a[0],f=a[4],p=a[8],h=a[12],g=a[1],_=a[5],v=a[9],x=a[13],M=a[2],T=a[6],S=a[10],y=a[14],N=a[3],U=a[7],D=a[11],I=a[15],F=r[0],B=r[4],V=r[8],C=r[12],w=r[1],H=r[5],Y=r[9],ae=r[13],re=r[2],ie=r[6],O=r[10],K=r[14],q=r[3],ye=r[7],L=r[11],J=r[15];return l[0]=u*F+f*w+p*re+h*q,l[4]=u*B+f*H+p*ie+h*ye,l[8]=u*V+f*Y+p*O+h*L,l[12]=u*C+f*ae+p*K+h*J,l[1]=g*F+_*w+v*re+x*q,l[5]=g*B+_*H+v*ie+x*ye,l[9]=g*V+_*Y+v*O+x*L,l[13]=g*C+_*ae+v*K+x*J,l[2]=M*F+T*w+S*re+y*q,l[6]=M*B+T*H+S*ie+y*ye,l[10]=M*V+T*Y+S*O+y*L,l[14]=M*C+T*ae+S*K+y*J,l[3]=N*F+U*w+D*re+I*q,l[7]=N*B+U*H+D*ie+I*ye,l[11]=N*V+U*Y+D*O+I*L,l[15]=N*C+U*ae+D*K+I*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],l=e[12],u=e[1],f=e[5],p=e[9],h=e[13],g=e[2],_=e[6],v=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+l*p*_-r*h*_-l*f*v+a*h*v+r*f*x-a*p*x)+T*(+n*p*x-n*h*v+l*u*v-r*u*x+r*h*g-l*p*g)+S*(+n*h*_-n*f*x-l*u*_+a*u*x+l*f*g-a*h*g)+y*(-r*f*g-n*p*_+n*f*v+r*u*_-a*u*v+a*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8],_=e[9],v=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],N=_*S*h-T*v*h+T*p*x-f*S*x-_*p*y+f*v*y,U=M*v*h-g*S*h-M*p*x+u*S*x+g*p*y-u*v*y,D=g*T*h-M*_*h+M*f*x-u*T*x-g*f*y+u*_*y,I=M*_*p-g*T*p-M*f*v+u*T*v+g*f*S-u*_*S,F=n*N+a*U+r*D+l*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return e[0]=N*B,e[1]=(T*v*l-_*S*l-T*r*x+a*S*x+_*r*y-a*v*y)*B,e[2]=(f*S*l-T*p*l+T*r*h-a*S*h-f*r*y+a*p*y)*B,e[3]=(_*p*l-f*v*l-_*r*h+a*v*h+f*r*x-a*p*x)*B,e[4]=U*B,e[5]=(g*S*l-M*v*l+M*r*x-n*S*x-g*r*y+n*v*y)*B,e[6]=(M*p*l-u*S*l-M*r*h+n*S*h+u*r*y-n*p*y)*B,e[7]=(u*v*l-g*p*l+g*r*h-n*v*h-u*r*x+n*p*x)*B,e[8]=D*B,e[9]=(M*_*l-g*T*l-M*a*x+n*T*x+g*a*y-n*_*y)*B,e[10]=(u*T*l-M*f*l+M*a*h-n*T*h-u*a*y+n*f*y)*B,e[11]=(g*f*l-u*_*l-g*a*h+n*_*h+u*a*x-n*f*x)*B,e[12]=I*B,e[13]=(g*T*r-M*_*r+M*a*v-n*T*v-g*a*S+n*_*S)*B,e[14]=(M*f*r-u*T*r-M*a*p+n*T*p+u*a*S-n*f*S)*B,e[15]=(u*_*r-g*f*r+g*a*p-n*_*p-u*a*v+n*f*v)*B,this}scale(e){const n=this.elements,a=e.x,r=e.y,l=e.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,u=e.x,f=e.y,p=e.z,h=l*u,g=l*f;return this.set(h*u+a,h*f-r*p,h*p+r*f,0,h*f+r*p,g*f+a,g*p-r*u,0,h*p-r*f,g*p+r*u,l*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,l,u){return this.set(1,a,l,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,h=l+l,g=u+u,_=f+f,v=l*h,x=l*g,M=l*_,T=u*g,S=u*_,y=f*_,N=p*h,U=p*g,D=p*_,I=a.x,F=a.y,B=a.z;return r[0]=(1-(T+y))*I,r[1]=(x+D)*I,r[2]=(M-U)*I,r[3]=0,r[4]=(x-D)*F,r[5]=(1-(v+y))*F,r[6]=(S+N)*F,r[7]=0,r[8]=(M+U)*B,r[9]=(S-N)*B,r[10]=(1-(v+T))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let l=Lr.set(r[0],r[1],r[2]).length();const u=Lr.set(r[4],r[5],r[6]).length(),f=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),e.x=r[12],e.y=r[13],e.z=r[14],Di.copy(this);const h=1/l,g=1/u,_=1/f;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=_,Di.elements[9]*=_,Di.elements[10]*=_,n.setFromRotationMatrix(Di),a.x=l,a.y=u,a.z=f,this}makePerspective(e,n,a,r,l,u,f=Zi,p=!1){const h=this.elements,g=2*l/(n-e),_=2*l/(a-r),v=(n+e)/(n-e),x=(a+r)/(a-r);let M,T;if(p)M=l/(u-l),T=u*l/(u-l);else if(f===Zi)M=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(f===Ru)M=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,r,l,u,f=Zi,p=!1){const h=this.elements,g=2/(n-e),_=2/(a-r),v=-(n+e)/(n-e),x=-(a+r)/(a-r);let M,T;if(p)M=1/(u-l),T=u/(u-l);else if(f===Zi)M=-2/(u-l),T=-(u+l)/(u-l);else if(f===Ru)M=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Lr=new k,Di=new pt,SE=new k(0,0,0),ME=new k(1,1,1),is=new k,qc=new k,ui=new k,K0=new pt,Z0=new $i;class ea{constructor(e=0,n=0,a=0,r=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,l=r[0],u=r[4],f=r[8],p=r[1],h=r[5],g=r[9],_=r[2],v=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ut(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-ut(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return K0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(K0,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class Ey{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EE=0;const Q0=new k,Ur=new $i,ya=new pt,Yc=new k,sl=new k,TE=new k,bE=new $i,J0=new k(1,0,0),$0=new k(0,1,0),ev=new k(0,0,1),tv={type:"added"},AE={type:"removed"},Nr={type:"childadded",child:null},td={type:"childremoved",child:null};class $t extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new k,n=new ea,a=new $i,r=new k(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new dt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ey,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis($0,e)}rotateZ(e){return this.rotateOnAxis(ev,e)}translateOnAxis(e,n){return Q0.copy(e).applyQuaternion(this.quaternion),this.position.add(Q0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis($0,e)}translateZ(e){return this.translateOnAxis(ev,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Yc.copy(e):Yc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(sl,Yc,this.up):ya.lookAt(Yc,sl,this.up),this.quaternion.setFromRotationMatrix(ya),r&&(ya.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ya),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tv),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(AE),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tv),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,TE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,bE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));r.material=f}else r.material=l(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}$t.DEFAULT_UP=new k(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new k,xa=new k,nd=new k,Sa=new k,Or=new k,Pr=new k,nv=new k,id=new k,ad=new k,sd=new k,rd=new Lt,od=new Lt,ld=new Lt;class Ni{constructor(e=new k,n=new k,a=new k){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Li.subVectors(e,n),r.cross(Li);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(e,n,a,r,l){Li.subVectors(r,n),xa.subVectors(a,n),nd.subVectors(e,n);const u=Li.dot(Li),f=Li.dot(xa),p=Li.dot(nd),h=xa.dot(xa),g=xa.dot(nd),_=u*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(h*p-f*g)*v,M=(u*g-f*p)*v;return l.set(1-x-M,M,x)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,n,a,r,l,u,f,p){return this.getBarycoord(e,n,a,r,Sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Sa.x),p.addScaledVector(u,Sa.y),p.addScaledVector(f,Sa.z),p)}static getInterpolatedAttribute(e,n,a,r,l,u){return rd.setScalar(0),od.setScalar(0),ld.setScalar(0),rd.fromBufferAttribute(e,n),od.fromBufferAttribute(e,a),ld.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(rd,l.x),u.addScaledVector(od,l.y),u.addScaledVector(ld,l.z),u}static isFrontFacing(e,n,a,r){return Li.subVectors(a,n),xa.subVectors(e,n),Li.cross(xa).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Li.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,l){return Ni.getInterpolation(e,this.a,this.b,this.c,n,a,r,l)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,l=this.c;let u,f;Or.subVectors(r,a),Pr.subVectors(l,a),id.subVectors(e,a);const p=Or.dot(id),h=Pr.dot(id);if(p<=0&&h<=0)return n.copy(a);ad.subVectors(e,r);const g=Or.dot(ad),_=Pr.dot(ad);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*h;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Or,u);sd.subVectors(e,l);const x=Or.dot(sd),M=Pr.dot(sd);if(M>=0&&x<=M)return n.copy(l);const T=x*h-p*M;if(T<=0&&h>=0&&M<=0)return f=h/(h-M),n.copy(a).addScaledVector(Pr,f);const S=g*M-x*_;if(S<=0&&_-g>=0&&x-M>=0)return nv.subVectors(l,r),f=(_-g)/(_-g+(x-M)),n.copy(r).addScaledVector(nv,f);const y=1/(S+T+v);return u=T*y,f=v*y,n.copy(a).addScaledVector(Or,u).addScaledVector(Pr,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},jc={h:0,s:0,l:0};function cd(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class ct{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=bt.workingColorSpace){return this.r=e,this.g=n,this.b=a,bt.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=bt.workingColorSpace){if(e=Pp(e,1),n=ut(n,0,1),a=ut(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=cd(u,l,e+1/3),this.g=cd(u,l,e),this.b=cd(u,l,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const a=Ty[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return bt.workingToColorSpace(Hn.copy(this),e),Math.round(ut(Hn.r*255,0,255))*65536+Math.round(ut(Hn.g*255,0,255))*256+Math.round(ut(Hn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(Hn.copy(this),n);const a=Hn.r,r=Hn.g,l=Hn.b,u=Math.max(a,r,l),f=Math.min(a,r,l);let p,h;const g=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=g<=.5?_/(u+f):_/(2-u-f),u){case a:p=(r-l)/_+(r<l?6:0);break;case r:p=(l-a)/_+2;break;case l:p=(a-r)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(Hn.copy(this),n),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Nn){bt.workingToColorSpace(Hn.copy(this),e);const n=Hn.r,a=Hn.g,r=Hn.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(as),this.setHSL(as.h+e,as.s+n,as.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(as),e.getHSL(jc);const a=_l(as.h,jc.h,n),r=_l(as.s,jc.s,n),l=_l(as.l,jc.l,n);return this.setHSL(a,r,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,l=e.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ct;ct.NAMES=Ty;let RE=0;class Qi extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Hs,this.side=wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Od,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(a.blending=this.blending),this.side!==wa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Nd&&(a.blendSrc=this.blendSrc),this.blendDst!==Od&&(a.blendDst=this.blendDst),this.blendEquation!==zs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=r(e.textures),u=r(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cs extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=oy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ta=wE();function wE(){const o=new ArrayBuffer(4),e=new Float32Array(o),n=new Uint32Array(o),a=new Uint32Array(512),r=new Uint32Array(512);for(let p=0;p<256;++p){const h=p-127;h<-27?(a[p]=0,a[p|256]=32768,r[p]=24,r[p|256]=24):h<-14?(a[p]=1024>>-h-14,a[p|256]=1024>>-h-14|32768,r[p]=-h-1,r[p|256]=-h-1):h<=15?(a[p]=h+15<<10,a[p|256]=h+15<<10|32768,r[p]=13,r[p|256]=13):h<128?(a[p]=31744,a[p|256]=64512,r[p]=24,r[p|256]=24):(a[p]=31744,a[p|256]=64512,r[p]=13,r[p|256]=13)}const l=new Uint32Array(2048),u=new Uint32Array(64),f=new Uint32Array(64);for(let p=1;p<1024;++p){let h=p<<13,g=0;for(;(h&8388608)===0;)h<<=1,g-=8388608;h&=-8388609,g+=947912704,l[p]=h|g}for(let p=1024;p<2048;++p)l[p]=939524096+(p-1024<<13);for(let p=1;p<31;++p)u[p]=p<<23;u[31]=1199570944,u[32]=2147483648;for(let p=33;p<63;++p)u[p]=2147483648+(p-32<<23);u[63]=3347054592;for(let p=1;p<64;++p)p!==32&&(f[p]=1024);return{floatView:e,uint32View:n,baseTable:a,shiftTable:r,mantissaTable:l,exponentTable:u,offsetTable:f}}function CE(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=ut(o,-65504,65504),Ta.floatView[0]=o;const e=Ta.uint32View[0],n=e>>23&511;return Ta.baseTable[n]+((e&8388607)>>Ta.shiftTable[n])}function DE(o){const e=o>>10;return Ta.uint32View[0]=Ta.mantissaTable[Ta.offsetTable[e]+(o&1023)]+Ta.exponentTable[e],Ta.floatView[0]}class Kc{static toHalfFloat(e){return CE(e)}static fromHalfFloat(e){return DE(e)}}const fn=new k,Zc=new at;let LE=0;class _n{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=vp,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Zc.fromBufferAttribute(this,n),Zc.applyMatrix3(e),this.setXY(n,Zc.x,Zc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ui(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Pt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ui(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ui(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ui(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ui(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array),r=Pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,l){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array),r=Pt(r,this.array),l=Pt(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),e}}class by extends _n{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Ay extends _n{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class hi extends _n{constructor(e,n,a){super(new Float32Array(e),n,a)}}let UE=0;const Si=new pt,ud=new $t,Ir=new k,fi=new Ca,rl=new Ca,Tn=new k;class di extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sy(e)?Ay:by)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new dt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,n,a){return Si.makeTranslation(e,n,a),this.applyMatrix4(Si),this}scale(e,n,a){return Si.makeScale(e,n,a),this.applyMatrix4(Si),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new hi(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];fi.setFromBufferAttribute(l),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const a=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];rl.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(fi.min,rl.min),fi.expandByPoint(Tn),Tn.addVectors(fi.max,rl.max),fi.expandByPoint(Tn)):(fi.expandByPoint(rl.min),fi.expandByPoint(rl.max))}fi.getCenter(a);let r=0;for(let l=0,u=e.count;l<u;l++)Tn.fromBufferAttribute(e,l),r=Math.max(r,a.distanceToSquared(Tn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)Tn.fromBufferAttribute(f,h),p&&(Ir.fromBufferAttribute(e,h),Tn.add(Ir)),r=Math.max(r,a.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<a.count;V++)f[V]=new k,p[V]=new k;const h=new k,g=new k,_=new k,v=new at,x=new at,M=new at,T=new k,S=new k;function y(V,C,w){h.fromBufferAttribute(a,V),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),v.fromBufferAttribute(l,V),x.fromBufferAttribute(l,C),M.fromBufferAttribute(l,w),g.sub(h),_.sub(h),x.sub(v),M.sub(v);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(H),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(H),f[V].add(T),f[C].add(T),f[w].add(T),p[V].add(S),p[C].add(S),p[w].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let V=0,C=N.length;V<C;++V){const w=N[V],H=w.start,Y=w.count;for(let ae=H,re=H+Y;ae<re;ae+=3)y(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const U=new k,D=new k,I=new k,F=new k;function B(V){I.fromBufferAttribute(r,V),F.copy(I);const C=f[V];U.copy(C),U.sub(I.multiplyScalar(I.dot(C))).normalize(),D.crossVectors(F,C);const H=D.dot(p[V])<0?-1:1;u.setXYZW(V,U.x,U.y,U.z,H)}for(let V=0,C=N.length;V<C;++V){const w=N[V],H=w.start,Y=w.count;for(let ae=H,re=H+Y;ae<re;ae+=3)B(e.getX(ae+0)),B(e.getX(ae+1)),B(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const r=new k,l=new k,u=new k,f=new k,p=new k,h=new k,g=new k,_=new k;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,T),h.fromBufferAttribute(a,S),f.add(g),p.add(g),h.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=n.count;v<x;v+=3)r.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(f,p){const h=f.array,g=f.itemSize,_=f.normalized,v=new h.constructor(p.length*g);let x=0,M=0;for(let T=0,S=p.length;T<S;T++){f.isInterleavedBufferAttribute?x=p[T]*f.data.stride+f.offset:x=p[T]*g;for(let y=0;y<g;y++)v[M++]=h[x++]}return new _n(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],h=e(p,a);n.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let g=0,_=h.length;g<_;g++){const v=h[g],x=e(v,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const h=a[p];e.data.attributes[p]=h.toJSON(e.data)}const r={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let _=0,v=h.length;_<v;_++){const x=h[_];g.push(x.toJSON(e.data))}g.length>0&&(r[p]=g,l=!0)}l&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const h in r){const g=r[h];this.setAttribute(h,g.clone(n))}const l=e.morphAttributes;for(const h in l){const g=[],_=l[h];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iv=new pt,Us=new Rl,Qc=new ta,av=new k,Jc=new k,$c=new k,eu=new k,fd=new k,tu=new k,sv=new k,nu=new k;class On extends $t{constructor(e=new di,n=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(l&&f){tu.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const g=f[p],_=l[p];g!==0&&(fd.fromBufferAttribute(_,e),u?tu.addScaledVector(fd,g):tu.addScaledVector(fd.sub(n),g))}n.add(tu)}return n}raycast(e,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Qc.copy(a.boundingSphere),Qc.applyMatrix4(l),Us.copy(e.ray).recast(e.near),!(Qc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Qc,av)===null||Us.origin.distanceToSquared(av)>(e.far-e.near)**2))&&(iv.copy(l).invert(),Us.copy(e.ray).applyMatrix4(iv),!(a.boundingBox!==null&&Us.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Us)))}_computeIntersections(e,n,a){let r;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],N=Math.max(S.start,x.start),U=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let D=N,I=U;D<I;D+=3){const F=f.getX(D),B=f.getX(D+1),V=f.getX(D+2);r=iu(this,y,e,a,h,g,_,F,B,V),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const N=f.getX(S),U=f.getX(S+1),D=f.getX(S+2);r=iu(this,u,e,a,h,g,_,N,U,D),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],N=Math.max(S.start,x.start),U=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let D=N,I=U;D<I;D+=3){const F=D,B=D+1,V=D+2;r=iu(this,y,e,a,h,g,_,F,B,V),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const N=S,U=S+1,D=S+2;r=iu(this,u,e,a,h,g,_,N,U,D),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function NE(o,e,n,a,r,l,u,f){let p;if(e.side===Vn?p=a.intersectTriangle(u,l,r,!0,f):p=a.intersectTriangle(r,l,u,e.side===wa,f),p===null)return null;nu.copy(f),nu.applyMatrix4(o.matrixWorld);const h=n.ray.origin.distanceTo(nu);return h<n.near||h>n.far?null:{distance:h,point:nu.clone(),object:o}}function iu(o,e,n,a,r,l,u,f,p,h){o.getVertexPosition(f,Jc),o.getVertexPosition(p,$c),o.getVertexPosition(h,eu);const g=NE(o,e,n,a,Jc,$c,eu,sv);if(g){const _=new k;Ni.getBarycoord(sv,Jc,$c,eu,_),r&&(g.uv=Ni.getInterpolatedAttribute(r,f,p,h,_,new at)),l&&(g.uv1=Ni.getInterpolatedAttribute(l,f,p,h,_,new at)),u&&(g.normal=Ni.getInterpolatedAttribute(u,f,p,h,_,new k),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new k,materialIndex:0};Ni.getNormal(Jc,$c,eu,v.normal),g.face=v,g.barycoord=_}return g}class no extends di{constructor(e=1,n=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],g=[],_=[];let v=0,x=0;M("z","y","x",-1,-1,a,n,e,u,l,0),M("z","y","x",1,-1,a,n,-e,u,l,1),M("x","z","y",1,1,e,a,n,r,u,2),M("x","z","y",1,-1,e,a,-n,r,u,3),M("x","y","z",1,-1,e,n,a,r,l,4),M("x","y","z",-1,-1,e,n,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new hi(h,3)),this.setAttribute("normal",new hi(g,3)),this.setAttribute("uv",new hi(_,2));function M(T,S,y,N,U,D,I,F,B,V,C){const w=D/B,H=I/V,Y=D/2,ae=I/2,re=F/2,ie=B+1,O=V+1;let K=0,q=0;const ye=new k;for(let L=0;L<O;L++){const J=L*H-ae;for(let he=0;he<ie;he++){const ge=he*w-Y;ye[T]=ge*N,ye[S]=J*U,ye[y]=re,h.push(ye.x,ye.y,ye.z),ye[T]=0,ye[S]=0,ye[y]=F>0?1:-1,g.push(ye.x,ye.y,ye.z),_.push(he/B),_.push(1-L/V),K+=1}}for(let L=0;L<V;L++)for(let J=0;J<B;J++){const he=v+J+ie*L,ge=v+J+ie*(L+1),Ae=v+(J+1)+ie*(L+1),Be=v+(J+1)+ie*L;p.push(he,ge,Be),p.push(ge,Ae,Be),q+=6}f.addGroup(x,q,C),x+=q,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function Yn(o){const e={};for(let n=0;n<o.length;n++){const a=Jr(o[n]);for(const r in a)e[r]=a[r]}return e}function OE(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Ry(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const wy={clone:Jr,merge:Yn};var PE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Cy extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new k,rv=new at,ov=new at;class An extends Cy{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,n){return this.getViewBounds(e,rv,ov),n.subVectors(ov,rv)}setViewOffset(e,n,a,r,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gl*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*r/p,n-=u.offsetY*a/h,r*=u.width/p,a*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,zr=1;class BE extends $t{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Br,zr,e,n);r.layers=this.layers,this.add(r);const l=new An(Br,zr,e,n);l.layers=this.layers,this.add(l);const u=new An(Br,zr,e,n);u.layers=this.layers,this.add(u);const f=new An(Br,zr,e,n);f.layers=this.layers,this.add(f);const p=new An(Br,zr,e,n);p.layers=this.layers,this.add(p);const h=new An(Br,zr,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,l,u,f,p]=n;for(const h of n)this.remove(h);if(e===Zi)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ru)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,l),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,f),e.setRenderTarget(a,3,r),e.render(n,p),e.setRenderTarget(a,4,r),e.render(n,h),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,r),e.render(n,g),e.setRenderTarget(_,v,x),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Dy extends wn{constructor(e=[],n=jr,a,r,l,u,f,p,h,g){super(e,n,a,r,l,u,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zE extends Gs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new Dy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new no(5,5,5),l=new Pi({name:"CubemapFromEquirect",uniforms:Jr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Vn,blending:fs});l.uniforms.tEquirect.value=n;const u=new On(r,l),f=n.minFilter;return n.minFilter===Ki&&(n.minFilter=Rn),new BE(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(l)}}class us extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FE={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,a),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(FE)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new us;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class Lu extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class HE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=vp,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,l=this.stride;r<l;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new k;class Bp{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.applyMatrix4(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.applyNormalMatrix(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.transformDirection(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Ui(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Pt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ui(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ui(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ui(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ui(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array),r=Pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array),r=Pt(r,this.array),l=Pt(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[r+l])}return new _n(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[r+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lv=new k,cv=new Lt,uv=new Lt,VE=new k,fv=new pt,au=new k,dd=new ta,hv=new pt,pd=new Rl;class GE extends On{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=z0,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ca),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,au),this.boundingBox.expandByPoint(au)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ta),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,au),this.boundingSphere.expandByPoint(au)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dd.copy(this.boundingSphere),dd.applyMatrix4(r),e.ray.intersectsSphere(dd)!==!1&&(hv.copy(r).invert(),pd.copy(e.ray).applyMatrix4(hv),!(this.boundingBox!==null&&pd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,pd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===z0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===BM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;cv.fromBufferAttribute(r.attributes.skinIndex,e),uv.fromBufferAttribute(r.attributes.skinWeight,e),lv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let l=0;l<4;l++){const u=uv.getComponent(l);if(u!==0){const f=cv.getComponent(l);fv.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),n.addScaledVector(VE.copy(lv).applyMatrix4(fv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Ly extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zp extends wn{constructor(e=null,n=1,a=1,r,l,u,f,p,h=Kn,g=Kn,_,v){super(null,u,f,p,h,g,r,l,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dv=new pt,kE=new pt;class Fp{constructor(e=[],n=[]){this.uuid=Oi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new pt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const f=e[l]?e[l].matrixWorld:kE;dv.multiplyMatrices(f,n[l]),dv.toArray(a,l*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Fp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new zp(n,e,e,Ei,ni);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const l=e.bones[a];let u=n[l];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),u=new Ly),this.bones.push(u),this.boneInverses.push(new pt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,l=n.length;r<l;r++){const u=n[r];e.bones.push(u.uuid);const f=a[r];e.boneInverses.push(f.toArray())}return e}}class yp extends _n{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fr=new pt,pv=new pt,su=[],mv=new Ca,XE=new pt,ol=new On,ll=new ta;class WE extends On{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new yp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,XE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ca),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Fr),mv.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(mv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ta),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Fr),ll.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(ll)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,l=a.length+1,u=e*l+1;for(let f=0;f<a.length;f++)a[f]=r[u+f]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(ol.geometry=this.geometry,ol.material=this.material,ol.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(a),e.ray.intersectsSphere(ll)!==!1))for(let l=0;l<r;l++){this.getMatrixAt(l,Fr),pv.multiplyMatrices(a,Fr),ol.matrixWorld=pv,ol.raycast(e,su);for(let u=0,f=su.length;u<f;u++){const p=su[u];p.instanceId=l,p.object=this,n.push(p)}su.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new yp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new zp(new Float32Array(r*this.count),r,this.count,Lp,ni));const l=this.morphTexture.source.data.data;let u=0;for(let h=0;h<a.length;h++)u+=a[h];const f=this.geometry.morphTargetsRelative?1:1-u,p=r*e;l[p]=f,l.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const md=new k,qE=new k,YE=new dt;class os{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=md.subVectors(a,n).cross(qE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(md),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:n.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||YE.getNormalMatrix(e),r=this.coplanarPoint(md).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new ta,jE=new at(.5,.5),ru=new k;class Hp{constructor(e=new os,n=new os,a=new os,r=new os,l=new os,u=new os){this.planes=[e,n,a,r,l,u]}set(e,n,a,r,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Zi,a=!1){const r=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],h=l[3],g=l[4],_=l[5],v=l[6],x=l[7],M=l[8],T=l[9],S=l[10],y=l[11],N=l[12],U=l[13],D=l[14],I=l[15];if(r[0].setComponents(h-u,x-g,y-M,I-N).normalize(),r[1].setComponents(h+u,x+g,y+M,I+N).normalize(),r[2].setComponents(h+f,x+_,y+T,I+U).normalize(),r[3].setComponents(h-f,x-_,y-T,I-U).normalize(),a)r[4].setComponents(p,v,S,D).normalize(),r[5].setComponents(h-p,x-v,y-S,I-D).normalize();else if(r[4].setComponents(h-p,x-v,y-S,I-D).normalize(),n===Zi)r[5].setComponents(h+p,x+v,y+S,I+D).normalize();else if(n===Ru)r[5].setComponents(p,v,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const n=jE.distanceTo(e.center);return Ns.radius=.7071067811865476+n,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(ru.x=r.normal.x>0?e.max.x:e.min.x,ru.y=r.normal.y>0?e.max.y:e.min.y,ru.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uy extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wu=new k,Cu=new k,gv=new pt,cl=new Rl,ou=new ta,gd=new k,_v=new k;class Vp extends $t{constructor(e=new di,n=new Uy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,l=n.count;r<l;r++)wu.fromBufferAttribute(n,r-1),Cu.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=wu.distanceTo(Cu);e.setAttribute("lineDistance",new hi(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,l=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ou.copy(a.boundingSphere),ou.applyMatrix4(r),ou.radius+=l,e.ray.intersectsSphere(ou)===!1)return;gv.copy(r).invert(),cl.copy(e.ray).applyMatrix4(gv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let T=x,S=M-1;T<S;T+=h){const y=g.getX(T),N=g.getX(T+1),U=lu(this,e,cl,p,y,N,T);U&&n.push(U)}if(this.isLineLoop){const T=g.getX(M-1),S=g.getX(x),y=lu(this,e,cl,p,T,S,M-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let T=x,S=M-1;T<S;T+=h){const y=lu(this,e,cl,p,T,T+1,T);y&&n.push(y)}if(this.isLineLoop){const T=lu(this,e,cl,p,M-1,x,M-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function lu(o,e,n,a,r,l,u){const f=o.geometry.attributes.position;if(wu.fromBufferAttribute(f,r),Cu.fromBufferAttribute(f,l),n.distanceSqToSegment(wu,Cu,gd,_v)>a)return;gd.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(gd);if(!(h<e.near||h>e.far))return{distance:h,point:_v.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const vv=new k,yv=new k;class KE extends Vp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,l=n.count;r<l;r+=2)vv.fromBufferAttribute(n,r),yv.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+vv.distanceTo(yv);e.setAttribute("lineDistance",new hi(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ZE extends Vp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Ny extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xv=new pt,xp=new Rl,cu=new ta,uu=new k;class Gp extends $t{constructor(e=new di,n=new Ny){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,l=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),cu.copy(a.boundingSphere),cu.applyMatrix4(r),cu.radius+=l,e.ray.intersectsSphere(cu)===!1)return;xv.copy(r).invert(),xp.copy(e.ray).applyMatrix4(xv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=a.index,_=a.attributes.position;if(h!==null){const v=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=v,T=x;M<T;M++){const S=h.getX(M);uu.fromBufferAttribute(_,S),Sv(uu,S,p,r,e,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let M=v,T=x;M<T;M++)uu.fromBufferAttribute(_,M),Sv(uu,M,p,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Sv(o,e,n,a,r,l,u){const f=xp.distanceSqToPoint(o);if(f<n){const p=new k;xp.closestPointToPoint(o,p),p.applyMatrix4(a);const h=r.ray.origin.distanceTo(p);if(h<r.near||h>r.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Oy extends wn{constructor(e,n,a=Vs,r,l,u,f=Kn,p=Kn,h,g=Sl,_=1){if(g!==Sl&&g!==Ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,r,l,u,f,p,g,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Py extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class QE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const a=this.getUtoTmapping(e);return this.getPoint(a,n)}getPoints(e=5){const n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return n}getSpacedPoints(e=5){const n=[];for(let a=0;a<=e;a++)n.push(this.getPointAt(a/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,r=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=e;u++)a=this.getPoint(u/e),l+=a.distanceTo(r),n.push(l),r=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const a=this.getLengths();let r=0;const l=a.length;let u;n?u=n:u=e*a[l-1];let f=0,p=l-1,h;for(;f<=p;)if(r=Math.floor(f+(p-f)/2),h=a[r]-u,h<0)f=r+1;else if(h>0)p=r-1;else{p=r;break}if(r=p,a[r]===u)return r/(l-1);const g=a[r],v=a[r+1]-g,x=(u-g)/v;return(r+x)/(l-1)}getTangent(e,n){let r=e-1e-4,l=e+1e-4;r<0&&(r=0),l>1&&(l=1);const u=this.getPoint(r),f=this.getPoint(l),p=n||(u.isVector2?new at:new k);return p.copy(f).sub(u).normalize(),p}getTangentAt(e,n){const a=this.getUtoTmapping(e);return this.getTangent(a,n)}computeFrenetFrames(e,n=!1){const a=new k,r=[],l=[],u=[],f=new k,p=new pt;for(let x=0;x<=e;x++){const M=x/e;r[x]=this.getTangentAt(M,new k)}l[0]=new k,u[0]=new k;let h=Number.MAX_VALUE;const g=Math.abs(r[0].x),_=Math.abs(r[0].y),v=Math.abs(r[0].z);g<=h&&(h=g,a.set(1,0,0)),_<=h&&(h=_,a.set(0,1,0)),v<=h&&a.set(0,0,1),f.crossVectors(r[0],a).normalize(),l[0].crossVectors(r[0],f),u[0].crossVectors(r[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(r[x-1],r[x]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(ut(r[x-1].dot(r[x]),-1,1));l[x].applyMatrix4(p.makeRotationAxis(f,M))}u[x].crossVectors(r[x],l[x])}if(n===!0){let x=Math.acos(ut(l[0].dot(l[e]),-1,1));x/=e,r[0].dot(f.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(p.makeRotationAxis(r[M],x*M)),u[M].crossVectors(r[M],l[M])}return{tangents:r,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function kp(){let o=0,e=0,n=0,a=0;function r(l,u,f,p){o=l,e=f,n=-3*l+3*u-2*f-p,a=2*l-2*u+f+p}return{initCatmullRom:function(l,u,f,p,h){r(u,f,h*(f-l),h*(p-u))},initNonuniformCatmullRom:function(l,u,f,p,h,g,_){let v=(u-l)/h-(f-l)/(h+g)+(f-u)/g,x=(f-u)/g-(p-u)/(g+_)+(p-f)/_;v*=g,x*=g,r(u,f,v,x)},calc:function(l){const u=l*l,f=u*l;return o+e*l+n*u+a*f}}}const fu=new k,_d=new kp,vd=new kp,yd=new kp;class JE extends QE{constructor(e=[],n=!1,a="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=a,this.tension=r}getPoint(e,n=new k){const a=n,r=this.points,l=r.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let h,g;this.closed||f>0?h=r[(f-1)%l]:(fu.subVectors(r[0],r[1]).add(r[0]),h=fu);const _=r[f%l],v=r[(f+1)%l];if(this.closed||f+2<l?g=r[(f+2)%l]:(fu.subVectors(r[l-1],r[l-2]).add(r[l-1]),g=fu),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(_),x),T=Math.pow(_.distanceToSquared(v),x),S=Math.pow(v.distanceToSquared(g),x);T<1e-4&&(T=1),M<1e-4&&(M=T),S<1e-4&&(S=T),_d.initNonuniformCatmullRom(h.x,_.x,v.x,g.x,M,T,S),vd.initNonuniformCatmullRom(h.y,_.y,v.y,g.y,M,T,S),yd.initNonuniformCatmullRom(h.z,_.z,v.z,g.z,M,T,S)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(h.x,_.x,v.x,g.x,this.tension),vd.initCatmullRom(h.y,_.y,v.y,g.y,this.tension),yd.initCatmullRom(h.z,_.z,v.z,g.z,this.tension));return a.set(_d.calc(p),vd.calc(p),yd.calc(p)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Uu extends di{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const l=e/2,u=n/2,f=Math.floor(a),p=Math.floor(r),h=f+1,g=p+1,_=e/f,v=n/p,x=[],M=[],T=[],S=[];for(let y=0;y<g;y++){const N=y*v-u;for(let U=0;U<h;U++){const D=U*_-l;M.push(D,-N,0),T.push(0,0,1),S.push(U/f),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let N=0;N<f;N++){const U=N+h*y,D=N+h*(y+1),I=N+1+h*(y+1),F=N+1+h*y;x.push(U,D,F),x.push(D,I,F)}this.setIndex(x),this.setAttribute("position",new hi(M,3)),this.setAttribute("normal",new hi(T,3)),this.setAttribute("uv",new hi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class wl extends di{constructor(e=1,n=32,a=16,r=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:r,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+f,Math.PI);let h=0;const g=[],_=new k,v=new k,x=[],M=[],T=[],S=[];for(let y=0;y<=a;y++){const N=[],U=y/a;let D=0;y===0&&u===0?D=.5/n:y===a&&p===Math.PI&&(D=-.5/n);for(let I=0;I<=n;I++){const F=I/n;_.x=-e*Math.cos(r+F*l)*Math.sin(u+U*f),_.y=e*Math.cos(u+U*f),_.z=e*Math.sin(r+F*l)*Math.sin(u+U*f),M.push(_.x,_.y,_.z),v.copy(_).normalize(),T.push(v.x,v.y,v.z),S.push(F+D,1-U),N.push(h++)}g.push(N)}for(let y=0;y<a;y++)for(let N=0;N<n;N++){const U=g[y][N+1],D=g[y][N],I=g[y+1][N],F=g[y+1][N+1];(y!==0||u>0)&&x.push(U,D,F),(y!==a-1||p<Math.PI)&&x.push(D,I,F)}this.setIndex(x),this.setAttribute("position",new hi(M,3)),this.setAttribute("normal",new hi(T,3)),this.setAttribute("uv",new hi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class io extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yy,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ii extends io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $E extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eT extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function hu(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function tT(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function nT(o){function e(r,l){return o[r]-o[l]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function Mv(o,e,n){const a=o.length,r=new o.constructor(a);for(let l=0,u=0;u!==a;++l){const f=n[l]*e;for(let p=0;p!==e;++p)r[u++]=o[f+p]}return r}function Iy(o,e,n,a){let r=1,l=o[0];for(;l!==void 0&&l[a]===void 0;)l=o[r++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(e.push(l.time),n.push(...u)),l=o[r++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(e.push(l.time),u.toArray(n,n.length)),l=o[r++];while(l!==void 0);else do u=l[a],u!==void 0&&(e.push(l.time),n.push(u)),l=o[r++];while(l!==void 0)}class Cl{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],l=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let f=a+2;;){if(r===void 0){if(e<l)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(l=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=l)){const f=n[1];e<f&&(a=2,l=f);for(let p=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=l,l=n[--a-1],e>=l)break t}u=a,a=0;break n}break e}for(;a<u;){const f=a+u>>>1;e<n[f]?u=f:a=f+1}if(r=n[a],l=n[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,r)}return this.interpolate_(a,l,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r;for(let u=0;u!==r;++u)n[u]=a[l+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class iT extends Cl{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:F0,endingEnd:F0}}intervalChanged_(e,n,a){const r=this.parameterPositions;let l=e-2,u=e+1,f=r[l],p=r[u];if(f===void 0)switch(this.getSettings_().endingStart){case H0:l=e,f=2*n-a;break;case V0:l=r.length-2,f=n+r[l]-r[l+1];break;default:l=e,f=a}if(p===void 0)switch(this.getSettings_().endingEnd){case H0:u=e,p=2*a-n;break;case V0:u=1,p=a+r[1]-r[0];break;default:u=e-1,p=n}const h=(a-n)*.5,g=this.valueSize;this._weightPrev=h/(n-f),this._weightNext=h/(p-a),this._offsetPrev=l*g,this._offsetNext=u*g}interpolate_(e,n,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=e*f,h=p-f,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,M=(a-n)/(r-n),T=M*M,S=T*M,y=-v*S+2*v*T-v*M,N=(1+v)*S+(-1.5-2*v)*T+(-.5+v)*M+1,U=(-1-x)*S+(1.5+x)*T+.5*M,D=x*S-x*T;for(let I=0;I!==f;++I)l[I]=y*u[g+I]+N*u[h+I]+U*u[p+I]+D*u[_+I];return l}}class aT extends Cl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=e*f,h=p-f,g=(a-n)/(r-n),_=1-g;for(let v=0;v!==f;++v)l[v]=u[h+v]*_+u[p+v]*g;return l}}class sT extends Cl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bi{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hu(n,this.TimeBufferType),this.values=hu(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:hu(e.times,Array),values:hu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new sT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case El:n=this.InterpolantFactoryMethodDiscrete;break;case Tl:n=this.InterpolantFactoryMethodLinear;break;case Wh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return El;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let l=0,u=r-1;for(;l!==r&&a[l]<e;)++l;for(;u!==-1&&a[u]>n;)--u;if(++u,l!==0||u!==r){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,l=a.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==l;f++){const p=a[f];if(typeof p=="number"&&isNaN(p)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,p),e=!1;break}if(u!==null&&u>p){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,p,u),e=!1;break}u=p}if(r!==void 0&&tT(r))for(let f=0,p=r.length;f!==p;++f){const h=r[f];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===Wh,l=e.length-1;let u=1;for(let f=1;f<l;++f){let p=!1;const h=e[f],g=e[f+1];if(h!==g&&(f!==1||h!==e[0]))if(r)p=!0;else{const _=f*a,v=_-a,x=_+a;for(let M=0;M!==a;++M){const T=n[_+M];if(T!==n[v+M]||T!==n[x+M]){p=!0;break}}}if(p){if(f!==u){e[u]=e[f];const _=f*a,v=u*a;for(let x=0;x!==a;++x)n[v+x]=n[_+x]}++u}}if(l>0){e[u]=e[l];for(let f=l*a,p=u*a,h=0;h!==a;++h)n[p+h]=n[f+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Bi.prototype.ValueTypeName="";Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=Tl;class ao extends Bi{constructor(e,n,a){super(e,n,a)}}ao.prototype.ValueTypeName="bool";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=El;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;class By extends Bi{constructor(e,n,a,r){super(e,n,a,r)}}By.prototype.ValueTypeName="color";class $r extends Bi{constructor(e,n,a,r){super(e,n,a,r)}}$r.prototype.ValueTypeName="number";class rT extends Cl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=(a-n)/(r-n);let h=e*f;for(let g=h+f;h!==g;h+=4)$i.slerpFlat(l,0,u,h-f,u,h,p);return l}}class eo extends Bi{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new rT(this.times,this.values,this.getValueSize(),e)}}eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;class so extends Bi{constructor(e,n,a){super(e,n,a)}}so.prototype.ValueTypeName="string";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=El;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class to extends Bi{constructor(e,n,a,r){super(e,n,a,r)}}to.prototype.ValueTypeName="vector";class oT{constructor(e="",n=-1,a=[],r=zM){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=Oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,f=a.length;u!==f;++u)n.push(cT(a[u]).scale(r));const l=new this(e.name,e.duration,n,e.blendMode);return l.uuid=e.uuid,l.userData=JSON.parse(e.userData||"{}"),l}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let l=0,u=a.length;l!==u;++l)n.push(Bi.toJSON(a[l]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const l=n.length,u=[];for(let f=0;f<l;f++){let p=[],h=[];p.push((f+l-1)%l,f,(f+1)%l),h.push(0,1,0);const g=nT(p);p=Mv(p,1,g),h=Mv(h,1,g),!r&&p[0]===0&&(p.push(l),h.push(h[0])),u.push(new $r(".morphTargetInfluences["+n[f].name+"]",p,h).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,p=e.length;f<p;f++){const h=e[f],g=h.name.match(l);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(h)}}const u=[];for(const f in r)u.push(this.CreateFromMorphTargetSequence(f,r[f],n,a));return u}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,x,M,T){if(x.length!==0){const S=[],y=[];Iy(x,S,y,M),S.length!==0&&T.push(new _(v,S,y))}},r=[],l=e.name||"default",u=e.fps||30,f=e.blendMode;let p=e.length||-1;const h=e.hierarchy||[];for(let _=0;_<h.length;_++){const v=h[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let T=0;T<v[M].morphTargets.length;T++)x[v[M].morphTargets[T]]=-1;for(const T in x){const S=[],y=[];for(let N=0;N!==v[M].morphTargets.length;++N){const U=v[M];S.push(U.time),y.push(U.morphTarget===T?1:0)}r.push(new $r(".morphTargetInfluence["+T+"]",S,y))}p=x.length*u}else{const x=".bones["+n[_].name+"]";a(to,x+".position",v,"pos",r),a(eo,x+".quaternion",v,"rot",r),a(to,x+".scale",v,"scl",r)}}return r.length===0?null:new this(l,p,r,f)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const l=this.tracks[a];n=Math.max(n,l.times[l.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function lT(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $r;case"vector":case"vector2":case"vector3":case"vector4":return to;case"color":return By;case"quaternion":return eo;case"bool":case"boolean":return ao;case"string":return so}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function cT(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lT(o.type);if(o.times===void 0){const n=[],a=[];Iy(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Aa={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class uT{constructor(e,n,a){const r=this;let l=!1,u=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.abortController=new AbortController,this.itemStart=function(g){f++,l===!1&&r.onStart!==void 0&&r.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,f),u===f&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return h.push(g,_),this},this.removeHandler=function(g){const _=h.indexOf(g);return _!==-1&&h.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=h.length;_<v;_+=2){const x=h[_],M=h[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const fT=new uT;class Xs{constructor(e){this.manager=e!==void 0?e:fT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,l){a.load(e,r,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ma={};class hT extends Error{constructor(e,n){super(e),this.response=n}}class Xp extends Xs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Aa.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(l),this.manager.itemEnd(e)},0),l;if(Ma[e]!==void 0){Ma[e].push({onLoad:n,onProgress:a,onError:r});return}Ma[e]=[],Ma[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=Ma[e],_=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=v?parseInt(v):0,M=x!==0;let T=0;const S=new ReadableStream({start(y){N();function N(){_.read().then(({done:U,value:D})=>{if(U)y.close();else{T+=D.byteLength;const I=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:x});for(let F=0,B=g.length;F<B;F++){const V=g[F];V.onProgress&&V.onProgress(I)}y.enqueue(D),N()}},U=>{y.error(U)})}}});return new Response(S)}else throw new hT(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return h.json();default:if(f==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return h.arrayBuffer().then(M=>x.decode(M))}}}).then(h=>{Aa.add(`file:${e}`,h);const g=Ma[e];delete Ma[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(h)}}).catch(h=>{const g=Ma[e];if(g===void 0)throw this.manager.itemError(e),h;delete Ma[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hr=new WeakMap;class dT extends Xs{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Aa.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){n&&n(u),l.manager.itemEnd(e)},0);else{let _=Hr.get(u);_===void 0&&(_=[],Hr.set(u,_)),_.push({onLoad:n,onError:r})}return u}const f=bl("img");function p(){g(),n&&n(this);const _=Hr.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}Hr.delete(this),l.manager.itemEnd(e)}function h(_){g(),r&&r(_),Aa.remove(`image:${e}`);const v=Hr.get(this)||[];for(let x=0;x<v.length;x++){const M=v[x];M.onError&&M.onError(_)}Hr.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",p,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Aa.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class pT extends Xs{constructor(e){super(e)}load(e,n,a,r){const l=this,u=new zp,f=new Xp(this.manager);return f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setPath(this.path),f.setWithCredentials(l.withCredentials),f.load(e,function(p){let h;try{h=l.parse(p)}catch(g){if(r!==void 0)r(g);else{console.error(g);return}}h.image!==void 0?u.image=h.image:h.data!==void 0&&(u.image.width=h.width,u.image.height=h.height,u.image.data=h.data),u.wrapS=h.wrapS!==void 0?h.wrapS:ji,u.wrapT=h.wrapT!==void 0?h.wrapT:ji,u.magFilter=h.magFilter!==void 0?h.magFilter:Rn,u.minFilter=h.minFilter!==void 0?h.minFilter:Rn,u.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(u.colorSpace=h.colorSpace),h.flipY!==void 0&&(u.flipY=h.flipY),h.format!==void 0&&(u.format=h.format),h.type!==void 0&&(u.type=h.type),h.mipmaps!==void 0&&(u.mipmaps=h.mipmaps,u.minFilter=Ki),h.mipmapCount===1&&(u.minFilter=Rn),h.generateMipmaps!==void 0&&(u.generateMipmaps=h.generateMipmaps),u.needsUpdate=!0,n&&n(u,h)},a,r),u}}class zy extends Xs{constructor(e){super(e)}load(e,n,a,r){const l=new wn,u=new dT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)},a,r),l}}class Nu extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const xd=new pt,Ev=new k,Tv=new k;class Wp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Ji,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hp,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Ev.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ev),Tv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tv),n.updateMatrixWorld(),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mT extends Wp{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=Qr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||n.far;(a!==n.fov||r!==n.aspect||l!==n.far)&&(n.fov=a,n.aspect=r,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gT extends Nu{constructor(e,n,a=0,r=Math.PI/3,l=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=a,this.angle=r,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new mT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bv=new pt,ul=new k,Sd=new k;class _T extends Wp{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,r=this.matrix,l=e.distance||a.far;l!==a.far&&(a.far=l,a.updateProjectionMatrix()),ul.setFromMatrixPosition(e.matrixWorld),a.position.copy(ul),Sd.copy(a.position),Sd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Sd),a.updateMatrixWorld(),r.makeTranslation(-ul.x,-ul.y,-ul.z),bv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bv,a.coordinateSystem,a.reversedDepth)}}class Dl extends Nu{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new _T}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qp extends Cy{constructor(e=-1,n=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-e,u=a+e,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vT extends Wp{constructor(){super(new qp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ou extends Nu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new vT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yp extends Nu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class vl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Md=new WeakMap;class yT extends Xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Aa.get(`image-bitmap:${e}`);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(h=>{if(Md.has(u)===!0)r&&r(Md.get(u)),l.manager.itemError(e),l.manager.itemEnd(e);else return n&&n(h),l.manager.itemEnd(e),h});return}return setTimeout(function(){n&&n(u),l.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,f).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(h){return Aa.add(`image-bitmap:${e}`,h),n&&n(h),l.manager.itemEnd(e),h}).catch(function(h){r&&r(h),Md.set(p,h),Aa.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});Aa.add(`image-bitmap:${e}`,p),l.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class xT extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const jp="\\[\\]\\.:\\/",ST=new RegExp("["+jp+"]","g"),Kp="[^"+jp+"]",MT="[^"+jp.replace("\\.","")+"]",ET=/((?:WC+[\/:])*)/.source.replace("WC",Kp),TT=/(WCOD+)?/.source.replace("WCOD",MT),bT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kp),AT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kp),RT=new RegExp("^"+ET+TT+bT+AT+"$"),wT=["material","materials","bones","map"];class CT{constructor(e,n,a){const r=a||It.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,l=a.length;r!==l;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class It{constructor(e,n,a){this.path=n,this.parsedPath=a||It.parseTrackName(n),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new It.Composite(e,n,a):new It(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ST,"")}static parseTrackName(e){const n=RT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const l=a.nodeName.substring(r+1);wT.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===n||f.uuid===n)return f;const p=a(f.children);if(p)return p}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let l=n.propertyIndex;if(e||(e=It.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let h=n.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[r];if(u===void 0){const h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(l!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=CT;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Av{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(ut(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class DT extends ks{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Rv(o,e,n,a){const r=LT(a);switch(n){case my:return o*e;case Lp:return o*e/r.components*r.byteLength;case Up:return o*e/r.components*r.byteLength;case _y:return o*e*2/r.components*r.byteLength;case Np:return o*e*2/r.components*r.byteLength;case gy:return o*e*3/r.components*r.byteLength;case Ei:return o*e*4/r.components*r.byteLength;case Op:return o*e*4/r.components*r.byteLength;case vu:case yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xu:case Su:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xd:case qd:return Math.max(o,16)*Math.max(e,8)/4;case kd:case Wd:return Math.max(o,8)*Math.max(e,8)/2;case Yd:case jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case sp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case up:case fp:case hp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case dp:case pp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case mp:case gp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LT(o){switch(o){case Ji:case fy:return{byteLength:1,components:1};case yl:case hy:case ba:return{byteLength:2,components:1};case Cp:case Dp:return{byteLength:2,components:4};case Vs:case wp:case ni:return{byteLength:4,components:1};case dy:case py:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hy(){let o=null,e=!1,n=null,a=null;function r(l,u){n(l,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function UT(o){const e=new WeakMap;function n(f,p){const h=f.array,g=f.usage,_=h.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,h,g),f.onUploadCallback();let x;if(h instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=o.SHORT;else if(h instanceof Uint32Array)x=o.UNSIGNED_INT;else if(h instanceof Int32Array)x=o.INT;else if(h instanceof Int8Array)x=o.BYTE;else if(h instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,h){const g=p.array,_=p.updateRanges;if(o.bindBuffer(h,f),_.length===0)o.bufferSubData(h,0,g);else{_.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<_.length;x++){const M=_[v],T=_[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,_[v]=T)}_.length=v+1;for(let x=0,M=_.length;x<M;x++){const T=_[x];o.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(o.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,p),h.version=f.version}}return{get:r,remove:l,update:u}}var NT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,GT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ib=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ab=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ub=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,db=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Db=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ub=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_A=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$A=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:NT,alphahash_pars_fragment:OT,alphamap_fragment:PT,alphamap_pars_fragment:IT,alphatest_fragment:BT,alphatest_pars_fragment:zT,aomap_fragment:FT,aomap_pars_fragment:HT,batching_pars_vertex:VT,batching_vertex:GT,begin_vertex:kT,beginnormal_vertex:XT,bsdfs:WT,iridescence_fragment:qT,bumpmap_pars_fragment:YT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:KT,clipping_planes_pars_vertex:ZT,clipping_planes_vertex:QT,color_fragment:JT,color_pars_fragment:$T,color_pars_vertex:eb,color_vertex:tb,common:nb,cube_uv_reflection_fragment:ib,defaultnormal_vertex:ab,displacementmap_pars_vertex:sb,displacementmap_vertex:rb,emissivemap_fragment:ob,emissivemap_pars_fragment:lb,colorspace_fragment:cb,colorspace_pars_fragment:ub,envmap_fragment:fb,envmap_common_pars_fragment:hb,envmap_pars_fragment:db,envmap_pars_vertex:pb,envmap_physical_pars_fragment:bb,envmap_vertex:mb,fog_vertex:gb,fog_pars_vertex:_b,fog_fragment:vb,fog_pars_fragment:yb,gradientmap_pars_fragment:xb,lightmap_pars_fragment:Sb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Tb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Rb,lights_phong_fragment:wb,lights_phong_pars_fragment:Cb,lights_physical_fragment:Db,lights_physical_pars_fragment:Lb,lights_fragment_begin:Ub,lights_fragment_maps:Nb,lights_fragment_end:Ob,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Ib,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:zb,map_fragment:Fb,map_pars_fragment:Hb,map_particle_fragment:Vb,map_particle_pars_fragment:Gb,metalnessmap_fragment:kb,metalnessmap_pars_fragment:Xb,morphinstance_vertex:Wb,morphcolor_vertex:qb,morphnormal_vertex:Yb,morphtarget_pars_vertex:jb,morphtarget_vertex:Kb,normal_fragment_begin:Zb,normal_fragment_maps:Qb,normal_pars_fragment:Jb,normal_pars_vertex:$b,normal_vertex:eA,normalmap_pars_fragment:tA,clearcoat_normal_fragment_begin:nA,clearcoat_normal_fragment_maps:iA,clearcoat_pars_fragment:aA,iridescence_pars_fragment:sA,opaque_fragment:rA,packing:oA,premultiplied_alpha_fragment:lA,project_vertex:cA,dithering_fragment:uA,dithering_pars_fragment:fA,roughnessmap_fragment:hA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:pA,shadowmap_pars_vertex:mA,shadowmap_vertex:gA,shadowmask_pars_fragment:_A,skinbase_vertex:vA,skinning_pars_vertex:yA,skinning_vertex:xA,skinnormal_vertex:SA,specularmap_fragment:MA,specularmap_pars_fragment:EA,tonemapping_fragment:TA,tonemapping_pars_fragment:bA,transmission_fragment:AA,transmission_pars_fragment:RA,uv_pars_fragment:wA,uv_pars_vertex:CA,uv_vertex:DA,worldpos_vertex:LA,background_vert:UA,background_frag:NA,backgroundCube_vert:OA,backgroundCube_frag:PA,cube_vert:IA,cube_frag:BA,depth_vert:zA,depth_frag:FA,distanceRGBA_vert:HA,distanceRGBA_frag:VA,equirect_vert:GA,equirect_frag:kA,linedashed_vert:XA,linedashed_frag:WA,meshbasic_vert:qA,meshbasic_frag:YA,meshlambert_vert:jA,meshlambert_frag:KA,meshmatcap_vert:ZA,meshmatcap_frag:QA,meshnormal_vert:JA,meshnormal_frag:$A,meshphong_vert:e1,meshphong_frag:t1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:a1,meshtoon_frag:s1,points_vert:r1,points_frag:o1,shadow_vert:l1,shadow_frag:c1,sprite_vert:u1,sprite_frag:f1},Ne={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},qi={basic:{uniforms:Yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Yn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Yn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Yn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Yn([Ne.points,Ne.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Yn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Yn([Ne.common,Ne.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Yn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Yn([Ne.sprite,Ne.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Yn([Ne.common,Ne.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Yn([Ne.lights,Ne.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};qi.physical={uniforms:Yn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const du={r:0,b:0,g:0},Os=new ea,h1=new pt;function d1(o,e,n,a,r,l,u){const f=new ct(0);let p=l===!0?0:1,h,g,_=null,v=0,x=null;function M(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:e).get(D)),D}function T(U){let D=!1;const I=M(U);I===null?y(f,p):I&&I.isColor&&(y(I,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,D){const I=M(D);I&&(I.isCubeTexture||I.mapping===Du)?(g===void 0&&(g=new On(new no(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Jr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,B,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Os.copy(D.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Os)),g.material.toneMapped=bt.getTransfer(I.colorSpace)!==Vt,(_!==I||v!==I.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,_=I,v=I.version,x=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new On(new Uu(2,2),new Pi({name:"BackgroundMaterial",uniforms:Jr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=bt.getTransfer(I.colorSpace)!==Vt,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||v!==I.version||x!==o.toneMapping)&&(h.material.needsUpdate=!0,_=I,v=I.version,x=o.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function y(U,D){U.getRGB(du,Ry(o)),a.buffers.color.setClear(du.r,du.g,du.b,D,u)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,D=1){f.set(U),p=D,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,y(f,p)},render:T,addToRenderList:S,dispose:N}}function p1(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,u=!1;function f(w,H,Y,ae,re){let ie=!1;const O=_(ae,Y,H);l!==O&&(l=O,h(l.object)),ie=x(w,ae,Y,re),ie&&M(w,ae,Y,re),re!==null&&e.update(re,o.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,D(w,H,Y,ae),re!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return o.createVertexArray()}function h(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function _(w,H,Y){const ae=Y.wireframe===!0;let re=a[w.id];re===void 0&&(re={},a[w.id]=re);let ie=re[H.id];ie===void 0&&(ie={},re[H.id]=ie);let O=ie[ae];return O===void 0&&(O=v(p()),ie[ae]=O),O}function v(w){const H=[],Y=[],ae=[];for(let re=0;re<n;re++)H[re]=0,Y[re]=0,ae[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:ae,object:w,attributes:{},index:null}}function x(w,H,Y,ae){const re=l.attributes,ie=H.attributes;let O=0;const K=Y.getAttributes();for(const q in K)if(K[q].location>=0){const L=re[q];let J=ie[q];if(J===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),L===void 0||L.attribute!==J||J&&L.data!==J.data)return!0;O++}return l.attributesNum!==O||l.index!==ae}function M(w,H,Y,ae){const re={},ie=H.attributes;let O=0;const K=Y.getAttributes();for(const q in K)if(K[q].location>=0){let L=ie[q];L===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const J={};J.attribute=L,L&&L.data&&(J.data=L.data),re[q]=J,O++}l.attributes=re,l.attributesNum=O,l.index=ae}function T(){const w=l.newAttributes;for(let H=0,Y=w.length;H<Y;H++)w[H]=0}function S(w){y(w,0)}function y(w,H){const Y=l.newAttributes,ae=l.enabledAttributes,re=l.attributeDivisors;Y[w]=1,ae[w]===0&&(o.enableVertexAttribArray(w),ae[w]=1),re[w]!==H&&(o.vertexAttribDivisor(w,H),re[w]=H)}function N(){const w=l.newAttributes,H=l.enabledAttributes;for(let Y=0,ae=H.length;Y<ae;Y++)H[Y]!==w[Y]&&(o.disableVertexAttribArray(Y),H[Y]=0)}function U(w,H,Y,ae,re,ie,O){O===!0?o.vertexAttribIPointer(w,H,Y,re,ie):o.vertexAttribPointer(w,H,Y,ae,re,ie)}function D(w,H,Y,ae){T();const re=ae.attributes,ie=Y.getAttributes(),O=H.defaultAttributeValues;for(const K in ie){const q=ie[K];if(q.location>=0){let ye=re[K];if(ye===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor)),ye!==void 0){const L=ye.normalized,J=ye.itemSize,he=e.get(ye);if(he===void 0)continue;const ge=he.buffer,Ae=he.type,Be=he.bytesPerElement,ee=Ae===o.INT||Ae===o.UNSIGNED_INT||ye.gpuType===wp;if(ye.isInterleavedBufferAttribute){const pe=ye.data,Te=pe.stride,Ye=ye.offset;if(pe.isInstancedInterleavedBuffer){for(let ke=0;ke<q.locationSize;ke++)y(q.location+ke,pe.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ke=0;ke<q.locationSize;ke++)S(q.location+ke);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let ke=0;ke<q.locationSize;ke++)U(q.location+ke,J/q.locationSize,Ae,L,Te*Be,(Ye+J/q.locationSize*ke)*Be,ee)}else{if(ye.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)y(q.location+pe,ye.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let pe=0;pe<q.locationSize;pe++)S(q.location+pe);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let pe=0;pe<q.locationSize;pe++)U(q.location+pe,J/q.locationSize,Ae,L,J*Be,J/q.locationSize*pe*Be,ee)}}else if(O!==void 0){const L=O[K];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(q.location,L);break;case 3:o.vertexAttrib3fv(q.location,L);break;case 4:o.vertexAttrib4fv(q.location,L);break;default:o.vertexAttrib1fv(q.location,L)}}}}N()}function I(){V();for(const w in a){const H=a[w];for(const Y in H){const ae=H[Y];for(const re in ae)g(ae[re].object),delete ae[re];delete H[Y]}delete a[w]}}function F(w){if(a[w.id]===void 0)return;const H=a[w.id];for(const Y in H){const ae=H[Y];for(const re in ae)g(ae[re].object),delete ae[re];delete H[Y]}delete a[w.id]}function B(w){for(const H in a){const Y=a[H];if(Y[w.id]===void 0)continue;const ae=Y[w.id];for(const re in ae)g(ae[re].object),delete ae[re];delete Y[w.id]}}function V(){C(),u=!0,l!==r&&(l=r,h(l.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:V,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:N}}function m1(o,e,n){let a;function r(h){a=h}function l(h,g){o.drawArrays(a,h,g),n.update(g,a,1)}function u(h,g,_){_!==0&&(o.drawArraysInstanced(a,h,g,_),n.update(g,a,_))}function f(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,g,0,_);let x=0;for(let M=0;M<_;M++)x+=g[M];n.update(x,a,1)}function p(h,g,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],g[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(a,h,0,g,0,v,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T]*v[T];n.update(M,a,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function g1(o,e,n,a){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(B){return!(B!==Ei&&a.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const V=B===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ji&&a.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ni&&!V)}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:I,maxSamples:F}}function _1(o){const e=this;let n=null,a=0,r=!1,l=!1;const u=new os,f=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||r;return r=v,a=_.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const M=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,y=o.get(_);if(!r||M===null||M.length===0||l&&!S)l?g(null):h();else{const N=l?0:a,U=N*4;let D=y.clippingState||null;p.value=D,D=g(M,v,U,x);for(let I=0;I!==U;++I)D[I]=n[I];y.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,M){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=p.value,M!==!0||S===null){const y=x+T*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let U=0,D=x;U!==T;++U,D+=4)u.copy(_[U]).applyMatrix4(N,f),u.normal.toArray(S,D),S[D+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function v1(o){let e=new WeakMap;function n(u,f){return f===Tu?u.mapping=jr:f===Gd&&(u.mapping=Kr),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Tu||f===Gd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new zE(p.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",r),n(h.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const kr=4,wv=[.125,.215,.35,.446,.526,.582],Fs=20,Ed=new qp,Cv=new ct;let Td=null,bd=0,Ad=0,Rd=!1;const Bs=(1+Math.sqrt(5))/2,Vr=1/Bs,Dv=[new k(-Bs,Vr,0),new k(Bs,Vr,0),new k(-Vr,0,Bs),new k(Vr,0,Bs),new k(0,Bs,-Vr),new k(0,Bs,Vr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],y1=new k;class Lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,r=100,l={}){const{size:u=256,position:f=y1}=l;Td=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,bd,Ad),this._renderer.xr.enabled=Rd,e.scissorTest=!1,pu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ba,format:Ei,colorSpace:Gn,depthBuffer:!1},r=Uv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uv(e,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x1(l)),this._blurMaterial=S1(l,e,n)}return r}_compileMaterial(e){const n=new On(this._lodPlanes[0],e);this._renderer.compile(n,Ed)}_sceneToCubeUV(e,n,a,r,l){const p=new An(90,1,n,a),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Cv),_.toneMapping=hs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null));const T=new cs({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),S=new On(new no,T);let y=!1;const N=e.background;N?N.isColor&&(T.color.copy(N),e.background=null,y=!0):(T.color.copy(Cv),y=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(p.up.set(0,h[U],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+g[U],l.y,l.z)):D===1?(p.up.set(0,0,h[U]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+g[U],l.z)):(p.up.set(0,h[U],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+g[U]));const I=this._cubeSize;pu(r,D*I,U>2?I:0,I,I),_.setRenderTarget(r),y&&_.render(S,p),_.render(e,p)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=N}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===jr||e.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new On(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;pu(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Ed)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Dv[(r-l-1)%Dv.length];this._blur(e,l-1,l,u,f)}n.autoClear=a}_blur(e,n,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",l),this._halfBlur(u,e,a,a,r,"longitudinal",l)}_halfBlur(e,n,a,r,l,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new On(this._lodPlanes[r],h),v=h.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Fs-1),T=l/M,S=isFinite(l)?1+Math.floor(g*T):Fs;S>Fs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Fs}`);const y=[];let N=0;for(let B=0;B<Fs;++B){const V=B/T,C=Math.exp(-V*V/2);y.push(C),B===0?N+=C:B<S&&(N+=2*C)}for(let B=0;B<y.length;B++)y[B]=y[B]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=M,v.mipInt.value=U-a;const D=this._sizeLods[r],I=3*D*(r>U-kr?r-U+kr:0),F=4*(this._cubeSize-D);pu(n,I,F,3*D,2*D),p.setRenderTarget(n),p.render(_,Ed)}}function x1(o){const e=[],n=[],a=[];let r=o;const l=o-kr+1+wv.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);n.push(f);let p=1/f;u>o-kr?p=wv[u-o+kr-1]:u===0&&(p=0),a.push(p);const h=1/(f-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,M=6,T=3,S=2,y=1,N=new Float32Array(T*M*x),U=new Float32Array(S*M*x),D=new Float32Array(y*M*x);for(let F=0;F<x;F++){const B=F%3*2/3-1,V=F>2?0:-1,C=[B,V,0,B+2/3,V,0,B+2/3,V+1,0,B,V,0,B+2/3,V+1,0,B,V+1,0];N.set(C,T*M*F),U.set(v,S*M*F);const w=[F,F,F,F,F,F];D.set(w,y*M*F)}const I=new di;I.setAttribute("position",new _n(N,T)),I.setAttribute("uv",new _n(U,S)),I.setAttribute("faceIndex",new _n(D,y)),e.push(I),r>kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function Uv(o,e,n){const a=new Gs(o,e,n);return a.texture.mapping=Du,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function pu(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function S1(o,e,n){const a=new Float32Array(Fs),r=new k(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Nv(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Ov(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Zp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M1(o){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,h=p===Tu||p===Gd,g=p===jr||p===Kr;if(h||g){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Lv(o)),_=h?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const x=f.image;return h&&x&&x.height>0||g&&x&&r(x)?(n===null&&(n=new Lv(o)),_=h?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function r(f){let p=0;const h=6;for(let g=0;g<h;g++)f[g]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function E1(o){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Al("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function T1(o,e,n,a){const r={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete r[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)e.update(v[x],o.ARRAY_BUFFER)}function h(_){const v=[],x=_.index,M=_.attributes.position;let T=0;if(x!==null){const N=x.array;T=x.version;for(let U=0,D=N.length;U<D;U+=3){const I=N[U+0],F=N[U+1],B=N[U+2];v.push(I,F,F,B,B,I)}}else if(M!==void 0){const N=M.array;T=M.version;for(let U=0,D=N.length/3-1;U<D;U+=3){const I=U+0,F=U+1,B=U+2;v.push(I,F,F,B,B,I)}}else return;const S=new(Sy(v)?Ay:by)(v,1);S.version=T;const y=l.get(_);y&&e.remove(y),l.set(_,S)}function g(_){const v=l.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function b1(o,e,n){let a;function r(v){a=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function p(v,x){o.drawElements(a,x,l,v*u),n.update(x,a,1)}function h(v,x,M){M!==0&&(o.drawElementsInstanced(a,x,l,v*u,M),n.update(x,a,M))}function g(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];n.update(S,a,1)}function _(v,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,v,0,T,0,M);let y=0;for(let N=0;N<M;N++)y+=x[N]*T[N];n.update(y,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function A1(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function R1(o,e,n){const a=new WeakMap,r=new Lt;function l(u,f,p){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let w=function(){V.dispose(),a.delete(f),f.removeEventListener("dispose",w)};var x=w;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let D=0;M===!0&&(D=1),T===!0&&(D=2),S===!0&&(D=3);let I=f.attributes.position.count*D,F=1;I>e.maxTextureSize&&(F=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*F*4*_),V=new My(B,I,F,_);V.type=ni,V.needsUpdate=!0;const C=D*4;for(let H=0;H<_;H++){const Y=y[H],ae=N[H],re=U[H],ie=I*F*4*H;for(let O=0;O<Y.count;O++){const K=O*C;M===!0&&(r.fromBufferAttribute(Y,O),B[ie+K+0]=r.x,B[ie+K+1]=r.y,B[ie+K+2]=r.z,B[ie+K+3]=0),T===!0&&(r.fromBufferAttribute(ae,O),B[ie+K+4]=r.x,B[ie+K+5]=r.y,B[ie+K+6]=r.z,B[ie+K+7]=0),S===!0&&(r.fromBufferAttribute(re,O),B[ie+K+8]=r.x,B[ie+K+9]=r.y,B[ie+K+10]=r.z,B[ie+K+11]=re.itemSize===4?r.w:1)}}v={count:_,texture:V,size:new at(I,F)},a.set(f,v),f.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",h)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function w1(o,e,n,a){let r=new WeakMap;function l(p){const h=a.render.frame,g=p.geometry,_=e.get(p,g);if(r.get(_)!==h&&(e.update(_),r.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==h&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return _}function u(){r=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:l,dispose:u}}const Vy=new wn,Pv=new Oy(1,1),Gy=new My,ky=new yE,Xy=new Dy,Iv=[],Bv=[],zv=new Float32Array(16),Fv=new Float32Array(9),Hv=new Float32Array(4);function ro(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let l=Iv[r];if(l===void 0&&(l=new Float32Array(r),Iv[r]=l),e!==0){a.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,o[u].toArray(l,f)}return l}function vn(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function yn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function Pu(o,e){let n=Bv[e];n===void 0&&(n=new Int32Array(e),Bv[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function C1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function D1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2fv(this.addr,e),yn(n,e)}}function L1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vn(n,e))return;o.uniform3fv(this.addr,e),yn(n,e)}}function U1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4fv(this.addr,e),yn(n,e)}}function N1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(vn(n,a))return;Hv.set(a),o.uniformMatrix2fv(this.addr,!1,Hv),yn(n,a)}}function O1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(vn(n,a))return;Fv.set(a),o.uniformMatrix3fv(this.addr,!1,Fv),yn(n,a)}}function P1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(vn(n,a))return;zv.set(a),o.uniformMatrix4fv(this.addr,!1,zv),yn(n,a)}}function I1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function B1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2iv(this.addr,e),yn(n,e)}}function z1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;o.uniform3iv(this.addr,e),yn(n,e)}}function F1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4iv(this.addr,e),yn(n,e)}}function H1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function V1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2uiv(this.addr,e),yn(n,e)}}function G1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;o.uniform3uiv(this.addr,e),yn(n,e)}}function k1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4uiv(this.addr,e),yn(n,e)}}function X1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(Pv.compareFunction=xy,l=Pv):l=Vy,n.setTexture2D(e||l,r)}function W1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||ky,r)}function q1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||Xy,r)}function Y1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||Gy,r)}function j1(o){switch(o){case 5126:return C1;case 35664:return D1;case 35665:return L1;case 35666:return U1;case 35674:return N1;case 35675:return O1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return F1;case 5125:return H1;case 36294:return V1;case 36295:return G1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}function K1(o,e){o.uniform1fv(this.addr,e)}function Z1(o,e){const n=ro(e,this.size,2);o.uniform2fv(this.addr,n)}function Q1(o,e){const n=ro(e,this.size,3);o.uniform3fv(this.addr,n)}function J1(o,e){const n=ro(e,this.size,4);o.uniform4fv(this.addr,n)}function $1(o,e){const n=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function eR(o,e){const n=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function tR(o,e){const n=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function nR(o,e){o.uniform1iv(this.addr,e)}function iR(o,e){o.uniform2iv(this.addr,e)}function aR(o,e){o.uniform3iv(this.addr,e)}function sR(o,e){o.uniform4iv(this.addr,e)}function rR(o,e){o.uniform1uiv(this.addr,e)}function oR(o,e){o.uniform2uiv(this.addr,e)}function lR(o,e){o.uniform3uiv(this.addr,e)}function cR(o,e){o.uniform4uiv(this.addr,e)}function uR(o,e,n){const a=this.cache,r=e.length,l=Pu(n,r);vn(a,l)||(o.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||Vy,l[u])}function fR(o,e,n){const a=this.cache,r=e.length,l=Pu(n,r);vn(a,l)||(o.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||ky,l[u])}function hR(o,e,n){const a=this.cache,r=e.length,l=Pu(n,r);vn(a,l)||(o.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||Xy,l[u])}function dR(o,e,n){const a=this.cache,r=e.length,l=Pu(n,r);vn(a,l)||(o.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||Gy,l[u])}function pR(o){switch(o){case 5126:return K1;case 35664:return Z1;case 35665:return Q1;case 35666:return J1;case 35674:return $1;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return aR;case 35669:case 35673:return sR;case 5125:return rR;case 36294:return oR;case 36295:return lR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return dR}}class mR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=j1(n.type)}}class gR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pR(n.type)}}class _R{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(e,n[f.id],a)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function Vv(o,e){o.seq.push(e),o.map[e.id]=e}function vR(o,e,n){const a=o.name,r=a.length;for(wd.lastIndex=0;;){const l=wd.exec(a),u=wd.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===r){Vv(n,h===void 0?new mR(f,o,e):new gR(f,o,e));break}else{let _=n.map[f];_===void 0&&(_=new _R(f),Vv(n,_)),n=_}}}class Mu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=e.getActiveUniform(n,r),u=e.getUniformLocation(n,l.name);vR(l,u,this)}}setValue(e,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,l=e.length;r!==l;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function Gv(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const yR=37297;let xR=0;function SR(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=r;u<l;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const kv=new dt;function MR(o){bt._getMatrix(kv,bt.workingColorSpace,o);const e=`mat3( ${kv.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(o)){case Au:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Xv(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+SR(o.getShaderSource(e),f)}else return l}function ER(o,e){const n=MR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TR(o,e){let n;switch(e){case UM:n="Linear";break;case Rp:n="Reinhard";break;case NM:n="Cineon";break;case ly:n="ACESFilmic";break;case PM:n="AgX";break;case IM:n="Neutral";break;case OM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const mu=new k;function bR(){bt.getLuminanceCoefficients(mu);const o=mu.x.toFixed(4),e=mu.y.toFixed(4),n=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function RR(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function wR(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(e,r),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:f}}return n}function ml(o){return o!==""}function Wv(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(o){return o.replace(CR,LR)}const DR=new Map;function LR(o,e){let n=_t[e];if(n===void 0){const a=DR.get(e);if(a!==void 0)n=_t[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Sp(n)}const UR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yv(o){return o.replace(UR,NR)}function NR(o,e,n,a){let r="";for(let l=parseInt(e);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function jv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ry?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===fM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function PR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case jr:case Kr:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function BR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case oy:e="ENVMAP_BLENDING_MULTIPLY";break;case DM:e="ENVMAP_BLENDING_MIX";break;case LM:e="ENVMAP_BLENDING_ADD";break}return e}function zR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function FR(o,e,n,a){const r=o.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=OR(n),h=PR(n),g=IR(n),_=BR(n),v=zR(n),x=AR(n),M=RR(l),T=r.createProgram();let S,y,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ml).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ml).join(`
`),y.length>0&&(y+=`
`)):(S=[jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),y=[jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hs?"#define TONE_MAPPING":"",n.toneMapping!==hs?_t.tonemapping_pars_fragment:"",n.toneMapping!==hs?TR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,ER("linearToOutputTexel",n.outputColorSpace),bR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ml).join(`
`)),u=Sp(u),u=Wv(u,n),u=qv(u,n),f=Sp(f),f=Wv(f,n),f=qv(f,n),u=Yv(u),f=Yv(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=N+S+u,D=N+y+f,I=Gv(r,r.VERTEX_SHADER,U),F=Gv(r,r.FRAGMENT_SHADER,D);r.attachShader(T,I),r.attachShader(T,F),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function B(H){if(o.debug.checkShaderErrors){const Y=r.getProgramInfoLog(T)||"",ae=r.getShaderInfoLog(I)||"",re=r.getShaderInfoLog(F)||"",ie=Y.trim(),O=ae.trim(),K=re.trim();let q=!0,ye=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,I,F);else{const L=Xv(r,I,"vertex"),J=Xv(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ie+`
`+L+`
`+J)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(O===""||K==="")&&(ye=!1);ye&&(H.diagnostics={runnable:q,programLog:ie,vertexShader:{log:O,prefix:S},fragmentShader:{log:K,prefix:y}})}r.deleteShader(I),r.deleteShader(F),V=new Mu(r,T),C=wR(r,T)}let V;this.getUniforms=function(){return V===void 0&&B(this),V};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(T,yR)),w},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=F,this}let HR=0;class VR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new GR(e),n.set(e,a)),a}}class GR{constructor(e){this.id=HR++,this.code=e,this.usedTimes=0}}function kR(o,e,n,a,r,l,u){const f=new Ey,p=new VR,h=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return h.add(C),C===0?"uv":`uv${C}`}function S(C,w,H,Y,ae){const re=Y.fog,ie=ae.geometry,O=C.isMeshStandardMaterial?Y.environment:null,K=(C.isMeshStandardMaterial?n:e).get(C.envMap||O),q=K&&K.mapping===Du?K.image.height:null,ye=M[C.type];C.precision!==null&&(x=r.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const L=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,J=L!==void 0?L.length:0;let he=0;ie.morphAttributes.position!==void 0&&(he=1),ie.morphAttributes.normal!==void 0&&(he=2),ie.morphAttributes.color!==void 0&&(he=3);let ge,Ae,Be,ee;if(ye){const At=qi[ye];ge=At.vertexShader,Ae=At.fragmentShader}else ge=C.vertexShader,Ae=C.fragmentShader,p.update(C),Be=p.getVertexShaderID(C),ee=p.getFragmentShaderID(C);const pe=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ye=ae.isInstancedMesh===!0,ke=ae.isBatchedMesh===!0,ft=!!C.map,en=!!C.matcap,G=!!K,Ct=!!C.aoMap,Je=!!C.lightMap,Ze=!!C.bumpMap,Oe=!!C.normalMap,Wt=!!C.displacementMap,Ve=!!C.emissiveMap,ot=!!C.metalnessMap,Zt=!!C.roughnessMap,Qt=C.anisotropy>0,P=C.clearcoat>0,b=C.dispersion>0,ne=C.iridescence>0,fe=C.sheen>0,_e=C.transmission>0,ue=Qt&&!!C.anisotropyMap,Pe=P&&!!C.clearcoatMap,Re=P&&!!C.clearcoatNormalMap,Xe=P&&!!C.clearcoatRoughnessMap,qe=ne&&!!C.iridescenceMap,Se=ne&&!!C.iridescenceThicknessMap,Le=fe&&!!C.sheenColorMap,Ke=fe&&!!C.sheenRoughnessMap,Ge=!!C.specularMap,Ce=!!C.specularColorMap,lt=!!C.specularIntensityMap,W=_e&&!!C.transmissionMap,be=_e&&!!C.thicknessMap,we=!!C.gradientMap,Ie=!!C.alphaMap,Me=C.alphaTest>0,xe=!!C.alphaHash,He=!!C.extensions;let st=hs;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(st=o.toneMapping);const Ut={shaderID:ye,shaderType:C.type,shaderName:C.name,vertexShader:ge,fragmentShader:Ae,defines:C.defines,customVertexShaderID:Be,customFragmentShaderID:ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:ke,batchingColor:ke&&ae._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&ae.instanceColor!==null,instancingMorph:Ye&&ae.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:pe===null?o.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Gn,alphaToCoverage:!!C.alphaToCoverage,map:ft,matcap:en,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:q,aoMap:Ct,lightMap:Je,bumpMap:Ze,normalMap:Oe,displacementMap:v&&Wt,emissiveMap:Ve,normalMapObjectSpace:Oe&&C.normalMapType===GM,normalMapTangentSpace:Oe&&C.normalMapType===yy,metalnessMap:ot,roughnessMap:Zt,anisotropy:Qt,anisotropyMap:ue,clearcoat:P,clearcoatMap:Pe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Xe,dispersion:b,iridescence:ne,iridescenceMap:qe,iridescenceThicknessMap:Se,sheen:fe,sheenColorMap:Le,sheenRoughnessMap:Ke,specularMap:Ge,specularColorMap:Ce,specularIntensityMap:lt,transmission:_e,transmissionMap:W,thicknessMap:be,gradientMap:we,opaque:C.transparent===!1&&C.blending===Hs&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:xe,combine:C.combine,mapUv:ft&&T(C.map.channel),aoMapUv:Ct&&T(C.aoMap.channel),lightMapUv:Je&&T(C.lightMap.channel),bumpMapUv:Ze&&T(C.bumpMap.channel),normalMapUv:Oe&&T(C.normalMap.channel),displacementMapUv:Wt&&T(C.displacementMap.channel),emissiveMapUv:Ve&&T(C.emissiveMap.channel),metalnessMapUv:ot&&T(C.metalnessMap.channel),roughnessMapUv:Zt&&T(C.roughnessMap.channel),anisotropyMapUv:ue&&T(C.anisotropyMap.channel),clearcoatMapUv:Pe&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&T(C.sheenRoughnessMap.channel),specularMapUv:Ge&&T(C.specularMap.channel),specularColorMapUv:Ce&&T(C.specularColorMap.channel),specularIntensityMapUv:lt&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:be&&T(C.thicknessMap.channel),alphaMapUv:Ie&&T(C.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Oe||Qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!ie.attributes.uv&&(ft||Ie),fog:!!re,useFog:C.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:ae.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:st,decodeVideoTexture:ft&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ve&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===Vt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Yi,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:He&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&C.extensions.multiDraw===!0||ke)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ut.vertexUv1s=h.has(1),Ut.vertexUv2s=h.has(2),Ut.vertexUv3s=h.has(3),h.clear(),Ut}function y(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)w.push(H),w.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(N(w,C),U(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function N(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function U(C,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),w.gradientMap&&f.enable(22),C.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),C.push(f.mask)}function D(C){const w=M[C.type];let H;if(w){const Y=qi[w];H=wy.clone(Y.uniforms)}else H=C.uniforms;return H}function I(C,w){let H;for(let Y=0,ae=g.length;Y<ae;Y++){const re=g[Y];if(re.cacheKey===w){H=re,++H.usedTimes;break}}return H===void 0&&(H=new FR(o,w,C,l),g.push(H)),H}function F(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function B(C){p.remove(C)}function V(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:D,acquireProgram:I,releaseProgram:F,releaseShaderCache:B,programs:g,dispose:V}}function XR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function r(u,f,p){o.get(u)[f]=p}function l(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:l}}function WR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Kv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Zv(){const o=[];let e=0;const n=[],a=[],r=[];function l(){e=0,n.length=0,a.length=0,r.length=0}function u(_,v,x,M,T,S){let y=o[e];return y===void 0?(y={id:_.id,object:_,geometry:v,material:x,groupOrder:M,renderOrder:_.renderOrder,z:T,group:S},o[e]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=_.renderOrder,y.z=T,y.group=S),e++,y}function f(_,v,x,M,T,S){const y=u(_,v,x,M,T,S);x.transmission>0?a.push(y):x.transparent===!0?r.push(y):n.push(y)}function p(_,v,x,M,T,S){const y=u(_,v,x,M,T,S);x.transmission>0?a.unshift(y):x.transparent===!0?r.unshift(y):n.unshift(y)}function h(_,v){n.length>1&&n.sort(_||WR),a.length>1&&a.sort(v||Kv),r.length>1&&r.sort(v||Kv)}function g(){for(let _=e,v=o.length;_<v;_++){const x=o[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:f,unshift:p,finish:g,sort:h}}function qR(){let o=new WeakMap;function e(a,r){const l=o.get(a);let u;return l===void 0?(u=new Zv,o.set(a,[u])):r>=l.length?(u=new Zv,l.push(u)):u=l[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function YR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new ct};break;case"SpotLight":n={position:new k,direction:new k,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=n,n}}}function jR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let KR=0;function ZR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function QR(o){const e=new YR,n=jR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new k);const r=new k,l=new pt,u=new pt;function f(h){let g=0,_=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,N=0,U=0,D=0,I=0,F=0,B=0;h.sort(ZR);for(let C=0,w=h.length;C<w;C++){const H=h[C],Y=H.color,ae=H.intensity,re=H.distance,ie=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Y.r*ae,_+=Y.g*ae,v+=Y.b*ae;else if(H.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(H.sh.coefficients[O],ae);B++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,q=n.get(H);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,a.directionalShadow[x]=q,a.directionalShadowMap[x]=ie,a.directionalShadowMatrix[x]=H.shadow.matrix,N++}a.directional[x]=O,x++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(Y).multiplyScalar(ae),O.distance=re,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,a.spot[T]=O;const K=H.shadow;if(H.map&&(a.spotLightMap[I]=H.map,I++,K.updateMatrices(H),H.castShadow&&F++),a.spotLightMatrix[T]=K.matrix,H.castShadow){const q=n.get(H);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,a.spotShadow[T]=q,a.spotShadowMap[T]=ie,D++}T++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(Y).multiplyScalar(ae),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=O,S++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const K=H.shadow,q=n.get(H);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,a.pointShadow[M]=q,a.pointShadowMap[M]=ie,a.pointShadowMatrix[M]=H.shadow.matrix,U++}a.point[M]=O,M++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(ae),O.groundColor.copy(H.groundColor).multiplyScalar(ae),a.hemi[y]=O,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const V=a.hash;(V.directionalLength!==x||V.pointLength!==M||V.spotLength!==T||V.rectAreaLength!==S||V.hemiLength!==y||V.numDirectionalShadows!==N||V.numPointShadows!==U||V.numSpotShadows!==D||V.numSpotMaps!==I||V.numLightProbes!==B)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=D+I-F,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=B,V.directionalLength=x,V.pointLength=M,V.spotLength=T,V.rectAreaLength=S,V.hemiLength=y,V.numDirectionalShadows=N,V.numPointShadows=U,V.numSpotShadows=D,V.numSpotMaps=I,V.numLightProbes=B,a.version=KR++)}function p(h,g){let _=0,v=0,x=0,M=0,T=0;const S=g.matrixWorldInverse;for(let y=0,N=h.length;y<N;y++){const U=h[y];if(U.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(S),_++}else if(U.isSpotLight){const D=a.spot[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(S),x++}else if(U.isRectAreaLight){const D=a.rectArea[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),u.identity(),l.copy(U.matrixWorld),l.premultiply(S),u.extractRotation(l),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const D=a.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(S),T++}}}return{setup:f,setupView:p,state:a}}function Qv(o){const e=new QR(o),n=[],a=[];function r(g){h.camera=g,n.length=0,a.length=0}function l(g){n.push(g)}function u(g){a.push(g)}function f(){e.setup(n)}function p(g){e.setupView(n,g)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function JR(o){let e=new WeakMap;function n(r,l=0){const u=e.get(r);let f;return u===void 0?(f=new Qv(o),e.set(r,[f])):l>=u.length?(f=new Qv(o),u.push(f)):f=u[l],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const $R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tw(o,e,n){let a=new Hp;const r=new at,l=new at,u=new Lt,f=new $E({depthPacking:VM}),p=new eT,h={},g=n.maxTextureSize,_={[wa]:Vn,[Vn]:wa,[Yi]:Yi},v=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:$R,fragmentShader:ew}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new di;M.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new On(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ry;let y=this.type;this.render=function(F,B,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const C=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(fs),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ae=y!==Ea&&this.type===Ea,re=y===Ea&&this.type!==Ea;for(let ie=0,O=F.length;ie<O;ie++){const K=F[ie],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ye=q.getFrameExtents();if(r.multiply(ye),l.copy(q.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(l.x=Math.floor(g/ye.x),r.x=l.x*ye.x,q.mapSize.x=l.x),r.y>g&&(l.y=Math.floor(g/ye.y),r.y=l.y*ye.y,q.mapSize.y=l.y)),q.map===null||ae===!0||re===!0){const J=this.type!==Ea?{minFilter:Kn,magFilter:Kn}:{};q.map!==null&&q.map.dispose(),q.map=new Gs(r.x,r.y,J),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const L=q.getViewportCount();for(let J=0;J<L;J++){const he=q.getViewport(J);u.set(l.x*he.x,l.y*he.y,l.x*he.z,l.y*he.w),Y.viewport(u),q.updateMatrices(K,J),a=q.getFrustum(),D(B,V,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Ea&&N(q,V),q.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(C,w,H)};function N(F,B){const V=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Gs(r.x,r.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(B,null,V,v,T,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(B,null,V,x,T,null)}function U(F,B,V,C){let w=null;const H=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)w=H;else if(w=V.isPointLight===!0?p:f,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=w.uuid,ae=B.uuid;let re=h[Y];re===void 0&&(re={},h[Y]=re);let ie=re[ae];ie===void 0&&(ie=w.clone(),re[ae]=ie,B.addEventListener("dispose",I)),w=ie}if(w.visible=B.visible,w.wireframe=B.wireframe,C===Ea?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:_[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=o.properties.get(w);Y.light=V}return w}function D(F,B,V,C,w){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Ea)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const ae=e.update(F),re=F.material;if(Array.isArray(re)){const ie=ae.groups;for(let O=0,K=ie.length;O<K;O++){const q=ie[O],ye=re[q.materialIndex];if(ye&&ye.visible){const L=U(F,ye,C,w);F.onBeforeShadow(o,F,B,V,ae,L,q),o.renderBufferDirect(V,null,ae,L,F,q),F.onAfterShadow(o,F,B,V,ae,L,q)}}}else if(re.visible){const ie=U(F,re,C,w);F.onBeforeShadow(o,F,B,V,ae,ie,null),o.renderBufferDirect(V,null,ae,ie,F,null),F.onAfterShadow(o,F,B,V,ae,ie,null)}}const Y=F.children;for(let ae=0,re=Y.length;ae<re;ae++)D(Y[ae],B,V,C,w)}function I(F){F.target.removeEventListener("dispose",I);for(const V in h){const C=h[V],w=F.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const nw={[Pd]:Id,[Bd]:Hd,[zd]:Vd,[Yr]:Fd,[Id]:Pd,[Hd]:Bd,[Vd]:zd,[Fd]:Yr};function iw(o,e){function n(){let W=!1;const be=new Lt;let we=null;const Ie=new Lt(0,0,0,0);return{setMask:function(Me){we!==Me&&!W&&(o.colorMask(Me,Me,Me,Me),we=Me)},setLocked:function(Me){W=Me},setClear:function(Me,xe,He,st,Ut){Ut===!0&&(Me*=st,xe*=st,He*=st),be.set(Me,xe,He,st),Ie.equals(be)===!1&&(o.clearColor(Me,xe,He,st),Ie.copy(be))},reset:function(){W=!1,we=null,Ie.set(-1,0,0,0)}}}function a(){let W=!1,be=!1,we=null,Ie=null,Me=null;return{setReversed:function(xe){if(be!==xe){const He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),be=xe;const st=Me;Me=null,this.setClear(st)}},getReversed:function(){return be},setTest:function(xe){xe?pe(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(xe){we!==xe&&!W&&(o.depthMask(xe),we=xe)},setFunc:function(xe){if(be&&(xe=nw[xe]),Ie!==xe){switch(xe){case Pd:o.depthFunc(o.NEVER);break;case Id:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case Yr:o.depthFunc(o.LEQUAL);break;case zd:o.depthFunc(o.EQUAL);break;case Fd:o.depthFunc(o.GEQUAL);break;case Hd:o.depthFunc(o.GREATER);break;case Vd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Me!==xe&&(be&&(xe=1-xe),o.clearDepth(xe),Me=xe)},reset:function(){W=!1,we=null,Ie=null,Me=null,be=!1}}}function r(){let W=!1,be=null,we=null,Ie=null,Me=null,xe=null,He=null,st=null,Ut=null;return{setTest:function(At){W||(At?pe(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(At){be!==At&&!W&&(o.stencilMask(At),be=At)},setFunc:function(At,Ti,hn){(we!==At||Ie!==Ti||Me!==hn)&&(o.stencilFunc(At,Ti,hn),we=At,Ie=Ti,Me=hn)},setOp:function(At,Ti,hn){(xe!==At||He!==Ti||st!==hn)&&(o.stencilOp(At,Ti,hn),xe=At,He=Ti,st=hn)},setLocked:function(At){W=At},setClear:function(At){Ut!==At&&(o.clearStencil(At),Ut=At)},reset:function(){W=!1,be=null,we=null,Ie=null,Me=null,xe=null,He=null,st=null,Ut=null}}}const l=new n,u=new a,f=new r,p=new WeakMap,h=new WeakMap;let g={},_={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,N=null,U=null,D=null,I=null,F=null,B=new ct(0,0,0),V=0,C=!1,w=null,H=null,Y=null,ae=null,re=null;const ie=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=K>=2);let ye=null,L={};const J=o.getParameter(o.SCISSOR_BOX),he=o.getParameter(o.VIEWPORT),ge=new Lt().fromArray(J),Ae=new Lt().fromArray(he);function Be(W,be,we,Ie){const Me=new Uint8Array(4),xe=o.createTexture();o.bindTexture(W,xe),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let He=0;He<we;He++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(be+He,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return xe}const ee={};ee[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),ee[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ee[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pe(o.DEPTH_TEST),u.setFunc(Yr),Ze(!1),Oe(P0),pe(o.CULL_FACE),Ct(fs);function pe(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Te(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Ye(W,be){return _[W]!==be?(o.bindFramebuffer(W,be),_[W]=be,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=be),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=be),!0):!1}function ke(W,be){let we=x,Ie=!1;if(W){we=v.get(be),we===void 0&&(we=[],v.set(be,we));const Me=W.textures;if(we.length!==Me.length||we[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,He=Me.length;xe<He;xe++)we[xe]=o.COLOR_ATTACHMENT0+xe;we.length=Me.length,Ie=!0}}else we[0]!==o.BACK&&(we[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(we)}function ft(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const en={[zs]:o.FUNC_ADD,[dM]:o.FUNC_SUBTRACT,[pM]:o.FUNC_REVERSE_SUBTRACT};en[mM]=o.MIN,en[gM]=o.MAX;const G={[_M]:o.ZERO,[vM]:o.ONE,[yM]:o.SRC_COLOR,[Nd]:o.SRC_ALPHA,[bM]:o.SRC_ALPHA_SATURATE,[EM]:o.DST_COLOR,[SM]:o.DST_ALPHA,[xM]:o.ONE_MINUS_SRC_COLOR,[Od]:o.ONE_MINUS_SRC_ALPHA,[TM]:o.ONE_MINUS_DST_COLOR,[MM]:o.ONE_MINUS_DST_ALPHA,[AM]:o.CONSTANT_COLOR,[RM]:o.ONE_MINUS_CONSTANT_COLOR,[wM]:o.CONSTANT_ALPHA,[CM]:o.ONE_MINUS_CONSTANT_ALPHA};function Ct(W,be,we,Ie,Me,xe,He,st,Ut,At){if(W===fs){T===!0&&(Te(o.BLEND),T=!1);return}if(T===!1&&(pe(o.BLEND),T=!0),W!==hM){if(W!==S||At!==C){if((y!==zs||D!==zs)&&(o.blendEquation(o.FUNC_ADD),y=zs,D=zs),At)switch(W){case Hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eu:o.blendFunc(o.ONE,o.ONE);break;case I0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case B0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eu:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case I0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}N=null,U=null,I=null,F=null,B.set(0,0,0),V=0,S=W,C=At}return}Me=Me||be,xe=xe||we,He=He||Ie,(be!==y||Me!==D)&&(o.blendEquationSeparate(en[be],en[Me]),y=be,D=Me),(we!==N||Ie!==U||xe!==I||He!==F)&&(o.blendFuncSeparate(G[we],G[Ie],G[xe],G[He]),N=we,U=Ie,I=xe,F=He),(st.equals(B)===!1||Ut!==V)&&(o.blendColor(st.r,st.g,st.b,Ut),B.copy(st),V=Ut),S=W,C=!1}function Je(W,be){W.side===Yi?Te(o.CULL_FACE):pe(o.CULL_FACE);let we=W.side===Vn;be&&(we=!we),Ze(we),W.blending===Hs&&W.transparent===!1?Ct(fs):Ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ie=W.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pe(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(W){w!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),w=W)}function Oe(W){W!==cM?(pe(o.CULL_FACE),W!==H&&(W===P0?o.cullFace(o.BACK):W===uM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),H=W}function Wt(W){W!==Y&&(O&&o.lineWidth(W),Y=W)}function Ve(W,be,we){W?(pe(o.POLYGON_OFFSET_FILL),(ae!==be||re!==we)&&(o.polygonOffset(be,we),ae=be,re=we)):Te(o.POLYGON_OFFSET_FILL)}function ot(W){W?pe(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function Zt(W){W===void 0&&(W=o.TEXTURE0+ie-1),ye!==W&&(o.activeTexture(W),ye=W)}function Qt(W,be,we){we===void 0&&(ye===null?we=o.TEXTURE0+ie-1:we=ye);let Ie=L[we];Ie===void 0&&(Ie={type:void 0,texture:void 0},L[we]=Ie),(Ie.type!==W||Ie.texture!==be)&&(ye!==we&&(o.activeTexture(we),ye=we),o.bindTexture(W,be||ee[W]),Ie.type=W,Ie.texture=be)}function P(){const W=L[ye];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ne(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(W){ge.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Ke(W){Ae.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Ge(W,be){let we=h.get(be);we===void 0&&(we=new WeakMap,h.set(be,we));let Ie=we.get(W);Ie===void 0&&(Ie=o.getUniformBlockIndex(be,W.name),we.set(W,Ie))}function Ce(W,be){const Ie=h.get(be).get(W);p.get(be)!==Ie&&(o.uniformBlockBinding(be,Ie,W.__bindingPointIndex),p.set(be,Ie))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ye=null,L={},_={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,N=null,U=null,D=null,I=null,F=null,B=new ct(0,0,0),V=0,C=!1,w=null,H=null,Y=null,ae=null,re=null,ge.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:pe,disable:Te,bindFramebuffer:Ye,drawBuffers:ke,useProgram:ft,setBlending:Ct,setMaterial:Je,setFlipSided:Ze,setCullFace:Oe,setLineWidth:Wt,setPolygonOffset:Ve,setScissorTest:ot,activeTexture:Zt,bindTexture:Qt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:ne,texImage2D:qe,texImage3D:Se,updateUBOMapping:Ge,uniformBlockBinding:Ce,texStorage2D:Re,texStorage3D:Xe,texSubImage2D:fe,texSubImage3D:_e,compressedTexSubImage2D:ue,compressedTexSubImage3D:Pe,scissor:Le,viewport:Ke,reset:lt}}function aw(o,e,n,a,r,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,b){return x?new OffscreenCanvas(P,b):bl("canvas")}function T(P,b,ne){let fe=1;const _e=Qt(P);if((_e.width>ne||_e.height>ne)&&(fe=ne/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(fe*_e.width),Pe=Math.floor(fe*_e.height);_===void 0&&(_=M(ue,Pe));const Re=b?M(ue,Pe):_;return Re.width=ue,Re.height=Pe,Re.getContext("2d").drawImage(P,0,0,ue,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+Pe+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){o.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(P,b,ne,fe,_e=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=b;if(b===o.RED&&(ne===o.FLOAT&&(ue=o.R32F),ne===o.HALF_FLOAT&&(ue=o.R16F),ne===o.UNSIGNED_BYTE&&(ue=o.R8)),b===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ue=o.R8UI),ne===o.UNSIGNED_SHORT&&(ue=o.R16UI),ne===o.UNSIGNED_INT&&(ue=o.R32UI),ne===o.BYTE&&(ue=o.R8I),ne===o.SHORT&&(ue=o.R16I),ne===o.INT&&(ue=o.R32I)),b===o.RG&&(ne===o.FLOAT&&(ue=o.RG32F),ne===o.HALF_FLOAT&&(ue=o.RG16F),ne===o.UNSIGNED_BYTE&&(ue=o.RG8)),b===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ue=o.RG8UI),ne===o.UNSIGNED_SHORT&&(ue=o.RG16UI),ne===o.UNSIGNED_INT&&(ue=o.RG32UI),ne===o.BYTE&&(ue=o.RG8I),ne===o.SHORT&&(ue=o.RG16I),ne===o.INT&&(ue=o.RG32I)),b===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),ne===o.UNSIGNED_INT&&(ue=o.RGB32UI),ne===o.BYTE&&(ue=o.RGB8I),ne===o.SHORT&&(ue=o.RGB16I),ne===o.INT&&(ue=o.RGB32I)),b===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),ne===o.UNSIGNED_INT&&(ue=o.RGBA32UI),ne===o.BYTE&&(ue=o.RGBA8I),ne===o.SHORT&&(ue=o.RGBA16I),ne===o.INT&&(ue=o.RGBA32I)),b===o.RGB&&(ne===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),ne===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),b===o.RGBA){const Pe=_e?Au:bt.getTransfer(fe);ne===o.FLOAT&&(ue=o.RGBA32F),ne===o.HALF_FLOAT&&(ue=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(ue=Pe===Vt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function D(P,b){let ne;return P?b===null||b===Vs||b===xl?ne=o.DEPTH24_STENCIL8:b===ni?ne=o.DEPTH32F_STENCIL8:b===yl&&(ne=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vs||b===xl?ne=o.DEPTH_COMPONENT24:b===ni?ne=o.DEPTH_COMPONENT32F:b===yl&&(ne=o.DEPTH_COMPONENT16),ne}function I(P,b){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kn&&P.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function F(P){const b=P.target;b.removeEventListener("dispose",F),V(b),b.isVideoTexture&&g.delete(b)}function B(P){const b=P.target;b.removeEventListener("dispose",B),w(b)}function V(P){const b=a.get(P);if(b.__webglInit===void 0)return;const ne=P.source,fe=v.get(ne);if(fe){const _e=fe[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(P),Object.keys(fe).length===0&&v.delete(ne)}a.remove(P)}function C(P){const b=a.get(P);o.deleteTexture(b.__webglTexture);const ne=P.source,fe=v.get(ne);delete fe[b.__cacheKey],u.memory.textures--}function w(P){const b=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let _e=0;_e<b.__webglFramebuffer[fe].length;_e++)o.deleteFramebuffer(b.__webglFramebuffer[fe][_e]);else o.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)o.deleteFramebuffer(b.__webglFramebuffer[fe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=P.textures;for(let fe=0,_e=ne.length;fe<_e;fe++){const ue=a.get(ne[fe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),u.memory.textures--),a.remove(ne[fe])}a.remove(P)}let H=0;function Y(){H=0}function ae(){const P=H;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),H+=1,P}function re(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ie(P,b){const ne=a.get(P);if(P.isVideoTexture&&ot(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ne.__version!==P.version){const fe=P.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(ne,P,b);return}}else P.isExternalTexture&&(ne.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+b)}function O(P,b){const ne=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){ee(ne,P,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+b)}function K(P,b){const ne=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){ee(ne,P,b);return}n.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+b)}function q(P,b){const ne=a.get(P);if(P.version>0&&ne.__version!==P.version){pe(ne,P,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+b)}const ye={[Zr]:o.REPEAT,[ji]:o.CLAMP_TO_EDGE,[bu]:o.MIRRORED_REPEAT},L={[Kn]:o.NEAREST,[uy]:o.NEAREST_MIPMAP_NEAREST,[pl]:o.NEAREST_MIPMAP_LINEAR,[Rn]:o.LINEAR,[_u]:o.LINEAR_MIPMAP_NEAREST,[Ki]:o.LINEAR_MIPMAP_LINEAR},J={[kM]:o.NEVER,[KM]:o.ALWAYS,[XM]:o.LESS,[xy]:o.LEQUAL,[WM]:o.EQUAL,[jM]:o.GEQUAL,[qM]:o.GREATER,[YM]:o.NOTEQUAL};function he(P,b){if(b.type===ni&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===_u||b.magFilter===pl||b.magFilter===Ki||b.minFilter===Rn||b.minFilter===_u||b.minFilter===pl||b.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ye[b.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ye[b.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ye[b.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,L[b.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kn||b.minFilter!==pl&&b.minFilter!==Ki||b.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function ge(P,b){let ne=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",F));const fe=b.source;let _e=v.get(fe);_e===void 0&&(_e={},v.set(fe,_e));const ue=re(b);if(ue!==P.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),_e[ue].usedTimes++;const Pe=_e[P.__cacheKey];Pe!==void 0&&(_e[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&C(b)),P.__cacheKey=ue,P.__webglTexture=_e[ue].texture}return ne}function Ae(P,b,ne){return Math.floor(Math.floor(P/ne)/b)}function Be(P,b,ne,fe){const ue=P.updateRanges;if(ue.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,ne,fe,b.data);else{ue.sort((Se,Le)=>Se.start-Le.start);let Pe=0;for(let Se=1;Se<ue.length;Se++){const Le=ue[Pe],Ke=ue[Se],Ge=Le.start+Le.count,Ce=Ae(Ke.start,b.width,4),lt=Ae(Le.start,b.width,4);Ke.start<=Ge+1&&Ce===lt&&Ae(Ke.start+Ke.count-1,b.width,4)===Ce?Le.count=Math.max(Le.count,Ke.start+Ke.count-Le.start):(++Pe,ue[Pe]=Ke)}ue.length=Pe+1;const Re=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),qe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Se=0,Le=ue.length;Se<Le;Se++){const Ke=ue[Se],Ge=Math.floor(Ke.start/4),Ce=Math.ceil(Ke.count/4),lt=Ge%b.width,W=Math.floor(Ge/b.width),be=Ce,we=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),n.texSubImage2D(o.TEXTURE_2D,0,lt,W,be,we,ne,fe,b.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Re),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,qe)}}function ee(P,b,ne){let fe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=o.TEXTURE_3D);const _e=ge(P,b),ue=b.source;n.bindTexture(fe,P.__webglTexture,o.TEXTURE0+ne);const Pe=a.get(ue);if(ue.version!==Pe.__version||_e===!0){n.activeTexture(o.TEXTURE0+ne);const Re=bt.getPrimaries(bt.workingColorSpace),Xe=b.colorSpace===ls?null:bt.getPrimaries(b.colorSpace),qe=b.colorSpace===ls||Re===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Se=T(b.image,!1,r.maxTextureSize);Se=Zt(b,Se);const Le=l.convert(b.format,b.colorSpace),Ke=l.convert(b.type);let Ge=U(b.internalFormat,Le,Ke,b.colorSpace,b.isVideoTexture);he(fe,b);let Ce;const lt=b.mipmaps,W=b.isVideoTexture!==!0,be=Pe.__version===void 0||_e===!0,we=ue.dataReady,Ie=I(b,Se);if(b.isDepthTexture)Ge=D(b.format===Ml,b.type),be&&(W?n.texStorage2D(o.TEXTURE_2D,1,Ge,Se.width,Se.height):n.texImage2D(o.TEXTURE_2D,0,Ge,Se.width,Se.height,0,Le,Ke,null));else if(b.isDataTexture)if(lt.length>0){W&&be&&n.texStorage2D(o.TEXTURE_2D,Ie,Ge,lt[0].width,lt[0].height);for(let Me=0,xe=lt.length;Me<xe;Me++)Ce=lt[Me],W?we&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Le,Ke,Ce.data):n.texImage2D(o.TEXTURE_2D,Me,Ge,Ce.width,Ce.height,0,Le,Ke,Ce.data);b.generateMipmaps=!1}else W?(be&&n.texStorage2D(o.TEXTURE_2D,Ie,Ge,Se.width,Se.height),we&&Be(b,Se,Le,Ke)):n.texImage2D(o.TEXTURE_2D,0,Ge,Se.width,Se.height,0,Le,Ke,Se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&be&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Ge,lt[0].width,lt[0].height,Se.depth);for(let Me=0,xe=lt.length;Me<xe;Me++)if(Ce=lt[Me],b.format!==Ei)if(Le!==null)if(W){if(we)if(b.layerUpdates.size>0){const He=Rv(Ce.width,Ce.height,b.format,b.type);for(const st of b.layerUpdates){const Ut=Ce.data.subarray(st*He/Ce.data.BYTES_PER_ELEMENT,(st+1)*He/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,st,Ce.width,Ce.height,1,Le,Ut)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,Se.depth,Le,Ce.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Ge,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?we&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,Se.depth,Le,Ke,Ce.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Me,Ge,Ce.width,Ce.height,Se.depth,0,Le,Ke,Ce.data)}else{W&&be&&n.texStorage2D(o.TEXTURE_2D,Ie,Ge,lt[0].width,lt[0].height);for(let Me=0,xe=lt.length;Me<xe;Me++)Ce=lt[Me],b.format!==Ei?Le!==null?W?we&&n.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Le,Ce.data):n.compressedTexImage2D(o.TEXTURE_2D,Me,Ge,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?we&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Le,Ke,Ce.data):n.texImage2D(o.TEXTURE_2D,Me,Ge,Ce.width,Ce.height,0,Le,Ke,Ce.data)}else if(b.isDataArrayTexture)if(W){if(be&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Ge,Se.width,Se.height,Se.depth),we)if(b.layerUpdates.size>0){const Me=Rv(Se.width,Se.height,b.format,b.type);for(const xe of b.layerUpdates){const He=Se.data.subarray(xe*Me/Se.data.BYTES_PER_ELEMENT,(xe+1)*Me/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,Se.width,Se.height,1,Le,Ke,He)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Le,Ke,Se.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ge,Se.width,Se.height,Se.depth,0,Le,Ke,Se.data);else if(b.isData3DTexture)W?(be&&n.texStorage3D(o.TEXTURE_3D,Ie,Ge,Se.width,Se.height,Se.depth),we&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Le,Ke,Se.data)):n.texImage3D(o.TEXTURE_3D,0,Ge,Se.width,Se.height,Se.depth,0,Le,Ke,Se.data);else if(b.isFramebufferTexture){if(be)if(W)n.texStorage2D(o.TEXTURE_2D,Ie,Ge,Se.width,Se.height);else{let Me=Se.width,xe=Se.height;for(let He=0;He<Ie;He++)n.texImage2D(o.TEXTURE_2D,He,Ge,Me,xe,0,Le,Ke,null),Me>>=1,xe>>=1}}else if(lt.length>0){if(W&&be){const Me=Qt(lt[0]);n.texStorage2D(o.TEXTURE_2D,Ie,Ge,Me.width,Me.height)}for(let Me=0,xe=lt.length;Me<xe;Me++)Ce=lt[Me],W?we&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,Le,Ke,Ce):n.texImage2D(o.TEXTURE_2D,Me,Ge,Le,Ke,Ce);b.generateMipmaps=!1}else if(W){if(be){const Me=Qt(Se);n.texStorage2D(o.TEXTURE_2D,Ie,Ge,Me.width,Me.height)}we&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Le,Ke,Se)}else n.texImage2D(o.TEXTURE_2D,0,Ge,Le,Ke,Se);S(b)&&y(fe),Pe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function pe(P,b,ne){if(b.image.length!==6)return;const fe=ge(P,b),_e=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+ne);const ue=a.get(_e);if(_e.version!==ue.__version||fe===!0){n.activeTexture(o.TEXTURE0+ne);const Pe=bt.getPrimaries(bt.workingColorSpace),Re=b.colorSpace===ls?null:bt.getPrimaries(b.colorSpace),Xe=b.colorSpace===ls||Pe===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const qe=b.isCompressedTexture||b.image[0].isCompressedTexture,Se=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let xe=0;xe<6;xe++)!qe&&!Se?Le[xe]=T(b.image[xe],!0,r.maxCubemapSize):Le[xe]=Se?b.image[xe].image:b.image[xe],Le[xe]=Zt(b,Le[xe]);const Ke=Le[0],Ge=l.convert(b.format,b.colorSpace),Ce=l.convert(b.type),lt=U(b.internalFormat,Ge,Ce,b.colorSpace),W=b.isVideoTexture!==!0,be=ue.__version===void 0||fe===!0,we=_e.dataReady;let Ie=I(b,Ke);he(o.TEXTURE_CUBE_MAP,b);let Me;if(qe){W&&be&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,lt,Ke.width,Ke.height);for(let xe=0;xe<6;xe++){Me=Le[xe].mipmaps;for(let He=0;He<Me.length;He++){const st=Me[He];b.format!==Ei?Ge!==null?W?we&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,st.width,st.height,Ge,st.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,lt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?we&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,st.width,st.height,Ge,Ce,st.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,lt,st.width,st.height,0,Ge,Ce,st.data)}}}else{if(Me=b.mipmaps,W&&be){Me.length>0&&Ie++;const xe=Qt(Le[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,lt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Se){W?we&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Le[xe].width,Le[xe].height,Ge,Ce,Le[xe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Le[xe].width,Le[xe].height,0,Ge,Ce,Le[xe].data);for(let He=0;He<Me.length;He++){const Ut=Me[He].image[xe].image;W?we&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Ut.width,Ut.height,Ge,Ce,Ut.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,lt,Ut.width,Ut.height,0,Ge,Ce,Ut.data)}}else{W?we&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ge,Ce,Le[xe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Ge,Ce,Le[xe]);for(let He=0;He<Me.length;He++){const st=Me[He];W?we&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Ge,Ce,st.image[xe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,lt,Ge,Ce,st.image[xe])}}}S(b)&&y(o.TEXTURE_CUBE_MAP),ue.__version=_e.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Te(P,b,ne,fe,_e,ue){const Pe=l.convert(ne.format,ne.colorSpace),Re=l.convert(ne.type),Xe=U(ne.internalFormat,Pe,Re,ne.colorSpace),qe=a.get(b),Se=a.get(ne);if(Se.__renderTarget=b,!qe.__hasExternalTextures){const Le=Math.max(1,b.width>>ue),Ke=Math.max(1,b.height>>ue);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?n.texImage3D(_e,ue,Xe,Le,Ke,b.depth,0,Pe,Re,null):n.texImage2D(_e,ue,Xe,Le,Ke,0,Pe,Re,null)}n.bindFramebuffer(o.FRAMEBUFFER,P),Ve(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,_e,Se.__webglTexture,0,Wt(b)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,fe,_e,Se.__webglTexture,ue),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ye(P,b,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,P),b.depthBuffer){const fe=b.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,ue=D(b.stencilBuffer,_e),Pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=Wt(b);Ve(b)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,ue,b.width,b.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,ue,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ue,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,P)}else{const fe=b.textures;for(let _e=0;_e<fe.length;_e++){const ue=fe[_e],Pe=l.convert(ue.format,ue.colorSpace),Re=l.convert(ue.type),Xe=U(ue.internalFormat,Pe,Re,ue.colorSpace),qe=Wt(b);ne&&Ve(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Xe,b.width,b.height):Ve(b)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qe,Xe,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=a.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie(b.depthTexture,0);const _e=fe.__webglTexture,ue=Wt(b);if(b.depthTexture.format===Sl)Ve(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(b.depthTexture.format===Ml)Ve(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ft(P){const b=a.get(P),ne=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const fe=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const _e=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),b.__depthDisposeCallback=_e}b.__boundDepthTexture=fe}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const fe=P.texture.mipmaps;fe&&fe.length>0?ke(b.__webglFramebuffer[0],P):ke(b.__webglFramebuffer,P)}else if(ne){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=o.createRenderbuffer(),Ye(b.__webglDepthbuffer[fe],P,!1);else{const _e=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[fe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,ue)}}else{const fe=P.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ye(b.__webglDepthbuffer,P,!1);else{const _e=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,ue)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function en(P,b,ne){const fe=a.get(P);b!==void 0&&Te(fe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&ft(P)}function G(P){const b=P.texture,ne=a.get(P),fe=a.get(b);P.addEventListener("dispose",B);const _e=P.textures,ue=P.isWebGLCubeRenderTarget===!0,Pe=_e.length>1;if(Pe||(fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture()),fe.__version=b.version,u.memory.textures++),ue){ne.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[Re]=[];for(let Xe=0;Xe<b.mipmaps.length;Xe++)ne.__webglFramebuffer[Re][Xe]=o.createFramebuffer()}else ne.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)ne.__webglFramebuffer[Re]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let Re=0,Xe=_e.length;Re<Xe;Re++){const qe=a.get(_e[Re]);qe.__webglTexture===void 0&&(qe.__webglTexture=o.createTexture(),u.memory.textures++)}if(P.samples>0&&Ve(P)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Xe=_e[Re];ne.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[Re]);const qe=l.convert(Xe.format,Xe.colorSpace),Se=l.convert(Xe.type),Le=U(Xe.internalFormat,qe,Se,Xe.colorSpace,P.isXRRenderTarget===!0),Ke=Wt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,Le,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),Ye(ne.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){n.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),he(o.TEXTURE_CUBE_MAP,b);for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Te(ne.__webglFramebuffer[Re][Xe],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe);else Te(ne.__webglFramebuffer[Re],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(b)&&y(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let Re=0,Xe=_e.length;Re<Xe;Re++){const qe=_e[Re],Se=a.get(qe);let Le=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Le,Se.__webglTexture),he(Le,qe),Te(ne.__webglFramebuffer,P,qe,o.COLOR_ATTACHMENT0+Re,Le,0),S(qe)&&y(Le)}n.unbindTexture()}else{let Re=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Re,fe.__webglTexture),he(Re,b),b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Te(ne.__webglFramebuffer[Xe],P,b,o.COLOR_ATTACHMENT0,Re,Xe);else Te(ne.__webglFramebuffer,P,b,o.COLOR_ATTACHMENT0,Re,0);S(b)&&y(Re),n.unbindTexture()}P.depthBuffer&&ft(P)}function Ct(P){const b=P.textures;for(let ne=0,fe=b.length;ne<fe;ne++){const _e=b[ne];if(S(_e)){const ue=N(P),Pe=a.get(_e).__webglTexture;n.bindTexture(ue,Pe),y(ue),n.unbindTexture()}}}const Je=[],Ze=[];function Oe(P){if(P.samples>0){if(Ve(P)===!1){const b=P.textures,ne=P.width,fe=P.height;let _e=o.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=a.get(P),Re=b.length>1;if(Re)for(let qe=0;qe<b.length;qe++)n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Xe=P.texture.mipmaps;Xe&&Xe.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let qe=0;qe<b.length;qe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[qe]);const Se=a.get(b[qe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Se,0)}o.blitFramebuffer(0,0,ne,fe,0,0,ne,fe,_e,o.NEAREST),p===!0&&(Je.length=0,Ze.length=0,Je.push(o.COLOR_ATTACHMENT0+qe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(ue),Ze.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ze)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let qe=0;qe<b.length;qe++){n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[qe]);const Se=a.get(b[qe]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.TEXTURE_2D,Se,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const b=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Wt(P){return Math.min(r.maxSamples,P.samples)}function Ve(P){const b=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ot(P){const b=u.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function Zt(P,b){const ne=P.colorSpace,fe=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ne!==Gn&&ne!==ls&&(bt.getTransfer(ne)===Vt?(fe!==Ei||_e!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),b}function Qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=en,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ve}function sw(o,e){function n(a,r=ls){let l;const u=bt.getTransfer(r);if(a===Ji)return o.UNSIGNED_BYTE;if(a===Cp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Dp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===dy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===py)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===fy)return o.BYTE;if(a===hy)return o.SHORT;if(a===yl)return o.UNSIGNED_SHORT;if(a===wp)return o.INT;if(a===Vs)return o.UNSIGNED_INT;if(a===ni)return o.FLOAT;if(a===ba)return o.HALF_FLOAT;if(a===my)return o.ALPHA;if(a===gy)return o.RGB;if(a===Ei)return o.RGBA;if(a===Sl)return o.DEPTH_COMPONENT;if(a===Ml)return o.DEPTH_STENCIL;if(a===Lp)return o.RED;if(a===Up)return o.RED_INTEGER;if(a===_y)return o.RG;if(a===Np)return o.RG_INTEGER;if(a===Op)return o.RGBA_INTEGER;if(a===vu||a===yu||a===xu||a===Su)if(u===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===vu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===yu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===xu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===vu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===yu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===xu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Su)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===kd||a===Xd||a===Wd||a===qd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Xd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Wd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===qd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yd||a===jd||a===Kd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Yd||a===jd)return u===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Kd)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Zd||a===Qd||a===Jd||a===$d||a===ep||a===tp||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Zd)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Qd)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Jd)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===$d)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ep)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===tp)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===np)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ip)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ap)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===sp)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===rp)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===op)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===lp)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===cp)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===up||a===fp||a===hp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===up)return u===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===fp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===hp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===dp||a===pp||a===mp||a===gp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===dp)return l.COMPRESSED_RED_RGTC1_EXT;if(a===pp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===mp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===xl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const rw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ow=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Py(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Pi({vertexShader:rw,fragmentShader:ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new On(new Uu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cw extends ks{constructor(e,n){super();const a=this;let r=null,l=1,u=null,f="local-floor",p=1,h=null,g=null,_=null,v=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",S=new lw,y={},N=n.getContextAttributes();let U=null,D=null;const I=[],F=[],B=new at;let V=null;const C=new An;C.viewport=new Lt;const w=new An;w.viewport=new Lt;const H=[C,w],Y=new xT;let ae=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=I[ee];return pe===void 0&&(pe=new hd,I[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=I[ee];return pe===void 0&&(pe=new hd,I[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=I[ee];return pe===void 0&&(pe=new hd,I[ee]=pe),pe.getHandSpace()};function ie(ee){const pe=F.indexOf(ee.inputSource);if(pe===-1)return;const Te=I[pe];Te!==void 0&&(Te.update(ee.inputSource,ee.frame,h||u),Te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function O(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",K);for(let ee=0;ee<I.length;ee++){const pe=F[ee];pe!==null&&(F[ee]=null,I[ee].disconnect(pe))}ae=null,re=null,S.reset();for(const ee in y)delete y[ee];e.setRenderTarget(U),x=null,v=null,_=null,r=null,D=null,Be.stop(),a.isPresenting=!1,e.setPixelRatio(V),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(r,n)),_},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(U=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",O),r.addEventListener("inputsourceschange",K),N.xrCompatible!==!0&&await n.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ye=null,ke=null;N.depth&&(ke=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=N.stencil?Ml:Sl,Ye=N.stencil?xl:Vs);const ft={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(ft),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Gs(v.textureWidth,v.textureHeight,{format:Ei,type:Ji,depthTexture:new Oy(v.textureWidth,v.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,n,Te),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new Gs(x.framebufferWidth,x.framebufferHeight,{format:Ei,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await r.requestReferenceSpace(f),Be.setContext(r),Be.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(ee){for(let pe=0;pe<ee.removed.length;pe++){const Te=ee.removed[pe],Ye=F.indexOf(Te);Ye>=0&&(F[Ye]=null,I[Ye].disconnect(Te))}for(let pe=0;pe<ee.added.length;pe++){const Te=ee.added[pe];let Ye=F.indexOf(Te);if(Ye===-1){for(let ft=0;ft<I.length;ft++)if(ft>=F.length){F.push(Te),Ye=ft;break}else if(F[ft]===null){F[ft]=Te,Ye=ft;break}if(Ye===-1)break}const ke=I[Ye];ke&&ke.connect(Te)}}const q=new k,ye=new k;function L(ee,pe,Te){q.setFromMatrixPosition(pe.matrixWorld),ye.setFromMatrixPosition(Te.matrixWorld);const Ye=q.distanceTo(ye),ke=pe.projectionMatrix.elements,ft=Te.projectionMatrix.elements,en=ke[14]/(ke[10]-1),G=ke[14]/(ke[10]+1),Ct=(ke[9]+1)/ke[5],Je=(ke[9]-1)/ke[5],Ze=(ke[8]-1)/ke[0],Oe=(ft[8]+1)/ft[0],Wt=en*Ze,Ve=en*Oe,ot=Ye/(-Ze+Oe),Zt=ot*-Ze;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Zt),ee.translateZ(ot),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ke[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Qt=en+ot,P=G+ot,b=Wt-Zt,ne=Ve+(Ye-Zt),fe=Ct*G/P*Qt,_e=Je*G/P*Qt;ee.projectionMatrix.makePerspective(b,ne,fe,_e,Qt,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function J(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let pe=ee.near,Te=ee.far;S.texture!==null&&(S.depthNear>0&&(pe=S.depthNear),S.depthFar>0&&(Te=S.depthFar)),Y.near=w.near=C.near=pe,Y.far=w.far=C.far=Te,(ae!==Y.near||re!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ae=Y.near,re=Y.far),Y.layers.mask=ee.layers.mask|6,C.layers.mask=Y.layers.mask&3,w.layers.mask=Y.layers.mask&5;const Ye=ee.parent,ke=Y.cameras;J(Y,Ye);for(let ft=0;ft<ke.length;ft++)J(ke[ft],Ye);ke.length===2?L(Y,C,w):Y.projectionMatrix.copy(C.projectionMatrix),he(ee,Y,Ye)};function he(ee,pe,Te){Te===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(Te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Qr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(ee){p=ee,v!==null&&(v.fixedFoveation=ee),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(ee){return y[ee]};let ge=null;function Ae(ee,pe){if(g=pe.getViewerPose(h||u),M=pe,g!==null){const Te=g.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let Ye=!1;Te.length!==Y.cameras.length&&(Y.cameras.length=0,Ye=!0);for(let G=0;G<Te.length;G++){const Ct=Te[G];let Je=null;if(x!==null)Je=x.getViewport(Ct);else{const Oe=_.getViewSubImage(v,Ct);Je=Oe.viewport,G===0&&(e.setRenderTargetTextures(D,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(D))}let Ze=H[G];Ze===void 0&&(Ze=new An,Ze.layers.enable(G),Ze.viewport=new Lt,H[G]=Ze),Ze.matrix.fromArray(Ct.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Ct.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Je.x,Je.y,Je.width,Je.height),G===0&&(Y.matrix.copy(Ze.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ye===!0&&Y.cameras.push(Ze)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const G=_.getDepthInformation(Te[0]);G&&G.isValid&&G.texture&&S.init(G,r.renderState)}if(ke&&ke.includes("camera-access")&&T){e.state.unbindTexture(),_=a.getBinding();for(let G=0;G<Te.length;G++){const Ct=Te[G].camera;if(Ct){let Je=y[Ct];Je||(Je=new Py,y[Ct]=Je);const Ze=_.getCameraImage(Ct);Je.sourceTexture=Ze}}}}for(let Te=0;Te<I.length;Te++){const Ye=F[Te],ke=I[Te];Ye!==null&&ke!==void 0&&ke.update(Ye,pe,h||u)}ge&&ge(ee,pe),pe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Be=new Hy;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(ee){ge=ee},this.dispose=function(){}}}const Ps=new ea,uw=new pt;function fw(o,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,Ry(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function r(S,y,N,U,D){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,D)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?p(S,y,N,U):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Vn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Vn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),U=N.envMap,D=N.envMapRotation;U&&(S.envMap.value=U,Ps.copy(D),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),S.envMapRotation.value.setFromMatrix4(uw.makeRotationFromEuler(Ps)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,N,U){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=U*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function hw(o,e,n,a){let r={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,U){const D=U.program;a.uniformBlockBinding(N,D)}function h(N,U){let D=r[N.id];D===void 0&&(M(N),D=g(N),r[N.id]=D,N.addEventListener("dispose",S));const I=U.program;a.updateUBOMapping(N,I);const F=e.render.frame;l[N.id]!==F&&(v(N),l[N.id]=F)}function g(N){const U=_();N.__bindingPointIndex=U;const D=o.createBuffer(),I=N.__size,F=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function _(){for(let N=0;N<f;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const U=r[N.id],D=N.uniforms,I=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,B=D.length;F<B;F++){const V=Array.isArray(D[F])?D[F]:[D[F]];for(let C=0,w=V.length;C<w;C++){const H=V[C];if(x(H,F,C,I)===!0){const Y=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let re=0;for(let ie=0;ie<ae.length;ie++){const O=ae[ie],K=T(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,Y+re,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,re),re+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(N,U,D,I){const F=N.value,B=U+"_"+D;if(I[B]===void 0)return typeof F=="number"||typeof F=="boolean"?I[B]=F:I[B]=F.clone(),!0;{const V=I[B];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return I[B]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function M(N){const U=N.uniforms;let D=0;const I=16;for(let B=0,V=U.length;B<V;B++){const C=Array.isArray(U[B])?U[B]:[U[B]];for(let w=0,H=C.length;w<H;w++){const Y=C[w],ae=Array.isArray(Y.value)?Y.value:[Y.value];for(let re=0,ie=ae.length;re<ie;re++){const O=ae[re],K=T(O),q=D%I,ye=q%K.boundary,L=q+ye;D+=ye,L!==0&&I-L<K.storage&&(D+=I-L),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=K.storage}}}const F=D%I;return F>0&&(D+=I-F),N.__size=D,N.__cache={},this}function T(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function S(N){const U=N.target;U.removeEventListener("dispose",S);const D=u.indexOf(U.__bindingPointIndex);u.splice(D,1),o.deleteBuffer(r[U.id]),delete r[U.id],delete l[U.id]}function y(){for(const N in r)o.deleteBuffer(r[N]);u=[],r={},l={}}return{bind:p,update:h,dispose:y}}class Iu{constructor(e={}){const{canvas:n=hE(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const N=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1;this._outputColorSpace=Nn;let F=0,B=0,V=null,C=-1,w=null;const H=new Lt,Y=new Lt;let ae=null;const re=new ct(0);let ie=0,O=n.width,K=n.height,q=1,ye=null,L=null;const J=new Lt(0,0,O,K),he=new Lt(0,0,O,K);let ge=!1;const Ae=new Hp;let Be=!1,ee=!1;const pe=new pt,Te=new k,Ye=new Lt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function en(){return V===null?q:1}let G=a;function Ct(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ap}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Me,!1),G===null){const j="webgl2";if(G=Ct(j,R),G===null)throw Ct(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Je,Ze,Oe,Wt,Ve,ot,Zt,Qt,P,b,ne,fe,_e,ue,Pe,Re,Xe,qe,Se,Le,Ke,Ge,Ce,lt;function W(){Je=new E1(G),Je.init(),Ge=new sw(G,Je),Ze=new g1(G,Je,e,Ge),Oe=new iw(G,Je),Ze.reversedDepthBuffer&&v&&Oe.buffers.depth.setReversed(!0),Wt=new A1(G),Ve=new XR,ot=new aw(G,Je,Oe,Ve,Ze,Ge,Wt),Zt=new v1(D),Qt=new M1(D),P=new UT(G),Ce=new p1(G,P),b=new T1(G,P,Wt,Ce),ne=new w1(G,b,P,Wt),Se=new R1(G,Ze,ot),Re=new _1(Ve),fe=new kR(D,Zt,Qt,Je,Ze,Ce,Re),_e=new fw(D,Ve),ue=new qR,Pe=new JR(Je),qe=new d1(D,Zt,Qt,Oe,ne,x,p),Xe=new tw(D,ne,Ze),lt=new hw(G,Wt,Ze,Oe),Le=new m1(G,Je,Wt),Ke=new b1(G,Je,Wt),Wt.programs=fe.programs,D.capabilities=Ze,D.extensions=Je,D.properties=Ve,D.renderLists=ue,D.shadowMap=Xe,D.state=Oe,D.info=Wt}W();const be=new cw(D,G);this.xr=be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(O,K,!1))},this.getSize=function(R){return R.set(O,K)},this.setSize=function(R,j,le=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,K=j,n.width=Math.floor(R*q),n.height=Math.floor(j*q),le===!0&&(n.style.width=R+"px",n.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(O*q,K*q).floor()},this.setDrawingBufferSize=function(R,j,le){O=R,K=j,q=le,n.width=Math.floor(R*le),n.height=Math.floor(j*le),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,j,le,ce){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,j,le,ce),Oe.viewport(H.copy(J).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,j,le,ce){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,j,le,ce),Oe.scissor(Y.copy(he).multiplyScalar(q).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){Oe.setScissorTest(ge=R)},this.setOpaqueSort=function(R){ye=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,le=!0){let ce=0;if(R){let Q=!1;if(V!==null){const Ee=V.texture.format;Q=Ee===Op||Ee===Np||Ee===Up}if(Q){const Ee=V.texture.type,De=Ee===Ji||Ee===Vs||Ee===yl||Ee===xl||Ee===Cp||Ee===Dp,ze=qe.getClearColor(),Ue=qe.getClearAlpha(),$e=ze.r,tt=ze.g,We=ze.b;De?(M[0]=$e,M[1]=tt,M[2]=We,M[3]=Ue,G.clearBufferuiv(G.COLOR,0,M)):(T[0]=$e,T[1]=tt,T[2]=We,T[3]=Ue,G.clearBufferiv(G.COLOR,0,T))}else ce|=G.COLOR_BUFFER_BIT}j&&(ce|=G.DEPTH_BUFFER_BIT),le&&(ce|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),qe.dispose(),ue.dispose(),Pe.dispose(),Ve.dispose(),Zt.dispose(),Qt.dispose(),ne.dispose(),Ce.dispose(),lt.dispose(),fe.dispose(),be.dispose(),be.removeEventListener("sessionstart",hn),be.removeEventListener("sessionend",dn),tn.stop()};function we(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=Wt.autoReset,j=Xe.enabled,le=Xe.autoUpdate,ce=Xe.needsUpdate,Q=Xe.type;W(),Wt.autoReset=R,Xe.enabled=j,Xe.autoUpdate=le,Xe.needsUpdate=ce,Xe.type=Q}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const j=R.target;j.removeEventListener("dispose",xe),He(j)}function He(R){st(R),Ve.remove(R)}function st(R){const j=Ve.get(R).programs;j!==void 0&&(j.forEach(function(le){fe.releaseProgram(le)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,le,ce,Q,Ee){j===null&&(j=ke);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=Da(R,j,le,ce,Q);Oe.setMaterial(ce,De);let Ue=le.index,$e=1;if(ce.wireframe===!0){if(Ue=b.getWireframeAttribute(le),Ue===void 0)return;$e=2}const tt=le.drawRange,We=le.attributes.position;let mt=tt.start*$e,Rt=(tt.start+tt.count)*$e;Ee!==null&&(mt=Math.max(mt,Ee.start*$e),Rt=Math.min(Rt,(Ee.start+Ee.count)*$e)),Ue!==null?(mt=Math.max(mt,0),Rt=Math.min(Rt,Ue.count)):We!=null&&(mt=Math.max(mt,0),Rt=Math.min(Rt,We.count));const jt=Rt-mt;if(jt<0||jt===1/0)return;Ce.setup(Q,ce,ze,le,Ue);let Bt,gt=Le;if(Ue!==null&&(Bt=P.get(Ue),gt=Ke,gt.setIndex(Bt)),Q.isMesh)ce.wireframe===!0?(Oe.setLineWidth(ce.wireframeLinewidth*en()),gt.setMode(G.LINES)):gt.setMode(G.TRIANGLES);else if(Q.isLine){let Qe=ce.linewidth;Qe===void 0&&(Qe=1),Oe.setLineWidth(Qe*en()),Q.isLineSegments?gt.setMode(G.LINES):Q.isLineLoop?gt.setMode(G.LINE_LOOP):gt.setMode(G.LINE_STRIP)}else Q.isPoints?gt.setMode(G.POINTS):Q.isSprite&&gt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Al("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))gt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Yt=Q._multiDrawCounts,xt=Q._multiDrawCount,Pn=Ue?P.get(Ue).bytesPerElement:1,bi=Ve.get(ce).currentProgram.getUniforms();for(let kn=0;kn<xt;kn++)bi.setValue(G,"_gl_DrawID",kn),gt.render(Qe[kn]/Pn,Yt[kn])}else if(Q.isInstancedMesh)gt.renderInstances(mt,jt,Q.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Yt=Math.min(le.instanceCount,Qe);gt.renderInstances(mt,jt,Yt)}else gt.render(mt,jt)};function Ut(R,j,le){R.transparent===!0&&R.side===Yi&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,Fi(R,j,le),R.side=wa,R.needsUpdate=!0,Fi(R,j,le),R.side=Yi):Fi(R,j,le)}this.compile=function(R,j,le=null){le===null&&(le=R),y=Pe.get(le),y.init(j),U.push(y),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==le&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const ce=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ee=Q.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const ze=Ee[De];Ut(ze,le,Q),ce.add(ze)}else Ut(Ee,le,Q),ce.add(Ee)}),y=U.pop(),ce},this.compileAsync=function(R,j,le=null){const ce=this.compile(R,j,le);return new Promise(Q=>{function Ee(){if(ce.forEach(function(De){Ve.get(De).currentProgram.isReady()&&ce.delete(De)}),ce.size===0){Q(R);return}setTimeout(Ee,10)}Je.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let At=null;function Ti(R){At&&At(R)}function hn(){tn.stop()}function dn(){tn.start()}const tn=new Hy;tn.setAnimationLoop(Ti),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(R){At=R,be.setAnimationLoop(R),R===null?tn.stop():tn.start()},be.addEventListener("sessionstart",hn),be.addEventListener("sessionend",dn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(j),j=be.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,j,V),y=Pe.get(R,U.length),y.init(j),U.push(y),pe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ae.setFromProjectionMatrix(pe,Zi,j.reversedDepth),ee=this.localClippingEnabled,Be=Re.init(this.clippingPlanes,ee),S=ue.get(R,N.length),S.init(),N.push(S),be.enabled===!0&&be.isPresenting===!0){const Ee=D.xr.getDepthSensingMesh();Ee!==null&&zi(Ee,j,-1/0,D.sortObjects)}zi(R,j,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(ye,L),ft=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,ft&&qe.addToRenderList(S,R),this.info.render.frame++,Be===!0&&Re.beginShadows();const le=y.state.shadowsArray;Xe.render(le,R,j),Be===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=S.opaque,Q=S.transmissive;if(y.setupLights(),j.isArrayCamera){const Ee=j.cameras;if(Q.length>0)for(let De=0,ze=Ee.length;De<ze;De++){const Ue=Ee[De];Ul(ce,Q,R,Ue)}ft&&qe.render(R);for(let De=0,ze=Ee.length;De<ze;De++){const Ue=Ee[De];Ws(S,R,Ue,Ue.viewport)}}else Q.length>0&&Ul(ce,Q,R,j),ft&&qe.render(R),Ws(S,R,j);V!==null&&B===0&&(ot.updateMultisampleRenderTarget(V),ot.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(D,R,j),Ce.resetDefaultState(),C=-1,w=null,U.pop(),U.length>0?(y=U[U.length-1],Be===!0&&Re.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function zi(R,j,le,ce){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ae.intersectsSprite(R)){ce&&Ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const De=ne.update(R),ze=R.material;ze.visible&&S.push(R,De,ze,le,Ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ae.intersectsObject(R))){const De=ne.update(R),ze=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ye.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ye.copy(De.boundingSphere.center)),Ye.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(ze)){const Ue=De.groups;for(let $e=0,tt=Ue.length;$e<tt;$e++){const We=Ue[$e],mt=ze[We.materialIndex];mt&&mt.visible&&S.push(R,De,mt,le,Ye.z,We)}}else ze.visible&&S.push(R,De,ze,le,Ye.z,null)}}const Ee=R.children;for(let De=0,ze=Ee.length;De<ze;De++)zi(Ee[De],j,le,ce)}function Ws(R,j,le,ce){const Q=R.opaque,Ee=R.transmissive,De=R.transparent;y.setupLightsView(le),Be===!0&&Re.setGlobalState(D.clippingPlanes,le),ce&&Oe.viewport(H.copy(ce)),Q.length>0&&qs(Q,j,le),Ee.length>0&&qs(Ee,j,le),De.length>0&&qs(De,j,le),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Ul(R,j,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ce.id]===void 0&&(y.state.transmissionRenderTarget[ce.id]=new Gs(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?ba:Ji,minFilter:Ki,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Ee=y.state.transmissionRenderTarget[ce.id],De=ce.viewport||H;Ee.setSize(De.z*D.transmissionResolutionScale,De.w*D.transmissionResolutionScale);const ze=D.getRenderTarget(),Ue=D.getActiveCubeFace(),$e=D.getActiveMipmapLevel();D.setRenderTarget(Ee),D.getClearColor(re),ie=D.getClearAlpha(),ie<1&&D.setClearColor(16777215,.5),D.clear(),ft&&qe.render(le);const tt=D.toneMapping;D.toneMapping=hs;const We=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),y.setupLightsView(ce),Be===!0&&Re.setGlobalState(D.clippingPlanes,ce),qs(R,le,ce),ot.updateMultisampleRenderTarget(Ee),ot.updateRenderTargetMipmap(Ee),Je.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Rt=0,jt=j.length;Rt<jt;Rt++){const Bt=j[Rt],gt=Bt.object,Qe=Bt.geometry,Yt=Bt.material,xt=Bt.group;if(Yt.side===Yi&&gt.layers.test(ce.layers)){const Pn=Yt.side;Yt.side=Vn,Yt.needsUpdate=!0,oo(gt,le,ce,Qe,Yt,xt),Yt.side=Pn,Yt.needsUpdate=!0,mt=!0}}mt===!0&&(ot.updateMultisampleRenderTarget(Ee),ot.updateRenderTargetMipmap(Ee))}D.setRenderTarget(ze,Ue,$e),D.setClearColor(re,ie),We!==void 0&&(ce.viewport=We),D.toneMapping=tt}function qs(R,j,le){const ce=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Ee=R.length;Q<Ee;Q++){const De=R[Q],ze=De.object,Ue=De.geometry,$e=De.group;let tt=De.material;tt.allowOverride===!0&&ce!==null&&(tt=ce),ze.layers.test(le.layers)&&oo(ze,j,le,Ue,tt,$e)}}function oo(R,j,le,ce,Q,Ee){R.onBeforeRender(D,j,le,ce,Q,Ee),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(D,j,le,ce,R,Ee),Q.transparent===!0&&Q.side===Yi&&Q.forceSinglePass===!1?(Q.side=Vn,Q.needsUpdate=!0,D.renderBufferDirect(le,j,ce,Q,R,Ee),Q.side=wa,Q.needsUpdate=!0,D.renderBufferDirect(le,j,ce,Q,R,Ee),Q.side=Yi):D.renderBufferDirect(le,j,ce,Q,R,Ee),R.onAfterRender(D,j,le,ce,Q,Ee)}function Fi(R,j,le){j.isScene!==!0&&(j=ke);const ce=Ve.get(R),Q=y.state.lights,Ee=y.state.shadowsArray,De=Q.state.version,ze=fe.getParameters(R,Q.state,Ee,j,le),Ue=fe.getProgramCacheKey(ze);let $e=ce.programs;ce.environment=R.isMeshStandardMaterial?j.environment:null,ce.fog=j.fog,ce.envMap=(R.isMeshStandardMaterial?Qt:Zt).get(R.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",xe),$e=new Map,ce.programs=$e);let tt=$e.get(Ue);if(tt!==void 0){if(ce.currentProgram===tt&&ce.lightsStateVersion===De)return na(R,ze),tt}else ze.uniforms=fe.getUniforms(R),R.onBeforeCompile(ze,D),tt=fe.acquireProgram(ze,Ue),$e.set(Ue,tt),ce.uniforms=ze.uniforms;const We=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Re.uniform),na(R,ze),ce.needsLights=La(R),ce.lightsStateVersion=De,ce.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=tt,ce.uniformsList=null,tt}function Ys(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Mu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function na(R,j){const le=Ve.get(R);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function Da(R,j,le,ce,Q){j.isScene!==!0&&(j=ke),ot.resetTextureUnits();const Ee=j.fog,De=ce.isMeshStandardMaterial?j.environment:null,ze=V===null?D.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Gn,Ue=(ce.isMeshStandardMaterial?Qt:Zt).get(ce.envMap||De),$e=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,tt=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),We=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,Rt=!!le.morphAttributes.color;let jt=hs;ce.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(jt=D.toneMapping);const Bt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,gt=Bt!==void 0?Bt.length:0,Qe=Ve.get(ce),Yt=y.state.lights;if(Be===!0&&(ee===!0||R!==w)){const nn=R===w&&ce.id===C;Re.setState(ce,R,nn)}let xt=!1;ce.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Yt.state.version||Qe.outputColorSpace!==ze||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==Ue||ce.fog===!0&&Qe.fog!==Ee||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Re.numPlanes||Qe.numIntersection!==Re.numIntersection)||Qe.vertexAlphas!==$e||Qe.vertexTangents!==tt||Qe.morphTargets!==We||Qe.morphNormals!==mt||Qe.morphColors!==Rt||Qe.toneMapping!==jt||Qe.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,Qe.__version=ce.version);let Pn=Qe.currentProgram;xt===!0&&(Pn=Fi(ce,j,Q));let bi=!1,kn=!1,xn=!1;const kt=Pn.getUniforms(),Xn=Qe.uniforms;if(Oe.useProgram(Pn.program)&&(bi=!0,kn=!0,xn=!0),ce.id!==C&&(C=ce.id,kn=!0),bi||w!==R){Oe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue(G,"projectionMatrix",R.projectionMatrix),kt.setValue(G,"viewMatrix",R.matrixWorldInverse);const Cn=kt.map.cameraPosition;Cn!==void 0&&Cn.setValue(G,Te.setFromMatrixPosition(R.matrixWorld)),Ze.logarithmicDepthBuffer&&kt.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&kt.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,kn=!0,xn=!0)}if(Q.isSkinnedMesh){kt.setOptional(G,Q,"bindMatrix"),kt.setOptional(G,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),kt.setValue(G,"boneTexture",nn.boneTexture,ot))}Q.isBatchedMesh&&(kt.setOptional(G,Q,"batchingTexture"),kt.setValue(G,"batchingTexture",Q._matricesTexture,ot),kt.setOptional(G,Q,"batchingIdTexture"),kt.setValue(G,"batchingIdTexture",Q._indirectTexture,ot),kt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(G,"batchingColorTexture",Q._colorsTexture,ot));const In=le.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Se.update(Q,le,Pn),(kn||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,kt.setValue(G,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Xn.envMap.value=Ue,Xn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&j.environment!==null&&(Xn.envMapIntensity.value=j.environmentIntensity),kn&&(kt.setValue(G,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&ds(Xn,xn),Ee&&ce.fog===!0&&_e.refreshFogUniforms(Xn,Ee),_e.refreshMaterialUniforms(Xn,ce,q,K,y.state.transmissionRenderTarget[R.id]),Mu.upload(G,Ys(Qe),Xn,ot)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Mu.upload(G,Ys(Qe),Xn,ot),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&kt.setValue(G,"center",Q.center),kt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(G,"normalMatrix",Q.normalMatrix),kt.setValue(G,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const nn=ce.uniformsGroups;for(let Cn=0,js=nn.length;Cn<js;Cn++){const Zn=nn[Cn];lt.update(Zn,Pn),lt.bind(Zn,Pn)}}return Pn}function ds(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function La(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,j,le){const ce=Ve.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=j,Ve.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:le,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const le=Ve.get(R);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const ln=G.createFramebuffer();this.setRenderTarget=function(R,j=0,le=0){V=R,F=j,B=le;let ce=!0,Q=null,Ee=!1,De=!1;if(R){const Ue=Ve.get(R);if(Ue.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(G.FRAMEBUFFER,null),ce=!1;else if(Ue.__webglFramebuffer===void 0)ot.setupRenderTarget(R);else if(Ue.__hasExternalTextures)ot.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(Ue.__boundDepthTexture!==We){if(We!==null&&Ve.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const tt=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?Q=tt[j][le]:Q=tt[j],Ee=!0):R.samples>0&&ot.useMultisampledRTT(R)===!1?Q=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?Q=tt[le]:Q=tt,H.copy(R.viewport),Y.copy(R.scissor),ae=R.scissorTest}else H.copy(J).multiplyScalar(q).floor(),Y.copy(he).multiplyScalar(q).floor(),ae=ge;if(le!==0&&(Q=ln),Oe.bindFramebuffer(G.FRAMEBUFFER,Q)&&ce&&Oe.drawBuffers(R,Q),Oe.viewport(H),Oe.scissor(Y),Oe.setScissorTest(ae),Ee){const Ue=Ve.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ue.__webglTexture,le)}else if(De){const Ue=j;for(let $e=0;$e<R.textures.length;$e++){const tt=Ve.get(R.textures[$e]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+$e,tt.__webglTexture,le,Ue)}}else if(R!==null&&le!==0){const Ue=Ve.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ue.__webglTexture,le)}C=-1},this.readRenderTargetPixels=function(R,j,le,ce,Q,Ee,De,ze=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){Oe.bindFramebuffer(G.FRAMEBUFFER,Ue);try{const $e=R.textures[ze],tt=$e.format,We=$e.type;if(!Ze.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ce&&le>=0&&le<=R.height-Q&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),G.readPixels(j,le,ce,Q,Ge.convert(tt),Ge.convert(We),Ee))}finally{const $e=V!==null?Ve.get(V).__webglFramebuffer:null;Oe.bindFramebuffer(G.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,j,le,ce,Q,Ee,De,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue)if(j>=0&&j<=R.width-ce&&le>=0&&le<=R.height-Q){Oe.bindFramebuffer(G.FRAMEBUFFER,Ue);const $e=R.textures[ze],tt=$e.format,We=$e.type;if(!Ze.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,mt),G.bufferData(G.PIXEL_PACK_BUFFER,Ee.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),G.readPixels(j,le,ce,Q,Ge.convert(tt),Ge.convert(We),0);const Rt=V!==null?Ve.get(V).__webglFramebuffer:null;Oe.bindFramebuffer(G.FRAMEBUFFER,Rt);const jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await dE(G,jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,mt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ee),G.deleteBuffer(mt),G.deleteSync(jt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,le=0){const ce=Math.pow(2,-le),Q=Math.floor(R.image.width*ce),Ee=Math.floor(R.image.height*ce),De=j!==null?j.x:0,ze=j!==null?j.y:0;ot.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,De,ze,Q,Ee),Oe.unbindTexture()};const Nl=G.createFramebuffer(),Ol=G.createFramebuffer();this.copyTextureToTexture=function(R,j,le=null,ce=null,Q=0,Ee=null){Ee===null&&(Q!==0?(Al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Q,Q=0):Ee=0);let De,ze,Ue,$e,tt,We,mt,Rt,jt;const Bt=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(le!==null)De=le.max.x-le.min.x,ze=le.max.y-le.min.y,Ue=le.isBox3?le.max.z-le.min.z:1,$e=le.min.x,tt=le.min.y,We=le.isBox3?le.min.z:0;else{const In=Math.pow(2,-Q);De=Math.floor(Bt.width*In),ze=Math.floor(Bt.height*In),R.isDataArrayTexture?Ue=Bt.depth:R.isData3DTexture?Ue=Math.floor(Bt.depth*In):Ue=1,$e=0,tt=0,We=0}ce!==null?(mt=ce.x,Rt=ce.y,jt=ce.z):(mt=0,Rt=0,jt=0);const gt=Ge.convert(j.format),Qe=Ge.convert(j.type);let Yt;j.isData3DTexture?(ot.setTexture3D(j,0),Yt=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ot.setTexture2DArray(j,0),Yt=G.TEXTURE_2D_ARRAY):(ot.setTexture2D(j,0),Yt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const xt=G.getParameter(G.UNPACK_ROW_LENGTH),Pn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),bi=G.getParameter(G.UNPACK_SKIP_PIXELS),kn=G.getParameter(G.UNPACK_SKIP_ROWS),xn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Bt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Bt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$e),G.pixelStorei(G.UNPACK_SKIP_ROWS,tt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,We);const kt=R.isDataArrayTexture||R.isData3DTexture,Xn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const In=Ve.get(R),nn=Ve.get(j),Cn=Ve.get(In.__renderTarget),js=Ve.get(nn.__renderTarget);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let Zn=0;Zn<Ue;Zn++)kt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,Q,We+Zn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ve.get(j).__webglTexture,Ee,jt+Zn)),G.blitFramebuffer($e,tt,De,ze,mt,Rt,De,ze,G.DEPTH_BUFFER_BIT,G.NEAREST);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Ve.has(R)){const In=Ve.get(R),nn=Ve.get(j);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,Nl),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ol);for(let Cn=0;Cn<Ue;Cn++)kt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,In.__webglTexture,Q,We+Cn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,In.__webglTexture,Q),Xn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,nn.__webglTexture,Ee,jt+Cn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,nn.__webglTexture,Ee),Q!==0?G.blitFramebuffer($e,tt,De,ze,mt,Rt,De,ze,G.COLOR_BUFFER_BIT,G.NEAREST):Xn?G.copyTexSubImage3D(Yt,Ee,mt,Rt,jt+Cn,$e,tt,De,ze):G.copyTexSubImage2D(Yt,Ee,mt,Rt,$e,tt,De,ze);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Xn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Yt,Ee,mt,Rt,jt,De,ze,Ue,gt,Qe,Bt.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(Yt,Ee,mt,Rt,jt,De,ze,Ue,gt,Bt.data):G.texSubImage3D(Yt,Ee,mt,Rt,jt,De,ze,Ue,gt,Qe,Bt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ee,mt,Rt,De,ze,gt,Qe,Bt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ee,mt,Rt,Bt.width,Bt.height,gt,Bt.data):G.texSubImage2D(G.TEXTURE_2D,Ee,mt,Rt,De,ze,gt,Qe,Bt);G.pixelStorei(G.UNPACK_ROW_LENGTH,xt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,bi),G.pixelStorei(G.UNPACK_SKIP_ROWS,kn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,xn),Ee===0&&j.generateMipmaps&&G.generateMipmap(Yt),Oe.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&ot.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ot.setTextureCube(R,0):R.isData3DTexture?ot.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ot.setTexture2DArray(R,0):ot.setTexture2D(R,0),Oe.unbindTexture()},this.resetState=function(){F=0,B=0,V=null,Oe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}function Jv(o,e){if(e===FM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===_p||e===vy){let n=o.getIndex();if(n===null){const u=[],f=o.getAttribute("position");if(f!==void 0){for(let p=0;p<f.count;p++)u.push(p);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===_p)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=o.clone();return l.setIndex(r),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Qp extends Xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new _w(n)}),this.register(function(n){return new vw(n)}),this.register(function(n){return new Rw(n)}),this.register(function(n){return new ww(n)}),this.register(function(n){return new Cw(n)}),this.register(function(n){return new xw(n)}),this.register(function(n){return new Sw(n)}),this.register(function(n){return new Mw(n)}),this.register(function(n){return new Ew(n)}),this.register(function(n){return new gw(n)}),this.register(function(n){return new Tw(n)}),this.register(function(n){return new yw(n)}),this.register(function(n){return new Aw(n)}),this.register(function(n){return new bw(n)}),this.register(function(n){return new pw(n)}),this.register(function(n){return new Dw(n)}),this.register(function(n){return new Lw(n)})}load(e,n,a,r){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=vl.extractUrlBase(e);u=vl.resolveURL(h,this.path)}else u=vl.extractUrlBase(e);this.manager.itemStart(e);const f=function(h){r?r(h):console.error(h),l.manager.itemError(e),l.manager.itemEnd(e)},p=new Xp(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(h){try{l.parse(h,u,function(g){n(g),l.manager.itemEnd(e)},f)}catch(g){f(g)}},a,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let l;const u={},f={},p=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===Wy){try{u[Et.KHR_BINARY_GLTF]=new Uw(e)}catch(_){r&&r(_);return}l=JSON.parse(u[Et.KHR_BINARY_GLTF].content)}else l=JSON.parse(p.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Ww(l,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](h);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[_.name]=_,u[_.name]=!0}if(l.extensionsUsed)for(let g=0;g<l.extensionsUsed.length;++g){const _=l.extensionsUsed[g],v=l.extensionsRequired||[];switch(_){case Et.KHR_MATERIALS_UNLIT:u[_]=new mw;break;case Et.KHR_DRACO_MESH_COMPRESSION:u[_]=new Nw(l,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:u[_]=new Ow;break;case Et.KHR_MESH_QUANTIZATION:u[_]=new Pw;break;default:v.indexOf(_)>=0&&f[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}h.setExtensions(u),h.setPlugins(f),h.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,l){a.parse(e,n,r,l)})}}function dw(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pw{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const l=n[a];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const l=n.json,p=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let h;const g=new ct(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],Gn);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":h=new Ou(g),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Dl(g),h.distance=_;break;case"spot":h=new gT(g),h.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,h.angle=p.spot.outerConeAngle,h.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return h.position.set(0,0,0),Wi(h,p),p.intensity!==void 0&&(h.intensity=p.intensity),h.name=n.createUniqueName(p.name||"light_"+e),r=Promise.resolve(h),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,l=a.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(p){return a._getNodeRef(n.cache,f,p)})}}class mw{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return cs}extendParams(e,n,a){const r=[];e.color=new ct(1,1,1),e.opacity=1;const l=n.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Gn),e.opacity=u[3]}l.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",l.baseColorTexture,Nn))}return Promise.all(r)}}class gw{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name].emissiveStrength;return l!==void 0&&(n.emissiveIntensity=l),Promise.resolve()}}class _w{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new at(f,f)}return Promise.all(l)}}class vw{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name];return n.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class yw{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class xw{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[];n.sheenColor=new ct(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;n.sheenColor.setRGB(f[0],f[1],f[2],Gn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,Nn)),u.sheenRoughnessTexture!==void 0&&l.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class Sw{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class Mw{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return n.attenuationColor=new ct().setRGB(f[0],f[1],f[2],Gn),Promise.all(l)}}class Ew{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name];return n.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class Tw{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return n.specularColor=new ct().setRGB(f[0],f[1],f[2],Gn),u.specularColorTexture!==void 0&&l.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,Nn)),Promise.all(l)}}class bw{constructor(e){this.parser=e,this.name=Et.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(l)}}class Aw{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ii}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class Rw{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const l=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,l.source,u)}}class ww{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,r=a.json,l=r.textures[e];if(!l.extensions||!l.extensions[n])return null;const u=l.extensions[n],f=r.images[u.source];let p=a.textureLoader;if(f.uri){const h=a.options.manager.getHandler(f.uri);h!==null&&(p=h)}return a.loadTextureImage(e,u.source,p)}}class Cw{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,r=a.json,l=r.textures[e];if(!l.extensions||!l.extensions[n])return null;const u=l.extensions[n],f=r.images[u.source];let p=a.textureLoader;if(f.uri){const h=a.options.manager.getHandler(f.uri);h!==null&&(p=h)}return a.loadTextureImage(e,u.source,p)}}class Dw{constructor(e){this.name=Et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],l=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const p=r.byteOffset||0,h=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(f,p,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,r.mode,r.filter),x})})}else return null}}class Lw{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const h of r.primitives)if(h.mode!==Mi.TRIANGLES&&h.mode!==Mi.TRIANGLE_STRIP&&h.mode!==Mi.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=a.extensions[this.name].attributes,f=[],p={};for(const h in u)f.push(this.parser.getDependency("accessor",u[h]).then(g=>(p[h]=g,p[h])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(h=>{const g=h.pop(),_=g.isGroup?g.children:[g],v=h[0].count,x=[];for(const M of _){const T=new pt,S=new k,y=new $i,N=new k(1,1,1),U=new WE(M.geometry,M.material,v);for(let D=0;D<v;D++)p.TRANSLATION&&S.fromBufferAttribute(p.TRANSLATION,D),p.ROTATION&&y.fromBufferAttribute(p.ROTATION,D),p.SCALE&&N.fromBufferAttribute(p.SCALE,D),U.setMatrixAt(D,T.compose(S,y,N));for(const D in p)if(D==="_COLOR_0"){const I=p[D];U.instanceColor=new yp(I.array,I.itemSize,I.normalized)}else D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"&&M.geometry.setAttribute(D,p[D]);$t.prototype.copy.call(U,M),this.parser.assignFinalMaterial(U),x.push(U)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const Wy="glTF",fl=12,$v={JSON:1313821514,BIN:5130562};class Uw{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,fl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Wy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-fl,l=new DataView(e,fl);let u=0;for(;u<r;){const f=l.getUint32(u,!0);u+=4;const p=l.getUint32(u,!0);if(u+=4,p===$v.JSON){const h=new Uint8Array(e,fl+u,f);this.content=a.decode(h)}else if(p===$v.BIN){const h=fl+u;this.body=e.slice(h,h+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Nw{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},p={},h={};for(const g in u){const _=Mp[g]||g.toLowerCase();f[_]=u[g]}for(const g in e.attributes){const _=Mp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],x=qr[v.componentType];h[_]=x.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",l).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(x){for(const M in x.attributes){const T=x.attributes[M],S=p[M];S!==void 0&&(T.normalized=S)}_(x)},f,h,Gn,v)})})}}class Ow{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class Pw{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}}class qy extends Cl{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[l+u];return n}interpolate_(e,n,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=f*2,h=f*3,g=r-n,_=(a-n)/g,v=_*_,x=v*_,M=e*h,T=M-h,S=-2*x+3*v,y=x-v,N=1-S,U=y-v+_;for(let D=0;D!==f;D++){const I=u[T+D+f],F=u[T+D+p]*g,B=u[M+D+f],V=u[M+D]*g;l[D]=N*I+U*F+S*B+y*V}return l}}const Iw=new $i;class Bw extends qy{interpolate_(e,n,a,r){const l=super.interpolate_(e,n,a,r);return Iw.fromArray(l).normalize().toArray(l),l}}const Mi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ey={9728:Kn,9729:Rn,9984:uy,9985:_u,9986:pl,9987:Ki},ty={33071:ji,33648:bu,10497:Zr},Cd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zw={CUBICSPLINE:void 0,LINEAR:Tl,STEP:El},Dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new io({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wa})),o.DefaultMaterial}function Is(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function Wi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Hw(o,e,n){let a=!1,r=!1,l=!1;for(let h=0,g=e.length;h<g;h++){const _=e[h];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(l=!0),a&&r&&l)break}if(!a&&!r&&!l)return Promise.resolve(o);const u=[],f=[],p=[];for(let h=0,g=e.length;h<g;h++){const _=e[h];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):o.attributes.normal;f.push(v)}if(l){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):o.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(p)]).then(function(h){const g=h[0],_=h[1],v=h[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),l&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function Vw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Gw(o){let e;const n=o.extensions&&o.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Ld(n.attributes):e=o.indices+":"+Ld(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+Ld(o.targets[a]);return e}function Ld(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function Ep(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Xw=new pt;class Ww{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new dw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,l=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(f)===!0;const p=f.match(/Version\/(\d+)/);r=a&&p?parseInt(p[1],10):-1,l=f.indexOf("Firefox")>-1,u=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||l&&u<98?this.textureLoader=new zy(this.options.manager):this.textureLoader=new yT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const f={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Is(l,f,r),Wi(f,r),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(f)})).then(function(){for(const p of f.scenes)p.updateMatrixWorld();e(f)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,l=n.length;r<l;r++){const u=n[r].joints;for(let f=0,p=u.length;f<p;f++)e[u[f]].isBone=!0}for(let r=0,l=e.length;r<l;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),l=(u,f)=>{const p=this.associations.get(u);p!=null&&this.associations.set(f,p);for(const[h,g]of u.children.entries())l(g,f.children[h])};return l(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const l=e(n[r]);l&&a.push(l)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(l){return l.loadNode&&l.loadNode(n)});break;case"mesh":r=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(l,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(l,u){a.load(vl.resolveURL(n.uri,r.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,l=n.byteOffset||0;return a.slice(l,l+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=Cd[r.type],f=qr[r.componentType],p=r.normalized===!0,h=new f(r.count*u);return Promise.resolve(new _n(h,u,p))}const l=[];return r.bufferView!==void 0?l.push(this.getDependency("bufferView",r.bufferView)):l.push(null),r.sparse!==void 0&&(l.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(l).then(function(u){const f=u[0],p=Cd[r.type],h=qr[r.componentType],g=h.BYTES_PER_ELEMENT,_=g*p,v=r.byteOffset||0,x=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,M=r.normalized===!0;let T,S;if(x&&x!==_){const y=Math.floor(v/x),N="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+y+":"+r.count;let U=n.cache.get(N);U||(T=new h(f,y*x,r.count*x/g),U=new HE(T,x/g),n.cache.add(N,U)),S=new Bp(U,p,v%x/g,M)}else f===null?T=new h(r.count*p):T=new h(f,v,r.count*p),S=new _n(T,p,M);if(r.sparse!==void 0){const y=Cd.SCALAR,N=qr[r.sparse.indices.componentType],U=r.sparse.indices.byteOffset||0,D=r.sparse.values.byteOffset||0,I=new N(u[1],U,r.sparse.count*y),F=new h(u[2],D,r.sparse.count*p);f!==null&&(S=new _n(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let B=0,V=I.length;B<V;B++){const C=I[B];if(S.setX(C,F[B*p]),p>=2&&S.setY(C,F[B*p+1]),p>=3&&S.setZ(C,F[B*p+2]),p>=4&&S.setW(C,F[B*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const n=this.json,a=this.options,l=n.textures[e].source,u=n.images[l];let f=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(f=p)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,n,a){const r=this,l=this.json,u=l.textures[e],f=l.images[n],p=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const h=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||f.name||"",g.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(g.name=f.uri);const v=(l.samplers||{})[u.sampler]||{};return g.magFilter=ey[v.magFilter]||Rn,g.minFilter=ey[v.minFilter]||Ki,g.wrapS=ty[v.wrapS]||Zr,g.wrapT=ty[v.wrapT]||Zr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Kn&&g.minFilter!==Rn,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=h,h}loadImageSource(e,n){const a=this,r=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=r.images[e],f=self.URL||self.webkitURL;let p=u.uri||"",h=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){h=!0;const v=new Blob([_],{type:u.mimeType});return p=f.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,x){let M=v;n.isImageBitmapLoader===!0&&(M=function(T){const S=new wn(T);S.needsUpdate=!0,v(S)}),n.load(vl.resolveURL(_,l.path),M,void 0,x)})}).then(function(_){return h===!0&&f.revokeObjectURL(p),Wi(_,u),_.userData.mimeType=u.mimeType||kw(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,r){const l=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),l.extensions[Et.KHR_TEXTURE_TRANSFORM]){const f=a.extensions!==void 0?a.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const p=l.associations.get(u);u=l.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),l.associations.set(u,p)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,l=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+a.uuid;let p=this.cache.get(f);p||(p=new Ny,Qi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(f,p)),a=p}else if(e.isLine){const f="LineBasicMaterial:"+a.uuid;let p=this.cache.get(f);p||(p=new Uy,Qi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(f,p)),a=p}if(r||l||u){let f="ClonedMaterial:"+a.uuid+":";r&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let p=this.cache.get(f);p||(p=a.clone(),l&&(p.vertexColors=!0),u&&(p.flatShading=!0),r&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(f,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return io}loadMaterial(e){const n=this,a=this.json,r=this.extensions,l=a.materials[e];let u;const f={},p=l.extensions||{},h=[];if(p[Et.KHR_MATERIALS_UNLIT]){const _=r[Et.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),h.push(_.extendParams(f,l,n))}else{const _=l.pbrMetallicRoughness||{};if(f.color=new ct(1,1,1),f.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;f.color.setRGB(v[0],v[1],v[2],Gn),f.opacity=v[3]}_.baseColorTexture!==void 0&&h.push(n.assignTexture(f,"map",_.baseColorTexture,Nn)),f.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,f.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(h.push(n.assignTexture(f,"metalnessMap",_.metallicRoughnessTexture)),h.push(n.assignTexture(f,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=Yi);const g=l.alphaMode||Dd.OPAQUE;if(g===Dd.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,g===Dd.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==cs&&(h.push(n.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new at(1,1),l.normalTexture.scale!==void 0)){const _=l.normalTexture.scale;f.normalScale.set(_,_)}if(l.occlusionTexture!==void 0&&u!==cs&&(h.push(n.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==cs){const _=l.emissiveFactor;f.emissive=new ct().setRGB(_[0],_[1],_[2],Gn)}return l.emissiveTexture!==void 0&&u!==cs&&h.push(n.assignTexture(f,"emissiveMap",l.emissiveTexture,Nn)),Promise.all(h).then(function(){const _=new u(f);return l.name&&(_.name=l.name),Wi(_,l),n.associations.set(_,{materials:e}),l.extensions&&Is(r,_,l),_})}createUniqueName(e){const n=It.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function l(f){return a[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,n).then(function(p){return ny(p,f,n)})}const u=[];for(let f=0,p=e.length;f<p;f++){const h=e[f],g=Gw(h),_=r[g];if(_)u.push(_.promise);else{let v;h.extensions&&h.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?v=l(h):v=ny(new di,h,n),r[g]={primitive:h,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,l=a.meshes[e],u=l.primitives,f=[];for(let p=0,h=u.length;p<h;p++){const g=u[p].material===void 0?Fw(this.cache):this.getDependency("material",u[p].material);f.push(g)}return f.push(n.loadGeometries(u)),Promise.all(f).then(function(p){const h=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let x=0,M=g.length;x<M;x++){const T=g[x],S=u[x];let y;const N=h[x];if(S.mode===Mi.TRIANGLES||S.mode===Mi.TRIANGLE_STRIP||S.mode===Mi.TRIANGLE_FAN||S.mode===void 0)y=l.isSkinnedMesh===!0?new GE(T,N):new On(T,N),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===Mi.TRIANGLE_STRIP?y.geometry=Jv(y.geometry,vy):S.mode===Mi.TRIANGLE_FAN&&(y.geometry=Jv(y.geometry,_p));else if(S.mode===Mi.LINES)y=new KE(T,N);else if(S.mode===Mi.LINE_STRIP)y=new Vp(T,N);else if(S.mode===Mi.LINE_LOOP)y=new ZE(T,N);else if(S.mode===Mi.POINTS)y=new Gp(T,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&Vw(y,l),y.name=n.createUniqueName(l.name||"mesh_"+e),Wi(y,l),S.extensions&&Is(r,y,S),n.assignFinalMaterial(y),_.push(y)}for(let x=0,M=_.length;x<M;x++)n.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return l.extensions&&Is(r,_[0],l),_[0];const v=new us;l.extensions&&Is(r,v,l),n.associations.set(v,{meshes:e});for(let x=0,M=_.length;x<M;x++)v.add(_[x]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new An(jn.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new qp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),Wi(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,l=n.joints.length;r<l;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const l=r.pop(),u=r,f=[],p=[];for(let h=0,g=u.length;h<g;h++){const _=u[h];if(_){f.push(_);const v=new pt;l!==null&&v.fromArray(l.array,h*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[h])}return new Fp(f,p)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],l=r.name?r.name:"animation_"+e,u=[],f=[],p=[],h=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const x=r.channels[_],M=r.samplers[x.sampler],T=x.target,S=T.node,y=r.parameters!==void 0?r.parameters[M.input]:M.input,N=r.parameters!==void 0?r.parameters[M.output]:M.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),f.push(this.getDependency("accessor",y)),p.push(this.getDependency("accessor",N)),h.push(M),g.push(T))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(p),Promise.all(h),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],M=_[2],T=_[3],S=_[4],y=[];for(let U=0,D=v.length;U<D;U++){const I=v[U],F=x[U],B=M[U],V=T[U],C=S[U];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const w=a._createAnimationTracks(I,F,B,V,C);if(w)for(let H=0;H<w.length;H++)y.push(w[H])}const N=new oT(l,void 0,y);return Wi(N,r),N})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(l){const u=a._getNodeRef(a.meshCache,r.mesh,l);return r.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let p=0,h=r.weights.length;p<h;p++)f.morphTargetInfluences[p]=r.weights[p]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],l=a._loadNodeShallow(e),u=[],f=r.children||[];for(let h=0,g=f.length;h<g;h++)u.push(a.getDependency("node",f[h]));const p=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([l,Promise.all(u),p]).then(function(h){const g=h[0],_=h[1],v=h[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,Xw)});for(let x=0,M=_.length;x<M;x++)g.add(_[x]);return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=n.nodes[e],u=l.name?r.createUniqueName(l.name):"",f=[],p=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return p&&f.push(p),l.camera!==void 0&&f.push(r.getDependency("camera",l.camera).then(function(h){return r._getNodeRef(r.cameraCache,l.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){f.push(h)}),this.nodeCache[e]=Promise.all(f).then(function(h){let g;if(l.isBone===!0?g=new Ly:h.length>1?g=new us:h.length===1?g=h[0]:g=new $t,g!==h[0])for(let _=0,v=h.length;_<v;_++)g.add(h[_]);if(l.name&&(g.userData.name=l.name,g.name=u),Wi(g,l),l.extensions&&Is(a,g,l),l.matrix!==void 0){const _=new pt;_.fromArray(l.matrix),g.applyMatrix4(_)}else l.translation!==void 0&&g.position.fromArray(l.translation),l.rotation!==void 0&&g.quaternion.fromArray(l.rotation),l.scale!==void 0&&g.scale.fromArray(l.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(l.mesh!==void 0&&r.meshCache.refs[l.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,l=new us;a.name&&(l.name=r.createUniqueName(a.name)),Wi(l,a),a.extensions&&Is(n,l,a);const u=a.nodes||[],f=[];for(let p=0,h=u.length;p<h;p++)f.push(r.getDependency("node",u[p]));return Promise.all(f).then(function(p){for(let g=0,_=p.length;g<_;g++)l.add(p[g]);const h=g=>{const _=new Map;for(const[v,x]of r.associations)(v instanceof Qi||v instanceof wn)&&_.set(v,x);return g.traverse(v=>{const x=r.associations.get(v);x!=null&&_.set(v,x)}),_};return r.associations=h(l),l})}_createAnimationTracks(e,n,a,r,l){const u=[],f=e.name?e.name:e.uuid,p=[];rs[l.path]===rs.weights?e.traverse(function(v){v.morphTargetInfluences&&p.push(v.name?v.name:v.uuid)}):p.push(f);let h;switch(rs[l.path]){case rs.weights:h=$r;break;case rs.rotation:h=eo;break;case rs.translation:case rs.scale:h=to;break;default:switch(a.itemSize){case 1:h=$r;break;case 2:case 3:default:h=to;break}break}const g=r.interpolation!==void 0?zw[r.interpolation]:Tl,_=this._getArrayFromAccessor(a);for(let v=0,x=p.length;v<x;v++){const M=new h(p[v]+"."+rs[l.path],n.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Ep(n.constructor),r=new Float32Array(n.length);for(let l=0,u=n.length;l<u;l++)r[l]=n[l]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof eo?Bw:qy;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qw(o,e,n){const a=e.attributes,r=new Ca;if(a.POSITION!==void 0){const f=n.json.accessors[a.POSITION],p=f.min,h=f.max;if(p!==void 0&&h!==void 0){if(r.set(new k(p[0],p[1],p[2]),new k(h[0],h[1],h[2])),f.normalized){const g=Ep(qr[f.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new k,p=new k;for(let h=0,g=l.length;h<g;h++){const _=l[h];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],x=v.min,M=v.max;if(x!==void 0&&M!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),v.normalized){const T=Ep(qr[v.componentType]);p.multiplyScalar(T)}f.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(f)}o.boundingBox=r;const u=new ta;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function ny(o,e,n){const a=e.attributes,r=[];function l(u,f){return n.getDependency("accessor",u).then(function(p){o.setAttribute(f,p)})}for(const u in a){const f=Mp[u]||u.toLowerCase();f in o.attributes||r.push(l(a[u],f))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});r.push(u)}return bt.workingColorSpace!==Gn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Wi(o,e),qw(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?Hw(o,e.targets,n):o})}class Yy extends us{constructor(){super(),new Qp().load("/landscape.glb",n=>{const a=n.scene;a.scale.setScalar(25),a.position.set(-50,-50,50),a.rotation.y=Math.PI/15,this.add(a)})}}class Ll extends On{constructor(){const e=Ll.SkyShader,n=new Pi({name:e.name,uniforms:wy.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Vn,depthWrite:!1});super(new no(1,1,1),n),this.isSky=!0}}Ll.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new k},up:{value:new k(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Yw extends pT{constructor(e){super(e),this.type=ba}parse(e){const u=function(V,C){switch(V){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(C||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(C||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(C||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(C||""))}},_=function(V,C,w){C=C||1024;let Y=V.pos,ae=-1,re=0,ie="",O=String.fromCharCode.apply(null,new Uint16Array(V.subarray(Y,Y+128)));for(;0>(ae=O.indexOf(`
`))&&re<C&&Y<V.byteLength;)ie+=O,re+=O.length,Y+=128,O+=String.fromCharCode.apply(null,new Uint16Array(V.subarray(Y,Y+128)));return-1<ae?(V.pos+=re+ae+1,ie+O.slice(0,ae)):!1},v=function(V){const C=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,H=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,Y=/^\s*FORMAT=(\S+)\s*$/,ae=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,re={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let ie,O;for((V.pos>=V.byteLength||!(ie=_(V)))&&u(1,"no header found"),(O=ie.match(C))||u(3,"bad initial token"),re.valid|=1,re.programtype=O[1],re.string+=ie+`
`;ie=_(V),ie!==!1;){if(re.string+=ie+`
`,ie.charAt(0)==="#"){re.comments+=ie+`
`;continue}if((O=ie.match(w))&&(re.gamma=parseFloat(O[1])),(O=ie.match(H))&&(re.exposure=parseFloat(O[1])),(O=ie.match(Y))&&(re.valid|=2,re.format=O[1]),(O=ie.match(ae))&&(re.valid|=4,re.height=parseInt(O[1],10),re.width=parseInt(O[2],10)),re.valid&2&&re.valid&4)break}return re.valid&2||u(3,"missing format specifier"),re.valid&4||u(3,"missing image size specifier"),re},x=function(V,C,w){const H=C;if(H<8||H>32767||V[0]!==2||V[1]!==2||V[2]&128)return new Uint8Array(V);H!==(V[2]<<8|V[3])&&u(3,"wrong scanline width");const Y=new Uint8Array(4*C*w);Y.length||u(4,"unable to allocate buffer space");let ae=0,re=0;const ie=4*H,O=new Uint8Array(4),K=new Uint8Array(ie);let q=w;for(;q>0&&re<V.byteLength;){re+4>V.byteLength&&u(1),O[0]=V[re++],O[1]=V[re++],O[2]=V[re++],O[3]=V[re++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=H)&&u(3,"bad rgbe scanline format");let ye=0,L;for(;ye<ie&&re<V.byteLength;){L=V[re++];const he=L>128;if(he&&(L-=128),(L===0||ye+L>ie)&&u(3,"bad scanline data"),he){const ge=V[re++];for(let Ae=0;Ae<L;Ae++)K[ye++]=ge}else K.set(V.subarray(re,re+L),ye),ye+=L,re+=L}const J=H;for(let he=0;he<J;he++){let ge=0;Y[ae]=K[he+ge],ge+=H,Y[ae+1]=K[he+ge],ge+=H,Y[ae+2]=K[he+ge],ge+=H,Y[ae+3]=K[he+ge],ae+=4}q--}return Y},M=function(V,C,w,H){const Y=V[C+3],ae=Math.pow(2,Y-128)/255;w[H+0]=V[C+0]*ae,w[H+1]=V[C+1]*ae,w[H+2]=V[C+2]*ae,w[H+3]=1},T=function(V,C,w,H){const Y=V[C+3],ae=Math.pow(2,Y-128)/255;w[H+0]=Kc.toHalfFloat(Math.min(V[C+0]*ae,65504)),w[H+1]=Kc.toHalfFloat(Math.min(V[C+1]*ae,65504)),w[H+2]=Kc.toHalfFloat(Math.min(V[C+2]*ae,65504)),w[H+3]=Kc.toHalfFloat(1)},S=new Uint8Array(e);S.pos=0;const y=v(S),N=y.width,U=y.height,D=x(S.subarray(S.pos),N,U);let I,F,B;switch(this.type){case ni:B=D.length/4;const V=new Float32Array(B*4);for(let w=0;w<B;w++)M(D,w*4,V,w*4);I=V,F=ni;break;case ba:B=D.length/4;const C=new Uint16Array(B*4);for(let w=0;w<B;w++)T(D,w*4,C,w*4);I=C,F=ba;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:N,height:U,data:I,header:y.string,gamma:y.gamma,exposure:y.exposure,type:F}}setDataType(e){return this.type=e,this}load(e,n,a,r){function l(u,f){switch(u.type){case ni:case ba:u.colorSpace=Gn,u.minFilter=Rn,u.magFilter=Rn,u.generateMipmaps=!1,u.flipY=!0;break}n&&n(u,f)}return super.load(e,l,a,r)}}class Tp extends Gp{constructor(e){e={...{count:500,texturePaths:["/green_leaf.png"],particleSize:4,fallSpeed:{min:1,max:3},sway:{x:2,z:2},yPosition:{min:0,max:150}},...e};const a=new di,r=new Float32Array(e.count*3),l=new Float32Array(e.count*3),u=new Float32Array(e.count);for(let g=0;g<e.count;g++)r[g*3+0]=(Math.random()*2-1)*100,r[g*3+1]=e.yPosition.min+Math.random()*(e.yPosition.max-e.yPosition.min),r[g*3+2]=(Math.random()*2-1)*150,l[g*3+0]=Math.random()*Math.PI*2,l[g*3+1]=e.fallSpeed.min+Math.random()*(e.fallSpeed.max-e.fallSpeed.min),l[g*3+2]=Math.random(),u[g]=Math.floor(Math.random()*e.texturePaths.length);a.setAttribute("position",new _n(r,3)),a.setAttribute("aRandom",new _n(l,3)),a.setAttribute("aTextureIndex",new _n(u,1));const f=new zy,p=e.texturePaths.map(g=>f.load(g)),h=new Pi({defines:{TEXTURE_COUNT:p.length},uniforms:{uTime:{value:0},uTextures:{value:p},uParticleSize:{value:e.particleSize},uSway:{value:new at(e.sway.x,e.sway.z)}},vertexShader:`
        uniform float uTime;
        uniform float uParticleSize;
        uniform vec2 uSway;
        attribute vec3 aRandom;
        attribute float aTextureIndex;
        varying float vTextureIndex;

        void main() {
            vec3 pos = position;

            // Animate falling
            pos.y = mod(pos.y - (aRandom.y * uTime), 200.0) - 50.0;

            // Animate swaying
            pos.x += sin(uTime * 0.3 + aRandom.x) * uSway.x * aRandom.z;
            pos.z += cos(uTime * 0.2 + aRandom.x) * uSway.y * aRandom.z;

            vTextureIndex = aTextureIndex;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = uParticleSize * (200.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform sampler2D uTextures[TEXTURE_COUNT];
        varying float vTextureIndex;

        void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;

            vec4 color = vec4(0.0);
            int index = int(vTextureIndex);

            // Use preprocessor directives to compile only the necessary texture lookups.
            // This is the most robust way to handle variable-length sampler arrays.
            #if TEXTURE_COUNT > 0
              if (index == 0) color = texture2D(uTextures[0], gl_PointCoord);
            #endif
            #if TEXTURE_COUNT > 1
              else if (index == 1) color = texture2D(uTextures[1], gl_PointCoord);
            #endif
            #if TEXTURE_COUNT > 2
              else if (index == 2) color = texture2D(uTextures[2], gl_PointCoord);
            #endif
            #if TEXTURE_COUNT > 3
              else if (index == 3) color = texture2D(uTextures[3], gl_PointCoord);
            #endif

            // Fallback for safety, though it should not be needed with the preprocessor guards.
            if (vTextureIndex >= float(TEXTURE_COUNT)) {
                color = texture2D(uTextures[0], gl_PointCoord);
            }

            gl_FragColor = color;
            if (gl_FragColor.a < 0.1) discard;
        }
      `,transparent:!0,depthWrite:!1,blending:Hs});super(a,h),this.frustumCulled=!1}update(e){this.material.uniforms.uTime.value+=e}}function jw({scrollProgress:o,weather:e,windspeed:n}){const a=bn.useRef(null),r=bn.useRef(o);return bn.useEffect(()=>{let l;const u=a.current,f=async()=>{const h=new Fy,g=new Lu,_=new Iu({antialias:!0,alpha:!0});_.toneMapping=Rp,_.toneMappingExposure=.7,_.setSize(window.innerWidth,window.innerHeight),_.shadowMap.enabled=!0,_.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.appendChild(_.domElement);const v=new An(75,window.innerWidth/window.innerHeight,.1,1e3);g.add(v);const x=new JE([new k(0,5,60),new k(5,7,30),new k(-5,4,10),new k(0,6,-10),new k(10,4,-30),new k(-10,5,-50),new k(0,6,-70),new k(0,5,-90),new k(-20,7,-110),new k(20,4,-130),new k(0,5,-150)]),M=new Yy;M.traverse(L=>{L.isMesh&&(L.castShadow=!0,L.receiveShadow=!0)}),e==="Rain"&&M.traverse(L=>{L.isMesh&&L.material&&(L.material.roughness=.2,L.material.metalness=.6)}),g.add(M);const T=new Yp(16777215,.2);g.add(T);const S=new Ou(16777215,2);S.castShadow=!0,S.shadow.mapSize.width=2048,S.shadow.mapSize.height=2048,S.shadow.camera.near=.5,S.shadow.camera.far=500,g.add(S);const y=new Ll;y.scale.setScalar(1e3),g.add(y);const N=new k,U=new Dl(6715306,.3);g.add(U);const D=new wl(4,32,32),I=new io({emissive:16777215,emissiveIntensity:1}),F=new On(D,I);g.add(F);const B=new di,V=new Pi({uniforms:{uTime:{value:0},uOpacity:{value:0}},vertexShader:`
          attribute float aRandom;
          varying float vRandom;
          void main() {
            vRandom = aRandom;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 1.5 * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          uniform float uTime;
          uniform float uOpacity;
          varying float vRandom;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            // Use a combination of sine waves for a more natural twinkle
            float opacity = sin((uTime * vRandom * 0.5) + (vRandom * 6.28)) * 0.5 + 0.5;
            gl_FragColor = vec4(vec3(1.0), opacity * uOpacity);
          }
        `,transparent:!0,depthWrite:!1,blending:Eu}),C=[],w=new Float32Array(1e4);for(let L=0;L<1e4;L++){const J=(Math.random()-.5)*2e3,he=Math.random()*500,ge=(Math.random()-.5)*2e3;C.push(J,he,ge),w[L]=Math.random()}B.setAttribute("position",new hi(C,3)),B.setAttribute("aRandom",new _n(w,1));const H=new Gp(B,V);g.add(H);let Y;if(e==="Rain")Y={count:3e3,texturePaths:["/rain.png"],particleSize:1.5,fallSpeed:{min:15,max:25},sway:{x:.1,z:.1}};else if(e==="Snow")Y={count:2e3,texturePaths:["/snowflake.png"],particleSize:2,fallSpeed:{min:.5,max:1.5},sway:{x:1,z:1}};else{const L=new Date().getMonth();L>=2&&L<=4?Y={count:800,texturePaths:["/green_leaf.png","/sakura.png"],particleSize:4,fallSpeed:{min:1,max:3},sway:{x:2,z:2}}:L>=5&&L<=7?Y={count:400,texturePaths:["/sparkle.png"],particleSize:1.5,fallSpeed:{min:.2,max:.8},sway:{x:3,z:3}}:L>=8&&L<=10?Y={count:800,texturePaths:["/orange_leaf.png","/red_leaf.png","/brown_leaf.png"],particleSize:5,fallSpeed:{min:3,max:6},sway:{x:4,z:4}}:Y={count:0,texturePaths:[]}}const ae=Math.min(n/30,1);Y.sway.x*=1+ae*4;const re=new Tp(Y);g.add(re);let ie={update:()=>{}};if(n>15&&e!=="Rain"&&e!=="Snow"){const L={count:300,texturePaths:["/brown_leaf.png","/green_leaf.png"],particleSize:3,fallSpeed:{min:10,max:20},sway:{x:15,z:5},yPosition:{min:-10,max:5}};ie=new Tp(L),g.add(ie)}const K=L=>{const J=y.material.uniforms,he={Sunny:2,Cloudy:15,Rain:20,Snow:10},ge={Sunny:.5,Cloudy:2,Rain:3,Snow:1};J.turbidity.value=he[e]||2,J.rayleigh.value=ge[e]||.5,J.mieCoefficient.value=.005,J.mieDirectionalG.value=.7;let Ae=0,Be=0;const ee=r.current,pe=.45,Te=.55;if(ee<pe){const Ze=ee/pe*180;Ae=Math.sin(jn.degToRad(Ze))*90,S.intensity=2.5,T.intensity=.4,_.toneMappingExposure=.8,F.visible=!1,H.visible=!1,U.intensity=0,V.uniforms.uOpacity.value=0}else if(ee>=pe&&ee<Te){const Je=(ee-pe)/(Te-pe),Ze=(pe/.5+Je*(.5-pe)/.5)*180;Ae=Math.sin(jn.degToRad(Ze))*90,S.intensity=jn.lerp(2.5,.05,Je),T.intensity=jn.lerp(.4,.8,Je),_.toneMappingExposure=jn.lerp(.8,.4,Je),F.visible=!0,H.visible=!0,U.intensity=jn.lerp(0,1.2,Je),V.uniforms.uOpacity.value=Je}else{Ae=-5;const Ze=(ee-Te)/(1-Te)*180;Be=Math.sin(jn.degToRad(Ze))*90,S.intensity=.05,T.intensity=.8,_.toneMappingExposure=.4,F.visible=!0,U.intensity=1.2,H.visible=!0,V.uniforms.uOpacity.value=1}const Ye=180,ke=jn.degToRad(90-Ae),ft=jn.degToRad(Ye);N.setFromSphericalCoords(1,ke,ft),J.sunPosition.value.copy(N),S.position.copy(N),V.uniforms.uTime.value=L.getElapsedTime();const en=jn.degToRad(90-Be),G=jn.degToRad(Ye-180),Ct=new k().setFromSphericalCoords(1,en,G);F.position.copy(Ct).multiplyScalar(400),U.position.copy(Ct)},q=()=>{l=requestAnimationFrame(q);const L=h.getDelta(),J=Math.min(r.current,.999999),he=x.getPointAt(J),ge=x.getTangentAt(J),Ae=he.clone().add(ge);v.position.copy(he),v.lookAt(Ae),re.update(L),ie.update(L),K(h),_.render(g,v)},ye=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),_.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ye),q(),{renderer:_,onResize:ye}};let p=()=>{};return f().then(({renderer:h,onResize:g})=>{p=()=>{cancelAnimationFrame(l),u&&u.contains(h.domElement)&&u.removeChild(h.domElement),window.removeEventListener("resize",g)}}),()=>p()},[e,n]),bn.useEffect(()=>{r.current=o},[o]),rt.jsx("div",{ref:a})}const Kw={position:"fixed",top:0,left:0,width:"100%",padding:"15px 30px",background:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(5px)",color:"white",display:"flex",gap:"30px",zIndex:100,fontFamily:"sans-serif",fontSize:"14px"},hl={cursor:"pointer",color:"white",textDecoration:"none"};function Zw(){return rt.jsxs("div",{style:Kw,children:[rt.jsx("a",{href:"/#/about",target:"_blank",rel:"noopener noreferrer",style:hl,children:"About"}),rt.jsx("a",{href:"/#/contact",target:"_blank",rel:"noopener noreferrer",style:hl,children:"Contact"}),rt.jsx("a",{href:"/#/polished_diamond",target:"_blank",rel:"noopener noreferrer",style:hl,children:"Polished Diamond"}),rt.jsx("a",{href:"/#/rough_diamond",target:"_blank",rel:"noopener noreferrer",style:hl,children:"Rough Diamond"}),rt.jsx("a",{href:"/#/landscape",target:"_blank",rel:"noopener noreferrer",style:hl,children:"Landscape"})]})}const iy={type:"change"},Jp={type:"start"},jy={type:"end"},gu=new Rl,ay=new os,Qw=Math.cos(70*jn.DEG2RAD),gn=new k,ti=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ud=1e-6;class Ky extends DT{constructor(e,n=null){super(e,n),this.state=Gt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new $i,this._lastTargetPosition=new k,this._quat=new $i().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Av,this._sphericalDelta=new Av,this._scale=1,this._panOffset=new k,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new k,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$w.bind(this),this._onPointerDown=Jw.bind(this),this._onPointerUp=eC.bind(this),this._onContextMenu=oC.bind(this),this._onMouseWheel=iC.bind(this),this._onKeyDown=aC.bind(this),this._onTouchStart=sC.bind(this),this._onTouchMove=rC.bind(this),this._onMouseDown=tC.bind(this),this._onMouseMove=nC.bind(this),this._interceptControlDown=lC.bind(this),this._interceptControlUp=cC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(iy),this.update(),this.state=Gt.NONE}update(e=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=ti:a>Math.PI&&(a-=ti),r<-Math.PI?r+=ti:r>Math.PI&&(r-=ti),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=gn.length();u=this._clampDistance(f*this._scale);const p=f-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new k(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const h=new k(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(f),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(gu.origin.copy(this.object.position),gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gu.direction))<Qw?this.object.lookAt(this.target):(ay.setFromNormalAndCoplanarPoint(this.object.up,this.target),gu.intersectPlane(ay,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Ud||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ud||this._lastTargetPosition.distanceToSquared(this.target)>Ud?(this.dispatchEvent(iy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ti/60*this.autoRotateSpeed*e:ti/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;gn.copy(r).sub(this.target);let l=gn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*n*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=e-a.left,l=n-a.top,u=a.width,f=a.height;this._mouse.x=r/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/n.clientHeight),this._rotateUp(ti*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(a,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,l=Math.sqrt(a*a+r*r);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(r,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/n.clientHeight),this._rotateUp(ti*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,l=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,f=(e.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new at,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function Jw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function $w(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function eC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jy),this.state=Gt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function tC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Gt.DOLLY;break;case Xr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Gt.ROTATE}break;case Xr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Jp)}function nC(o){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function iC(o){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(o.preventDefault(),this.dispatchEvent(Jp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(jy))}function aC(o){this.enabled!==!1&&this._handleKeyDown(o)}function sC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Gt.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Gt.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Jp)}function rC(o){switch(this._trackPointer(o),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Gt.NONE}}function oC(o){this.enabled!==!1&&o.preventDefault()}function lC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sy({scrollProgress:o,glowIntensity:e}){const n=bn.useRef(null);return bn.useEffect(()=>{const a=n.current;let r;const l=new Lu,u=new An(75,a.clientWidth/a.clientHeight,.1,1e3);u.position.z=5;const f=new Iu({antialias:!0,alpha:!0});f.setSize(a.clientWidth,a.clientHeight),f.setPixelRatio(window.devicePixelRatio),a.appendChild(f.domElement);const p=new Ky(u,f.domElement);p.enableDamping=!0,p.enableZoom=!1,p.enablePan=!1;const h=new Yp(16777215,.5);l.add(h);const g=new Ou(16777215,1);g.position.set(5,5,5),l.add(g);const _=new Dl(16777215,0,100);l.add(_);const v=new wl(2.5,32,32),x=new cs({color:16777215,transparent:!0,opacity:0,side:Vn,blending:Eu}),M=new On(v,x);l.add(M);const T=new Qp;let S;T.load("diamond.glb",U=>{S=U.scene,S.scale.set(2,2,2),l.add(S),S.traverse(D=>{D.isMesh&&(D.material=new Ii({color:16777215,metalness:.1,roughness:0,transmission:1,thickness:2,ior:2.417,reflectivity:1}))})});const y=()=>{r=requestAnimationFrame(y),S&&(S.rotation.y=o*Math.PI*2),_.intensity=e*5,M.material.opacity=e*.5,p.update(),f.render(l,u)};y();const N=()=>{u.aspect=a.clientWidth/a.clientHeight,u.updateProjectionMatrix(),f.setSize(a.clientWidth,a.clientHeight)};return window.addEventListener("resize",N),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",N),a&&f.domElement.parentNode===a&&a.removeChild(f.domElement)}},[o,e]),rt.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})}class uC extends Yw{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}function fC(){const o=bn.useRef(null);return bn.useEffect(()=>{const e=o.current,n=400,a=new Lu,r=new An(45,n/n,.1,1e3);r.position.set(0,0,8);const l=new Iu({antialias:!0,alpha:!0});l.setSize(n,n),l.toneMapping=ly,l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);const u=new io({color:5101823,roughness:.2,metalness:.1});let f=null;new uC().load("/royal_esplanade_1k.hdr",y=>{y.mapping=Tu,a.environment=y,a.background=y,a.backgroundBlurriness=.5}),new Qp().load("/rough_diamond.glb",y=>{f=y.scene,f.scale.set(2,2,2),f.traverse(N=>{N.isMesh&&(N.material=u)}),a.add(f)});const h=new Dl(16777215,10);h.position.set(5,5,5),a.add(h);let g=!1;const _={x:0,y:0},v=y=>{g=!0,_.x=y.clientX,_.y=y.clientY},x=y=>{if(!g||!f)return;const N=y.clientX-_.x,U=y.clientY-_.y;f.rotation.y+=N*.005,f.rotation.x+=U*.005,console.log(`Rotation => X: ${f.rotation.x.toFixed(2)}, Y: ${f.rotation.y.toFixed(2)}, Z: ${f.rotation.z.toFixed(2)}`),_.x=y.clientX,_.y=y.clientY},M=()=>{g=!1};l.domElement.addEventListener("mousedown",v),window.addEventListener("mousemove",x),window.addEventListener("mouseup",M);const T=()=>{requestAnimationFrame(T),l.render(a,r)};T();const S=()=>{};return window.addEventListener("resize",S),()=>{e&&e.contains(l.domElement)&&e.removeChild(l.domElement),window.removeEventListener("resize",S),l.domElement.removeEventListener("mousedown",v),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",M)}},[]),rt.jsx("div",{ref:o,style:{width:400,height:400}})}function hC({weather:o}){const e=bn.useRef(null);return bn.useEffect(()=>{const n=e.current,a=new Fy,r=new Lu,l=new Iu({antialias:!0});l.toneMapping=Rp,l.shadowMap.enabled=!0,l.toneMappingExposure=.7,l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(l.domElement);const u=new An(75,window.innerWidth/window.innerHeight,.1,2e3);u.position.set(0,20,50);const f=new Ky(u,l.domElement);f.enableDamping=!0,f.maxPolarAngle=Math.PI/2-.1;const p=new Yp(16777215,.2);r.add(p);const h=new Ou(16777215,2);h.shadow.camera.near=.5,h.shadow.camera.far=500,h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,r.add(h);const g=new Ll;g.scale.setScalar(1e3),r.add(g);const _=new k,v=new Dl(6715306,.3);r.add(v);const x=new wl(4,32,32),M=new io({emissive:16777215,emissiveIntensity:1}),T=new On(x,M);r.add(T);const S=new Yy;S.traverse(B=>{B.isMesh&&(B.castShadow=!0,B.receiveShadow=!0)}),r.add(S);let y;o==="Rain"?y={count:3e3,texturePaths:["/rain.png"],particleSize:1.5,fallSpeed:{min:15,max:25},sway:{x:.1,z:.1}}:o==="Snow"?y={count:2e3,texturePaths:["/snowflake.png"],particleSize:2,fallSpeed:{min:.5,max:1.5},sway:{x:1,z:1}}:y={count:0,texturePaths:[]};const N=new Tp(y);r.add(N);const U=()=>{const B=g.material.uniforms,V={Sunny:2,Cloudy:15,Rain:20,Snow:10},C={Sunny:.5,Cloudy:2,Rain:3,Snow:1};B.turbidity.value=V[o]||2,B.rayleigh.value=C[o]||.5,B.mieCoefficient.value=.005,B.mieDirectionalG.value=.7;const w=new Date,H=w.getHours()+w.getMinutes()/60,Y=Math.max(0,H>6&&H<18?90-Math.abs(H-12)*15:0),ae=180,re=jn.degToRad(90-Y),ie=jn.degToRad(ae);if(_.setFromSphericalCoords(1,re,ie),B.sunPosition.value.copy(_),h.position.copy(_),_.y<-.05){h.intensity=.1,p.intensity=.1,l.toneMappingExposure=.3,T.visible=!0,v.intensity=.3;const O=_.clone().negate();T.position.copy(O).multiplyScalar(400),v.position.copy(O)}else h.intensity=2,p.intensity=.2,l.toneMappingExposure=.7,T.visible=!1,v.intensity=0};U();let D;const I=()=>{D=requestAnimationFrame(I);const B=a.getDelta();f.update(),N.update(B),U(),l.render(r,u)},F=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",F),I(),()=>{cancelAnimationFrame(D),window.removeEventListener("resize",F),n&&l.domElement.parentNode===n&&n.removeChild(l.domElement),r.traverse(B=>{B.geometry&&B.geometry.dispose(),B.material&&(Array.isArray(B.material)?B.material.forEach(V=>V.dispose()):B.material.dispose())}),l.dispose()}},[o]),rt.jsx("div",{ref:e,style:{width:"100vw",height:"100vh"}})}function dl({children:o,progress:e,start:n,end:a}){const l=e>=n&&e<a?1:.2;return rt.jsx("div",{style:{height:"100vh",paddingTop:"40vh",textAlign:"center",opacity:l,transition:"opacity 0.5s ease-in-out"},children:o})}function dC(){const[o,e]=bn.useState(0),[n,a]=bn.useState("main"),[r,l]=bn.useState(null),[u,f]=bn.useState(0);if(bn.useEffect(()=>{const h=async()=>{try{let v,x,M={};try{const N=await fetch(`/season.config.json?t=${new Date().getTime()}`);N.ok&&(M=await N.json())}catch{console.log("No season.config.json found, using system IP.")}if(M.city&&M.city.trim()!==""){console.log(`Using city from config: ${M.city}`);const N=M.openWeatherApiKey||void 0,U=`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(M.city)}&limit=1&appid=${N}`,D=await fetch(U);if(!D.ok)throw new Error("Geocoding API request failed");const I=await D.json();I&&I.length>0?(v=I[0].lat,x=I[0].lon):console.warn(`Could not find location for city: "${M.city}". Falling back to IP-based location.`)}if(v===void 0||x===void 0){console.log("Using IP-based geolocation.");const N=await fetch("https://get.geojs.io/v1/ip/geo.json");if(!N.ok)throw new Error("Geolocation API request failed");const U=await N.json();v=U.latitude,x=U.longitude}const T=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${v}&longitude=${x}&current_weather=true&current=weather_code&timezone=auto`);if(!T.ok)throw new Error("Weather API request failed");const S=await T.json(),y=S.current_weather.weathercode;f(S.current_weather.windspeed),y>=0&&y<=1?l("Sunny"):y>=2&&y<=48?l("Cloudy"):y>=51&&y<=67||y>=80&&y<=82||y>=95&&y<=99?l("Rain"):y>=71&&y<=86?l("Snow"):l("Sunny")}catch(v){console.error("Failed to fetch weather:",v),l("Sunny")}};h();const g=setInterval(h,600*1e3),_=()=>{document.visibilityState==="visible"&&h()};return window.addEventListener("visibilitychange",_),()=>{clearInterval(g),window.removeEventListener("visibilitychange",_)}},[]),bn.useEffect(()=>{const h=()=>{const g=window.location.hash.replace(/^#\/?/,"");["about","contact","polished_diamond","rough_diamond","landscape"].includes(g)?a(g):a("main")};return window.addEventListener("hashchange",h,!1),h(),()=>{window.removeEventListener("hashchange",h,!1)}},[]),bn.useEffect(()=>{if(n!=="main")return;const h=()=>{const g=document.documentElement.scrollHeight-window.innerHeight;if(g>0){const _=window.scrollY/g;e(_)}};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[n]),n==="polished_diamond")return rt.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",background:"#151515"},children:rt.jsx("div",{style:{width:"500px",height:"500px",transform:"rotate(-90deg)"},children:rt.jsx(sy,{})})});if(n==="rough_diamond")return rt.jsx(fC,{});if(n==="landscape")return rt.jsx(hC,{weather:r});if(n==="about"||n==="contact")return rt.jsxs("div",{style:{padding:"20px",color:"white",fontFamily:"sans-serif"},children:[rt.jsx("h1",{children:n==="about"?"About Us":"Contact"}),rt.jsxs("p",{children:["This is the ",n," page content."]}),rt.jsx("a",{href:"/#",style:{color:"cyan"},children:"Back to main experience"})]});if(!r)return rt.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#111",color:"white",fontFamily:"sans-serif"},children:rt.jsx("h1",{children:"Loading Environment..."})});const p=Math.max(0,(o-.8)/.2);return rt.jsxs(rt.Fragment,{children:[rt.jsx(Zw,{}),rt.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",opacity:Math.max(0,(o-.6)*5),pointerEvents:"none"},children:rt.jsx("div",{style:{width:"500px",height:"500px",transform:"rotate(-90deg)",pointerEvents:"auto"},children:rt.jsx(sy,{scrollProgress:o,glowIntensity:p})})}),rt.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"#111"},children:rt.jsx(jw,{scrollProgress:o,weather:r,windspeed:u})}),rt.jsxs("div",{style:{position:"relative",height:"1500vh",color:"white"},children:[rt.jsx(dl,{progress:o,start:0,end:.2,children:rt.jsx("h2",{children:"For centuries, the search has been on"})}),rt.jsxs(dl,{progress:o,start:.2,end:.4,children:[rt.jsx("h2",{children:"To unearth dreams"}),rt.jsx("h2",{children:"To find hidden beauty"}),rt.jsx("h2",{children:"To seek perfection"})]}),rt.jsx(dl,{progress:o,start:.4,end:.6,children:rt.jsx("h2",{children:"To create works of wonder"})}),rt.jsx(dl,{progress:o,start:.6,end:.8,children:rt.jsx("h2",{children:"Only dreamers become diamonds"})}),rt.jsx(dl,{progress:o,start:.8,end:1,children:rt.jsx("h2",{children:"Diacore"})})]})]})}lM.createRoot(document.getElementById("root")).render(rt.jsx(bn.StrictMode,{children:rt.jsx(dC,{})}));
