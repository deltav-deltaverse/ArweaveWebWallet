var he=Object.defineProperty,xe=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var J=(e,a,s)=>a in e?he(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,Z=(e,a)=>{for(var s in a||(a={}))ke.call(a,s)&&J(e,s,a[s]);if(Y)for(var s of Y(a))$e.call(a,s)&&J(e,s,a[s]);return e},ee=(e,a)=>xe(e,we(a));import{W as E,X as Ie,e as y,d as z,a8 as be,ak as Ve,w as P,a9 as Ce,o as t,c as n,q as _,s as C,D as g,$ as te,aa as j,n as R,u as c,P as N,a1 as F,a2 as H,a as r,F as w,k as L,i as Se,x as S,V as b,z as Te,C as ze,T as Be,a5 as W,a0 as Ee,t as Le}from"./vendor.864071fb.js";import{_ as V,j as ae,k as O,d as se,l as T,m as A,o as Me,I as ne,h as Pe,p as We,T as Ae,q as oe,r as le,s as ie,t as ce,v as je,w as Ne,x as de,y as re,z as ue,C as ve}from"./index.a2a3ccf6.js";import{I as _e}from"./y.dc90e8e0.js";const De={class:"margin fade-list-item",key:"margin1"},Re={class:"margin fade-list-item",key:"margin2"},Fe=E({props:{modelValue:null,options:null},emits:["update:modelValue"],setup(e,{emit:a}){const s=e,i=Ie("transitionState",null),o=y({get(){return s.modelValue},set(d){a("update:modelValue",d)}}),l=z(null),u=d=>{if(!(!d||!l.value))return s.options.align==="center"?d.offsetLeft+d.offsetWidth/2-l.value.offsetWidth/2:s.options.align==="end"?d.offsetLeft+d.offsetWidth-l.value.offsetWidth:d.offsetLeft},m=y(()=>{var d;return $.value,((d=l.value)==null?void 0:d.children)?Array(...l.value.children).filter(x=>!x.classList.contains("margin")):[]}),h=y(()=>{var d;return{"--position":((d=s.options)==null?void 0:d.align)||"start"}}),k=async(d,x)=>{var B;!x&&s.options.awaitTransition&&await ae(()=>!i.running),d=Math.max(d||0,0),(B=l.value)==null||B.scroll({left:u(m.value[d]),behavior:x?"instant":"smooth"})};let p;const $=z(0);return be(async()=>{p=new MutationObserver(async()=>{$.value++}),p.observe(l.value,{subtree:!1,childList:!0}),await Ve(),await ae(()=>m.value.length),setTimeout(()=>{const d=!s.options.immediate&&o.value&&o.value>0||!1;k(d?0:o.value,!0),P(o,x=>k(x),{immediate:d})})}),Ce(()=>p&&p.disconnect()),(d,x)=>(t(),n("div",{ref_key:"root",ref:l,class:"carousel flex-row no-scrollbar",style:R(c(h))},[_(j,{name:"fade-list"},{default:C(()=>{var B,M;return[((B=e.options)==null?void 0:B.overscroll)?(t(),n("div",De)):g("",!0),te(d.$slots,"default",{},void 0,!0),((M=e.options)==null?void 0:M.overscroll)?(t(),n("div",Re)):g("",!0)]}),_:3})],4))}});var me=V(Fe,[["__scopeId","data-v-5e316723"]]);const fe=e=>(F("data-v-7b045f16"),e=e(),H(),e),He={class:"wallet-selector"},Oe=fe(()=>r("div",{class:"exit-background"},null,-1)),Ue=fe(()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[r("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),qe=[Oe,Ue],Ke=E({props:{modelValue:String,default:String,exit:Boolean,active:Boolean},emits:["update:modelValue","selectWallet","exit"],setup(e,{emit:a}){const s=e,i=y({get(){return s.modelValue||s.default},set(l){a("update:modelValue",l)}}),o=y(()=>{var l;return(l=O(i.value))==null?void 0:l.key});return(l,u)=>(t(),n("div",He,[c(i)?(t(),n("button",{key:0,type:"button",onClick:u[0]||(u[0]=m=>l.$emit("selectWallet")),class:N(["tab",{active:e.active}])},[_(se,{address:c(o)},null,8,["address"])],2)):g("",!0),e.exit?(t(),n("button",{key:1,class:"exit",type:"button",onClick:u[1]||(u[1]=m=>l.$emit("exit"))},qe)):g("",!0)]))}});var Xe=V(Ke,[["__scopeId","data-v-7b045f16"]]);const Ge={class:"wallet-tabs"},Qe=["onClick"],Ye=E({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:a}){const s=e,i=y({get(){return s.modelValue},set(l){a("update:modelValue",l)}}),o=y(()=>T.value.findIndex(l=>l.id===i.value));return(l,u)=>(t(),n("div",Ge,[_(me,{modelValue:c(o),"onUpdate:modelValue":u[0]||(u[0]=m=>Se(o)?o.value=m:null),options:{align:"center",overscroll:!0,immediate:!0}},{default:C(()=>[(t(!0),n(w,null,L(c(T),m=>(t(),n("button",{key:m.id,type:"button",onClick:h=>i.value=m.id,class:N(["tab",{active:m.id==c(i)}])},[_(se,{address:m.key},null,8,["address"])],10,Qe))),128))]),_:1},8,["modelValue"])]))}});var Je=V(Ye,[["__scopeId","data-v-35e1b97b"]]);const Ze={class:"icon-background"},et={props:["icon","img"],setup(e){return(a,s)=>(t(),n("div",Ze,[e.img?(t(),S(A,{key:0,class:"page-logo",icon:e.img},null,8,["icon"])):(t(),S(A,{key:1,class:"page-logo placeholder",icon:e.icon},null,8,["icon"]))]))}};var pe=V(et,[["__scopeId","data-v-7bef1ba0"]]);const ye=e=>(F("data-v-9a5c4e1a"),e=e(),H(),e),tt=ye(()=>r("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"},null,-1)),at=ye(()=>r("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},null,-1)),st=[tt,at],nt={props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:a}){const s=e,i=y({get(){return s.modelValue},set(o){a("update:modelValue",o)}});return(o,l)=>(t(),n("button",{type:"button",class:"expand",onClick:l[0]||(l[0]=u=>i.value=!c(i))},[(t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:N({expanded:c(i)})},st,2))]))}};var ot=V(nt,[["__scopeId","data-v-9a5c4e1a"]]);const lt={class:"actions-list flex-row"},it=["onClick"],ct={props:["actions"],setup(e){return(a,s)=>(t(),n("div",lt,[(t(!0),n(w,null,L(e.actions,i=>(t(),n("button",{key:i.name,onClick:i.run,type:"button",class:"action flex-row"},[_(A,{icon:i.icon},null,8,["icon"]),r("div",null,b(i.name),1)],8,it))),128))]))}};var U=V(ct,[["__scopeId","data-v-99d382fa"]]);const dt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFF"},rt=r("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),ut=r("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"},null,-1),vt=[rt,ut];function _t(e,a){return t(),n("svg",dt,vt)}var mt={render:_t};const ft={class:"flex-row"},pt={class:"flex-row",style:{flex:"1 1 0"}},yt={class:"content"},gt={class:"title"},ht={class:"secondary-text"},xt={props:["data"],setup(e){return(a,s)=>(t(),n("div",{class:N(["notification",{expanded:e.data.expanded}])},[r("div",ft,[r("div",pt,[_(pe,{icon:e.data.icon||c(mt),img:e.data.img},null,8,["icon","img"]),r("div",yt,[e.data.expanded?(t(),S(Me,{key:0,class:"secondary-text",timestamp:e.data.timestamp},null,8,["timestamp"])):g("",!0),r("div",gt,b(e.data.title),1),r("div",ht,[te(a.$slots,"default",{},void 0,!0)]),e.data.expanded?(t(),S(U,{key:1,actions:e.data.actions},null,8,["actions"])):g("",!0)])]),_(ot,{modelValue:e.data.expanded,"onUpdate:modelValue":s[0]||(s[0]=i=>e.data.expanded=i)},null,8,["modelValue"])])],2))}};var wt=V(xt,[["__scopeId","data-v-7ece1c50"]]);const kt={class:"tx-card-extension"},$t={key:0,class:"flex-row",style:{"justify-content":"space-between"}},It={key:0},bt={key:1},Vt={key:1,class:"tags secondary-text"},Ct={props:["tx"],setup(e){return y(()=>ne.breakpoints.verticalLayout),(a,s)=>(t(),n("div",kt,[e.tx.tags.length||e.tx.data_size?(t(),n("div",$t,[e.tx.tags.length?(t(),n("div",It,"Tags:")):g("",!0),e.tx.data_size?(t(),n("div",bt,"Data: "+b(c(Pe)(e.tx.data_size)),1)):g("",!0)])):g("",!0),e.tx.tags.length?(t(),n("ul",Vt,[(t(!0),n(w,null,L(e.tx.tags,i=>(t(),n("li",null,b(i.name+" | "+i.value),1))),256))])):g("",!0)]))}};var St=V(Ct,[["__scopeId","data-v-5ae3361a"]]);const Tt={class:"permission-card"},zt=W(" Share the public key "),Bt=W(" Share the arweave config "),Et=W(" Sign data "),Lt=W(" Decrypt data "),Mt=E({props:{messageEntry:null},setup(e){const a=e,s=z(null),i=y(()=>{var h,k,p,$;if(((h=s.value)==null?void 0:h.method)!=="signTransaction")return;const u=(p=(k=s.value)==null?void 0:k.params)==null?void 0:p[0],m=($=u.tags)==null?void 0:$.map(({name:d,value:x})=>({name:window.atob(d),value:window.atob(x)}));return ee(Z({},u),{tags:m})});P(()=>a.messageEntry,async()=>{s.value=await We(a.messageEntry)},{immediate:!0});const o=[{name:"Accept",icon:_e,run:()=>a.messageEntry.status="accepted"},{name:"Reject",icon:oe,run:()=>a.messageEntry.status="rejected"}],l=[{name:"Pending",icon:le,run:()=>{}}];return(u,m)=>{var h,k,p,$,d;return Te((t(),n("div",Tt,[((h=s.value)==null?void 0:h.method)==="signTransaction"?(t(),n(w,{key:0},[_(Ae,{tx:c(i)},null,8,["tx"]),_(St,{tx:c(i)},null,8,["tx"])],64)):((k=s.value)==null?void 0:k.method)==="getPublicKey"?(t(),n(w,{key:1},[zt],64)):((p=s.value)==null?void 0:p.method)==="getArweaveConfig"?(t(),n(w,{key:2},[Bt],64)):(($=s.value)==null?void 0:$.method)==="sign"?(t(),n(w,{key:3},[Et],64)):((d=s.value)==null?void 0:d.method)==="decrypt"?(t(),n(w,{key:4},[Lt],64)):g("",!0),_(Be,{name:"fade",mode:"out-in"},{default:C(()=>[e.messageEntry.status?(t(),S(U,{key:1,actions:l})):(t(),S(U,{key:0,actions:o}))]),_:1})],512)),[[ze,s.value]])}}});var Pt=V(Mt,[["__scopeId","data-v-0e1a76fc"]]);const Wt={class:"connection-card flex-column no-scrollbar"},At={key:"connect"},jt=E({props:{walletId:null},setup(e){const a=e,s={connect:"Connect automatically",signTransaction:"Sign transaction",getPublicKey:"Share public key",sign:"Sign arbitrary data",decrypt:"Decrypt data",getArweaveConfig:"Share arweave gateway configuration"},i=u=>!u||u.options&&!u.options.permissions?[]:Object.getOwnPropertyNames(Object.getPrototypeOf(u.messageRunner)).filter(m=>u.messageRunner[m]&&m!=="constructor"),o=y(()=>O(a.walletId)),l=y(()=>i(o.value));return(u,m)=>(t(),n("div",Wt,[r("div",At,b(c(s).connect),1),(t(!0),n(w,null,L(c(l),h=>(t(),n("div",{key:h},b(c(s)[h]),1))),128))]))}}),Nt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#fff"},Dt=r("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Rt=r("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"},null,-1),Ft=[Dt,Rt];function Ht(e,a){return t(),n("svg",Nt,Ft)}var Ot={render:Ht};const ge=e=>(F("data-v-294aa368"),e=e(),H(),e),Ut={class:"connection-card flex-column no-scrollbar"},qt={class:"flex-row"},Kt=["disabled"],Xt={style:{"min-width":"0"}},Gt={class:"ellipsis"},Qt={class:"secondary-text ellipsis"},Yt={class:"flex-column",style:{flex:"1 1 0"}},Jt={class:"container"},Zt=ge(()=>r("div",null,"Add wallet",-1)),ea={class:"page-container",key:"0"},ta={key:0},aa={class:"status fade-list-item",key:"1"},sa={key:1},na=ge(()=>r("div",{class:"status fade-list-item",key:"1"},"WIP",-1)),oa=E({props:{state:null},setup(e){var K;const a=e,s=Ee(),i=(K=T.value[0])==null?void 0:K.id;y(()=>T.value.map(v=>v.key));const o=z(a.state.walletId||i);y(()=>O(i));const l=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],u=z(o.value?l[0].name:null);P(()=>a.state.walletId,v=>{!v||(p.value=!1,o.value=v,u.value=l[0].name)});const m=()=>a.state.walletId=!1,h=()=>{p.value=!1,a.state.walletId=o.value+""},k=()=>{var v;!a.state.walletId||(o.value!==(a.state.walletId||((v=T.value[0])==null?void 0:v.id))&&d.value++,p.value=!1,o.value=a.state.walletId)},p=z(!a.state.walletId),$=y(()=>p.value&&T.value.length>1),d=z(0),x=()=>{var v,f;if(!p.value){p.value=!0;return}o.value!==(a.state.walletId||((v=T.value[0])==null?void 0:v.id))&&d.value++,o.value=a.state.walletId||((f=T.value[0])==null?void 0:f.id),p.value=!1},B=y(()=>{var f;const v=a.state.walletId?`Switch to ${o.value}`:`Connect to ${((f=a.state.appInfo)==null?void 0:f.name)||a.state.origin} from the account ${o.value}`;return{title:a.state.walletId?"Switch":"Connect",timestamp:Date.now(),actions:[{name:"Connect",icon:_e,run:h},{name:a.state.walletId?"Cancel":"Switch",icon:oe,run:a.state.walletId?k:x}],expanded:!0,content:v}}),M=y(()=>{var v;return o.value!==a.state.walletId?[]:(v=a.state.messageQueue)==null?void 0:v.filter(f=>!f.fulfilled)});Le(ne.breakpoints,"verticalLayout");const D=z(null),q=(v,f)=>D.value=v-f;return P(()=>l.findIndex(v=>v.name===u.value),q),P(()=>T.value.findIndex(v=>v.id===o.value),q),(v,f)=>{var X,G;return t(),n("div",Ut,[r("div",qt,[r("button",{type:"button",class:"info flex-row",onClick:f[0]||(f[0]=(...I)=>c(ie)&&c(ie)(...I)),disabled:!c(ce)(e.state.origin,e.state.session)},[_(pe,{img:(X=e.state.appInfo)==null?void 0:X.logo,icon:c(le)},null,8,["img","icon"]),r("div",Xt,[r("div",Gt,b(((G=e.state.appInfo)==null?void 0:G.name)||"Connector"),1),r("div",Qt,b(e.state.origin),1)]),c(ce)(e.state.origin,e.state.session)?(t(),S(A,{key:0,icon:c(Ot)},null,8,["icon"])):g("",!0)],8,Kt),_(Xe,{modelValue:e.state.walletId,"onUpdate:modelValue":f[1]||(f[1]=I=>e.state.walletId=I),default:c(i),exit:!0,active:!c($),onSelectWallet:x,onExit:m},null,8,["modelValue","default","active"])]),r("div",Yt,[_(je,{tabs:l,modelValue:u.value,"onUpdate:modelValue":f[2]||(f[2]=I=>u.value=I),disabled:!o.value},null,8,["modelValue","disabled"]),r("div",Jt,[_(de,{vector:D.value,axis:"x"},{default:C(()=>[c(T).length?(t(),n("div",{class:"container-scroll",key:d.value},[_(j,{name:"fade-list"},{default:C(()=>[c($)?(t(),S(Je,{modelValue:o.value,"onUpdate:modelValue":f[4]||(f[4]=I=>o.value=I),class:"fade-list-item",key:"-1"},null,8,["modelValue"])):g("",!0),r("div",ea,[_(de,{vector:D.value,axis:"x"},{default:C(()=>[(t(),n("div",{key:(o.value||"")+u.value,class:"content"},[u.value==="Requests"?(t(),n("div",ta,[_(j,{name:"fade-list"},{default:C(()=>{var I;return[r("div",{class:"fade-list-item",key:"0",style:R({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),((I=c(M))==null?void 0:I.length)===0&&e.state.walletId&&e.state.walletId===o.value?(t(),n("div",aa,"Connected")):g("",!0),o.value!==e.state.walletId?(t(),S(wt,{data:c(B),class:"fade-list-item",key:"2"},{default:C(()=>[W(b(c(B).content),1)]),_:1},8,["data"])):g("",!0),(t(!0),n(w,null,L(c(M),Q=>(t(),S(Pt,{key:Q.uuid,messageEntry:Q,style:{padding:"var(--spacing)"},class:"flex-column fade-list-item"},null,8,["messageEntry"]))),128))]}),_:1})])):u.value==="Permissions"?(t(),n("div",sa,[_(j,{name:"fade-list"},{default:C(()=>[r("div",{class:"fade-list-item",key:"0",style:R({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),na,_(jt,{walletId:o.value,class:"fade-list-item",key:"2"},null,8,["walletId"])]),_:1})])):g("",!0)]))]),_:1},8,["vector"])])]),_:1})])):(t(),n("div",{key:0,class:"status flex-column",style:{color:"inherit",cursor:"pointer"},onClick:f[3]||(f[3]=I=>c(s).push("/add"))},[_(A,{icon:c(Ne),style:{"font-size":"3em","margin-top":"40%"}},null,8,["icon"]),Zt]))]),_:1},8,["vector"])])])])}}});var la=V(oa,[["__scopeId","data-v-294aa368"]]);const ia={class:"connect flex-column"},ca={class:"bottom-info secondary-text",style:{opacity:"0.0","pointer-events":"none"}},da=E({setup(e){const a=z(re.value.findIndex(s=>s.origin===ue.origin&&s.session===ue.session));return(s,i)=>(t(),n("div",ia,[_(me,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=o=>a.value=o),options:{align:"start",overscroll:!0},class:"connectors"},{default:C(()=>[(t(!0),n(w,null,L(c(re),o=>(t(),n("div",{key:o.session,class:"connection-card-container fade-list-item"},[_(la,{state:o,class:"box"},null,8,["state"])]))),128))]),_:1},8,["modelValue"]),r("div",ca,[r("div",null,"All Channels "+b(Object.keys(c(ve)).length),1),(t(!0),n(w,null,L(c(ve),(o,l)=>(t(),n("div",{key:l},b(o),1))),128))])]))}});var ma=V(da,[["__scopeId","data-v-7c3f5fef"]]);export{ma as default};
//# sourceMappingURL=Connect.ee9c64a7.js.map
