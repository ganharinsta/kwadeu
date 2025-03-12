"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{8221:function(e,t){let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return o},isEqualNode:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?l[i]=!!n[e]:l.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:o}=n;return o?l.innerHTML=o.__html||"":i&&(l.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),l}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&a.push(n)}let c=t.map(l).filter(e=>{for(let t=0,n=a.length;t<n;t++)if(i(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(o-a.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3515:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8003:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return _},handleClientScriptLoad:function(){return b},initScriptLoader:function(){return m}});let r=n(7043),l=n(3099),i=n(7437),o=r._(n(4887)),a=l._(n(2265)),u=n(8701),c=n(8221),s=n(3515),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:i,children:o="",strategy:a="afterInteractive",onError:u,stylesheets:s}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,u);return}let b=()=>{l&&l(),f.add(h)},m=document.createElement("script"),g=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),b()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(i?(m.innerHTML=i.__html||"",b()):o?(m.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",b()):t&&(m.src=t,d.set(t,g)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===a&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",a),s&&y(s),document.body.appendChild(m)};function b(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>h(e))}):h(e)}function m(e){e.forEach(b),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...y}=e,{updateScripts:b,scripts:m,getIsSsr:g,appDir:_,nonce:v}=(0,a.useContext)(u.HeadManagerContext),E=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;E.current||(l&&e&&f.has(e)&&l(),E.current=!0)},[l,t,n]);let O=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!O.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>h(e))})),O.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(b?(m[c]=(m[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:d,...y}]),b(m)):g&&g()?f.add(t||n):g&&!g()&&h(e)),_){if(p&&p.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(o.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin}),(0,i.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===c&&n&&o.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let _=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);