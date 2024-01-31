(()=>{"use strict";var e={577:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),i=n(645),o=n.n(i),c=n(667),s=n.n(c),l=new URL(n(389),n.b),d=o()(a()),p=s()(l);d.push([e.id,`body {\n    color: #fff;\n    margin: 0;\n    padding: 0;\n    background-image: url(${p});\n    background-position: center;\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    overflow-x: hidden;\n}\n\n#search-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    gap: 1vmax;\n    margin-top: 1vmax;\n}\n\n#search-btn, #search-bar {\n    background-color: rgba(0, 0, 0, 0.3);\n    color: #fff;\n    border: 1px solid rgba(14, 187, 187, 0.7);\n    border-radius: 1vmax;\n    padding: 1vmax 2vmax;\n    font-size: 2vmax;\n}\n\n#search-btn:focus, #search-bar:focus {\n    outline: none;\n}\n\n#search-btn {\n    cursor: pointer;\n}\n\n#main-weather-info-wrapper {\n    width: 100%;\n    min-height: 80vh;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 2vmax;\n}\n\n.weather-info-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: min(800px, 98vw);\n    margin: auto;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    border-radius: 2vmax;\n    padding: 1vmax;\n    border: 1px solid rgba(255, 255, 255, 0.8);\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.weather-info-container > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n}\n\n.weather-title-time {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-bottom: 2px solid #fff;\n}\n\n.weather-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\t\t\n\n.weather-info > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.temp-icon-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    gap: 1vmax;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n\n.other-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1.5;\n        -ms-flex: 1.5;\n            flex: 1.5;\n    border-radius: 1vmax;\n}\n\n.other-info > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n\n.other-info div:not(:last-child) {\n    border-bottom: 1px solid tomato;\n}\n`,""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var s=r(e,a),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},389:(e,t,n)=>{e.exports=n.p+"f5f4e26a5eee9f6eb798.svg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),c=n(565),s=n.n(c),l=n(216),d=n.n(l),p=n(589),u=n.n(p),f=n(577),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d();t()(f.Z,m);f.Z&&f.Z.locals&&f.Z.locals;function b(e="...",t){const n=t.current,r=t.location,a=document.getElementById("main-weather-info-wrapper");!function(e){for(;e&&e.firstChild;)e.removeChild(e.firstChild)}(a);let i=document.createElement("div");i.setAttribute("class","weather-info-container");let o=document.createElement("div");o.setAttribute("class","weather-title-time");let c=document.createElement("p");c.setAttribute("id","title"),c.textContent=e;let s=document.createElement("p");s.textContent=r.name;let l=document.createElement("p");l.setAttribute("id","time"),l.textContent=r.localtime.split(" ")[1]+(n.is_day?" PM":" AM"),o.appendChild(c),o.appendChild(s),o.appendChild(l),i.appendChild(o);let d=document.createElement("div");d.setAttribute("class","weather-info");let p=document.createElement("div");p.setAttribute("class","temp-icon-info");let u=document.createElement("img");u.setAttribute("src","https:"+n.condition.icon),u.setAttribute("alt","icon");let f=document.createElement("p");f.textContent=n.temp_c+" ℃",p.appendChild(u),p.appendChild(f),d.appendChild(p);let m=document.createElement("div");m.setAttribute("class","other-info");let b=document.createElement("div");b.setAttribute("class","wind-info");let h=document.createElement("p");h.textContent="Wind";let x=document.createElement("p");x.setAttribute("id","wind"),x.textContent=n.wind_kph+" km/hr",b.appendChild(h),b.appendChild(x);let v=document.createElement("div"),w=document.createElement("p");w.textContent="Country";let y=document.createElement("p");y.textContent=r.country,v.appendChild(w),v.appendChild(y),m.appendChild(v);let g=document.createElement("div");g.setAttribute("class","weather-status");let k=document.createElement("p");k.textContent="Status";let C=document.createElement("p");C.setAttribute("id","weather-type"),C.textContent=n.condition.text,g.appendChild(k),g.appendChild(C),m.appendChild(g),m.appendChild(b),d.appendChild(m),i.appendChild(d),a.appendChild(i)}class h{#e="3cc93a01996d4195b8f85813231405";static current="https://api.weatherapi.com/v1/current.json";static forecast="https://api.weatherapi.com/v1/forecast.json";static weatherObject=null;constructor(){h.weatherObject||(h.weatherObject=this)}async getWeather(e="auto:ip"){const t=new URL(h.current);t.searchParams.append("key",this.#e),t.searchParams.append("q",e);try{const e=await fetch(t,{mode:"cors"});if(!e.ok||200!==e.status)throw Error("Failed to fetch data");return e.json()}catch(e){return console.warn("WARNING :: "+e),null}}}document.body.insertBefore(function(){const e=document.createElement("div");e.setAttribute("id","search-wrapper");const t=document.createElement("input");t.type="search",t.setAttribute("id","search-bar");const n=document.createElement("button");return n.appendChild(document.createTextNode("Search")),n.setAttribute("id","search-btn"),e.appendChild(t),e.appendChild(n),e}(),document.body.firstElementChild),window.onload=async()=>{const e=await(new h).getWeather();e&&b("current",e)},document.getElementById("search-btn").addEventListener("click",(async()=>{const e=await(new h).getWeather(document.getElementById("search-bar").value);e&&b("current",e)}))})()})();