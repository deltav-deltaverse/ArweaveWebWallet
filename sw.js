if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(r.map((s=>o[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.9eac0c00.js",revision:null},{url:"assets/AddWallet.af77fdf6.css",revision:null},{url:"assets/Carousel.151f2d06.css",revision:null},{url:"assets/Carousel.2fae0c6b.js",revision:null},{url:"assets/Connect.9f87cf89.css",revision:null},{url:"assets/Connect.aeb58cff.js",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.9793f428.js",revision:null},{url:"assets/EditWallet.246706cc.css",revision:null},{url:"assets/EditWallet.b7d7f0cc.js",revision:null},{url:"assets/Explore.15a6d30a.css",revision:null},{url:"assets/Explore.c190afaf.js",revision:null},{url:"assets/index.5bb8cb97.js",revision:null},{url:"assets/index.6a9bedfc.css",revision:null},{url:"assets/OverlayPrompt.06051262.css",revision:null},{url:"assets/OverlayPrompt.a34ff4d7.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.cad1d295.js",revision:null},{url:"assets/ProfilePreview.769b4070.js",revision:null},{url:"assets/ProfilePreview.de7a8e20.css",revision:null},{url:"assets/Settings.61089840.css",revision:null},{url:"assets/Settings.6dd95bb9.js",revision:null},{url:"assets/Tx.294d1ffc.js",revision:null},{url:"assets/Tx.7837f7f2.css",revision:null},{url:"assets/vendor.5e7c49a5.js",revision:null},{url:"assets/WalletOptions.80ce9403.js",revision:null},{url:"assets/WalletOptions.99df058b.css",revision:null},{url:"assets/Welcome.6f2366e9.css",revision:null},{url:"assets/Welcome.c54f6c62.js",revision:null},{url:"assets/y.31bda890.js",revision:null},{url:"index.html",revision:"30ba4aa07b881a41cd0671cb364977d9"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
