import{S as s,i as a,s as t,e,a as o,g as n,c as r,d as u,k as c,l as i,p as l,n as d,h as p,r as m,m as f,u as h,q as b,o as w,B as k,v as y}from"./main-d6d381cb.js";import{b as g,f as v,c as j,s as q}from"./index-c0713b15.js";function x(s){let a,t,f,h,b,w;return{c(){a=e("form"),t=e("div"),f=e("input"),h=o(),n(f,"type","password"),n(f,"class","form-control"),n(f,"placeholder","Masukkan password"),f.required=!0,n(t,"class","form-group"),document.title="Login"},m(e,o){r(e,a,o),u(a,t),u(t,f),s[3](f),c(f,s[0]),r(e,h,o),b||(w=[i(f,"input",s[4]),i(a,"submit",l(s[2]))],b=!0)},p(s,[a]){1&a&&f.value!==s[0]&&c(f,s[0])},i:d,o:d,d(t){t&&p(a),s[3](null),t&&p(h),b=!1,m(w)}}}function S(s,a,t){let e,o;f(s,b,s=>t(5,e=s)),f(s,w,s=>t(6,o=s));let n,r="";h(()=>n.focus());return[r,n,async()=>{let s=new FormData;s.append("sql",g(`\n\t select count(*) as banyak\n\t from database_${v}\n\t where password = "${j(r)}"\n\t`));let a=await fetch(q,{method:"post",body:s}).then(s=>s.json());a=await a,a[0].banyak>0?(localStorage.setItem("password",r),k(b,e=!0,e),o("/")):t(0,r="")},function(s){y[s?"unshift":"push"](()=>{n=s,t(1,n)})},function(){r=this.value,t(0,r)}]}export default class extends s{constructor(s){super(),a(this,s,S,x,t,{})}}
