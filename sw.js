if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AddWallet.381165c7.js",revision:"c03648c639dafdf67bfd85b978b4aebc"},{url:"assets/AddWallet.997ae7b9.css",revision:"fc79194c6fbd928ef3f05b1adfaffec0"},{url:"assets/Connect.33b9d72f.css",revision:"1117cb61ad177feceb340fe14c46ebcf"},{url:"assets/Connect.f41fd878.js",revision:"ea202517c0f6aaca8a92c094d9e32e7e"},{url:"assets/Connector.00b2c38b.js",revision:"358ef129d822597a806823fed0438321"},{url:"assets/Connector.036ba09b.css",revision:"5a394f0028ab35f106aedb1ddefb7f9c"},{url:"assets/EditWallet.764052cb.js",revision:"569b9adf1eeb121598350c05241c8172"},{url:"assets/EditWallet.a71f87a5.css",revision:"11ec783e7bc9297bb166ea309ee99533"},{url:"assets/index.9aad3af9.js",revision:"763cb0526305a39a553d198919a8e570"},{url:"assets/index.e580205c.css",revision:"200655565387c845f6e65ef16df04340"},{url:"assets/Profile.25b0bf5c.css",revision:"a53982ab33c03441468f800646471006"},{url:"assets/Profile.ac61e3ff.js",revision:"97c4a6a41c8c984092ba2babf41d5ed5"},{url:"assets/Settings.636ae118.css",revision:"67266d5677f55510a28411068b18616b"},{url:"assets/Settings.ac6a7ef1.js",revision:"8fe8706d57a3933d6d0a66575a5646ce"},{url:"assets/Tx.5883f1f1.js",revision:"78cd965c3b3eef48dcf746e85e44da39"},{url:"assets/Tx.b589d40b.css",revision:"f63afdd415dd69030c79e6c5d8b316a2"},{url:"assets/vendor.9d5857d8.js",revision:"d94e5e560cac76ec1a4e06cd814d9258"},{url:"assets/WalletOptions.343b30e5.js",revision:"5780ff5f44f99b25a88a9774216a8ada"},{url:"assets/WalletOptions.edb07641.css",revision:"fa3105da956989c46f5cbbe5cc6ba8e9"},{url:"assets/Welcome.b0da1a4e.css",revision:"5c444f092429ccd47b56c40d41c863cd"},{url:"assets/Welcome.f40b0bcc.js",revision:"c7e9ea46439138d25cc1f6537ceec6e2"},{url:"index.html",revision:"fdc359064267e54c982d0951ecf2e327"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
