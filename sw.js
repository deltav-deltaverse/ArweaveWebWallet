if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>l(s,r),a={module:{uri:r},exports:t,require:u};e[r]=Promise.all(n.map((s=>a[s]||u(s)))).then((s=>(i(...s),t)))}}define(["./workbox-f250d166"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.af77fdf6.css",revision:null},{url:"assets/AddWallet.b4f6c8d0.js",revision:null},{url:"assets/bundle.cd81762e.js",revision:null},{url:"assets/Connect.7c137995.js",revision:null},{url:"assets/Connect.bf9880d0.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.dcc6b445.js",revision:null},{url:"assets/download.8d2831c7.js",revision:null},{url:"assets/EditWallet.15207483.js",revision:null},{url:"assets/EditWallet.6f91cd55.css",revision:null},{url:"assets/Explore.1d74e5cd.js",revision:null},{url:"assets/Explore.b9edfd3c.css",revision:null},{url:"assets/index.35f0beaa.css",revision:null},{url:"assets/index.6e2224eb.js",revision:null},{url:"assets/launch.a850f84b.js",revision:null},{url:"assets/ListContainer.6d00e2ac.js",revision:null},{url:"assets/ListContainer.aaea8027.css",revision:null},{url:"assets/OverlayPrompt.06051262.css",revision:null},{url:"assets/OverlayPrompt.10a2d079.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.8f046463.js",revision:null},{url:"assets/ProfilePreview.de7a8e20.css",revision:null},{url:"assets/ProfilePreview.f32c7efa.js",revision:null},{url:"assets/Settings.1ac2533e.js",revision:null},{url:"assets/Settings.7d2c35aa.css",revision:null},{url:"assets/Tx.5a9e38a1.js",revision:null},{url:"assets/Tx.d1e71744.css",revision:null},{url:"assets/vendor.284ce6b0.js",revision:null},{url:"assets/WalletOptions.6bb2e6a4.js",revision:null},{url:"assets/WalletOptions.b275c07f.css",revision:null},{url:"assets/Welcome.056c0ac6.css",revision:null},{url:"assets/Welcome.a66f6fd4.js",revision:null},{url:"assets/y.fc21324a.js",revision:null},{url:"index.html",revision:"98801bf541920ddbd86b28bc9de8162a"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
