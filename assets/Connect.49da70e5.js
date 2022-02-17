var _e=Object.defineProperty,me=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var X=(e,a,n)=>a in e?_e(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,U=(e,a)=>{for(var n in a||(a={}))fe.call(a,n)&&X(e,n,a[n]);if(Q)for(var n of Q(a))ge.call(a,n)&&X(e,n,a[n]);return e},Y=(e,a)=>me(e,ye(a));import{C as G,L as pe}from"./ListContainer.946bc5dc.js";import{Y as E,e as h,o as t,c as s,u as o,Q as H,s as m,E as k,a4 as J,a5 as Z,a as g,x as I,F as C,n as O,i as xe,y as $,X as P,d as T,w as z,C as he,D as be,T as ke,a7 as N,a2 as Ie,k as Ce,ac as F,p as ee}from"./vendor.06acf495.js";import{_ as j,j as R,i as te,k as B,l as W,I as ae,h as $e,m as we,T as Se,o as Ve,p as se,q as Pe,r as D,B as Te,s as ne,t as le,v as je,w as Be,x as oe,y as ie,z as ce}from"./index.c6929fd3.js";import{I as ue}from"./y.722de430.js";import{P as Ae}from"./ProfilePreview.24382883.js";import{I as Ee,O as de}from"./OverlayPrompt.4c1dd80b.js";const re=e=>(J("data-v-7b045f16"),e=e(),Z(),e),Oe={class:"wallet-selector"},Le=re(()=>g("div",{class:"exit-background"},null,-1)),Me=re(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[g("path",{d:"M0 0h24v24H0V0z",fill:"none"}),g("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),ze=[Le,Me],Ne=E({props:{modelValue:String,default:String,exit:Boolean,active:Boolean},emits:["update:modelValue","selectWallet","exit"],setup(e,{emit:a}){const n=e,i=h({get(){return n.modelValue||n.default},set(r){a("update:modelValue",r)}}),l=h(()=>{var r;return(r=R(i.value))==null?void 0:r.key});return(r,y)=>(t(),s("div",Oe,[o(i)?(t(),s("button",{key:0,type:"button",onClick:y[0]||(y[0]=u=>r.$emit("selectWallet")),class:H(["tab",{active:e.active}])},[m(te,{address:o(l)},null,8,["address"])],2)):k("",!0),e.exit?(t(),s("button",{key:1,class:"exit",type:"button",onClick:y[1]||(y[1]=u=>r.$emit("exit"))},ze)):k("",!0)]))}});var Re=j(Ne,[["__scopeId","data-v-7b045f16"]]);const We={class:"wallet-tabs"},De=["onClick"],Ue=E({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:a}){const n=e,i=h({get(){return n.modelValue},set(r){a("update:modelValue",r)}}),l=h(()=>B.value.findIndex(r=>r.id===i.value));return(r,y)=>(t(),s("div",We,[m(G,{modelValue:o(l),"onUpdate:modelValue":y[0]||(y[0]=u=>xe(l)?l.value=u:null),options:{align:"center",overscroll:!0,immediate:!0}},{default:I(()=>[(t(!0),s(C,null,O(o(B),u=>(t(),s("button",{key:u.id,type:"button",onClick:v=>i.value=u.id,class:H(["tab",{active:u.id==o(i)}])},[m(te,{address:u.key},null,8,["address"])],10,De))),128))]),_:1},8,["modelValue"])]))}});var Fe=j(Ue,[["__scopeId","data-v-35e1b97b"]]);const Ke={class:"icon-background"},qe={props:["icon","img"],setup(e){return(a,n)=>(t(),s("div",Ke,[e.img?(t(),$(W,{key:0,class:"page-logo",icon:e.img},null,8,["icon"])):(t(),$(W,{key:1,class:"page-logo placeholder",icon:e.icon},null,8,["icon"]))]))}};var Qe=j(qe,[["__scopeId","data-v-7bef1ba0"]]);const Xe={class:"tx-card-extension"},Ye={key:0,class:"flex-row",style:{"justify-content":"space-between"}},Ge={key:0},He={key:1},Je={key:1,class:"tags secondary-text no-scrollbar"},Ze={props:["tx"],setup(e){return h(()=>ae.breakpoints.verticalLayout),(a,n)=>(t(),s("div",Xe,[e.tx.tags.length||e.tx.data_size?(t(),s("div",Ye,[e.tx.tags.length?(t(),s("div",Ge,"Tags:")):k("",!0),e.tx.data_size?(t(),s("div",He,"Data: "+P(o($e)(e.tx.data_size)),1)):k("",!0)])):k("",!0),e.tx.tags.length?(t(),s("ul",Je,[(t(!0),s(C,null,O(e.tx.tags,i=>(t(),s("li",null,P(i.name+" | "+i.value),1))),256))])):k("",!0)]))}};var et=j(Ze,[["__scopeId","data-v-5ee7fb30"]]);const tt={class:"actions-list flex-row"},at=["onClick"],st=E({props:{actions:null},setup(e){return(a,n)=>(t(),s("div",tt,[(t(!0),s(C,null,O(e.actions,i=>(t(),s("button",{key:i.name,onClick:i.run,type:"button",class:"action flex-row"},[m(W,{icon:i.icon},null,8,["icon"]),g("div",null,P(i.name),1)],8,at))),128))]))}});var ve=j(st,[["__scopeId","data-v-7477f216"]]);const nt=e=>(J("data-v-8d6182e2"),e=e(),Z(),e),lt={class:"permission-card"},ot=nt(()=>g("span",null,"Sign transaction",-1)),it=N(" Share the public key "),ct=N(" Share the arweave config "),ut=N(" Sign data "),dt=N(" Decrypt data "),rt=E({props:{messageEntry:null},setup(e){const a=e,n=T(null),i=h(()=>{var v,b,p,w;if(((v=n.value)==null?void 0:v.method)!=="signTransaction")return;const y=(p=(b=n.value)==null?void 0:b.params)==null?void 0:p[0],u=(w=y.tags)==null?void 0:w.map(({name:V,value:c})=>({name:window.atob(V),value:window.atob(c)}));return Y(U({},y),{tags:u})});z(()=>a.messageEntry,async()=>{n.value=await we(a.messageEntry)},{immediate:!0});const l=[{name:"Accept",icon:ue,run:()=>a.messageEntry.status="accepted"},{name:"Reject",icon:Ve,run:()=>a.messageEntry.status="rejected"}],r=[{name:"Pending",icon:se,run:()=>{}}];return(y,u)=>{var v,b,p,w,V;return he((t(),s("div",lt,[((v=n.value)==null?void 0:v.method)==="signTransaction"?(t(),s(C,{key:0},[ot,m(Se,{tx:o(i)},null,8,["tx"]),m(et,{tx:o(i)},null,8,["tx"])],64)):((b=n.value)==null?void 0:b.method)==="getPublicKey"?(t(),s(C,{key:1},[it],64)):((p=n.value)==null?void 0:p.method)==="getArweaveConfig"?(t(),s(C,{key:2},[ct],64)):((w=n.value)==null?void 0:w.method)==="sign"?(t(),s(C,{key:3},[ut],64)):((V=n.value)==null?void 0:V.method)==="decrypt"?(t(),s(C,{key:4},[dt],64)):k("",!0),m(ke,{name:"fade",mode:"out-in"},{default:I(()=>[e.messageEntry.status?(t(),$(ve,{key:1,actions:r})):(t(),$(ve,{key:0,actions:l}))]),_:1})],512)),[[be,n.value]])}}});var vt=j(rt,[["__scopeId","data-v-8d6182e2"]]);const _t={class:"flex-column no-scrollbar"},mt=["disabled","onClick"],yt=N(" Apply "),ft=E({props:{state:null,walletId:null},setup(e){const a=e,n={connect:"Connect automatically",signTransaction:"Sign transaction",getPublicKey:"Share public key",sign:"Sign arbitrary data",decrypt:"Decrypt data",getArweaveConfig:"Share arweave gateway configuration"},i=c=>Object.getOwnPropertyNames(Object.getPrototypeOf((c==null?void 0:c.messageRunner)||{})).filter(_=>{var d;return!((d=c==null?void 0:c.messageRunner.getMethodMetadata(_))==null?void 0:d.unavailable)&&_!=="constructor"&&_!=="getMethodMetadata"}).map(_=>{var d;return{name:_,displayName:n[_]||_,disabled:(d=c==null?void 0:c.messageRunner.getMethodMetadata(_))==null?void 0:d.userIntent}}),l=h(()=>R(a.walletId)),r=h(()=>[...i(l.value)]),y=c=>v.value&&(v.value[c]=!v.value[c]),u=Pe("connectionSettings:",a.state.origin,{}),v=T(void 0),b=T(void 0);z(l,c=>{var _,d,S;!(c==null?void 0:c.uuid)||((_=u.state).value||(_.value={}),b.value=(d=u.state.value)[S=c.uuid]||(d[S]={}),v.value=U({},b.value))},{immediate:!0});const p=([c,_])=>{var S;const d=((S=b.value)==null?void 0:S[c])||!1;if(_!==d)return!0},w=h(()=>v.value?Object.entries(v.value).find(p):!1),V=()=>{if(!v.value||!b.value)return!1;Object.entries(v.value).filter(p).forEach(([c,_])=>b.value&&(b.value[c]=_))};return(c,_)=>(t(),s("div",_t,[(t(!0),s(C,null,O(o(r),d=>(t(),s("button",{key:d.name,disabled:d.disabled,class:"row method",onClick:S=>y(d.name)},[g("div",null,P(d.displayName),1),m(D,{vector:v.value[d.name]?1:-1,axis:"y"},{default:I(()=>[(t(),s("div",{key:v.value[d.name]},P(v.value[d.name]?"Allow":"Ask"),1))]),_:2},1032,["vector"])],8,mt))),128)),m(D,null,{default:I(()=>[o(w)?(t(),$(Te,{key:0,onClick:_[0]||(_[0]=d=>V())},{default:I(()=>[yt]),_:1})):k("",!0)]),_:1})]))}});var gt=j(ft,[["__scopeId","data-v-81b70f2e"]]);const pt={class:"flex-row"},xt=["disabled"],ht={style:{"min-width":"0"}},bt={class:"ellipsis"},kt={class:"secondary-text ellipsis"},It={class:"page-container",key:"0"},Ct={key:0},$t={class:"status fade-list-item",key:"1"},wt={key:1},St=E({props:{state:null},setup(e){var q;const a=e,n=Ie(),i=(q=B.value[0])==null?void 0:q.id;h(()=>B.value.map(f=>f.key));const l=T(a.state.walletId||i),r=h(()=>R(l.value));h(()=>R(i));const y=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],u=T(l.value?y[0].name:null);z(()=>a.state.walletId,f=>{!f||(p.value=!1,l.value=f,u.value=y[0].name)});const v=()=>a.state.walletId=!1,b=()=>{p.value=!1,a.state.walletId=l.value+""},p=T(!a.state.walletId),w=h(()=>p.value&&B.value.length>1),V=T(0),c=()=>{var f,x;if(!p.value){p.value=!0;return}l.value!==(a.state.walletId||((f=B.value[0])==null?void 0:f.id))&&V.value++,l.value=a.state.walletId||((x=B.value[0])==null?void 0:x.id),p.value=!1},_=h(()=>({actions:[{name:a.state.walletId?"Switch":"Connect",icon:ue,run:b}],inline:!0})),d=h(()=>{var f;return l.value!==a.state.walletId?[]:(f=a.state.messageQueue)==null?void 0:f.filter(x=>!x.fulfilled)});Ce(ae.breakpoints,"verticalLayout");const S=T(null),K=(f,x)=>S.value=f-x;return z(()=>y.findIndex(f=>f.name===u.value),K),z(()=>B.value.findIndex(f=>f.id===l.value),K),(f,x)=>(t(),$(pe,{class:"connection-card flex-column no-scrollbar"},{header:I(()=>{var A,L;return[g("div",pt,[g("button",{type:"button",class:"info flex-row",onClick:x[0]||(x[0]=(...M)=>o(ne)&&o(ne)(...M)),disabled:!o(le)(e.state.origin,e.state.session)},[m(Qe,{img:(A=e.state.appInfo)==null?void 0:A.logo,icon:o(se)},null,8,["img","icon"]),g("div",ht,[g("div",bt,P(((L=e.state.appInfo)==null?void 0:L.name)||"Connector"),1),g("div",kt,P(e.state.origin),1)]),o(le)(e.state.origin,e.state.session)?(t(),$(W,{key:0,icon:o(Ee)},null,8,["icon"])):k("",!0)],8,xt),m(Re,{modelValue:e.state.walletId,"onUpdate:modelValue":x[1]||(x[1]=M=>e.state.walletId=M),default:o(i),exit:!0,active:!o(w),onSelectWallet:c,onExit:v},null,8,["modelValue","default","active"])]),m(je,{tabs:y,modelValue:u.value,"onUpdate:modelValue":x[2]||(x[2]=M=>u.value=M),disabled:!l.value},null,8,["modelValue","disabled"])]}),default:I(()=>[m(D,{vector:S.value,axis:"x"},{default:I(()=>[o(B).length?(t(),s("div",{class:"container-scroll",key:V.value},[m(F,{name:"fade-list"},{default:I(()=>[o(w)?(t(),$(Fe,{modelValue:l.value,"onUpdate:modelValue":x[3]||(x[3]=A=>l.value=A),class:"fade-list-item",key:"-1"},null,8,["modelValue"])):k("",!0),g("div",It,[m(D,{vector:S.value,axis:"x"},{default:I(()=>[(t(),s("div",{key:(l.value||"")+u.value,class:"content"},[u.value==="Requests"?(t(),s("div",Ct,[m(F,{name:"fade-list"},{default:I(()=>{var A;return[g("div",{class:"fade-list-item",key:"0",style:ee({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),((A=o(d))==null?void 0:A.length)===0&&e.state.walletId&&e.state.walletId===l.value?(t(),s("div",$t,"Connected")):k("",!0),l.value!==e.state.walletId?(t(),$(de,{options:o(_),class:"fade-list-item",key:"2"},{default:I(()=>[o(r)?(t(),$(Ae,{key:0,wallet:o(r)},null,8,["wallet"])):k("",!0)]),_:1},8,["options"])):k("",!0),(t(!0),s(C,null,O(o(d),L=>(t(),$(vt,{key:L.uuid,messageEntry:L,style:{padding:"var(--spacing)"},class:"flex-column fade-list-item"},null,8,["messageEntry"]))),128))]}),_:1})])):u.value==="Permissions"?(t(),s("div",wt,[m(F,{name:"fade-list"},{default:I(()=>[g("div",{class:"fade-list-item",key:"0",style:ee({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),m(gt,{state:e.state,walletId:l.value,class:"fade-list-item",key:"2"},null,8,["state","walletId"])]),_:1})])):k("",!0)]))]),_:1},8,["vector"])])]),_:1})])):(t(),$(de,{key:0,options:{action:{icon:o(Be),name:"Add wallet",run:()=>o(n).push("/add")}}},null,8,["options"]))]),_:1},8,["vector"])]),_:1}))}});var Vt=j(St,[["__scopeId","data-v-385ae859"]]);const Pt={class:"connect flex-column"},Tt={class:"bottom-info secondary-text",style:{opacity:"0.0","pointer-events":"none"}},jt=E({setup(e){const a=T(oe.value.findIndex(n=>n.origin===ie.origin&&n.session===ie.session));return(n,i)=>(t(),s("div",Pt,[m(G,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=l=>a.value=l),options:{align:"start",overscroll:!0},class:"connectors"},{default:I(()=>[(t(!0),s(C,null,O(o(oe),l=>(t(),s("div",{key:l.session,class:"connection-card-container fade-list-item"},[m(Vt,{state:l,class:"box"},null,8,["state"])]))),128))]),_:1},8,["modelValue"]),g("div",Tt,[g("div",null,"All Channels "+P(Object.keys(o(ce)).length),1),(t(!0),s(C,null,O(o(ce),(l,r)=>(t(),s("div",{key:r},P(l),1))),128))])]))}});var Nt=j(jt,[["__scopeId","data-v-2d1eb42c"]]);export{Nt as default};
//# sourceMappingURL=Connect.49da70e5.js.map
