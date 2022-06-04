import{k as a,o as t,c as o,l as p}from"./index.7087c718.js";import{b as n}from"./route-block.b5bad31b.js";const e={class:"markdown-body"},c=p(`<h1>Menjadikan Vercel sebagai Backend JavaScript</h1><p>Masukkan ini di <code>vercel.json</code>:</p><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;builds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./index.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;use&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vercel/node&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/(.*)&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><p>Lalu, kita buat program backendnya di <code>index.js</code>.</p>`,4),u=[c],_={meta:[]},r={name:"vercel-backend",setup(l,{expose:s}){return a({meta:[]}),s({frontmatter:{meta:[]}}),(i,d)=>(t(),o("div",e,u))}};typeof n=="function"&&n(r);export{r as default,_ as frontmatter};
