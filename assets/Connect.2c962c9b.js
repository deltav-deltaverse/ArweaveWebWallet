import{C as te,L as de}from"./ListContainer.e8e3c04c.js";import{h as A,d as y,j as e,k as a,N as r,I as f,u as s,O as ae,R as p,a4 as ne,a5 as se,l as v,F as k,n as B,i as ve,H as b,Q as P,r as C,w as E,V as _e,W as me,K as ge,P as N,am as ye,M as pe,a6 as D,p as F}from"./vendor.5e420f6e.js";import{_ as T,p as M,m as le,b as O,q as V,o as R,I as oe,i as fe,r as xe,T as q,s as he,t as ie,v as H,w as ke,B as be,x as G,y as Q,z as Ie,C as we,D as L,E as J,G as X,H as Y,J as $e}from"./index.a82f2b6e.js";import{I as ue}from"./y.74c958e7.js";import{P as Ce}from"./ProfilePreview.155388b3.js";import{I as Se}from"./launch.c55a64b7.js";import{O as K}from"./OverlayPrompt.93e31670.js";const ce=t=>(ne("data-v-4a1a07c6"),t=t(),se(),t),Ve={class:"wallet-selector"},Pe=ce(()=>v("div",{class:"exit-background"},null,-1)),Te=ce(()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[v("path",{d:"M0 0h24v24H0V0z",fill:"none"}),v("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),Be=[Pe,Te],Ae=A({props:{modelValue:String,exit:Boolean,active:Boolean},emits:["update:modelValue","selectWallet","exit"],setup(t,{emit:o}){const i=t,l=y({get(){return i.modelValue},set(d){o("update:modelValue",d)}}),n=y(()=>M(l.value)?.key);return(d,u)=>(e(),a("div",Ve,[r(O,null,{default:f(()=>[s(l)?(e(),a("button",{key:0,type:"button",onClick:u[0]||(u[0]=c=>d.$emit("selectWallet")),class:ae(["tab",{active:t.active}])},[r(le,{address:s(n)},null,8,["address"])],2)):p("",!0)]),_:1}),t.exit?(e(),a("button",{key:0,class:"exit",type:"button",onClick:u[1]||(u[1]=c=>d.$emit("exit"))},Be)):p("",!0)]))}});var Ee=T(Ae,[["__scopeId","data-v-4a1a07c6"]]);const Oe={class:"wallet-tabs"},Ne=["onClick"],We=A({props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:o}){const i=t,l=y({get(){return i.modelValue},set(d){o("update:modelValue",d)}}),n=y(()=>V.value.findIndex(d=>d.id===l.value));return(d,u)=>(e(),a("div",Oe,[r(te,{modelValue:s(n),"onUpdate:modelValue":u[0]||(u[0]=c=>ve(n)?n.value=c:null),options:{align:"center",overscroll:!0,immediate:!0}},{default:f(()=>[(e(!0),a(k,null,B(s(V),c=>(e(),a("button",{key:c.id,type:"button",onClick:g=>l.value=c.id,class:ae(["tab",{active:c.id==s(l)}])},[r(le,{address:c.key},null,8,["address"])],10,Ne))),128))]),_:1},8,["modelValue"])]))}});var je=T(We,[["__scopeId","data-v-35e1b97b"]]);const ze={class:"icon-background"},Le={props:["icon","img"],setup(t){return(o,i)=>(e(),a("div",ze,[t.img?(e(),b(R,{key:0,class:"page-logo",icon:t.img},null,8,["icon"])):(e(),b(R,{key:1,class:"page-logo placeholder",icon:t.icon},null,8,["icon"]))]))}};var Me=T(Le,[["__scopeId","data-v-162a9dbe"]]);const Re={class:"tx-card-extension"},De={key:0,class:"flex-row",style:{"justify-content":"space-between"}},Ke={key:0},Ue={key:1},Fe={key:1,class:"tags secondary-text no-scrollbar"},qe={props:["tx"],setup(t){return y(()=>oe.breakpoints.verticalLayout),(o,i)=>(e(),a("div",Re,[t.tx.tags.length||t.tx.data_size?(e(),a("div",De,[t.tx.tags.length?(e(),a("div",Ke,"Tags:")):p("",!0),t.tx.data_size?(e(),a("div",Ue,"Data: "+P(s(fe)(t.tx.data_size)),1)):p("",!0)])):p("",!0),t.tx.tags.length?(e(),a("ul",Fe,[(e(!0),a(k,null,B(t.tx.tags,l=>(e(),a("li",null,P(l.name+" | "+l.value),1))),256))])):p("",!0)]))}};var Z=T(qe,[["__scopeId","data-v-5ee7fb30"]]);const He={class:"actions-list flex-row"},Ge=["onClick"],Qe=A({props:{actions:null},setup(t){return(o,i)=>(e(),a("div",He,[(e(!0),a(k,null,B(t.actions,l=>(e(),a("button",{key:l.name,onClick:l.run,type:"button",class:"action flex-row"},[r(R,{icon:l.icon},null,8,["icon"]),v("div",null,P(l.name),1)],8,Ge))),128))]))}});var ee=T(Qe,[["__scopeId","data-v-7477f216"]]);const re=t=>(ne("data-v-558bc70a"),t=t(),se(),t),Je={class:"permission-card"},Xe=re(()=>v("span",null,"Sign transaction",-1)),Ye=re(()=>v("span",null,"Sign transaction and upload",-1)),Ze=N(" Share the public key "),et=N(" Share the arweave config "),tt=N(" Sign data "),at=N(" Decrypt data "),nt=A({props:{messageEntry:null},setup(t){const o=t,i=C(null),l=y(()=>{if(i.value?.method!=="signTransaction"&&i.value?.method!=="dispatch")return;const u=i.value?.params?.[0],c=u.tags?.map(({name:g,value:I})=>({name:window.atob(g),value:window.atob(I)}));return{...u,tags:c}});E(()=>o.messageEntry,async()=>{i.value=await xe(o.messageEntry)},{immediate:!0});const n=[{name:"Accept",icon:ue,run:()=>o.messageEntry.status="accepted"},{name:"Reject",icon:he,run:()=>o.messageEntry.status="rejected"}],d=[{name:"Pending",icon:ie,run:()=>{}}];return(u,c)=>_e((e(),a("div",Je,[i.value?.method==="signTransaction"?(e(),a(k,{key:0},[Xe,r(q,{tx:s(l)},null,8,["tx"]),r(Z,{tx:s(l)},null,8,["tx"])],64)):p("",!0),i.value?.method==="dispatch"?(e(),a(k,{key:1},[Ye,r(q,{tx:s(l)},null,8,["tx"]),r(Z,{tx:s(l)},null,8,["tx"])],64)):i.value?.method==="getPublicKey"?(e(),a(k,{key:2},[Ze],64)):i.value?.method==="getArweaveConfig"?(e(),a(k,{key:3},[et],64)):i.value?.method==="sign"?(e(),a(k,{key:4},[tt],64)):i.value?.method==="decrypt"?(e(),a(k,{key:5},[at],64)):p("",!0),r(ge,{name:"fade",mode:"out-in"},{default:f(()=>[t.messageEntry.status?(e(),b(ee,{key:1,actions:d})):(e(),b(ee,{key:0,actions:n}))]),_:1})],512)),[[me,i.value]])}});var st=T(nt,[["__scopeId","data-v-558bc70a"]]);const lt={class:"flex-column no-scrollbar"},ot=["disabled","onClick"],it=N(" Apply "),ut=A({props:{state:null,walletId:null},setup(t){const o=t,i={connect:"Connect automatically",signTransaction:"Sign transaction",getPublicKey:"Share public key",sign:"Sign arbitrary data",decrypt:"Decrypt data",getArweaveConfig:"Share arweave gateway configuration"},l=_=>Object.getOwnPropertyNames(Object.getPrototypeOf(_?.messageRunner||{})).filter(m=>{if(!(m==="constructor"||m==="methodMap"||!_))return!H(_,m)?.unavailable}).map(m=>({name:m,displayName:i[m]||m,disabled:H(_,m)?.userIntent})),n=y(()=>M(o.walletId)),d=y(()=>[...l(n.value)]),u=_=>g.value&&(g.value[_]=!g.value[_]),c=ke("connectionSettings:",o.state.origin,{}),g=C(void 0),I=C(void 0);E(n,_=>{!_?.uuid||(c.state.value||={},I.value=c.state.value[_.uuid]||={},g.value={...I.value})},{immediate:!0});const S=([_,m])=>{const x=I.value?.[_]||!1;if(m!==x)return!0},W=y(()=>g.value?Object.entries(g.value).find(S):!1),j=()=>{if(!g.value||!I.value)return!1;Object.entries(g.value).filter(S).forEach(([_,m])=>I.value&&(I.value[_]=m))};return(_,m)=>(e(),a("div",lt,[(e(!0),a(k,null,B(s(d),x=>(e(),a("button",{key:x.name,disabled:x.disabled,class:"row method",onClick:z=>u(x.name)},[v("div",null,P(x.displayName),1),r(O,{vector:g.value[x.name]?1:-1,axis:"y"},{default:f(()=>[(e(),a("div",{key:g.value[x.name]},P(g.value[x.name]?"Allow":"Ask"),1))]),_:2},1032,["vector"])],8,ot))),128)),r(O,null,{default:f(()=>[s(W)?(e(),b(be,{key:0,onClick:m[0]||(m[0]=x=>j())},{default:f(()=>[it]),_:1})):p("",!0)]),_:1})]))}});var ct=T(ut,[["__scopeId","data-v-41a1ea1c"]]);const rt={class:"flex-row"},dt=["disabled"],vt={style:{"min-width":"0"}},_t={class:"ellipsis"},mt={class:"secondary-text ellipsis"},gt={class:"page-container",key:"0"},yt={key:0},pt={class:"status fade-list-item",key:"1"},ft={key:1},xt=A({props:{state:null},setup(t){const o=t,i=ye(),l=V.value[0]?.id;y(()=>V.value.map(h=>h.key));const n=C(o.state.walletId||l),d=y(()=>M(n.value));y(()=>M(l));const u=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],c=C(n.value?u[0].name:null);E(()=>o.state.walletId,h=>{!h||(S.value=!1,n.value=h,c.value=u[0].name)});const g=()=>o.state.walletId=!1,I=()=>{S.value=!1,o.state.walletId=n.value+""},S=C(!o.state.walletId),W=y(()=>S.value&&V.value.length>1),j=C(0),_=()=>{if(!S.value){S.value=!0;return}n.value!==(o.state.walletId||V.value[0]?.id)&&j.value++,n.value=o.state.walletId||V.value[0]?.id,S.value=!1},m=y(()=>({actions:[{name:o.state.walletId?"Switch":"Connect",icon:ue,run:I}]})),x=y(()=>n.value!==o.state.walletId?[]:o.state.messageQueue?.filter(h=>!h.fulfilled));pe(oe.breakpoints,"verticalLayout");const z=C(null),U=(h,w)=>z.value=h-w;return E(()=>u.findIndex(h=>h.name===c.value),U),E(()=>V.value.findIndex(h=>h.id===n.value),U),(h,w)=>(e(),b(de,{class:"connection-card flex-column no-scrollbar"},{header:f(()=>[v("div",rt,[v("button",{type:"button",class:"info flex-row",onClick:w[0]||(w[0]=(...$)=>s(G)&&s(G)(...$)),disabled:!s(Q)(t.state.origin,t.state.session)},[r(Me,{img:t.state.appInfo?.logo,icon:s(ie)},null,8,["img","icon"]),v("div",vt,[v("div",_t,P(t.state.appInfo?.name||"Connector"),1),v("div",mt,P(t.state.origin),1)]),s(Q)(t.state.origin,t.state.session)?(e(),b(R,{key:0,icon:s(Se)},null,8,["icon"])):p("",!0)],8,dt),r(Ee,{modelValue:t.state.walletId,"onUpdate:modelValue":w[1]||(w[1]=$=>t.state.walletId=$),exit:!0,active:!s(W),onSelectWallet:_,onExit:g},null,8,["modelValue","active"])]),r(Ie,{tabs:u,modelValue:c.value,"onUpdate:modelValue":w[2]||(w[2]=$=>c.value=$),disabled:!n.value},null,8,["modelValue","disabled"])]),default:f(()=>[r(O,{vector:z.value,axis:"x"},{default:f(()=>[s(V).length?(e(),a("div",{class:"container-scroll",key:j.value},[r(D,{name:"fade-list"},{default:f(()=>[s(W)?(e(),b(je,{modelValue:n.value,"onUpdate:modelValue":w[3]||(w[3]=$=>n.value=$),class:"fade-list-item",key:"-1"},null,8,["modelValue"])):p("",!0),v("div",gt,[r(O,{vector:z.value,axis:"x"},{default:f(()=>[(e(),a("div",{key:(n.value||"")+c.value,class:"content"},[c.value==="Requests"?(e(),a("div",yt,[r(D,{name:"fade-list"},{default:f(()=>[v("div",{class:"fade-list-item",key:"0",style:F({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),s(x)?.length===0&&t.state.walletId&&t.state.walletId===n.value?(e(),a("div",pt,"Connected")):p("",!0),n.value!==t.state.walletId?(e(),b(K,{options:s(m),inline:!0,class:"fade-list-item",key:"2"},{default:f(()=>[s(d)?(e(),b(Ce,{key:0,wallet:s(d)},null,8,["wallet"])):p("",!0)]),_:1},8,["options"])):p("",!0),(e(!0),a(k,null,B(s(x),$=>(e(),b(st,{key:$.uuid,messageEntry:$,style:{padding:"var(--spacing)"},class:"flex-column fade-list-item"},null,8,["messageEntry"]))),128))]),_:1})])):c.value==="Permissions"?(e(),a("div",ft,[r(D,{name:"fade-list"},{default:f(()=>[v("div",{class:"fade-list-item",key:"0",style:F({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),r(ct,{state:t.state,walletId:n.value,class:"fade-list-item",key:"2"},null,8,["state","walletId"])]),_:1})])):p("",!0)]))]),_:1},8,["vector"])])]),_:1})])):(e(),b(K,{key:0,options:{action:{icon:s(we),name:"Add wallet",run:()=>s(i).push("/add")}}},null,8,["options"]))]),_:1},8,["vector"])]),_:1}))}});var ht=T(xt,[["__scopeId","data-v-4700489c"]]);const kt={class:"connect flex-column"},bt={key:0,class:"connection-card-container fade-list-item",style:{position:"relative"}},It={class:"bottom-info secondary-text",style:{opacity:"0.0","pointer-events":"none","touch-action":"none"}},wt=A({setup(t){const o=y(()=>({action:{icon:$e,name:"Connect to "+l.value,run:()=>X("connect")}})),i=C(L.value.findIndex(n=>n.origin===J.value.origin&&n.session===J.value.session)),l=C();return X("state").then(n=>{!n||(l.value=n.origin,i.value===-1&&(i.value=L.value.findIndex(d=>d.origin===n.origin)))}),(n,d)=>(e(),a("div",kt,[r(te,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=u=>i.value=u),options:{align:"start",overscroll:!0},class:"connectors"},{default:f(()=>[!s(L).length&&l.value?(e(),a("div",bt,[r(K,{options:s(o)},null,8,["options"])])):p("",!0),(e(!0),a(k,null,B(s(L),u=>(e(),a("div",{key:u.origin+u.session,class:"connection-card-container fade-list-item"},[r(ht,{state:u,class:"box"},null,8,["state"])]))),128))]),_:1},8,["modelValue"]),v("div",It,[v("div",null,"All Channels "+P(Object.keys(s(Y)).length),1),(e(!0),a(k,null,B(s(Y),(u,c)=>(e(),a("div",{key:c},P(u),1))),128))])]))}});var At=T(wt,[["__scopeId","data-v-e2c86538"]]);export{At as default};
//# sourceMappingURL=Connect.2c962c9b.js.map
