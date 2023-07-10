import{ad as O,r as E,a6 as P,aq as W,U as F,ar as M,af as D,I as b,al as L,o as R}from"./entry.fcc50053.js";function j(e,n){let o,t,u;const i=E(!0),m=()=>{i.value=!0,u()};P(e,m,{flush:"sync"});const s=typeof n=="function"?n:n.get,d=typeof n=="function"?void 0:n.set,a=W((c,p)=>(t=c,u=p,{get(){return i.value&&(o=s(),i.value=!1),t(),o},set(r){d==null||d(r)}}));return Object.isExtensible(a)&&(a.trigger=m),a}function _(e){return O()?(D(e),!0):!1}function w(e){return typeof e=="function"?e():F(e)}const T=typeof window<"u",A=()=>{},k=q();function q(){var e;return T&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function B(e,n){function o(...t){return new Promise((u,i)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(u).catch(i)})}return o}function N(e,n={}){let o,t,u=A;const i=s=>{clearTimeout(s),u(),u=A};return s=>{const d=w(e),a=w(n.maxWait);return o&&i(o),d<=0||a!==void 0&&a<=0?(t&&(i(t),t=null),Promise.resolve(s())):new Promise((c,p)=>{u=n.rejectOnCancel?p:c,a&&!t&&(t=setTimeout(()=>{o&&i(o),t=null,c(s())},a)),o=setTimeout(()=>{t&&i(t),t=null,c(s())},d)})}}function J(e,n=200,o={}){return B(N(n,o),e)}function U(e,n,o={}){const{immediate:t=!0}=o,u=E(!1);let i=null;function m(){i&&(clearTimeout(i),i=null)}function s(){u.value=!1,m()}function d(...a){m(),u.value=!0,i=setTimeout(()=>{u.value=!1,i=null,e(...a)},w(n))}return t&&(u.value=!0,T&&d()),_(s),{isPending:M(u),start:d,stop:s}}function y(e){var n;const o=w(e);return(n=o==null?void 0:o.$el)!=null?n:o}const S=T?window:void 0,V=T?window.navigator:void 0;function h(...e){let n,o,t,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,t,u]=e,n=S):[n,o,t,u]=e,!n)return A;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const i=[],m=()=>{i.forEach(c=>c()),i.length=0},s=(c,p,r,l)=>(c.addEventListener(p,r,l),()=>c.removeEventListener(p,r,l)),d=P(()=>[y(n),w(u)],([c,p])=>{m(),c&&i.push(...o.flatMap(r=>t.map(l=>s(c,r,l,p))))},{immediate:!0,flush:"post"}),a=()=>{d(),m()};return _(a),a}let C=!1;function K(e,n,o={}){const{window:t=S,ignore:u=[],capture:i=!0,detectIframe:m=!1}=o;if(!t)return;k&&!C&&(C=!0,Array.from(t.document.body.children).forEach(r=>r.addEventListener("click",A)));let s=!0;const d=r=>u.some(l=>{if(typeof l=="string")return Array.from(t.document.querySelectorAll(l)).some(v=>v===r.target||r.composedPath().includes(v));{const v=y(l);return v&&(r.target===v||r.composedPath().includes(v))}}),c=[h(t,"click",r=>{const l=y(e);if(!(!l||l===r.target||r.composedPath().includes(l))){if(r.detail===0&&(s=!d(r)),!s){s=!0;return}n(r)}},{passive:!0,capture:i}),h(t,"pointerdown",r=>{const l=y(e);l&&(s=!r.composedPath().includes(l)&&!d(r))},{passive:!0}),m&&h(t,"blur",r=>{setTimeout(()=>{var l;const v=y(e);((l=t.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(v!=null&&v.contains(t.document.activeElement))&&n(r)},0)})].filter(Boolean);return()=>c.forEach(r=>r())}function $(e={}){var n;const{window:o=S}=e,t=(n=e.document)!=null?n:o==null?void 0:o.document,u=j(()=>null,()=>t==null?void 0:t.activeElement);return o&&(h(o,"blur",i=>{i.relatedTarget===null&&u.trigger()},!0),h(o,"focus",u.trigger,!0)),u}function z(){const e=E(!1);return L()&&R(()=>{e.value=!0}),e}function G(e){const n=z();return b(()=>(n.value,!!e()))}function Q(e={}){const{navigator:n=V,read:o=!1,source:t,copiedDuring:u=1500,legacy:i=!1}=e,m=["copy","cut"],s=G(()=>n&&"clipboard"in n),d=b(()=>s.value||i),a=E(""),c=E(!1),p=U(()=>c.value=!1,u);function r(){s.value?n.clipboard.readText().then(f=>{a.value=f}):a.value=I()}if(d.value&&o)for(const f of m)h(f,r);async function l(f=w(t)){d.value&&f!=null&&(s.value?await n.clipboard.writeText(f):v(f),a.value=f,c.value=!0,p.start())}function v(f){const g=document.createElement("textarea");g.value=f??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function I(){var f,g,x;return(x=(g=(f=document==null?void 0:document.getSelection)==null?void 0:f.call(document))==null?void 0:g.toString())!=null?x:""}return{isSupported:d,text:a,copied:c,copy:l}}function X(e,n={}){const o=$(n),t=b(()=>y(e));return{focused:b(()=>t.value&&o.value?t.value.contains(o.value):!1)}}export{J as a,X as b,Q as c,K as o,_ as t,y as u};
