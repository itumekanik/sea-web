(()=>{"use strict";var e={10119:(e,r,t)=>{t(65363),t(10071);var o=t(98880),n=t(52277),a=t(83673);function i(e,r,t,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});var l=t(74260);const c=(0,l.Z)(s,[["render",i]]),u=c;var d=t(4584),p=t(47083),f=t(79582);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(349)]).then(t.bind(t,67349)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(142)]).then(t.bind(t,19142))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(434)]).then(t.bind(t,56434))}],v=h,b=(0,p.BC)((()=>{const e=f.PO,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("/")});return r}));async function m(e,r){const o="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:a}=await Promise.resolve().then(t.bind(t,4584)),i="function"===typeof b?await b({store:o}):b;o.$router=i;const s=e(u);return s.use(n.Z,r),{app:s,store:o,storeKey:a,router:i}}const g={config:{}},y="/";async function w({app:e,router:r,store:t,storeKey:o},n){let a=!1;const i=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=i(e);null!==r&&(window.location.href=r)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<n.length;u++)try{await n[u]({app:e,router:r,store:t,ssrContext:null,redirect:s,urlPath:l,publicPath:y})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(r),e.use(t,o),e.mount("#q-app"))}m(o.ri,g).then((e=>Promise.all([Promise.resolve().then(t.bind(t,94112)),Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.bind(t,41478))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,t)}))))},41478:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i,ace:()=>a.a});var o=t(47083),n=t(3791),a=t.n(n);t(19083);const i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$ace=a()}))},5474:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s,api:()=>i});var o=t(47083),n=t(30052),a=t.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},94112:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var o=t(47083),n=t(9262);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,o.xr)((({app:e})=>{const r=(0,n.o)({locale:"en-US",messages:i});e.use(r)}))},4584:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var o=t(47083),n=t(93617);const a=(0,o.h)((()=>{const e=(0,n.MT)({modules:{},strict:!1});return e}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={id:o,loaded:!1,exports:{}};return e[o](a,a.exports,t),a.loaded=!0,a.exports}t.m=e,(()=>{t.amdD=function(){throw new Error("define cannot be used indirect")}})(),(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{142:"191f0064",349:"ce07c7c5",434:"ed99369c"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"04a483ec"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="book1:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==r+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=o),e[o]=[n];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{t.p="/"})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),s=new Error,l=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};t.l(i,l,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,s,l]=o,c=0;if(i.some((r=>0!==e[r]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(l)var u=l(t)}for(r&&r(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return t.O(u)},o=self["webpackChunkbook1"]=self["webpackChunkbook1"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(10119)));o=t.O(o)})();