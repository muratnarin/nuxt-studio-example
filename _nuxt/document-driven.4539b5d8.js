import h from"./DocumentDrivenEmpty.cb23e007.js";import P from"./ContentRenderer.56bf25e6.js";import R from"./DocumentDrivenNotFound.8de83c2c.js";import{k as x,d as f,G as g,P as k,i as C,H as L,I as B,r as N,J as p,K as T,L as b,M as d,N as S,O as j,S as A,T as D,Q as E,R as $,U as u,V as w,b as m,c as H,g as _,w as y,W as v}from"./entry.fcc50053.js";import{u as O}from"./head.e43e113a.js";import"./ContentRendererMarkdown.04cccb1e.js";const q=f({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,e){const t=x(),o=g(k),a=o===C()?L():o,s=B(()=>u(n.name)??a.meta.layout??"default"),r=N();return e.expose({layoutRef:r}),()=>{const l=t.deferHydration(),c=s.value&&s.value in p,i=a.meta.layoutTransition??T;return b(D,c&&i,{default:()=>d(A,{suspensible:!0,onResolve:()=>{j(l)}},{default:()=>d(I,{layoutProps:S(e.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!n.name,hasTransition:!!i},e.slots)})}).default()}}}),I=f({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(n,e){const t=n.name;return n.shouldProvide&&E($,{isCurrent:o=>t===(o.meta.layout??"default")}),()=>{var o,a;return!t||typeof t=="string"&&!(t in p)?(a=(o=e.slots).default)==null?void 0:a.call(o):d(p[t],n.layoutProps,e.slots)}}}),M={class:"document-driven-page"},U=f({__name:"document-driven",setup(n){const{page:e,layout:t}=w();return e.value,O(e),(o,a)=>{const s=h,r=P,l=R,c=q;return m(),H("div",M,[_(c,{name:u(t)||"default"},{default:y(()=>[u(e)?(m(),v(r,{key:u(e)._id,value:u(e)},{empty:y(({value:i})=>[_(s,{value:i},null,8,["value"])]),_:1},8,["value"])):(m(),v(l,{key:1}))]),_:1},8,["name"])])}}});export{U as default};
