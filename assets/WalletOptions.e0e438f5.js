import{_ as i,c as v,W as f,E as m,G as w}from"./index.610930d3.js";import{j as s,o as n,f as a,g as t,k as d,s as p}from"./vendor.9d5857d8.js";const W={components:{AddressIcon:v,WalletInfo:f},props:["wallet"],setup(){return{deleteWallet:m,downloadWallet:w}}},u={class:"wallet-options"},k={class:"left"},I={class:"profile-info"},x={class:"content"},j={class:"bottom"};function y(C,l,e,o,A,B){const c=s("AddressIcon"),_=s("WalletInfo");return n(),a("div",u,[t("div",k,[d(c,{class:"profile",address:e.wallet.key},null,8,["address"]),t("div",I,[d(_,{wallet:e.wallet},null,8,["wallet"])])]),t("div",x,[t("div",j,[e.wallet.jwk?(n(),a("div",{key:0,onClick:l[0]||(l[0]=r=>o.downloadWallet(e.wallet))},"Download")):p("",!0),t("div",{onClick:l[1]||(l[1]=r=>o.deleteWallet(e.wallet))},"Delete")])])])}var g=i(W,[["render",y],["__scopeId","data-v-0e78f481"]]);export{g as W};
