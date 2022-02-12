import{_ as q,N as E,O as N,B as o,P as j,Q as F,R as I,S as L,U as T,w as $,V as M,l as U,X as D,Y as G,Z as R}from"./index.5bb8cb97.js";import{O as X,I as H}from"./OverlayPrompt.a34ff4d7.js";import{X as J,a1 as K,d,e as Q,o as p,c as C,a as e,q as n,x as y,s as i,u as m,a6 as c,W as w,F as Y,l as Z,a3 as z,a4 as aa}from"./vendor.5e7c49a5.js";const g=_=>(z("data-v-6960c506"),_=_(),aa(),_),ea={class:"add-wallet flex-column"},sa={class:"card"},ta=g(()=>e("h2",{style:{display:"flex","justify-content":"space-between"}},[e("span",null,"Passphrase"),e("span",null,"Key file")],-1)),la={class:"flex-column"},na=g(()=>e("div",null,null,-1)),oa=c("Create new wallet"),da=c("Import passphrase"),ia={class:"flex-row",style:{"align-items":"center"}},ca={class:"flex-column"},ra={class:"flex-row"},ua=c("Verify address"),pa=["href"],ma=c("Purchase | affiliate link"),_a={class:"card"},va=g(()=>e("h2",null,"Address Only",-1)),ha=J({setup(_){const r=K(),l=d(""),f=d(""),v=d(void 0),k=Q(()=>l.value.trim().split(/\s+/g).length>=12),h=d(!1),b=d(!1),u=d(null),P=async()=>{h.value=!0,l.value=await F();const s=I(l.value);setTimeout(async()=>u.value=await s,1e4)},W=()=>{r.push({name:"EditWallet",query:{wallet:u.value}})},x=async()=>{b.value=!0;const s=I(l.value);v.value={icon:"loader",message:"importing"},r.push({name:"EditWallet",query:{wallet:await s}})},V=async()=>{if(await L(l.value))return x();v.value={message:"This passphrase is not valid, do you want to import it anyway?",actions:[{name:"Back",run:()=>v.value=void 0},{name:"Import Passphrase",run:()=>x()}]}},A=async s=>{if(!s)return;const t=await T(JSON.parse(await s[0].text()));r.push({name:"EditWallet",query:{wallet:t}})},B=async s=>{const t=await G(s);r.push({name:"EditWallet",query:{wallet:t}})},S=[R],O={icon:$,run:async()=>{const s=await M(f.value);r.push({name:"EditWallet",query:{wallet:s}})}};return(s,t)=>(p(),C("div",ea,[e("div",sa,[ta,e("div",la,[n(E,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a),onFiles:A,disabled:h.value,placeholder:"Import passphrase or key file"},null,8,["modelValue","disabled"]),na,!h.value&&!l.value.length?(p(),y(o,{key:0,onClick:t[1]||(t[1]=a=>P()),disabled:l.value.length&&!m(k),icon:m(N),class:"main"},{default:i(()=>[oa]),_:1},8,["disabled","icon"])):h.value?(p(),y(o,{key:1,disabled:u.value==null,onClick:W,icon:u.value==null?"loader":"",class:"main"},{default:i(()=>[c(w(u.value==null?"Generating, write down the passphrase":"Passphrase saved? Click here to proceed"),1)]),_:1},8,["disabled","icon"])):(p(),y(o,{key:2,disabled:!m(k)||b.value,onClick:V,class:"main"},{default:i(()=>[da]),_:1},8,["disabled"]))]),n(X,{options:v.value},null,8,["options"])]),(p(),C(Y,null,Z(S,a=>e("div",{class:"card",key:a.metadata.name},[e("h2",ia,[n(U,{icon:a.metadata.icon},null,8,["icon"]),e("span",null,w(a.metadata.name)+" Hardware Wallet",1)]),e("div",ca,[n(o,{disabled:!a.metadata.isSupported,onClick:fa=>B(a),icon:a.metadata.icon,class:"main"},{default:i(()=>[c(w(a.metadata.isSupported?`Connect with ${a.metadata.name}`:`${a.metadata.name} not supported for this browser`),1)]),_:2},1032,["disabled","onClick","icon"]),e("div",ra,[n(o,{icon:m(D),onClick:a.metadata.verify},{default:i(()=>[ua]),_:2},1032,["icon","onClick"]),e("a",{href:a.metadata.link,target:"_blank",class:"reset"},[n(o,{icon:m(H)},{default:i(()=>[ma]),_:1},8,["icon"])],8,pa)])])])),64)),e("div",_a,[va,n(j,{modelValue:f.value,"onUpdate:modelValue":t[2]||(t[2]=a=>f.value=a),actions:[O]},null,8,["modelValue","actions"])])]))}});var ka=q(ha,[["__scopeId","data-v-6960c506"]]);export{ka as default};
//# sourceMappingURL=AddWallet.9eac0c00.js.map
