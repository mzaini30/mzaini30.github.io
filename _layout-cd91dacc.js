import{S as t,i as a,s,w as o,x as e,y as n,z as l,j as r,k as c}from"./main-99a5d1a2.js";import{a as p,s as i}from"./api-ad30823f.js";import{c as d}from"./tools-c085b23f.js";function f(t){let a;const s=t[1].default,r=o(s,t,t[0],null);return{c(){r&&r.c()},m(t,s){r&&r.m(t,s),a=!0},p(t,[a]){r&&r.p&&1&a&&e(r,s,t,t[0],a,null,null)},i(t){a||(n(r,t),a=!0)},o(t){l(r,t),a=!1},d(t){r&&r.d(t)}}}function m(t,a,s){let o;r(t,c,t=>s(2,o=t));let{$$slots:e={},$$scope:n}=a;return(async()=>{if(localStorage.password){let t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\t\tselect count(*) as banyak\n\t\t\t\tfrom database_${p}\n\t\t\t\twhere password = "${d(localStorage.password)}"\n\t\t\t`)));let a=await fetch(i,{method:"post",body:t}).then(t=>t.json());a=await a,a[0].banyak<1&&o("/login")}else o("/login")})(),t.$$set=t=>{"$$scope"in t&&s(0,n=t.$$scope)},[n,e]}export default class extends t{constructor(t){super(),a(this,t,m,f,s,{})}}
