import{S as t,i as a,s as e,e as s,d as l,h as n,a as i,c as o,f as u,k as c,l as r,p as d,n as p,j as m,r as b,m as f,u as h,o as v,v as g}from"./main-d249ac2a.js";import{d as w,s as _,b as y,e as $,c as j,t as x}from"./index-c0713b15.js";function q(t,a,e){const s=t.slice();return s[13]=a[e],s}function L(t){let a,e;return{c(){a=s("option"),a.__value=e=t[13].label,a.value=a.__value},m(t,e){l(t,a,e)},p(t,s){16&s&&e!==(e=t[13].label)&&(a.__value=e,a.value=a.__value)},d(t){t&&n(a)}}}function D(t){let a,e,f,h,v,g,w,_,y,$,j,x,D,F,H,T,k=t[4],z=[];for(let a=0;a<k.length;a+=1)z[a]=L(q(t,k,a));return{c(){a=s("form"),e=s("div"),f=s("input"),h=i(),v=s("div"),g=s("input"),w=i(),_=s("datalist");for(let t=0;t<z.length;t+=1)z[t].c();y=i(),$=s("div"),j=s("textarea"),x=i(),D=s("div"),D.innerHTML='<input type="submit" value="Publish" class="btn btn-success"/>',F=i(),o(f,"class","form-control"),f.required=!0,o(f,"placeholder","Judul"),o(e,"class","mb-3"),o(g,"class","form-control"),g.required=!0,o(g,"placeholder","Label"),o(g,"list","label"),o(v,"class","mb-3"),o(_,"id","label"),o(j,"class","form-control"),o(j,"placeholder","Isi"),o($,"class","mb-3"),o(D,"class","mb-3"),document.title="Tulis"},m(s,n){l(s,a,n),u(a,e),u(e,f),c(f,t[1]),u(a,h),u(a,v),u(v,g),c(g,t[2]),u(a,w),u(a,_);for(let t=0;t<z.length;t+=1)z[t].m(_,null);u(a,y),u(a,$),u($,j),t[8](j),c(j,t[3]),u(a,x),u(a,D),l(s,F,n),H||(T=[r(f,"input",t[6]),r(g,"input",t[7]),r(j,"input",t[9]),r(a,"submit",d(t[5]))],H=!0)},p(t,[a]){if(2&a&&f.value!==t[1]&&c(f,t[1]),4&a&&g.value!==t[2]&&c(g,t[2]),16&a){let e;for(k=t[4],e=0;e<k.length;e+=1){const s=q(t,k,e);z[e]?z[e].p(s,a):(z[e]=L(s),z[e].c(),z[e].m(_,null))}for(;e<z.length;e+=1)z[e].d(1);z.length=k.length}8&a&&c(j,t[3])},i:p,o:p,d(e){e&&n(a),m(z,e),t[8](null),e&&n(F),H=!1,b(T)}}}function F(t,a,e){let s,l;f(t,v,t=>e(10,s=t));let[n,i,o,u]=["","","",[]];h(()=>(()=>{const t=()=>e(0,l.style.height=window.innerHeight-250+"px",l);t(),window.addEventListener("resize",t)})());(async()=>{const t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\tselect distinct label\n\t\t\tfrom database_${w}\n\t\t\torder by label\n\t\t`)));let a=await fetch(_,{method:"post",body:t}).then(t=>t.json());a=await a,e(4,u=a)})();return[l,n,i,o,u,async()=>{const t=new FormData;t.append("sql",y(`\n\t\t\tinsert into database_${w} (slug, judul, tanggal, isi, label)\n\t\t\tvalues ("${$(n)}", "${j(n)}", "${x()}", "${j(o)}", "${j(i).toLowerCase().replace(/ /g,"-")}")\n\t\t`));let a=await fetch(_,{method:"post",body:t});a=await a,a&&s("/admin/edit/"+$(n))},function(){n=this.value,e(1,n)},function(){i=this.value,e(2,i)},function(t){g[t?"unshift":"push"](()=>{l=t,e(0,l)})},function(){o=this.value,e(3,o)}]}export default class extends t{constructor(t){super(),a(this,t,F,D,e,{})}}
