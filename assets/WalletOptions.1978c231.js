import{_ as i,i as c,W as r,Z as u}from"./index.c54845d8.js";import{Y as w,o as s,c as n,a as l,x as d,G as v,u as f}from"./vendor.7383ae2c.js";const m={class:"wallet-options"},_={class:"left"},k={class:"profile-info"},x={class:"content"},W={class:"bottom"},p=w({props:{wallet:null},setup(e){return(b,t)=>{var a;return s(),n("div",m,[l("div",_,[d(c,{class:"profile",address:e.wallet.key},null,8,["address"]),l("div",k,[d(r,{wallet:e.wallet},null,8,["wallet"])])]),l("div",x,[l("div",W,[l("div",null,[e.wallet.download&&!((a=e.wallet.metadata.methods.download)==null?void 0:a.unavailable)?(s(),n("button",{key:0,onClick:t[0]||(t[0]=(...o)=>e.wallet.download&&e.wallet.download(...o))},"Download")):v("",!0)]),l("div",null,[l("button",{onClick:t[1]||(t[1]=o=>f(u)(e.wallet))},"Delete")])])])])}}});var h=i(p,[["__scopeId","data-v-672fc0f3"]]);export{h as W};
//# sourceMappingURL=WalletOptions.1978c231.js.map
